"use client";

import { CocoSideNav } from "@/components/coco-side-nav";
import { CocoChatInput } from "@/components/coco-chat-input";
import { CocoHeader } from "@/components/coco-header";
import { CocoChatMessage } from "@/components/coco-chat-message";
import { BriefBuilderCard } from "@/components/brief-builder-card";
import * as React from "react";

type Screen = "start" | "brief-builder";

export default function BriefBuilderPrototype() {
  const [currentScreen, setCurrentScreen] = React.useState<Screen>("start");

  const handleStartSubmit = () => {
    // Regardless of input, advance to the Brief Builder screen
    setCurrentScreen("brief-builder");
  };

  const handleBriefBuilderSubmit = (value: string) => {
    // Handle motion type selection - for now just log
    console.log("Motion type selected:", value);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Side Navigation */}
      <CocoSideNav />

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
          /* Brief Builder Screen */
          <>
            <CocoHeader title="{Motion to Dismiss}" />
            <main className="flex flex-1 flex-col overflow-y-auto bg-[#fafafa]">
              <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
                {/* User Message */}
                <CocoChatMessage
                  type="user"
                  userName="Jane Lawson"
                  timestamp="9:07 a.m."
                  className="mb-6"
                >
                  <p className="text-[#212223]">
                    Help me draft a legal brief for a standard motion to dismiss for the California district court.
                  </p>
                </CocoChatMessage>

                {/* CoCounsel Response */}
                <CocoChatMessage
                  type="assistant"
                  timestamp="9:10 a.m."
                  className="mb-6"
                >
                  <BriefBuilderCard
                    question="{Which motion type would you like to build?}"
                    searchPlaceholder="Search for a motion type"
                    onSubmit={handleBriefBuilderSubmit}
                  />
                </CocoChatMessage>
              </div>

              {/* Bottom Chat Input */}
              <div className="border-t border-[#e5e5e5] bg-white px-6 py-4">
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
