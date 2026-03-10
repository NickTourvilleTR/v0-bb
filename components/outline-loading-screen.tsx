"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface OutlineLoadingScreenProps {
  progress?: number;
}

export function OutlineLoadingScreen({ progress = 70 }: OutlineLoadingScreenProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      {/* Icon */}
      <div className="mb-6">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#212223"
          strokeWidth="1.5"
          className="text-[#212223]"
        >
          <rect x="12" y="8" width="40" height="48" rx="2" />
          <line x1="20" y1="20" x2="44" y2="20" />
          <line x1="20" y1="28" x2="36" y2="28" />
          <line x1="20" y1="36" x2="40" y2="36" />
          <line x1="20" y1="44" x2="32" y2="44" />
          <rect x="16" y="18" width="3" height="3" fill="#212223" />
          <rect x="16" y="26" width="3" height="3" fill="#212223" />
          <rect x="16" y="34" width="3" height="3" fill="#212223" />
          <rect x="16" y="42" width="3" height="3" fill="#212223" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="mb-2 text-center text-2xl font-semibold text-[#212223]">
        Generating outline
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-center text-[#737373]">
        Based on your selections, this may take up to 15 minutes
      </p>

      {/* Progress Section */}
      <div className="w-full max-w-2xl">
        {/* Progress Label */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-[#212223]">Structuring outline...</span>
          <span className="text-sm text-[#212223]">{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 h-1.5 w-full rounded-full bg-[#e5e5e5]">
          <div
            className="h-1.5 rounded-full bg-[#0062c4] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Email Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox id="email-notify-outline" className="border-[#737373]" />
          <label htmlFor="email-notify-outline" className="text-sm text-[#212223] cursor-pointer">
            Email me when outline is ready
          </label>
        </div>
      </div>
    </div>
  );
}
