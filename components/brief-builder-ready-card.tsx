"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BriefBuilderReadyCardProps {
  showTags?: boolean;
  className?: string;
}

export function BriefBuilderReadyCard({
  showTags = true,
  className,
}: BriefBuilderReadyCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#e5e5e5] bg-white p-6",
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
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-sm text-[#212223]">
              Motion to dismiss
            </span>
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-sm text-[#212223]">
              Primary brief
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 text-[#212223]">
        <p>Got it, I'll factor that in when generating your initial draft.</p>
        
        <p>
          <strong>Let's start building your brief now</strong> — you'll begin by
          reviewing and selecting the arguments to include in your brief, but you
          can work on any piece of it at any time.
        </p>
        
        <p>
          If you prefer, <strong>you can add more context</strong> to provide any
          other detail. Or, tell me if there is something else you'd like to do
          instead.
        </p>
      </div>
    </div>
  );
}
