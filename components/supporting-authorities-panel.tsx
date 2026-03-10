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
        badges: ["Frequently cited"],
        description:
          "Established framework for analyzing substantial similarity in copyright cases involving creative works",
        supportPoints: [
          "Swirsky reinforced that similarities must be evaluated at the level of protected expression, not mere ideas or concepts.",
          "The court emphasized that common themes and stock elements cannot form the basis of infringement claims.",
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
  const [expandedArgument, setExpandedArgument] = React.useState<string>("1");

  const toggleCitation = (citationId: string) => {
    setSelectedCitations((prev) =>
      prev.includes(citationId)
        ? prev.filter((id) => id !== citationId)
        : [...prev, citationId]
    );
  };

  const currentAuthority = defaultAuthorities.find(
    (a) => a.id === expandedArgument
  );

  return (
    <div className={cn("flex h-full flex-col", className)}>
      {/* Sidebar Toggle - matching ArgumentsPanel */}
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
            Select the desired authorities
          </h1>
        </div>

        {/* Argument Section */}
        {currentAuthority && (
          <div>
            <h2 className="mb-4 text-lg font-semibold text-[#212223]">
              1. {currentAuthority.title}
            </h2>

            {/* Two Column Layout */}
            <div className="flex gap-4">
              {/* Left Column - Citations */}
              <div className="w-1/2 rounded-lg border border-[#e5e5e5] bg-white">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-[#e5e5e5] p-4">
                  <Checkbox
                    checked={
                      selectedCitations.length ===
                      currentAuthority.citations.length
                    }
                    onCheckedChange={() => {
                      if (
                        selectedCitations.length ===
                        currentAuthority.citations.length
                      ) {
                        setSelectedCitations([]);
                      } else {
                        setSelectedCitations(
                          currentAuthority.citations.map((c) => c.id)
                        );
                      }
                    }}
                    className="border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                  />
                  <span className="font-medium text-[#212223]">Citations</span>
                  <span className="text-sm text-[#737373]">
                    • {selectedCitations.length} selected
                  </span>
                </div>

                {/* Citation Items */}
                <div className="divide-y divide-[#e5e5e5]">
                  {currentAuthority.citations.map((citation) => (
                    <div
                      key={citation.id}
                      className={cn(
                        "p-4 transition-colors",
                        selectedCitations.includes(citation.id)
                          ? "bg-[#f5f7f6]"
                          : "bg-white"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedCitations.includes(citation.id)}
                          onCheckedChange={() => toggleCitation(citation.id)}
                          className="mt-1 border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <a
                              href="#"
                              className="font-medium text-[#2e6b5c] hover:underline"
                            >
                              {citation.name}
                            </a>
                            <ExternalLink className="size-3.5 text-[#2e6b5c]" />
                          </div>
                          <p className="text-xs text-[#737373]">
                            {citation.citation}
                          </p>
                          {/* Badges */}
                          <div className="mt-2 flex flex-wrap gap-1">
                            {citation.badges.map((badge) => (
                              <span
                                key={badge}
                                className="rounded border border-[#e5e5e5] bg-white px-2 py-0.5 text-xs text-[#212223]"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          {/* Description */}
                          <div className="mt-3">
                            <p className="text-sm font-medium text-[#212223]">
                              What this case is about:
                            </p>
                            <p className="mt-1 text-sm text-[#212223]">
                              {citation.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - How this supports */}
              <div className="w-1/2 rounded-lg border-l-4 border-dashed border-[#2e6b5c] bg-[#f5f7f6] p-4">
                <h3 className="mb-4 font-medium text-[#212223]">
                  How this supports the argument
                </h3>
                <ul className="space-y-4">
                  {currentAuthority.citations
                    .filter((c) => selectedCitations.includes(c.id))
                    .flatMap((c) => c.supportPoints)
                    .map((point, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#212223]" />
                        <p className="text-sm text-[#212223]">{point}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
