"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { List } from "lucide-react";

interface Argument {
  id: string;
  title: string;
  points: string[];
  appliesTo?: string;
}

const defaultArguments: Argument[] = [
  {
    id: "1",
    title: "Copyright Infringement Claim Fails as a Matter of Law",
    points: [
      "Biographical Facts Are Not Protectable",
      "No Substantial Similarity Even If Treated as Fiction",
      "Random Similarities Cannot Establish Infringement",
    ],
    appliesTo: "Applies to Cause of Action 1 (Copyright Infringement)",
  },
  {
    id: "2",
    title: "State Law Claims Fail",
    points: [
      "The Conspiracy Allegations Are Fundamentally Implausible",
      "B. No Specific Conduct Alleged Against S&S",
      "Many Claims Are Untimely and/or Preempted by the Copyright Act",
    ],
    appliesTo:
      "Causes of Action 2-14 (Breach of Fiduciary Duty, Intentional Interference with Contractual Relations, Tortious Interference with Business Advantage, Intentional Misrepresentation, Negligent Misrepresentation, Negligence, Intentional Infliction of Emotional Distress, Stalking, Conspiracy, Unfair Business Practices, Accounting, Constructive Trust, and Declaratory Judgment)",
  },
  {
    id: "3",
    title: "Statute of limitations bars claims because they were filed too late.",
    points: [
      "The Conspiracy Allegations Are Fundamentally Implausible",
      "B. No Specific Conduct Alleged Against S&S",
    ],
  },
];

interface ArgumentsPanelProps {
  className?: string;
}

export function ArgumentsPanel({ className }: ArgumentsPanelProps) {
  const [selectedArgs, setSelectedArgs] = React.useState<string[]>(["1", "2", "3"]);

  const toggleArgument = (id: string) => {
    setSelectedArgs((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedArgs.length === defaultArguments.length) {
      setSelectedArgs([]);
    } else {
      setSelectedArgs(defaultArguments.map((a) => a.id));
    }
  };

  return (
    <div className={cn("flex flex-1 flex-col", className)}>
      {/* Sidebar toggle button */}
      <div className="absolute left-4 top-4">
        <button className="flex size-10 items-center justify-center rounded-md border border-[#e5e5e5] bg-white hover:bg-[#f2f2f2]">
          <List className="size-5 text-[#212223]" />
        </button>
      </div>

      {/* Main content */}
      <div className="mx-auto w-full max-w-4xl px-6 py-8">
        <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[#737373]">
          ARGUE
        </p>
        <h1 className="mb-6 text-3xl font-normal text-[#212223]">
          Select the desired arguments
        </h1>

        {/* Select All */}
        <div className="mb-4 flex items-center gap-3">
          <Checkbox
            id="select-all"
            checked={selectedArgs.length === defaultArguments.length}
            onCheckedChange={toggleAll}
            className="border-[#737373] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]"
          />
          <label htmlFor="select-all" className="text-sm text-[#212223] cursor-pointer">
            Select all
          </label>
          <span className="text-sm text-[#737373]">
            • {selectedArgs.length} Arguments selected
          </span>
        </div>

        {/* Arguments List */}
        <div className="space-y-4">
          {defaultArguments.map((arg, index) => (
            <div
              key={arg.id}
              className={cn(
                "rounded-lg border p-4 transition-colors",
                selectedArgs.includes(arg.id)
                  ? "border-[#2e6b5c] bg-[#f5f7f6]"
                  : "border-[#e5e5e5] bg-white"
              )}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  id={`arg-${arg.id}`}
                  checked={selectedArgs.includes(arg.id)}
                  onCheckedChange={() => toggleArgument(arg.id)}
                  className="mt-1 border-[#737373] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]"
                />
                <div className="flex-1">
                  <label
                    htmlFor={`arg-${arg.id}`}
                    className="cursor-pointer text-base font-semibold text-[#212223]"
                  >
                    {index + 1}. {arg.title}
                  </label>
                  <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                    {arg.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {arg.appliesTo && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-[#212223]">Applies to</p>
                      <p className="text-sm text-[#212223]">{arg.appliesTo}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
