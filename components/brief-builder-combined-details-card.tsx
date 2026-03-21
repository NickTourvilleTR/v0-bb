"use client";

import { Pencil, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BriefBuilderCombinedDetailsCardProps {
  onContinue?: (selectedParty: string, additionalDetails: string) => void;
  onSkip?: () => void;
  showTags?: boolean;
  className?: string;
  disabled?: boolean;
  defaultParty?: string;
}

export function BriefBuilderCombinedDetailsCard({
  onContinue,
  onSkip,
  showTags = true,
  className,
  disabled = false,
  defaultParty = "",
}: BriefBuilderCombinedDetailsCardProps) {
  const [selectedParty, setSelectedParty] = React.useState<string>(defaultParty);
  const [additionalDetails, setAdditionalDetails] = React.useState("");

  const handleContinue = () => {
    if (onContinue && selectedParty) {
      onContinue(selectedParty, additionalDetails);
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
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#212223]">Review your selections</h3>
        {showTags && (
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Motion for Summary Judgment
            </span>
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Primary brief
            </span>
          </div>
        )}
      </div>

      {/* Case Summary */}
      <div className="mb-6 space-y-4 text-[#212223]">
        <p>
          Plaintiff <strong>Adrienne Love</strong>, an individual residing in California, brings this action against 28 defendants including publishers, literary agents, talent agencies, producers, and author <strong>Rebecca Serle</strong>.
        </p>
        <p>
          Love alleges that her unpublished memoir <em>Eat the Lemon</em> — a personal account of traveling to the Amalfi Coast to reconnect with her deceased mother — was misappropriated and formed the basis of Serle's novel <em>One Italian Summer</em>, published by Atria Books (S&S) in March 2022.
        </p>
        <p>
          Love further alleges a coordinated conspiracy among her former literary representatives and industry defendants to exploit her manuscript, silence her objections, and profit from the resulting book and Paramount film adaptation.
        </p>
        <p>
          <strong>Jurisdiction:</strong> U.S. District Court, C.D. California, Western Division — federal question under the Copyright Act (28 U.S.C. §§ 1331, 1338(a)) with supplemental jurisdiction over state law claims (28 U.S.C. § 1367(a))
        </p>
      </div>

      {/* Parties Section */}
      <p className="mb-4 text-[#212223]">
        I've also identified the following parties in the case.
      </p>

      <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-medium text-[#212223]">
            Please indicate which party you represent:
          </p>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-2 border-[#cccccc] text-[#404040] hover:bg-[#f2f2f2]"
          >
            <Pencil className="size-3" />
            Edit
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox
              id="plaintiff1"
              checked={selectedParty === "plaintiff1"}
              onCheckedChange={disabled ? undefined : () => setSelectedParty("plaintiff1")}
              disabled={true}
              className="border-[#737373] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c] disabled:opacity-50"
            />
            <label htmlFor="plaintiff1" className="text-[#737373] cursor-not-allowed">
              <strong>Plaintiff party 1:</strong> Adrienne Love
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="defendant1"
              checked={selectedParty === "defendant1"}
              onCheckedChange={disabled ? undefined : () => setSelectedParty("defendant1")}
              disabled={disabled}
              className="border-[#737373] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]"
            />
            <label htmlFor="defendant1" className="text-[#212223] cursor-pointer">
              <strong>Representing defendant party 1:</strong> Airbnb Inc.
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="defendant2"
              checked={selectedParty === "defendant2"}
              onCheckedChange={disabled ? undefined : () => setSelectedParty("defendant2")}
              disabled={disabled}
              className="border-[#737373] data-[state=checked]:bg-[#2e6b5c] data-[state=checked]:border-[#2e6b5c]"
            />
            <label htmlFor="defendant2" className="text-[#212223] cursor-pointer">
              <strong>Representing defendant party 2:</strong> Simon and Schuster, LLC
            </label>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-[#e5e5e5]" />

      {/* Additional Details Section */}
      <div className="mb-4 flex items-center gap-2">
        <h4 className="text-lg font-semibold text-[#212223]">Additional details</h4>
        <span className="rounded-full bg-[#f2f2f2] px-2 py-0.5 text-xs text-[#737373]">Optional</span>
      </div>
      
      <p className="mb-4 text-[#212223]">
        <strong>Are there any other key details you can provide?</strong>{" "}
        These will help tailor the brief to your scenario. You can enter additional information such as:
      </p>

      {/* Bullet List */}
      <ul className="mb-4 ml-6 list-disc space-y-1 text-[#212223]">
        <li>Pertinent facts</li>
        <li>Relevant context</li>
        <li>Theory of the case</li>
        <li>Client's side of the story</li>
        <li>Contested facts and issues</li>
        <li>Strategic objectives or considerations</li>
      </ul>

      {/* Input Box */}
      <div className="rounded-xl border border-[#e5e5e5] bg-white">
        <div className="relative">
          <Textarea
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            placeholder="Enter additional details here..."
            className="min-h-[80px] resize-none border-0 bg-transparent px-4 py-3 pr-12 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
          />
          <button className="absolute right-3 top-3 p-1 text-[#737373] hover:text-[#212223]">
            <Paperclip className="size-5" />
          </button>
        </div>
        <div className="flex justify-center px-3 pb-3 pt-2">
          <Button
            onClick={handleContinue}
            disabled={!selectedParty}
            className="h-11 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
