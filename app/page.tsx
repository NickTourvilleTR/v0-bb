"use client";

import { CocoSideNav } from "@/components/coco-side-nav";
import { CocoChatInput } from "@/components/coco-chat-input";

export default function StartScreen() {
  const handleSubmit = (value: string) => {
    console.log("Submitted:", value);
    // Handle submission - navigate to next screen or process input
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Side Navigation */}
      <CocoSideNav />

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="flex w-full max-w-3xl flex-col items-center">
          {/* Heading */}
          <h1 className="mb-8 text-5xl font-normal text-[#000000]">
            Get started
          </h1>

          {/* Chat Input */}
          <CocoChatInput
            placeholder="Ask anything..."
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
}
