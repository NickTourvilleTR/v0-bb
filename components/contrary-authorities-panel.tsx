"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus, List } from "lucide-react";

interface ContraryAuthoritiesPanelProps {
  className?: string;
}

export function ContraryAuthoritiesPanel({ className }: ContraryAuthoritiesPanelProps) {
  return (
    <div className={cn("flex h-full flex-col overflow-y-auto", className)}>
      <div className="mx-auto flex w-full max-w-5xl gap-6 px-6 py-8">
        {/* Left sidebar button - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
              OPPOSITION
            </p>
            <h1 className="text-2xl font-semibold text-[#212223]">
              Review anticipated challenges
            </h1>
          </div>

          {/* Party/Attorney Form Fields */}
          <div className="mb-6 space-y-2">
            <p className="text-base text-[#212223]">[Party/Attorney]</p>
            <p className="text-base text-[#212223]">[Email]</p>
            <p className="text-base text-[#212223]">[Street/Address]</p>
            <p className="text-base text-[#212223]">[Telephone]</p>
            <p className="text-base text-[#212223]">[Facsimile]</p>
          </div>

          {/* Add Party/Attorney Button */}
          <Button
            variant="outline"
            className="mb-12 border-[#cccccc] text-[#212223] hover:bg-[#f7f7f7]"
          >
            <Plus className="mr-2 size-4" />
            Add a Party/Attorney
          </Button>

          {/* Court Document Preview */}
          <div className="space-y-8">
            {/* Court Header */}
            <div className="text-center">
              <p className="text-lg font-semibold uppercase tracking-wide text-[#212223]">
                IN THE UNITED STATES DISTRICT COURT
              </p>
              <p className="text-lg font-semibold uppercase tracking-wide text-[#212223]">
                NORTHERN DISTRICT OF TEXAS
              </p>
              <p className="text-lg font-semibold uppercase tracking-wide text-[#212223]">
                FORT WORTH DIVISION
              </p>
            </div>

            {/* Case Caption */}
            <div className="space-y-4">
              <div className="flex">
                <div className="w-1/2">
                  <p className="font-semibold uppercase text-[#212223]">GYANT PROPERTIES, LLC,</p>
                </div>
                <div className="w-1/2 text-right">
                  <p className="text-[#212223]">Plaintiff,</p>
                </div>
              </div>

              <p className="pl-8 text-[#212223]">v.</p>

              <div className="flex">
                <div className="w-1/2">
                  <p className="font-semibold uppercase text-[#212223]">NATIONAL FIRE & MARINE</p>
                  <p className="font-semibold uppercase text-[#212223]">INSURANCE COMPANY,</p>
                </div>
                <div className="w-1/2 text-right">
                  <p className="text-[#212223]">Defendant.</p>
                  <p className="mt-2 text-[#212223]">Civil Action No. 4:25-cv-00064-O</p>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <hr className="border-t border-[#212223]" />
          </div>
        </div>
      </div>
    </div>
  );
}
