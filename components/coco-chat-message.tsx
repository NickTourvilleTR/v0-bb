"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import * as React from "react";

interface ChatMessageProps {
  type: "user" | "assistant";
  userName?: string;
  timestamp?: string;
  children: React.ReactNode;
  className?: string;
}

export function CocoChatMessage({
  type,
  userName = "Jane Lawson",
  timestamp,
  children,
  className,
}: ChatMessageProps) {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-3">
        {type === "user" ? (
          <div className="flex size-8 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
            {initials}
          </div>
        ) : (
          <div className="flex size-8 items-center justify-center">
            <Logo icon />
          </div>
        )}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-[#212223]">
            {type === "user" ? userName : "CoCounsel"}
          </span>
          {timestamp && (
            <>
              <span className="text-[#737373]">-</span>
              <span className="text-[#737373]">{timestamp}</span>
            </>
          )}
        </div>
      </div>
      <div className="ml-11">{children}</div>
    </div>
  );
}
