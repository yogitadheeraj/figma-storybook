import "dotenv/config";
import express from "express";
import cors from "cors";
import crypto from "crypto";
import { exec } from "child_process";
import axios from "axios";
import type { AddressInfo } from "net";

const app = express();
const port = Number(process.env.PORT || 5050);
const secret = process.env.FIGMA_WEBHOOK_SECRET || "change-this-secret";
const debugEnabled = process.env.DEBUG_API === "1" || process.env.DEBUG_API === "true";

type FigmaApiNode = {
  id: string;
  name: string;
  type: string;
  absoluteBoundingBox?: { width: number; height: number };
  children?: FigmaApiNode[];
};

type FigmaPagesRequest = {
  fileKey?: string;
  token?: string;
  pageRegex?: string;
};

app.use(cors());
app.use(express.json({ limit: "2mb" }));

function debugLog(message: string, meta?: Record<string, unknown>) {
  if (!debugEnabled) return;
  if (meta) {
    console.log(`[api:debug] ${message}`, meta);
    return;
  }
  console.log(`[api:debug] ${message}`);
}

function summarizeBody(body: unknown) {
  if (!body || typeof body !== "object") return body;
  const source = body as Record<string, unknown>;
  const summary: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(source)) {
    if (key.toLowerCase().includes("token") || key.toLowerCase().includes("secret")) {
      summary[key] = "***redacted***";
    } else {
      summary[key] = value;
    }
  }
  return summary;
}

app.use((req, res, next) => {
  const start = Date.now();

  debugLog("incoming request", {
    method: req.method,
    path: req.path,
    query: req.query,
    body: summarizeBody(req.body)
  });

  res.on("finish", () => {
    debugLog("request complete", {
      method: req.method,
      path: req.path,
      status: res.statusCode,
      durationMs: Date.now() - start
    });
  });

  next();
});

function flattenNodes(node: FigmaApiNode, pageName: string, output: Array<Record<string, unknown>> = []) {
  if (["FRAME", "COMPONENT", "INSTANCE", "COMPONENT_SET", "SECTION", "TEXT"].includes(node.type)) {
    output.push({
      pageName,
      nodeId: node.id,
      nodeName: node.name,
      nodeType: node.type,
      width: node.absoluteBoundingBox?.width,
      height: node.absoluteBoundingBox?.height
    });
  }

  node.children?.forEach((child) => flattenNodes(child, pageName, output));
  return output;
}

async function figmaGetWithRetry(url: string, token: string, maxRetries = 4) {
  let delayMs = 1500;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      debugLog("figma request", { url, attempt, maxRetries });
      return await axios.get(url, {
        headers: { "X-Figma-Token": token },
        timeout: 30000
      });
    } catch (error: any) {
      const status = error?.response?.status;
      const retryAfter = Number(error?.response?.headers?.["retry-after"] || 0);

      if (status === 429 && attempt < maxRetries) {
        const waitMs = retryAfter > 0 ? Math.min(retryAfter * 1000, 120000) : delayMs;
        debugLog("figma 429 retry", { attempt, waitMs, retryAfter });
        await new Promise((resolve) => setTimeout(resolve, waitMs));
        delayMs = Math.min(delayMs * 2, 10000);
        continue;
      }

      debugLog("figma request failed", {
        status,
        message: error?.message
      });
      throw error;
    }
  }

  throw new Error("Failed to fetch Figma data after retries");
}

function isValidSignature(body: unknown, signature?: string) {
  if (!signature) return false;

  const hash = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(body))
    .digest("hex");

  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(signature));
}

app.get("/health", (_, res) => {
  res.json({ ok: true, service: "figma-storybook-autosync-enterprise" });
});

app.post("/api/figma/pages", async (req, res) => {
  try {
    const body = (req.body ?? {}) as FigmaPagesRequest;
    const fileKey = body.fileKey || process.env.FIGMA_FILE_ID;
    const token = body.token || process.env.FIGMA_TOKEN;
    const regex = new RegExp(body.pageRegex || process.env.FIGMA_ALLOWED_PAGE_REGEX || ".*");

    if (!fileKey || !token) {
      return res.status(400).json({
        message: "Missing Figma credentials",
        details: "Provide fileKey/token in request body or FIGMA_FILE_ID/FIGMA_TOKEN in environment"
      });
    }

    const response = await figmaGetWithRetry(`https://api.figma.com/v1/files/${fileKey}`, token);
    const file = response.data;

    const pages = (file?.document?.children || [])
      .filter((page: FigmaApiNode) => regex.test(page.name))
      .map((page: FigmaApiNode) => ({
        id: page.id,
        name: page.name,
        type: page.type,
        updated: "Live Figma API",
        nodes: page.children?.flatMap((node) => flattenNodes(node, page.name)) || []
      }));

    return res.json({
      ok: true,
      fileKey,
      pageCount: pages.length,
      pages
    });
  } catch (error: any) {
    const status = error?.response?.status;
    const message = error?.response?.data?.message || error?.message || "Failed to fetch pages from Figma";
    return res.status(status || 500).json({ ok: false, message });
  }
});

app.post("/api/figma/sync", (_, res) => {
  debugLog("running enterprise sync command");
  exec("npm run enterprise:sync", (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      return res.status(500).json({
        ok: false,
        message: "Enterprise sync failed",
        error: stderr || error.message
      });
    }

    return res.json({
      ok: true,
      message: "Enterprise sync completed",
      output: stdout
    });
  });
});

app.post("/webhooks/figma", (req, res) => {
  const signature = req.header("x-enterprise-signature");

  if (!isValidSignature(req.body, signature)) {
    return res.status(401).json({ message: "Invalid webhook signature" });
  }

  exec("npm run enterprise:sync", (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      return res.status(500).json({ message: "Sync failed", error: stderr });
    }

    res.json({ message: "Sync completed", output: stdout });
  });
});

const server = app.listen(port);

server.on("listening", () => {
  console.log(`✅ Webhook server running on http://localhost:${port}`);
  if (debugEnabled) {
    console.log("🛠️  Backend debug mode is enabled (DEBUG_API=true)");
  }
  const address = server.address() as AddressInfo | string | null;
  if (typeof address === "object" && address) {
    debugLog("server listening", { port: address.port });
  }
});

server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.code === "EADDRINUSE") {
    console.error(`❌ Port ${port} is already in use. Stop the running process or set a different PORT.`);
    process.exit(1);
  }
  console.error("❌ Backend server error", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Promise rejection", reason);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught exception", error);
  process.exit(1);
});
