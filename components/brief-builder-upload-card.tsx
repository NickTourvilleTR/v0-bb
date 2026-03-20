"use client";

import { Upload, FileText, Database, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BriefBuilderUploadCardProps {
  onUpload?: () => void;
  showTags?: boolean;
  className?: string;
  disabled?: boolean;
  showFile?: boolean;
}

export function BriefBuilderUploadCard({
  onUpload,
  showTags = true,
  className,
  disabled = false,
  showFile = false,
}: BriefBuilderUploadCardProps) {
  const [selectedFile, setSelectedFile] = React.useState<string | null>(
    showFile ? "Love v. Airbnb - First A..." : null
  );

  const handleFileSelect = () => {
    setSelectedFile("Love v. Airbnb - First A...");
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    if (onUpload) {
      onUpload();
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-[#e5e5e5] bg-white p-6",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#212223]">Upload documents</h3>
        {showTags && (
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Motion to dismiss
            </span>
            <span className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
              Primary brief
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 text-[#212223]">
        To provide you with the most useful guidance, I should start by analyzing the original complaint. You can also upload any pertinent exhibits, and other relevant documents.
      </p>

      {/* Upload Area */}
      {!disabled && (
        <div className="mb-4 rounded-lg border-2 border-dashed border-[#cccccc] p-6">
          <p className="mb-4 text-center text-[#212223]">
            Choose one of the following upload options or drag files into this space.
          </p>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              className="h-10 gap-2 border-[#cccccc] bg-white text-[#212223] hover:bg-[#f2f2f2]"
              onClick={handleFileSelect}
            >
              <Upload className="size-4" />
              Files from external DMS
            </Button>
            <Button
              variant="outline"
              className="h-10 gap-2 border-[#cccccc] bg-white text-[#212223] hover:bg-[#f2f2f2]"
              onClick={handleFileSelect}
            >
              <Upload className="size-4" />
              Files from your device
            </Button>
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              className="h-10 gap-2 border-[#cccccc] bg-white text-[#212223] hover:bg-[#f2f2f2]"
              onClick={handleFileSelect}
            >
              <FileText className="size-4" />
              Files from this chat
            </Button>
            <Button
              variant="outline"
              className="h-10 gap-2 border-[#cccccc] bg-white text-[#212223] hover:bg-[#f2f2f2]"
              onClick={handleFileSelect}
            >
              <Database className="size-4" />
              Files from your database
            </Button>
          </div>

          <p className="mb-2 text-center text-sm text-[#737373]">
            Supported file types: TXT, HTM, HTML, RTF (20 MB per file)
          </p>
          <p className="text-center text-sm text-[#737373]">
            You can upload up to 200 files at once.
          </p>
        </div>
      )}

      {/* Selected File */}
      {selectedFile && (
        <div className={cn("flex items-center gap-2", !disabled && "mb-4")}>
          <div className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-white px-3 py-2">
            <div className="flex size-5 items-center justify-center rounded bg-[#dc0a0a] text-[10px] font-bold text-white">
              P
            </div>
            <span className="text-sm text-[#212223]">{selectedFile}</span>
            {!disabled && (
              <button
                onClick={handleRemoveFile}
                className="ml-1 text-[#737373] hover:text-[#212223]"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Upload Button */}
      {!disabled && (
        <Button
          onClick={handleUpload}
          className="h-10 bg-[#2e6b5c] px-6 text-white hover:bg-[#24594c]"
          disabled={!selectedFile}
        >
          Upload
        </Button>
      )}
    </div>
  );
}
