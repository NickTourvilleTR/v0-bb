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
  currentStep?: "intake" | "argue" | "support-loading" | "support" | "distinguish" | "outline" | "outline-loading" | "outline-ready" | "draft" | "draft-loading" | "draft-ready" | "verify" | "finalize" | "opposition";
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
  hideHistoryButton?: boolean;
  quotedText?: string | null;
  onClearQuote?: () => void;
  messages?: Array<{
    id: string;
    type: "user" | "assistant";
    content: string;
    timestamp?: string;
    userName?: string;
  }>;
  className?: string;
  selectedMotion?: string | null;
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
  onNextSelectArguments,
  onSkipToGenerateDraft,
  onNextOpposition,
  onSkipToFinalize,
  onGenerateOutline,
  onGenerateDraft,
  onVerifyBrief,
  hideInput = false,
  showVersionsTab = false,
  hideHistoryButton = false,
  quotedText = null,
  onClearQuote,
  messages = [],
  className,
  selectedMotion = null,
}: AppLayoutWrapperProps) {
  const [drawerTab, setDrawerTab] = React.useState<"chat" | "notes" | "versions" | "sources">("chat");
  const [drawerWidth, setDrawerWidth] = React.useState(380);
  const isDragging = React.useRef(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = containerRect.right - e.clientX;
      const clamped = Math.min(Math.max(newWidth, 280), 640);
      setDrawerWidth(clamped);
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("flex flex-1 overflow-hidden", className)}>
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

      {/* Resize handle - only visible when drawer is open */}
      {drawerOpen && (
        <div
          onMouseDown={handleMouseDown}
          className="group relative z-10 flex w-1 flex-shrink-0 cursor-col-resize items-center justify-center bg-[#e5e5e5] hover:bg-[#1d4b34] transition-colors duration-150"
          title="Drag to resize"
        >
          <div className="h-8 w-1 rounded-full bg-[#cccccc] group-hover:bg-white transition-colors duration-150" />
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
        onNextSelectArguments={onNextSelectArguments}
        onSkipToGenerateDraft={onSkipToGenerateDraft}
        onNextOpposition={onNextOpposition}
        onSkipToFinalize={onSkipToFinalize}
        onGenerateOutline={onGenerateOutline}
        onGenerateDraft={onGenerateDraft}
        onVerifyBrief={onVerifyBrief}
        hideInput={hideInput}
        showVersionsTab={showVersionsTab}
        messages={messages}
        defaultTab={drawerTab}
        quotedText={quotedText}
        onClearQuote={onClearQuote}
        width={drawerOpen ? drawerWidth : undefined}
        selectedMotion={selectedMotion}
      />
    </div>
  );
}
