"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Undo2,
  Redo2,
  Plus,
  ChevronDown,
  Minus,
  Bold,
  Italic,
  Underline,
  MoreHorizontal,
} from "lucide-react";

interface DraftEditorProps {
  className?: string;
}

export function DraftEditor({ className }: DraftEditorProps) {
  const [fontSize, setFontSize] = React.useState(36);

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      {/* Formatting Toolbar */}
      <div className="flex items-center gap-1 border-b border-[#e5e5e5] bg-white px-4 py-2">
        {/* Undo/Redo */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Undo2 className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Redo2 className="size-4" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Add */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Plus className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <ChevronDown className="size-3" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Heading Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 text-sm text-[#212223]">
              Heading 1
              <ChevronDown className="size-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Heading 1</DropdownMenuItem>
            <DropdownMenuItem>Heading 2</DropdownMenuItem>
            <DropdownMenuItem>Heading 3</DropdownMenuItem>
            <DropdownMenuItem>Body</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Font Size */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="size-8 p-0 text-[#737373] hover:text-[#212223]"
          onClick={() => setFontSize(Math.max(8, fontSize - 1))}
        >
          <Minus className="size-3" />
        </Button>
        <span className="w-8 text-center text-sm text-[#212223]">{fontSize}</span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="size-8 p-0 text-[#737373] hover:text-[#212223]"
          onClick={() => setFontSize(Math.min(72, fontSize + 1))}
        >
          <Plus className="size-3" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Text Formatting */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Bold className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Italic className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Underline className="size-4" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* More Options */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <MoreHorizontal className="size-4" />
        </Button>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto bg-[#fcfcfc] p-8">
        <div className="mx-auto max-w-3xl rounded-lg border border-[#e5e5e5] bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wide text-[#737373]">DRAFT</p>
            <h1 className="text-2xl font-semibold text-[#212223]">Review and edit your draft brief</h1>
          </div>

          {/* Party/Attorney Fields */}
          <div className="mb-8 space-y-2 text-sm text-[#212223]">
            <p>[Party/Attorney]</p>
            <p>[Email]</p>
            <p>[Street/Address]</p>
            <p>[Telephone]</p>
            <p>[Facsimile]</p>
          </div>

          {/* Add Party Button */}
          <button className="mb-8 flex items-center gap-2 rounded-md border border-[#cccccc] px-3 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
            <Plus className="size-4" />
            Add a Party/Attorney
          </button>

          {/* Court Header */}
          <div className="mb-8 text-center">
            <p className="text-lg font-semibold text-[#212223]">UNITED STATES DISTRICT COURT</p>
            <p className="text-lg font-semibold text-[#212223]">CENTRAL DISTRICT OF CALIFORNIA</p>
            <p className="text-lg font-semibold text-[#212223]">WESTERN DIVISION</p>
          </div>

          {/* Case Information */}
          <div className="flex gap-8">
            {/* Left Column - Parties */}
            <div className="flex-1 border-r border-[#e5e5e5] pr-8">
              <p className="mb-4 text-sm text-[#212223]">
                <span className="font-medium">Adrienne Love</span>,
              </p>
              <p className="mb-4 ml-16 text-sm text-[#212223]">Plaintiff,</p>
              <p className="mb-4 ml-8 text-sm text-[#212223]">v.</p>
              <p className="mb-4 text-sm text-[#212223]">
                <span className="font-medium">Airbnb, Inc.</span>, et al.
              </p>
              <p className="ml-16 text-sm text-[#212223]">Defendants.</p>
            </div>

            {/* Right Column - Case Details */}
            <div className="flex-1">
              <p className="mb-2 text-sm text-[#212223]">Case No. 2:25-cv-01779-AB(KSx)</p>
              <p className="mb-4 text-sm text-[#212223]">Hon. André Birotte Jr.</p>
              <p className="text-sm font-semibold uppercase text-[#212223]">
                DEFENDANT SIMON & SCHUSTER, LLC'S JOINDER IN CREATIVE ARTISTS AGENCY, LLC'S MOTION TO DISMISS FIRST AMENDED COMPLAINT AND MOTION TO DISMISS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
