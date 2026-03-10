"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";

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
        id: "swirsky",
        name: "Swirsky v. Carey",
        citation: "376 F.3d 841 (9th Cir. 2004)",
        badges: ["Similar facts"],
        description:
          'This case dealt with "total concept and feel" and parallel structure in plot/character relationships can defeat early dismissal with respect to similarity.',
        supportPoints: [
          "Swirsky was about musical works and relied heavily on expert musicology. That's very different from a literary comparison, where the judge can simply read the two works.",
          "The selection-and-arrangement logic in Swirsky concerned specific combinations of melodic, harmonic, and rhythmic elements. Here, plaintiff doesn't identify any analogous, protectable combination—only standard elements of a grief journey and real-life facts.",
          'Later authorities warn against using Swirsky as a license to bundle any number of unprotectable details. Defendants\' position is that plaintiff\'s alleged overlaps are exactly the sort of "random similarities" Cavalier and Litchfield say are insufficient.',
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
    "shaw",
    "swirsky",
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
    <div className={cn("flex h-full flex-col", className)}>
      {/* Sidebar Toggle */}
      <div className="absolute left-0 top-0 z-10 p-4">
        <button className="flex size-10 items-center justify-center rounded-md border border-[#e5e5e5] bg-white text-[#737373] hover:bg-[#f2f2f2]">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 pl-20">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
            SUPPORTING AUTHORITIES
          </p>
          <h1 className="text-2xl font-semibold text-[#212223]">
            Select the desired authories
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
            <div className="flex w-1/2 items-center gap-3 p-4">
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
              <span className="font-medium text-[#212223]">Citations</span>
              <span className="text-sm text-[#737373]">
                • {selectedCitations.length} selected
              </span>
            </div>
            <div className="w-1/2 border-l border-dashed border-[#d2d2d2] p-4">
              <span className="font-medium text-[#212223]">
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
                      <ExternalLink className="size-3.5 text-[#2e6b5c]" />
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
  );
}
