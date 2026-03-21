"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Search, FileText, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface IntakeScreenProps {
  className?: string;
  onNextSelectArguments?: () => void;
  onSkipToGenerateDraft?: () => void;
}

const uploadedFiles = [
  { name: "Love – First Amended Complaint", type: "P" },
  { name: "Quitclaim & Assignment Agreement", type: "P" },
  { name: "Eat The Lemon Feb 2021 Manuscript", type: "W" },
  { name: "One Italian Summer (lodged)", type: "W" },
];

const claims = [
  {
    id: "copyright",
    title: "Copyright Infringement (17 U.S.C. § 106)",
    description: "Unauthorized reproduction and derivative use of protected expression from plaintiff's memoir Eat the Lemon.",
    checked: true,
  },
  {
    id: "breach-fiduciary",
    title: "Breach of Fiduciary Duty",
    description: "Literary agents and representatives breached duties of loyalty by sharing confidential manuscript with third parties.",
    checked: true,
  },
  {
    id: "tortious-interference",
    title: "Tortious Interference with Contractual Relations",
    description: "Defendants interfered with plaintiff's publishing opportunities by misappropriating her work.",
    checked: true,
  },
  {
    id: "conspiracy",
    title: "Civil Conspiracy",
    description: "Coordinated action among defendants to exploit plaintiff's manuscript and suppress her objections.",
    checked: true,
  },
  {
    id: "unjust-enrichment",
    title: "Unjust Enrichment",
    description: "Defendants profited from One Italian Summer and Paramount film adaptation derived from plaintiff's work.",
    checked: false,
  },
  {
    id: "unfair-competition",
    title: "Unfair Competition (Cal. Bus. & Prof. Code § 17200)",
    description: "Unlawful, unfair, and fraudulent business practices in connection with the misappropriation.",
    checked: false,
  },
];

export function IntakeScreen({ className, onNextSelectArguments, onSkipToGenerateDraft }: IntakeScreenProps) {
  const [briefRole, setBriefRole] = React.useState("primary");
  const [plaintiffChecked, setPlaintiffChecked] = React.useState(true);
  const [defendantChecked, setDefendantChecked] = React.useState(false);
  const [claimsState, setClaimsState] = React.useState(claims);

  const toggleClaim = (id: string) => {
    setClaimsState(prev => prev.map(claim => 
      claim.id === id ? { ...claim, checked: !claim.checked } : claim
    ));
  };

  return (
    <div className={cn("flex h-full flex-1 flex-col overflow-hidden bg-[#fcfcfc]", className)}>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-6 py-8 pb-32">
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
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
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
          </div>

          {/* Motion Type Card */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
            <h3 className="mb-3 text-sm font-medium text-[#212223]">Motion type</h3>
            <div className="rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-2.5 text-sm text-[#212223]">
              Motion to Dismiss
            </div>
          </div>

          {/* Brief Role Card - Read Only */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
            <h3 className="mb-3 text-sm font-medium text-[#212223]">Brief role</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#737373] bg-[#737373]">
                  <div className="size-2 rounded-full bg-white" />
                </div>
                <span className="text-sm text-[#212223]">Primary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#cccccc]" />
                <span className="text-sm text-[#737373]">Opposition</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center rounded-full border-2 border-[#cccccc]" />
                <span className="text-sm text-[#737373]">Reply</span>
              </div>
            </div>
          </div>

          {/* Uploaded Files Card - Read Only */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
            <h3 className="mb-3 text-sm font-medium text-[#212223]">Uploaded files</h3>
            <div className="flex flex-wrap gap-3">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2"
                >
                  <FileText className="size-4 text-[#737373]" />
                  <span className="text-sm text-[#212223]">{file.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Details Card - Read Only */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
            <h3 className="mb-3 text-sm font-medium text-[#212223]">Case details</h3>
            <div className="space-y-2 text-sm text-[#212223]">
              <p><span className="font-semibold">Judge&apos;s name:</span> Andre Birotte Jr.</p>
              <p><span className="font-semibold">Civil Action No.:</span> 2:2025-cv-01779</p>
              <p><span className="font-semibold">Court name:</span> U.S. District Court, C.D. California, Western Division</p>
              <p><span className="font-semibold">Selected jurisdiction:</span> California and Related Federal</p>
              <p><span className="font-semibold">Template:</span> Motion to Dismiss: Movant&apos;s Memorandum of Law (Federal)</p>
            </div>
          </div>

          {/* Party You Represent Card - Read Only */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
            <h3 className="mb-3 text-sm font-medium text-[#212223]">Party you represent</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-4 items-center justify-center rounded border border-[#1d4b34] bg-[#1d4b34]">
                  <svg className="size-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                </div>
                <span className="text-sm text-[#212223]"><span className="font-semibold">Defendant:</span> Rebecca Serle, et al.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-4 rounded border border-[#cccccc]" />
                <span className="text-sm text-[#737373]"><span className="font-semibold">Plaintiff:</span> Adrienne Love</span>
              </div>
            </div>
          </div>

          {/* Claims Selected Card - Read Only */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
            <h3 className="mb-3 text-sm font-medium text-[#212223]">Claims selected</h3>
            <div className="space-y-3">
              {claims.filter(c => c.checked).map((claim) => (
                <div
                  key={claim.id}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-[#1d4b34] bg-[#1d4b34]">
                    <svg className="size-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#212223]">{claim.title}</p>
                    <p className="mt-1 text-sm text-[#737373]">{claim.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
