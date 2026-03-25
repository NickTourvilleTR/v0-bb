"use client";

import { CocoSideNav } from "@/components/coco-side-nav";
import { CocoChatInput } from "@/components/coco-chat-input";
import { CocoHeader } from "@/components/coco-header";
import { CocoChatMessage } from "@/components/coco-chat-message";
import { BriefBuilderCard } from "@/components/brief-builder-card";
import { JudicialWorkProductCard } from "@/components/judicial-work-product-card";
import { BriefBuilderTypeCard } from "@/components/brief-builder-type-card";
import { BriefBuilderUploadCard, judicialDefaultFiles } from "@/components/brief-builder-upload-card";
import { BriefBuilderCombinedDetailsCard } from "@/components/brief-builder-combined-details-card";
import { BriefBuilderProgressCard } from "@/components/brief-builder-progress-card";
import { BriefBuilderReadyCard } from "@/components/brief-builder-ready-card";
import { BriefBuilderGeneratingCard } from "@/components/brief-builder-generating-card";
import { BriefStepperNav, judicialSteps } from "@/components/brief-stepper-nav";
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
import { ArgueScreen, arguments_data } from "@/components/argue-screen";
import { LibraryScreen } from "@/components/library-screen";
import { AppLayoutWrapper } from "@/components/app-layout-wrapper";
import { LoginScreen } from "@/components/login-screen";
import { Switch } from "@/components/ui/switch";
import { Sparkles, PenLine, Search, LayoutGrid, MessageSquare, Notebook, History, Library, X, Paperclip, BookOpen, AtSign, ArrowUp, Gavel, CheckCircle2 } from "lucide-react";
import * as React from "react";

type Screen =
  | "start"
  | "library"
  | "judicial-work-product"
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
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    fetch("/api/auth/check")
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(data.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fcfcfc]">
        <div className="size-6 animate-spin rounded-full border-2 border-[#1d4b34] border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <AuthenticatedApp />;
}

function AuthenticatedApp() {
  const [currentScreen, setCurrentScreen] = React.useState<Screen>("start");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [notesOpen, setNotesOpen] = React.useState(false);
  const [showUserArgument, setShowUserArgument] = React.useState(false);
  const [selectedMotion, setSelectedMotion] = React.useState<string | null>(null);
  const [selectedBriefType, setSelectedBriefType] = React.useState<string | null>(null);
  const [quotedText, setQuotedText] = React.useState<string | null>(null);
  const [argumentsState, setArgumentsState] = React.useState<any[]>(arguments_data);
  const [flowType, setFlowType] = React.useState<"brief" | "judicial">("brief");
  
  // Dynamic header title based on flow and selected motion
  const headerTitle = flowType === "judicial" ? "Judicial drafting" : (selectedMotion ? "Motion to Dismiss" : "Brief Builder");
  
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
    
    // Check if this is the prefilled lumping defendants argument
    if (currentScreen === "argue2" && message.includes("lumps all defendants together")) {
      // Create new argument object
      const newArgumentNumber = argumentsState.length + 1;
      const newArgument = {
        id: `lumping-defendants-${Date.now()}`,
        number: newArgumentNumber,
        title: "The complaint's group pleading fails to state a claim against S&S because it does not distinguish S&S's conduct from that of the other defendants.",
        points: [
          "Love's complaint lumps all defendants together without specifying which defendant committed which alleged act.",
          "The only allegations specific to S&S are that it published One Italian Summer and that one editor is married to Love's former literary agent who previously rejected her manuscript.",
          "Under Iqbal and Twombly, a complaint must allege facts specific to each defendant; \"everyone did everything\" allegations do not satisfy Rule 8's plausibility standard as to any individual defendant.",
        ],
        appliesTo: "Causes of Action 2–14 (Breach of Fiduciary Duty, Intentional Interference with Contractual Relations, Tortious Interference with Business Advantage, Intentional Misrepresentation, Negligent Misrepresentation, Negligence, Intentional Infliction of Emotional Distress, Stalking, Conspiracy, Unfair Business Practices, Accounting, Constructive Trust, and Declaratory Judgment)",
        checked: true,
      };
      
      setArgumentsState(prev => [...prev, newArgument]);
      
      // Add Jane's response
      addChatMessage("assistant", "I've added this as argument 6 to your brief. It's a strong point that the complaint lumps all defendants together, which may fail to state a claim against S&S specifically under the pleading standards established in Iqbal and Twombly. This argument has been selected and applied to multiple causes of action.");
    }
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
    setFlowType("brief");
    addChatMessage("user", "Help me draft a legal brief");
    addChatMessage("assistant", "I can help you draft a memorandum of law. What type of motion are you working on?");
    setCurrentScreen("motion-search");
  };

  const handleJudicialDraftingSubmit = () => {
    setFlowType("judicial");
    addChatMessage("user", "Help me with judicial drafting");
    addChatMessage("assistant", "I can help you draft judicial work product. What type of document are you working on?");
    setCurrentScreen("judicial-work-product");
  };

  const handleWorkProductSubmit = (workProductId: string) => {
    if (workProductId === "opinion") {
      addChatMessage("user", "Opinion");
      addChatMessage("assistant", "Sure, I can help you draft an opinion. To provide you with the most useful guidance, I should start by analyzing the relevant briefs. You can also upload any pertinent records, prior court materials, templates, or other documents you would like to use for your opinion.");
      setCurrentScreen("file-upload");
    }
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

  const handleBriefTypeSubmit = (type: string) => {
    const labels: Record<string, string> = { primary: "Primary", opposition: "Opposition", reply: "Reply" };
    setSelectedBriefType(type);
    addChatMessage("user", labels[type] || type);
    addChatMessage("assistant", "Please upload any relevant documents such as the <strong>original complaint, answer, and reply</strong> (if applicable). You can also upload any <strong>pertinent exhibits or templates</strong>.");
    setCurrentScreen("file-upload");
  };

  const handleFileUpload = () => {
    if (flowType === "judicial") {
      addChatMessage("user", "Uploaded 5 documents");
      addChatMessage("assistant", "I've analyzed the uploaded documents. Here is your intake summary.");
      setCurrentScreen("intake");
    } else {
      addChatMessage("user", "Uploaded 6 documents");
      setCurrentScreen("uploading");
      // Simulate analyzing documents, then go straight to intake
      setTimeout(() => {
        addChatMessage("assistant", "I've analyzed the uploaded documents. Review and make your selections to proceed.");
        setCurrentScreen("intake");
      }, 3000);
    }
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
    setFlowType("brief");
    setSelectedBriefType(null);
  };

  const handleNextSupportingAuthority = () => {
    const buttonLabel = flowType === "judicial" ? "Next: Decide on selected claims" : "Next: Supporting authority";
    addChatMessage("user", buttonLabel);
    if (flowType === "judicial") {
      addChatMessage("assistant", "Decide how to resolve disputed issues.");
      setCurrentScreen("support");
    } else {
      addChatMessage("assistant", "Researching supporting authorities for your selected arguments...");
      setCurrentScreen("support-loading");
      // Simulate generating authorities, then show support screen
      setTimeout(() => {
        addChatMessage("assistant", "I've identified relevant case law and statutes to support your arguments. Review the authorities and select which ones to include in your brief.");
        setCurrentScreen("support");
      }, 3000);
    }
  };

  const handleNextContraryAuthorities = () => {
    addChatMessage("user", "Next: Opposition brief");
    addChatMessage("assistant", "Now let's prepare for potential challenges. Review the anticipated opposition arguments and how to address them in your brief.");
    setCurrentScreen("distinguish");
  };

  const handleNextOutline = () => {
    addChatMessage("user", "Next: Outline");
    if (flowType === "judicial") {
      addChatMessage("assistant", "Generating your opinion outline based on the selected claims and decisions...");
    } else {
      addChatMessage("assistant", "Generating your brief outline based on the selected arguments and authorities...");
    }
    setCurrentScreen("outline-loading");
    setTimeout(() => {
      addChatMessage("assistant", "Your outline is ready. Review the structure and headings, then proceed to generate the full draft.");
      setCurrentScreen("outline-ready");
    }, 3000);
  };

  const handleGenerateOutline = () => {
    addChatMessage("user", "Generate outline");
    if (flowType === "judicial") {
      addChatMessage("assistant", "Generating your opinion outline based on the selected claims and decisions...");
    } else {
      addChatMessage("assistant", "Generating your brief outline based on the selected arguments and authorities...");
    }
    setCurrentScreen("outline-loading");
    setTimeout(() => {
      addChatMessage("assistant", "Your outline is ready. Review the structure and headings, then proceed to generate the full draft.");
      setCurrentScreen("outline-ready");
    }, 3000);
  };

  const handleNextDraft = () => {
    handleGenerateDraft();
  };

  const handleGenerateDraft = () => {
    addChatMessage("user", "Generate draft");
    const draftingMsg = flowType === "judicial" 
      ? "Drafting your opinion based on the outline and supporting materials..."
      : "Drafting your Motion to Dismiss based on the outline and selected authorities...";
    addChatMessage("assistant", draftingMsg);
    setCurrentScreen("draft-loading");
    setTimeout(() => {
      const completeMsg = flowType === "judicial"
        ? "Your draft is complete. Review the full opinion, make any edits, and proceed to verify when ready."
        : "Your draft is complete. Review the full brief, make any edits, and proceed to verify citations when ready.";
      addChatMessage("assistant", completeMsg);
      setCurrentScreen("draft-ready");
    }, 3000);
  };

  const handleNextVerify = () => {
    addChatMessage("user", "Verify brief");
    addChatMessage("assistant", flowType === "judicial" ? "Verifying your opinion and checking for potential issues." : "Verifying your citations and checking for potential issues. Review the verification results and address any flagged items.");
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
    "judicial-work-product": 1,
    "motion-search": 1,
    "brief-type": 2,
    "file-upload": 2,
    "uploading": 3,
  "case-details": 4,
  "ready-to-build": 5,
    "generating": 8,
"intake": 9,
  "argue2": 10,
    "support-loading": 11,
    "support": 12,
    "distinguish": 13,
    "outline": 14,
    "outline-loading": 15,
    "outline-ready": 16,
    "draft": 17,
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
          <BriefStepperNav currentStep="intake" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
          <AppLayoutWrapper
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            notesOpen={notesOpen}
            setNotesOpen={setNotesOpen}
            messages={chatMessages}
            currentStep="intake"
            onSendMessage={handleInlineSend}
            flowType={flowType}
          >
            <IntakeScreen 
              flowType={flowType}
              onGenerateDraft={handleGenerateDraft}
              onNextSelectArguments={() => {
                const buttonLabel = flowType === "judicial" ? "Next: Select claims" : "Next: Select arguments";
                addChatMessage("user", buttonLabel);
                if (flowType === "judicial") {
                  addChatMessage("assistant", "Review the summary of the parties' arguments. You can also add in any positions that are not captured into the list for consideration.");
                } else {
                  addChatMessage("assistant", "Review the potential arguments I've identified and select which ones to include in your brief.");
                }
                setCurrentScreen("argue2");
              }}
              onSkipToGenerateDraft={handleGenerateDraft}
              onEditOutline={handleNextOutline}
              onQuote={(text) => handleQuote(text)}
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
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
          messages={chatMessages}
          onSendMessage={handleInlineSend}
            currentStep="outline"
            onGenerateOutline={handleGenerateOutline}
            onSkipToGenerateDraft={handleGenerateDraft}
            showVersionsTab={true}
          >
            <OutlineScreen 
              flowType={flowType}
              onGenerateOutline={handleGenerateOutline} 
              onNextDraft={handleGenerateDraft}
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
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
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
          <BriefStepperNav currentStep="outline" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
          messages={chatMessages}
          onSendMessage={handleInlineSend}
            currentStep="outline-ready"
            onNextDraft={handleGenerateDraft}
            showVersionsTab={true}
          >
            <OutlineEditor 
              flowType={flowType}
              onNextDraft={handleGenerateDraft}
            />
          </AppLayoutWrapper>
        </div>
      </div>
    );
  }

  // Draft layout (initial - Create your draft)
  if (currentScreen === "draft") {
    return (
      <div className="flex h-screen bg-white">
        <CocoSideNav onLogoClick={handleReset} onHomeClick={handleReset} onLibraryClick={handleLibraryClick} />
        <div className="flex flex-1 flex-col">
          <CocoHeader title={headerTitle} />
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
          messages={chatMessages}
          onSendMessage={handleInlineSend}
            currentStep="draft"
            showVersionsTab={true}
          >
            <DraftScreen flowType={flowType} onGenerateDraft={handleGenerateDraft} />
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
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
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
          <BriefStepperNav currentStep="draft" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
          messages={chatMessages}
          onSendMessage={handleInlineSend}
            currentStep="draft-ready"
            onVerifyBrief={() => {
              const verifyMsg = flowType === "judicial" 
                ? "Verify opinion"
                : "Verify brief";
              const verifyingMsg = flowType === "judicial"
                ? "Verifying your opinion and checking for potential issues."
                : "Verifying your citations and checking for potential issues.";
              addChatMessage("user", verifyMsg);
              addChatMessage("assistant", verifyingMsg);
              setCurrentScreen("verify");
            }}
            showVersionsTab={true}
          >
            <DraftEditor flowType={flowType} onVerifyBrief={() => {
              const verifyMsg = flowType === "judicial" 
                ? "Verify opinion"
                : "Verify brief";
              const verifyingMsg = flowType === "judicial"
                ? "Verifying your opinion and checking for potential issues."
                : "Verifying your citations and checking for potential issues.";
              addChatMessage("user", verifyMsg);
              addChatMessage("assistant", verifyingMsg);
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
          <BriefStepperNav currentStep="verify" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
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
            {flowType === "judicial" ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8">
                <div className="mb-6">
                  <CheckCircle2 className="size-16 text-[#737373]" />
                </div>
                <h1 className="mb-2 text-center text-2xl font-semibold text-[#212223]">
                  Verify your draft
                </h1>
                <p className="mb-8 max-w-lg text-center text-[#737373]">
                  This may take up to 10 minutes.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      addChatMessage("user", "Skip to finalize");
                      addChatMessage("assistant", "Skipping ahead to finalize your opinion.");
                      setCurrentScreen("finalize");
                    }}
                    className="rounded-full border border-[#cccccc] px-6 py-3 text-sm font-medium text-[#212223] transition-colors hover:bg-[#f2f2f2]"
                  >
                    Skip to finalize
                  </button>
                  <button
                    onClick={() => {
                      addChatMessage("user", "Start verification");
                      addChatMessage("assistant", "Verifying your opinion and checking for potential issues.");
                      setCurrentScreen("verify");
                    }}
                    className="rounded-full bg-[#1d4b34] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#163d2a]"
                  >
                    Start verification
                  </button>
                </div>
              </div>
            ) : (
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
                onEditOutline={handleNextOutline}
              />
            )}
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
          <BriefStepperNav currentStep="finalize" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
          messages={chatMessages}
          onSendMessage={handleInlineSend}
            currentStep="finalize"
            showVersionsTab={true}
          >
            <FinalizePanel flowType={flowType} />
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
          flowType={flowType}
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
          <BriefStepperNav currentStep="support" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
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
          <BriefStepperNav currentStep="develop" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
          messages={chatMessages}
          onSendMessage={handleInlineSend}
            currentStep="support"
            flowType={flowType}
            onNextOutline={handleNextOutline}
            onSkipToGenerateDraft={handleGenerateDraft}
            showVersionsTab={true}
          >
            <div className="flex-1 overflow-y-auto">
              <SupportingAuthoritiesPanel 
                flowType={flowType}
                onNextOutline={handleNextOutline}
                onSkipToGenerateDraft={handleGenerateDraft}
                onEditOutline={handleNextOutline}
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
          <BriefStepperNav currentStep="argue2" onStepClick={handleStepperClick} customSteps={flowType === "judicial" ? judicialSteps : undefined} />
        <AppLayoutWrapper
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          flowType={flowType}
          messages={chatMessages}
          onSendMessage={handleInlineSend}
            currentStep="argue"
            flowType={flowType}
            onNextSupportingAuthority={handleNextSupportingAuthority}
            onSkipToGenerateDraft={handleGenerateDraft}
            showVersionsTab={true}
            quotedText={quotedText}
            onClearQuote={handleClearQuote}
            prefillText={quotedText === "Add additional argument" ? "Please add an argument that the complaint improperly lumps all defendants together. The argument should be that the complaint fails to distinguish between defendants and therefore doesn't meet pleading standards as to S&S specifically." : undefined}
          >
            <div className="flex-1 overflow-y-auto">
              <ArgueScreen 
                flowType={flowType}
                onNextSupportingAuthority={handleNextSupportingAuthority}
                onEditOutline={handleNextOutline}
                onSkipToGenerateDraft={handleGenerateDraft}
                onQuote={handleQuote}
                argumentsState={flowType === "judicial" ? undefined : argumentsState}
                setArgumentsState={flowType === "judicial" ? undefined : setArgumentsState}
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
              <div className="flex flex-col items-center gap-2">
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
                <div className="flex w-full justify-start">
                  <button
                    onClick={handleJudicialDraftingSubmit}
                    className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f7f7f7]"
                  >
                    <Gavel className="size-4 text-[#737373]" />
                    Help me with judicial drafting
                  </button>
                </div>
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
                    {flowType === "judicial" ? "Help me with judicial drafting" : "Help me draft a legal brief"}
                  </p>
                </CocoChatMessage>

                {/* Judicial Work Product Card */}
                {flowType === "judicial" && isAtOrPast("judicial-work-product") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <JudicialWorkProductCard
                      onSubmit={handleWorkProductSubmit}
                      onQuote={handleQuote}
                    />
                  </CocoChatMessage>
                )}

                {/* Motion Search Card */}
                {flowType === "brief" && isAtOrPast("motion-search") && (
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

                {/* Brief Type Card - only for brief flow */}
                {flowType === "brief" && isAtOrPast("brief-type") && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderTypeCard
                      onSubmit={handleBriefTypeSubmit}
                    />
                  </CocoChatMessage>
                )}

                {/* User brief type message - only for brief flow, only after selection */}
                {flowType === "brief" && isAtOrPast("file-upload") && selectedBriefType && (
                  <CocoChatMessage
                    type="user"
                    userName="Jane Lawson"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <p className="text-[#212223]">
                      {{ primary: "Primary", opposition: "Opposition", reply: "Reply" }[selectedBriefType] ?? selectedBriefType}
                    </p>
                  </CocoChatMessage>
                )}

                {/* User "Opinion" message - only for judicial flow */}
                {flowType === "judicial" && isAtOrPast("file-upload") && (
                  <CocoChatMessage
                    type="user"
                    userName="Jane Lawson"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <p className="text-[#212223]">Opinion</p>
                  </CocoChatMessage>
                )}

                {/* File Upload Card */}
                {(
                  (flowType === "judicial" && isAtOrPast("file-upload")) ||
                  (flowType === "brief" && isAtOrPast("file-upload") && selectedBriefType)
                ) && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderUploadCard
                      showFile={isAtOrPast("uploading")}
                      disabled={isAtOrPast("uploading")}
                      onUpload={handleFileUpload}
                      headerTitle={flowType === "judicial" ? "Upload documents" : "Upload documents"}
                      description={flowType === "judicial" ? "Sure, I can help you draft an opinion. To provide you with the most useful guidance, I should start by analyzing the relevant briefs. You can also upload any pertinent records, prior court materials, templates, or other documents you would like to use for your opinion." : "To provide you with the most useful guidance, I should start by analyzing the original complaint. You can also upload any pertinent exhibits, and other relevant documents."}
                      tags={flowType === "judicial" ? [{ label: "Opinion", color: "#1d4b34" }] : [{ label: "Motion to dismiss", color: "#1d4b34" }, { label: "Primary brief", color: "#1d4b34" }]}
                      defaultFilesToUse={flowType === "judicial" ? judicialDefaultFiles : undefined}
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
                    <BriefBuilderProgressCard 
                      progress={40} 
                      tags={flowType === "judicial" ? [{ label: "Opinion", color: "#1d4b34" }] : [{ label: "Motion to dismiss", color: "#1d4b34" }, { label: "Primary brief", color: "#1d4b34" }]}
                    />
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
