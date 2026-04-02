"use client";

import { Printer, Mail, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  label: string;
}

interface CocoHeaderProps {
  title: string;
  className?: string;
  onDownload?: () => void;
  currentStep?: string;
  steps?: Step[];
  onStepClick?: (stepId: string) => void;
}

export function CocoHeader({ 
  title, 
  className, 
  onDownload,
  currentStep,
  steps,
  onStepClick,
}: CocoHeaderProps) {
  // Find current step index
  const currentIndex = steps?.findIndex(s => s.id === currentStep) ?? -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = steps && currentIndex < steps.length - 1;
  
  const handlePrevious = () => {
    if (hasPrevious && steps && onStepClick) {
      onStepClick(steps[currentIndex - 1].id);
    }
  };
  
  const handleNext = () => {
    if (hasNext && steps && onStepClick) {
      onStepClick(steps[currentIndex + 1].id);
    }
  };

  // Get current step label for display
  const currentStepLabel = steps?.find(s => s.id === currentStep)?.label;

  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between border-b border-[#e5e5e5] bg-white px-6",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <a href="#" className="text-base font-medium text-[#2e6b5c] hover:underline">
          {title}
        </a>
        
        {steps && currentStep && (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "size-7 text-[#404040]",
                hasPrevious ? "hover:bg-[#f2f2f2]" : "opacity-40 cursor-not-allowed"
              )}
              onClick={handlePrevious}
              disabled={!hasPrevious}
            >
              <ChevronLeft className="size-4" />
            </Button>
            
            <span className="min-w-[80px] text-center text-sm font-medium text-[#737373]">
              {currentStepLabel}
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "size-7 text-[#404040]",
                hasNext ? "hover:bg-[#f2f2f2]" : "opacity-40 cursor-not-allowed"
              )}
              onClick={handleNext}
              disabled={!hasNext}
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
