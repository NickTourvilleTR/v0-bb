"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Sparkles, Paperclip, Image, ArrowUp, X, RotateCcw, FileText, ExternalLink, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatDrawerProps {
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onArgumentAdded?: () => void;
  onNextSupportingAuthority?: () => void;
  onNextContraryAuthorities?: () => void;
  onNextOutline?: () => void;
  onNextDraft?: () => void;
  onNextVerify?: () => void;
  onNextFinalize?: () => void;
  currentStep?: "argue" | "support-loading" | "support" | "distinguish" | "outline" | "outline-loading" | "outline-ready" | "draft" | "draft-loading" | "draft-ready" | "verify" | "finalize";
}

type ChatState = "initial" | "adding" | "added";

export function ChatDrawer({ className, isOpen = true, onToggle, onArgumentAdded, onNextSupportingAuthority, onNextContraryAuthorities, onNextOutline, onNextDraft, onNextVerify, onNextFinalize, currentStep = "argue" }: ChatDrawerProps) {
  const [activeTab, setActiveTab] = React.useState<"chat" | "notes" | "versions" | "sources">("chat");
  const [inputValue, setInputValue] = React.useState("");
  const [sourcesView, setSourcesView] = React.useState<"uploaded" | "cases">("uploaded");
  const [sourcesDropdownOpen, setSourcesDropdownOpen] = React.useState(false);
  const [chatState, setChatState] = React.useState<ChatState>("initial");
  const [addingProgress, setAddingProgress] = React.useState(0);
  const [researchExpanded, setResearchExpanded] = React.useState(false);
  const chatScrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom with smooth animation when content changes
  const scrollToBottom = React.useCallback(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  // Auto-scroll chat to bottom on mount and when chat state or step changes
  React.useEffect(() => {
    if (isOpen && activeTab === "chat") {
      // Small delay to ensure DOM has updated
      const timeoutId = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, activeTab, chatState, currentStep, scrollToBottom]);

  // Handle message submission
  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setInputValue("");
    setChatState("adding");
    
    // Animate progress
    setTimeout(() => setAddingProgress(40), 100);
    
    // Complete after delay
    setTimeout(() => {
      setChatState("added");
      onArgumentAdded?.();
    }, 3000);
  };

  // Collapsed state - hide completely
  if (!isOpen) {
    return null;
  }

  return (
    <div className={cn("flex h-full w-[420px] flex-col border-l border-[#e5e5e5] bg-white", className)}>
      {/* Tabs */}
      <div className="flex items-center border-b border-[#e5e5e5]">
        <button
          className="p-3 text-[#737373] hover:text-[#212223]"
          onClick={onToggle}
        >
          <X className="size-5" />
        </button>
        <div className="flex flex-1">
          {(["chat", "notes", "versions", "sources"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 px-4 py-3 text-sm font-medium capitalize transition-colors",
                activeTab === tab
                  ? "border-b-2 border-[#2e6b5c] text-[#212223]"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              {tab === "chat" ? "Chat" : tab === "notes" ? "Notes" : tab === "versions" ? "Versions" : "Sources"}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div ref={chatScrollRef} className="flex-1 overflow-y-auto p-4">
        {/* Notes Tab */}
        {activeTab === "notes" && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="text-sm text-[#737373]">No notes yet. Add notes to keep track of important information.</p>
          </div>
        )}

        {/* Versions Tab */}
        {activeTab === "versions" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg p-3 hover:bg-[#f7f7f7]">
              <div>
                <a href="#" className="text-sm font-medium text-[#2e6b5c] hover:underline">
                  2 Arguments selected and edited
                </a>
                <p className="text-xs text-[#737373]">Jan 29, 2026, 2:24 PM</p>
              </div>
              <button className="text-[#737373] hover:text-[#212223]">
                <RotateCcw className="size-4" />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg p-3 hover:bg-[#f7f7f7]">
              <div>
                <a href="#" className="text-sm font-medium text-[#2e6b5c] hover:underline">
                  2 Arguments selected and edited
                </a>
                <p className="text-xs text-[#737373]">Jan 29, 2026, 2:25 PM</p>
              </div>
              <button className="text-[#737373] hover:text-[#212223]">
                <RotateCcw className="size-4" />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg p-3 hover:bg-[#f7f7f7]">
              <div>
                <a href="#" className="text-sm font-medium text-[#2e6b5c] hover:underline">
                  3 Arguments selected and edited
                </a>
                <p className="text-xs text-[#737373]">Jan 29, 2026, 2:20 PM</p>
              </div>
              <button className="text-[#737373] hover:text-[#212223]">
                <RotateCcw className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* Sources Tab */}
        {activeTab === "sources" && (
          <div>
            {/* View Dropdown */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm text-[#212223]">View:</span>
              <div className="relative">
                <button
                  onClick={() => setSourcesDropdownOpen(!sourcesDropdownOpen)}
                  className="flex items-center gap-2 rounded-md border border-[#cccccc] bg-white px-3 py-1.5 text-sm text-[#212223] hover:bg-[#f7f7f7]"
                >
                  {sourcesView === "uploaded" ? "Uploaded documents" : "Cases & Statues"}
                  <ChevronDown className="size-4" />
                </button>
                {sourcesDropdownOpen && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-[#e5e5e5] bg-white py-1 shadow-lg">
                    <button
                      onClick={() => { setSourcesView("uploaded"); setSourcesDropdownOpen(false); }}
                      className="w-full px-3 py-2 text-left text-sm text-[#212223] hover:bg-[#f7f7f7]"
                    >
                      Uploaded documents
                    </button>
                    <button
                      onClick={() => { setSourcesView("cases"); setSourcesDropdownOpen(false); }}
                      className="w-full px-3 py-2 text-left text-sm text-[#212223] hover:bg-[#f7f7f7]"
                    >
                      Cases & Statues
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Uploaded Documents View */}
            {sourcesView === "uploaded" && (
              <div className="rounded-lg border border-[#e5e5e5] bg-white p-4">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 size-5 text-[#737373]" />
                  <div>
                    <p className="font-medium text-[#212223]">Love v. Airbnb - First Amended Complaint.pdf</p>
                    <p className="text-xs text-[#737373]">Uploaded at 9:07 a.m.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Cases & Statues View */}
            {sourcesView === "cases" && (
              <div className="space-y-4">
                {/* Case 1 */}
                <div className="rounded-lg border border-[#e5e5e5] bg-white p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <a href="#" className="font-medium text-[#2e6b5c] hover:underline">Shaw v. Lindheim</a>
                      <p className="text-xs text-[#737373]">919 F.2d 1353 (9th Cir. 2024)</p>
                    </div>
                    <ExternalLink className="size-4 text-[#737373]" />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#212223]">Snippet</span>
                    <div className="flex items-center gap-1 text-xs text-[#737373]">
                      <ChevronLeft className="size-3" />
                      <span>1 of 1</span>
                      <ChevronRight className="size-3" />
                    </div>
                  </div>
                  <p className="text-sm text-[#212223]">
                    ...establishing that accountants can face primary liability under securities laws for material misstatements when they know statements will be communicated to investors...
                  </p>
                </div>

                {/* Case 2 */}
                <div className="rounded-lg border border-[#e5e5e5] bg-white p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <a href="#" className="font-medium text-[#2e6b5c] hover:underline">Swirsky v. Carey</a>
                      <p className="text-xs text-[#737373]">376 F.3d 841 (9th Cir. 2004)</p>
                    </div>
                    <ExternalLink className="size-4 text-[#737373]" />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#212223]">Snippet</span>
                    <div className="flex items-center gap-1 text-xs text-[#737373]">
                      <ChevronLeft className="size-3" />
                      <span>1 of 1</span>
                      <ChevronRight className="size-3" />
                    </div>
                  </div>
                  <p className="text-sm text-[#212223]">
                    ...establishing that accountants can face primary liability under securities laws for material misstatements when they know statements will be communicated to investors...
                  </p>
                </div>

                {/* Case 3 */}
                <div className="rounded-lg border border-[#e5e5e5] bg-white p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <a href="#" className="font-medium text-[#2e6b5c] hover:underline">In re Enron Corp. Sec., Derivative & ERISA Litig.</a>
                      <p className="text-xs text-[#737373]">235 F. Supp. 2d 549 (S.D. Tex. 2002)</p>
                    </div>
                    <ExternalLink className="size-4 text-[#737373]" />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#212223]">Snippet</span>
                    <div className="flex items-center gap-1 text-xs text-[#737373]">
                      <ChevronLeft className="size-3" />
                      <span>1 of 1</span>
                      <ChevronRight className="size-3" />
                    </div>
                  </div>
                  <p className="text-sm text-[#212223]">
                    ...establishing that accountants can face primary liability under securities laws for material misstatements when they know statements will be communicated to investors...
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Chat Tab */}
        {activeTab === "chat" && (
          <>
        {/* Initial User Message */}
        <div className="mb-4 flex items-start gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
            JL
          </div>
          <div>
            <p className="text-xs text-[#737373]">Jane Lawson - 9:07 a.m.</p>
            <p className="text-sm text-[#212223]">
              Help me draft a legal brief
            </p>
          </div>
        </div>

        {/* CoCounsel - Brief Type Selection */}
        <div className="mb-4 flex items-start gap-2">
          <div className="shrink-0">
            <Logo icon className="size-7" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#737373]">CoCounsel - 9:10 a.m.</p>
            {/* Brief Builder Card - Brief Type */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="size-4 text-[#212223]" />
                <span className="font-semibold text-[#212223]">Brief Builder</span>
              </div>
              <p className="mb-3 text-sm text-[#212223]">
                I can help you draft a memorandum of law in support of a Motion for Summary Judgment. To ensure the draft fits your scenario, are you drafting a <strong>Primary</strong>, <strong>Opposition</strong>, or <strong>Reply</strong> brief?
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex size-4 items-center justify-center rounded-full border-2 border-[#1d4b34]">
                    <div className="size-2 rounded-full bg-[#1d4b34]" />
                  </div>
                  <span className="text-sm text-[#212223]">Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full border border-[#cccccc]" />
                  <span className="text-sm text-[#737373]">Opposition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full border border-[#cccccc]" />
                  <span className="text-sm text-[#737373]">Reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CoCounsel - Documents Uploaded */}
        <div className="mb-4 flex items-start gap-2">
          <div className="shrink-0">
            <Logo icon className="size-7" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#737373]">CoCounsel - 9:11 a.m.</p>
            {/* Brief Builder Card - Documents */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                  Motion for Summary Judgment
                </span>
                <span className="rounded-md border border-[#cccccc] bg-white px-2 py-1 text-xs text-[#212223]">
                  Primary
                </span>
              </div>
              <p className="mb-3 text-sm text-[#212223]">
                To provide you with the most useful guidance, I should start by analyzing the <strong>original complaint, answer, and reply</strong> (if applicable). You can also upload any <strong>pertinent exhibits, dismissal orders, other relevant documents or templates</strong> you would like to use for your brief.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
                  <FileText className="size-4 text-[#c9a227]" />
                  <span className="truncate text-xs text-[#212223]">Gyant v. NFM - Complaint</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
                  <FileText className="size-4 text-[#c9a227]" />
                  <span className="truncate text-xs text-[#212223]">Gyant v. NFM - Answer</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
                  <FileText className="size-4 text-[#c9a227]" />
                  <span className="truncate text-xs text-[#212223]">Hansen Deposition</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
                  <FileText className="size-4 text-[#c9a227]" />
                  <span className="truncate text-xs text-[#212223]">Policy Endorsement - Wind...</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
                  <FileText className="size-4 text-[#c9a227]" />
                  <span className="truncate text-xs text-[#212223]">ROR Letter</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
                  <FileText className="size-4 text-[#c9a227]" />
                  <span className="truncate text-xs text-[#212223]">Letter to NFM Dated Septe...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CoCounsel - Extracted Case Details */}
        <div className="mb-4 flex items-start gap-2">
          <div className="shrink-0">
            <Logo icon className="size-7" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#737373]">CoCounsel - 9:13 a.m.</p>
            {/* Brief Builder Card - Case Details */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                  Motion for Summary Judgment
                </span>
                <span className="rounded-md border border-[#cccccc] bg-white px-2 py-1 text-xs text-[#212223]">
                  Primary
                </span>
              </div>
              <p className="mb-3 text-sm text-[#212223]">
                The following details were extracted from your uploaded documents. <strong>Review and enter any edit instructions as necessary.</strong>
              </p>
              <div className="mb-4 space-y-2 text-sm">
                <div className="flex">
                  <span className="w-32 shrink-0 font-medium text-[#212223]">Judge's name:</span>
                  <span className="text-[#212223]">Andre Birotte Jr.</span>
                  <span className="ml-1 text-[#737373]">iii</span>
                </div>
                <div className="flex">
                  <span className="w-32 shrink-0 font-medium text-[#212223]">Civil Action No.:</span>
                  <span className="text-[#212223]">4:25-cv-00064-O</span>
                </div>
                <div className="mt-3">
                  <p className="font-medium text-[#212223]">Court name:</p>
                  <p className="text-[#212223]">U.S. District Court, N.D. TX, Fort Wayne Division</p>
                </div>
                <div>
                  <p className="font-medium text-[#212223]">Selected jurisdiction (sets the scope for your research):</p>
                  <p className="text-[#212223]">Texas and Related Federal</p>
                </div>
                <div>
                  <p className="font-medium text-[#212223]">Summary Judgment:</p>
                  <p className="text-[#212223]">Movant's Memorandum of Law (Federal) | <a href="#" className="text-[#2e6b5c] underline">Preview template</a></p>
                </div>
              </div>
              <p className="mb-2 text-sm text-[#212223]">I've also identified the following parties in the case.</p>
              <p className="mb-2 text-sm font-medium text-[#212223]">Please indicate which party you represent:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="plaintiff1" defaultChecked className="border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" />
                  <label htmlFor="plaintiff1" className="text-sm text-[#212223]"><strong>Plaintiff party 1:</strong> Gyant Properties, LLC</label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="defendant1" className="mt-0.5 border-[#cccccc]" />
                  <label htmlFor="defendant1" className="text-sm text-[#212223]"><strong>Defendant party 1:</strong> National Fire & Marine Insurance Company</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CoCounsel - Claims Selection */}
        <div className="mb-4 flex items-start gap-2">
          <div className="shrink-0">
            <Logo icon className="size-7" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#737373]">CoCounsel - 9:20 a.m.</p>
            {/* Brief Builder Card - Claims */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                  Motion for Summary Judgment
                </span>
                <span className="rounded-md border border-[#cccccc] bg-white px-2 py-1 text-xs text-[#212223]">
                  Primary
                </span>
              </div>
              <p className="mb-3 text-sm text-[#212223]">
                Which claims, defenses, or other issues would you like to move on?
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Checkbox id="claim1" defaultChecked className="mt-0.5 border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" />
                  <label htmlFor="claim1" className="text-sm text-[#212223]">
                    <strong>Breach of Insurance Contract - All Three Properties</strong>
                    <p className="mt-0.5 text-xs text-[#737373]">Failure to pay covered hail damage claims for Bryant Irvin, Seminary, and Stuart properties.</p>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="claim2" defaultChecked className="mt-0.5 border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" />
                  <label htmlFor="claim2" className="text-sm text-[#212223]">
                    <strong>Violation of § 542.055 - Failure to Acknowledge Receipt of Claim (Seminary)</strong>
                    <p className="mt-0.5 text-xs text-[#737373]">NFM failed to acknowledge receipt of the Seminary property claim within 15 days as required by law.</p>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="claim3" defaultChecked className="mt-0.5 border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" />
                  <label htmlFor="claim3" className="text-sm text-[#212223]">
                    <strong>Violation of § 542.056 - Failure to Begin Investigation (Seminary)</strong>
                    <p className="mt-0.5 text-xs text-[#737373]">NFM failed to commence investigation of the Seminary claim within 15 days of notification.</p>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="claim4" defaultChecked className="mt-0.5 border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" />
                  <label htmlFor="claim4" className="text-sm text-[#212223]">
                    <strong>Violation of § 541.061 - Misrepresentation of Insurance Policy</strong>
                    <p className="mt-0.5 text-xs text-[#737373]">NFM misrepresented policy terms and coverage provisions to deny or delay payment.</p>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="claim5" defaultChecked className="mt-0.5 border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" />
                  <label htmlFor="claim5" className="text-sm text-[#212223]">
                    <strong>Violation of § 541.060(a)(1) - Unfair Settlement Practices</strong>
                    <p className="mt-0.5 text-xs text-[#737373]">NFM misrepresented material facts relating to coverage and failed to effectuate prompt settlement.</p>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="claim6" defaultChecked className="mt-0.5 border-[#1d4b34] data-[state=checked]:bg-[#1d4b34]" />
                  <label htmlFor="claim6" className="text-sm text-[#212223]">
                    <strong>Violation of § 542.058 - Failure to Pay Claims Promptly</strong>
                    <p className="mt-0.5 text-xs text-[#737373]">NFM failed to pay claims within required time periods after receiving necessary documentation.</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CoCounsel - Additional Documents Request */}
        <div className="mb-4 flex items-start gap-2">
          <div className="shrink-0">
            <Logo icon className="size-7" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#737373]">CoCounsel - 9:32 a.m.</p>
            {/* Brief Builder Card - Additional Docs */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                  Motion for Summary Judgment
                </span>
                <span className="rounded-md border border-[#cccccc] bg-white px-2 py-1 text-xs text-[#212223]">
                  Primary
                </span>
              </div>
              <p className="mb-2 text-sm text-[#212223]">
                Almost there — can you provide any other key details or <strong>documents</strong>? These will help tailor the brief to your scenario. Use the chat to enter additional information or upload documents or such as:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Discovery requests and responses</li>
                <li>Deposition transcripts</li>
                <li>Expert reports</li>
                <li>Other motions and filings</li>
                <li>Correspondence</li>
                <li>Internal memos</li>
                <li>Other relevant facts or context</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User - No Further Details */}
        <div className="mb-4 flex items-start gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
            JL
          </div>
          <div>
            <p className="text-xs text-[#737373]">Jane Lawson - 9:36 a.m.</p>
            <p className="text-sm text-[#212223]">
              No further details, start building my brief.
            </p>
          </div>
        </div>

        {/* CoCounsel Response - Final */}
        <div className="mb-4 flex items-start gap-2">
          <div className="shrink-0">
            <Logo icon className="size-7" />
          </div>
          <div>
            <p className="text-xs text-[#737373]">CoCounsel - 9:42 a.m.</p>
          </div>
        </div>

        {/* Brief Builder Card - Final */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white p-4">
          {/* Header */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-[#212223]" />
              <span className="font-semibold text-[#212223]">Brief Builder</span>
            </div>
            <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
              Motion for Summary Judgment
            </span>
            <span className="rounded-md border border-[#cccccc] bg-white px-2 py-1 text-xs text-[#212223]">
              Primary
            </span>
          </div>

          {/* Content */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-sm text-[#212223]">Review your intake summary:</span>
            <Button
              variant="outline"
              size="sm"
              className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
            >
              Go to Intake
            </Button>
          </div>

          <p className="mb-3 font-medium text-[#212223]">
            What would you like to do next?
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              className="h-8 bg-[#1d4b34] px-3 text-sm text-white hover:bg-[#163d2a]"
              onClick={onNextSupportingAuthority}
            >
              Next: Select arguments
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
            >
              Skip to generate draft
            </Button>
          </div>
        </div>

        {/* User Add Argument Message */}
        {(chatState === "adding" || chatState === "added") && (
          <div className="mt-4 flex items-start gap-2">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
              JL
            </div>
            <div>
              <p className="text-xs text-[#737373]">Jane Lawson - 9:50 a.m.</p>
              <p className="text-sm text-[#212223]">
                Add one more argument that applies to multiple claims: waiver applies because the plaintiff's written agreement allowing the defendant to review the document bars her from asserting claims inconsistent with that agreement. Use conditional phrasing if needed.
              </p>
            </div>
          </div>
        )}

        {/* CoCounsel Adding Response */}
        {chatState === "adding" && (
          <>
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 9:50 a.m.</p>
              </div>
            </div>

            {/* Adding Argument Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-[#212223]">Adding argument...</span>
                <span className="text-sm text-[#212223]">{addingProgress}%</span>
              </div>
              <div className="mb-4 h-1.5 w-full rounded-full bg-[#e5e5e5]">
                <div
                  className="h-1.5 rounded-full bg-[#2e6b5c] transition-all duration-1000 ease-out"
                  style={{ width: `${addingProgress}%` }}
                />
              </div>

              {/* Checkbox */}
              <div className="mb-4 flex items-center gap-2">
                <Checkbox className="border-[#737373]" />
                <span className="text-sm text-[#212223]">Checkbox text label</span>
              </div>

              {/* Research Steps */}
              <button
                onClick={() => setResearchExpanded(!researchExpanded)}
                className="flex w-full items-center justify-between border-t border-[#e5e5e5] pt-3"
              >
                <span className="font-medium text-[#212223]">Research steps</span>
                {researchExpanded ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>
            </div>
          </>
        )}

        {/* CoCounsel Added Response */}
        {chatState === "added" && (
          <>
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 9:57 a.m.</p>
              </div>
            </div>

            {/* Added Argument Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#212223]">
                All set. I've added the argument to your draft brief.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                onClick={onNextSupportingAuthority}
              >
                Next: Supporting authority
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                Skip to generate draft
              </Button>
            </div>
          </>
        )}

        {/* Support Loading Step Messages */}
        {currentStep === "support-loading" && (
          <>
            {/* User Next Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 10:00 a.m.</p>
                <p className="text-sm text-[#212223]">Next: Supporting authority</p>
              </div>
            </div>
          </>
        )}

        {/* Support Step Messages */}
        {currentStep === "support" && (
          <>
            {/* User Next Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 10:00 a.m.</p>
                <p className="text-sm text-[#212223]">Next: Supporting authority</p>
              </div>
            </div>

            {/* CoCounsel Support Response */}
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 10:15 a.m.</p>
              </div>
            </div>

            {/* Support Ready Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-[#212223]">Supporting authorities are ready for review:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Go to Support
                </Button>
              </div>

              <p className="mb-2 text-sm text-[#212223]">
                I've pre-selected the stronger supporting authorities for your brief. You can tell me if you want to:
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add a supporting authority</li>
                <li>Edit how a supporting authority is used</li>
                <li>Select or remove a supporting authority</li>
              </ul>

              <p className="mb-3 font-medium text-[#212223]">
                What would you like to do next?
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                  onClick={onNextContraryAuthorities}
                >
                  Next: Review contrary authorities
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Skip to generate draft
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Distinguish Step Messages */}
        {currentStep === "distinguish" && (
          <>
            {/* User Next Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 10:00 a.m.</p>
                <p className="text-sm text-[#212223]">Next: Supporting authority</p>
              </div>
            </div>

            {/* CoCounsel Support Response (reusing from support step) */}
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 10:15 a.m.</p>
              </div>
            </div>

            {/* Support Ready Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-[#212223]">Supporting authorities are ready for review:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Go to Support
                </Button>
              </div>

              <p className="mb-2 text-sm text-[#212223]">
                I've pre-selected the stronger supporting authorities for your brief. You can tell me if you want to:
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add a supporting authority</li>
                <li>Edit how a supporting authority is used</li>
                <li>Select or remove a supporting authority</li>
              </ul>

              <p className="mb-3 font-medium text-[#212223]">
                What would you like to do next?
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                  onClick={onNextOutline}
                >
                  Next: Outline brief
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Skip to generate draft
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Outline Step Messages */}
        {currentStep === "outline" && (
          <>
            {/* User Next Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 11:30 a.m.</p>
                <p className="text-sm text-[#212223]">Next: Contrary authorities</p>
              </div>
            </div>

            {/* CoCounsel Distinguish Response */}
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 11:45 a.m.</p>
              </div>
            </div>

            {/* Distinguish Ready Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-[#212223]">Contrary authorities are ready for review:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Go to Distinguish
                </Button>
              </div>

              <p className="mb-2 text-sm text-[#212223]">
                Select the contrary authorities to distinguish in your motion. You can tell me if you want to:
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add or modify a contrary authority</li>
                <li>Edit how a contrary authority is used</li>
                <li>Select or remove a contrary authority</li>
              </ul>

              <p className="font-medium text-[#212223]">
                What would you like to do next?
              </p>
            </div>

            {/* User Brief Outline Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 12:30 p.m.</p>
                <p className="text-sm text-[#212223]">Next: Brief outline</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                <svg className="mr-1.5 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                onClick={onNextDraft}
              >
                Next: Generate draft
              </Button>
            </div>
          </>
        )}

        {/* Outline Loading and Ready Messages */}
        {(currentStep === "outline-loading" || currentStep === "outline-ready") && (
          <>
            {/* User Next Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 12:30 p.m.</p>
                <p className="text-sm text-[#212223]">Next: Brief outline</p>
              </div>
            </div>

            {/* CoCounsel Outline Response */}
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 12:45 p.m.</p>
              </div>
            </div>

            {/* Outline Ready Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-[#212223]">Brief outline is ready for review:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Go to Outline
                </Button>
              </div>

              <p className="mb-2 text-sm text-[#212223]">
                I've created an outline based on your scenario and selections. You can tell me if you want to
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add/remove a section</li>
                <li>Edit any sections</li>
                <li>Make edits offline and upload an updated outline</li>
              </ul>

              <p className="mb-2 text-sm text-[#212223]">
                You can also make an edits directly to the brief (@Justin indicate that it's a text editor)
              </p>

              <p className="font-medium text-[#212223]">
                What would you like to do next?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                <svg className="mr-1.5 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                onClick={onNextDraft}
              >
                Next: Generate draft
              </Button>
            </div>
          </>
        )}

        {/* Draft Step Messages */}
        {(currentStep === "draft" || currentStep === "draft-loading" || currentStep === "draft-ready") && (
          <>
            {/* User Next Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 12:30 p.m.</p>
                <p className="text-sm text-[#212223]">Next: Brief outline</p>
              </div>
            </div>

            {/* CoCounsel Outline Response */}
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 12:45 p.m.</p>
              </div>
            </div>

            {/* Outline Ready Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-[#212223]">Brief outline is ready for review:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Go to Outline
                </Button>
              </div>

              <p className="mb-2 text-sm text-[#212223]">
                I've created an outline based on your scenario and selections. You can tell me if you want to
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add/remove a section</li>
                <li>Edit any sections</li>
                <li>Make edits offline and upload an updated outline</li>
              </ul>

              <p className="mb-2 text-sm text-[#212223]">
                You can also make an edits directly to the brief (@Justin indicate that it's a text editor)
              </p>

              <p className="font-medium text-[#212223]">
                What would you like to do next?
              </p>
            </div>

            {/* User Draft Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 2:45 p.m.</p>
                <p className="text-sm text-[#212223]">Next: Draft brief</p>
              </div>
            </div>

            {/* Show draft ready card only when draft is ready */}
            {currentStep === "draft-ready" && (
              <>
                {/* CoCounsel Draft Response */}
                <div className="mt-4 flex items-start gap-2">
                  <div className="shrink-0">
                    <Logo icon className="size-7" />
                  </div>
                  <div>
                    <p className="text-xs text-[#737373]">CoCounsel - 3:15 p.m.</p>
                  </div>
                </div>

                {/* Draft Ready Card */}
                <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-[#212223]" />
                      <span className="font-semibold text-[#212223]">Brief Builder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                        Motion to dismiss
                      </span>
                      <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                        Primary brief
                      </span>
                    </div>
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-sm text-[#212223]">The draft brief is ready for review:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                    >
                      Go to Draft
                    </Button>
                  </div>

                  <p className="mb-2 text-sm text-[#212223]">
                    I've created a brief draft based on your scenario, selections and outline. You can tell me if you want to:
                  </p>
                  <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                    <li>Add/remove a section</li>
                    <li>Edit any sections in the outline</li>
                    <li>Make edits offline and upload an updated draft</li>
                  </ul>

                  <p className="mb-2 text-sm text-[#212223]">
                    You can also make an edits directly to the brief (@Justin indicate that it's a text editor)
                  </p>

                  <p className="font-medium text-[#212223]">
                    What would you like to do next?
                  </p>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                <svg className="mr-1.5 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                onClick={onNextVerify}
              >
                Next: Verify brief
              </Button>
            </div>
          </>
        )}

        {/* Verify Step Messages */}
        {currentStep === "verify" && (
          <>
            {/* User Verify Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 3:45 p.m.</p>
                <p className="text-sm text-[#212223]">Next: Verify brief</p>
              </div>
            </div>

            {/* CoCounsel Verify Response */}
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 3:55 p.m.</p>
              </div>
            </div>

            {/* Verify Ready Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-[#212223]">Brief verification is ready for review:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Go to Verify
                </Button>
              </div>

              <p className="mb-2 text-sm text-[#212223]">
                I've run verification based on the draft. Please review any warnings.
              </p>

              <p className="font-medium text-[#212223]">
                What would you like to do next?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                onClick={onNextFinalize}
              >
                Next: Finalize
              </Button>
            </div>
          </>
        )}

        {/* Finalize Step Messages */}
        {currentStep === "finalize" && (
          <>
            {/* User Finalize Message */}
            <div className="mt-4 flex items-start gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                JL
              </div>
              <div>
                <p className="text-xs text-[#737373]">Jane Lawson - 4:30 p.m.</p>
                <p className="text-sm text-[#212223]">Next: Finalize brief</p>
              </div>
            </div>

            {/* CoCounsel Finalize Response */}
            <div className="mt-4 flex items-start gap-2">
              <div className="shrink-0">
                <Logo icon className="size-7" />
              </div>
              <div>
                <p className="text-xs text-[#737373]">CoCounsel - 4:35 p.m.</p>
              </div>
            </div>

            {/* Finalize Ready Card */}
            <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#212223]" />
                  <span className="font-semibold text-[#212223]">Brief Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Motion to dismiss
                  </span>
                  <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                    Primary brief
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-[#212223]">The brief finalization summary is ready for review:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Go to Finalize
                </Button>
              </div>

              <p className="font-medium text-[#212223]">
                {"{"}What would you like to do next?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                <svg className="mr-1.5 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Next: Download
              </Button>
            </div>
          </>
        )}
          </>
        )}
      </div>

      {/* Chat Input - only show on Chat tab */}
      {activeTab === "chat" && (
      <div className="border-t border-[#e5e5e5] p-3">
        <div className="relative rounded-lg border border-[#e5e5e5] bg-white">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask CoCounsel..."
            className="min-h-[60px] resize-none border-0 bg-transparent px-3 py-2 text-sm focus-visible:ring-0"
          />
          <div className="flex items-center justify-between border-t border-[#f2f2f2] px-2 py-1">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="size-7 text-[#737373]">
                <Paperclip className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" className="size-7 text-[#737373]">
                <Image className="size-4" />
              </Button>
            </div>
            <Button
              size="icon"
              className="size-7 rounded-full bg-[#2e6b5c] text-white hover:bg-[#24594c]"
              onClick={handleSubmit}
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-[#737373]">
          Your data is{" "}
          <a href="#" className="text-[#212223] underline">
            private and secure
          </a>
          .
        </p>
      </div>
      )}
    </div>
  );
}
