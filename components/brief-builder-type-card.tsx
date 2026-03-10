"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BriefBuilderTypeCardProps {
  onSubmit?: (type: string) => void;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
}

export function BriefBuilderTypeCard({
  onSubmit,
  className,
  disabled = false,
  defaultValue = "",
}: BriefBuilderTypeCardProps) {
  const [selectedType, setSelectedType] = React.useState<string>(defaultValue);

  const handleSubmit = () => {
    if (onSubmit && selectedType) {
      onSubmit(selectedType);
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-[#e5e5e5] bg-white p-6",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="size-5 text-[#212223]" />
        <h3 className="text-lg font-semibold text-[#212223]">Brief Builder</h3>
      </div>

      {/* Question */}
      <p className="mb-6 text-[#212223]">
        I can help you draft a brief supporting a motion to dismiss. To ensure the draft fits your scenario, are you drafting a{" "}
        <strong>Primary</strong>, <strong>Reply</strong>, or <strong>Opposition</strong> brief?
      </p>

      {/* Radio Options */}
      <RadioGroup
        value={selectedType}
        onValueChange={disabled ? undefined : setSelectedType}
        className="mb-6 space-y-3"
        disabled={disabled}
      >
        <div className="flex items-center gap-3">
          <RadioGroupItem value="primary" id="primary" className="border-[#737373] text-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]" disabled={disabled} />
          <Label htmlFor="primary" className="text-[#212223] cursor-pointer">Primary</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="reply" id="reply" className="border-[#737373] text-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]" disabled={disabled} />
          <Label htmlFor="reply" className="text-[#212223] cursor-pointer">Reply</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="opposition" id="opposition" className="border-[#737373] text-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]" disabled={disabled} />
          <Label htmlFor="opposition" className="text-[#212223] cursor-pointer">Opposition</Label>
        </div>
      </RadioGroup>

      {/* Submit Button */}
      {!disabled && (
        <Button
          onClick={handleSubmit}
          className="h-10 bg-[#2e6b5c] px-6 text-white hover:bg-[#24594c]"
          disabled={!selectedType}
        >
          Submit
        </Button>
      )}
    </div>
  );
}
