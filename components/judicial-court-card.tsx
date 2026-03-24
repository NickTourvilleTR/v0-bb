"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const courtOptions = [
  { id: "ca-district", label: "California District Court" },
  { id: "ninth-circuit", label: "U.S. Court of Appeals for the Ninth Circuit" },
];

interface JudicialCourtCardProps {
  onSubmit?: (court: string) => void;
  className?: string;
  selectedValue?: string;
}

export function JudicialCourtCard({
  onSubmit,
  className,
  selectedValue,
}: JudicialCourtCardProps) {
  const [selected, setSelected] = React.useState<string | null>(selectedValue || null);

  const handleSelect = (id: string) => {
    setSelected(id);
    if (onSubmit) {
      setTimeout(() => {
        onSubmit(id);
      }, 150);
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
      <h3 className="mb-6 text-lg font-semibold text-[#212223]">Select court</h3>

      {/* Court Options */}
      <div className="space-y-3">
        {courtOptions.map((court) => (
          <button
            key={court.id}
            onClick={() => handleSelect(court.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-3 text-left transition-colors",
              selected === court.id
                ? "border-[#1d4b34] bg-[#f0f5f3]"
                : "border-[#e5e5e5] hover:bg-[#f7f7f7]"
            )}
          >
            <div className={cn(
              "flex size-4 shrink-0 items-center justify-center rounded-full border-2",
              selected === court.id
                ? "border-[#1d4b34]"
                : "border-[#737373]"
            )}>
              {selected === court.id && (
                <div className="size-2 rounded-full bg-[#1d4b34]" />
              )}
            </div>
            <span className="text-[#212223]">{court.label}</span>
          </button>
        ))}

        {/* Another court - search icon variant */}
        <button
          onClick={() => handleSelect("other")}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-3 text-left transition-colors",
            selected === "other"
              ? "border-[#1d4b34] bg-[#f0f5f3]"
              : "border-[#e5e5e5] hover:bg-[#f7f7f7]"
          )}
        >
          <Search className="size-4 shrink-0 text-[#737373]" />
          <span className="text-[#212223]">Another court</span>
        </button>
      </div>
    </div>
  );
}
