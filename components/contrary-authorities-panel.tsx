"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";

interface ContraryAuthority {
  id: string;
  caseName: string;
  citation: string;
  howToDistinguish: {
    intro: string;
    ruleLink?: { text: string; url: string };
    introEnd?: string;
    quote: string;
    quoteParts?: { text: string; bold?: boolean }[];
    citationLink?: { text: string; url: string };
  };
}

interface QuotePart {
  text: string;
  bold?: boolean;
}

const contraryAuthorities: ContraryAuthority[] = [
  {
    id: "1",
    caseName: "Hanagami v. Epic Games, Inc.",
    citation: "85 F.4th 931 (9th Cir. 2023)",
    howToDistinguish: {
      intro: "The Ninth Circuit reversed a ",
      ruleLink: { text: "Rule 12(b)(6)", url: "#" },
      introEnd: " dismissal of a choreography-vs-emote claim and squarely criticized deciding substantial similarity \"as a matter of law\" at the pleading stage:",
      quote: "\"Because the district court failed to assess the discrete combination of elements of the Registered Choreography, it erred in deciding as a matter of law at the motion-to-dismiss stage that the two works were not substantially similar.\"",
      citationLink: { text: "85 F.4th at 946", url: "#" },
    },
  },
  {
    id: "2",
    caseName: "Litchfield v. Spielberg",
    citation: "736 F.2d 1352 (9th Cir. 1984)",
    howToDistinguish: {
      intro: "This is formally about summary judgment, but it's routinely quoted for the general proposition that substantial similarity is a fact-heavy determination.",
      quote: "\"Substantial similarity is usually an extremely close issue of fact and summary judgment has been disfavored in cases involving intellectual property.\"",
      citationLink: { text: "736 F.2d at 1355", url: "#" },
    },
  },
  {
    id: "3",
    caseName: "ADAVCO, Inc. v. DeerTrail",
    citation: "(E.D. Cal. 2024)",
    howToDistinguish: {
      intro: "The court collects Ninth Circuit authority and emphasizes how low the bar is at the pleading stage:",
      quote: "\"The Court notes that copyright plaintiffs do not face a high bar in pleading substantial similarity under the extrinsic test.\"",
      quoteParts: [
        { text: "\"The Court notes that " },
        { text: "copyright plaintiffs do not face a high bar in pleading substantial similarity", bold: true },
        { text: " under the extrinsic test.\"" },
      ],
    },
  },
  {
    id: "4",
    caseName: "Milkcrate Athletics, Inc. v. Adidas",
    citation: "619 F. Supp. 3d 1009 (C.D. Cal. 2022)",
    howToDistinguish: {
      intro: "Judge Wilson denied a ",
      ruleLink: { text: "12(b)(6) motion", url: "#" },
      introEnd: " and cited Ninth Circuit precedent:",
      quote: "\"[I]n some situations, the Ninth Circuit disfavors dismissals on the ground of substantial similarity at the Rule 12(b)(6) stage....\"",
      quoteParts: [
        { text: "\"[I]n some situations, the Ninth Circuit " },
        { text: "disfavors dismissals on the ground of substantial similarity at the Rule 12(b)(6) stage", bold: true },
        { text: "....\"" },
      ],
      citationLink: { text: "619 F. Supp. 3d at 1021", url: "#" },
    },
  },
];

interface ContraryAuthoritiesPanelProps {
  className?: string;
}

export function ContraryAuthoritiesPanel({ className }: ContraryAuthoritiesPanelProps) {
  const [selectedAuthorities, setSelectedAuthorities] = React.useState<string[]>([]);

  const toggleAuthority = (id: string) => {
    setSelectedAuthorities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedAuthorities.length === contraryAuthorities.length) {
      setSelectedAuthorities([]);
    } else {
      setSelectedAuthorities(contraryAuthorities.map((a) => a.id));
    }
  };

  return (
    <div className={cn("p-6", className)}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-2">
          <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
            CONTRARY AUTHORITIES
          </p>
          <h1 className="text-2xl font-semibold text-[#212223]">
            Select the desired contrary authorities
          </h1>
        </div>

        {/* Argument Title */}
        <h2 className="mb-4 text-lg font-semibold text-[#212223]">
          1. Copyright Infringement Claim Fails as a Matter of Law
        </h2>

        {/* Table */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white">
          {/* Table Header */}
          <div className="flex border-b border-[#e5e5e5]">
            <div className="flex w-1/2 items-center gap-3 border-r border-dashed border-[#cccccc] p-4">
              <Checkbox
                checked={selectedAuthorities.length === contraryAuthorities.length && contraryAuthorities.length > 0}
                onCheckedChange={toggleAll}
                className="border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
              />
              <span className="font-medium text-[#212223]">Source</span>
              <span className="text-sm text-[#737373]">• {selectedAuthorities.length} selected to exclude</span>
            </div>
            <div className="w-1/2 p-4">
              <span className="font-medium text-[#212223]">How to distinguish</span>
            </div>
          </div>

          {/* Table Body */}
          {contraryAuthorities.map((authority, index) => (
            <div
              key={authority.id}
              className={cn(
                "flex",
                index !== contraryAuthorities.length - 1 && "border-b border-[#e5e5e5]"
              )}
            >
              {/* Left Column - Source */}
              <div className="flex w-1/2 items-start gap-3 border-r border-dashed border-[#cccccc] p-4">
                <Checkbox
                  checked={selectedAuthorities.includes(authority.id)}
                  onCheckedChange={() => toggleAuthority(authority.id)}
                  className="mt-1 border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                />
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-medium text-[#2e6b5c] hover:underline"
                  >
                    {authority.caseName}
                    <ExternalLink className="size-3.5" />
                  </a>
                  <p className="text-sm text-[#737373]">{authority.citation}</p>
                </div>
              </div>

              {/* Right Column - How to distinguish */}
              <div className="w-1/2 p-4">
                <p className="text-sm text-[#212223]">
                  {authority.howToDistinguish.intro}
                  {authority.howToDistinguish.ruleLink && (
                    <a
                      href={authority.howToDistinguish.ruleLink.url}
                      className="inline-flex items-center gap-0.5 text-[#2e6b5c] hover:underline"
                    >
                      {authority.howToDistinguish.ruleLink.text}
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                  {authority.howToDistinguish.introEnd}
                </p>
                <p className="mt-3 text-sm italic text-[#212223]">
                  {authority.howToDistinguish.quoteParts ? (
                    authority.howToDistinguish.quoteParts.map((part, i) => (
                      part.bold ? (
                        <strong key={i} className="font-semibold">{part.text}</strong>
                      ) : (
                        <span key={i}>{part.text}</span>
                      )
                    ))
                  ) : (
                    authority.howToDistinguish.quote
                  )}
                </p>
                {authority.howToDistinguish.citationLink && (
                  <a
                    href={authority.howToDistinguish.citationLink.url}
                    className="mt-2 inline-flex items-center gap-0.5 text-sm text-[#2e6b5c] hover:underline"
                  >
                    {authority.howToDistinguish.citationLink.text}
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
