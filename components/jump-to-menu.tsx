"use client";

import * as React from "react";
import { List } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface JumpToSection {
  id: string;
  label: string;
  level?: "top" | "sub"; // top level is bold, sub level is normal weight with indent
}

interface JumpToMenuProps {
  sections: JumpToSection[];
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function JumpToMenu({ sections, containerRef }: JumpToMenuProps) {
  const [open, setOpen] = React.useState(false);

  const handleJumpTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
          <List className="size-5 text-[#212223]" />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        align="start" 
        side="right"
        sideOffset={8}
        className="w-80 max-h-[70vh] overflow-y-auto p-0"
      >
        <div className="px-4 py-3 border-b border-[#e5e5e5]">
          <p className="text-sm text-[#737373]">Jump-to a section</p>
        </div>
        <div className="py-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleJumpTo(section.id)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-[#f7f7f7] ${
                section.level === "sub" 
                  ? "pl-8 font-normal text-[#212223]" 
                  : "font-semibold text-[#212223]"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
