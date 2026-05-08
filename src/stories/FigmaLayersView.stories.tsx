import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview, type FigmaNode } from "../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🗂️ Layers View",
  component: FigmaNodePreview,
  parameters: { layout: "fullscreen" }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

/** Lazy-loads figma-cache/file.json at runtime to keep the bundle lean. */
function LayersPanelStory() {
  const [doc, setDoc] = useState<FigmaNode | null>(null);

  useEffect(() => {
    import("../../figma-cache/file.json").then((m) => {
      setDoc((m.default ?? m).document as FigmaNode);
    });
  }, []);

  if (!doc) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#1e1e1e] text-[#888] text-sm">
        Loading Figma document…
      </div>
    );
  }

  return <FigmaNodePreview document={doc} />;
}

export const LayersPanel: Story = {
  name: "Layers Panel",
  render: () => <LayersPanelStory />
};
