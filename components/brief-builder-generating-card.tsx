"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface BriefBuilderGeneratingCardProps {
  progress?: number;
  showTags?: boolean;
  className?: string;
}

export function BriefBuilderGeneratingCard({
  progress = 40,
  showTags = true,
  className,
}: BriefBuilderGeneratingCardProps) {
  const [emailNotify, setEmailNotify] = React.useState(false);
  const [researchExpanded, setResearchExpanded] = React.useState(false);
  const [animatedProgress, setAnimatedProgress] = React.useState(0);

  // Animate progress bar
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div
      className={cn(
        "rounded-lg border border-[#e5e5e5] bg-white p-6",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#212223]">Generating brief</h3>
        {showTags && (
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
              Motion to dismiss
            </span>
            <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
              Supporting brief
            </span>
          </div>
        )}
      </div>

      {/* Message */}
      <p className="mb-4 text-[#212223]">
        Great, I'll generate some potential arguments for you to review. This may
        take up to 15 minutes.
      </p>

      {/* Progress */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-[#212223]">Generating arguments...</span>
        <span className="text-sm text-[#212223]">{Math.round(animatedProgress)}% complete</span>
      </div>
      <div className="mb-4 h-1.5 w-full rounded-full bg-[#e5e5e5]">
        <div
          className="h-1.5 rounded-full bg-[#2e6b5c] transition-all duration-1000 ease-out"
          style={{ width: `${animatedProgress}%` }}
        />
      </div>

      {/* Email Checkbox */}
      <div className="mb-4 flex items-center gap-3">
        <Checkbox
          id="email-notify"
          checked={emailNotify}
          onCheckedChange={(checked) => setEmailNotify(checked as boolean)}
          className="border-[#737373] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]"
        />
        <label
          htmlFor="email-notify"
          className="cursor-pointer text-sm text-[#212223]"
        >
          Email me when ready
        </label>
      </div>

      {/* Research Steps Accordion */}
      <button
        onClick={() => setResearchExpanded(!researchExpanded)}
        className="flex w-full items-center justify-between border-t border-[#e5e5e5] pt-4"
      >
        <span className="font-medium text-[#212223]">Research steps</span>
        <ChevronDown
          className={cn(
            "size-5 text-[#737373] transition-transform",
            researchExpanded && "rotate-180"
          )}
        />
      </button>
    </div>
  );
}
