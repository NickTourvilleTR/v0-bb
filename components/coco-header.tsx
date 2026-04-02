"use client";

import { Printer, Mail, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CocoHeaderProps {
  title: string;
  className?: string;
  onDownload?: () => void;
  onPrevStep?: () => void;
  onNextStep?: () => void;
  hasPrevStep?: boolean;
  hasNextStep?: boolean;
}

export function CocoHeader({ 
  title, 
  className, 
  onDownload,
  onPrevStep,
  onNextStep,
  hasPrevStep = false,
  hasNextStep = false,
}: CocoHeaderProps) {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between border-b border-[#e5e5e5] bg-white px-6",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <a href="#" className="text-base font-medium text-[#2e6b5c] hover:underline">
          {title}
        </a>
        {(hasPrevStep || hasNextStep) && (
          <div className="flex items-center gap-1 ml-2">
            <Button
              variant="ghost"
              size="icon"
              className="size-7 text-[#737373] hover:bg-[#f2f2f2] disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={onPrevStep}
              disabled={!hasPrevStep}
              aria-label="Previous step"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-7 text-[#737373] hover:bg-[#f2f2f2] disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={onNextStep}
              disabled={!hasNextStep}
              aria-label="Next step"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="size-9 border-[#e5e5e5] text-[#404040] hover:bg-[#f2f2f2]"
        >
          <Printer className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-9 border-[#e5e5e5] text-[#404040] hover:bg-[#f2f2f2]"
        >
          <Mail className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-9 border-[#e5e5e5] text-[#404040] hover:bg-[#f2f2f2]"
          onClick={onDownload}
        >
          <Download className="size-4" />
        </Button>
      </div>
    </header>
  );
}
