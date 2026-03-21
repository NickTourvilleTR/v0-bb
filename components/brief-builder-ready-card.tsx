"use client";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BriefBuilderReadyCardProps {
  showTags?: boolean;
  className?: string;
  onStartBuilding?: () => void;
}

export function BriefBuilderReadyCard({
  showTags = true,
  className,
  onStartBuilding,
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
        <h3 className="text-lg font-semibold text-[#212223]">Ready to build</h3>
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

      {/* Start Building Button */}
      <div className="mt-6 flex justify-center">
        <Button
          onClick={onStartBuilding}
          className="flex h-10 items-center gap-2 rounded-full bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]"
        >
          <Sparkles className="size-4" />
          I'm ready, let's start building
        </Button>
      </div>
    </div>
  );
}
