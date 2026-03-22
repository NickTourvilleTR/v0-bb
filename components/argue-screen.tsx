"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { List, ScanEye } from "lucide-react";

interface ArgueScreenProps {
  className?: string;
  onNextSupportingAuthority?: () => void;
  onSkipToGenerateDraft?: () => void;
}

const arguments_data = [
  {
    id: "copyright-infringement",
    number: 1,
    title: "Copyright Infringement Claim Fails as a Matter of Law",
    points: [
      "Biographical Facts Are Not Protectable",
      "No Substantial Similarity Even If Treated as Fiction",
      "Random Similarities Cannot Establish Infringement",
    ],
    appliesTo: "Applies to Cause of Action 1 (Copyright Infringement)",
    checked: true,
  },
  {
    id: "state-law-claims",
    number: 2,
    title: "State Law Claims Fail",
    points: [
      "The Conspiracy Allegations Are Fundamentally Implausible",
      "B. No Specific Conduct Alleged Against S&S",
      "Many Claims Are Untimely and/or Preempted by the Copyright Act",
    ],
    appliesTo: "Causes of Action 2-14 (Breach of Fiduciary Duty, Intentional Interference with Contractual Relations, Tortious Interference with Business Advantage, Intentional Misrepresentation, Negligent Misrepresentation, Negligence, Intentional Infliction of Emotional Distress, Stalking, Conspiracy, Unfair Business Practices, Accounting, Constructive Trust, and Declaratory Judgment)",
    checked: true,
  },
  {
    id: "statute-of-limitations",
    number: 3,
    title: "Statute of limitations bars claims because they were filed too late.",
    points: [
      "The Conspiracy Allegations Are Fundamentally Implausible",
      "B. No Specific Conduct Alleged Against S&S",
      "Many Claims Are Untimely and/or Preempted by the Copyright Act",
    ],
    appliesTo: "Causes of Action 2-14 (Breach of Fiduciary Duty, Intentional Interference with Contractual Relations, Tortious Interference with Business Advantage, Intentional Misrepresentation, Negligent Misrepresentation, Negligence, Intentional Infliction of Emotional Distress, Stalking, Conspiracy, Unfair Business Practices, Accounting, Constructive Trust, and Declaratory Judgment)",
    checked: true,
  },
  {
    id: "unclean-hands",
    number: 4,
    title: "Unclean hands prevents relief because the plaintiff acted inequitably.",
    points: [
      "Time since defendant's last involvement with plaintiff occurred nearly four-and-a-half years before plaintiff filed the complaint.",
      "No other allegations connect defendant to the complaint.",
      "No basis for tolling the limitations period in the complaint.",
    ],
    appliesTo: "Causes of Action 1-16 (Copyright Infringement, Breach of Fiduciary Duty, Breach of Contract, Promissory Estoppel, Intentional Interference With Contractual Relations, Tortious Interference With Business Advantage, Intentional Misrepresentation, Negligent Misrepresentation, Negligence, Conversion, Intentional Infliction of Emotional Distress, Stalking, Conspiracy, B&P § 17200 et seq., Accounting, Constructive Trust)",
    checked: false,
  },
  {
    id: "non-protectable",
    number: 5,
    title: "Non-protectable elements cannot support a copyright claim because they consist of facts, ideas, or other material the law leaves in the public domain.",
    points: [
      "Similarities identified by plaintiff are just well-known facts",
      "Referencing facts does not constitute violation of copyright law",
      "Plaintiff cannot rest copyright claims on underlying facts.",
    ],
    appliesTo: "Cause of Action 1 (Copyright Infringement)",
    checked: false,
  },
];

export function ArgueScreen({ className, onNextSupportingAuthority, onSkipToGenerateDraft }: ArgueScreenProps) {
  // Updated card 3 with all three bullet points for statute of limitations
  const [argumentsState, setArgumentsState] = React.useState(arguments_data);

  const selectedCount = argumentsState.filter(arg => arg.checked).length;
  const allSelected = selectedCount === argumentsState.length;

  const toggleArgument = (id: string) => {
    setArgumentsState(prev => prev.map(arg => 
      arg.id === id ? { ...arg, checked: !arg.checked } : arg
    ));
  };

  const toggleAll = () => {
    const newChecked = !allSelected;
    setArgumentsState(prev => prev.map(arg => ({ ...arg, checked: newChecked })));
  };

  return (
    <div className={cn("flex flex-1 flex-col bg-[#fcfcfc]", className)}>
      {/* Left sidebar buttons - fixed positioning */}
      <div className="fixed left-6 top-8 z-20 flex flex-col gap-2 md:left-12">
        <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7] hover:shadow-sm transition-all">
          <List className="size-5 text-[#212223]" />
        </button>
        <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7] hover:shadow-sm transition-all">
          <ScanEye className="size-5 text-[#1d4b34]" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-4xl gap-6 px-6 py-8 pb-32 md:pl-20">
          {/* Main content column */}
          <div className="flex-1 max-w-3xl">
            {/* Header */}
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                ARGUE
              </p>
              <h1 className="text-2xl font-semibold text-[#212223]">
                Select the desired arguments
              </h1>
            </div>

          {/* Select All */}
          <div className="mb-6 flex items-center gap-3">
            <button 
              onClick={toggleAll}
              className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#212223]"
            >
              <div className={cn(
                "flex size-5 items-center justify-center rounded border",
                allSelected ? "border-[#1d4b34] bg-[#1d4b34]" : "border-[#cccccc] bg-white"
              )}>
                {allSelected && (
                  <svg className="size-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                )}
                {!allSelected && selectedCount > 0 && (
                  <div className="size-2 rounded-sm bg-[#1d4b34]" />
                )}
              </div>
              <span>Select all</span>
            </button>
            <span className="text-sm text-[#737373]">•</span>
            <span className="text-sm text-[#737373]">{selectedCount} Arguments selected</span>
          </div>

          {/* Arguments List */}
          <div className="space-y-4">
            {argumentsState.map((argument) => (
              <div
                key={argument.id}
                className={cn(
                  "rounded-lg border bg-white p-5",
                  argument.checked ? "border-[#1d4b34]" : "border-[#e5e5e5]"
                )}
              >
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id={argument.id}
                    checked={argument.checked}
                    onCheckedChange={() => toggleArgument(argument.id)}
                    className={cn(
                      "mt-1",
                      argument.checked ? "border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" : "border-[#cccccc]"
                    )}
                  />
                  <div className="flex-1">
                    <label htmlFor={argument.id} className="cursor-pointer">
                      <p className="font-semibold text-[#212223]">
                        {argument.number}. {argument.title}
                      </p>
                    </label>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      {argument.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-[#212223]">{point}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <p className="text-sm text-[#737373]">Applies to</p>
                      <ul className="ml-4 mt-1 list-disc">
                        <li className="text-sm text-[#212223]">{argument.appliesTo}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-3 pb-8 pt-4">
            <Button
              variant="outline"
              onClick={onSkipToGenerateDraft}
              className="rounded-full border-[#cccccc] px-6 text-[#212223] hover:bg-[#f7f7f7]"
            >
              Skip to generate draft
            </Button>
            <Button
              onClick={onNextSupportingAuthority}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Next: Supporting authority
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
