"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Notebook, List, ScanEye, Plus, MessageSquarePlus, Pencil } from "lucide-react";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";

interface Citation {
  id: string;
  type: "authority" | "fact";
  description: string;
  caseName: string;
  caseRef: string;
  summary: string;
  relevance: string;
  needToKnow: string;
}

interface Authority {
  id: string;
  title: string;
  subTitle?: string;
  citations: Citation[];
}

const defaultAuthorities: Authority[] = [
  {
    id: "1",
    title: "Copyright Infringement Claim Fails as a Matter of Law",
    subTitle: "1A. No Investigation Within 15 Days",
    citations: [
      {
        id: "corbello",
        type: "authority",
        description: "Facts narrated in a memoir or autobiography are not subject to copyright protection, even if they are later incorporated into a fictional work.",
        caseName: "Corbello v. Valli",
        caseRef: "974 F.3d 965, 971, 976–77, 984 (9th Cir. 2020)",
        summary: "The Ninth Circuit rejected a copyright claim premised on alleged similarities between a Four Seasons member's autobiography and a popular musical about the band. The court held there was no infringement because the similarities involved purported facts from the author's real experiences as a band member, which were not copyrightable — even if the musical's writers used the author's historical research.",
        relevance: "Directly analogous. Love's complaint explicitly characterizes Eat the Lemon as a personal memoir and alleges that OIS took the 'detailed story of Love's highly personal experiences.' Under Corbello, those biographical facts cannot form the basis of a copyright claim regardless of whether they were later incorporated into Serle's fiction.",
        needToKnow: "Corbello distinguished between the unprotectable factual content of the autobiography and any original expressive choices in the writing itself. S&S may argue Love could still protect her specific prose — so the motion pairs this with the 'no substantial similarity' argument to foreclose both avenues.",
      },
      {
        id: "feist",
        type: "authority",
        description: "Copyright protection does not extend to facts, and no author may copyright the facts she narrates.",
        caseName: "Feist Publications, Inc. v. Rural Tel. Serv. Co.",
        caseRef: "499 U.S. 340, 344–45 (1991)",
        summary: "The Supreme Court established that copyright requires originality, and facts — no matter how diligently collected — are not original to the author. The principle applies equally to biographical and autobiographical facts.",
        relevance: "Provides the constitutional and statutory foundation for the biographical-facts argument. S&S uses Feist to establish that Love cannot own the facts of her own life by virtue of writing about them.",
        needToKnow: "Feist is universally known and will be difficult for Love to distinguish. Her best counterargument is that her specific creative expression of those facts (not the facts themselves) was copied — which is why the substantial similarity analysis is S&S's essential fallback.",
      },
      {
        id: "vallejo",
        type: "authority",
        description: "A plaintiff cannot claim copyright protection in the factual details of her life story recounted in a memoir, even where those details allegedly appear in a subsequent fictional work.",
        caseName: "Vallejo v. Narcos Prods. LLC",
        caseRef: "833 F. App'x 250, 257–58, 260–61 (11th Cir. 2020)",
        summary: "The Eleventh Circuit rejected a copyright claim by Pablo Escobar's former mistress based on alleged similarities between her memoir and scenes in the Netflix series Narcos, holding that she could not claim copyright protection in the facts recounted in her memoir.",
        relevance: "Supports Corbello with persuasive authority from another circuit on nearly identical facts: a woman's memoir about real personal experiences allegedly misappropriated into a popular entertainment property. Strengthens the argument that the rule is not a Ninth Circuit outlier.",
        needToKnow: "Eleventh Circuit authority is persuasive but not binding. Love may argue the Vallejo plaintiff's facts were more clearly 'public' historical events, whereas her story is more intimate. This distinction did not matter in Vallejo, but could be raised.",
      },
      {
        id: "complaint-fact",
        type: "fact",
        description: "Love's own complaint admits that Eat the Lemon is a personal memoir recounting the true facts of her life, and that OIS took 'the detailed story of Love's highly personal experiences.'",
        caseName: "Complaint ¶¶ 36, 75, 88, 210",
        caseRef: "",
        summary: "Love characterizes her work as a 'personal manuscript of her travels to Positano, Italy, to seek a connection to her mother after she died from mis-diagnosed cancer' and alleges that Serle 'effectively interjects herself into Love's life and stands in her shoes.' She even alleges that OIS used her real father's name, which does not appear in Eat the Lemon.",
        relevance: "Love's own pleading undermines her copyright claim by framing the alleged infringement entirely in terms of biographical facts rather than original creative expression. This locks her into the argument that her life story was taken — precisely the category of claim Corbello and Feist foreclose.",
        needToKnow: "This is S&S's strongest fact card. If Love attempts to re-frame at opposition as a claim about creative expression rather than biographical facts, she will contradict her own complaint, which courts disfavor at the pleading stage.",
      },
    ],
  },
];

interface JudicialClaim {
  id: string;
  title: string;
  plaintiffSummary: string;
  plaintiffPoints: string[];
  defendantSummary: string;
  defendantPoints: string[];
}

const judicialClaims: JudicialClaim[] = [
  {
    id: "breach-of-contract",
    title: "Breach of contract",
    plaintiffSummary: "Plaintiff claims Richmond National breached the insurance policy by failing to pay benefits for their remediation claims even though they say they complied with the policy.",
    plaintiffPoints: [
      "Plaintiff alleges they had a valid insurance contract with Richmond that required them to indemnify and pay benefits.",
      "Plaintiff claims they performed all required conditions under the policy and therefore expected coverage, peace of mind, and financial protection.",
      "Plaintiff says Defendant failed and refused to pay any benefits, causing damages.",
    ],
    defendantSummary: "Richmond argues the breach of contract claim fails because the policy did not cover DG Plumbing's remediation costs, so denying the claim was not a breach.",
    defendantPoints: [
      "The policy only covers amounts the insured is legally required to pay as \"damages\", and Richmond argues these remediation expenses were voluntary cleanup costs, not court-ordered damages.",
      "Richmond says there was no lawsuit or court order requiring DG Plumbing to pay these amounts, so the claim falls outside the policy's insuring agreement.",
      "Richmond also argues DG Plumbing violated the policy's \"no voluntary payments\" provision by incurring remediation expenses without Richmond's consent, which independently bars coverage.",
    ],
  },
  {
    id: "bad-faith",
    title: "Bad faith",
    plaintiffSummary: "Plaintiff claims Richmond acted in bad faith by unreasonably delaying, denying, and mishandling their insurance claim.",
    plaintiffPoints: [
      "Plaintiff alleges Richmond wrongfully withheld benefits due under the policy, including by denying the claim and delaying payment without proper cause.",
      "Richmond handled the claim unfairly by failing to investigate thoroughly, objectively, and fairly, delaying claim processing, misrepresenting policy terms, and failing to communicate properly.",
      "Plaintiff further alleges Richmond violated California insurance statutes and claims-handling regulations, and that its conduct was intentional, malicious, and oppressive.",
    ],
    defendantSummary: "Richmond argues the bad faith claim fails because there can be no bad faith if there was no coverage owed under the policy.",
    defendantPoints: [
      "Under California law, a bad faith claim generally requires that the insurer first owed benefits under the policy.",
      "Because Richmond argues the policy did not cover the remediation expenses, it says DG Plumbing cannot show benefits were wrongfully withheld.",
      "Richmond characterizes the bad faith claim as a \"tagalong\" claim that rises or falls with the contract claim, so if the contract claim is dismissed, the bad faith claim should be dismissed too.",
    ],
  },
];

// Kept for brief flow
const judicialAuthorities: Authority[] = [];

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

                  {/* Single content row */}
                  <div className="flex border-b border-[#e5e5e5]">
                    <div className="w-1/2 px-5 py-4">
                      <p className="mb-3 text-sm leading-relaxed text-[#212223]">{claim.plaintiffSummary}</p>
                      <ul className="space-y-2">
                        {claim.plaintiffPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed text-[#212223]">
                            <span className="mt-0.5 shrink-0 text-[#737373]">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-1/2 border-l border-[#e5e5e5] px-5 py-4">
                      <p className="mb-3 text-sm leading-relaxed text-[#212223]">{claim.defendantSummary}</p>
                      <ul className="space-y-2">
                        {claim.defendantPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed text-[#212223]">
                            <span className="mt-0.5 shrink-0 text-[#737373]">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Decision row — full width, header background, no column divider */}
                  <div className="bg-[#ebf0ed] px-5 py-4">
                    <p className="mb-3 text-sm font-semibold text-[#212223]">Decision:</p>
                    <div className="flex items-center gap-6">
                      {(["plaintiff", "defendant", "neither"] as const).map((option) => {
                        const labels = { plaintiff: "Agree with Plaintiff", defendant: "Agree with Defendant", neither: "Neither" };
                        const isFunctional = option === "plaintiff";
                        return (
                          <label key={option} className={cn("flex items-center gap-2", isFunctional ? "cursor-pointer" : "cursor-not-allowed")}>
                            <input
                              type="radio"
                              name={`decision-${claim.id}`}
                              value={option}
                              checked={decision === option}
                              onChange={() => {
                                if (!isFunctional) return;
                                setDecisions((prev) => ({ ...prev, [claim.id]: option }));
                                setShowComment((prev) => ({ ...prev, [claim.id]: true }));
                              }}
                              disabled={!isFunctional}
                              className={cn("accent-[#1d4b34]", !isFunctional && "cursor-not-allowed opacity-50")}
                            />
                            <span className={cn("text-sm", isFunctional ? "text-[#212223]" : "text-[#a3a3a3]")}>{labels[option]}</span>
                          </label>
                        );
                      })}
                    </div>

                    {/* Comment area */}
                    {commentVisible && (
                      <div className="mt-3">
                        {isEditing ? (
                          <div className="flex flex-col gap-2">
                            <textarea
                              className="w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#212223] focus:border-[#1d4b34] focus:outline-none"
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
                                className="rounded-full border-[#e5e5e5] bg-white px-4 text-[#212223] hover:bg-[#f7f7f7]"
                                onClick={() => setEditingComment((prev) => ({ ...prev, [claim.id]: false }))}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start gap-3 rounded-lg border border-[#e5e5e5] bg-white px-4 py-3">
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

                    {/* Add comment button */}
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
                </div>
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
                            <a href="#" className="font-medium text-[#2e6b5c] hover:underline">{citation.caseName}</a>
                            <span className={cn("text-xs font-semibold uppercase px-2 py-1 rounded", citation.type === "authority" ? "bg-[#ebf0ed] text-[#1d4b34]" : "bg-[#fef3f0] text-[#d64000]")}>{citation.type}</span>
                          </div>
                          {citation.caseRef && <p className="text-sm text-[#737373]">{citation.caseRef}</p>}
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-[#212223]">Summary:</p>
                            <p className="mt-1 text-sm text-[#212223]">{citation.summary}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cn("w-1/2 border-l border-dashed border-[#d2d2d2] p-4 pl-6", selectedCitations.includes(citation.id) ? "bg-[#f5f7f6]" : "bg-white")}>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-[#212223]">Relevance:</p>
                          <p className="mt-1 text-sm text-[#212223]">{citation.relevance}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#212223]">Need to know:</p>
                          <p className="mt-1 text-sm text-[#212223]">{citation.needToKnow}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-3 pb-8 pt-6">
            {flowType !== "judicial" && (
              <Button
                variant="outline"
                onClick={onSkipToGenerateDraft}
                className="rounded-full border-[#cccccc] px-6 text-[#212223] hover:bg-[#f7f7f7]"
              >
                Skip to generate draft
              </Button>
            )}
            <Button
              onClick={onNextOutline}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Next: Outline
            </Button>
          </div>
        </div>
      </div>
      {/* Outline Preview Overlay */}
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
