"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const briefTypes = [
  { id: "primary", label: "Primary" },
  { id: "reply", label: "Reply" },
  { id: "opposition", label: "Opposition" },
];

interface BriefBuilderTypeCardProps {
  onSubmit?: (type: string) => void;
  className?: string;
  selectedValue?: string;
}

export function BriefBuilderTypeCard({
  onSubmit,
  className,
  selectedValue,
}: BriefBuilderTypeCardProps) {
  const [selected, setSelected] = React.useState<string | null>(selectedValue || null);

  const handleSelect = (type: string) => {
    setSelected(type);
    if (onSubmit) {
      // Small delay to show selection before transitioning
      setTimeout(() => {
        onSubmit(type);
      }, 150);
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
      <h3 className="mb-4 text-lg font-semibold text-[#212223]">Select brief type</h3>

      {/* Question */}
      <p className="mb-6 text-[#212223]">
        I can help you draft a brief supporting a motion to dismiss. To ensure the draft fits your scenario, are you drafting a{" "}
        <strong>Primary</strong>, <strong>Reply</strong>, or <strong>Opposition</strong> brief?
      </p>

      {/* Clickable Options */}
      <div className="space-y-3">
        {briefTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-3 text-left transition-colors",
              selected === type.id 
                ? "border-[#1d4b34] bg-[#f0f5f3]" 
                : "border-[#e5e5e5] hover:bg-[#f7f7f7]"
            )}
          >
            <div className={cn(
              "flex size-4 items-center justify-center rounded-full border-2",
              selected === type.id 
                ? "border-[#1d4b34]" 
                : "border-[#737373]"
            )}>
              {selected === type.id && (
                <div className="size-2 rounded-full bg-[#1d4b34]" />
              )}
            </div>
            <span className="text-[#212223]">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
