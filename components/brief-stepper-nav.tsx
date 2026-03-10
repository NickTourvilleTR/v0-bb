"use client";

import { cn } from "@/lib/utils";
import {
  Scale,
  Building2,
  Sparkles,
  ListTree,
  FileText,
  CheckCircle2,
  Users,
  Gem,
  Flag,
  ChevronRight,
} from "lucide-react";

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { id: "argue", label: "Argue", icon: <Scale className="size-5" /> },
  { id: "support", label: "Support", icon: <Building2 className="size-5" /> },
  { id: "distinguish", label: "Distinguish", icon: <Sparkles className="size-5" /> },
  { id: "outline", label: "Outline", icon: <ListTree className="size-5" /> },
  { id: "draft", label: "Draft", icon: <FileText className="size-5" /> },
  { id: "verify", label: "Verify", icon: <CheckCircle2 className="size-5" /> },
  { id: "opposition", label: "Opposition", icon: <Users className="size-5" /> },
  { id: "polish", label: "Polish", icon: <Gem className="size-5" /> },
  { id: "finalize", label: "Finalize", icon: <Flag className="size-5" /> },
];

interface BriefStepperNavProps {
  currentStep?: string;
  className?: string;
}

export function BriefStepperNav({
  currentStep = "argue",
  className,
}: BriefStepperNavProps) {
  return (
    <div className={cn("flex items-center justify-center border-b border-[#e5e5e5] bg-white px-4 py-3", className)}>
      <div className="flex items-center gap-1">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <button
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 rounded-md transition-colors",
                currentStep === step.id
                  ? "text-[#2e6b5c]"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              {step.icon}
              <span className="text-xs font-medium">{step.label}</span>
            </button>
            {index < steps.length - 1 && (
              <ChevronRight className="size-4 text-[#cccccc] mx-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
