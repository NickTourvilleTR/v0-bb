"use client";

import * as React from "react";
import { RightToolbar } from "@/components/right-toolbar";
import { ChatDrawer } from "@/components/chat-drawer";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

interface AppLayoutWrapperProps {
  children: React.ReactNode;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  notesOpen: boolean;
  setNotesOpen: (open: boolean) => void;
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
  hideHistoryButton?: boolean;
  quotedText?: string | null;
  onClearQuote?: () => void;
  prefillText?: string;
  flowType?: "brief" | "judicial";
  messages?: Array<{
    id: string;
    type: "user" | "assistant";
    content: string;
    timestamp?: string;
    userName?: string;
  }>;
  className?: string;
  onSendMessage?: (message: string) => void;
  openSourceRequest?: { name: string; scrollToHighlight?: boolean } | null;
  onClearSourceRequest?: () => void;
}

export function AppLayoutWrapper({
  children,
  drawerOpen,
  setDrawerOpen,
  notesOpen,
  setNotesOpen,
  currentStep = "intake",
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
  prefillText,
  flowType = "brief",
  messages = [],
  className,
  onSendMessage,
  openSourceRequest,
  onClearSourceRequest,
}: AppLayoutWrapperProps) {
  const [drawerTab, setDrawerTab] = React.useState<"chat" | "notes" | "versions" | "sources">("chat");
  const [drawerWidth, setDrawerWidth] = React.useState(380);
  const [isDocumentOpen, setIsDocumentOpen] = React.useState(false);
  const previousWidthRef = React.useRef(380);
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

  const handleDocumentOpen = () => {
    if (containerRef.current) {
      previousWidthRef.current = drawerWidth;
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      setDrawerWidth(Math.round(containerWidth / 2));
      setIsDocumentOpen(true);
    }
  };

  const handleDocumentClose = () => {
    setDrawerWidth(previousWidthRef.current);
    setIsDocumentOpen(false);
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

        {/* Inline chat input - visible when drawer is closed OR when a non-chat tab is active */}
        {(!drawerOpen || drawerTab !== "chat") && onSendMessage && (
          <div className="absolute bottom-4 left-1/2 z-20 w-full max-w-xl -translate-x-1/2 px-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("inline-chat") as HTMLInputElement;
                const value = input?.value.trim();
                if (value) {
                  onSendMessage(value);
                  if (!drawerOpen) {
                    setDrawerOpen(true);
                  }
                  setDrawerTab("chat");
                  input.value = "";
                }
              }}
              className="flex items-center gap-2 rounded-full border border-[#d2d2d2] bg-white px-4 py-2 shadow-lg transition-shadow focus-within:border-[#1d4b34] focus-within:shadow-xl"
            >
              <input
                name="inline-chat"
                type="text"
                placeholder="Ask CoCounsel..."
                autoComplete="off"
                className="flex-1 bg-transparent text-sm text-[#212223] placeholder:text-[#999] outline-none"
              />
              <button
                type="submit"
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1d4b34] text-white transition-colors hover:bg-[#163d2a]"
              >
                <ArrowUp className="size-4" />
              </button>
            </form>
          </div>
        )}
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
        flowType={flowType}
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
        prefillText={prefillText}
        onSendMessage={onSendMessage}
        width={drawerOpen ? drawerWidth : undefined}
        onDocumentOpen={handleDocumentOpen}
        onDocumentClose={handleDocumentClose}
        onTabChange={setDrawerTab}
        openSourceRequest={openSourceRequest}
        onClearSourceRequest={onClearSourceRequest}
      />
    </div>
  );
}
