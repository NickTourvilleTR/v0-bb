"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Notebook, List, ScanEye, Plus, MessageSquarePlus, Pencil } from "lucide-react";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";

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
        citation: "974 F.3d 965, 974 (9th Cir. 2020)",
        badges: ["Substantial similarity", "Extrinsic/Intrinsic test"],
        description:
          "To establish copyright infringement, a plaintiff must demonstrate that the defendant copied protected elements of the work by satisfying both the extrinsic and intrinsic tests for substantial similarity. The extrinsic test is an objective comparison of specific expressive elements — including plot, theme, dialogue, mood, setting, pace, characters, and sequence of events — after filtering out unprotectable material such as facts, ideas, and scènes à faire; the intrinsic test asks whether an ordinary reasonable person would find the works substantially similar in their total concept and feel.",
        supportPoints: [
          "\"The substantial-similarity test contains an extrinsic and intrinsic component.\" Funky Films, Inc. v. Time Warner Ent. Co., L.P., 462 F.3d 1072, 1077 (9th Cir. 2006), overruled on other grounds by Skidmore, 952 F.3d 1051.",
          "The extrinsic test requires a three-step analysis: (1) the plaintiff identifies similarities between the copyrighted work and the accused work; (2) of those similarities, the court disregards any that are based on unprotectable material or authorized use; and (3) the court must determine the scope of protection (\"thick\" or \"thin\") to which the remainder is entitled \"as a whole.\" Apple Computer, 35 F.3d at 1443.",
          "The intrinsic test \"examines an ordinary person's subjective impressions of the similarities between two works,\" and involves questions of fact determined by the jury under instructions as to the level of protection applicable. Funky Films, 462 F.3d at 1077 (citing Shaw v. Lindheim, 919 F.2d 1353, 1360–61 (9th Cir. 1990)).",
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

interface JudicialClaim {
  id: string;
  title: string;
  plaintiffPoints: string[];
  defendantPoints: string[];
}

const judicialClaims: JudicialClaim[] = [
  {
    id: "breach-of-contract",
    title: "Breach of contract",
    plaintiffPoints: [
      "Plaintiff alleges they had a valid insurance contract with Richmond that required them to indemnify and pay benefits.",
      "Plaintiff claims they performed all required conditions under the policy and therefore expected coverage, peace of mind, and financial protection.",
      "Plaintiff says Defendant failed and refused to pay any benefits, causing damages.",
    ],
    defendantPoints: [
      "The policy only covers amounts the insured is legally required to pay as \"damages\", and Richmond argues these remediation expenses were voluntary cleanup costs, not court-ordered damages.",
      "Richmond says there was no lawsuit or court order requiring DG Plumbing to pay these amounts, so the claim falls outside the policy's insuring agreement.",
      "Richmond also argues DG Plumbing violated the policy's \"no voluntary payments\" provision by incurring remediation expenses without Richmond's consent, which independently bars coverage.",
    ],
  },
  {
    id: "bad-faith",
    title: "Bad faith",
    plaintiffPoints: [
      "Plaintiff alleges Richmond wrongfully withheld benefits due under the policy, including by denying the claim and delaying payment without proper cause.",
      "Richmond handled the claim unfairly by failing to investigate thoroughly, objectively, and fairly, delaying claim processing, misrepresenting policy terms, and failing to communicate properly.",
      "Plaintiff further alleges Richmond violated California insurance statutes and claims-handling regulations, and that its conduct was intentional, malicious, and oppressive.",
    ],
    defendantPoints: [
      "Under California law, a bad faith claim generally requires that the insurer first owed benefits under the policy.",
      "Because Richmond argues the policy did not cover the remediation expenses, it says DG Plumbing cannot show benefits were wrongfully withheld.",
      "Richmond characterizes the bad faith claim as a \"tagalong\" claim that rises or falls with the contract claim, so if the contract claim is dismissed, the bad faith claim should be dismissed too.",
    ],
  },
];

// Kept for brief flow
const judicialAuthorities: ArgumentAuthority[] = [];

interface SupportingAuthoritiesPanelProps {
  className?: string;
  onNextOutline?: () => void;
  onSkipToGenerateDraft?: () => void;
  onEditOutline?: () => void;
  flowType?: "brief" | "judicial";
}

export function SupportingAuthoritiesPanel({
  className,
  onNextOutline,
  onSkipToGenerateDraft,
  onEditOutline,
  flowType = "brief",
}: SupportingAuthoritiesPanelProps) {
  const [showOutlinePreview, setShowOutlinePreview] = React.useState(false);
  const [selectedCitations, setSelectedCitations] = React.useState<string[]>(["corbello", "biani"]);

  // Judicial: per-claim decision state
  const [decisions, setDecisions] = React.useState<Record<string, "plaintiff" | "defendant" | "neither" | null>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, null]))
  );
  const [comments, setComments] = React.useState<Record<string, string>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, "Motion to Dismiss denied"]))
  );
  const [editingComment, setEditingComment] = React.useState<Record<string, boolean>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, false]))
  );
  const [showComment, setShowComment] = React.useState<Record<string, boolean>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, false]))
  );

  const toggleCitation = (citationId: string) => {
    setSelectedCitations((prev) =>
      prev.includes(citationId)
        ? prev.filter((id) => id !== citationId)
        : [...prev, citationId]
    );
  };

  const authorities = defaultAuthorities;

  return (
    <div className={cn("flex h-full flex-col overflow-y-auto", className)}>
      {/* Main Content with sidebar */}
      <div className="mx-auto flex w-full max-w-5xl gap-6 px-6 py-8">
        {/* Left sidebar buttons - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
          <button onClick={() => setShowOutlinePreview(true)} className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <ScanEye className="size-5 text-[#1d4b34]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
              {flowType === "judicial" ? "DECIDE" : "SUPPORTING AUTHORITIES"}
            </p>
            <h1 className="text-2xl font-semibold text-[#212223]">
              {flowType === "judicial" ? "Indicate how you would like to resolve the disputes" : "Select the desired authorities"}
            </h1>
          </div>

        {/* Argument Sections */}
        {flowType === "judicial" ? (
          // Judicial: traditional two-column table + radio decisions
          judicialClaims.map((claim, claimIndex) => {
            const decision = decisions[claim.id];
            const isEditing = editingComment[claim.id];
            const commentVisible = showComment[claim.id];

            return (
              <div key={claim.id} className={claimIndex > 0 ? "mt-10" : ""}>
                {/* Section heading */}
                <h2 className="mb-4 text-lg font-semibold text-[#212223]">{claim.title}</h2>

                {/* Table */}
                <div className="overflow-hidden rounded-lg border border-[#e5e5e5] bg-white">
                  {/* Table header */}
                  <div className="flex border-b border-[#e5e5e5]">
                    <div className="w-1/2 bg-[#f2f2f2] px-5 py-3">
                      <span className="text-sm font-semibold text-[#212223]">{"Plaintiff's claims"}</span>
                    </div>
                    <div className="w-1/2 border-l border-[#e5e5e5] bg-[#f2f2f2] px-5 py-3">
                      <span className="text-sm font-semibold text-[#212223]">{"Defendant's response"}</span>
                    </div>
                  </div>

                  {/* Table body - rows paired by index */}
                  {Array.from({ length: Math.max(claim.plaintiffPoints.length, claim.defendantPoints.length) }).map((_, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={cn("flex", rowIdx < Math.max(claim.plaintiffPoints.length, claim.defendantPoints.length) - 1 && "border-b border-[#e5e5e5]")}
                    >
                      <div className="w-1/2 px-5 py-4">
                        <p className="text-sm leading-relaxed text-[#212223]">{claim.plaintiffPoints[rowIdx] ?? ""}</p>
                      </div>
                      <div className="w-1/2 border-l border-[#e5e5e5] px-5 py-4">
                        <p className="text-sm leading-relaxed text-[#212223]">{claim.defendantPoints[rowIdx] ?? ""}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Radio options */}
                <div className="mt-4 flex items-center gap-6">
                  {(["plaintiff", "defendant", "neither"] as const).map((option) => {
                    const labels = { plaintiff: "Agree with Plaintiff", defendant: "Agree with Defendant", neither: "Neither" };
                    return (
                      <label key={option} className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name={`decision-${claim.id}`}
                          value={option}
                          checked={decision === option}
                          onChange={() => {
                            setDecisions((prev) => ({ ...prev, [claim.id]: option }));
                            if (option === "plaintiff") {
                              setShowComment((prev) => ({ ...prev, [claim.id]: true }));
                            } else {
                              setShowComment((prev) => ({ ...prev, [claim.id]: false }));
                              setEditingComment((prev) => ({ ...prev, [claim.id]: false }));
                            }
                          }}
                          className="accent-[#1d4b34]"
                        />
                        <span className="text-sm text-[#212223]">{labels[option]}</span>
                      </label>
                    );
                  })}
                </div>

                {/* Comment area - shown when Agree with Plaintiff selected */}
                {commentVisible && (
                  <div className="mt-3">
                    {isEditing ? (
                      <div className="flex flex-col gap-2">
                        <textarea
                          className="w-full rounded-lg border border-[#e5e5e5] px-4 py-3 text-sm text-[#212223] focus:border-[#1d4b34] focus:outline-none"
                          rows={3}
                          value={comments[claim.id]}
                          onChange={(e) => setComments((prev) => ({ ...prev, [claim.id]: e.target.value }))}
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="rounded-full bg-[#1d4b34] px-4 text-white hover:bg-[#163d2a]"
                            onClick={() => setEditingComment((prev) => ({ ...prev, [claim.id]: false }))}
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full border-[#e5e5e5] px-4 text-[#212223] hover:bg-[#f7f7f7]"
                            onClick={() => setEditingComment((prev) => ({ ...prev, [claim.id]: false }))}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3 rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3">
                        <p className="flex-1 text-sm text-[#212223]">{comments[claim.id]}</p>
                        <button
                          onClick={() => setEditingComment((prev) => ({ ...prev, [claim.id]: true }))}
                          className="shrink-0 text-[#737373] hover:text-[#212223]"
                        >
                          <Pencil className="size-4" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Add comment button - only shown when comment not visible */}
                {!commentVisible && (
                  <div className="mt-3">
                    <button
                      onClick={() => setShowComment((prev) => ({ ...prev, [claim.id]: true }))}
                      className="flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-sm text-[#212223] hover:bg-[#f7f7f7]"
                    >
                      <MessageSquarePlus className="size-4 text-[#737373]" />
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          // Brief flow: original checkbox-based citation tables
          authorities.map((authority, authorityIndex) => (
            <div key={authority.id} className={authorityIndex > 0 ? "mt-8" : ""}>
              <h2 className="mb-4 text-lg font-semibold text-[#212223]">
                {authorityIndex + 1}. {authority.title}
              </h2>
              <div className="rounded-lg border border-[#e5e5e5] bg-white">
                <div className="flex border-b border-[#e5e5e5]">
                  <div className="flex w-1/2 items-center gap-3 bg-[#f5f7f6] px-4 py-3">
                    <Checkbox
                      checked={authority.citations.every((c) => selectedCitations.includes(c.id))}
                      onCheckedChange={() => {
                        const allSelected = authority.citations.every((c) => selectedCitations.includes(c.id));
                        if (allSelected) {
                          setSelectedCitations((prev) => prev.filter((id) => !authority.citations.some((c) => c.id === id)));
                        } else {
                          setSelectedCitations((prev) => [...new Set([...prev, ...authority.citations.map((c) => c.id)])]);
                        }
                      }}
                      className="border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                    />
                    <span className="font-semibold text-[#212223]">Citations</span>
                    <span className="text-sm text-[#737373]">
                      • {authority.citations.filter((c) => selectedCitations.includes(c.id)).length} selected
                    </span>
                  </div>
                  <div className="w-1/2 border-l border-dashed border-[#d2d2d2] bg-white px-6 py-3">
                    <span className="font-medium text-[#737373]">How this supports the argument</span>
                  </div>
                </div>
                {authority.citations.map((citation, index) => (
                  <div key={citation.id} className={cn("flex", index < authority.citations.length - 1 && "border-b border-[#e5e5e5]")}>
                    <div className={cn("w-1/2 p-4", selectedCitations.includes(citation.id) ? "bg-[#f5f7f6]" : "bg-white")}>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedCitations.includes(citation.id)}
                          onCheckedChange={() => toggleCitation(citation.id)}
                          className="mt-0.5 border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5">
                            <a href="#" className="font-medium text-[#2e6b5c] hover:underline">{citation.name}</a>
                            <Notebook className="size-3.5 text-[#2e6b5c]" />
                          </div>
                          <p className="text-sm text-[#737373]">{citation.citation}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {citation.badges.map((badge) => (
                              <span key={badge} className="rounded bg-[#ebf0ed] px-2 py-0.5 text-xs text-[#1d4b34]">{badge}</span>
                            ))}
                          </div>
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-[#212223]">What this case is about:</p>
                            <p className="mt-1 text-sm text-[#212223]">{citation.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cn("w-1/2 border-l border-dashed border-[#d2d2d2] p-4 pl-6", selectedCitations.includes(citation.id) ? "bg-[#f5f7f6]" : "bg-white")}>
                      <ul className="list-disc space-y-4 pl-4 marker:text-[#212223]">
                        {citation.supportPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-sm leading-relaxed text-[#212223]">{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-3 pb-8 pt-6">
            <Button
              variant="outline"
              onClick={onSkipToGenerateDraft}
              className="rounded-full border-[#cccccc] px-6 text-[#212223] hover:bg-[#f7f7f7]"
            >
              Skip to generate draft
            </Button>
            <Button
              onClick={onNextOutline}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Next: Outline
            </Button>
          </div>
        </div>
      </div>
      {/* Floating Action Button */}
      <button className="fixed bottom-8 left-20 flex items-center gap-2 rounded-full bg-[#1d4b34] px-4 py-2.5 text-white shadow-lg hover:bg-[#163d2a]">
        <Plus className="size-4" />
        <span className="text-sm font-medium">Add authorities</span>
      </button>

      {showOutlinePreview && (
        <OutlinePreviewModal
          onClose={() => setShowOutlinePreview(false)}
          onEdit={() => {
            setShowOutlinePreview(false);
            onEditOutline?.();
          }}
        />
      )}
    </div>
  );
}
