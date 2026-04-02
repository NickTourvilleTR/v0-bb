"use client";

import { Printer, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CocoHeaderProps {
  title: string;
  className?: string;
  onDownload?: () => void;
}

export function CocoHeader({ title, className, onDownload }: CocoHeaderProps) {
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
