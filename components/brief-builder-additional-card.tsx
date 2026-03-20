"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Image, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BriefBuilderAdditionalCardProps {
  showTags?: boolean;
  className?: string;
  onInputChange?: (value: string) => void;
  onSkip?: () => void;
}

export function BriefBuilderAdditionalCard({
  showTags = true,
  className,
  onInputChange,
  onSkip,
}: BriefBuilderAdditionalCardProps) {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
    onInputChange?.(value);
  };
  return (
    <div
      className={cn(
        "rounded-xl border border-[#e5e5e5] bg-white p-6",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#212223]">Additional details</h3>
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

      {/* Question */}
      <p className="mb-4 text-[#212223]">
        <strong>Are there any other key details you can provide?</strong>{" "}
        These will help tailor the brief to your scenario. You can enter additional information such as:
      </p>

      {/* Bullet List */}
      <ul className="mb-4 ml-6 list-disc space-y-1 text-[#212223]">
        <li>Pertinent facts</li>
        <li>Relevant context</li>
        <li>Theory of the case</li>
        <li>Client's side of the story</li>
        <li>Contested facts and issues</li>
        <li>Strategic objectives or considerations</li>
      </ul>

      {/* Input Box */}
      <div className="rounded-xl border border-[#e5e5e5] bg-white">
        <Textarea
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Enter additional details here..."
          className="min-h-[80px] resize-none border-0 bg-transparent px-4 py-3 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
        />
        <div className="space-y-3 px-3 pb-3">
          <div className="flex items-center justify-center gap-2">
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Paperclip className="size-5" />
            </button>
            <button className="p-2 text-[#737373] hover:text-[#212223]">
              <Image className="size-5" />
            </button>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onSkip}
              className="h-11 flex-1 border-[#e5e5e5] text-[#737373] hover:bg-[#f7f7f7]"
            >
              Skip this step
            </Button>
            <Button
              className="h-11 flex-1 bg-[#1d4b34] text-white hover:bg-[#163d2a]"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
