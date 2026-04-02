"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ClipboardList,
  MessagesSquare,
  FileText,
  Users,
  CheckCircle2,
  Gavel,
  Scale,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PencilPlusIcon } from "@/components/pencil-plus-icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { id: "intake", label: "Intake", icon: <ClipboardList className="size-5" /> },
  { id: "argue2", label: "Argue", icon: <MessagesSquare className="size-5" /> },
  { id: "develop", label: "Develop", icon: <Scale className="size-5" /> },
  { id: "outline", label: "Outline", icon: <FileText className="size-5" /> },
  { id: "draft", label: "Draft", icon: <PencilPlusIcon className="size-5" /> },
  { id: "verify", label: "Verify", icon: <CheckCircle2 className="size-5" /> },
  { id: "opposition", label: "Opposition", icon: <Users className="size-5" /> },
  { id: "finalize", label: "Finalize", icon: <Gavel className="size-5" /> },
];

export const judicialCarouselSteps: Step[] = [
  { id: "intake", label: "Intake", icon: <ClipboardList className="size-5" /> },
  { id: "argue2", label: "Claims", icon: <MessagesSquare className="size-5" /> },
  { id: "develop", label: "Decide", icon: <Scale className="size-5" /> },
  { id: "outline", label: "Outline", icon: <FileText className="size-5" /> },
  { id: "draft", label: "Draft", icon: <PencilPlusIcon className="size-5" /> },
  { id: "verify", label: "Verify", icon: <CheckCircle2 className="size-5" /> },
  { id: "finalize", label: "Finalize", icon: <Gavel className="size-5" /> },
];

interface BriefCarouselNavProps {
  currentStep?: string;
  className?: string;
  onStepClick?: (stepId: string) => void;
  customSteps?: Step[];
}

export function BriefCarouselNav({
  currentStep = "intake",
  className,
  onStepClick,
  customSteps,
}: BriefCarouselNavProps) {
  const stepsToUse = customSteps || steps;
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const currentIndex = stepsToUse.findIndex((step) => step.id === currentStep);

  // Update scroll state when api changes
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Scroll to current step when it changes
  React.useEffect(() => {
    if (!api) return;
    if (currentIndex >= 0) {
      api.scrollTo(currentIndex);
    }
  }, [api, currentIndex]);

  const handlePrev = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <div className={cn("border-b border-[#e5e5e5] bg-white px-6 py-4", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="relative flex items-center gap-2">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={!canScrollPrev}
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white transition-all",
              canScrollPrev
                ? "cursor-pointer hover:border-[#1d4b34] hover:bg-[#f8faf9] text-[#212223]"
                : "cursor-not-allowed text-[#d2d2d2]"
            )}
            aria-label="Previous step"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Carousel */}
          <div className="flex-1 overflow-hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: false,
                skipSnaps: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {stepsToUse.map((step, index) => {
                  const isActive = currentStep === step.id;
                  const isPast = currentIndex > index;
                  const isFuture = currentIndex < index;

                  return (
                    <CarouselItem
                      key={step.id}
                      className="basis-1/3 pl-2 md:basis-1/4 lg:basis-1/5"
                    >
                      <button
                        onClick={() => onStepClick?.(step.id)}
                        className={cn(
                          "flex w-full flex-col items-center gap-2 rounded-xl px-3 py-3 transition-all cursor-pointer",
                          isActive
                            ? "bg-[#1d4b34] text-white shadow-md"
                            : isPast
                            ? "bg-[#e8f0eb] text-[#1d4b34] hover:bg-[#d9e8de]"
                            : "bg-[#f2f2f2] text-[#737373] hover:bg-[#e8e8e8] hover:text-[#212223]"
                        )}
                      >
                        <div
                          className={cn(
                            "flex size-10 items-center justify-center rounded-full transition-colors",
                            isActive
                              ? "bg-white/20"
                              : isPast
                              ? "bg-[#1d4b34]/10"
                              : "bg-white/50"
                          )}
                        >
                          {step.icon}
                        </div>
                        <span className="text-xs font-medium">{step.label}</span>
                        {/* Step indicator */}
                        <div className="flex items-center gap-1">
                          <span
                            className={cn(
                              "text-[10px] font-medium",
                              isActive
                                ? "text-white/70"
                                : isPast
                                ? "text-[#1d4b34]/60"
                                : "text-[#999]"
                            )}
                          >
                            Step {index + 1}
                          </span>
                        </div>
                      </button>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!canScrollNext}
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white transition-all",
              canScrollNext
                ? "cursor-pointer hover:border-[#1d4b34] hover:bg-[#f8faf9] text-[#212223]"
                : "cursor-not-allowed text-[#d2d2d2]"
            )}
            aria-label="Next step"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="mt-3 flex justify-center gap-1.5">
          {stepsToUse.map((step, index) => {
            const isActive = currentStep === step.id;
            const isPast = currentIndex > index;

            return (
              <button
                key={step.id}
                onClick={() => {
                  onStepClick?.(step.id);
                  api?.scrollTo(index);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all cursor-pointer",
                  isActive
                    ? "w-6 bg-[#1d4b34]"
                    : isPast
                    ? "w-1.5 bg-[#1d4b34]/40 hover:bg-[#1d4b34]/60"
                    : "w-1.5 bg-[#d2d2d2] hover:bg-[#999]"
                )}
                aria-label={`Go to ${step.label}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
