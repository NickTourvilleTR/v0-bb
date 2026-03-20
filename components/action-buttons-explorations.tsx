"use client";

import { Button } from "@/components/ui/button";
import { Paperclip, Image, ArrowUp, ArrowRight, ChevronRight, SkipForward, Send, Plus } from "lucide-react";

export function ActionButtonsExplorations() {
  return (
    <div className="space-y-12 p-8">
      <h1 className="text-2xl font-bold text-[#212223]">Action Buttons - 10 Design Explorations</h1>

      {/* Exploration 1: Stacked Buttons */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">1. Stacked Vertical Layout</p>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Paperclip className="size-5" />
            </button>
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Image className="size-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-xs">
            <Button className="h-11 w-full bg-[#1d4b34] text-white hover:bg-[#163d2a]">
              Submit
            </Button>
            <Button variant="ghost" className="h-11 w-full text-[#737373] hover:text-[#212223]">
              Skip this step
            </Button>
          </div>
        </div>
      </div>

      {/* Exploration 2: Primary Only with Text Link */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">2. Primary Button with Text Link Skip</p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Paperclip className="size-5" />
            </button>
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Image className="size-5" />
            </button>
            <Button className="h-11 px-8 bg-[#1d4b34] text-white hover:bg-[#163d2a]">
              <Send className="mr-2 size-4" />
              Submit
            </Button>
          </div>
          <button className="text-sm text-[#737373] underline hover:text-[#212223]">
            Skip this step
          </button>
        </div>
      </div>

      {/* Exploration 3: Pill Buttons */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">3. Pill-Shaped Buttons</p>
        <div className="flex items-center justify-center gap-3">
          <button className="p-2 text-[#737373] hover:text-[#212223]">
            <Paperclip className="size-5" />
          </button>
          <button className="p-2 text-[#737373] hover:text-[#212223]">
            <Image className="size-5" />
          </button>
          <Button variant="outline" className="h-10 rounded-full px-6 border-[#e5e5e5] text-[#737373] hover:bg-[#f7f7f7]">
            Skip
          </Button>
          <Button className="h-10 rounded-full px-6 bg-[#1d4b34] text-white hover:bg-[#163d2a]">
            Submit
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      {/* Exploration 4: Icon-Heavy Compact */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">4. Compact Icon-Heavy</p>
        <div className="flex items-center justify-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] text-[#737373] hover:bg-[#f7f7f7]">
            <Paperclip className="size-5" />
          </button>
          <button className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] text-[#737373] hover:bg-[#f7f7f7]">
            <Image className="size-5" />
          </button>
          <button className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] text-[#737373] hover:bg-[#f7f7f7]">
            <SkipForward className="size-5" />
          </button>
          <button className="flex size-10 items-center justify-center rounded-lg bg-[#1d4b34] text-white hover:bg-[#163d2a]">
            <ArrowUp className="size-5" />
          </button>
        </div>
      </div>

      {/* Exploration 5: Full Width Buttons */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">5. Full Width Side-by-Side</p>
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Paperclip className="size-5" />
            </button>
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Image className="size-5" />
            </button>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="h-11 flex-1 border-[#e5e5e5] text-[#737373] hover:bg-[#f7f7f7]">
              Skip this step
            </Button>
            <Button className="h-11 flex-1 bg-[#1d4b34] text-white hover:bg-[#163d2a]">
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Exploration 6: Floating Action Style */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">6. Floating Action Style</p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1 rounded-full border border-[#e5e5e5] bg-[#f7f7f7] p-1">
            <button className="flex size-9 items-center justify-center rounded-full text-[#737373] hover:bg-white">
              <Paperclip className="size-4" />
            </button>
            <button className="flex size-9 items-center justify-center rounded-full text-[#737373] hover:bg-white">
              <Image className="size-4" />
            </button>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-[#e5e5e5] bg-[#f7f7f7] p-1">
            <button className="flex h-9 items-center rounded-full px-4 text-sm text-[#737373] hover:bg-white">
              Skip
            </button>
            <button className="flex h-9 items-center rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Exploration 7: Minimal with Divider */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">7. Minimal with Divider</p>
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 text-[#737373] hover:text-[#212223]">
            <Paperclip className="size-5" />
          </button>
          <button className="p-2 text-[#737373] hover:text-[#212223]">
            <Image className="size-5" />
          </button>
          <div className="h-8 w-px bg-[#e5e5e5]" />
          <button className="text-sm text-[#737373] hover:text-[#212223]">
            Skip
            <ChevronRight className="ml-1 inline size-4" />
          </button>
          <div className="h-8 w-px bg-[#e5e5e5]" />
          <Button className="h-10 px-6 bg-[#1d4b34] text-white hover:bg-[#163d2a]">
            Submit
          </Button>
        </div>
      </div>

      {/* Exploration 8: Card Style Buttons */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">8. Card Style Options</p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-2">
            <button className="flex size-12 items-center justify-center rounded-xl border border-[#e5e5e5] text-[#737373] hover:border-[#1d4b34] hover:text-[#1d4b34]">
              <Paperclip className="size-5" />
            </button>
            <button className="flex size-12 items-center justify-center rounded-xl border border-[#e5e5e5] text-[#737373] hover:border-[#1d4b34] hover:text-[#1d4b34]">
              <Image className="size-5" />
            </button>
          </div>
          <button className="flex h-12 items-center rounded-xl border border-[#e5e5e5] px-5 text-sm text-[#737373] hover:border-[#212223]">
            <SkipForward className="mr-2 size-4" />
            Skip
          </button>
          <button className="flex h-12 items-center rounded-xl bg-[#1d4b34] px-6 text-sm text-white hover:bg-[#163d2a]">
            <Send className="mr-2 size-4" />
            Submit
          </button>
        </div>
      </div>

      {/* Exploration 9: Segmented Control Style */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">9. Segmented Control Style</p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Paperclip className="size-5" />
            </button>
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Image className="size-5" />
            </button>
          </div>
          <div className="inline-flex rounded-lg border border-[#e5e5e5] p-1">
            <button className="rounded-md px-4 py-2 text-sm text-[#737373] hover:bg-[#f7f7f7]">
              Skip this step
            </button>
            <button className="rounded-md bg-[#1d4b34] px-4 py-2 text-sm text-white hover:bg-[#163d2a]">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Exploration 10: Bottom Bar Style */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
        <p className="mb-4 text-sm font-medium text-[#737373]">10. Bottom Bar with Attachments Left</p>
        <div className="flex items-center justify-between rounded-lg bg-[#f7f7f7] p-3">
          <div className="flex items-center gap-2">
            <button className="flex size-9 items-center justify-center rounded-md text-[#737373] hover:bg-white">
              <Plus className="size-5" />
            </button>
            <button className="flex size-9 items-center justify-center rounded-md text-[#737373] hover:bg-white">
              <Paperclip className="size-5" />
            </button>
            <button className="flex size-9 items-center justify-center rounded-md text-[#737373] hover:bg-white">
              <Image className="size-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-9 rounded-md px-4 text-sm text-[#737373] hover:bg-white">
              Skip
            </button>
            <Button className="h-9 rounded-md bg-[#1d4b34] px-5 text-sm text-white hover:bg-[#163d2a]">
              Submit
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
