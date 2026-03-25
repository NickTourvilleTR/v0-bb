"use client";

import * as React from "react";
import { Scissors, Reply } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const motionTypes = [
  {
    id: "dismiss",
    title: "Motion to Dismiss",
    description: "Ask the court to dismiss the case before trial by challenging the sufficiency of the opposing party's claims.",
  },
  {
    id: "compel",
    title: "Motion to Compel",
    description: "Ask that the court enforce the opposing party's compliance with discovery requests.",
  },
  {
    id: "protective-order",
    title: "Motion for Protective Order",
    description: "Ask that the court limit the scope, methods, or disclosure of information obtainable via discovery.",
  },
  {
    id: "exclude-evidence",
    title: "Motion to Exclude Evidence",
    description: "Ask pretrial ruling to bar inadmissible evidence from being presented at trial.",
  },
  {
    id: "transfer-venue",
    title: "Motion to Transfer Venue",
    description: "Ask that the case is moved to a different court or jurisdiction for convenience or fairness.",
  },
  {
    id: "summary-judgment",
    title: "Motion for Summary Judgment",
    description: "Ask the court to rule in your favor without a trial by showing there are no genuine disputes of material fact.",
  },
];

interface BriefBuilderCardProps {
  question?: string;
  searchPlaceholder?: string;
  onSubmit?: (value: string) => void;
  onQuote?: (text: string) => void;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
  selectedValue?: string;
}

export function BriefBuilderCard({
  onSubmit,
  onQuote,
  className,
  selectedValue,
}: BriefBuilderCardProps) {
  const [selected, setSelected] = React.useState<string | null>(selectedValue || null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMotionSelect = (motionId: string) => {
    setSelected(motionId);
    if (onSubmit) {
      // Small delay to show selection before transitioning
      setTimeout(() => {
        onSubmit(motionId);
      }, 150);
    }
  };

  const handleQuoteClick = () => {
    if (onQuote) {
      onQuote("Select motion type: Choose the type of motion your brief will support.");
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
      {/* Quote Reply Button - Simple Icon Button Variant */}
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
      <h3 className="mb-6 text-lg font-semibold text-[#212223]">Select motion type</h3>

      {/* Motion Type Options */}
      <div className="space-y-3">
        {motionTypes.map((motion) => (
          <button
            key={motion.id}
            onClick={() => handleMotionSelect(motion.id)}
            className={cn(
              "flex w-full items-start justify-between gap-3 rounded-lg border bg-white p-4 text-left transition-colors",
              selected === motion.id
                ? "border-[#1d4b34] bg-[#f0f5f3]"
                : "border-[#e5e5e5] hover:bg-[#f7f7f7]"
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn(
                "mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                selected === motion.id
                  ? "border-[#1d4b34]"
                  : "border-[#737373]"
              )}>
                {selected === motion.id && (
                  <div className="size-2 rounded-full bg-[#1d4b34]" />
                )}
              </div>
              <div>
                <h4 className="font-semibold text-[#212223]">{motion.title}</h4>
                <p className="mt-1 text-sm text-[#737373]">{motion.description}</p>
              </div>
            </div>
            <Badge variant="outline" className="shrink-0">Workflow</Badge>
          </button>
        ))}

        {/* Go to draft another motion type - no radio button */}
        <button
          onClick={() => handleMotionSelect("other")}
          className="flex w-full items-start justify-between gap-3 rounded-lg border border-[#e5e5e5] bg-white p-4 text-left transition-colors hover:bg-[#f7f7f7]"
        >
          <div>
            <div className="flex items-center gap-2">
              <Scissors className="size-4 text-[#737373]" />
              <h4 className="font-semibold text-[#212223]">Go to draft a different motion type</h4>
            </div>
            <p className="mt-1 text-sm text-[#737373]">Describe the kind of motion that your brief will support.</p>
          </div>
          <Badge variant="secondary" className="shrink-0">CoCounsel Drafting</Badge>
        </button>
      </div>
    </div>
  );
}
