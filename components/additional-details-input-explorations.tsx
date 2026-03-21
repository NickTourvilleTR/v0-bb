"use client";

import * as React from "react";
import { Paperclip, Plus, ArrowUp, Sparkles, ChevronDown, FileText, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function AdditionalDetailsInputExplorations() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold text-[#212223]">Additional Details Input Box - 10 Design Options</h2>

      {/* Option 1: Clean Minimal */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">1. Clean Minimal</h3>
        <p className="text-sm text-[#737373]">Simple rounded input with subtle border and centered button</p>
        <div className="max-w-2xl rounded-xl border border-[#e5e5e5] bg-white p-4">
          <Textarea
            placeholder="Enter additional details here..."
            className="min-h-[100px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <div className="mt-4 flex justify-center">
            <Button className="h-10 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 2: Gray Background with Icon Bar */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">2. Gray Background with Icon Bar</h3>
        <p className="text-sm text-[#737373]">Light gray background with action icons at bottom</p>
        <div className="max-w-2xl rounded-2xl bg-[#f5f5f5] p-4">
          <Textarea
            placeholder="Enter additional details here..."
            className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5]">
                <Plus className="size-5" />
              </button>
              <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5]">
                <Paperclip className="size-5" />
              </button>
            </div>
            <Button className="h-9 rounded-lg bg-[#212223] px-4 text-white hover:bg-[#333333]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 3: Floating Label Style */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">3. Floating Label Style</h3>
        <p className="text-sm text-[#737373]">Label floats above input with elegant border focus</p>
        <div className="max-w-2xl">
          <div className="relative rounded-xl border-2 border-[#e5e5e5] bg-white p-4 focus-within:border-[#1d4b34]">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#1d4b34]">
              Additional Details
            </label>
            <Textarea
              placeholder="Share any relevant context, facts, or strategic considerations..."
              className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="h-10 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 4: Card with Attachment Chips */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">4. Card with Attachment Chips</h3>
        <p className="text-sm text-[#737373]">Shows attachment options as clickable chips</p>
        <div className="max-w-2xl rounded-xl border border-[#e5e5e5] bg-white p-4">
          <Textarea
            placeholder="Enter additional details here..."
            className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="flex items-center gap-1.5 rounded-full border border-[#e5e5e5] px-3 py-1.5 text-xs text-[#737373] hover:bg-[#f7f7f7]">
              <Paperclip className="size-3.5" />
              Attach file
            </button>
            <button className="flex items-center gap-1.5 rounded-full border border-[#e5e5e5] px-3 py-1.5 text-xs text-[#737373] hover:bg-[#f7f7f7]">
              <FileText className="size-3.5" />
              Add document
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="h-10 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 5: Bordered with Corner Icon */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">5. Bordered with Corner Icon</h3>
        <p className="text-sm text-[#737373]">Paperclip icon positioned in top-right corner</p>
        <div className="max-w-2xl">
          <div className="relative rounded-xl border border-[#e5e5e5] bg-white">
            <Textarea
              placeholder="Enter additional details here..."
              className="min-h-[100px] resize-none border-0 bg-transparent px-4 py-3 pr-12 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
            />
            <button className="absolute right-3 top-3 rounded-md p-1.5 text-[#737373] hover:bg-[#f7f7f7] hover:text-[#212223]">
              <Paperclip className="size-5" />
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="h-10 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 6: Split Action Buttons */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">6. Split Action Buttons</h3>
        <p className="text-sm text-[#737373]">Two equal-width action buttons below input</p>
        <div className="max-w-2xl rounded-xl border border-[#e5e5e5] bg-white p-4">
          <Textarea
            placeholder="Enter additional details here..."
            className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <div className="mt-4 flex gap-3">
            <Button variant="outline" className="h-10 flex-1 border-[#e5e5e5] text-[#737373]">
              <Paperclip className="mr-2 size-4" />
              Attach
            </Button>
            <Button className="h-10 flex-1 bg-[#1d4b34] text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 7: Modern Chat Style */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">7. Modern Chat Style</h3>
        <p className="text-sm text-[#737373]">Chat-like input with circular send button</p>
        <div className="max-w-2xl rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-3">
          <Textarea
            placeholder="Enter additional details here..."
            className="min-h-[60px] resize-none border-0 bg-transparent p-1 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button className="flex size-9 items-center justify-center rounded-full text-[#737373] hover:bg-[#e5e5e5]">
                <Plus className="size-5" />
              </button>
              <button className="flex size-9 items-center justify-center rounded-full text-[#737373] hover:bg-[#e5e5e5]">
                <Paperclip className="size-5" />
              </button>
            </div>
            <button className="flex size-10 items-center justify-center rounded-full bg-[#1d4b34] text-white hover:bg-[#163d2a]">
              <ArrowUp className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Option 8: AI-Assisted Style */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">8. AI-Assisted Style</h3>
        <p className="text-sm text-[#737373]">Sparkle icon suggests AI enhancement available</p>
        <div className="max-w-2xl rounded-xl border border-[#e5e5e5] bg-white">
          <div className="flex items-start gap-3 p-4">
            <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#fff4e6]">
              <Sparkles className="size-4 text-[#d64000]" />
            </div>
            <Textarea
              placeholder="Describe your case details and CoCounsel will help structure them..."
              className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
            />
          </div>
          <div className="flex justify-center border-t border-[#e5e5e5] p-3">
            <Button className="h-10 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 9: Expandable with Character Count */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">9. Expandable with Character Count</h3>
        <p className="text-sm text-[#737373]">Shows character count and expandable textarea</p>
        <div className="max-w-2xl rounded-xl border border-[#e5e5e5] bg-white p-4">
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter additional details here..."
            className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-[#999999]">{value.length} / 2000 characters</span>
            <button className="text-xs text-[#737373] hover:text-[#212223]">
              <Paperclip className="inline size-3.5" /> Attach
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="h-10 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Option 10: Voice Input Option */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#212223]">10. Voice Input Option</h3>
        <p className="text-sm text-[#737373]">Includes microphone button for voice input</p>
        <div className="max-w-2xl rounded-2xl bg-[#f7f7f7] p-4">
          <Textarea
            placeholder="Type or speak your additional details..."
            className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button className="flex size-9 items-center justify-center rounded-lg text-[#737373] hover:bg-[#e5e5e5]">
                <Paperclip className="size-5" />
              </button>
              <button className="flex size-9 items-center justify-center rounded-lg text-[#737373] hover:bg-[#e5e5e5]">
                <Mic className="size-5" />
              </button>
            </div>
            <Button className="h-9 rounded-lg bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
