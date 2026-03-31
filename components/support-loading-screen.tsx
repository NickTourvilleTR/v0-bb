"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen } from "lucide-react";

interface SupportLoadingScreenProps {
  className?: string;
  progress?: number;
}

export function SupportLoadingScreen({
  className,
  progress = 70,
}: SupportLoadingScreenProps) {
  const [animatedProgress, setAnimatedProgress] = React.useState(0);
  const [emailMe, setEmailMe] = React.useState(false);

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
        "flex flex-1 flex-col items-center justify-center px-6",
        className
      )}
    >
      <div className="flex w-full max-w-xl flex-col items-center">
        {/* Book Icon */}
        <div className="mb-6">
          <BookOpen className="size-16 text-[#737373]" strokeWidth={1} />
        </div>

        {/* Title */}
        <h1 className="mb-2 text-center text-2xl font-semibold text-[#212223]">
          Generating details for development
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-center text-[#737373]">
          Based on your selections, this may take up to 15 minutes
        </p>

        {/* Progress */}
        <div className="w-full max-w-lg">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-[#212223]">Researching...</span>
            <span className="text-sm text-[#212223]">
              {Math.round(animatedProgress)}%
            </span>
          </div>
          <div className="mb-6 h-1.5 w-full rounded-full bg-[#e5e5e5]">
            <div
              className="h-1.5 rounded-full bg-[#2e6b5c] transition-all duration-1000 ease-out"
              style={{ width: `${animatedProgress}%` }}
            />
          </div>

          {/* Email checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="email-notify"
              checked={emailMe}
              onCheckedChange={(checked) => setEmailMe(checked === true)}
              className="border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
            />
            <label
              htmlFor="email-notify"
              className="cursor-pointer text-sm text-[#212223]"
            >
              Email me when authorities are ready
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
