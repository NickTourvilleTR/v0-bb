"use client";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BriefBuilderDetailsCardProps {
  onDone?: (selectedParty: string) => void;
  showTags?: boolean;
  className?: string;
  disabled?: boolean;
  defaultParty?: string;
}

export function BriefBuilderDetailsCard({
  onDone,
  showTags = true,
  className,
  disabled = false,
  defaultParty = "",
}: BriefBuilderDetailsCardProps) {
  const [selectedParty, setSelectedParty] = React.useState<string>(defaultParty);

  const handleDone = () => {
    if (onDone && selectedParty) {
      onDone(selectedParty);
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
        <h3 className="text-lg font-semibold text-[#212223]">Case details</h3>
        {showTags && (
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Motion to dismiss
            </span>
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Primary brief
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mb-4 text-[#212223]">
        The following details were extracted from your uploaded documents.{" "}
        <strong>Review and enter any edit instructions as necessary.</strong>
      </p>

      {/* Case Details Box */}
      <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-[#fcfcfc] p-4">
        <div className="space-y-1 text-[#212223]">
          <p><strong>Judge's name:</strong> Andre Birotte Jr.</p>
          <p><strong>Docket number:</strong> 2:2025-cv-01779</p>
          <p><strong>Venue:</strong> Central District of California</p>
          <p><strong>Selected jurisdiction (sets the scope for your research):</strong> California</p>
          <p>
            <strong>Template:</strong> Asserting a motion  |{" "}
            <a href="#" className="text-[#006fc4] underline hover:no-underline">
              Preview template
            </a>
          </p>
        </div>
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

      {/* Done Button */}
      {!disabled && (
        <div className="flex justify-center">
          <Button
            onClick={handleDone}
            className="h-10 bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]"
            disabled={!selectedParty}
          >
            Done
          </Button>
        </div>
      )}
    </div>
  );
}
