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
import * as React from "react";

type Screen =
  | "start"
  | "motion-search"
  | "brief-type"
  | "file-upload"
  | "case-details"
  | "additional-details"
  | "analyzing";

export default function BriefBuilderPrototype() {
  const [currentScreen, setCurrentScreen] = React.useState<Screen>("start");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when screen changes
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentScreen]);

  const handleStartSubmit = () => {
    setCurrentScreen("motion-search");
  };

  const handleMotionSearchSubmit = () => {
    setCurrentScreen("brief-type");
  };

  const handleBriefTypeSubmit = () => {
    setCurrentScreen("file-upload");
  };

  const handleFileUpload = () => {
    setCurrentScreen("case-details");
  };

  const handleCaseDetailsDone = () => {
    setCurrentScreen("additional-details");
  };

  const handleSkipAdditional = () => {
    setCurrentScreen("analyzing");
  };

  const handleReset = () => {
    setCurrentScreen("start");
  };

  // Screen indices for comparison
  const screenIndex = {
    start: 0,
    "motion-search": 1,
    "brief-type": 2,
    "file-upload": 3,
    "case-details": 4,
    "additional-details": 5,
    analyzing: 6,
  };

  const isAtOrPast = (screen: Screen) =>
    screenIndex[currentScreen] >= screenIndex[screen];

  return (
    <div className="flex h-screen bg-white">
      {/* Side Navigation */}
      <CocoSideNav onLogoClick={handleReset} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {currentScreen === "start" ? (
          /* Start Screen */
          <main className="flex flex-1 flex-col items-center justify-center px-6">
            <div className="flex w-full max-w-3xl flex-col items-center">
              <h1 className="mb-8 text-5xl font-normal text-[#000000]">
                Get started
              </h1>
              <CocoChatInput
                placeholder="Ask anything..."
                onSubmit={handleStartSubmit}
                variant="start"
              />
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
                    Help me draft a legal brief for a standard motion to dismiss
                    for the California district court.
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
                      question="{Which motion type would you like to build?}"
                      searchPlaceholder="Search for a motion type"
                      defaultValue={isAtOrPast("brief-type") ? "Motion to dismiss" : ""}
                      disabled={isAtOrPast("brief-type")}
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
                      showFile={isAtOrPast("case-details")}
                      disabled={isAtOrPast("case-details")}
                      onUpload={handleFileUpload}
                    />
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
                {isAtOrPast("additional-details") && currentScreen !== "analyzing" && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:32 a.m."
                    className="mb-6"
                  >
                    <BriefBuilderAdditionalCard onSkip={handleSkipAdditional} />
                  </CocoChatMessage>
                )}

                {/* Progress Card */}
                {currentScreen === "analyzing" && (
                  <CocoChatMessage
                    type="assistant"
                    timestamp="9:10a.m."
                    className="mb-6"
                  >
                    <BriefBuilderProgressCard progress={40} />
                  </CocoChatMessage>
                )}
              </div>

              {/* Bottom Chat Input */}
              <div className="sticky bottom-0 border-t border-[#e5e5e5] bg-white px-6 py-4">
                <div className="mx-auto max-w-3xl">
                  <CocoChatInput
                    placeholder="Ask CoCounsel..."
                    variant="conversation"
                    onSubmit={handleStartSubmit}
                  />
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
}
