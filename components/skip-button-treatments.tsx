"use client";

import { ArrowRight, ChevronRight, SkipForward, FastForward, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkipButtonTreatmentsProps {
  onSkip?: () => void;
}

export function SkipButtonTreatments({ onSkip }: SkipButtonTreatmentsProps) {
  return (
    <div className="space-y-6 p-6">
      <h2 className="text-lg font-semibold text-[#212223]">Skip Button Treatments (Secondary Style)</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Treatment 1: Simple Text Link */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">1. Simple Text Link</p>
          <div className="flex justify-center">
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
          <div className="flex justify-center">
            <button
              onClick={onSkip}
              className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#212223]"
            >
              Skip this step
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Treatment 3: Secondary Outlined Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">3. Secondary Outlined Button</p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onSkip}
              className="border-[#cccccc] bg-white text-[#212223] hover:bg-[#f2f2f2]"
            >
              Skip this step
            </Button>
          </div>
        </div>

        {/* Treatment 4: Secondary Pill Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">4. Secondary Pill Button</p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onSkip}
              className="rounded-full border-[#cccccc] bg-white px-6 text-[#212223] hover:bg-[#f2f2f2]"
            >
              Skip this step
            </Button>
          </div>
        </div>

        {/* Treatment 5: Icon Only Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">5. Secondary Icon Button</p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={onSkip}
              className="size-10 rounded-full border-[#cccccc] bg-white text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
              title="Skip this step"
            >
              <SkipForward className="size-5" />
            </Button>
          </div>
        </div>

        {/* Treatment 6: Secondary Ghost Button */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">6. Secondary Ghost Button</p>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={onSkip}
              className="text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              Skip this step
            </Button>
          </div>
        </div>

        {/* Treatment 7: Secondary with Chevron */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">7. Secondary with Chevron</p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onSkip}
              className="border-[#cccccc] bg-white text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              Skip
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
        </div>

        {/* Treatment 8: Muted Secondary with Divider */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">8. With Divider Line</p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#e5e5e5]" />
            <Button
              variant="ghost"
              onClick={onSkip}
              className="text-sm text-[#737373] hover:bg-transparent hover:text-[#212223]"
            >
              or skip this step
            </Button>
            <span className="h-px w-16 bg-[#e5e5e5]" />
          </div>
        </div>

        {/* Treatment 9: Compact Secondary */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">9. Compact Secondary</p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={onSkip}
              className="h-8 border-[#cccccc] bg-white text-xs text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              <FastForward className="mr-1.5 size-3" />
              Skip
            </Button>
          </div>
        </div>

        {/* Treatment 10: Secondary Dismissive Style */}
        <div className="rounded-lg border border-[#e5e5e5] p-4">
          <p className="mb-3 text-xs text-[#737373]">10. Secondary Dismissive</p>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={onSkip}
              className="text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              <X className="mr-2 size-4" />
              Not now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
