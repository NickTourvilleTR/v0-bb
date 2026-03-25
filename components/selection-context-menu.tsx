"use client";

import * as React from "react";
import { FileText, Scale, CircleHelp } from "lucide-react";

interface SelectionContextMenuProps {
  onAddFacts?: () => void;
  onAddAuthorities?: () => void;
  onAskQuestion?: () => void;
}

interface MenuPosition {
  top: number;
  left: number;
}

export function useSelectionContextMenu(containerRef: React.RefObject<HTMLElement>) {
  const [position, setPosition] = React.useState<MenuPosition | null>(null);

  React.useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.toString().trim() === "") {
        setPosition(null);
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      // Check that the selection is inside our container
      const range = selection.getRangeAt(0);
      if (!container.contains(range.commonAncestorContainer)) {
        setPosition(null);
        return;
      }

      const rect = range.getBoundingClientRect();
      const menuWidth = 340; // approximate width
      const menuHeight = 44; // approximate height
      const margin = 8;

      // Position above the selection, centered
      let left = rect.left + rect.width / 2 - menuWidth / 2;
      let top = rect.top - menuHeight - margin;

      // Clamp horizontally
      left = Math.max(margin, Math.min(left, window.innerWidth - menuWidth - margin));

      // If it would go off the top, show below instead
      if (top < margin) {
        top = rect.bottom + margin;
      }

      setPosition({ top, left });
    };

    const handleMouseUp = () => {
      // Small delay so selection is finalized
      setTimeout(handleSelectionChange, 10);
    };

    const handleKeyUp = () => {
      setTimeout(handleSelectionChange, 10);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [containerRef]);

  const hide = React.useCallback(() => setPosition(null), []);

  return { position, hide };
}

export function SelectionContextMenu({
  position,
  onAddFacts,
  onAddAuthorities,
  onAskQuestion,
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
        className="flex items-center gap-2 rounded-r-xl px-4 py-2.5 text-sm font-medium text-[#212223] hover:bg-[#f7f7f7] transition-colors"
      >
        <CircleHelp className="size-4 text-[#525252]" />
        Ask a question
      </button>
    </div>
  );
}
