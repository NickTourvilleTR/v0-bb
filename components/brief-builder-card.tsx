"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

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
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
}

export function BriefBuilderCard({
  onSubmit,
  className,
}: BriefBuilderCardProps) {
  const handleMotionSelect = (motionId: string) => {
    if (onSubmit) {
      onSubmit(motionId);
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
      <h3 className="mb-6 text-lg font-semibold text-[#212223]">Select motion type</h3>

      {/* Motion Type Options */}
      <div className="space-y-3">
        {motionTypes.map((motion) => (
          <button
            key={motion.id}
            onClick={() => handleMotionSelect(motion.id)}
            className="w-full rounded-lg border border-[#e5e5e5] bg-white p-4 text-left transition-colors hover:bg-[#f7f7f7]"
          >
            <h4 className="font-semibold text-[#212223]">{motion.title}</h4>
            <p className="mt-1 text-sm text-[#737373]">{motion.description}</p>
          </button>
        ))}

        {/* Draft another motion type */}
        <button
          onClick={() => handleMotionSelect("other")}
          className="w-full rounded-lg border border-[#e5e5e5] bg-white p-4 text-left transition-colors hover:bg-[#f7f7f7]"
        >
          <div className="flex items-center gap-2">
            <Search className="size-4 text-[#737373]" />
            <h4 className="font-semibold text-[#212223]">Draft another motion type</h4>
          </div>
          <p className="mt-1 text-sm text-[#737373]">Describe the kind of motion that your brief will support.</p>
        </button>
      </div>
    </div>
  );
}
