"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Sparkles, Paperclip, Image, ArrowUp, PanelRightClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatDrawerProps {
  className?: string;
  onClose?: () => void;
}

export function ChatDrawer({ className, onClose }: ChatDrawerProps) {
  const [activeTab, setActiveTab] = React.useState<"chat" | "versions" | "sources">("chat");
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className={cn("flex h-full w-[420px] flex-col border-l border-[#e5e5e5] bg-white", className)}>
      {/* Tabs */}
      <div className="flex items-center border-b border-[#e5e5e5]">
        <button
          className="p-3 text-[#737373] hover:text-[#212223]"
          onClick={onClose}
        >
          <PanelRightClose className="size-5" />
        </button>
        <div className="flex flex-1">
          {(["chat", "versions", "sources"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 px-4 py-3 text-sm font-medium capitalize transition-colors",
                activeTab === tab
                  ? "border-b-2 border-[#2e6b5c] text-[#212223]"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              {tab === "chat" ? "Chat" : tab === "versions" ? "Versions" : "Sources"}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Previous Context Message (truncated) */}
        <div className="mb-4 rounded-lg border border-[#e5e5e5] bg-white p-3">
          <p className="text-sm text-[#212223]">
            If you prefer, <strong>you can add more context</strong> to provide any
            other detail. Or, tell me if there is something else you'd like to do
            instead.
          </p>
        </div>

        {/* User Message */}
        <div className="mb-4 flex items-start gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
            JL
          </div>
          <div>
            <p className="text-xs text-[#737373]">Jane Lawson - 9:42 a.m.</p>
            <p className="text-sm text-[#212223]">Start building my brief.</p>
          </div>
        </div>

        {/* CoCounsel Response */}
        <div className="mb-4 flex items-start gap-2">
          <div className="shrink-0">
            <Logo icon className="size-7" />
          </div>
          <div>
            <p className="text-xs text-[#737373]">CoCounsel - 9:42 a.m.</p>
          </div>
        </div>

        {/* Brief Builder Card */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white p-4">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-[#212223]" />
              <span className="font-semibold text-[#212223]">Brief Builder</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                Motion to dismiss
              </span>
              <span className="rounded-md bg-[#ebf0ed] px-2 py-1 text-xs text-[#1d4b34]">
                Primary brief
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-sm text-[#212223]">Your arguments are ready:</span>
            <Button
              variant="outline"
              size="sm"
              className="h-7 border-[#cccccc] bg-white px-3 text-xs text-[#212223] hover:bg-[#f2f2f2]"
            >
              Go to Argue
            </Button>
          </div>

          <p className="mb-2 text-sm text-[#212223]">
            I've pre-selected the stronger arguments for your motion. You can tell
            me if you want to:
          </p>
          <ul className="mb-4 ml-4 list-disc space-y-1 text-sm text-[#212223]">
            <li>Add an argument</li>
            <li>Edit an argument</li>
            <li>Select/deselect an argument</li>
          </ul>

          <p className="mb-3 font-medium text-[#212223]">
            What would you like to do next?
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
            >
              Next: Supporting authority
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-[#cccccc] bg-white px-3 text-sm text-[#212223] hover:bg-[#f2f2f2]"
            >
              Skip to generate draft
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t border-[#e5e5e5] p-3">
        <div className="relative rounded-lg border border-[#e5e5e5] bg-white">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask CoCounsel..."
            className="min-h-[60px] resize-none border-0 bg-transparent px-3 py-2 text-sm focus-visible:ring-0"
          />
          <div className="flex items-center justify-between border-t border-[#f2f2f2] px-2 py-1">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="size-7 text-[#737373]">
                <Paperclip className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" className="size-7 text-[#737373]">
                <Image className="size-4" />
              </Button>
            </div>
            <Button
              size="icon"
              className="size-7 rounded-full bg-[#2e6b5c] text-white hover:bg-[#24594c]"
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-[#737373]">
          Your data is{" "}
          <a href="#" className="text-[#212223] underline">
            private and secure
          </a>
          .
        </p>
      </div>
    </div>
  );
}
