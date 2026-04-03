"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const briefParties = [
  { label: "Plaintiff 1", name: "Adrienne Love", functional: false, disabled: true },
  { label: "Defendant 1", name: "Airbnb, Inc.", functional: false, disabled: false },
  { label: "Defendant 2", name: "Simon & Schuster, LLC", functional: true, disabled: false },
  { label: "Defendant 3", name: "Sound Made Public, Inc.", functional: false, disabled: false },
  { label: "Defendant 4", name: "Folio Literary Agency", functional: false, disabled: false },
  { label: "Defendant 5", name: "The Gotham Group, LLC", functional: false, disabled: false },
  { label: "Defendant 6", name: "3 Arts Entertainment, LLC", functional: false, disabled: false },
  { label: "Defendant 7", name: "Creative Artists Agency, LLC", functional: false, disabled: false },
  { label: "Defendant 8", name: "William Morris Endeavor Entertainment, LLC", functional: false, disabled: false },
];

interface BriefBuilderComplaintDetailsCardProps {
  onSelect?: (party: string) => void;
  disabled?: boolean;
  defaultSelected?: string;
  className?: string;
}

export function BriefBuilderComplaintDetailsCard({
  onSelect,
  disabled = false,
  defaultSelected = "",
  className,
}: BriefBuilderComplaintDetailsCardProps) {
  const [selectedParty, setSelectedParty] = React.useState<string>(defaultSelected);

  const handleToggle = (name: string, functional: boolean) => {
    if (!functional || disabled) return;
    const next = selectedParty === name ? "" : name;
    setSelectedParty(next);
    if (next && onSelect) {
      setTimeout(() => {
        onSelect(next);
      }, 150);
    }
  };

  return (
    <div className={cn("rounded-xl border border-[#e5e5e5] bg-white p-6", className)}>
      <h3 className="mb-4 text-base font-semibold text-[#212223]">Complaint details</h3>

      <div className="space-y-4">
        {/* Jurisdiction */}
        <div>
          <p className="text-sm">
            <span className="font-semibold text-[#212223]">Jurisdiction:</span>{" "}
            <span className="text-[#212223]">California</span>
          </p>
        </div>

        {/* Party you represent */}
        <div>
          <p className="mb-3 text-sm font-semibold text-[#212223]">Party you represent:</p>
          <div className="space-y-2.5">
            {briefParties.map((party) => (
              <label
                key={party.name}
                className={cn(
                  "flex items-center gap-3",
                  party.functional && !disabled ? "cursor-pointer" : party.disabled ? "cursor-default" : "cursor-not-allowed"
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedParty === party.name}
                  onChange={() => handleToggle(party.name, party.functional)}
                  disabled={party.disabled || disabled}
                  className={cn(
                    "size-4 rounded border-[#a3a3a3] accent-[#1d4b34]",
                    !party.functional && !party.disabled && "cursor-not-allowed",
                    party.disabled && "opacity-30 cursor-not-allowed"
                  )}
                />
                <span
                  className={cn(
                    "text-sm",
                    party.disabled ? "text-[#a3a3a3]" : "text-[#212223]"
                  )}
                >
                  <span className="font-medium">{party.label}:</span> {party.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
