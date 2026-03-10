"use client";

import { Upload, FileText, Send, Paperclip, Image, ArrowUp } from "lucide-react";
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
  placeholder = "Ask anything...",
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
          className="min-h-[80px] resize-none border-0 bg-transparent px-4 pt-4 pb-14 text-[#212223] placeholder:text-[#666666] focus-visible:ring-0 focus-visible:ring-offset-0"
          rows={3}
        />

        {/* Bottom Toolbar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#f2f2f2] px-3 py-2">
          {variant === "start" ? (
            <>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-2 px-3 text-[#404040] hover:bg-[#f2f2f2] hover:text-[#212223]"
                >
                  <Upload className="size-4" />
                  <span className="text-sm">Upload</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-2 px-3 text-[#404040] hover:bg-[#f2f2f2] hover:text-[#212223]"
                >
                  <FileText className="size-4" />
                  <span className="text-sm">Library</span>
                </Button>
              </div>

              <Button
                onClick={handleSubmit}
                size="sm"
                className="h-8 rounded-md bg-[#000000] px-4 text-white hover:bg-[#212223]"
              >
                Send
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-[#404040] hover:bg-[#f2f2f2] hover:text-[#212223]"
                >
                  <Paperclip className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-[#404040] hover:bg-[#f2f2f2] hover:text-[#212223]"
                >
                  <Image className="size-4" />
                </Button>
              </div>

              <Button
                onClick={handleSubmit}
                size="icon"
                className="size-8 rounded-full bg-[#2e6b5c] text-white hover:bg-[#24594c]"
              >
                <ArrowUp className="size-4" />
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Privacy Notice */}
      <p className="mt-2 text-sm text-[#666666]">
        Your data is{" "}
        {variant === "conversation" ? (
          <a href="#" className="text-[#212223] underline hover:no-underline">
            private and secure
          </a>
        ) : (
          <>
            private and secure.{" "}
            <a href="#" className="text-[#212223] underline hover:no-underline">
              Learn more
            </a>
          </>
        )}
        {variant === "conversation" && "."}
      </p>
    </div>
  );
}
