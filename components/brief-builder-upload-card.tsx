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
  headerTitle?: string;
  description?: string;
  tags?: { label: string; color: string }[];
  defaultFilesToUse?: typeof defaultFiles;
}

const defaultFiles = [
  { id: "1", name: "Love – First Amended Complaint", type: "P" },
  { id: "2", name: "Quitclaim & Assignment Agreement", type: "P" },
  { id: "3", name: "Eat The Lemon Feb 2021 Manuscript", type: "W" },
  { id: "4", name: "One Italian Summer (lodged)", type: "W" },
];

export const judicialDefaultFiles = [
  { id: "1", name: "COMPLAINT filed by 516, Inc.", type: "P" },
  { id: "2", name: "NOTICE OF MOTION AND MOTION to Dismiss Case", type: "P" },
  { id: "3", name: "OPPOSITION to NOTICE OF MOTION AND MOTION to Dismiss Case", type: "P" },
  { id: "4", name: "Defendant's Objection and Request to Strike Plaintiff's Declarations", type: "W" },
  { id: "5", name: "REPLY In Support NOTICE OF MOTION AND MOTION to Dismiss Case", type: "W" },
];

export function BriefBuilderUploadCard({
  onUpload,
  showTags = true,
  className,
  disabled = false,
  showFile = false,
  headerTitle = "Upload documents",
  description = "To provide you with the most useful guidance, I should start by analyzing the original complaint. You can also upload any pertinent exhibits, and other relevant documents.",
  tags = [
    { label: "Motion to dismiss", color: "#1d4b34" },
    { label: "Supporting brief", color: "#1d4b34" },
  ],
  defaultFilesToUse = defaultFiles,
}: BriefBuilderUploadCardProps) {
  const [selectedFiles, setSelectedFiles] = React.useState<typeof defaultFiles>(
    showFile ? defaultFilesToUse : []
  );

  const handleFileSelect = () => {
    setSelectedFiles(defaultFilesToUse);
  };

  const handleRemoveFile = (fileId: string) => {
    setSelectedFiles(selectedFiles.filter(f => f.id !== fileId));
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
        <h3 className="text-lg font-semibold text-[#212223]">{headerTitle}</h3>
        {showTags && tags.length > 0 && (
          <div className="flex items-center gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="rounded-full bg-[#ebf0ed] px-3 py-1 text-xs text-[#1d4b34]">
                {tag.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 text-[#212223]">
        {description}
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
              className="h-10 gap-2 rounded-full border-[#cccccc] bg-white px-6 text-[#212223] hover:bg-[#f2f2f2]"
              onClick={handleFileSelect}
            >
              <Upload className="size-4" />
              Files from external DMS
            </Button>
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-full border-[#cccccc] bg-white px-6 text-[#212223] hover:bg-[#f2f2f2]"
              onClick={handleFileSelect}
            >
              <Upload className="size-4" />
              Files from your device
            </Button>
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-full border-[#cccccc] bg-white px-6 text-[#212223] hover:bg-[#f2f2f2]"
              onClick={handleFileSelect}
            >
              <FileText className="size-4" />
              Files from this chat
            </Button>
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-full border-[#cccccc] bg-white px-6 text-[#212223] hover:bg-[#f2f2f2]"
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

      {/* Selected Files */}
      {selectedFiles.length > 0 && (
        <div className={cn("flex flex-wrap items-center gap-2", !disabled && "mb-4")}>
          {selectedFiles.map((file) => (
            <div key={file.id} className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-white px-3 py-2">
              <div className={cn(
                "flex size-5 items-center justify-center rounded text-[10px] font-bold text-white",
                file.type === "P" ? "bg-[#dc0a0a]" : "bg-[#2563eb]"
              )}>
                {file.type}
              </div>
              <span className="text-sm text-[#212223]">{file.name}</span>
              {!disabled && (
                <button
                  onClick={() => handleRemoveFile(file.id)}
                  className="ml-1 text-[#737373] hover:text-[#212223]"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      {!disabled && (
        <div className="flex justify-center">
          <Button
            onClick={handleUpload}
            className="h-10 rounded-full bg-[#1d4b34] px-8 text-white hover:bg-[#163d2a]"
            disabled={selectedFiles.length === 0}
          >
            Upload
          </Button>
        </div>
      )}
    </div>
  );
}
