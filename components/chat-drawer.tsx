"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  currentStep?: string;
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
}

export function ChatDrawer({
  isOpen,
  onToggle,
  quotedText = null,
  onClearQuote,
  messages = [],
}: ChatDrawerProps) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = () => {
    if (inputValue.trim() || quotedText) {
      setInputValue("");
      if (onClearQuote) {
        onClearQuote();
      }
    }
  };

  const handleClearQuote = () => {
    if (onClearQuote) {
      onClearQuote();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex h-full w-full flex-col border-l border-[#e5e5e5] bg-white">
      {/* Drawer Header with Close Button */}
      <div className="flex items-center justify-between border-b border-[#e5e5e5] px-4 py-3">
        <h2 className="text-sm font-semibold text-[#212223]">Ask CoCounsel</h2>
        <button
          onClick={onToggle}
          className="rounded-md p-1 text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
          title="Close drawer"
          aria-label="Close drawer"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center py-8 text-center text-sm text-[#737373]">
            No messages yet. Start chatting!
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "rounded-lg p-3 text-sm",
                  msg.type === "user"
                    ? "bg-[#f2f2f2] text-[#212223]"
                    : "border border-[#e5e5e5] bg-white text-[#212223]"
                )}
              >
                {msg.content}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quoted Message Preview */}
      {quotedText && (
        <div className="border-l-4 border-[#1d4b34] bg-[#f9faf9] px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#737373]">Replying to CoCounsel</p>
              <p className="mt-1 line-clamp-2 text-sm text-[#212223]">{quotedText}</p>
            </div>
            <button
              onClick={handleClearQuote}
              className="shrink-0 rounded-md p-1 text-[#737373] hover:bg-white hover:text-[#212223]"
              title="Remove quote"
              aria-label="Remove quote"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t border-[#e5e5e5] px-4 py-3">
        <div className="flex gap-2">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask CoCounsel..."
            className="flex-1 resize-none rounded-lg border border-[#cccccc] bg-white px-3 py-2 text-sm placeholder-[#999999] focus:border-[#1d4b34] focus:outline-none"
            rows={2}
          />
          <button
            onClick={handleSubmit}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1d4b34] text-white hover:bg-[#163d2a]"
            title="Send message"
            aria-label="Send message"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}
