"use client";
// Argue screen component
import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { List, Plus, FileText } from "lucide-react";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";
import { SelectionContextMenu, useSelectionContextMenu } from "@/components/selection-context-menu";
import { FilePreviewIcon } from "@/components/file-preview-icon";

interface ArgueScreenProps {
  className?: string;
  onNextSupportingAuthority: () => void;
  onSkipToGenerateDraft: () => void;
  onEditOutline: () => void;
  onQuote: (text: string) => void;
  flowType?: "brief" | "judicial";
  argumentsState?: any[];
  setArgumentsState?: (state: any[]) => void;
}

export const arguments_data = [
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

// Judicial flow uses a grouped structure with party headers
const judicial_claims_grouped = [
  {
    partyHeader: "Plaintiff party 1: 516, Inc. dba DG Plumbing",
    claims: [
      {
        id: "breach-of-insurance-contract",
        title: "Breach of Insurance Contract",
        sourceFile: "COMPLAINT filed by 516, Inc.",
        summary: "Plaintiff claims Richmond National breached the insurance policy by failing to pay benefits for their remediation claims even though they say they complied with the policy.",
        points: [
          "Plaintiff alleges they had a valid insurance contract with Richmond that required them to indemnify and pay benefits.",
          "Plaintiff claims they performed all required conditions under the policy and therefore expected coverage, peace of mind, and financial protection.",
          "Plaintiff says Defendant failed and refused to pay any benefits, causing damages.",
        ],
        checked: true,
      },
      {
        id: "bad-faith-claim",
        title: "Breach of the implied covenant of good faith and fair dealing",
        sourceFile: null,
        summary: "Plaintiff claims Richmond acted in bad faith by unreasonably delaying, denying, and mishandling their insurance claim.",
        points: [
          "Plaintiff alleges Richmond wrongfully withheld benefits due under the policy, including by denying the claim and delaying payment without proper cause.",
          "Richmond handled the claim unfairly by failing to investigate thoroughly, objectively, and fairly, delaying claim processing, misrepresenting policy terms, and failing to communicate properly.",
          "Plaintiff further alleges Richmond violated California insurance statutes and claims-handling regulations, and that its conduct was intentional, malicious, and oppressive.",
        ],
        checked: true,
      },
    ],
  },
  {
    partyHeader: "Defendant party 1: Richmond National Insurance Company",
    claims: [
      {
        id: "breach-of-contract-claim",
        title: "Breach of Contract Claim",
        sourceFile: "NOTICE OF MOTION AND MOTION to Dismiss Case",
        summary: "Richmond argues the breach of contract claim fails because the policy did not cover DG Plumbing's remediation costs, so denying the claim was not a breach.",
        points: [
          "The policy only covers amounts the insured is legally required to pay as \"damages\", and Richmond argues these remediation expenses were voluntary cleanup costs, not court-ordered damages.",
          "Richmond says there was no lawsuit or court order requiring DG Plumbing to pay these amounts, so the claim falls outside the policy's insuring agreement.",
          "Richmond also argues DG Plumbing violated the policy's \"no voluntary payments\" provision by incurring remediation expenses without Richmond's consent, which independently bars coverage.",
        ],
        checked: true,
      },
      {
        id: "bad-faith-defense",
        title: "Breach of the implied covenant of good faith and fair dealing",
        sourceFile: "NOTICE OF MOTION AND MOTION to Dismiss Case",
        summary: "Richmond argues the bad faith claim fails because there can be no bad faith if there was no coverage owed under the policy.",
        points: [
          "Under California law, a bad faith claim generally requires that the insurer first owed benefits under the policy.",
          "Because Richmond argues the policy did not cover the remediation expenses, it says DG Plumbing cannot show benefits were wrongfully withheld.",
          "Richmond characterizes the bad faith claim as a \"tagalong\" claim that rises or falls with the contract claim, so if the contract claim is dismissed, the bad faith claim should be dismissed too.",
        ],
        checked: true,
      },
    ],
  },
];

// Flat version for state management compatibility
const judicial_arguments_data = judicial_claims_grouped.flatMap(group => group.claims.map(claim => ({
  ...claim,
  number: 0, // not used in judicial
  appliesTo: "", // not used in judicial
})));

export function ArgueScreen({ className, onNextSupportingAuthority, onSkipToGenerateDraft, onEditOutline, onQuote, flowType = "brief", argumentsState: propArgumentsState, setArgumentsState: propSetArgumentsState }: ArgueScreenProps) {
  const [localArgumentsState, setLocalArgumentsState] = React.useState(flowType === "judicial" ? judicial_arguments_data : arguments_data);
  // Use passed-down state if available, otherwise use local state
  const argumentsState = propArgumentsState ?? localArgumentsState;
  const setArgumentsState = propSetArgumentsState ?? setLocalArgumentsState;
  const [showOutlinePreview, setShowOutlinePreview] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { position, hide } = useSelectionContextMenu(contentRef as React.RefObject<HTMLElement>);

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
    <div className={cn("flex h-full flex-1 flex-col overflow-hidden bg-[#fcfcfc]", className)}>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-4xl gap-6 px-6 py-8 pb-32">
          {/* Left sidebar buttons - sticky */}
          <div className="sticky top-8 flex h-fit flex-col gap-2">
            <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
              <List className="size-5 text-[#212223]" />
            </button>
            <button 
              onClick={() => setShowOutlinePreview(true)}
              className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]"
            >
              <FilePreviewIcon className="size-5 text-[#1d4b34]" />
            </button>
          </div>

          {/* Main content column */}
          <div ref={flowType === "brief" ? contentRef : undefined} className="flex-1 max-w-3xl">
            {/* Header */}
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                {flowType === "judicial" ? "CLAIMS" : "ARGUE"}
              </p>
              <h1 className="text-2xl font-semibold text-[#212223]">
                {flowType === "judicial" ? "Select claims to decide on" : "Select the desired arguments"}
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
            <span className="text-sm text-[#737373]">��</span>
              <span className="text-sm text-[#737373]">{selectedCount} {flowType === "judicial" ? "Claims" : "Arguments"} selected</span>
          </div>

          {/* Arguments List */}
          <div className="space-y-4 pb-4">
            {flowType === "judicial" ? (
              // Judicial flow - grouped by party with new card structure
              judicial_claims_grouped.map((group) => (
                <div key={group.partyHeader}>
                  {/* Party Header */}
                  <h2 className="mb-4 text-lg font-semibold text-[#212223]">{group.partyHeader}</h2>
                  
                  {/* Claims under this party */}
                  <div className="space-y-4">
                    {group.claims.map((claim) => {
                      const stateItem = argumentsState.find(a => a.id === claim.id);
                      const isChecked = stateItem?.checked ?? false;
                      
                      return (
                        <div
                          key={claim.id}
                          className={cn(
                            "rounded-lg border p-5",
                            isChecked ? "border-[#1d4b34] bg-[#f5f7f6]" : "border-[#e5e5e5] bg-white"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox 
                              id={claim.id}
                              checked={isChecked}
                              onCheckedChange={() => toggleArgument(claim.id)}
                              className="mt-0.5 border-[#737373] data-[state=checked]:border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]"
                            />
                            <div className="flex-1">
                              <label htmlFor={claim.id} className="cursor-pointer">
                                <p className="font-semibold text-[#212223]">{claim.title}</p>
                              </label>
                              
                              {/* Source file pill - only if sourceFile exists */}
                              {claim.sourceFile && (
                                <div className="mt-2">
                                  <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5">
                                    <FileText className="size-4 text-[#737373]" />
                                    <span className="text-sm text-[#737373]">{claim.sourceFile}</span>
                                  </div>
                                </div>
                              )}
                              
                              {/* Summary */}
                              <p className={cn("text-sm text-[#212223]", claim.sourceFile ? "mt-3" : "mt-2")}>{claim.summary}</p>
                              
                              {/* Bullet points */}
                              <ul className="mt-2 ml-4 list-disc space-y-1">
                                {claim.points.map((point, idx) => (
                                  <li key={idx} className="text-sm text-[#212223]">{point}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              // Brief flow - original flat structure
              argumentsState.map((argument) => (
                <div
                  key={argument.id}
                  className={cn(
                    "rounded-lg border p-5",
                    argument.checked ? "border-[#1d4b34] bg-[#f5f7f6]" : "border-[#e5e5e5] bg-white"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id={argument.id}
                      checked={argument.checked}
                      onCheckedChange={() => toggleArgument(argument.id)}
                      className="mt-0.5 border-[#737373] data-[state=checked]:border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]"
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
                        <p className="text-sm font-medium text-[#212223]">Applies to</p>
                        <ul className="ml-4 mt-1 list-disc">
                          <li className="text-sm text-[#212223]">{argument.appliesTo}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Add additional argument/claim button */}
          <button
            onClick={() => onQuote?.(flowType === "judicial" ? "Add additional claim" : "Add additional argument")}
            className="mt-2 mb-6 flex items-center gap-2 text-sm text-[#404040] hover:text-[#212223]"
          >
            <Plus className="size-4" />
            <span>{flowType === "judicial" ? "Add additional claim" : "Add additional argument"}</span>
          </button>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-3 pb-8 pt-4">
            {flowType !== "judicial" && (
              <Button
                variant="outline"
                onClick={onSkipToGenerateDraft}
                className="rounded-full border-[#cccccc] px-6 text-[#212223] hover:bg-[#f7f7f7]"
              >
                Skip to generate draft
              </Button>
            )}
            <Button
              onClick={onNextSupportingAuthority}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Next: {flowType === "judicial" ? "Decide on selected claims" : "Supporting authority"}
            </Button>
          </div>
          </div>
        </div>
      </div>

      {/* Outline Preview Overlay */}
      {showOutlinePreview && (
        <OutlinePreviewModal
          onClose={() => setShowOutlinePreview(false)}
          onEdit={() => {
            setShowOutlinePreview(false);
            onEditOutline?.();
          }}
        />
      )}
      {flowType === "brief" && (
        <SelectionContextMenu
          position={position}
          onAddFacts={hide}
          onAddAuthorities={hide}
          onAskQuestion={hide}
        />
      )}
    </div>
  );
}
