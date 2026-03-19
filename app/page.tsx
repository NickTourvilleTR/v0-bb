"use client";

import { CocoSideNav } from "@/components/coco-side-nav";
import { CocoChatInput } from "@/components/coco-chat-input";
import { CocoHeader } from "@/components/coco-header";
import { CocoChatMessage } from "@/components/coco-chat-message";
import { BriefBuilderCard } from "@/components/brief-builder-card";
import { BriefBuilderTypeCard } from "@/components/brief-builder-type-card";
import { BriefBuilderUploadCard } from "@/components/brief-builder-upload-card";
import { BriefBuilderDetailsCard } from "@/components/brief-builder-details-card";
import { BriefBuilderAdditionalCard } from "@/components/brief-builder-additional-card";
import { BriefBuilderProgressCard } from "@/components/brief-builder-progress-card";
import { BriefBuilderReadyCard } from "@/components/brief-builder-ready-card";
import { BriefBuilderGeneratingCard } from "@/components/brief-builder-generating-card";
import { BriefStepperNav } from "@/components/brief-stepper-nav";
import { ArgumentsPanel } from "@/components/arguments-panel";
import { SupportingAuthoritiesPanel } from "@/components/supporting-authorities-panel";
import { SupportLoadingScreen } from "@/components/support-loading-screen";
import { ContraryAuthoritiesPanel } from "@/components/contrary-authorities-panel";
import { OutlineScreen } from "@/components/outline-screen";
import { OutlineLoadingScreen } from "@/components/outline-loading-screen";
import { OutlineEditor } from "@/components/outline-editor";
import { DraftScreen } from "@/components/draft-screen";
import { DraftLoadingScreen } from "@/components/draft-loading-screen";
import { DraftEditor } from "@/components/draft-editor";
import { VerifyPanel } from "@/components/verify-panel";
import { FinalizePanel } from "@/components/finalize-panel";
import { IntakeScreen } from "@/components/intake-screen";
import { LibraryScreen } from "@/components/library-screen";
import { ChatDrawer } from "@/components/chat-drawer";
import { Switch } from "@/components/ui/switch";
import { Sparkles, PenLine, Search, LayoutGrid, MessageSquare, Notebook, History, Library, X } from "lucide-react";
import * as React from "react";

type Screen =
  | "start"
  | "library"
  | "motion-search"
  | "brief-type"
  | "file-upload"
  | "uploading"
  | "case-details"
  | "additional-details"
  | "context-provided"
  | "ready-to-build"
  | "generating"
  | "intake"
  | "builder"
  | "support-loading"
  | "support"
  | "distinguish"
  | "outline"
  | "outline-loading"
  | "outline-ready"
  | "draft"
  | "draft-loading"
  | "draft-ready"
  | "verify"
  | "finalize";

export default function BriefBuilderPrototype() {
  // Force refresh - all handlers are inline functions
  const [currentScreen, setCurrentScreen] = React.useState<Screen>("start");
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [notesOpen, setNotesOpen] = React.useState(false);
  const [showUserArgument, setShowUserArgument] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scrollEndRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when screen changes with smooth animation
  React.useEffect(() => {
    if (scrollEndRef.current) {
      // Small delay to ensure new content is rendered before scrolling
      const timer = setTimeout(() => {
        scrollEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleStartSubmit = () => {
    setCurrentScreen("motion-search");
  };

  const handleLibraryClick = () => {
    setCurrentScreen("library");
  };

  const handleMotionSearchSubmit = () => {
    setCurrentScreen("brief-type");
  };

  const handleBriefTypeSubmit = () => {
    setCurrentScreen("file-upload");
  };

  const handleFileUpload = () => {
    setCurrentScreen("uploading");
    // Simulate analyzing documents, then show case details
    setTimeout(() => {
      setCurrentScreen("case-details");
    }, 3000);
  };

  const handleCaseDetailsDone = () => {
    setCurrentScreen("additional-details");
  };

  const handleSkipAdditional = () => {
    setCurrentScreen("ready-to-build");
  };

  const handleStartBuilding = () => {
    setCurrentScreen("generating");
    setTimeout(() => {
      setCurrentScreen("intake");
    }, 2000);
  };

  const handleAdditionalContextSubmit = () => {
    setCurrentScreen("context-provided");
  };

  const handleReadyToBuild = () => {
    setCurrentScreen("generating");
    // Simulate generating, then show intake
    setTimeout(() => {
      setCurrentScreen("intake");
    }, 2000);
  };

  const handleReset = () => {
    setCurrentScreen("start");
  };

  const handleNextSupportingAuthority = () => {
    setCurrentScreen("support-loading");
    // Simulate generating authorities, then show support screen
    setTimeout(() => {
      setCurrentScreen("support");
    }, 3000);
  };

  const handleNextContraryAuthorities = () => {
    setCurrentScreen("distinguish");
  };

  const handleNextOutline = () => {
    setCurrentScreen("outline");
  };

  const handleGenerateOutline = () => {
    setCurrentScreen("outline-loading");
    setTimeout(() => {
      setCurrentScreen("outline-ready");
    }, 3000);
  };

  const handleNextDraft = () => {
    setCurrentScreen("draft");
  };

  const handleGenerateDraft = () => {
    setCurrentScreen("draft-loading");
    setTimeout(() => {
      setCurrentScreen("draft-ready");
    }, 3000);
  };

  const handleNextVerify = () => {
    setCurrentScreen("verify");
  };

  const handleNextFinalize = () => {
    setCurrentScreen("finalize");
  };

  // Handler for stepper navigation
  const handleStepperClick = (stepId: string) => {
    const stepToScreen: Record<string, Screen> = {
      intake: "intake",
      argue: "builder",
      develop: "support",
      outline: "outline",
      draft: "draft",
      opposition: "distinguish",
      verify: "verify",
      finalize: "finalize",
    };
    const targetScreen = stepToScreen[stepId];
    if (targetScreen) {
      setCurrentScreen(targetScreen);
    }
  };

  // Screen indices for comparison
  const screenIndex = {
    start: 0,
    "motion-search": 1,
    "brief-type": 2,
    "file-upload": 3,
    "uploading": 4,
    "case-details": 5,
    "additional-details": 6,
    "context-provided": 7,
    "ready-to-build": 8,
    "generating": 9,
    "intake": 10,
    "builder": 11,
    "support-loading": 12,
    "support": 13,
    "distinguish": 14,
    "outline": 15,
    "outline-loading": 16,
    "outline-ready": 17,
    "draft": 18,
    "draft-loading": 19,
    "draft-ready": 20,
    "verify": 21,
    "finalize": 22,
  };

  const isAtOrPast = (screen: Screen) =>
    screenIndex[currentScreen] >= screenIndex[screen];

  // Library layout
  if (currentScreen === "library") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <LibraryScreen onBriefBuilderClick={handleStartSubmit} />
        </div>
      </div>
    );
  }

  // Intake layout
  if (currentScreen === "intake") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="Motion for Summary Judgment" />
          <BriefStepperNav currentStep="intake" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Intake Screen */}
            <div className="relative flex flex-1 flex-col overflow-y-auto bg-[#fcfcfc]">
              <IntakeScreen 
                onNextSelectArguments={() => setCurrentScreen("builder")}
                onSkipToGenerateDraft={() => setCurrentScreen("draft")}
              />
            </div>
            {/* Right Toolbar */}
            <div className="flex flex-col gap-2 border-l border-[#e5e5e5] bg-white p-2">
              <button 
                onClick={() => setDrawerOpen(!drawerOpen)} 
                className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
              >
                <MessageSquare className="size-5" />
              </button>
              <button 
                onClick={() => setNotesOpen(!notesOpen)}
                className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]"
              >
                <Notebook className="size-5" />
              </button>
              <button className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]">
                <History className="size-5" />
              </button>
              <button className="flex size-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f7f7f7]">
                <Library className="size-5" />
              </button>
            </div>
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
              currentStep="argue"
              hideInput={true}
            />
          </div>
        </div>
      </div>
    );
  }

  // Outline layout
  if (currentScreen === "outline") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Outline Screen */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <OutlineScreen onGenerateOutline={handleGenerateOutline} />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="outline"
            />
          </div>
        </div>
      </div>
    );
  }

  // Outline Loading layout
  if (currentScreen === "outline-loading") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Loading Screen */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <OutlineLoadingScreen progress={70} />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="outline-loading"
            />
          </div>
        </div>
      </div>
    );
  }

  // Outline Ready layout (editor)
  if (currentScreen === "outline-ready") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Outline Editor */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <OutlineEditor />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="outline-ready"
              onNextDraft={handleNextDraft}
            />
          </div>
        </div>
      </div>
    );
  }

  // Draft layout (initial)
  if (currentScreen === "draft") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Draft Screen */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <DraftScreen onGenerateDraft={handleGenerateDraft} />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="draft"
            />
          </div>
        </div>
      </div>
    );
  }

  // Draft Loading layout
  if (currentScreen === "draft-loading") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Loading Screen */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <DraftLoadingScreen progress={70} />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="draft-loading"
            />
          </div>
        </div>
      </div>
    );
  }

  // Draft Ready layout (editor)
  if (currentScreen === "draft-ready") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Draft Editor */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <DraftEditor />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="draft-ready"
              onNextVerify={handleNextVerify}
            />
          </div>
        </div>
      </div>
    );
  }

  // Verify layout
  if (currentScreen === "verify") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="verify" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Verify Panel */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <VerifyPanel />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="verify"
              onNextFinalize={handleNextFinalize}
            />
          </div>
        </div>
      </div>
    );
  }

  // Finalize layout
  if (currentScreen === "finalize") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="finalize" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Finalize Panel */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <FinalizePanel />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="finalize"
            />
          </div>
        </div>
      </div>
    );
  }

  // Distinguish layout (contrary authorities)
  if (currentScreen === "distinguish") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="distinguish" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Contrary Authorities Panel */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <div className="flex-1 overflow-y-auto">
                <ContraryAuthoritiesPanel />
              </div>
              
              {/* Footer with buttons and input - shown when drawer is collapsed */}
              {!drawerOpen && (
                <div className="border-t border-[#e5e5e5] bg-white">
                  {/* Action buttons */}
                  <div className="flex justify-end gap-2 px-6 py-3">
                    <button className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
                      Next: Outline brief
                    </button>
                    <button className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
                      Skip to generate draft
                    </button>
                  </div>
                  {/* Chat input */}
                  <div className="border-t border-[#e5e5e5] px-6 py-4">
                    <CocoChatInput
                      placeholder="Ask CoCounsel..."
                      variant="conversation"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="distinguish"
              onNextOutline={handleNextOutline}
            />
          </div>
        </div>
      </div>
    );
  }

  // Support Loading layout
  if (currentScreen === "support-loading") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="support" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Loading Screen */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <SupportLoadingScreen progress={70} />
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="support-loading"
            />
          </div>
        </div>
      </div>
    );
  }

  // Support layout (split view with chat drawer)
  if (currentScreen === "support") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="support" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Supporting Authorities Panel */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <div className="flex-1 overflow-y-auto">
                <SupportingAuthoritiesPanel />
              </div>
              
              {/* Footer with buttons and input - shown when drawer is collapsed */}
              {!drawerOpen && (
                <div className="border-t border-[#e5e5e5] bg-white">
                  {/* Action buttons */}
                  <div className="flex justify-end gap-2 px-6 py-3">
                    <button className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
                      Next: Review contrary authorities
                    </button>
                    <button className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
                      Skip to generate draft
                    </button>
                  </div>
                  {/* Chat input */}
                  <div className="border-t border-[#e5e5e5] px-6 py-4">
                    <CocoChatInput
                      placeholder="Ask CoCounsel..."
                      variant="conversation"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              currentStep="support"
              onNextContraryAuthorities={handleNextContraryAuthorities}
            />
          </div>
        </div>
      </div>
    );
  }

  // Builder layout (split view with chat drawer)
  if (currentScreen === "builder") {
    return (
      <div className="flex h-screen bg-white">
        {/* Side Navigation */}
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <CocoHeader title="{Motion to Dismiss}" />
          <BriefStepperNav currentStep="argue" onStepClick={handleStepperClick} />
          <div className="flex flex-1 overflow-hidden">
            {/* Arguments Panel */}
            <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fcfcfc]">
              <div className="flex-1 overflow-y-auto">
                <ArgumentsPanel showUserArgument={showUserArgument} />
              </div>
              
              {/* Footer with buttons and input - shown when drawer is collapsed */}
              {!drawerOpen && (
                <div className="border-t border-[#e5e5e5] bg-white">
                  {/* Action buttons */}
                  <div className="flex justify-end gap-2 px-6 py-3">
                    <button className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
                      Next: Supporting authority
                    </button>
                    <button className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
                      Skip to generate draft
                    </button>
                  </div>
                  {/* Chat input */}
                  <div className="border-t border-[#e5e5e5] px-6 py-4">
                    <CocoChatInput
                      placeholder="Ask CoCounsel..."
                      variant="conversation"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Chat Drawer */}
            <ChatDrawer 
              isOpen={drawerOpen} 
              onToggle={() => setDrawerOpen(!drawerOpen)}
              onArgumentAdded={() => setShowUserArgument(true)}
              onNextSupportingAuthority={handleNextSupportingAuthority}
              currentStep="argue"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Side Navigation */}
      <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {currentScreen === "start" ? (
          /* Start Screen */
          <main className="relative flex flex-1 flex-col items-center justify-center px-6">
            {/* Try new CoCounsel Toggle - Top Right */}
            <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 shadow-sm">
              <Sparkles className="size-4 text-[#d64000]" />
              <span className="text-sm text-[#212223]">Try new CoCounsel</span>
              <Switch
                defaultChecked
                className="data-[state=checked]:bg-[#1d4b34]"
              />
            </div>
            
            <div className="flex w-full max-w-3xl flex-col items-center">
              {/* Greeting */}
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="size-5 text-[#d64000]" />
                <span className="text-base text-[#212223]">Good morning, Jane</span>
              </div>
              
              {/* Tagline */}
              <h1 className="mb-6 text-2xl font-normal text-[#000000]">
                Let's take some work off your plate
              </h1>
              
              {/* Quick Action Buttons */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <button 
                  onClick={handleStartSubmit}
                  className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f7f7f7]"
                >
                  <PenLine className="size-4 text-[#737373]" />
                  Help me draft a legal brief
                </button>
                <button className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f7f7f7]">
                  <Search className="size-4 text-[#737373]" />
                  Conduct deep research...
                </button>
                <button className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f7f7f7]">
                  <LayoutGrid className="size-4 text-[#737373]" />
                  Analyze document sets...
                </button>
              </div>
            </div>
          </main>
        ) : (
          /* Conversation Screen */
          <>
            <CocoHeader title="{Motion to Dismiss}" />
            <main
              ref={scrollRef}
              className="flex flex-1 flex-col overflow-y-auto bg-white"
            >
              <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
                {/* Initial User Message - Always shown */}
                <CocoChatMessage
                  type="user"
                  userName="Jane Lawson"
                  timestamp="9:07 a.m."
                  className="mb-6"
                >
                  <p className="text-[#212223]">
                    Help me draft a legal brief
                  </p>
                </CocoChatMessage>

                {/* Motion Search Card */}
                {isAtOrPast("motion-search") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderCard
                      onSubmit={handleMotionSearchSubmit}
                    />
                  </CocoChatMessage>
                )}

                {/* Brief Type Card */}
                {isAtOrPast("brief-type") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderTypeCard
                      defaultValue={isAtOrPast("file-upload") ? "primary" : ""}
                      disabled={isAtOrPast("file-upload")}
                      onSubmit={handleBriefTypeSubmit}
                    />
                  </CocoChatMessage>
                )}

                {/* User "Primary" message */}
                {isAtOrPast("file-upload") && (
                  <CocoChatMessage
                    type="user"
                    userName="Jane Lawson"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <p className="text-[#212223]">Primary</p>
                  </CocoChatMessage>
                )}

                {/* File Upload Card */}
                {isAtOrPast("file-upload") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderUploadCard
                      showFile={isAtOrPast("uploading")}
                      disabled={isAtOrPast("uploading")}
                      onUpload={handleFileUpload}
                    />
                  </CocoChatMessage>
                )}

                {/* Uploading/Analyzing Progress Card */}
                {currentScreen === "uploading" && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10a.m."
                    className="mb-6"
                  >
                    <BriefBuilderProgressCard progress={40} />
                  </CocoChatMessage>
                )}

                {/* Case Details Card */}
                {isAtOrPast("case-details") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:25 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderDetailsCard
                      defaultParty={isAtOrPast("additional-details") ? "defendant2" : ""}
                      disabled={isAtOrPast("additional-details")}
                      onDone={handleCaseDetailsDone}
                    />
                  </CocoChatMessage>
                )}

                {/* Additional Details Card */}
                {isAtOrPast("additional-details") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:32 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderAdditionalCard />
                  </CocoChatMessage>
                )}

                {/* User Context Message */}
                {isAtOrPast("context-provided") && (
                  <CocoChatMessage
                    type="user"
                    userName="Jane Lawson"
                    timestamp="9:36 a.m."
                    className="mb-6"
                  >
                    <p className="text-[#212223]">
                      I want to move to dismiss an amended complaint, arguing there
                      is no substantial similarity of protected expression between
                      her memoir and the plaintiff's novel One Italian Summer.
                    </p>
                  </CocoChatMessage>
                )}

                {/* Ready to Build Card */}
                {(isAtOrPast("context-provided") || isAtOrPast("ready-to-build")) && !isAtOrPast("generating") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:36 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderReadyCard />
                  </CocoChatMessage>
                )}

                {/* User "Start building" message */}
                {isAtOrPast("generating") && (
                  <CocoChatMessage
                    type="user"
                    userName="Jane Lawson"
                    timestamp="9:42 a.m."
                    className="mb-6"
                  >
                    <p className="text-[#212223]">Start building my brief.</p>
                  </CocoChatMessage>
                )}

                {/* Generating Card */}
                {currentScreen === "generating" && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:42 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderGeneratingCard progress={40} />
                  </CocoChatMessage>
                )}

                {/* Scroll anchor for smooth scrolling */}
                <div ref={scrollEndRef} />
              </div>

              {/* Bottom Chat Input */}
              <div className="sticky bottom-0 border-t border-[#e5e5e5] bg-white px-6 py-4">
                <div className="mx-auto max-w-3xl">
                  {/* Skip Button - shown only on additional-details screen */}
                  {currentScreen === "additional-details" && (
                    <div className="mb-3 flex justify-end">
                      <button
                        onClick={handleSkipAdditional}
                        className="rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                      >
                        Skip this step
                      </button>
                    </div>
                  )}
                  {/* Ready Button - shown only on context-provided screen */}
                  {currentScreen === "context-provided" && (
                    <div className="mb-3 flex justify-end">
                      <button
                        onClick={handleReadyToBuild}
                        className="flex items-center gap-2 rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                      >
                        <Sparkles className="size-4 text-[#d64000]" />
                        I'm ready, let's start building
                      </button>
                    </div>
                  )}
                  {/* Ready Button - shown only on ready-to-build screen */}
                  {currentScreen === "ready-to-build" && (
                    <div className="mb-3 flex justify-end">
                      <button
                        onClick={handleStartBuilding}
                        className="flex items-center gap-2 rounded-md border border-[#cccccc] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]"
                      >
                        <Sparkles className="size-4 text-[#d64000]" />
                        I'm ready, let's start building
                      </button>
                    </div>
                  )}
                  {currentScreen === "start" && (
                    <CocoChatInput
                      placeholder="Ask CoCounsel..."
                      variant="conversation"
                      onSubmit={handleStartSubmit}
                    />
                  )}
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
}
