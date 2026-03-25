"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, FileText, List, Reply, ScanEye, Upload } from "lucide-react";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";

interface IntakeScreenProps {
  className?: string;
  onNextSelectArguments?: () => void;
  onSkipToGenerateDraft?: () => void;
  onGenerateDraft?: () => void;
  onEditOutline?: () => void;
  onQuote?: (text: string) => void;
  flowType?: "brief" | "judicial";
}

function QuotableCard({ children, label, onQuote, className }: { children: React.ReactNode; label: string; onQuote?: (text: string) => void; className?: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-5", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && onQuote && (
        <button
          onClick={() => onQuote(label)}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-[#1d4b34] text-white transition-transform duration-200 hover:scale-110 hover:bg-[#163d2a]"
          title="Quote this message"
        >
          <Reply className="size-4" />
        </button>
      )}
      {children}
    </div>
  );
}

const uploadedFiles = [
  { name: "Love – First Amended Complaint", type: "P" },
  { name: "Quitclaim & Assignment Agreement", type: "P" },
  { name: "Eat The Lemon Feb 2021 Manuscript", type: "W" },
  { name: "One Italian Summer (lodged)", type: "W" },
];

const judicialUploadedFiles = [
  { name: "COMPLAINT filed by 516, Inc.", type: "P" },
  { name: "NOTICE OF MOTION AND MOTION to Dismiss Case", type: "P" },
  { name: "OPPOSITION to NOTICE OF MOTION AND MOTION to Dismiss Case", type: "P" },
  { name: "Defendant's Objection and Request to Strike Plaintiff's Declarations", type: "W" },
  { name: "REPLY In Support NOTICE OF MOTION AND MOTION to Dismiss Case", type: "W" },
];

const argumentsSelected = [
  {
    id: "copyright",
    title: "Copyright infringement (17 U.S.C. § 101 et seq.)",
    description: "Direct, contributory, and vicarious infringement of Love's exclusive rights in Eat the Lemon, including reproduction, preparation of derivative works, and distribution.",
  },
  {
    id: "breach-fiduciary",
    title: "Breach of fiduciary duty",
    description: "Each defendant owed Love duties of loyalty and care arising from their roles as agents, managers, editors, and publishers entrusted with her manuscript.",
  },
  {
    id: "breach-contract",
    title: "Breach of contract",
    description: "Defendants who entered written and oral agreements to represent and market the ETL manuscript failed to perform their obligations and pay sums due.",
  },
  {
    id: "promissory-estoppel",
    title: "Promissory estoppel",
    description: "Defendants made promises regarding the care and commercialization of ETL on which Love justifiably relied to her detriment.",
  },
  {
    id: "intentional-interference",
    title: "Intentional interference with contractual relations",
    description: "Defendants intentionally disrupted Love's existing contracts related to the ETL Work, preventing performance and causing loss of profits and goodwill.",
  },
  {
    id: "tortious-interference",
    title: "Tortious interference with prospective business advantage",
    description: "Defendants interfered with economic relationships that would have resulted in benefit to Love from the exploitation of the ETL manuscript.",
  },
  {
    id: "intentional-misrepresentation",
    title: "Intentional misrepresentation",
    description: "Defendants misrepresented their intentions regarding the care, protection, and distribution of the ETL Work and related proceeds.",
  },
  {
    id: "negligent-misrepresentation",
    title: "Negligent misrepresentation",
    description: "Defendants negligently or falsely represented that they would use the ETL manuscript solely for agreed-upon purposes.",
  },
  {
    id: "negligence",
    title: "Negligence",
    description: "Defendants failed to act as reasonable professionals and breached their duty of care in handling Love's intellectual property.",
  },
  {
    id: "conversion",
    title: "Conversion",
    description: "Defendants converted Love's intellectual property, funds, and goodwill to their own use without consent.",
  },
  {
    id: "emotional-distress",
    title: "Intentional infliction of emotional distress",
    description: "Defendants' conduct in misappropriating Love's life story and allegedly silencing and isolating her caused severe emotional distress.",
  },
  {
    id: "stalking",
    title: "Stalking (Cal. Civ. Code § 1708.7)",
    description: "Certain defendants engaged in a pattern of conduct intended to follow, surveil, and harass Love to prevent her from challenging the alleged scheme.",
  },
  {
    id: "conspiracy",
    title: "Conspiracy",
    description: "Two or more defendants agreed to convert Love's manuscript and related intellectual property to their own benefit through deceptive means.",
  },
  {
    id: "unfair-business",
    title: "Unfair business practices (Cal. Bus. & Prof. Code § 17200 et seq.)",
    description: "Defendants' conduct constitutes unlawful, unfair, and fraudulent business practices under California law.",
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Love seeks a judicial accounting to determine monies generated from the ETL Work that defendants have failed to disclose or distribute.",
  },
  {
    id: "constructive-trust",
    title: "Constructive trust",
    description: "Defendants hold Love's intellectual property, goodwill, and proceeds as involuntary trustees and must re-convey them to Love.",
  },
  {
    id: "declaratory-relief",
    title: "Declaratory relief",
    description: "Love seeks a declaration clarifying defendants' obligations under the parties' agreements and her rights in the ETL Work.",
  },
];

export function IntakeScreen({ className, onNextSelectArguments, onSkipToGenerateDraft, onGenerateDraft, onEditOutline, onQuote, flowType = "brief" }: IntakeScreenProps) {
  const [showOutlinePreview, setShowOutlinePreview] = React.useState(false);
  const [selectedJurisdiction, setSelectedJurisdiction] = React.useState("9th-circuit");
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
            <button onClick={() => setShowOutlinePreview(true)} className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
              <ScanEye className="size-5 text-[#1d4b34]" />
            </button>
          </div>

          {/* Main content column */}
          <div className="flex-1 max-w-3xl">
            {/* Header */}
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                INTAKE
              </p>
              <h1 className="text-2xl font-semibold text-[#212223]">
                Review and make your selections
              </h1>
            </div>

            {/* Motion Summary Card - only for brief flow */}
            {flowType === "brief" && (
              <QuotableCard label="Motion to Dismiss: Love v. Serle et al." onQuote={onQuote} className="mb-6">
                <p className="mb-3 text-sm font-semibold text-[#212223]">
                  Motion to Dismiss: Love v. Serle et al.
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-[#212223]">
                  <li>
                    Plaintiff Adrienne Love, an individual residing in California, brings this action against 28 defendants including publishers, literary agents, talent agencies, producers, and author Rebecca Serle
                  </li>
                  <li>
                    Love alleges that her unpublished memoir <em>Eat the Lemon</em> — a personal account of traveling to the Amalfi Coast to reconnect with her deceased mother — was misappropriated and formed the basis of Serle&apos;s novel <em>One Italian Summer</em>, published by Atria Books (S&S) in March 2022
                  </li>
                  <li>
                    Love further alleges a coordinated conspiracy among her former literary representatives and industry defendants to exploit her manuscript, silence her objections, and profit from the resulting book and Paramount film adaptation
                  </li>
                  <li>
                    Jurisdiction: U.S. District Court, C.D. California, Western Division — federal question under the Copyright Act (28 U.S.C. §§ 1331, 1338(a)) with supplemental jurisdiction over state law claims (28 U.S.C. § 1367(a))
                  </li>
                </ul>
              </QuotableCard>
            )}

            {/* Motion Type / Work Product Card */}
            <QuotableCard label={flowType === "judicial" ? "Work product: Opinion" : "Motion type: Motion to Dismiss"} onQuote={onQuote} className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-[#212223]">{flowType === "judicial" ? "Work product" : "Motion type"}</h3>
              <div className="rounded-md border border-[#d4d4d4] bg-[#f2f2f2] px-4 py-2.5 text-sm font-medium text-[#212223]">
                {flowType === "judicial" ? "Opinion" : "Motion to Dismiss"}
              </div>
            </QuotableCard>

            {/* Brief Role Card - only for brief flow, Read Only */}
            {flowType === "brief" && (
              <QuotableCard label="Brief role: Primary" onQuote={onQuote} className="mb-6">
                <h3 className="mb-3 text-sm font-medium text-[#212223]">Brief role</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#525252] bg-[#525252]">
                      <div className="size-2 rounded-full bg-white" />
                    </div>
                    <span className="text-sm text-[#212223]">Primary</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#a3a3a3]" />
                    <span className="text-sm text-[#525252]">Opposition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#a3a3a3]" />
                    <span className="text-sm text-[#525252]">Reply</span>
                  </div>
                </div>
              </QuotableCard>
            )}

            {/* Uploaded Files Card - Read Only */}
            <QuotableCard label="Uploaded files" onQuote={onQuote} className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-[#212223]">Uploaded files</h3>
              <div className="flex flex-wrap gap-2">
                {(flowType === "judicial" ? judicialUploadedFiles : uploadedFiles).map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-white px-3 py-2"
                  >
                    <div className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded text-[10px] font-bold text-white",
                      file.type === "P" ? "bg-[#dc0a0a]" : "bg-[#2563eb]"
                    )}>
                      {file.type}
                    </div>
                    <span className="text-sm text-[#212223]">{file.name}</span>
                  </div>
                ))}
              </div>
              {flowType === "judicial" && (
                <div className="mt-3">
                  <button className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f7f7f7]">
                    Verify citations in the uploaded documents
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              )}
            </QuotableCard>

            {/* Party You Represent Card - only for brief flow, Read Only */}
            {flowType === "brief" && (
              <QuotableCard label="Party you represent: Defendant — Rebecca Serle, et al." onQuote={onQuote} className="mb-6">
                <h3 className="mb-3 text-sm font-medium text-[#212223]">Party you represent</h3>
                <div className="rounded-md border border-[#d4d4d4] bg-[#f2f2f2] px-4 py-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#525252] bg-[#525252]">
                        <div className="size-2 rounded-full bg-white" />
                      </div>
                      <span className="text-sm text-[#212223]">Defendant: Rebecca Serle, et al.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#a3a3a3]" />
                      <span className="text-sm text-[#525252]">Plaintiff: Adrienne Love</span>
                    </div>
                  </div>
                </div>
              </QuotableCard>
            )}

            {/* Arguments Selected Card - only for brief flow, Read Only */}
            {flowType === "brief" && (
              <QuotableCard label="Arguments selected" onQuote={onQuote} className="mb-6">
                <h3 className="mb-3 text-sm font-medium text-[#212223]">Arguments selected</h3>
                <div className="rounded-md border border-[#d4d4d4] bg-[#f2f2f2] px-4 py-3">
                  <div className="space-y-3">
                    {argumentsSelected.map((argument) => (
                      <div
                        key={argument.id}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-[#525252] bg-[#525252]">
                          <svg className="size-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="2 6 5 9 10 3" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-[#212223]">{argument.title}</p>
                          <p className="mt-1 text-sm text-[#404040]">{argument.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </QuotableCard>
            )}

            {/* Upload Prior Opinions Banner - judicial flow only */}
            {flowType === "judicial" && (
              <QuotableCard label="Upload prior opinions" onQuote={onQuote} className="mb-6">
                <div className="flex items-start gap-3">
                  <Upload className="mt-0.5 size-5 shrink-0 text-[#737373]" />
                  <div>
                    <p className="text-sm font-medium text-[#212223]">Upload prior opinions</p>
                    <p className="mt-1 text-sm text-[#737373]">
                      Upload prior opinions to customize the style, voice, and formatting of your draft.
                    </p>
                  </div>
                </div>
              </QuotableCard>
            )}

            {/* Case Details Card - Read Only */}
            <QuotableCard label="Case details" onQuote={onQuote} className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-[#212223]">Case details</h3>
              <div className="rounded-md border border-[#d4d4d4] bg-[#f2f2f2] px-4 py-3">
                <div className="space-y-2 text-sm text-[#212223]">
                  {flowType === "judicial" ? (
                    <>
                      <p><span className="font-medium text-[#212223]">Judge:</span> David O. Carter</p>
                      <p><span className="font-medium text-[#212223]">Civil Action No.:</span> 8:25-CV-01204</p>
                      <p><span className="font-medium text-[#212223]">Court:</span> United States District Court, C.D. California</p>
                      <p><span className="font-medium text-[#212223]">Plaintiff:</span> 516, Inc. dba DG Plumbing</p>
                      <p><span className="font-medium text-[#212223]">Defendant:</span> Richmond National Insurance Company</p>
                    </>
                  ) : (
                    <>
                      <p><span className="font-medium text-[#212223]">Case Name:</span> Love v. Serle, et al.</p>
                      <p><span className="font-medium text-[#212223]">Court:</span> U.S. District Court, Central District of California</p>
                      <p><span className="font-medium text-[#212223]">Judge:</span> David O. Carter</p>
                      <p><span className="font-medium text-[#212223]">Case Number:</span> 22-cv-07522-DOC-DFM</p>
                      <p><span className="font-medium text-[#212223]">Current Status:</span> Motion to Dismiss pending</p>
                      <p><span className="font-medium text-[#212223]">Template:</span> Motion to Dismiss: Movant&apos;s Memorandum of Law (Federal)</p>
                    </>
                  )}
                </div>
              </div>
            </QuotableCard>

            {/* Jurisdiction Card - judicial flow only */}
            {flowType === "judicial" && (
              <QuotableCard label="Jurisdiction" onQuote={onQuote} className="mb-6">
                <h3 className="mb-1 text-sm font-medium text-[#212223]">Jurisdiction</h3>
                <p className="mb-4 text-xs text-[#737373]">Sets the scope for your research</p>
                <div className="space-y-3">
                  {[
                    { id: "9th-circuit", label: "9th Circuit" },
                    { id: "9th-circuit-federal", label: "9th Circuit and related federal" },
                    { id: "different", label: "Select different jurisdiction(s)" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedJurisdiction(option.id)}
                      className="flex w-full items-center gap-3 text-left"
                    >
                      <div className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                        selectedJurisdiction === option.id
                          ? "border-[#1d4b34] bg-[#1d4b34]"
                          : "border-[#a3a3a3]"
                      )}>
                        {selectedJurisdiction === option.id && (
                          <div className="size-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={cn(
                        "text-sm",
                        selectedJurisdiction === option.id ? "text-[#212223]" : "text-[#525252]"
                      )}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </QuotableCard>
            )}

            {/* Call to Action Buttons */}
            <div className="flex items-center justify-center gap-3 pb-8 pt-4">
              {flowType !== "judicial" && (
                <button
                  onClick={onSkipToGenerateDraft}
                  className="rounded-full border border-[#e5e5e5] bg-white px-6 py-3 text-sm font-medium text-[#212223] hover:bg-[#f7f7f7]"
                >
                  Skip to generate draft
                </button>
              )}
              <button
                onClick={flowType === "judicial" ? onGenerateDraft : onNextSelectArguments}
                className="rounded-full bg-[#1d4b34] px-6 py-3 text-sm font-medium text-white hover:bg-[#163d2a]"
              >
                {flowType === "judicial" ? "Generate draft" : "Next: Select arguments"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showOutlinePreview && (
        <OutlinePreviewModal
          onClose={() => setShowOutlinePreview(false)}
          onEdit={() => {
            setShowOutlinePreview(false);
            onEditOutline?.();
          }}
        />
      )}
    </div>
  );
}
