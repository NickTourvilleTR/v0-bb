"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Reply } from "lucide-react";

interface MessageCardWithQuoteProps {
  children: React.ReactNode;
  className?: string;
  onQuote?: () => void;
}

export function MessageCardWithQuote({ children, className, onQuote }: MessageCardWithQuoteProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <button
          onClick={onQuote}
          className="absolute -top-3 right-2 flex size-6 items-center justify-center rounded-full bg-[#1d4b34] text-white shadow-md transition-transform hover:scale-110"
          title="Quote reply"
        >
          <Reply className="size-3.5" />
        </button>
      )}
      {children}
    </div>
  );
}
