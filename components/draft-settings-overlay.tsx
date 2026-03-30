"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X, ChevronDown } from "lucide-react";

interface DraftSettingsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerateDraft: () => void;
  flowType?: "brief" | "judicial";
}

export function DraftSettingsOverlay({
  isOpen,
  onClose,
  onGenerateDraft,
  flowType = "brief",
}: DraftSettingsOverlayProps) {
  const [overallTone, setOverallTone] = React.useState("Respectful Equality");
  const [whereAppropriate, setWhereAppropriate] = React.useState("Sharp");
  const [voice, setVoice] = React.useState<string | null>(null);
  const [simplicity, setSimplicity] = React.useState(25);
  const [clarity, setClarity] = React.useState(50);
  const [brevity, setBrevity] = React.useState(50);
  const [revealAdverbs, setRevealAdverbs] = React.useState(50);
  const [revealAdjectives, setRevealAdjectives] = React.useState(50);
  
  const [components, setComponents] = React.useState({
    caption: true,
    preliminaryStatement: false,
    statementOfUndisputedFacts: false,
    tableOfContents: true,
    tableOfCases: true,
    tableOfAdditionalAuthorities: false,
    legalStandard: false,
    argument: true,
    reliefSought: true,
    conclusion: true,
    signatureBlock: true,
    proposedOrder: false,
    declaration: false,
    corporateDisclosureStatement: false,
  });

  const [additionalOptions, setAdditionalOptions] = React.useState({
    timesNewRoman: true,
    doubleSpaced: true,
    footnotesLimited: true,
    pleadingPaper: false,
    scannedSignatureAllowed: false,
    electronicSignature: true,
    barNumbersPresent: true,
    leadCounselIdentified: false,
    allCounselSigned: false,
  });

  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const getSliderLabel = (value: number) => {
    if (value <= 33) return "Low";
    if (value <= 66) return "Medium";
    return "High";
  };

  const handleComponentToggle = (key: keyof typeof components) => {
    setComponents((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAdditionalToggle = (key: keyof typeof additionalOptions) => {
    setAdditionalOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 py-8">
      <div className="relative mx-4 w-full max-w-2xl rounded-xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
        >
          <X className="size-5" />
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <h1 className="text-2xl font-semibold text-[#212223]">Draft settings</h1>
          <p className="mt-2 text-sm text-[#737373]">
            Based on your selections and outline, we&apos;ll generate a draft of your {flowType === "judicial" ? "opinion" : "brief"} that you can edit further. This may take up to 30 minutes.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-4 px-8 pb-8">
          {/* Select tone */}
          <div className="rounded-lg border border-[#e5e5e5] p-4">
            <h2 className="mb-4 text-base font-semibold text-[#212223]">Select tone</h2>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-1.5 block text-sm font-medium text-[#212223]">Overall tone</label>
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "tone" ? null : "tone")}
                    className="flex w-full items-center justify-between rounded-md border border-[#e5e5e5] bg-white px-3 py-2 text-sm text-[#212223]"
                  >
                    {overallTone}
                    <ChevronDown className="size-4 text-[#737373]" />
                  </button>
                  {openDropdown === "tone" && (
                    <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-[#e5e5e5] bg-white py-1 shadow-lg">
                      {["Respectful Equality", "Formal", "Assertive", "Neutral"].map((option) => (
                        <button
                          key={option}
                          onClick={() => { setOverallTone(option); setOpenDropdown(null); }}
                          className="w-full px-3 py-2 text-left text-sm hover:bg-[#f7f7f7]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <label className="mb-1.5 block text-sm font-medium text-[#212223]">Where appropriate</label>
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "appropriate" ? null : "appropriate")}
                    className="flex w-full items-center justify-between rounded-md border border-[#e5e5e5] bg-white px-3 py-2 text-sm text-[#212223]"
                  >
                    {whereAppropriate}
                    <ChevronDown className="size-4 text-[#737373]" />
                  </button>
                  {openDropdown === "appropriate" && (
                    <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-[#e5e5e5] bg-white py-1 shadow-lg">
                      {["Sharp", "Measured", "Diplomatic", "Direct"].map((option) => (
                        <button
                          key={option}
                          onClick={() => { setWhereAppropriate(option); setOpenDropdown(null); }}
                          className="w-full px-3 py-2 text-left text-sm hover:bg-[#f7f7f7]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Voice */}
          <div className="rounded-lg border border-[#e5e5e5] p-4">
            <h2 className="mb-3 text-base font-semibold text-[#212223]">Voice</h2>
            <div className="space-y-2">
              {[
                { value: "judge", label: "Choose a judge" },
                { value: "firm", label: "Your firm" },
                { value: "prior", label: "Your prior motions" },
                { value: "top", label: "Top law firms" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="voice"
                    value={option.value}
                    checked={voice === option.value}
                    onChange={() => setVoice(option.value)}
                    className="size-4 accent-[#1d4b34]"
                  />
                  <span className="text-sm text-[#212223]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Adjust text attributes */}
          <div className="rounded-lg border border-[#e5e5e5] p-4">
            <h2 className="mb-4 text-base font-semibold text-[#212223]">Adjust text attributes</h2>
            <div className="space-y-4">
              {[
                { label: "Simplicity", value: simplicity, setValue: setSimplicity },
                { label: "Clarity", value: clarity, setValue: setClarity },
                { label: "Brevity", value: brevity, setValue: setBrevity },
              ].map((slider) => (
                <div key={slider.label}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-[#212223]">{slider.label}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={slider.value}
                      onChange={(e) => slider.setValue(Number(e.target.value))}
                      className="w-full accent-[#1d4b34]"
                    />
                    <div
                      className="absolute -bottom-5 text-xs font-medium text-[#1d4b34]"
                      style={{ left: `${slider.value}%`, transform: "translateX(-50%)" }}
                    >
                      {getSliderLabel(slider.value)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge adverbs & adjectives */}
          <div className="rounded-lg border border-[#e5e5e5] p-4">
            <h2 className="mb-4 text-base font-semibold text-[#212223]">Challenge adverbs & adjectives</h2>
            <div className="space-y-4">
              {[
                { label: "Reveal unnecessary adverbs", value: revealAdverbs, setValue: setRevealAdverbs },
                { label: "Reveal unnecessary adjectives", value: revealAdjectives, setValue: setRevealAdjectives },
              ].map((slider) => (
                <div key={slider.label}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-[#212223]">{slider.label}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={slider.value}
                      onChange={(e) => slider.setValue(Number(e.target.value))}
                      className="w-full accent-[#1d4b34]"
                    />
                    <div
                      className="absolute -bottom-5 text-xs font-medium text-[#1d4b34]"
                      style={{ left: `${slider.value}%`, transform: "translateX(-50%)" }}
                    >
                      {getSliderLabel(slider.value)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Include components */}
          <div className="rounded-lg border border-[#e5e5e5] p-4">
            <h2 className="mb-3 text-base font-semibold text-[#212223]">Include components</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                { key: "caption", label: "Caption" },
                { key: "preliminaryStatement", label: "Preliminary statement" },
                { key: "statementOfUndisputedFacts", label: "Statement of Undisputed Facts" },
                { key: "tableOfContents", label: "Table of contents" },
                { key: "tableOfCases", label: "Table of cases" },
                { key: "tableOfAdditionalAuthorities", label: "Table of additional authorities" },
                { key: "legalStandard", label: "Legal standard" },
                { key: "argument", label: "Argument" },
                { key: "reliefSought", label: "Relief sought" },
                { key: "conclusion", label: "Conclusion" },
                { key: "signatureBlock", label: "Signature block" },
                { key: "proposedOrder", label: "Proposed order" },
                { key: "declaration", label: "Declaration" },
                { key: "corporateDisclosureStatement", label: "Corporate Disclosure Statement" },
              ].map((item) => (
                <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={components[item.key as keyof typeof components]}
                    onChange={() => handleComponentToggle(item.key as keyof typeof components)}
                    className="size-4 rounded border-[#e5e5e5] accent-[#1d4b34]"
                  />
                  <span className="text-sm text-[#212223]">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional options */}
          <div className="rounded-lg border border-[#e5e5e5] p-4">
            <h2 className="mb-3 text-base font-semibold text-[#212223]">Additional options</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                { key: "timesNewRoman", label: "14 pt. Times New Roman" },
                { key: "doubleSpaced", label: "Double-spaced" },
                { key: "footnotesLimited", label: "Footnotes: Limited" },
                { key: "pleadingPaper", label: "Pleading paper" },
                { key: "scannedSignatureAllowed", label: "Scanned signature allowed" },
                { key: "electronicSignature", label: "/s/ Electronic signature present" },
                { key: "barNumbersPresent", label: "Bar numbers present" },
                { key: "leadCounselIdentified", label: "Lead counsel identified" },
                { key: "allCounselSigned", label: "All counsel signed" },
              ].map((item) => (
                <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalOptions[item.key as keyof typeof additionalOptions]}
                    onChange={() => handleAdditionalToggle(item.key as keyof typeof additionalOptions)}
                    className="size-4 rounded border-[#e5e5e5] accent-[#1d4b34]"
                  />
                  <span className="text-sm text-[#212223]">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Generate button */}
        <div className="flex justify-center border-t border-[#e5e5e5] px-8 py-6">
          <button
            onClick={onGenerateDraft}
            className="rounded-full bg-[#1d4b34] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#163d2a]"
          >
            Generate draft
          </button>
        </div>
      </div>
    </div>
  );
}
