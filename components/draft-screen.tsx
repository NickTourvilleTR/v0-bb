"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DraftScreenProps {
  className?: string;
  onGenerateDraft?: () => void;
}

export function DraftScreen({ className, onGenerateDraft }: DraftScreenProps) {
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
        Create your draft
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-lg text-center text-[#737373]">
        Based on your selections and outline, we'll generate a draft of your brief that you can edit further. This may take up to 30 minutes.
      </p>

      {/* Generate Button */}
      <button
        onClick={onGenerateDraft}
        className="rounded-md bg-[#1f1f1f] px-6 py-3 text-sm font-medium text-white hover:bg-[#404040] transition-colors"
      >
        Generate draft
      </button>
    </div>
  );
}
