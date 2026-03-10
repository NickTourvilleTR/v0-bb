"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BriefBuilderAdditionalCardProps {
  onSkip?: () => void;
  showTags?: boolean;
  className?: string;
}

export function BriefBuilderAdditionalCard({
  onSkip,
  showTags = true,
  className,
}: BriefBuilderAdditionalCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#e5e5e5] bg-white p-6",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-[#212223]" />
          <h3 className="text-lg font-semibold text-[#212223]">Brief Builder</h3>
        </div>
        {showTags && (
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-xs text-[#404040]">
              Motion to dismiss
            </span>
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Primary brief
            </span>
          </div>
        )}
      </div>

      {/* Question */}
      <p className="mb-4 text-[#212223]">
        <strong>Are there any other key details you can provide?</strong>{" "}
        These will help tailor the brief to your scenario. You can enter additional information such as:
      </p>

      {/* Bullet List */}
      <ul className="mb-6 ml-6 list-disc space-y-1 text-[#212223]">
        <li>Pertinent facts</li>
        <li>Relevant context</li>
        <li>Theory of the case</li>
        <li>Client's side of the story</li>
        <li>Contested facts and issues</li>
        <li>Strategic objectives or considerations</li>
      </ul>

      {/* Skip Button - positioned to the right */}
      <div className="flex justify-end">
        <Button
          onClick={onSkip}
          variant="outline"
          className="h-10 border-[#cccccc] bg-white px-6 text-[#212223] hover:bg-[#f2f2f2]"
        >
          Skip this step
        </Button>
      </div>
    </div>
  );
}
