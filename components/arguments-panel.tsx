"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { List, FileBadge } from "lucide-react";

interface Argument {
  id: string;
  title: string;
  points: string[];
  appliesTo?: string;
  userAdded?: boolean;
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
    appliesTo: "Cause of Action 1 (Copyright Infringement)",
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
    appliesTo: "Causes of Action 5-14",
  },
  {
    id: "4",
    title: "Plaintiff Cannot Establish the Elements of Her Tort Claims",
    points: [
      "No Duty of Care Owed to Plaintiff",
      "No Causal Connection Between Alleged Conduct and Harm",
      "Damages Are Speculative and Unsubstantiated",
    ],
    appliesTo: "Causes of Action 6-9 (Negligence, IIED, Stalking, Conspiracy)",
  },
  {
    id: "5",
    title: "The First Amendment Bars Plaintiff's Claims",
    points: [
      "Protected Expression Under the First Amendment",
      "No Actual Malice Shown by Plaintiff",
      "Public Interest Defense Applies",
    ],
    appliesTo: "All Causes of Action",
  },
];

const userAddedArgument: Argument = {
  id: "6",
  title: "Lack of access defeats the copyright claim because defendant likely did not see the work.",
  points: [
    "No evidence provided that defendant saw or had any access to the work.",
    "Tenuous relationship between defendants at best.",
  ],
  appliesTo: "Cause of Action 1 (Copyright Infringement)",
  userAdded: true,
};

interface ArgumentsPanelProps {
  className?: string;
  showUserArgument?: boolean;
}

export function ArgumentsPanel({ className, showUserArgument = false }: ArgumentsPanelProps) {
  const [selectedArgs, setSelectedArgs] = React.useState<string[]>(["1", "2", "3"]);
  const scrollEndRef = React.useRef<HTMLDivElement>(null);
  
  const allArguments = showUserArgument 
    ? [...defaultArguments, userAddedArgument] 
    : defaultArguments;

  const toggleArgument = (id: string) => {
    setSelectedArgs((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedArgs.length === allArguments.length) {
      setSelectedArgs([]);
    } else {
      setSelectedArgs(allArguments.map((a) => a.id));
    }
  };
  
  // Auto-select user added argument when it appears and scroll to it
  React.useEffect(() => {
    if (showUserArgument && !selectedArgs.includes("6")) {
      setSelectedArgs((prev) => [...prev, "6"]);
      // Scroll to the new argument after a short delay
      setTimeout(() => {
        scrollEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
    }
  }, [showUserArgument]);

  return (
    <div className={cn("flex flex-1 flex-col overflow-y-auto", className)}>
      {/* Main content with sidebar */}
      <div className="mx-auto flex w-full max-w-4xl gap-6 px-6 py-8">
        {/* Left sidebar buttons - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <FileBadge className="size-5 text-[#1d4b34]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex-1">
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
            checked={selectedArgs.length === allArguments.length}
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
        <div className="space-y-4 pb-4">
          {allArguments.map((arg, index) => (
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
                  <div className="flex items-start justify-between">
                    <label
                      htmlFor={`arg-${arg.id}`}
                      className="cursor-pointer text-base font-semibold text-[#212223]"
                    >
                      {index + 1}. {arg.title}
                    </label>
                    {arg.userAdded && (
                      <span className="ml-2 shrink-0 rounded bg-[#ebf0ed] px-2 py-0.5 text-xs font-medium text-[#2e6b5c]">
                        User added
                      </span>
                    )}
                  </div>
                  <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                    {arg.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {arg.appliesTo && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-[#212223]">Applies to:</p>
                      <ul className="ml-4 list-disc">
                        <li className="text-sm text-[#212223]">{arg.appliesTo}</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* Scroll anchor for new arguments */}
          <div ref={scrollEndRef} />
        </div>
        </div>
      </div>
    </div>
  );
}
