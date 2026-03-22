"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Paperclip, ArrowUp, X, Notebook, RotateCcw, FileText, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
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
  onNextSelectArguments?: () => void;
  onSkipToGenerateDraft?: () => void;
  onNextOpposition?: () => void;
  onSkipToFinalize?: () => void;
  onGenerateOutline?: () => void;
  onGenerateDraft?: () => void;
  onVerifyBrief?: () => void;
  currentStep?: "intake" | "argue" | "argue2" | "support-loading" | "support" | "distinguish" | "outline" | "outline-loading" | "outline-ready" | "draft" | "draft-loading" | "draft-ready" | "verify" | "finalize" | "opposition";
  hideInput?: boolean;
  showVersionsTab?: boolean;
  messages?: Array<{
    id: string;
    type: "user" | "assistant";
    content: string;
    timestamp?: string;
    userName?: string;
  }>;
  defaultTab?: "chat" | "notes" | "versions" | "sources";
}

type ChatState = "initial" | "adding" | "added";

export function ChatDrawer({ className, isOpen = true, onToggle, onArgumentAdded, onNextSupportingAuthority, onNextContraryAuthorities, onNextOutline, onNextDraft, onNextVerify, onNextFinalize, onNextSelectArguments, onSkipToGenerateDraft, onNextOpposition, onSkipToFinalize, onGenerateOutline, onGenerateDraft, onVerifyBrief, currentStep = "argue", hideInput = false, showVersionsTab = false, messages = [], defaultTab = "chat" }: ChatDrawerProps) {
  const [activeTab, setActiveTab] = React.useState<"chat" | "notes" | "versions" | "sources">(defaultTab);
  
  // Update active tab when defaultTab changes
  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);
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
          {(showVersionsTab ? ["chat", "notes", "versions", "sources"] as const : ["chat", "notes", "sources"] as const).map((tab) => (
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
        {activeTab === "versions" && showVersionsTab && (
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
                    <Notebook className="size-4 text-[#737373]" />
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
                    <Notebook className="size-4 text-[#737373]" />
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
                    <Notebook className="size-4 text-[#737373]" />
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
        {/* Dynamic Messages from user input */}
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="text-sm text-[#737373]">No messages yet. Your conversation will appear here as you interact with the screens.</p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="mb-4 flex items-start gap-2">
              {message.type === "user" ? (
                <>
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                    {message.userName?.split(" ").map(n => n[0]).join("") || "JL"}
                  </div>
                  <div>
                    <p className="text-xs text-[#737373]">{message.userName || "Jane Lawson"} - {message.timestamp || "Just now"}</p>
                    <p className="text-sm text-[#212223]">{message.content}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="shrink-0">
                    <Logo icon className="size-7" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#737373]">CoCounsel - {message.timestamp || "Just now"}</p>
                    <div className="mt-1 text-sm text-[#212223]" dangerouslySetInnerHTML={{ __html: message.content }} />
                  </div>
                </>
              )}
            </div>
          ))
        )}

        {/* Intake Step Card */}
        {currentStep === "intake" && messages.length > 0 && (
          <div className="mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
            <p className="mb-2 text-sm text-[#212223]">
              Your intake summary is ready. I've analyzed the complaint and identified the key facts, parties, and claims.
            </p>

            <p className="mb-3 text-sm text-[#212223]">
              What would you like to do next?
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onSkipToGenerateDraft}
                className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                Skip to generate draft
              </Button>
              <Button
                size="sm"
                onClick={onNextSelectArguments}
                className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
              >
                Next: Select arguments
              </Button>
            </div>
          </div>
        )}

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
              <p className="mb-3 text-sm text-[#212223]">
                All set. I've added the argument to your draft brief.
              </p>

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSkipToGenerateDraft}
                  className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Skip to generate draft
                </Button>
                <Button
                  size="sm"
                  onClick={onNextSupportingAuthority}
                  className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                >
                  Next: Supporting authority
                </Button>
              </div>
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

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSkipToGenerateDraft}
                  className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Skip to generate draft
                </Button>
                <Button
                  size="sm"
                  onClick={onNextOutline}
                  className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                >
                  Next: Outline
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

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  onClick={onNextFinalize}
                  className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                >
                  Next: Finalize
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
              <p className="mb-2 text-sm text-[#212223]">
                Select the contrary authorities to distinguish in your motion. You can tell me if you want to:
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add or modify a contrary authority</li>
                <li>Edit how a contrary authority is used</li>
                <li>Select or remove a contrary authority</li>
              </ul>

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSkipToGenerateDraft}
                  className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Skip to generate draft
                </Button>
                <Button
                  size="sm"
                  onClick={onGenerateOutline}
                  className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                >
                  Generate outline
                </Button>
              </div>
            </div>

          </>
        )}

        {/* Outline Loading and Ready Messages */}
        {(currentStep === "outline-loading" || currentStep === "outline-ready") && (
          <>
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
              <p className="mb-2 text-sm text-[#212223]">
                I've created an outline based on your scenario and selections. You can tell me if you want to
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add/remove a section</li>
                <li>Edit any sections</li>
                <li>Make edits offline and upload an updated outline</li>
              </ul>

              <p className="mb-2 text-sm text-[#212223]">
                You can also make edits directly to the brief.
              </p>

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  onClick={onNextDraft}
                  className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                >
                  Next: Draft
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Draft Step Messages */}
        {(currentStep === "draft" || currentStep === "draft-loading" || currentStep === "draft-ready") && (
          <>
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
              <p className="mb-2 text-sm text-[#212223]">
                I've created an outline based on your scenario and selections. You can tell me if you want to
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                <li>Add/remove a section</li>
                <li>Edit any sections</li>
                <li>Make edits offline and upload an updated outline</li>
              </ul>

              <p className="mb-2 text-sm text-[#212223]">
                You can also make edits directly to the brief.
              </p>

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  onClick={onGenerateDraft}
                  className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                >
                  Generate draft
                </Button>
              </div>
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
                  <p className="mb-2 text-sm text-[#212223]">
                    I've created a brief draft based on your scenario, selections and outline. You can tell me if you want to:
                  </p>
                  <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                    <li>Add/remove a section</li>
                    <li>Edit any sections in the outline</li>
                    <li>Make edits offline and upload an updated draft</li>
                  </ul>

                  <p className="mb-2 text-sm text-[#212223]">
                    You can also make edits directly to the brief.
                  </p>

                  <p className="mb-3 text-sm text-[#212223]">
                    What would you like to do next?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      onClick={onVerifyBrief}
                      className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                    >
                      Verify brief
                    </Button>
                  </div>
                </div>
              </>
            )}
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
              <p className="mb-2 text-sm text-[#212223]">
                I've run verification based on the draft. Please review any warnings.
              </p>

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSkipToFinalize}
                  className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Skip to finalize
                </Button>
                <Button
                  size="sm"
                  onClick={onNextOpposition}
                  className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
                >
                  Next: Opposition brief
                </Button>
              </div>
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

              <p className="mb-3 text-sm text-[#212223]">
                What would you like to do next?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                >
                  Download brief
                </Button>
              </div>
            </div>
          </>
        )}
          </>
        )}
      </div>

      {/* Chat Input - show on Chat tab */}
      {activeTab === "chat" && (
        <div className="border-t border-[#e5e5e5] p-4">
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask CoCounsel..."
              className="min-h-[40px] resize-none border-0 bg-transparent p-0 text-sm text-[#212223] placeholder:text-[#737373] focus-visible:ring-0"
            />
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
                <button className="flex items-center gap-0.5 rounded-md px-1 py-1 text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <ChevronDown className="size-3" />
                </button>
              </div>
              <button
                className="flex size-9 items-center justify-center rounded-lg bg-[#212223] text-white hover:bg-[#333333]"
                onClick={handleSubmit}
              >
                <ArrowUp className="size-5" />
              </button>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-[#737373]">
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
