"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const briefTypes = [
  { id: "primary", label: "Primary" },
  { id: "reply", label: "Reply" },
  { id: "opposition", label: "Opposition" },
];

interface BriefBuilderTypeCardProps {
  onSubmit?: (type: string) => void;
  className?: string;
}

export function BriefBuilderTypeCard({
  onSubmit,
  className,
}: BriefBuilderTypeCardProps) {
  const handleSelect = (type: string) => {
    if (onSubmit) {
      onSubmit(type);
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

      {/* Clickable Options */}
      <div className="space-y-3">
        {briefTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className="flex w-full items-center gap-3 rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-left transition-colors hover:bg-[#f7f7f7]"
          >
            <div className="size-4 rounded-full border-2 border-[#737373]" />
            <span className="text-[#212223]">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
