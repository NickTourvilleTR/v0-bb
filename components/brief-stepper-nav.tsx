"use client";

import { cn } from "@/lib/utils";
import {
  ClipboardList,
  MessagesSquare,
  Layers,
  FileText,
  Users,
  CheckCircle2,
  Gavel,
  Scale,
} from "lucide-react";
import { PencilPlusIcon } from "@/components/pencil-plus-icon";

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { id: "intake", label: "Intake", icon: <ClipboardList className="size-5" /> },
  { id: "argue2", label: "Argue", icon: <MessagesSquare className="size-5" /> },
  { id: "develop", label: "Develop", icon: <Layers className="size-5" /> },
  { id: "outline", label: "Outline", icon: <FileText className="size-5" /> },
  { id: "draft", label: "Draft", icon: <PencilPlusIcon className="size-5" /> },
  { id: "verify", label: "Verify", icon: <CheckCircle2 className="size-5" /> },
  { id: "opposition", label: "Opposition", icon: <Users className="size-5" /> },
  { id: "finalize", label: "Finalize", icon: <Gavel className="size-5" /> },
];

export const judicialSteps: Step[] = [
  { id: "intake", label: "Intake", icon: <ClipboardList className="size-5" /> },
  { id: "argue2", label: "Claims", icon: <MessagesSquare className="size-5" /> },
  { id: "develop", label: "Decide", icon: <Scale className="size-5" /> },
  { id: "outline", label: "Outline", icon: <FileText className="size-5" /> },
  { id: "draft", label: "Draft", icon: <PencilPlusIcon className="size-5" /> },
  { id: "verify", label: "Verify", icon: <CheckCircle2 className="size-5" /> },
  { id: "finalize", label: "Finalize", icon: <Gavel className="size-5" /> },
];

interface BriefStepperNavProps {
  currentStep?: string;
  className?: string;
  onStepClick?: (stepId: string) => void;
  customSteps?: Step[];
}

export function BriefStepperNav({
  currentStep = "intake",
  className,
  onStepClick,
  customSteps,
}: BriefStepperNavProps) {
  const stepsToUse = customSteps || steps;
  return (
    <div className={cn("border-b border-[#e5e5e5] bg-white px-6 py-4", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center rounded-full bg-[#f2f2f2] p-1">
          {stepsToUse.map((step) => (
            <button
              key={step.id}
              onClick={() => onStepClick?.(step.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium transition-all cursor-pointer",
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
