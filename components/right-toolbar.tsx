"use client";

import { MessageSquare, Notebook, History, Library } from "lucide-react";
import { cn } from "@/lib/utils";

interface RightToolbarProps {
  className?: string;
  onChatClick?: () => void;
  onNotesClick?: () => void;
  onHistoryClick?: () => void;
  onLibraryClick?: () => void;
}

export function RightToolbar({
  className,
  onChatClick,
  onNotesClick,
  onHistoryClick,
  onLibraryClick,
}: RightToolbarProps) {
  return (
    <div className={cn("flex flex-col gap-2 border-l border-[#e5e5e5] bg-white p-2", className)}>
      <button
        onClick={onChatClick}
        className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
      >
        <MessageSquare className="size-5" />
      </button>
      <button
        onClick={onNotesClick}
        className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
      >
        <Notebook className="size-5" />
      </button>
      <button
        onClick={onHistoryClick}
        className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
      >
        <History className="size-5" />
      </button>
      <button
        onClick={onLibraryClick}
        className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
      >
        <Library className="size-5" />
      </button>
    </div>
  );
}
