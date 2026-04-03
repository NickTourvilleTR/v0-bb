"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const briefTypes = [
  { id: "primary", label: "Supporting*", functional: true },
  { id: "opposition", label: "Opposition", functional: false },
  { id: "reply", label: "Reply", functional: false },
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
  const [letterBrief, setLetterBrief] = React.useState(false);

  const handleSelect = (type: string, functional: boolean) => {
    if (!functional) return;
    setSelected(type);
    if (onSubmit) {
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
      {/* Title */}
      <h3 className="mb-3 text-base font-semibold text-[#212223]">
        What&apos;s the role of your brief?
      </h3>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-[#212223]">
        I can help you draft a brief supporting of a Motion for Summary Judgment. To ensure the brief fits your scenario, are you drafting a{" "}
        <strong>Supporting</strong>, <strong>Reply</strong>, or <strong>Opposition</strong> brief?
      </p>

      {/* Radio Options */}
      <div className="space-y-4">
        {briefTypes.map((type) => (
          <label
            key={type.id}
            className={`flex items-center gap-3 ${type.functional ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            <span
              role="radio"
              aria-checked={selected === type.id}
              onClick={() => handleSelect(type.id, type.functional)}
              className={cn(
                "flex size-[18px] flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                type.functional && "cursor-pointer",
                !type.functional && "cursor-not-allowed",
                selected === type.id
                  ? "border-[#1d4b34]"
                  : "border-[#aaaaaa]"
              )}
            >
              {selected === type.id && (
                <span className="block size-[9px] rounded-full bg-[#1d4b34]" />
              )}
            </span>
            <span
              className="text-sm text-[#212223]"
              onClick={() => handleSelect(type.id, type.functional)}
            >
              {type.label}
            </span>
          </label>
        ))}
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-[#e5e5e5]" />

      {/* Letter brief checkbox */}
      <label className="flex cursor-pointer items-center gap-3">
        <span
          role="checkbox"
          aria-checked={letterBrief}
          onClick={() => setLetterBrief((v) => !v)}
          className={cn(
            "flex size-[18px] flex-shrink-0 cursor-pointer items-center justify-center rounded border-2 transition-colors",
            letterBrief ? "border-[#1d4b34] bg-[#1d4b34]" : "border-[#aaaaaa] bg-white"
          )}
        >
          {letterBrief && (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span
          className="text-sm text-[#212223]"
          onClick={() => setLetterBrief((v) => !v)}
        >
          Format as letter brief
        </span>
      </label>
    </div>
  );
}
