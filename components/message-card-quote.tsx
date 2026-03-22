"use client";

import React from "react";
import { Reply } from "lucide-react";

interface MessageCardQuoteProps {
  children: React.ReactNode;
  className?: string;
  onQuote?: () => void;
}

export function MessageCardQuote({ children, className = "", onQuote }: MessageCardQuoteProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`relative mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Simple Icon Button - appears on hover at top-right */}
      {isHovered && (
        <button
          onClick={() => {
            onQuote?.();
            console.log("[v0] Quote action triggered");
          }}
          className="absolute -right-3 -top-3 flex size-9 items-center justify-center rounded-full bg-[#1d4b34] text-white shadow-md transition-all hover:scale-110 hover:bg-[#163d2a]"
          aria-label="Quote reply"
        >
          <Reply className="size-4" />
        </button>
      )}
      {children}
    </div>
  );
}
