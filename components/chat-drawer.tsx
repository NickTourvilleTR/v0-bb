"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Paperclip, ArrowUp, X, Notebook, RotateCcw, FileText, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Download, Reply } from "lucide-react";
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
  currentStep?: "intake" | "argue" | "argue2" | "support-loading" | "support" | "distinguish" | "outline" | "outline-loading" | "outline-ready" | "draft" | "draft-loading" | "draft-ready" | "verify" | "finalize" | "opposition";
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
}: ChatDrawerProps) {
  const [activeTab, setActiveTab] = React.useState<"chat" | "notes" | "versions" | "sources">(defaultTab);
  const [inputValue, setInputValue] = React.useState("");
  const [quotedText, setQuotedText] = React.useState<string | null>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentStep]);

  const handleSubmit = () => {
    if (inputValue.trim() || quotedText) {
      setInputValue("");
      setQuotedText(null);
    }
  };

  const handleQuote = (text: string) => {
    setQuotedText(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="flex h-full w-[340px] shrink-0 flex-col border-l border-[#e5e5e5] bg-white">
      {/* Header */}
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

      {/* Tabs */}
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
                  <p className="text-sm text-[#212223]">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Intake Step Card */}
            {currentStep === "intake" && (
              <MessageCard
                onQuote={() => handleQuote("Your intake summary is ready. I've analyzed the complaint and identified the key facts, parties, and claims.")}
              >
                <p className="mb-2 text-sm text-[#212223]">
                  Your intake summary is ready. I've analyzed the complaint and identified the key facts, parties, and claims.
                </p>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]">Skip to generate draft</Button>
                  <Button size="sm" onClick={onNextSelectArguments} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">Next: Select arguments</Button>
                </div>
              </MessageCard>
            )}

            {/* Argue Step Card */}
            {(currentStep === "argue" || currentStep === "argue2") && (
              <MessageCard
                onQuote={() => handleQuote("Review the potential arguments and select which ones to include in your brief.")}
              >
                <p className="mb-2 text-sm text-[#212223]">
                  Review the potential arguments and select which ones to include in your brief.
                </p>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]">Skip to generate draft</Button>
                  <Button size="sm" onClick={onNextSupportingAuthority} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">Next: Supporting authority</Button>
                </div>
              </MessageCard>
            )}

            {/* Support Step Card */}
            {currentStep === "support" && (
              <MessageCard
                onQuote={() => handleQuote("Supporting authorities are ready for review. I've pre-selected the stronger supporting authorities for your brief.")}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-sm text-[#212223]">Supporting authorities are ready for review:</span>
                </div>
                <p className="mb-2 text-sm text-[#212223]">I've pre-selected the stronger supporting authorities for your brief. You can tell me if you want to:</p>
                <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                  <li>Add a supporting authority</li>
                  <li>Edit how a supporting authority is used</li>
                  <li>Select or remove a supporting authority</li>
                </ul>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]">Skip to generate draft</Button>
                  <Button size="sm" onClick={onNextOutline} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">Next: Outline</Button>
                </div>
              </MessageCard>
            )}

            {/* Distinguish Step Card */}
            {currentStep === "distinguish" && (
              <MessageCard
                onQuote={() => handleQuote("Select the contrary authorities to distinguish in your motion.")}
              >
                <p className="mb-2 text-sm text-[#212223]">Select the contrary authorities to distinguish in your motion. You can tell me if you want to:</p>
                <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                  <li>Add or modify a contrary authority</li>
                  <li>Edit how a contrary authority is used</li>
                  <li>Select or remove a contrary authority</li>
                </ul>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]">Skip to generate draft</Button>
                  <Button size="sm" onClick={onGenerateOutline} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">Generate outline</Button>
                </div>
              </MessageCard>
            )}

            {/* Outline Loading/Ready Step Card */}
            {(currentStep === "outline-loading" || currentStep === "outline-ready") && (
              <MessageCard
                onQuote={() => handleQuote("Your brief outline is ready. Review the structure and sections before proceeding to the draft.")}
              >
                <p className="mb-2 text-sm text-[#212223]">
                  Your brief outline is ready. Review the structure and sections before proceeding to the draft.
                </p>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={onSkipToGenerateDraft} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]">Skip to generate draft</Button>
                  <Button size="sm" onClick={onGenerateDraft} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">Generate draft</Button>
                </div>
              </MessageCard>
            )}

            {/* Draft Loading/Ready Step Card */}
            {(currentStep === "draft" || currentStep === "draft-loading" || currentStep === "draft-ready") && (
              <MessageCard
                onQuote={() => handleQuote("Your brief draft is ready for review. You can make edits directly to the brief.")}
              >
                <p className="mb-2 text-sm text-[#212223]">
                  Your brief draft is ready for review. You can make edits directly to the brief.
                </p>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={onSkipToFinalize} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]">Skip to finalize</Button>
                  <Button size="sm" onClick={onVerifyBrief} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">Verify brief</Button>
                </div>
              </MessageCard>
            )}

            {/* Verify Step Card */}
            {currentStep === "verify" && (
              <MessageCard
                onQuote={() => handleQuote("I've verified all citations and cross-references in your brief.")}
              >
                <p className="mb-2 text-sm text-[#212223]">
                  I've verified all citations and cross-references in your brief.
                </p>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={onSkipToFinalize} className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]">Skip to finalize</Button>
                  <Button size="sm" onClick={onNextOpposition} className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">Next: Opposition brief</Button>
                </div>
              </MessageCard>
            )}

            {/* Finalize Step Card */}
            {currentStep === "finalize" && (
              <MessageCard
                onQuote={() => handleQuote("The brief finalization summary is ready for review.")}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-sm text-[#212223]">The brief finalization summary is ready for review:</span>
                </div>
                <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
                  <li>All citations verified</li>
                  <li>Table of contents generated</li>
                  <li>Table of authorities complete</li>
                  <li>Word count within limits</li>
                </ul>
                <p className="mb-3 text-sm text-[#212223]">What would you like to do next?</p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]">
                    <Download className="mr-2 size-4" />
                    Download brief
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

        {activeTab === "sources" && (
          <div className="text-sm text-[#737373]">No sources yet.</div>
        )}

        {activeTab === "versions" && (
          <div className="text-sm text-[#737373]">No versions yet.</div>
        )}
      </div>

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
                onClick={() => setQuotedText(null)}
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
