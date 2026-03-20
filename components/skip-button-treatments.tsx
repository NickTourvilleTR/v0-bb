"use client";

import { ArrowRight, ChevronRight, SkipForward, FastForward, X } from "lucide-react";

interface SkipButtonTreatmentsProps {
  onSkip?: () => void;
}

export function SkipButtonTreatments({ onSkip }: SkipButtonTreatmentsProps) {
  return (
    <div className="space-y-6 p-6">
      <h2 className="text-lg font-semibold text-[#212223]">Skip Button Treatments</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Treatment 1: Simple Text Link */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">1. Simple Text Link</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="text-sm text-[#737373] underline hover:text-[#212223]"
            >
              Skip this step
            </button>
          </div>
        </div>

        {/* Treatment 2: Ghost Button with Arrow */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">2. Ghost Button with Arrow</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#212223]"
            >
              Skip this step
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Treatment 3: Outlined Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">3. Outlined Button</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]"
            >
              Skip this step
            </button>
          </div>
        </div>

        {/* Treatment 4: Pill Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">4. Pill Button</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="rounded-full border border-[#cccccc] bg-white px-5 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]"
            >
              Skip this step
            </button>
          </div>
        </div>

        {/* Treatment 5: Icon Only Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">5. Icon Button with Tooltip</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="flex size-10 items-center justify-center rounded-full border border-[#cccccc] bg-white text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
              title="Skip this step"
            >
              <SkipForward className="size-5" />
            </button>
          </div>
        </div>

        {/* Treatment 6: Subtle Background Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">6. Subtle Background</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="rounded-md bg-[#f2f2f2] px-4 py-2 text-sm text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]"
            >
              Skip this step
            </button>
          </div>
        </div>

        {/* Treatment 7: Underlined with Chevron */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">7. Underlined with Chevron</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="flex items-center gap-1 border-b border-[#737373] pb-0.5 text-sm text-[#737373] hover:border-[#212223] hover:text-[#212223]"
            >
              Skip
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Treatment 8: Muted Text with Divider */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">8. With Divider Line</p>
          <div className="flex items-center justify-end gap-3">
            <span className="h-px flex-1 bg-[#e5e5e5]" />
            <button
              onClick={onSkip}
              className="text-sm text-[#737373] hover:text-[#212223]"
            >
              or skip this step
            </button>
          </div>
        </div>

        {/* Treatment 9: Compact Inline */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">9. Compact Inline</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="flex items-center gap-1.5 text-xs text-[#737373] hover:text-[#212223]"
            >
              <FastForward className="size-3" />
              Skip
            </button>
          </div>
        </div>

        {/* Treatment 10: Dismissive Style */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">10. Dismissive Style</p>
          <div className="flex justify-end">
            <button
              onClick={onSkip}
              className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              <X className="size-4" />
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
