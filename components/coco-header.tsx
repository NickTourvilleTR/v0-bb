"use client";

import * as React from "react";
import { Printer, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface CocoHeaderProps {
  title: string;
  className?: string;
}

export function CocoHeader({ title, className }: CocoHeaderProps) {
  const [newCoCounselEnabled, setNewCoCounselEnabled] = React.useState(true);

  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between border-b border-[#e5e5e5] bg-white px-6",
        className
      )}
    >
      <a href="#" className="text-base font-medium text-[#2e6b5c] hover:underline">
        {title}
      </a>

      <div className="flex items-center gap-4">
        {/* Try new CoCounsel Toggle */}
        <div className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 shadow-sm">
          <Sparkles className="size-4 text-[#d64000]" />
          <span className="text-sm text-[#212223]">Try new CoCounsel</span>
          <Switch
            checked={newCoCounselEnabled}
            onCheckedChange={setNewCoCounselEnabled}
            className="data-[state=checked]:bg-[#1d4b34]"
          />
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
          >
            <Download className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
