"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { gyantComplaintPages } from "@/lib/document-content";
import { Logo } from "@/components/logo";
import { Paperclip, ArrowUp, X, Notebook, RotateCcw, FileText, ChevronDown, ChevronUp, Download, Reply, Flag, Grip, Mail, ArrowLeft, Undo2, Redo2, ZoomIn, ZoomOut, ExternalLink } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp?: string;
  userName?: string;
}

interface ChatDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  flowType?: "brief" | "judicial";
  currentStep?: "library" | "intake" | "argue" | "support-loading" | "support" | "distinguish" | "outline" | "outline-loading" | "outline-ready" | "draft" | "draft-loading" | "draft-ready" | "verify" | "finalize" | "opposition";
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
  hideInput?: boolean;
  showVersionsTab?: boolean;
  messages?: Message[];
  defaultTab?: "chat" | "notes" | "versions" | "sources";
  quotedText?: string | null;
  onClearQuote?: () => void;
  prefillText?: string;
  width?: number;
  flowType?: "brief" | "judicial";
  onDocumentOpen?: () => void;
  onDocumentClose?: () => void;
  onTabChange?: (tab: "chat" | "notes" | "versions" | "sources") => void;
  onSendMessage?: (message: string) => void;
}

export function ChatDrawer({
  isOpen,
  onToggle,
  currentStep,
  onArgumentAdded,
  onNextSupportingAuthority,
  onNextContraryAuthorities,
  onNextOutline,
  onNextDraft,
  onNextVerify,
  onNextFinalize,
  onNextSelectArguments,
  onSkipToGenerateDraft,
  onNextOpposition,
  onSkipToFinalize,
  onGenerateOutline,
  onGenerateDraft,
  onVerifyBrief,
  hideInput = false,
  showVersionsTab = false,
  messages = [],
  defaultTab = "chat",
  quotedText: quotedTextProp = null,
  onClearQuote,
  prefillText,
  width,
  flowType = "brief",
  onDocumentOpen,
  onDocumentClose,
  onTabChange,
  onSendMessage,
}: ChatDrawerProps) {
  const [activeTab, setActiveTabInternal] = React.useState<"chat" | "notes" | "versions" | "sources">(defaultTab);
  const setActiveTab = React.useCallback((tab: "chat" | "notes" | "versions" | "sources") => {
    setActiveTabInternal(tab);
    onTabChange?.(tab);
  }, [onTabChange]);
  const [inputValue, setInputValue] = React.useState("");
  const [internalQuotedText, setInternalQuotedText] = React.useState<string | null>(null);
  const [sourcesView, setSourcesView] = React.useState<"uploaded" | "cases">("uploaded");
  const [sourcesDropdownOpen, setSourcesDropdownOpen] = React.useState(false);
  const [openedDocument, setOpenedDocument] = React.useState<{ name: string; time: string } | null>(null);
  const sourcesDropdownRef = React.useRef<HTMLDivElement>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sourcesDropdownRef.current && !sourcesDropdownRef.current.contains(event.target as Node)) {
        setSourcesDropdownOpen(false);
      }
    }
    if (sourcesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [sourcesDropdownOpen]);
  
  // Use prop if provided, otherwise use internal state
  const quotedText = quotedTextProp ?? internalQuotedText;

  React.useEffect(() => {
    setActiveTabInternal(defaultTab);
  }, [defaultTab]);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentStep]);

  // Auto-fill input when prefillText changes
  React.useEffect(() => {
    if (prefillText) {
      setInputValue(prefillText);
    }
  }, [prefillText]);

  const handleSubmit = () => {
    if (inputValue.trim() || quotedText) {
      const finalMessage = inputValue.trim() || quotedText;
      onSendMessage?.(finalMessage);
      setInputValue("");
      // Clear quote - use prop callback if available, otherwise internal state
      if (onClearQuote) {
        onClearQuote();
      } else {
        setInternalQuotedText(null);
      }
    }
  };

  const handleQuote = (text: string) => {
    setInternalQuotedText(text);
  };
  
  const handleClearQuote = () => {
    if (onClearQuote) {
      onClearQuote();
    } else {
      setInternalQuotedText(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTextareaFocus = () => {
    if (prefillText && !inputValue) {
      setInputValue(prefillText);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="flex h-full shrink-0 flex-col border-l border-[#e5e5e5] bg-white"
      style={{ width: width ? `${width}px` : "340px" }}
    >
      {/* Header - hidden when document is open */}
      {!openedDocument && (
        <div className="flex items-center justify-between border-b border-[#e5e5e5] px-4 py-3">
          <div className="flex items-center gap-2">
            <Logo className="size-5" />
            <span className="text-sm font-medium text-[#212223]">CoCounsel</span>
          </div>
          <button
            onClick={onToggle}
            className="flex size-7 items-center justify-center rounded-md text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      {/* Tabs - hidden when document is open */}
      {!openedDocument && (
        <div className="flex border-b border-[#e5e5e5]">
          {(["chat", "sources", "notes"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-2.5 text-xs font-medium capitalize transition-colors",
                activeTab === tab
                  ? "border-b-2 border-[#1d4b34] text-[#1d4b34]"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              {tab}
            </button>
          ))}
          {showVersionsTab && (
            <button
              onClick={() => setActiveTab("versions")}
              className={cn(
                "flex-1 py-2.5 text-xs font-medium capitalize transition-colors",
                activeTab === "versions"
                  ? "border-b-2 border-[#1d4b34] text-[#1d4b34]"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              Versions
            </button>
          )}
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === "chat" && (
          <>
            {/* CoCounsel intro message */}
            <div className="mb-4 flex items-start gap-2">
              <Logo className="mt-0.5 size-5 shrink-0" />
              <div>
                <p className="text-xs text-[#737373]">CoCounsel</p>
                <p className="text-sm text-[#212223]">
                  I'm your AI legal assistant. I'll help you build your brief step by step.
                </p>
              </div>
            </div>

            {/* Dynamic step messages */}
            {messages.map((msg) => (
              <div key={msg.id} className="mb-4 flex items-start gap-2">
                {msg.type === "assistant" ? (
                  <Logo className="mt-0.5 size-5 shrink-0" />
                ) : (
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                    {msg.userName ? msg.userName.split(" ").map(n => n[0]).join("") : "U"}
                  </div>
                )}
                <div>
                  <p className="text-xs text-[#737373]">
                    {msg.type === "assistant" ? "CoCounsel" : msg.userName || "You"}{msg.timestamp ? ` - ${msg.timestamp}` : ""}
                  </p>
                  <p className="text-sm text-[#212223]" dangerouslySetInnerHTML={{ __html: msg.content }} />
                </div>
              </div>
            ))}


            {/* Support Step Card */}
            {currentStep === "support" && (
              <MessageCard
                onQuote={() => handleQuote(flowType === "judicial" ? "Decide how to resolve disputed issues." : "Supporting authorities are ready for review. I've pre-selected the stronger supporting authorities for your brief.")}
              >
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  {flowType !== "judicial" && (
                    <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">Skip to generate draft</Button>
                  )}
                  <Button size="sm" onClick={onNextOutline} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">Next: Outline</Button>
                </div>
              </MessageCard>
            )}

            {/* Distinguish Step Card */}
            {currentStep === "distinguish" && (
              <MessageCard
                onQuote={() => handleQuote("Select the contrary authorities to distinguish in your motion.")}
              >
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">Skip to generate draft</Button>
                  <Button size="sm" onClick={onGenerateOutline} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">Generate outline</Button>
                </div>
              </MessageCard>
            )}

            {/* Outline Loading/Ready Step Card */}
            {(currentStep === "outline-loading" || currentStep === "outline-ready") && (
              <MessageCard
                onQuote={() => handleQuote("Your outline is ready. Review the structure and headings, then proceed to generate the full draft.")}
              >
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <Button size="sm" onClick={onNextDraft} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">Next: Draft</Button>
                </div>
              </MessageCard>
            )}

            {/* Draft Step Card */}
            {(currentStep === "draft" || currentStep === "draft-loading" || currentStep === "draft-ready") && (
              <MessageCard
                onQuote={() => handleQuote("Generate your draft based on your selections and outline.")}
              >
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <Button size="sm" onClick={onNextVerify} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">Next: Verify</Button>
                </div>
              </MessageCard>
            )}

            {/* Opposition Step Card */}
            {currentStep === "opposition" && (
              <MessageCard
                onQuote={() => handleQuote("Review the opposition brief analysis.")}
              >
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <Button variant="outline" size="sm" onClick={onSkipToFinalize} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">Skip to finalize</Button>
                  <Button size="sm" onClick={onNextFinalize} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">Next: Finalize</Button>
                </div>
              </MessageCard>
            )}

            {/* Verify Step Card */}
            {currentStep === "verify" && (
              <MessageCard
                onQuote={() => handleQuote(flowType === "judicial" ? "Verification ready for you to review." : "I've verified all citations and cross-references in your brief.")}
              >
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <Button variant="outline" size="sm" onClick={onSkipToFinalize} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">Skip to finalize</Button>
                  <Button size="sm" onClick={flowType === "judicial" ? onVerifyBrief : onNextOpposition} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">{flowType === "judicial" ? "Start verification" : "Next: Opposition brief"}</Button>
                </div>
              </MessageCard>
            )}

            {/* Finalize Step Card */}
            {currentStep === "finalize" && (
              <MessageCard
                onQuote={() => handleQuote(flowType === "judicial" ? "The opinion finalization summary is ready for review." : "The brief finalization summary is ready for review.")}
              >
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <Button size="sm" variant="outline" className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">
                    <Mail className="mr-2 size-4" />
                    Email
                  </Button>
                  <Button size="sm" className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">
                    <Download className="mr-2 size-4" />
                    {flowType === "judicial" ? "Download opinion" : "Download brief"}
                  </Button>
                </div>
              </MessageCard>
            )}

            <div ref={messagesEndRef} />
          </>
        )}

        {activeTab === "notes" && (
          <div className="text-sm text-[#737373]">No notes yet.</div>
        )}

        {activeTab === "sources" && !openedDocument && (
          <div className="flex flex-col gap-3">
            {/* View dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#737373]">View:</span>
              <div ref={sourcesDropdownRef} className="relative">
                <button
                  onClick={() => setSourcesDropdownOpen(!sourcesDropdownOpen)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#1d4b34] px-3 py-1 text-sm font-medium text-[#1d4b34]"
                >
                  {sourcesView === "uploaded" ? "Uploaded documents" : "Cases & statutes"}
                  <ChevronDown className={cn("size-3.5 transition-transform", sourcesDropdownOpen && "rotate-180")} />
                </button>
                {sourcesDropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] overflow-hidden rounded-lg border border-[#e5e5e5] bg-white shadow-lg">
                    <button
                      onClick={() => { setSourcesView("uploaded"); setSourcesDropdownOpen(false); }}
                      className={cn(
                        "flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#f7f7f7]",
                        sourcesView === "uploaded" ? "font-medium text-[#212223]" : "text-[#737373]"
                      )}
                    >
                      Uploaded documents
                    </button>
                    <button
                      onClick={() => { setSourcesView("cases"); setSourcesDropdownOpen(false); }}
                      className={cn(
                        "flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#f7f7f7]",
                        sourcesView === "cases" ? "font-medium text-[#212223]" : "text-[#737373]"
                      )}
                    >
                      Cases & statutes
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Document list */}
            {sourcesView === "uploaded" && (
              <div className="flex flex-col gap-1">
                {[
                  { name: "Gyant v. NFM - Complaint.pdf", time: "9:17 a.m." },
                  { name: "Gyant v. NFM - Answer.pdf", time: "9:17 a.m." },
                  { name: "Hansen Deposition.pdf", time: "9:17 a.m." },
                  { name: "Policy Endorsement - Wind/Hail, Notice of Claim.pdf", time: "9:17 a.m." },
                  { name: "ROR Letter.docx", time: "9:17 a.m." },
                  { name: "Letter to NFM Dated September 19, 2023.docx", time: "9:17 a.m." },
                ].map((doc) => (
                  <button
                    key={doc.name}
                    onClick={() => {
                      setOpenedDocument(doc);
                      onDocumentOpen?.();
                    }}
                    className="flex items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-[#f7f7f7]"
                  >
                    <FileText className="mt-0.5 size-5 shrink-0 text-[#737373]" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#212223] break-words">{doc.name}</p>
                      <p className="text-xs text-[#737373]">Uploaded at {doc.time}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {sourcesView === "cases" && (
              <div className="text-sm text-[#737373]">No cases or statutes yet.</div>
            )}
          </div>
        )}

        {/* Document Viewer */}
        {activeTab === "sources" && openedDocument && (
          <div className="flex flex-col gap-4">
            {/* Back to Sources */}
            <button
              onClick={() => {
                setOpenedDocument(null);
                onDocumentClose?.();
              }}
              className="flex items-center gap-2 text-sm text-[#212223] hover:text-[#1d4b34] transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to Sources
            </button>

            {/* Document title */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-lg font-semibold text-[#1d4b34] underline decoration-[#1d4b34] underline-offset-2 hover:text-[#163d2a]"
              >
                {openedDocument.name}
                <ExternalLink className="size-4" />
              </a>
              <p className="mt-1 text-sm text-[#737373]">Uploaded at {openedDocument.time}</p>
            </div>

            {/* Toolbar */}
            <div className="sticky top-0 z-10 flex items-center justify-between rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
              <div className="flex items-center gap-1">
                <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <Undo2 className="size-4" />
                </button>
                <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <Redo2 className="size-4" />
                </button>
                <div className="mx-1 h-5 w-px bg-[#e5e5e5]" />
                <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <ZoomOut className="size-4" />
                </button>
                <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <ZoomIn className="size-4" />
                </button>
                <div className="mx-1 h-5 w-px bg-[#e5e5e5]" />
                <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
                  <Download className="size-4" />
                </button>
              </div>
            </div>

            {/* Document Content - continuous scroll */}
            <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
              {(openedDocument.name === "Gyant v. NFM - Complaint.pdf" ? gyantComplaintPages : []).map((page, index) => (
                <div key={index} className={index > 0 ? "mt-8 border-t border-[#e5e5e5] pt-8" : ""}>
                  <p className="mb-3 text-xs text-[#737373]">{page.pageHeader}</p>
                  <div className="whitespace-pre-line text-sm leading-relaxed text-[#212223]">
                    {page.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "versions" && (
          <div className="text-sm text-[#737373]">No versions yet.</div>
        )}
      </div>

      {/* Intake Step Card - above input */}
      {currentStep === "intake" && activeTab === "chat" && (
        <div className="border-t border-[#e5e5e5] p-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {flowType !== "judicial" && (
              <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">Skip to generate draft</Button>
            )}
            <Button size="sm" onClick={onNextSelectArguments} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">{flowType === "judicial" ? "Next: Select claims" : "Next: Select arguments"}</Button>
          </div>
        </div>
      )}

      {/* Argue Step Card - above input */}
      {currentStep === "argue" && activeTab === "chat" && (
        <div className="border-t border-[#e5e5e5] p-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {flowType !== "judicial" && (
              <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">Skip to generate draft</Button>
            )}
            <Button size="sm" onClick={onNextSupportingAuthority} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">Next: {flowType === "judicial" ? "Decide on selected claims" : "Supporting authority"}</Button>
          </div>
        </div>
      )}

      {/* Develop Step Card - above input */}
      {(currentStep === "support" || currentStep === "support-loading") && activeTab === "chat" && (
        <div className="border-t border-[#e5e5e5] p-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {flowType !== "judicial" && (
              <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2] shrink-0">Skip to generate draft</Button>
            )}
            <Button size="sm" onClick={onNextOutline} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a] shrink-0">Next: Outline</Button>
          </div>
        </div>
      )}

      {/* Chat Input */}
      {!hideInput && activeTab === "chat" && (
        <div className="border-t border-[#e5e5e5] p-4">
          {/* Quoted message preview */}
          {quotedText && (
            <div className="mb-2 flex items-start gap-2 rounded-lg border-l-4 border-[#1d4b34] bg-[#f0f7f4] px-3 py-2">
              <div className="flex-1">
                <p className="text-xs font-medium text-[#1d4b34]">Replying to CoCounsel</p>
                <p className="line-clamp-2 text-xs text-[#737373]">{quotedText}</p>
              </div>
              <button
                onClick={handleClearQuote}
                className="shrink-0 text-[#737373] hover:text-[#212223]"
              >
                <X className="size-3.5" />
              </button>
            </div>
          )}
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={handleTextareaFocus}
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
              </div>
              <button
                className="flex size-9 items-center justify-center rounded-lg bg-[#1d4b34] text-white hover:bg-[#163d2a]"
                onClick={handleSubmit}
              >
                <ArrowUp className="size-5" />
              </button>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-[#737373]">
            Your data is{" "}
            <a href="#" className="text-[#212223] underline">private and secure</a>.
          </p>
        </div>
      )}
    </div>
  );
}

// Simple icon button quote/reply variation (MS Teams style)
function MessageCard({
  children,
  onQuote,
}: {
  children: React.ReactNode;
  onQuote: () => void;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative mt-2 rounded-lg border border-[#e5e5e5] bg-white p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Quote Reply Button */}
      <button
        onClick={onQuote}
        className={cn(
          "absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-[#1d4b34] text-white shadow-sm transition-all duration-150",
          isHovered ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        )}
        title="Quote reply"
      >
        <Reply className="size-3.5" />
      </button>
      {children}
    </div>
  );
}
