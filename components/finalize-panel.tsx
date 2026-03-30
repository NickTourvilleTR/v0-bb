"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, X, PlaySquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityItem {
  name: string;
  status: "Reviewed" | "Unchanged";
  icon: "check" | "play";
}

const briefActivityItems: ActivityItem[] = [
  { name: "Argue", status: "Reviewed", icon: "check" },
  { name: "Support", status: "Reviewed", icon: "check" },
  { name: "Distinguish", status: "Unchanged", icon: "play" },
  { name: "Outline", status: "Reviewed", icon: "check" },
  { name: "Draft", status: "Reviewed", icon: "check" },
  { name: "Verify", status: "Reviewed", icon: "check" },
];

const judicialActivityItems: ActivityItem[] = [
  { name: "Intake", status: "Reviewed", icon: "check" },
  { name: "Claims", status: "Reviewed", icon: "check" },
  { name: "Decide", status: "Reviewed", icon: "check" },
  { name: "Outline", status: "Reviewed", icon: "check" },
  { name: "Draft", status: "Reviewed", icon: "check" },
  { name: "Verify", status: "Reviewed", icon: "check" },
];

const documentItems = [
  "Case caption",
  "Table of contents",
  "Table of authorities",
  "Introduction",
  "Statement of facts",
  "Legal arguments",
];

interface FinalizePanelProps {
  flowType?: "brief" | "judicial";
}

export function FinalizePanel({ flowType = "brief" }: FinalizePanelProps) {
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);
  const [expandedDocument, setExpandedDocument] = useState<string | null>(null);

  const activityItems = flowType === "judicial" ? judicialActivityItems : briefActivityItems;
  const isJudicial = flowType === "judicial";

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h1 className="mb-6 text-3xl font-semibold text-[#212223]">
          Finalize the document
        </h1>

        {/* Success Banner */}
        <div className="mb-6 flex items-center justify-between rounded-lg bg-[#1d4b34] px-6 py-4">
          <span className="text-lg font-medium text-white">
            {isJudicial ? "Your opinion is ready" : "Your brief is ready"}
          </span>
          <Button className="rounded-full bg-[#212223] px-6 text-white hover:bg-[#404040]">
            <svg className="mr-2 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {isJudicial 
              ? "Download Opinion - 516, Inc. dba DG Plumbing v. Richmond..." 
              : "Download Motion to Dismiss - Love v. Airbnb"}
          </Button>
        </div>

        {/* Activity Summary */}
        <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white">
          <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-4">
            <h2 className="text-xl font-semibold text-[#212223]">Activity summary</h2>
            <div className="flex items-center gap-2 text-sm">
              <button className="inline-flex items-center gap-1.5 rounded-md bg-[#f0f5f3] px-3 py-2 font-medium text-[#1d4b34] hover:bg-[#e5efe9]">
                <ChevronUp className="size-4" />
                Expand all
              </button>
              <span className="text-[#737373]">|</span>
              <button className="inline-flex items-center gap-1.5 rounded-md bg-[#f0f5f3] px-3 py-2 font-medium text-[#1d4b34] hover:bg-[#e5efe9]">
                <X className="size-4" />
                Collapse all
              </button>
            </div>
          </div>

          <div className="divide-y divide-[#e5e5e5]">
            {activityItems.map((item) => (
              <div
                key={item.name}
                className="flex cursor-pointer items-center justify-between px-6 py-4 hover:bg-[#f7f7f7]"
                onClick={() => setExpandedActivity(expandedActivity === item.name ? null : item.name)}
              >
                <div className="flex items-center gap-3">
                  {item.icon === "check" ? (
                    <div className="flex size-5 items-center justify-center rounded-full bg-[#1d4b34]">
                      <Check className="size-3 text-white" />
                    </div>
                  ) : (
                    <PlaySquare className="size-5 text-[#d64000]" />
                  )}
                  <span className="font-medium text-[#212223]">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-medium ${
                      item.status === "Reviewed"
                        ? "bg-[#ebf0ed] text-[#1d4b34]"
                        : "bg-[#fff8e5] text-[#ab3300]"
                    }`}
                  >
                    {item.status}
                  </span>
                  <ChevronDown
                    className={`size-5 text-[#737373] transition-transform ${
                      expandedActivity === item.name ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Includes — only show for brief flow */}
        {!isJudicial && (
          <div className="rounded-lg border border-[#e5e5e5] bg-white">
            <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-4">
              <h2 className="text-xl font-semibold text-[#212223]">Document includes</h2>
              <div className="flex items-center gap-2 text-sm">
                <button className="inline-flex items-center gap-1.5 rounded-md bg-[#f0f5f3] px-3 py-2 font-medium text-[#1d4b34] hover:bg-[#e5efe9]">
                  <ChevronUp className="size-4" />
                  Expand all
                </button>
                <span className="text-[#737373]">|</span>
                <button className="inline-flex items-center gap-1.5 rounded-md bg-[#f0f5f3] px-3 py-2 font-medium text-[#1d4b34] hover:bg-[#e5efe9]">
                  <X className="size-4" />
                  Collapse all
                </button>
              </div>
            </div>

            <div className="divide-y divide-[#e5e5e5]">
              {documentItems.map((item) => (
                <div
                  key={item}
                  className="flex cursor-pointer items-center justify-between px-6 py-4 hover:bg-[#f7f7f7]"
                  onClick={() => setExpandedDocument(expandedDocument === item ? null : item)}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full bg-[#1d4b34]">
                      <Check className="size-3 text-white" />
                    </div>
                    <span className="font-medium text-[#212223]">{item}</span>
                  </div>
                  <ChevronDown
                    className={`size-5 text-[#737373] transition-transform ${
                      expandedDocument === item ? "rotate-180" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
