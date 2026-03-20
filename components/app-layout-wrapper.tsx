"use client";

import * as React from "react";
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
  const [drawerTab, setDrawerTab] = React.useState<"chat" | "notes" | "versions" | "sources">("chat");

  const handleChatClick = () => {
    setDrawerTab("chat");
    setDrawerOpen(true);
  };

  const handleNotesClick = () => {
    setDrawerTab("notes");
    setDrawerOpen(true);
  };

  const handleSourcesClick = () => {
    setDrawerTab("sources");
    setDrawerOpen(true);
  };

  return (
    <div className={cn("flex flex-1 overflow-hidden", className)}>
      {/* Main Content */}
      <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
        {children}
      </div>
      
      {/* Right Toolbar - hidden when drawer is open */}
      <RightToolbar
        onChatClick={handleChatClick}
        onNotesClick={handleNotesClick}
        onLibraryClick={handleSourcesClick}
        hidden={drawerOpen}
        hideHistoryButton={hideHistoryButton}
      />
      
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
        defaultTab={drawerTab}
      />
    </div>
  );
}
