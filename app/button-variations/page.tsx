"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Check, Sparkles, Play, MoveRight } from "lucide-react";

export default function ButtonVariationsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] p-12">
      <h1 className="mb-8 text-3xl font-bold text-[#212223]">Continue Button Variations</h1>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Variation 1: Primary Solid */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">1. Primary Solid (Dark)</p>
          <Button className="bg-[#1f1f1f] px-8 py-2 text-white hover:bg-[#404040]">
            Continue
          </Button>
        </div>

        {/* Variation 2: Primary with Arrow */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">2. Primary with Arrow Icon</p>
          <Button className="bg-[#1f1f1f] px-8 py-2 text-white hover:bg-[#404040]">
            Continue
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        {/* Variation 3: Green Brand */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">3. Green Brand Color</p>
          <Button className="bg-[#1d4b34] px-8 py-2 text-white hover:bg-[#2e6b5c]">
            Continue
          </Button>
        </div>

        {/* Variation 4: Green with Chevron */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">4. Green with Chevron</p>
          <Button className="bg-[#1d4b34] px-8 py-2 text-white hover:bg-[#2e6b5c]">
            Continue
            <ChevronRight className="ml-1 size-5" />
          </Button>
        </div>

        {/* Variation 5: Outline Style */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">5. Outline Style</p>
          <Button variant="outline" className="border-[#1d4b34] px-8 py-2 text-[#1d4b34] hover:bg-[#1d4b34] hover:text-white">
            Continue
          </Button>
        </div>

        {/* Variation 6: Outline with Arrow */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">6. Outline with Arrow</p>
          <Button variant="outline" className="border-[#212223] px-8 py-2 text-[#212223] hover:bg-[#212223] hover:text-white">
            Continue
            <MoveRight className="ml-2 size-4" />
          </Button>
        </div>

        {/* Variation 7: Pill Shape */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">7. Pill Shape</p>
          <Button className="rounded-full bg-[#1d4b34] px-10 py-2 text-white hover:bg-[#2e6b5c]">
            Continue
          </Button>
        </div>

        {/* Variation 8: Pill with Icon */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">8. Pill with Play Icon</p>
          <Button className="rounded-full bg-[#1f1f1f] px-10 py-2 text-white hover:bg-[#404040]">
            <Play className="mr-2 size-4 fill-white" />
            Continue
          </Button>
        </div>

        {/* Variation 9: Ghost with Underline Effect */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">9. Text Link Style</p>
          <Button variant="ghost" className="px-0 text-[#1d4b34] underline-offset-4 hover:bg-transparent hover:underline">
            Continue
            <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>

        {/* Variation 10: Large with Sparkle */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">10. Large with Accent</p>
          <Button className="h-12 bg-[#1d4b34] px-12 text-base text-white hover:bg-[#2e6b5c]">
            <Sparkles className="mr-2 size-5" />
            Continue
          </Button>
        </div>
      </div>

      {/* Context Preview */}
      <h2 className="mb-6 mt-16 text-2xl font-bold text-[#212223]">In Context (Bottom of Screen)</h2>
      <div className="space-y-6">
        {/* Context 1: Single centered button */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">Single Centered</p>
          <div className="flex justify-center border-t border-[#e5e5e5] pt-6">
            <Button className="bg-[#1d4b34] px-10 py-2 text-white hover:bg-[#2e6b5c]">
              Continue
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* Context 2: Two buttons */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">With Secondary Action</p>
          <div className="flex justify-center gap-3 border-t border-[#e5e5e5] pt-6">
            <Button variant="outline" className="border-[#cccccc] px-8 text-[#212223] hover:bg-[#f7f7f7]">
              Save as draft
            </Button>
            <Button className="bg-[#1d4b34] px-8 text-white hover:bg-[#2e6b5c]">
              Continue
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* Context 3: Full width */}
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-8">
          <p className="mb-4 text-sm font-medium text-[#737373]">Full Width</p>
          <div className="border-t border-[#e5e5e5] pt-6">
            <Button className="w-full bg-[#1f1f1f] py-3 text-white hover:bg-[#404040]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
