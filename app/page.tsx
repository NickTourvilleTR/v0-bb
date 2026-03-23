"use client";

import { CocoSideNav } from "@/components/coco-side-nav";
import { CocoChatInput } from "@/components/coco-chat-input";
import { CocoHeader } from "@/components/coco-header";
import { CocoChatMessage } from "@/components/coco-chat-message";
import { BriefBuilderCard } from "@/components/brief-builder-card";
import { BriefBuilderTypeCard } from "@/components/brief-builder-type-card";
import { BriefBuilderUploadCard } from "@/components/brief-builder-upload-card";
import { BriefBuilderCombinedDetailsCard } from "@/components/brief-builder-combined-details-card";
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
import { ArgueScreen } from "@/components/argue-screen";
import { LibraryScreen } from "@/components/library-screen";
import { AppLayoutWrapper } from "@/components/app-layout-wrapper";
import { Switch } from "@/components/ui/switch";
import { Sparkles, PenLine, Search, LayoutGrid, MessageSquare, Notebook, History, Library, X, Paperclip, BookOpen, AtSign, ArrowUp } from "lucide-react";
import * as React from "react";

type Screen =
  | "start"
  | "library"
  | "motion-search"
  | "brief-type"
  | "file-upload"
  | "uploading"
  | "case-details"
  | "ready-to-build"
  | "generating"
  | "intake"
  | "argue2"
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
  const [currentScreen, setCurrentScreen] = React.useState<Screen>("start");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [notesOpen, setNotesOpen] = React.useState(false);
  const [showUserArgument, setShowUserArgument] = React.useState(false);
  const [selectedMotion, setSelectedMotion] = React.useState<string | null>(null);
  const [quotedText, setQuotedText] = React.useState<string | null>(null);
  
  // Dynamic header title based on selected motion
  const headerTitle = selectedMotion ? "Motion to Dismiss" : "Brief Builder";
  
  // Handler for quote action from cards
  const handleQuote = (text: string) => {
    setQuotedText(text);
    setDrawerOpen(true); // Open drawer to show quoted text
  };
  
  const handleClearQuote = () => {
    setQuotedText(null);
  };
  const [chatMessages, setChatMessages] = React.useState<Array<{
    id: string;
    type: "user" | "assistant";
    content: string;
    timestamp?: string;
    userName?: string;
  }>>([]);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scrollEndRef = React.useRef<HTMLDivElement>(null);
  
  // Helper function to add a message to the chat
  const addChatMessage = (type: "user" | "assistant", content: string) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();
    setChatMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      type,
      content,
      timestamp,
      userName: type === "user" ? "Jane Lawson" : undefined
    }]);
  };

  // Handler for inline chat input (when drawer is closed)
  const handleInlineSend = (message: string) => {
    addChatMessage("user", message);
  };

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
    addChatMessage("user", "Help me draft a legal brief");
    addChatMessage("assistant", "I can help you draft a memorandum of law. What type of motion are you working on?");
    setCurrentScreen("motion-search");
  };

  const handleLibraryClick = () => {
    setCurrentScreen("library");
  };

  const handleMotionSearchSubmit = (motionId?: string) => {
    setSelectedMotion(motionId || "dismiss");
    addChatMessage("user", "Motion to Dismiss");
    addChatMessage("assistant", "To ensure the draft fits your scenario, are you drafting a <strong>Primary</strong>, <strong>Opposition</strong>, or <strong>Reply</strong> brief?");
    setCurrentScreen("brief-type");
  };

  const handleBriefTypeSubmit = () => {
    addChatMessage("user", "Primary brief");
    addChatMessage("assistant", "Please upload any relevant documents such as the <strong>original complaint, answer, and reply</strong> (if applicable). You can also upload any <strong>pertinent exhibits or templates</strong>.");
    setCurrentScreen("file-upload");
  };

  const handleFileUpload = () => {
    addChatMessage("user", "Uploaded 6 documents");
    setCurrentScreen("uploading");
    // Simulate analyzing documents, then show case details
    setTimeout(() => {
      addChatMessage("assistant", "I've extracted the following details from your uploaded documents. <strong>Review and enter any edit instructions as necessary.</strong>");
      setCurrentScreen("case-details");
    }, 3000);
  };

  const handleCaseDetailsContinue = (selectedParty: string, additionalDetails: string) => {
    addChatMessage("user", additionalDetails ? `Case details confirmed with additional context: ${additionalDetails}` : "Case details confirmed");
    setCurrentScreen("ready-to-build");
  };

  const handleCaseDetailsSkip = () => {
    addChatMessage("user", "Skipped additional details");
    setCurrentScreen("ready-to-build");
  };

  const handleStartBuilding = () => {
    addChatMessage("user", "I'm ready, let's start building");
    addChatMessage("assistant", "Generating your brief intake summary...");
    setCurrentScreen("generating");
    setTimeout(() => {
      addChatMessage("assistant", "Your intake summary is ready. I've analyzed the complaint and identified the key facts, parties, and claims. Review the summary and proceed to select your arguments.");
      setCurrentScreen("intake");
    }, 2000);
  };



  const handleReadyToBuild = () => {
    addChatMessage("assistant", "Building your brief now...");
    setCurrentScreen("generating");
    // Simulate generating, then show intake
    setTimeout(() => {
      addChatMessage("assistant", "Your brief intake is ready. Review your intake summary and select your next steps.");
      setCurrentScreen("intake");
    }, 2000);
  };

  const handleReset = () => {
    setCurrentScreen("start");
    setChatMessages([]);
  };

  const handleNextSupportingAuthority = () => {
    addChatMessage("user", "Next: Supporting authority");
    addChatMessage("assistant", "Researching supporting authorities for your selected arguments...");
    setCurrentScreen("support-loading");
    // Simulate generating authorities, then show support screen
    setTimeout(() => {
      addChatMessage("assistant", "I've identified relevant case law and statutes to support your arguments. Review the authorities and select which ones to include in your brief.");
      setCurrentScreen("support");
    }, 3000);
  };

  const handleNextContraryAuthorities = () => {
    addChatMessage("user", "Next: Opposition brief");
    addChatMessage("assistant", "Now let's prepare for potential challenges. Review the anticipated opposition arguments and how to address them in your brief.");
    setCurrentScreen("distinguish");
  };

  const handleNextOutline = () => {
    addChatMessage("user", "Next: Outline");
    addChatMessage("assistant", "Now let's structure your brief. Review the outline sections and make any adjustments before generating the full outline.");
    setCurrentScreen("outline");
  };

  const handleGenerateOutline = () => {
    addChatMessage("user", "Generate outline");
    addChatMessage("assistant", "Generating your brief outline based on the selected arguments and authorities...");
    setCurrentScreen("outline-loading");
    setTimeout(() => {
      addChatMessage("assistant", "Your outline is ready. Review the structure and headings, then proceed to generate the full draft.");
      setCurrentScreen("outline-ready");
    }, 3000);
  };

  const handleNextDraft = () => {
    addChatMessage("user", "Next: Draft");
    addChatMessage("assistant", "Time to generate your draft. Review the settings and click Generate draft when ready.");
    setCurrentScreen("draft");
  };

  const handleGenerateDraft = () => {
    addChatMessage("user", "Generate draft");
    addChatMessage("assistant", "Drafting your Motion to Dismiss based on the outline and selected authorities...");
    setCurrentScreen("draft-loading");
    setTimeout(() => {
      addChatMessage("assistant", "Your draft is complete. Review the full brief, make any edits, and proceed to verify citations when ready.");
      setCurrentScreen("draft-ready");
    }, 3000);
  };

  const handleNextVerify = () => {
    addChatMessage("user", "Verify brief");
    addChatMessage("assistant", "Verifying your citations and checking for potential issues. Review the verification results and address any flagged items.");
    setCurrentScreen("verify");
  };

  const handleNextFinalize = () => {
    addChatMessage("user", "Next: Finalize");
    addChatMessage("assistant", "Your brief is ready for final review. Download the document or make any last adjustments before filing.");
    setCurrentScreen("finalize");
  };

  // Handler for stepper navigation
  const handleStepperClick = (stepId: string) => {
    const stepToScreen: Record<string, Screen> = {
      intake: "intake",
      argue2: "argue2",
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
  "ready-to-build": 6,
    "generating": 9,
"intake": 10,
  "argue2": 11,
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
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            currentStep="library"
            onSendMessage={handleInlineSend}
          >
            <LibraryScreen onBriefBuilderClick={handleStartSubmit} />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Intake layout
  if (currentScreen === "intake") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="intake" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            currentStep="intake"
            onSendMessage={handleInlineSend}
          >
            <IntakeScreen 
              onNextSelectArguments={() => {
                addChatMessage("user", "Next: Select arguments");
                addChatMessage("assistant", "Review the potential arguments I've identified and select which ones to include in your brief.");
                setCurrentScreen("argue2");
              }}
              onSkipToGenerateDraft={() => {
                addChatMessage("user", "Skip to generate draft");
                addChatMessage("assistant", "Skipping ahead to draft generation with default arguments.");
                setCurrentScreen("draft");
              }}
              onEditOutline={() => setCurrentScreen("outline")}
            />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Outline layout
  if (currentScreen === "outline") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="outline"
            onGenerateOutline={handleGenerateOutline}
            onSkipToGenerateDraft={() => {
              addChatMessage("user", "Skip to generate draft");
              addChatMessage("assistant", "Skipping ahead to draft generation.");
              setCurrentScreen("draft");
            }}
            showVersionsTab={true}
          >
            <OutlineScreen 
              onGenerateOutline={handleGenerateOutline} 
              onNextDraft={() => {
                addChatMessage("user", "Skip to generate draft");
                addChatMessage("assistant", "Skipping ahead to draft generation.");
                setCurrentScreen("draft");
              }} 
            />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Outline Loading layout
  if (currentScreen === "outline-loading") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="outline-loading"
            showVersionsTab={true}
          >
            <OutlineLoadingScreen progress={70} />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Outline Ready layout (editor)
  if (currentScreen === "outline-ready") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="outline-ready"
            onNextDraft={() => {
              addChatMessage("user", "Next: Draft");
              addChatMessage("assistant", "Time to generate your draft. Review the settings and click Generate draft when ready.");
              setCurrentScreen("draft");
            }}
            showVersionsTab={true}
          >
            <OutlineEditor onNextDraft={() => {
              addChatMessage("user", "Next: Draft");
              addChatMessage("assistant", "Time to generate your draft. Review the settings and click Generate draft when ready.");
              setCurrentScreen("draft");
            }} />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Draft layout (initial)
  if (currentScreen === "draft") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="draft"
            onGenerateDraft={handleGenerateDraft}
            showVersionsTab={true}
          >
            <DraftScreen onGenerateDraft={handleGenerateDraft} />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Draft Loading layout
  if (currentScreen === "draft-loading") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="draft-loading"
            showVersionsTab={true}
          >
            <DraftLoadingScreen progress={70} />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Draft Ready layout (editor)
  if (currentScreen === "draft-ready") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="draft-ready"
            onVerifyBrief={() => {
              addChatMessage("user", "Verify brief");
              addChatMessage("assistant", "Verifying your citations and checking for potential issues.");
              setCurrentScreen("verify");
            }}
            showVersionsTab={true}
          >
            <DraftEditor onVerifyBrief={() => {
              addChatMessage("user", "Verify brief");
              addChatMessage("assistant", "Verifying your citations and checking for potential issues.");
              setCurrentScreen("verify");
            }} />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Verify layout
  if (currentScreen === "verify") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="verify" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="verify"
            onNextOpposition={() => {
              addChatMessage("user", "Next: Opposition brief");
              addChatMessage("assistant", "Now let's prepare for potential challenges. Review the anticipated opposition arguments.");
              setCurrentScreen("distinguish");
            }}
            onSkipToFinalize={() => {
              addChatMessage("user", "Skip to finalize");
              addChatMessage("assistant", "Skipping ahead to finalize your brief.");
              setCurrentScreen("finalize");
            }}
            showVersionsTab={true}
          >
            <VerifyPanel 
              onNextOpposition={() => {
                addChatMessage("user", "Next: Opposition brief");
                addChatMessage("assistant", "Now let's prepare for potential challenges. Review the anticipated opposition arguments.");
                setCurrentScreen("distinguish");
              }}
              onSkipToFinalize={() => {
                addChatMessage("user", "Skip to finalize");
                addChatMessage("assistant", "Skipping ahead to finalize your brief.");
                setCurrentScreen("finalize");
              }}
              onEditOutline={() => setCurrentScreen("outline")}
            />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Finalize layout
  if (currentScreen === "finalize") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="finalize" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="finalize"
            showVersionsTab={true}
          >
            <FinalizePanel />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Distinguish layout (contrary authorities)
  if (currentScreen === "distinguish") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="opposition" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="opposition"
            onNextFinalize={() => {
              addChatMessage("user", "Next: Finalize");
              addChatMessage("assistant", "Your brief is ready for final review. Download the document or make any last adjustments.");
              setCurrentScreen("finalize");
            }}
            showVersionsTab={true}
          >
            <div className="flex-1 overflow-y-auto">
              <ContraryAuthoritiesPanel onNextFinalize={() => {
                addChatMessage("user", "Next: Finalize");
                addChatMessage("assistant", "Your brief is ready for final review. Download the document or make any last adjustments.");
                setCurrentScreen("finalize");
              }} />
            </div>
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Support Loading layout
  if (currentScreen === "support-loading") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="support" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="support-loading"
            showVersionsTab={true}
          >
            <SupportLoadingScreen progress={70} />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Support layout (split view with chat drawer) - "Develop" step
  if (currentScreen === "support") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="develop" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="support"
            onNextOutline={() => {
              addChatMessage("user", "Next: Outline");
              addChatMessage("assistant", "Now let's structure your brief. Review the outline sections and make any adjustments.");
              setCurrentScreen("outline");
            }}
            onSkipToGenerateDraft={() => {
              addChatMessage("user", "Skip to generate draft");
              addChatMessage("assistant", "Skipping ahead to draft generation.");
              setCurrentScreen("draft");
            }}
            showVersionsTab={true}
          >
            <div className="flex-1 overflow-y-auto">
              <SupportingAuthoritiesPanel 
                onNextOutline={() => {
                  addChatMessage("user", "Next: Outline");
                  addChatMessage("assistant", "Now let's structure your brief. Review the outline sections and make any adjustments.");
                  setCurrentScreen("outline");
                }}
                onSkipToGenerateDraft={() => {
                  addChatMessage("user", "Skip to generate draft");
                  addChatMessage("assistant", "Skipping ahead to draft generation.");
                  setCurrentScreen("draft");
                }}
                onEditOutline={() => setCurrentScreen("outline")}
              />
            </div>
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Argue layout
        if (currentScreen === "argue2") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="argue2" onStepClick={handleStepperClick} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            onSendMessage={handleInlineSend}
            currentStep="argue"
            onNextSupportingAuthority={handleNextSupportingAuthority}
            onSkipToGenerateDraft={() => {
              addChatMessage("user", "Skip to generate draft");
              addChatMessage("assistant", "Skipping ahead to draft generation.");
              setCurrentScreen("draft");
            }}
            showVersionsTab={true}
          >
            <div className="flex-1 overflow-y-auto">
              <ArgueScreen 
                onNextSupportingAuthority={handleNextSupportingAuthority}
                onEditOutline={() => {
                  setCurrentScreen("outline");
                }}
                onSkipToGenerateDraft={() => {
                  addChatMessage("user", "Skip to generate draft");
                  addChatMessage("assistant", "Skipping ahead to draft generation.");
                  setCurrentScreen("draft");
                }}
              />
            </div>
          </AppLayoutWrapper>
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
              
              {/* Input Box */}
              <div className="mb-6 w-full max-w-2xl">
                <div className="rounded-xl border border-[#e5e5e5] bg-white p-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="Ask CoCounsel to perform a legal task..."
                    className="w-full border-0 bg-transparent text-sm text-[#212223] placeholder:text-[#999999] focus:outline-none focus:ring-0"
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-[#737373] hover:text-[#212223]">
                        <Paperclip className="size-4" />
                      </button>
                      <button className="p-1 text-[#737373] hover:text-[#212223]">
                        <BookOpen className="size-4" />
                      </button>
                      <button className="p-1 text-[#737373] hover:text-[#212223]">
                        <AtSign className="size-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-[#737373] hover:text-[#212223]">
                        <Sparkles className="size-4" />
                      </button>
                      <button className="flex size-8 items-center justify-center rounded-full bg-[#e5e5e5] text-[#999999]">
                        <ArrowUp className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-wrap justify-center gap-2">
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
            <CocoHeader title={headerTitle} />
            <AppLayoutWrapper
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              notesOpen={notesOpen}
              setNotesOpen={setNotesOpen}
              messages={chatMessages}
              onSendMessage={handleInlineSend}
              currentStep="library"
              hideHistoryButton={true}
              quotedText={quotedText}
              onClearQuote={handleClearQuote}
            >
              <div ref={scrollRef} className="flex-1 overflow-y-auto bg-white">
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
                      onQuote={handleQuote}
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

                {/* Combined Case Details and Additional Details Card */}
                {isAtOrPast("case-details") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:25 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderCombinedDetailsCard
                      defaultParty={isAtOrPast("ready-to-build") ? "defendant2" : ""}
                      disabled={isAtOrPast("ready-to-build")}
                      onContinue={handleCaseDetailsContinue}
                      onSkip={handleCaseDetailsSkip}
                    />
                  </CocoChatMessage>
                )}

                {/* Ready to Build Card */}
                {isAtOrPast("ready-to-build") && !isAtOrPast("generating") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:36 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderReadyCard onStartBuilding={handleStartBuilding} />
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



                  {currentScreen === "start" && (
                    <CocoChatInput
                      placeholder="Ask CoCounsel..."
                      variant="conversation"
                      onSubmit={handleStartSubmit}
                    />
                  )}
                </div>
              </div>
              </div>
            </AppLayoutWrapper>
          </>
        )}
      </div>
    </div>
  );
}
