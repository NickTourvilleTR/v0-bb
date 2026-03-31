"use client";

import * as React from "react";
import { FileText, Scale, CircleHelp, SlidersHorizontal } from "lucide-react";

interface SelectionContextMenuProps {
  onAddFacts?: () => void;
  onAddAuthorities?: () => void;
  onAskQuestion?: () => void;
  onEditTone?: () => void;
}

interface MenuPosition {
  top: number;
  left: number;
}

export function useSelectionContextMenu(containerRef: React.RefObject<HTMLElement>) {
  const [position, setPosition] = React.useState<MenuPosition | null>(null);

  const computePosition = React.useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || selection.toString().trim() === "") {
      setPosition(null);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const range = selection.getRangeAt(0);
    if (!container.contains(range.commonAncestorContainer)) {
      setPosition(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    const menuWidth = 440;
    const menuHeight = 44;
    const margin = 8;

    // Use viewport-relative coords — menu is position:fixed
    let left = rect.left + rect.width / 2 - menuWidth / 2;
    let top = rect.top - menuHeight - margin;

    // Clamp horizontally within viewport
    left = Math.max(margin, Math.min(left, window.innerWidth - menuWidth - margin));

    // If it would go off the top, show below instead
    if (top < margin) {
      top = rect.bottom + margin;
    }

    setPosition({ top, left });
  }, [containerRef]);

  React.useEffect(() => {
    const handleMouseUp = () => setTimeout(computePosition, 10);
    const handleKeyUp = () => setTimeout(computePosition, 10);

    // Re-anchor the menu on every scroll event inside the scrollable container
    const handleScroll = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.toString().trim() === "") return;
      computePosition();
    };

    // Find the nearest scrollable ancestor of the container
    const scrollParent = containerRef.current?.closest(".overflow-y-auto") ?? window;

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("selectionchange", computePosition);
    scrollParent.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("selectionchange", computePosition);
      scrollParent.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef, computePosition]);

  const hide = React.useCallback(() => setPosition(null), []);

  return { position, hide };
}

export function SelectionContextMenu({
  position,
  onAddFacts,
  onAddAuthorities,
  onAskQuestion,
  onEditTone,
}: SelectionContextMenuProps & { position: MenuPosition | null }) {
  if (!position) return null;

  return (
    <div
      style={{ top: position.top, left: position.left, position: "fixed", zIndex: 9999 }}
      className="flex items-center rounded-xl border border-[#e5e5e5] bg-white shadow-lg"
      onMouseDown={(e) => e.preventDefault()} // prevent clearing selection
    >
      <button
        onClick={onAddFacts}
        className="flex items-center gap-2 rounded-l-xl px-4 py-2.5 text-sm font-medium text-[#212223] hover:bg-[#f7f7f7] transition-colors"
      >
        <FileText className="size-4 text-[#525252]" />
        Add facts
      </button>
      <div className="h-5 w-px bg-[#e5e5e5]" />
      <button
        onClick={onAddAuthorities}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#212223] hover:bg-[#f7f7f7] transition-colors"
      >
        <Scale className="size-4 text-[#525252]" />
        Add authorities
      </button>
      <div className="h-5 w-px bg-[#e5e5e5]" />
      <button
        onClick={onAskQuestion}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#212223] hover:bg-[#f7f7f7] transition-colors"
      >
        <CircleHelp className="size-4 text-[#525252]" />
        Ask a question
      </button>
      <div className="h-5 w-px bg-[#e5e5e5]" />
      <button
        onClick={onEditTone}
        className="flex items-center gap-2 rounded-r-xl px-4 py-2.5 text-sm font-medium text-[#212223] hover:bg-[#f7f7f7] transition-colors"
      >
        <SlidersHorizontal className="size-4 text-[#525252]" />
        Edit tone
      </button>
    </div>
  );
}
