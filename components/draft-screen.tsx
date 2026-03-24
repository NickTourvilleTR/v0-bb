"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface DraftScreenProps {
  className?: string;
  onGenerateDraft?: () => void;
  flowType?: "brief" | "judicial";
}

export function DraftScreen({ className, onGenerateDraft, flowType = "brief" }: DraftScreenProps) {
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
        Based on your selections and outline, we'll generate a draft of your {flowType === "judicial" ? "opinion" : "brief"} that you can edit further. This may take up to 30 minutes.
      </p>

      {/* Upload Prior Opinions Section (Judicial Flow) */}
      {flowType === "judicial" && (
        <div className="mb-8 max-w-lg rounded-lg border border-[#e5e5e5] bg-[#f9f9f9] p-4">
          <div className="flex items-start gap-3">
            <Upload className="mt-0.5 size-5 flex-shrink-0 text-[#737373]" />
            <div>
              <p className="text-sm font-medium text-[#212223]">
                Upload prior opinions
              </p>
              <p className="mt-1 text-sm text-[#737373]">
                Upload prior opinions to customize the style, voice, and formatting of your draft.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Generate Button */}
      <button
        onClick={onGenerateDraft}
        className="rounded-full bg-[#1d4b34] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#163d2a]"
      >
        Generate draft
      </button>
    </div>
  );
}
