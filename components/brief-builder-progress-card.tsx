"use client";

import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BriefBuilderProgressCardProps {
  progress?: number;
  showTags?: boolean;
  className?: string;
}

export function BriefBuilderProgressCard({
  progress = 40,
  showTags = true,
  className,
}: BriefBuilderProgressCardProps) {
  const [emailMe, setEmailMe] = React.useState(false);
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
        "rounded-xl border border-[#e5e5e5] bg-white p-6",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#212223]">Analyzing documents</h3>
        {showTags && (
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Motion to dismiss
            </span>
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Primary brief
            </span>
          </div>
        )}
      </div>

      {/* Progress Section */}
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[#212223]">Analyzing documents</span>
          <span className="text-[#212223]">{Math.round(animatedProgress)}% complete</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[#e5e5e5]">
          <div
            className="h-1.5 rounded-full bg-[#2e6b5c] transition-all duration-1000 ease-out"
            style={{ width: `${animatedProgress}%` }}
          />
        </div>
      </div>

      {/* Email Checkbox */}
      <div className="mb-6 flex items-center gap-3">
        <Checkbox
          id="emailMe"
          checked={emailMe}
          onCheckedChange={(checked) => setEmailMe(checked as boolean)}
          className="border-[#737373] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]"
        />
        <label htmlFor="emailMe" className="text-[#212223] cursor-pointer">
          Email me when ready
        </label>
      </div>

      {/* Research Steps Accordion */}
      <div className="border-t border-[#e5e5e5] pt-4">
        <button className="flex w-full items-center justify-between text-left">
          <span className="font-medium text-[#212223]">Research steps</span>
          <ChevronDown className="size-5 text-[#737373]" />
        </button>
      </div>
    </div>
  );
}
