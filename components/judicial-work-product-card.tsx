"use client";

import * as React from "react";
import { Scissors, Reply } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const workProductTypes = [
  {
    id: "order",
    title: "Order",
    description: "Draft a court order directing the parties or a party to take or refrain from a specific action.",
  },
  {
    id: "opinion",
    title: "Opinion",
    description: "Draft a judicial opinion explaining the court's reasoning and legal conclusions on a matter.",
  },
  {
    id: "bench-memo",
    title: "Bench memo",
    description: "Draft a bench memo summarizing the issues, facts, and legal arguments for an upcoming hearing.",
  },
];

interface JudicialWorkProductCardProps {
  onSubmit?: (value: string) => void;
  onQuote?: (text: string) => void;
  className?: string;
  selectedValue?: string;
}

export function JudicialWorkProductCard({
  onSubmit,
  onQuote,
  className,
  selectedValue,
}: JudicialWorkProductCardProps) {
  const [selected, setSelected] = React.useState<string | null>(selectedValue || null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleSelect = (id: string) => {
    setSelected(id);
    if (onSubmit) {
      setTimeout(() => {
        onSubmit(id);
      }, 150);
    }
  };

  const handleQuoteClick = () => {
    if (onQuote) {
      onQuote("Select work product: Choose the type of judicial document you'd like to draft.");
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-xl border border-[#e5e5e5] bg-white p-6",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Quote Reply Button */}
      {isHovered && (
        <button
          onClick={handleQuoteClick}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-[#1d4b34] text-white transition-transform duration-200 hover:scale-110 hover:bg-[#163d2a]"
          title="Quote this message"
        >
          <Reply className="size-4" />
        </button>
      )}

      {/* Header */}
      <h3 className="mb-6 text-lg font-semibold text-[#212223]">Select work product</h3>

      {/* Work Product Options */}
      <div className="space-y-3">
        {workProductTypes.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className={cn(
              "flex w-full items-start justify-between gap-3 rounded-lg border bg-white p-4 text-left transition-colors",
              selected === item.id
                ? "border-[#1d4b34] bg-[#f0f5f3]"
                : "border-[#e5e5e5] hover:bg-[#f7f7f7]"
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn(
                "mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                selected === item.id
                  ? "border-[#1d4b34]"
                  : "border-[#737373]"
              )}>
                {selected === item.id && (
                  <div className="size-2 rounded-full bg-[#1d4b34]" />
                )}
              </div>
              <div>
                <h4 className="font-semibold text-[#212223]">{item.title}</h4>
                <p className="mt-1 text-sm text-[#737373]">{item.description}</p>
              </div>
            </div>
            <Badge variant="outline" className="shrink-0">Workflow</Badge>
          </button>
        ))}

        {/* Go to draft another document - no radio button, scissors icon */}
        <button
          onClick={() => handleSelect("other")}
          className="flex w-full items-start justify-between gap-3 rounded-lg border border-[#e5e5e5] bg-white p-4 text-left transition-colors hover:bg-[#f7f7f7]"
        >
          <div>
            <div className="flex items-center gap-2">
              <Scissors className="size-4 text-[#737373]" />
              <h4 className="font-semibold text-[#212223]">Go to draft a different document</h4>
            </div>
            <p className="mt-1 text-sm text-[#737373]">Describe the kind of judicial document you&apos;d like to draft.</p>
          </div>
          <Badge variant="secondary" className="shrink-0">CoCounsel Drafting</Badge>
        </button>
      </div>
    </div>
  );
}
