"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  Undo2, 
  Redo2, 
  Plus, 
  Minus, 
  Bold, 
  Italic, 
  Underline, 
  MoreHorizontal,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OutlineEditorProps {
  className?: string;
}

export function OutlineEditor({ className }: OutlineEditorProps) {
  const [expandedSections, setExpandedSections] = React.useState<string[]>(["factual-background"]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      {/* Toolbar */}
      <div className="flex items-center gap-1 border-b border-[#e5e5e5] bg-white px-4 py-2">
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Undo2 className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Redo2 className="size-4" />
        </Button>
        
        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />
        
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Plus className="size-4" />
        </Button>
        
        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />
        
        {/* Heading Dropdown */}
        <button className="flex items-center gap-1 rounded px-2 py-1 text-sm text-[#212223] hover:bg-[#f2f2f2]">
          Heading 1
          <ChevronDown className="size-3" />
        </button>
        
        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />
        
        {/* Font Size */}
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Minus className="size-4" />
        </Button>
        <span className="min-w-[2rem] text-center text-sm text-[#212223]">36</span>
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Plus className="size-4" />
        </Button>
        
        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />
        
        {/* Text Formatting */}
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Bold className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Italic className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <Underline className="size-4" />
        </Button>
        
        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />
        
        <Button variant="ghost" size="icon" className="size-8 text-[#737373] hover:text-[#212223]">
          <MoreHorizontal className="size-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#fcfcfc] p-6">
        <div className="mx-auto max-w-3xl rounded-lg border border-[#e5e5e5] bg-white p-8">
          {/* Header */}
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#737373]">
            OUTLINE
          </p>
          <h1 className="mb-6 text-2xl font-semibold text-[#212223]">
            Confirm your outline selections
          </h1>

          {/* Document Length */}
          <div className="mb-6 rounded bg-[#f7f7f7] px-4 py-2">
            <span className="text-sm text-[#212223]">Document length: ~17 pages</span>
          </div>

          {/* Section I */}
          <div className="border-b border-[#e5e5e5]">
            <button
              onClick={() => toggleSection("table-of-authorities")}
              className="flex w-full items-center justify-between py-4"
            >
              <h2 className="text-lg font-semibold text-[#212223]">
                I. TABLE OF AUTHORITIES
              </h2>
              {expandedSections.includes("table-of-authorities") ? (
                <ChevronUp className="size-5 text-[#737373]" />
              ) : (
                <ChevronDown className="size-5 text-[#737373]" />
              )}
            </button>
          </div>

          {/* Section II */}
          <div className="border-b border-[#e5e5e5]">
            <button
              onClick={() => toggleSection("factual-background")}
              className="flex w-full items-center justify-between py-4"
            >
              <h2 className="text-lg font-semibold text-[#212223]">
                II. FACTUAL BACKGROUND (Chronological)
              </h2>
              {expandedSections.includes("factual-background") ? (
                <ChevronUp className="size-5 text-[#737373]" />
              ) : (
                <ChevronDown className="size-5 text-[#737373]" />
              )}
            </button>

            {expandedSections.includes("factual-background") && (
              <div className="pb-6">
                {/* Subsection A */}
                <div className="mb-6">
                  <h3 className="mb-2 text-base font-semibold text-[#212223]">
                    A. The Parties
                  </h3>
                  <p className="mb-2 text-sm text-[#737373]">Paragraph 1:</p>
                  <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                    <li className="list-disc">
                      Plaintiff: Author of unpublished memoir <em>Eat the Lemon</em>
                      <ul className="ml-6 mt-1 space-y-1">
                        <li className="list-disc">
                          Registered two versions with Copyright Office (July 2020, February 2021)
                        </li>
                        <li className="list-disc">
                          Work completed in 2021 per copyright registration
                        </li>
                      </ul>
                    </li>
                    <li className="list-disc">
                      Defendant S&S: Publisher of <em>One Italian Summer</em>
                      <ul className="ml-6 mt-1 space-y-1">
                        <li className="list-disc">
                          Book first announced March 2021 (sample chapter released)
                        </li>
                        <li className="list-disc">
                          Published March 2022
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Subsection B */}
                <div className="mb-6">
                  <h3 className="mb-2 text-base font-semibold text-[#212223]">
                    B. The Alleged Conspiracy
                  </h3>
                  <p className="mb-2 text-sm text-[#737373]">Paragraph 2:</p>
                  <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                    <li className="list-disc">
                      Plaintiff claims network of conspirators delivered manuscript to Serle
                    </li>
                    <li className="list-disc">
                      Alleges conspiracy to misappropriate her life story
                    </li>
                    <li className="list-disc">
                      Claims defendants altered story to cast her negatively and intimidate her
                    </li>
                    <li className="list-disc">
                      Asserts surveillance, mysterious encounters, and two mysterious deaths
                    </li>
                    <li className="list-disc">
                      28 defendants sued including S&S
                    </li>
                  </ul>
                </div>

                {/* Subsection C */}
                <div className="mb-6">
                  <h3 className="mb-2 text-base font-semibold text-[#212223]">
                    C. The Two Works Compared
                  </h3>
                  
                  <p className="mb-2 text-sm text-[#737373]">Paragraph 3:</p>
                  <p className="mb-2 ml-2 text-sm font-medium text-[#212223]">1. <em>Eat the Lemon</em></p>
                  <ul className="ml-8 mb-4 space-y-1 text-sm text-[#212223]">
                    <li className="list-disc">Personal memoir describing true experiences</li>
                    <li className="list-disc">Centers on coming to terms with tumultuous family life and mother's death (decade prior)</li>
                    <li className="list-disc">Begins with Love traveling Amalfi Coast with boyfriend Brad</li>
                    <li className="list-disc">Mother died from cancer; briefly studied cooking on Amalfi Coast when Love was child</li>
                    <li className="list-disc">Details romantic adventures, flashbacks to family life</li>
                    <li className="list-disc">Love returns to Italy alone to locate mother's cooking teacher</li>
                    <li className="list-disc">Befriends Adele and her family; receives warmth from Rosa (Adele's mother)</li>
                    <li className="list-disc">Locates assistant to mother's cooking teacher; learns mother was happy during that period</li>
                    <li className="list-disc">Ends with Love reveling in meeting "magical elderly woman" and kissing Rosa's shoulder</li>
                  </ul>

                  <p className="mb-2 text-sm text-[#737373]">Paragraph 4:</p>
                  <p className="mb-2 ml-2 text-sm font-medium text-[#212223]">2. <em>One Italian Summer</em></p>
                  <ul className="ml-8 space-y-1 text-sm text-[#212223]">
                    <li className="list-disc">Avowed work of fiction incorporating magical realism</li>
                    <li className="list-disc">Narrator Katy just lost mother to cancer</li>
                    <li className="list-disc">Mother was "great love of her life"; tells husband she doesn't know if she can stay married</li>
                    <li className="list-disc">Travels alone to Positano for trip originally planned with mother</li>
                    <li className="list-disc">Meets handsome American Adam who pursues her</li>
                    <li className="list-disc">Central device: Katy travels back in time, meets 30-year-old version of her mother</li>
                    <li className="list-disc">Discovers mother abandoned her as infant to travel to Italy</li>
                    <li className="list-disc">Mother pursuing interior design job; Adam considering purchasing hotels</li>
                    <li className="list-disc">Katy realizes she's in 1992 timeline</li>
                    <li className="list-disc">Confronts whether to force mother to return to family</li>
                    <li className="list-disc">Returns to present; husband Eric joins her</li>
                    <li className="list-disc">Re-commits to marriage</li>
                    <li className="list-disc">Central message: Seeing mother as independent person empowers Katy to see herself same way</li>
                    <li className="list-disc">Ends with spreading mother's ashes in Italian sea</li>
                  </ul>
                </div>

                {/* Subsection D */}
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#212223]">
                    D. Procedural History
                  </h3>
                  <p className="mb-2 text-sm text-[#737373]">Paragraph 5:</p>
                  <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                    <li className="list-disc">Original Complaint filed February 28, 2025</li>
                    <li className="list-disc">S&S filed Motion to Dismiss June 30, 2025</li>
                    <li className="list-disc">Love filed Opposition August 18, 2025</li>
                    <li className="list-disc">First Amended Complaint filed August 20, 2025</li>
                    <li className="list-disc">Current Motion to Dismiss filed September 12, 2025</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
