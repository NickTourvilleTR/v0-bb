"use client";

import { cn } from "@/lib/utils";
import {
  ClipboardList,
  Scale,
  Building2,
  ListTree,
  FileText,
  ChevronRight,
  Check,
  Circle,
  ArrowRight,
} from "lucide-react";

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { id: "intake", label: "Intake", icon: <ClipboardList className="size-4" /> },
  { id: "develop", label: "Develop", icon: <Building2 className="size-4" /> },
  { id: "outline", label: "Outline", icon: <ListTree className="size-4" /> },
  { id: "draft", label: "Draft", icon: <FileText className="size-4" /> },
];

const currentStep = "develop";

// Option 1: Minimal Pills with Progress Line
function Option1() {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  return (
    <div className="border-b border-[#e5e5e5] bg-white px-6 py-4">
      <div className="mx-auto max-w-3xl">
        <div className="relative flex items-center justify-between">
          {/* Progress line background */}
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#e5e5e5]" />
          {/* Progress line filled */}
          <div 
            className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#1d4b34] transition-all" 
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div className={cn(
                "flex size-10 items-center justify-center rounded-full border-2 transition-colors",
                index < currentIndex ? "border-[#1d4b34] bg-[#1d4b34] text-white" :
                index === currentIndex ? "border-[#1d4b34] bg-white text-[#1d4b34]" :
                "border-[#e5e5e5] bg-white text-[#737373]"
              )}>
                {index < currentIndex ? <Check className="size-4" /> : step.icon}
              </div>
              <span className={cn(
                "mt-2 text-xs font-medium",
                index <= currentIndex ? "text-[#1d4b34]" : "text-[#737373]"
              )}>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Option 2: Underline Tabs
function Option2() {
  return (
    <div className="border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-8">
          {steps.map((step) => (
            <button
              key={step.id}
              className={cn(
                "relative flex items-center gap-2 px-1 py-4 text-sm font-medium transition-colors",
                currentStep === step.id
                  ? "text-[#1d4b34]"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              {step.icon}
              <span>{step.label}</span>
              {currentStep === step.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1d4b34]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Option 3: Numbered Steps with Connector
function Option3() {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  return (
    <div className="border-b border-[#e5e5e5] bg-gradient-to-b from-[#f7f7f7] to-white px-6 py-5">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "flex size-8 items-center justify-center rounded-full text-sm font-semibold",
                  index < currentIndex ? "bg-[#1d4b34] text-white" :
                  index === currentIndex ? "bg-[#1d4b34] text-white ring-4 ring-[#1d4b34]/20" :
                  "bg-[#e5e5e5] text-[#737373]"
                )}>
                  {index < currentIndex ? <Check className="size-4" /> : index + 1}
                </div>
                <span className={cn(
                  "mt-2 text-xs font-medium",
                  index <= currentIndex ? "text-[#212223]" : "text-[#737373]"
                )}>{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "mx-4 h-0.5 w-12",
                  index < currentIndex ? "bg-[#1d4b34]" : "bg-[#e5e5e5]"
                )} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Option 4: Segmented Control Style
function Option4() {
  return (
    <div className="border-b border-[#e5e5e5] bg-white px-6 py-4">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center rounded-lg bg-[#f2f2f2] p-1">
          {steps.map((step) => (
            <button
              key={step.id}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all",
                currentStep === step.id
                  ? "bg-white text-[#212223] shadow-sm"
                  : "text-[#737373] hover:text-[#212223]"
              )}
            >
              {step.icon}
              <span className="hidden sm:inline">{step.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Option 5: Vertical Dots with Labels
function Option5() {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  return (
    <div className="border-b border-[#e5e5e5] bg-white px-6 py-4">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex size-3 items-center justify-center rounded-full transition-all",
                  index < currentIndex ? "bg-[#1d4b34]" :
                  index === currentIndex ? "bg-[#1d4b34] ring-4 ring-[#1d4b34]/20" :
                  "bg-[#cccccc]"
                )} />
                <span className={cn(
                  "text-sm font-medium",
                  index <= currentIndex ? "text-[#212223]" : "text-[#737373]"
                )}>{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="size-4 text-[#cccccc]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Option 6: Card Style Steps
function Option6() {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  return (
    <div className="border-b border-[#e5e5e5] bg-[#fafafa] px-6 py-4">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2">
              <div className={cn(
                "flex items-center gap-2 rounded-lg border px-4 py-2 transition-all",
                index < currentIndex ? "border-[#1d4b34] bg-[#1d4b34]/5 text-[#1d4b34]" :
                index === currentIndex ? "border-[#1d4b34] bg-[#1d4b34] text-white shadow-md" :
                "border-[#e5e5e5] bg-white text-[#737373]"
              )}>
                {index < currentIndex ? <Check className="size-4" /> : step.icon}
                <span className="text-sm font-medium">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="size-4 text-[#cccccc]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Option 7: Progress Bar with Labels
function Option7() {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  const progress = ((currentIndex + 1) / steps.length) * 100;
  return (
    <div className="border-b border-[#e5e5e5] bg-white px-6 py-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-3 flex items-center justify-between text-xs">
          {steps.map((step, index) => (
            <span key={step.id} className={cn(
              "font-medium",
              index <= currentIndex ? "text-[#1d4b34]" : "text-[#737373]"
            )}>{step.label}</span>
          ))}
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#e5e5e5]">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-[#1d4b34] to-[#2e6b5c] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// Option 8: Breadcrumb Style
function Option8() {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  return (
    <div className="border-b border-[#e5e5e5] bg-white px-6 py-3">
      <div className="mx-auto max-w-4xl">
        <nav className="flex items-center justify-center">
          <ol className="flex items-center gap-1">
            {steps.map((step, index) => (
              <li key={step.id} className="flex items-center">
                <a className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
                  index < currentIndex ? "text-[#1d4b34] hover:bg-[#1d4b34]/5" :
                  index === currentIndex ? "bg-[#1d4b34]/10 font-semibold text-[#1d4b34]" :
                  "text-[#737373]"
                )}>
                  {index < currentIndex && <Check className="size-3.5" />}
                  {step.label}
                </a>
                {index < steps.length - 1 && (
                  <ChevronRight className="mx-1 size-4 text-[#cccccc]" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

// Option 9: Floating Pill Navigation
function Option9() {
  return (
    <div className="border-b border-[#e5e5e5] bg-gradient-to-b from-[#1d4b34] to-[#163d2a] px-6 py-4">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-center gap-2 rounded-full bg-white/10 p-1 backdrop-blur">
          {steps.map((step) => (
            <button
              key={step.id}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                currentStep === step.id
                  ? "bg-white text-[#1d4b34] shadow-lg"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {step.icon}
              <span>{step.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Option 10: Timeline Style
function Option10() {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  return (
    <div className="border-b border-[#e5e5e5] bg-white px-6 py-5">
      <div className="mx-auto max-w-4xl">
        <div className="relative flex items-start justify-between">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-4 h-px bg-[#e5e5e5]" />
          <div 
            className="absolute left-0 top-4 h-px bg-[#1d4b34] transition-all"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <div className={cn(
                "relative z-10 flex size-8 items-center justify-center rounded-full border-2 bg-white",
                index < currentIndex ? "border-[#1d4b34] text-[#1d4b34]" :
                index === currentIndex ? "border-[#1d4b34] text-[#1d4b34] shadow-md shadow-[#1d4b34]/20" :
                "border-[#e5e5e5] text-[#737373]"
              )}>
                {index < currentIndex ? <Check className="size-4" /> : step.icon}
              </div>
              <div className="mt-2 text-center">
                <span className={cn(
                  "text-xs font-medium",
                  index <= currentIndex ? "text-[#212223]" : "text-[#737373]"
                )}>{step.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main component showing all options
export function StepperDesignOptions() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <div className="space-y-8 p-8">
        <h1 className="text-center text-2xl font-bold text-[#212223]">Stepper Design Options</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 1: Progress Line with Circles</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option1 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 2: Underline Tabs</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option2 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 3: Numbered Steps with Connector</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option3 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 4: Segmented Control</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option4 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 5: Dots with Labels</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option5 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 6: Card Style Steps</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option6 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 7: Progress Bar with Labels</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option7 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 8: Breadcrumb Style</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option8 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 9: Floating Pill Navigation (Dark)</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option9 /></div>
          </div>
          
          <div>
            <h2 className="mb-2 text-sm font-semibold text-[#737373]">Option 10: Timeline Style</h2>
            <div className="overflow-hidden rounded-lg border border-[#e5e5e5]"><Option10 /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
