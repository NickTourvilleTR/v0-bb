"use client";

import { MessageSquare } from "lucide-react";
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
  hidden?: boolean;
}

export function RightToolbar({
  className,
  onChatClick,
  hidden = false,
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

      </div>
    </TooltipProvider>
  );
}
