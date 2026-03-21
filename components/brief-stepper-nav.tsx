"use client";

import { cn } from "@/lib/utils";
import {
  ClipboardList,
  Scale,
  Building2,
  ListTree,
  FileText,
  Users,
  CheckCircle2,
  Flag,
} from "lucide-react";

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { id: "intake", label: "Intake", icon: <ClipboardList className="size-5" /> },
  { id: "argue", label: "Argue", icon: <Scale className="size-5" /> },
  { id: "develop", label: "Develop", icon: <Building2 className="size-5" /> },
  { id: "outline", label: "Outline", icon: <ListTree className="size-5" /> },
  { id: "draft", label: "Draft", icon: <FileText className="size-5" /> },
  { id: "opposition", label: "Opposition", icon: <Users className="size-5" /> },
  { id: "verify", label: "Verify", icon: <CheckCircle2 className="size-5" /> },
  { id: "finalize", label: "Finalize", icon: <Flag className="size-5" /> },
];

interface BriefStepperNavProps {
  currentStep?: string;
  className?: string;
  onStepClick?: (stepId: string) => void;
}

export function BriefStepperNav({
  currentStep = "intake",
  className,
  onStepClick,
}: BriefStepperNavProps) {
  return (
    <div className={cn("border-b border-[#e5e5e5] bg-white px-6 py-4", className)}>
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center rounded-lg bg-[#f2f2f2] p-1">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => onStepClick?.(step.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-all cursor-pointer",
                currentStep === step.id
                  ? "bg-white text-[#212223] shadow-sm"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              {step.icon}
              <span className="hidden lg:inline">{step.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
