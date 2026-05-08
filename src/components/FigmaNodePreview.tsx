import React, { useState, useCallback, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Frame,
  Component,
  LayoutGrid,
  Type,
  Image,
  Circle,
  Square,
  Minus,
  Star,
  Layers,
  Box,
  Group,
  Triangle
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type FigmaNode = {
  id: string;
  name: string;
  type: string;
  scrollBehavior?: string;
  blendMode?: string;
  absoluteBoundingBox?: { x: number; y: number; width: number; height: number };
  children?: FigmaNode[];
  fills?: Array<{ type?: string; color?: { r: number; g: number; b: number; a?: number } }>;
  style?: Record<string, unknown>;
  [key: string]: unknown;
};

export type FigmaNodePreviewProps = {
  /** Root document node (pass `file.document`) */
  document?: FigmaNode;
  /** Fallback flat props when document tree is not available */
  pageName?: string;
  nodeName?: string;
  nodeId?: string;
  nodeType?: string;
  width?: number;
  height?: number;
  figmaUrl?: string;
  autoLoadDocument?: boolean;
};

// ─── Icon map ────────────────────────────────────────────────────────────────

const NODE_ICON: Record<string, React.ReactNode> = {
  DOCUMENT:      <Layers      size={13} className="shrink-0 text-[#a259ff]" />,
  CANVAS:        <LayoutGrid  size={13} className="shrink-0 text-[#a259ff]" />,
  SECTION:       <Box         size={13} className="shrink-0 text-[#ff9900]" />,
  FRAME:         <Frame       size={13} className="shrink-0 text-[#0acf97]" />,
  GROUP:         <Group       size={13} className="shrink-0 text-[#adb5bd]" />,
  COMPONENT:     <Component   size={13} className="shrink-0 text-[#a259ff]" />,
  COMPONENT_SET: <LayoutGrid  size={13} className="shrink-0 text-[#a259ff]" />,
  INSTANCE:      <Component   size={13} className="shrink-0 text-[#7b61ff]" />,
  TEXT:          <Type        size={13} className="shrink-0 text-[#adb5bd]" />,
  RECTANGLE:     <Square      size={13} className="shrink-0 text-[#adb5bd]" />,
  ELLIPSE:       <Circle      size={13} className="shrink-0 text-[#adb5bd]" />,
  VECTOR:        <Triangle    size={13} className="shrink-0 text-[#adb5bd]" />,
  LINE:          <Minus       size={13} className="shrink-0 text-[#adb5bd]" />,
  STAR:          <Star        size={13} className="shrink-0 text-[#adb5bd]" />,
  IMAGE:         <Image       size={13} className="shrink-0 text-[#adb5bd]" />,
};

function nodeIcon(type: string) {
  return NODE_ICON[type] ?? <Square size={13} className="shrink-0 text-[#adb5bd]" />;
}

// ─── Layer tree node ─────────────────────────────────────────────────────────

type LayerRowProps = {
  node: FigmaNode;
  depth: number;
  selectedId: string | null;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
  onSelect: (node: FigmaNode) => void;
};

function LayerRow({ node, depth, selectedId, expandedIds, onToggle, onSelect }: LayerRowProps) {
  const hasChildren = !!node.children?.length;
  const expanded = expandedIds.has(node.id);
  const selected = selectedId === node.id;

  return (
    <>
      <div
        className={`group flex cursor-pointer select-none items-center gap-1 rounded px-1 py-[3px] text-[12px] leading-tight transition-colors
          ${selected ? "bg-[#18a0fb] text-white" : "text-[#e0e0e0] hover:bg-[#2c2c2c]"}`}
        style={{ paddingLeft: `${8 + depth * 16}px` }}
        onClick={() => onSelect(node)}
      >
        <span
          className="flex h-4 w-4 shrink-0 items-center justify-center"
          onClick={(e) => { if (hasChildren) { e.stopPropagation(); onToggle(node.id); } }}
        >
          {hasChildren
            ? expanded
              ? <ChevronDown size={12} className={selected ? "text-white" : "text-[#888]"} />
              : <ChevronRight size={12} className={selected ? "text-white" : "text-[#888]"} />
            : null}
        </span>

        <span className={selected ? "text-white" : ""}>
          {nodeIcon(node.type)}
        </span>

        <span className="ml-1 truncate" title={node.name}>
          {node.name}
        </span>
      </div>

      {hasChildren && expanded &&
        node.children!.map((child) => (
          <LayerRow
            key={child.id}
            node={child}
            depth={depth + 1}
            selectedId={selectedId}
            expandedIds={expandedIds}
            onToggle={onToggle}
            onSelect={onSelect}
          />
        ))
      }
    </>
  );
}

// ─── Detail panel ─────────────────────────────────────────────────────────────

function DetailPanel({ node, figmaFileId }: { node: FigmaNode; figmaFileId?: string }) {
  const bb = node.absoluteBoundingBox;
  const encodedId = node.id.replace(":", "-");
  const figmaUrl = figmaFileId
    ? `https://www.figma.com/file/${figmaFileId}?node-id=${encodedId}`
    : undefined;

  const props: { label: string; value: string }[] = [
    { label: "Type",   value: node.type },
    { label: "ID",     value: node.id },
    ...(bb ? [
      { label: "X",      value: `${Math.round(bb.x)}px` },
      { label: "Y",      value: `${Math.round(bb.y)}px` },
      { label: "Width",  value: `${Math.round(bb.width)}px` },
      { label: "Height", value: `${Math.round(bb.height)}px` },
    ] : []),
  ];

  return (
    <div className="flex h-full flex-col overflow-auto bg-[#1e1e1e] text-[12px] text-[#e0e0e0]">
      {/* Header */}
      <div className="border-b border-[#333] px-4 py-3">
        <div className="flex items-center gap-2">
          {nodeIcon(node.type)}
          <span className="truncate font-semibold text-white" title={node.name}>{node.name}</span>
        </div>
        {figmaUrl && (
          <a
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1 rounded bg-[#18a0fb] px-2 py-1 text-[11px] font-medium text-white hover:bg-blue-500"
          >
            Open in Figma <ExternalLink size={11} />
          </a>
        )}
      </div>

      {/* Properties */}
      <div className="px-4 py-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#888]">Properties</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {props.map(({ label, value }) => (
            <React.Fragment key={label}>
              <span className="text-[#888]">{label}</span>
              <span className="truncate text-right font-mono text-[#e0e0e0]" title={value}>{value}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Fills */}
      {!!node.fills?.length && (
        <div className="border-t border-[#333] px-4 py-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#888]">Fills</p>
          {node.fills.map((fill, i) => {
            const c = fill.color;
            const hex = c
              ? `#${[c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("")}`
              : null;
            return (
              <div key={i} className="flex items-center gap-2">
                {hex && (
                  <span
                    className="h-4 w-4 shrink-0 rounded-sm border border-[#444]"
                    style={{ background: hex }}
                  />
                )}
                <span className="font-mono text-[#e0e0e0]">{hex ?? fill.type ?? "—"}</span>
                {c?.a !== undefined && c.a < 1 && (
                  <span className="text-[#888]">{Math.round(c.a * 100)}%</span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function FigmaNodePreview({
  document,
  pageName,
  nodeName,
  nodeId,
  nodeType,
  width,
  height,
  figmaUrl,
  autoLoadDocument = true
}: FigmaNodePreviewProps) {
  const [autoDoc, setAutoDoc] = useState<FigmaNode | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (document || !autoLoadDocument) return;

    let mounted = true;
    import("../../figma-cache/file.json")
      .then((m) => {
        if (!mounted) return;
        const loaded = ((m.default ?? m) as any)?.document as FigmaNode | undefined;
        if (loaded) setAutoDoc(loaded);
        else setLoadError("Could not find document in figma-cache/file.json");
      })
      .catch((err) => {
        if (!mounted) return;
        setLoadError(err?.message ?? "Failed to load figma-cache/file.json");
      });

    return () => {
      mounted = false;
    };
  }, [document, autoLoadDocument]);

  const effectiveDocument = document ?? autoDoc;

  if (effectiveDocument) {
    return <LayersView document={effectiveDocument} figmaUrl={figmaUrl} initialSelectedNodeId={nodeId} />;
  }

  if (autoLoadDocument && !loadError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1e1e1e] text-[12px] text-[#888]">
        Loading full Figma document...
      </div>
    );
  }

  return <FlatFallback
    pageName={pageName ?? ""}
    nodeName={nodeName ?? ""}
    nodeId={nodeId ?? ""}
    nodeType={nodeType ?? "FRAME"}
    width={width}
    height={height}
    figmaUrl={figmaUrl}
  />;
}

// ─── Layers view (Figma-style) ────────────────────────────────────────────────

function findNodeById(node: FigmaNode, id: string): FigmaNode | null {
  if (node.id === id) return node;
  if (!node.children?.length) return null;
  for (const child of node.children) {
    const found = findNodeById(child, id);
    if (found) return found;
  }
  return null;
}

function findAncestorIds(node: FigmaNode, id: string, trail: string[] = []): string[] | null {
  if (node.id === id) return trail;
  if (!node.children?.length) return null;
  for (const child of node.children) {
    const found = findAncestorIds(child, id, [...trail, node.id]);
    if (found) return found;
  }
  return null;
}

function LayersView({
  document,
  figmaUrl,
  initialSelectedNodeId,
}: {
  document: FigmaNode;
  figmaUrl?: string;
  initialSelectedNodeId?: string;
}) {
  const fileId = figmaUrl?.match(/\/file\/([^/?]+)/)?.[1];

  // Start with the root and its first level expanded
  const initialExpanded = new Set<string>([document.id]);
  document.children?.forEach((c) => initialExpanded.add(c.id));
  if (initialSelectedNodeId) {
    const ancestors = findAncestorIds(document, initialSelectedNodeId);
    ancestors?.forEach((id) => initialExpanded.add(id));
  }

  const [expandedIds, setExpandedIds] = useState<Set<string>>(initialExpanded);
  const [selectedNode, setSelectedNode] = useState<FigmaNode | null>(() => {
    if (initialSelectedNodeId) {
      const found = findNodeById(document, initialSelectedNodeId);
      if (found) return found;
    }
    return document.children?.[0]?.children?.[0] ?? document.children?.[0] ?? document;
  });

  const toggle = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const select = useCallback((node: FigmaNode) => {
    setSelectedNode(node);
    // Auto-expand ancestors up to this node — expand its own children too
    if (node.children?.length) {
      setExpandedIds((prev) => new Set([...prev, node.id]));
    }
  }, []);

  return (
    <div
      className="flex overflow-hidden rounded-xl font-sans"
      style={{ height: "calc(100vh - 32px)", minHeight: 500, background: "#1e1e1e" }}
    >
      {/* ── Left: layers panel ──────────────────────────────────────────── */}
      <aside
        className="flex flex-col overflow-hidden border-r border-[#333]"
        style={{ width: 240, minWidth: 180, maxWidth: 320 }}
      >
        {/* Toolbar */}
        <div className="flex items-center gap-2 border-b border-[#333] px-3 py-2">
          <Layers size={14} className="text-[#888]" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#888]">Layers</span>
        </div>

        {/* Tree */}
        <div className="flex-1 overflow-y-auto py-1">
          <LayerRow
            node={document}
            depth={0}
            selectedId={selectedNode?.id ?? null}
            expandedIds={expandedIds}
            onToggle={toggle}
            onSelect={select}
          />
        </div>
      </aside>

      {/* ── Middle: canvas / preview ─────────────────────────────────────── */}
      <main className="flex flex-1 flex-col overflow-hidden bg-[#2c2c2c]">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-[#333] px-4 py-2">
          {selectedNode && nodeIcon(selectedNode.type)}
          <span className="truncate text-[12px] font-semibold text-[#e0e0e0]">
            {selectedNode?.name ?? "—"}
          </span>
          {selectedNode && (
            <span className="ml-1 rounded bg-[#333] px-1.5 py-0.5 text-[10px] text-[#888]">
              {selectedNode.type}
            </span>
          )}
        </div>

        {/* Canvas */}
        <div className="flex flex-1 items-center justify-center overflow-auto p-8">
          {selectedNode ? (
            <NodeCanvas node={selectedNode} onSelect={select} />
          ) : (
            <p className="text-[13px] text-[#555]">Select a layer to preview</p>
          )}
        </div>
      </main>

      {/* ── Right: detail panel ──────────────────────────────────────────── */}
      <aside
        className="flex flex-col overflow-hidden border-l border-[#333]"
        style={{ width: 220, minWidth: 160 }}
      >
        {/* Toolbar */}
        <div className="border-b border-[#333] px-3 py-2">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#888]">Inspect</span>
        </div>

        {selectedNode
          ? <DetailPanel node={selectedNode} figmaFileId={fileId} />
          : <p className="p-4 text-[12px] text-[#555]">No node selected</p>
        }
      </aside>
    </div>
  );
}

// ─── Canvas node renderer ─────────────────────────────────────────────────────

function getSolidFill(node: FigmaNode) {
  return node.fills?.find((fill) => fill.type === "SOLID" && fill.color);
}

function getFillColor(node: FigmaNode, fallback: string) {
  const fill = getSolidFill(node);
  if (!fill?.color) return fallback;
  const { r, g, b, a = 1 } = fill.color;
  return `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${a})`;
}

function shouldRenderLabel(node: FigmaNode, width: number, height: number) {
  if (node.type === "TEXT") return true;
  return width > 80 && height > 28;
}

function CanvasLayer({
  node,
  rootBounds,
  scale,
  depth,
  onSelect,
}: {
  node: FigmaNode;
  rootBounds: NonNullable<FigmaNode["absoluteBoundingBox"]>;
  scale: number;
  depth: number;
  onSelect: (node: FigmaNode) => void;
}) {
  const bounds = node.absoluteBoundingBox;
  if (!bounds) return null;

  const left = Math.max(0, (bounds.x - rootBounds.x) * scale);
  const top = Math.max(0, (bounds.y - rootBounds.y) * scale);
  const width = Math.max(1, bounds.width * scale);
  const height = Math.max(1, bounds.height * scale);
  const background = node.type === "TEXT" ? "transparent" : getFillColor(node, depth === 0 ? "#f3f4f6" : "rgba(255,255,255,0.03)");
  const border = node.type === "TEXT"
    ? "none"
    : depth === 0
      ? "1px solid #cbd5e1"
      : "1px solid rgba(148, 163, 184, 0.25)";

  return (
    <div
      className="absolute overflow-hidden rounded-[2px] transition-shadow hover:shadow-[0_0_0_1px_rgba(24,160,251,0.9)]"
      style={{
        left,
        top,
        width,
        height,
        background,
        border,
        zIndex: depth + 1,
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(node);
      }}
      title={`${node.name} (${node.type})`}
    >
      {shouldRenderLabel(node, width, height) && (
        <div
          className="pointer-events-none truncate px-1 py-[1px] text-[10px]"
          style={{
            color: node.type === "TEXT" ? getFillColor(node, "#111827") : "rgba(15, 23, 42, 0.72)",
            fontWeight: node.type === "TEXT" ? 500 : 600,
            lineHeight: 1.2,
          }}
        >
          {node.name}
        </div>
      )}

      {node.children?.map((child) => (
        <CanvasLayer
          key={child.id}
          node={child}
          rootBounds={rootBounds}
          scale={scale}
          depth={depth + 1}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function NodeCanvas({ node, onSelect }: { node: FigmaNode; onSelect: (node: FigmaNode) => void }) {
  const bb = node.absoluteBoundingBox;
  const w = bb?.width ?? 240;
  const h = bb?.height ?? 120;

  const maxW = 920;
  const maxH = 620;
  const scale = Math.min(1, maxW / w, maxH / h);
  const displayW = Math.max(1, Math.round(w * scale));
  const displayH = Math.max(1, Math.round(h * scale));

  if (!bb) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="flex min-h-[120px] min-w-[240px] items-center justify-center rounded-sm border border-[#444] bg-[#3a3a3a] px-3 text-[11px] text-[#aaa] shadow-lg">
          {node.name}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-lg border border-[#3a3a3a] bg-[#252525] p-3 shadow-2xl shadow-black/40">
        <div
          className="relative overflow-hidden rounded-sm bg-[#f8fafc] bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.18)_1px,transparent_0)] bg-[size:12px_12px]"
          style={{ width: displayW, height: displayH }}
          onClick={() => onSelect(node)}
        >
          <CanvasLayer node={node} rootBounds={bb} scale={scale} depth={0} onSelect={onSelect} />
        </div>
      </div>

      <p className="text-[10px] text-[#666]">
        {Math.round(w)} × {Math.round(h)} px
        {scale < 1 && <span className="ml-1">(scaled {Math.round(scale * 100)}%)</span>}
        {node.children?.length ? <span className="ml-2">{node.children.length} child layers</span> : null}
      </p>
    </div>
  );
}

// ─── Flat fallback (legacy props) ─────────────────────────────────────────────

function FlatFallback({
  pageName, nodeName, nodeId, nodeType, width, height, figmaUrl
}: Required<Omit<FigmaNodePreviewProps, "document">>) {
  return (
    <main className="min-h-screen bg-[#1e1e1e] p-6 font-sans">
      <section className="mx-auto max-w-3xl rounded-xl border border-[#333] bg-[#252525] p-6 text-[#e0e0e0]">
        <div className="flex items-start justify-between border-b border-[#333] pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#888]">{pageName}</p>
            <h1 className="mt-1 text-xl font-bold text-white">{nodeName}</h1>
            <p className="mt-1 font-mono text-[11px] text-[#666]">{nodeId}</p>
          </div>
          {figmaUrl && (
            <a
              href={figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded bg-[#18a0fb] px-3 py-1.5 text-[11px] font-semibold text-white"
            >
              Open in Figma <ExternalLink size={11} />
            </a>
          )}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Type",   value: nodeType },
            { label: "Width",  value: width  ? `${Math.round(width)}px`  : "N/A" },
            { label: "Height", value: height ? `${Math.round(height)}px` : "N/A" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-[#333] bg-[#1e1e1e] p-3">
              <p className="text-[10px] uppercase tracking-widest text-[#888]">{label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-[#444] bg-[#1a1a1a] p-8 text-center text-[12px] text-[#555]">
          Pass <code className="text-[#888]">document</code> prop to enable full layer tree view.
        </div>
      </section>
    </main>
  );
}
