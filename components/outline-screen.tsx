"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ListTree } from "lucide-react";

interface OutlineItem {
  title: string;
  link?: string;
  linkText?: string;
  status: "edited" | "unchanged";
}

const outlineItems: OutlineItem[] = [
  {
    title: "Context from uploaded documents",
    status: "edited",
  },
  {
    title: "3 Arguments to be drafted",
    link: "#",
    linkText: "Review in Argue tab",
    status: "edited",
  },
  {
    title: "20 Supporting authorities selected",
    link: "#",
    linkText: "Review in Support tab",
    status: "edited",
  },
  {
    title: "2 Contrary authorities selected",
    link: "#",
    linkText: "Review in Distinguish tab",
    status: "unchanged",
  },
];

interface OutlineScreenProps {
  className?: string;
  onGenerateOutline?: () => void;
}

export function OutlineScreen({ className, onGenerateOutline }: OutlineScreenProps) {
  return (
    <div className={cn("flex flex-1 flex-col items-center justify-center px-8 py-12", className)}>
      <div className="w-full max-w-2xl">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <ListTree className="size-16 text-[#737373]" strokeWidth={1} />
        </div>

        {/* Title */}
        <h1 className="mb-2 text-center text-3xl font-semibold text-[#212223]">
          Create your outline
        </h1>

        {/* Subtitle */}
        <p className="mb-6 text-center text-[#737373]">
          Based on your selections, this may take up to 15 minutes
        </p>

        {/* Description */}
        <p className="mb-8 text-center text-[#212223]">
          Review the actions you've taken and revisit any earlier steps to make changes as desired, then generate your outline to continue.
        </p>

        {/* Draft contents list */}
        <div className="mb-8">
          <h2 className="mb-4 font-semibold text-[#212223]">Your draft will include:</h2>
          
          <div className="space-y-4">
            {outlineItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between border-b border-[#e5e5e5] pb-4 last:border-0"
              >
                <div>
                  <p className="text-[#212223]">{item.title}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="text-sm text-[#2e6b5c] hover:underline"
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded px-2 py-1 text-xs font-medium",
                    item.status === "edited"
                      ? "bg-[#ebf0ed] text-[#2e6b5c]"
                      : "bg-[#f2f2f2] text-[#737373]"
                  )}
                >
                  {item.status === "edited" ? "Edited" : "Unchanged"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <div className="flex justify-center">
          <Button
            onClick={onGenerateOutline}
            className="bg-[#1f1f1f] px-8 py-2 text-white hover:bg-[#404040]"
          >
            Generate outline
          </Button>
        </div>
      </div>
    </div>
  );
}
