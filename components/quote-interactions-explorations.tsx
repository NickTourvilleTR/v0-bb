"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { MessageSquareQuote, Reply, CornerUpLeft, Quote, MessageCircle, Copy, Forward, MoreHorizontal, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample message card for demonstration
interface MessageCardProps {
  children: React.ReactNode;
  className?: string;
  quoteVariant: number;
  onQuote?: () => void;
}

// Variant 1: Simple icon button on hover (top right)
function QuoteVariant1({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <button 
          onClick={onQuote}
          className="absolute -top-3 right-2 flex size-6 items-center justify-center rounded-full bg-[#1d4b34] text-white shadow-md transition-transform hover:scale-110"
        >
          <Reply className="size-3.5" />
        </button>
      )}
      {children}
    </div>
  );
}

// Variant 2: Floating action bar on hover (top center)
function QuoteVariant2({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-[#e5e5e5] bg-white px-2 py-1 shadow-lg">
          <button 
            onClick={onQuote}
            className="flex size-7 items-center justify-center rounded-full text-[#737373] hover:bg-[#f2f2f2] hover:text-[#1d4b34]"
            title="Quote"
          >
            <MessageSquareQuote className="size-4" />
          </button>
          <button 
            className="flex size-7 items-center justify-center rounded-full text-[#737373] hover:bg-[#f2f2f2] hover:text-[#1d4b34]"
            title="Copy"
          >
            <Copy className="size-4" />
          </button>
          <button 
            className="flex size-7 items-center justify-center rounded-full text-[#737373] hover:bg-[#f2f2f2] hover:text-[#1d4b34]"
            title="More"
          >
            <MoreHorizontal className="size-4" />
          </button>
        </div>
      )}
      {children}
    </div>
  );
}

// Variant 3: Side dock on hover (right side)
function QuoteVariant3({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute -right-10 top-1/2 flex -translate-y-1/2 flex-col gap-1 rounded-lg border border-[#e5e5e5] bg-white p-1 shadow-lg">
          <button 
            onClick={onQuote}
            className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#ebf0ed] hover:text-[#1d4b34]"
            title="Quote reply"
          >
            <CornerUpLeft className="size-4" />
          </button>
          <button 
            className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#ebf0ed] hover:text-[#1d4b34]"
            title="Copy"
          >
            <Copy className="size-4" />
          </button>
        </div>
      )}
      {children}
    </div>
  );
}

// Variant 4: Inline text button on hover (bottom right)
function QuoteVariant4({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="mt-2 flex justify-end border-t border-[#e5e5e5] pt-2">
          <button 
            onClick={onQuote}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-[#1d4b34] hover:bg-[#ebf0ed]"
          >
            <Reply className="size-3" />
            Quote reply
          </button>
        </div>
      )}
    </div>
  );
}

// Variant 5: Corner ribbon style (top left)
function QuoteVariant5({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative overflow-hidden rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <button 
          onClick={onQuote}
          className="absolute -left-1 -top-1 flex size-8 items-center justify-center rounded-br-lg bg-[#1d4b34] text-white shadow-md"
        >
          <Quote className="size-3.5" />
        </button>
      )}
      {children}
    </div>
  );
}

// Variant 6: Slide-in from left
function QuoteVariant6({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">
        <div 
          className={cn(
            "flex w-0 items-center justify-center overflow-hidden bg-[#1d4b34] transition-all duration-200",
            isHovered && "w-10"
          )}
        >
          <button onClick={onQuote} className="text-white">
            <MessageSquareQuote className="size-4" />
          </button>
        </div>
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

// Variant 7: Tooltip style on hover
function QuoteVariant7({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute -top-10 left-2 flex items-center gap-2 rounded-lg bg-[#212223] px-3 py-2 text-white shadow-lg">
          <button 
            onClick={onQuote}
            className="flex items-center gap-1.5 text-xs hover:text-[#a8d5ba]"
          >
            <Reply className="size-3" />
            Quote
          </button>
          <div className="h-3 w-px bg-[#737373]" />
          <button className="flex items-center gap-1.5 text-xs hover:text-[#a8d5ba]">
            <Copy className="size-3" />
            Copy
          </button>
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1 left-4 size-2 rotate-45 bg-[#212223]" />
        </div>
      )}
      {children}
    </div>
  );
}

// Variant 8: Glow border with action
function QuoteVariant8({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn(
        "relative rounded-lg border bg-white p-4 transition-all duration-200",
        isHovered ? "border-[#1d4b34] shadow-[0_0_0_2px_rgba(29,75,52,0.1)]" : "border-[#e5e5e5]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <button 
          onClick={onQuote}
          className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-[#1d4b34] px-3 py-1 text-xs text-white shadow-md transition-transform hover:scale-105"
        >
          <Reply className="size-3" />
          Reply
        </button>
      )}
    </div>
  );
}

// Variant 9: Teams-style reaction bar
function QuoteVariant9({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute -top-5 right-2 flex items-center rounded-md border border-[#e5e5e5] bg-white shadow-md">
          <button className="flex size-8 items-center justify-center border-r border-[#e5e5e5] text-lg hover:bg-[#f5f5f5]">
            👍
          </button>
          <button className="flex size-8 items-center justify-center border-r border-[#e5e5e5] text-lg hover:bg-[#f5f5f5]">
            ❤️
          </button>
          <button className="flex size-8 items-center justify-center border-r border-[#e5e5e5] text-lg hover:bg-[#f5f5f5]">
            😄
          </button>
          <button 
            onClick={onQuote}
            className="flex size-8 items-center justify-center text-[#737373] hover:bg-[#f5f5f5] hover:text-[#1d4b34]"
            title="Reply"
          >
            <Reply className="size-4" />
          </button>
          <button className="flex size-8 items-center justify-center text-[#737373] hover:bg-[#f5f5f5]">
            <MoreHorizontal className="size-4" />
          </button>
        </div>
      )}
      {children}
    </div>
  );
}

// Variant 10: Minimalist dot indicator with expand
function QuoteVariant10({ children, className, onQuote }: MessageCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <div 
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsExpanded(false); }}
    >
      {isHovered && (
        <div className="absolute right-2 top-2">
          {!isExpanded ? (
            <button 
              onClick={() => setIsExpanded(true)}
              className="flex size-6 items-center justify-center rounded-full bg-[#f2f2f2] text-[#737373] hover:bg-[#e5e5e5]"
            >
              <MoreHorizontal className="size-4" />
            </button>
          ) : (
            <div className="flex items-center gap-1 rounded-full bg-[#f2f2f2] px-1">
              <button 
                onClick={onQuote}
                className="flex size-6 items-center justify-center rounded-full text-[#737373] hover:bg-white hover:text-[#1d4b34]"
                title="Quote"
              >
                <MessageSquareQuote className="size-3.5" />
              </button>
              <button 
                className="flex size-6 items-center justify-center rounded-full text-[#737373] hover:bg-white hover:text-[#1d4b34]"
                title="Copy"
              >
                <Copy className="size-3.5" />
              </button>
              <button 
                className="flex size-6 items-center justify-center rounded-full text-[#737373] hover:bg-white hover:text-[#1d4b34]"
                title="Forward"
              >
                <Forward className="size-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

// Demo component showing all 10 variants
export function QuoteInteractionsExplorations() {
  const sampleContent = (
    <div>
      <p className="text-sm text-[#212223]">
        I've identified relevant case law and statutes to support your arguments. Review the authorities and select which ones to include in your brief.
      </p>
    </div>
  );

  const handleQuote = (variant: number) => {
    console.log(`Quote action triggered from variant ${variant}`);
  };

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-xl font-semibold text-[#212223]">Quote Reply Interactions (Hover over cards)</h2>
      
      <div className="grid gap-6">
        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 1: Simple icon button (top right)</p>
          <QuoteVariant1 quoteVariant={1} onQuote={() => handleQuote(1)}>
            {sampleContent}
          </QuoteVariant1>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 2: Floating action bar (top center)</p>
          <QuoteVariant2 quoteVariant={2} onQuote={() => handleQuote(2)}>
            {sampleContent}
          </QuoteVariant2>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 3: Side dock (right side)</p>
          <QuoteVariant3 quoteVariant={3} onQuote={() => handleQuote(3)}>
            {sampleContent}
          </QuoteVariant3>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 4: Inline text button (bottom right)</p>
          <QuoteVariant4 quoteVariant={4} onQuote={() => handleQuote(4)}>
            {sampleContent}
          </QuoteVariant4>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 5: Corner ribbon style (top left)</p>
          <QuoteVariant5 quoteVariant={5} onQuote={() => handleQuote(5)}>
            {sampleContent}
          </QuoteVariant5>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 6: Slide-in from left</p>
          <QuoteVariant6 quoteVariant={6} onQuote={() => handleQuote(6)}>
            {sampleContent}
          </QuoteVariant6>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 7: Tooltip style</p>
          <QuoteVariant7 quoteVariant={7} onQuote={() => handleQuote(7)}>
            {sampleContent}
          </QuoteVariant7>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 8: Glow border with action</p>
          <QuoteVariant8 quoteVariant={8} onQuote={() => handleQuote(8)}>
            {sampleContent}
          </QuoteVariant8>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 9: Teams-style reaction bar</p>
          <QuoteVariant9 quoteVariant={9} onQuote={() => handleQuote(9)}>
            {sampleContent}
          </QuoteVariant9>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#737373]">Variant 10: Minimalist dot indicator with expand</p>
          <QuoteVariant10 quoteVariant={10} onQuote={() => handleQuote(10)}>
            {sampleContent}
          </QuoteVariant10>
        </div>
      </div>
    </div>
  );
}

export {
  QuoteVariant1,
  QuoteVariant2,
  QuoteVariant3,
  QuoteVariant4,
  QuoteVariant5,
  QuoteVariant6,
  QuoteVariant7,
  QuoteVariant8,
  QuoteVariant9,
  QuoteVariant10,
};
