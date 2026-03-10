"use client";

import { Sparkles, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BriefBuilderCardProps {
  question: string;
  searchPlaceholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function BriefBuilderCard({
  question,
  searchPlaceholder = "Search for a motion type",
  onSubmit,
  className,
}: BriefBuilderCardProps) {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(searchValue);
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
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="size-5 text-[#212223]" />
        <h3 className="text-lg font-semibold text-[#212223]">Brief Builder</h3>
      </div>

      {/* Question */}
      <p className="mb-6 text-[#212223]">{question}</p>

      {/* Search Field */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-[#212223]">
          Search
        </label>
        <div className="relative">
          <Input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-11 border-[#cccccc] bg-white pr-10 text-[#212223] placeholder:text-[#737373] focus-visible:ring-[#2e6b5c]"
          />
          <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#737373]" />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        variant="outline"
        className="h-10 border-[#cccccc] bg-white px-6 text-[#404040] hover:bg-[#f2f2f2]"
        disabled={!searchValue.trim()}
      >
        Submit
      </Button>
    </div>
  );
}
