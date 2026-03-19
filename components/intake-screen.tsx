"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Search, FileText, Check, Paperclip, Image, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface IntakeScreenProps {
  className?: string;
  onNextSelectArguments?: () => void;
  onSkipToGenerateDraft?: () => void;
}

const uploadedFiles = [
  "Gyant v. NFM - Complaint",
  "Gyant v. NFM - Answer",
  "Hansen Deposition",
  "Policy Endorsement - Wind...",
  "ROR Letter",
  "Letter to NFM Dated Septe...",
];

const claims = [
  {
    id: "breach",
    title: "Breach of Insurance Contract - All Three Properties",
    description: "Failure to pay covered hail damage claims for Bryant Irvin, Seminary, and Stuart properties.",
    checked: false,
  },
  {
    id: "542-055",
    title: "Violation of § 542.055 - Failure to Acknowledge Receipt of Claim (Seminary)",
    description: "NFM failed to acknowledge receipt of the Seminary property claim within 15 days as required by law.",
    checked: true,
  },
  {
    id: "542-056",
    title: "Violation of § 542.056 - Failure to Begin Investigation (Seminary)",
    description: "NFM failed to commence investigation of the Seminary claim within 15 days of notification.",
    checked: true,
  },
  {
    id: "541-061",
    title: "Violation of § 541.061 - Misrepresentation of Insurance Policy",
    description: "NFM misrepresented policy terms and coverage provisions to deny or delay payment.",
    checked: true,
  },
  {
    id: "541-060",
    title: "Violation of § 541.060(a)(1) - Unfair Settlement Practices",
    description: "NFM misrepresented material facts relating to coverage and failed to effectuate prompt settlement.",
    checked: false,
  },
  {
    id: "542-058",
    title: "Violation of § 542.058 - Failure to Pay Claims Promptly",
    description: "NFM failed to pay claims within required time periods after receiving necessary documentation.",
    checked: true,
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
    <div className={cn("flex flex-1 flex-col bg-[#fcfcfc]", className)}>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
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
          <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-white p-5">
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
                defaultValue="Motion for Summary Judgment"
                className="w-full rounded-md border border-[#cccccc] bg-white px-4 py-2.5 pr-10 text-sm text-[#212223] focus:border-[#2e6b5c] focus:outline-none focus:ring-1 focus:ring-[#2e6b5c]"
              />
              <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#737373]" />
            </div>
          </div>

          {/* Brief Role Card */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] border-l-4 border-l-[#1d4b34] bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-3 text-sm font-medium text-[#212223]">Brief role</h3>
                <div className="space-y-3">
                  <label className="flex cursor-pointer items-center gap-3">
                    <div className={cn(
                      "flex size-4 items-center justify-center rounded-full border-2",
                      briefRole === "primary" ? "border-[#1d4b34]" : "border-[#cccccc]"
                    )}>
                      {briefRole === "primary" && <div className="size-2 rounded-full bg-[#1d4b34]" />}
                    </div>
                    <span className="text-sm text-[#212223]">Primary</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3" onClick={() => setBriefRole("opposition")}>
                    <div className={cn(
                      "flex size-4 items-center justify-center rounded-full border-2",
                      briefRole === "opposition" ? "border-[#1d4b34]" : "border-[#cccccc]"
                    )}>
                      {briefRole === "opposition" && <div className="size-2 rounded-full bg-[#1d4b34]" />}
                    </div>
                    <span className="text-sm text-[#212223]">Opposition</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3" onClick={() => setBriefRole("reply")}>
                    <div className={cn(
                      "flex size-4 items-center justify-center rounded-full border-2",
                      briefRole === "reply" ? "border-[#1d4b34]" : "border-[#cccccc]"
                    )}>
                      {briefRole === "reply" && <div className="size-2 rounded-full bg-[#1d4b34]" />}
                    </div>
                    <span className="text-sm text-[#212223]">Reply</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="h-8 bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                  onClick={onNextSelectArguments}
                >
                  Next: Select arguments
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#cccccc] bg-white px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                  onClick={onSkipToGenerateDraft}
                >
                  Skip to generate draft
                </Button>
              </div>
            </div>
          </div>

          {/* Uploaded Files Card */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] border-l-4 border-l-[#1d4b34] bg-white p-5">
            <h3 className="mb-3 text-sm font-medium text-[#212223]">Uploaded files</h3>
            <div className="flex flex-wrap gap-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2"
                >
                  <FileText className="size-4 text-[#c9a227]" />
                  <span className="text-xs text-[#212223]">{file}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complaint Details Card */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] border-l-4 border-l-[#1d4b34] bg-white p-5">
            <h3 className="mb-4 text-sm font-medium text-[#212223]">Complaint details</h3>
            
            <div className="mb-4 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] p-4">
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Judge&apos;s name:</span> Andre Birotte Jr.</p>
                <p><span className="font-medium">Civil Action No.:</span> 4:25-cv-00064-O</p>
              </div>
              <div className="mt-4 space-y-1 text-sm">
                <p><span className="font-medium">Court name:</span> U.S. District Court, N.D. TX, Fort Wayne Division</p>
                <p><span className="font-medium">Selected jurisdiction (sets the scope for your research):</span> Texas and Related Federal</p>
                <p><span className="font-medium">Summary judgment:</span> Movant&apos;s Memorandum of Law (Federal) | <a href="#" className="text-[#2e6b5c] underline">Preview template</a></p>
              </div>
            </div>

            {/* Party you represent */}
            <div className="rounded-md border border-[#e5e5e5] bg-[#f7f7f7] p-4">
              <h4 className="mb-3 text-sm font-medium text-[#212223]">Party you represent:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox 
                    id="plaintiff" 
                    checked={plaintiffChecked}
                    onCheckedChange={(checked) => setPlaintiffChecked(checked as boolean)}
                    className="border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" 
                  />
                  <label htmlFor="plaintiff" className="text-sm text-[#212223]">
                    <span className="font-medium">Plaintiff party 1:</span> Gyant Properties, LLC
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox 
                    id="defendant" 
                    checked={defendantChecked}
                    onCheckedChange={(checked) => setDefendantChecked(checked as boolean)}
                    className="border-[#cccccc]" 
                  />
                  <label htmlFor="defendant" className="text-sm text-[#212223]">
                    <span className="font-medium">Defendant party 1:</span> National Fire & Marine Insurance Company
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Claims Selected Card */}
          <div className="mb-6 rounded-lg border border-[#e5e5e5] border-l-4 border-l-[#1d4b34] bg-white p-5">
            <h3 className="mb-4 text-sm font-medium text-[#212223]">Claims selected</h3>
            <div className="space-y-3">
              {claimsState.map((claim) => (
                <div
                  key={claim.id}
                  className="flex items-start gap-3 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] p-4"
                >
                  <Checkbox 
                    id={claim.id}
                    checked={claim.checked}
                    onCheckedChange={() => toggleClaim(claim.id)}
                    className={cn(
                      "mt-0.5",
                      claim.checked ? "border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" : "border-[#cccccc]"
                    )}
                  />
                  <label htmlFor={claim.id} className="flex-1 cursor-pointer">
                    <p className="text-sm font-medium text-[#212223]">{claim.title}</p>
                    <p className="mt-1 text-xs text-[#737373]">{claim.description}</p>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Chat Input */}
      <div className="border-t border-[#e5e5e5] bg-white px-6 py-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-xl border border-[#e5e5e5] bg-white">
            <input
              type="text"
              placeholder="Ask CoCounsel..."
              className="w-full rounded-xl border-0 bg-transparent px-4 py-3 pr-24 text-sm text-[#212223] placeholder:text-[#999999] focus:outline-none focus:ring-0"
            />
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
              <button className="p-2 text-[#737373] hover:text-[#212223]">
                <Paperclip className="size-4" />
              </button>
              <button className="p-2 text-[#737373] hover:text-[#212223]">
                <Image className="size-4" />
              </button>
              <button className="flex size-8 items-center justify-center rounded-full bg-[#1d4b34] text-white">
                <ArrowUp className="size-4" />
              </button>
            </div>
          </div>
          <p className="mt-2 text-xs text-[#737373]">
            Your data is <a href="#" className="underline">private and secure</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
