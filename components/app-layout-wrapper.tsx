"use client";

import * as React from "react";
import { X } from "lucide-react";
import { RightToolbar } from "@/components/right-toolbar";
import { ChatDrawer } from "@/components/chat-drawer";
import { cn } from "@/lib/utils";

interface AppLayoutWrapperProps {
  children: React.ReactNode;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  notesOpen: boolean;
  setNotesOpen: (open: boolean) => void;
  currentStep?: "argue" | "support-loading" | "support" | "distinguish" | "outline" | "outline-loading" | "outline-ready" | "draft" | "draft-loading" | "draft-ready" | "verify" | "finalize";
  onArgumentAdded?: () => void;
  onNextSupportingAuthority?: () => void;
  onNextContraryAuthorities?: () => void;
  onNextOutline?: () => void;
  onNextDraft?: () => void;
  onNextVerify?: () => void;
  onNextFinalize?: () => void;
  hideInput?: boolean;
  showVersionsTab?: boolean;
  hideHistoryButton?: boolean;
  messages?: Array<{
    id: string;
    type: "user" | "assistant";
    content: string;
    timestamp?: string;
    userName?: string;
  }>;
  className?: string;
}

export function AppLayoutWrapper({
  children,
  drawerOpen,
  setDrawerOpen,
  notesOpen,
  setNotesOpen,
  currentStep = "argue",
  onArgumentAdded,
  onNextSupportingAuthority,
  onNextContraryAuthorities,
  onNextOutline,
  onNextDraft,
  onNextVerify,
  onNextFinalize,
  hideInput = false,
  showVersionsTab = false,
  hideHistoryButton = false,
  messages = [],
  className,
}: AppLayoutWrapperProps) {
  return (
    <div className={cn("flex flex-1 overflow-hidden", className)}>
      {/* Main Content */}
      <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
        {children}
      </div>
      
      {/* Right Toolbar - hidden when drawer or notes is open */}
      <RightToolbar
        onChatClick={() => setDrawerOpen(!drawerOpen)}
        onNotesClick={() => setNotesOpen(!notesOpen)}
        hidden={drawerOpen || notesOpen}
        hideHistoryButton={hideHistoryButton}
      />
      
      {/* Notes Panel */}
      {notesOpen && (
        <div className="flex w-80 flex-col border-l border-[#e5e5e5] bg-white">
          <div className="flex items-center justify-between border-b border-[#e5e5e5] px-4 py-3">
            <h3 className="font-semibold text-[#212223]">Notes</h3>
            <button
              onClick={() => setNotesOpen(false)}
              className="p-1 text-[#737373] hover:text-[#212223]"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <textarea
              placeholder="Add your notes here..."
              className="h-full w-full resize-none rounded-lg border border-[#e5e5e5] bg-[#fcfcfc] p-3 text-sm text-[#212223] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1d4b34]"
            />
          </div>
        </div>
      )}
      
      {/* Chat Drawer */}
      <ChatDrawer
        isOpen={drawerOpen}
        onToggle={() => setDrawerOpen(!drawerOpen)}
        currentStep={currentStep}
        onArgumentAdded={onArgumentAdded}
        onNextSupportingAuthority={onNextSupportingAuthority}
        onNextContraryAuthorities={onNextContraryAuthorities}
        onNextOutline={onNextOutline}
        onNextDraft={onNextDraft}
        onNextVerify={onNextVerify}
        onNextFinalize={onNextFinalize}
        hideInput={hideInput}
        showVersionsTab={showVersionsTab}
        messages={messages}
      />
    </div>
  );
}
