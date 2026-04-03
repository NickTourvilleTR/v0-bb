"use client";

import { MessageSquare, Notebook, History, FileStack } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RightToolbarProps {
  className?: string;
  onChatClick?: () => void;
  onNotesClick?: () => void;
  onHistoryClick?: () => void;
  onLibraryClick?: () => void;
  hidden?: boolean;
  hideHistoryButton?: boolean;
}

export function RightToolbar({
  className,
  onChatClick,
  onNotesClick,
  onHistoryClick,
  onLibraryClick,
  hidden = false,
  hideHistoryButton = false,
}: RightToolbarProps) {
  if (hidden) return null;
  
  return (
    <TooltipProvider delayDuration={300}>
      <div className={cn("flex flex-col gap-2 border-l border-[#e5e5e5] bg-white p-2", className)}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onChatClick}
              className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
            >
              <MessageSquare className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat</p>
          </TooltipContent>
        </Tooltip>
        {/* Hidden buttons - kept for easy re-enable */}
        {false && (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={onNotesClick}
                  className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
                >
                  <Notebook className="size-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Notes</p>
              </TooltipContent>
            </Tooltip>
            {!hideHistoryButton && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={onHistoryClick}
                    className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
                  >
                    <History className="size-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>History</p>
                </TooltipContent>
              </Tooltip>
            )}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={onLibraryClick}
                  className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
                >
                  <FileStack className="size-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Sources</p>
              </TooltipContent>
            </Tooltip>
          </>
        )}
      </div>
    </TooltipProvider>
  );
}
