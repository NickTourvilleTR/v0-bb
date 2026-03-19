"use client";

import { Paperclip, BookOpen, AtSign, Sparkles, ArrowUp, Image } from "lucide-react";
import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CocoChatInputProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
  variant?: "start" | "conversation";
}

export function CocoChatInput({
  value: controlledValue,
  onValueChange,
  placeholder = "Ask CoCounsel to perform a legal task...",
  onSubmit,
  className,
  variant = "start",
}: CocoChatInputProps) {
  const [internalValue, setInternalValue] = React.useState("");
  const value = controlledValue ?? internalValue;
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit?.(value);
      setInternalValue("");
      onValueChange?.("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={cn("w-full max-w-3xl", className)}>
      <div className="relative rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
        {/* Text Area */}
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="min-h-[56px] resize-none border-0 bg-transparent px-4 pt-4 pb-12 text-[#212223] placeholder:text-[#999999] focus-visible:ring-0 focus-visible:ring-offset-0"
          rows={1}
        />

        {/* Bottom Toolbar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              <Paperclip className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              <BookOpen className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              <AtSign className="size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
            >
              <Sparkles className="size-4" />
            </Button>
            <Button
              onClick={handleSubmit}
              size="icon"
              className="size-8 rounded-full bg-[#e5e5e5] text-[#999999] hover:bg-[#d5d5d5]"
              disabled={!value.trim()}
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
