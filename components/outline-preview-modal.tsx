"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronDown, ChevronUp } from "lucide-react";

interface OutlinePreviewModalProps {
  onClose: () => void;
  onEdit: () => void;
}

export function OutlinePreviewModal({ onClose, onEdit }: OutlinePreviewModalProps) {
  const [expandedSections, setExpandedSections] = React.useState<string[]>(["factual-background"]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative mx-4 flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full hover:bg-[#f2f2f2]"
        >
          <X className="size-4 text-[#737373]" />
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Header */}
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#737373]">
            OUTLINE
          </p>
          <h2 className="mb-6 text-2xl font-semibold text-[#212223]">
            Confirm your outline selections
          </h2>

          {/* Document Length */}
          <div className="mb-6 rounded bg-[#f7f7f7] px-4 py-2">
            <span className="text-sm text-[#212223]">Document length: ~17 pages</span>
          </div>

          {/* Section I */}
          <div className="border-b border-[#e5e5e5]">
            <button
              onClick={() => toggleSection("table-of-authorities")}
              className="flex w-full items-center justify-between py-4"
            >
              <h3 className="text-lg font-semibold text-[#212223]">
                I. TABLE OF AUTHORITIES
              </h3>
              {expandedSections.includes("table-of-authorities") ? (
                <ChevronUp className="size-5 text-[#737373]" />
              ) : (
                <ChevronDown className="size-5 text-[#737373]" />
              )}
            </button>
          </div>

          {/* Section II */}
          <div className="border-b border-[#e5e5e5]">
            <button
              onClick={() => toggleSection("factual-background")}
              className="flex w-full items-center justify-between py-4"
            >
              <h3 className="text-lg font-semibold text-[#212223]">
                II. FACTUAL BACKGROUND (Chronological)
              </h3>
              {expandedSections.includes("factual-background") ? (
                <ChevronUp className="size-5 text-[#737373]" />
              ) : (
                <ChevronDown className="size-5 text-[#737373]" />
              )}
            </button>

            {expandedSections.includes("factual-background") && (
              <div className="pb-6">
                <div className="mb-6">
                  <h4 className="mb-2 text-base font-semibold text-[#212223]">A. The Parties</h4>
                  <p className="mb-2 text-sm text-[#737373]">Paragraph 1:</p>
                  <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                    <li className="list-disc">
                      Plaintiff: Author of unpublished memoir <em>Eat the Lemon</em>
                      <ul className="ml-6 mt-1 space-y-1">
                        <li className="list-disc">Registered two versions with Copyright Office (July 2020, February 2021)</li>
                        <li className="list-disc">Work completed in 2021 per copyright registration</li>
                      </ul>
                    </li>
                    <li className="list-disc">
                      Defendant S&S: Publisher of <em>One Italian Summer</em>
                      <ul className="ml-6 mt-1 space-y-1">
                        <li className="list-disc">Book first announced March 2021 (sample chapter released)</li>
                        <li className="list-disc">Published March 2022</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 text-base font-semibold text-[#212223]">B. The Alleged Conspiracy</h4>
                  <p className="mb-2 text-sm text-[#737373]">Paragraph 2:</p>
                  <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                    <li className="list-disc">Plaintiff claims network of conspirators delivered manuscript to Serle</li>
                    <li className="list-disc">Alleges conspiracy to misappropriate her life story</li>
                    <li className="list-disc">Claims defendants altered story to cast her negatively and intimidate her</li>
                    <li className="list-disc">28 defendants sued including S&S</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-base font-semibold text-[#212223]">C. Procedural History</h4>
                  <p className="mb-2 text-sm text-[#737373]">Paragraph 5:</p>
                  <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                    <li className="list-disc">Original Complaint filed February 28, 2025</li>
                    <li className="list-disc">S&S filed Motion to Dismiss June 30, 2025</li>
                    <li className="list-disc">Love filed Opposition August 18, 2025</li>
                    <li className="list-disc">Current Motion to Dismiss filed September 12, 2025</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Section III */}
          <div className="border-b border-[#e5e5e5]">
            <button
              onClick={() => toggleSection("argument")}
              className="flex w-full items-center justify-between py-4"
            >
              <h3 className="text-lg font-semibold text-[#212223]">
                III. ARGUMENT
              </h3>
              {expandedSections.includes("argument") ? (
                <ChevronUp className="size-5 text-[#737373]" />
              ) : (
                <ChevronDown className="size-5 text-[#737373]" />
              )}
            </button>
          </div>
        </div>

        {/* Sticky Edit CTA */}
        <div className="border-t border-[#e5e5e5] px-8 py-4">
          <Button
            onClick={onEdit}
            className="w-full rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
