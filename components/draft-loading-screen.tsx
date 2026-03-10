"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DraftLoadingScreenProps {
  className?: string;
  progress?: number;
}

export function DraftLoadingScreen({ className, progress = 70 }: DraftLoadingScreenProps) {
  return (
    <div className={cn("flex flex-1 flex-col items-center justify-center px-8", className)}>
      {/* Document Icon */}
      <div className="mb-6">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#737373]"
        >
          <rect x="12" y="8" width="40" height="48" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M36 8V20H48" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M36 8L48 20" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="mb-2 text-center text-2xl font-semibold text-[#212223]">
        Generating draft
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-center text-[#737373]">
        Based on your selections, this may take up to 30 minutes
      </p>

      {/* Progress Section */}
      <div className="w-full max-w-2xl">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-[#212223]">Structuring draft...</span>
          <span className="text-sm text-[#737373]">{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#e5e5e5]">
          <div
            className="h-full rounded-full bg-[#006fc4] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Email Notification Option */}
      <label className="mt-6 flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="size-4 rounded border-[#cccccc] text-[#2e6b5c] focus:ring-[#2e6b5c]"
        />
        <span className="text-sm text-[#212223]">Email me when draft is ready</span>
      </label>
    </div>
  );
}
