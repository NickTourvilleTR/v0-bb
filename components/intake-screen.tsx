"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface IntakeScreenProps {
  className?: string;
}

export function IntakeScreen({ className }: IntakeScreenProps) {
  const [motionType, setMotionType] = React.useState("Motion for Summary Judgment");
  const [briefRole, setBriefRole] = React.useState("primary");

  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className="mx-auto max-w-3xl px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
            INTAKE SUMMARY
          </p>
          <h1 className="text-2xl font-semibold text-[#212223]">
            Review your selections
          </h1>
        </div>

        {/* Motion Summary Card */}
        <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] p-5">
          <p className="mb-3 text-sm text-[#212223]">
            <span className="font-semibold">Motion for Summary Judgment:</span>{" "}
            Movant&apos;s Memorandum of Law (Federal)
          </p>
          <ul className="ml-4 list-disc space-y-2 text-sm text-[#212223]">
            <li>
              Plaintiff Gyant Properties, LLC alleges that defendant NFM Productions, Inc. breached their insurance contract by failing to timely investigate and pay a commercial property claim following a water pipe burst on January 15, 2023
            </li>
            <li>
              Defendant&apos;s answer denies liability, asserting the damage was pre-existing and unrelated to the reported pipe burst incident
            </li>
            <li>
              Discovery is being conducted under Level 2 of Rule 190 of the Texas Rules of Civil Procedure; discovery closes on 6/30/2025
            </li>
            <li>
              Motion for summary judgment on all claims except unfair competition claim.
            </li>
            <li>
              Jurisdiction: U.S. District Court, N.D. Texas, Fort Wayne Division
            </li>
          </ul>
        </div>

        {/* Motion Type Card */}
        <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
          <h3 className="mb-3 text-sm font-medium text-[#212223]">Motion type</h3>
          <div className="relative">
            <input
              type="text"
              value={motionType}
              onChange={(e) => setMotionType(e.target.value)}
              className="w-full rounded-md border border-[#cccccc] bg-white px-4 py-2.5 pr-10 text-sm text-[#212223] focus:border-[#2e6b5c] focus:outline-none focus:ring-1 focus:ring-[#2e6b5c]"
            />
            <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#737373]" />
          </div>
        </div>

        {/* Brief Role Card */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white p-5">
          <h3 className="mb-3 text-sm font-medium text-[#212223]">Brief role</h3>
          <div className="space-y-3">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="brief-role"
                value="primary"
                checked={briefRole === "primary"}
                onChange={(e) => setBriefRole(e.target.value)}
                className="size-4 border-[#cccccc] text-[#2e6b5c] focus:ring-[#2e6b5c]"
              />
              <span className="text-sm text-[#212223]">Primary</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="brief-role"
                value="opposition"
                checked={briefRole === "opposition"}
                onChange={(e) => setBriefRole(e.target.value)}
                className="size-4 border-[#cccccc] text-[#2e6b5c] focus:ring-[#2e6b5c]"
              />
              <span className="text-sm text-[#212223]">Opposition</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="brief-role"
                value="reply"
                checked={briefRole === "reply"}
                onChange={(e) => setBriefRole(e.target.value)}
                className="size-4 border-[#cccccc] text-[#2e6b5c] focus:ring-[#2e6b5c]"
              />
              <span className="text-sm text-[#212223]">Reply</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
