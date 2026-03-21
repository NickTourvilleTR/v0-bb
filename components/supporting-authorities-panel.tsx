"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Notebook, List, ScanEye } from "lucide-react";

interface Citation {
  id: string;
  name: string;
  citation: string;
  badges: string[];
  description: string;
  supportPoints: string[];
}

interface ArgumentAuthority {
  id: string;
  title: string;
  citations: Citation[];
}

const defaultAuthorities: ArgumentAuthority[] = [
  {
    id: "1",
    title: "Copyright Infringement Claim Fails as a Matter of Law",
    citations: [
      {
        id: "shaw",
        name: "Shaw v. Lindheim",
        citation: "919 F.2d 1353 (9th Cir. 2024)",
        badges: ["Same judge", "Last 2 years"],
        description:
          'This case dealt with "total concept and feel" and parallel structure in plot/character relationships can defeat early dismissal with respect to similarity',
        supportPoints: [
          'Shaw predates the more refined extrinsic/intrinsic framework and involved strong parallelism in plot architecture and character functions in two crime-drama TV works. Here, once the generic "woman goes to Italy after mother\'s death" premise is stripped away, the plots, sequences, and character arcs diverge sharply.',
          "Shaw dealt with detailed correspondences in a unique story setup and resolution. Here, the similarities are limited to commonplace grief-and-travel motifs that naturally flow from the premise.",
          "Later Ninth Circuit decisions (Funky Films, Benay, etc.) have limited Shaw by emphasizing that shared themes and stock setups do not amount to substantial similarity in protectable expression.",
        ],
      },
      {
        id: "corbello",
        name: "Corbello v. Valli",
        citation: "974 F.3d 965 (9th Cir. 2020)",
        badges: ["Similar facts", "Asserted truths doctrine"],
        description:
          "An author who presents a work as nonfiction cannot claim copyright protection over elements of that work as if they were fiction because the facts of one's own life, even as recounted in an unpublished memoir, are not protectable expression.",
        supportPoints: [
          "Just as the Corbello court held that a work presented as a truthful autobiographical account cannot later be recharacterized as fiction to obtain copyright protection, Love's complaint describes Eat the Lemon as a personal memoir based on her own life, which prevents claiming copyright in the facts of that life.",
          "Corbello's asserted truths doctrine provides that elements a work holds out as factual are treated as facts for copyright purposes, regardless of how the author later characterizes them in litigation. The specificity of Love's similarity allegations underscores that she is pointing to details of her actual lived experience, not original expressive choices.",
          "In Corbello, defendants unquestionably had access to the manuscript yet the Ninth Circuit found no infringement because access to a factual work does not transform unprotectable biographical details into protectable expression. Love's access allegations do not change what is and is not protectable in Eat the Lemon.",
        ],
      },
      {
        id: "biani",
        name: "Biani v. Showtime Networks, Inc.",
        citation: "153 F.4th 957 (9th Cir. 2025)",
        badges: ["Similar facts", "Scènes à faire"],
        description:
          "Character traits alleged to be copied from a plaintiff's original works are unprotectable scènes à faire when they are stock features of the relevant genre, and that even a cursory comparison of the works revealing more differences than similarities warrants dismissal for failure to allege substantial similarity in protectable expression.",
        supportPoints: [
          "Genre conventions are not protectable expression. Just as Biani held that traits naturally associated with Victorian Gothic fiction are stock elements of that genre and therefore unprotectable, the elements Love identifies as copied are largely the natural furnishings of a grief memoir set on the Amalfi Coast.",
          "A central move in Biani was the court's insistence on looking at the works as a whole. One Italian Summer is built around a magical-realist time travel device through which the protagonist literally meets her young mother, an element with no counterpart in Eat the Lemon.",
          "Biani affirmed dismissal notwithstanding a plaintiff who assembled a chart of specific, itemized correspondences between characters. Accumulating a catalog of individual similarities does not satisfy the extrinsic test when those similarities reflect unprotectable ideas and genre conventions rather than the plaintiff's original expressive choices.",
        ],
      },
    ],
  },
];

interface SupportingAuthoritiesPanelProps {
  className?: string;
}

export function SupportingAuthoritiesPanel({
  className,
}: SupportingAuthoritiesPanelProps) {
  const [selectedCitations, setSelectedCitations] = React.useState<string[]>([
    "corbello",
    "biani",
  ]);

  const toggleCitation = (citationId: string) => {
    setSelectedCitations((prev) =>
      prev.includes(citationId)
        ? prev.filter((id) => id !== citationId)
        : [...prev, citationId]
    );
  };

  const currentAuthority = defaultAuthorities[0];

  return (
    <div className={cn("flex h-full flex-col overflow-y-auto", className)}>
      {/* Main Content with sidebar */}
      <div className="mx-auto flex w-full max-w-5xl gap-6 px-6 py-8">
        {/* Left sidebar buttons - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <ScanEye className="size-5 text-[#1d4b34]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
              SUPPORTING AUTHORITIES
            </p>
            <h1 className="text-2xl font-semibold text-[#212223]">
              Select the desired authorities
            </h1>
          </div>

        {/* Argument Section */}
        <h2 className="mb-4 text-lg font-semibold text-[#212223]">
          1. {currentAuthority.title}
        </h2>

        {/* Table Container */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white">
          {/* Table Header */}
          <div className="flex border-b border-[#e5e5e5]">
            <div className="flex w-1/2 items-center gap-3 bg-[#f5f7f6] px-4 py-3">
              <Checkbox
                checked={selectedCitations.length === currentAuthority.citations.length}
                onCheckedChange={() => {
                  if (selectedCitations.length === currentAuthority.citations.length) {
                    setSelectedCitations([]);
                  } else {
                    setSelectedCitations(currentAuthority.citations.map((c) => c.id));
                  }
                }}
                className="border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
              />
              <span className="font-semibold text-[#212223]">Citations</span>
              <span className="text-sm text-[#737373]">
                • {selectedCitations.length} selected
              </span>
            </div>
            <div className="w-1/2 border-l border-dashed border-[#d2d2d2] bg-white px-6 py-3">
              <span className="font-medium text-[#737373]">
                How this supports the argument
              </span>
            </div>
          </div>

          {/* Citation Rows */}
          {currentAuthority.citations.map((citation, index) => (
            <div
              key={citation.id}
              className={cn(
                "flex",
                index < currentAuthority.citations.length - 1 && "border-b border-[#e5e5e5]"
              )}
            >
              {/* Left Column - Citation Details */}
              <div
                className={cn(
                  "w-1/2 p-4",
                  selectedCitations.includes(citation.id) ? "bg-[#f5f7f6]" : "bg-white"
                )}
              >
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={selectedCitations.includes(citation.id)}
                    onCheckedChange={() => toggleCitation(citation.id)}
                    className="mt-0.5 border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                  />
                  <div className="flex-1">
                    {/* Case Name with Link */}
                    <div className="flex items-center gap-1.5">
                      <a
                        href="#"
                        className="font-medium text-[#2e6b5c] hover:underline"
                      >
                        {citation.name}
                      </a>
                      <Notebook className="size-3.5 text-[#2e6b5c]" />
                    </div>
                    
                    {/* Citation Reference */}
                    <p className="text-sm text-[#737373]">{citation.citation}</p>
                    
                    {/* Badges */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {citation.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded bg-[#ebf0ed] px-2 py-0.5 text-xs text-[#1d4b34]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    {/* What this case is about */}
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-[#212223]">
                        What this case is about:
                      </p>
                      <p className="mt-1 text-sm text-[#212223]">
                        {citation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Support Points */}
              <div className="w-1/2 border-l border-dashed border-[#d2d2d2] bg-white p-4 pl-6">
                <ul className="list-disc space-y-4 pl-4 marker:text-[#212223]">
                  {citation.supportPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm leading-relaxed text-[#212223]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
