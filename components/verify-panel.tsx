"use client";

import { useState } from "react";
import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";
import { FilePreviewIcon } from "@/components/file-preview-icon";

interface VerifyPanelProps {
  onNextOpposition?: () => void;
  onSkipToFinalize?: () => void;
  onEditOutline?: () => void;
}

export function VerifyPanel({ onNextOpposition, onSkipToFinalize, onEditOutline }: VerifyPanelProps) {
  const [showOutlinePreview, setShowOutlinePreview] = useState(false);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-8">
        {/* Left sidebar buttons - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
          <button onClick={() => setShowOutlinePreview(true)} className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <FilePreviewIcon className="size-5 text-[#1d4b34]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex flex-1 flex-col items-center justify-center">
          {/* White document space */}
          <div style={{ width: "800px", maxWidth: "100%" }} className="flex w-full flex-col items-center">
            <div className="mb-6">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#737373]"
              >
                <rect x="12" y="8" width="40" height="48" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M36 8V20H48" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M36 8L48 20" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="mb-2 text-center text-2xl font-semibold text-[#212223]">
              Create your draft
            </h1>

            {/* Description */}
            <p className="mb-8 text-center text-[#737373]">
              Based on your selections and outline, we&apos;ll generate a draft of your brief that you can edit further. This may take up to 30 minutes.
            </p>

            {/* Generate Button */}
            <button
              onClick={onNextOpposition}
              className="rounded-full bg-[#1d4b34] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#163d2a]"
            >
              Generate draft
            </button>
          </div>
        </div>
      </div>
      {showOutlinePreview && (
        <OutlinePreviewModal
          onClose={() => setShowOutlinePreview(false)}
          onEdit={() => {
            setShowOutlinePreview(false);
            onEditOutline?.();
          }}
        />
      )}
    </div>
  );
}
