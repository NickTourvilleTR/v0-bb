"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  Undo2, 
  Redo2, 
  Minus, 
  Bold, 
  Italic, 
  Underline, 
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  Upload,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectionContextMenu, useSelectionContextMenu } from "@/components/selection-context-menu";

interface OutlineEditorProps {
  className?: string;
  onNextDraft?: () => void;
  flowType?: "brief" | "judicial";
}

export function OutlineEditor({ className, onNextDraft, flowType = "brief" }: OutlineEditorProps) {
  const allSectionIds = ["factual-procedural", "legal-standards", "analysis", "disposition", "tentative-ruling", "preliminary-statement", "factual-background", "argument", "conclusion"];
  const [expandedSections, setExpandedSections] = React.useState<string[]>(allSectionIds);
  const [zoom, setZoom] = React.useState(125);
  const zoomLevels = [75, 100, 125, 150, 175, 200];
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { position, hide } = useSelectionContextMenu(contentRef as React.RefObject<HTMLElement>);

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

        {/* Zoom control */}
        <div className="flex items-center">
          <button
            onClick={() => setZoom(z => Math.max(zoomLevels[0], zoomLevels[zoomLevels.indexOf(z) - 1] ?? zoomLevels[0]))}
            className="flex size-7 items-center justify-center rounded text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
          >
            <Minus className="size-3" />
          </button>
          <span className="min-w-[3rem] text-center text-sm text-[#212223]">{zoom}%</span>
          <button
            onClick={() => setZoom(z => Math.min(zoomLevels[zoomLevels.length - 1], zoomLevels[zoomLevels.indexOf(z) + 1] ?? zoomLevels[zoomLevels.length - 1]))}
            className="flex size-7 items-center justify-center rounded text-[#737373] hover:bg-[#f2f2f2] hover:text-[#212223]"
          >
            <Plus className="size-3" />
          </button>
        </div>
        
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
        {/* Header — above the white card, same width */}
        <div className="mx-auto mb-4" style={{ width: `min(${zoom}%, 800px)`, maxWidth: "calc(100% - 2rem)" }}>
          {flowType === "judicial" ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">Outline</p>
                <h1 className="text-2xl font-semibold text-[#212223]">Review and edit your outline</h1>
              </div>
              <button className="flex items-center gap-1.5 rounded-full border border-[#cccccc] px-3 py-1.5 text-xs text-[#212223] hover:bg-[#f2f2f2]">
                <Upload className="size-3" />
                Upload an outline
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">OUTLINE</p>
              <h1 className="text-3xl font-bold text-[#212223]">
                Motion to Dismiss First Amended Complaint
              </h1>
              <p className="text-lg text-[#737373]">
                Defendant Simon & Schuster, LLC Love v. Airbnb, Inc., et al., No. 2:25-cv-01779-AB(KSx) (C.D. Cal.)
              </p>
            </>
          )}
        </div>

        <div
          ref={contentRef}
          className="mx-auto rounded-lg border border-[#e5e5e5] bg-white p-6"
          style={{ width: `min(${zoom}%, 800px)`, maxWidth: "calc(100% - 2rem)" }}
        >

          {flowType === "judicial" ? (
            // JUDICIAL FLOW OUTLINE
            <>
              {/* Section I: FACTUAL AND PROCEDURAL BACKGROUND */}
              <div className="border-b border-[#e5e5e5]">
                <button
                  onClick={() => toggleSection("factual-procedural")}
                  className="flex w-full items-center justify-between py-4"
                >
                  <h2 className="text-lg font-semibold text-[#212223]">
                    I. FACTUAL AND PROCEDURAL BACKGROUND
                  </h2>
                  {expandedSections.includes("factual-procedural") ? (
                    <ChevronUp className="size-5 text-[#737373]" />
                  ) : (
                    <ChevronDown className="size-5 text-[#737373]" />
                  )}
                </button>

                {expandedSections.includes("factual-procedural") && (
                  <div className="pb-6 space-y-6">
                    {/* Subsection a: Plaintiff's Allegations */}
                    <div>
                      <h3 className="mb-2 text-base font-semibold text-[#212223]">
                        a. Plaintiff&apos;s Allegations
                      </h3>
                      <p className="text-sm text-[#212223]">
                        Plaintiff 516, Inc. dba DG Plumbing alleges that it was insured under a policy issued by Defendant Richmond National Insurance Company. Plaintiff contends the policy required Richmond to indemnify Plaintiff and pay benefits for covered losses. Plaintiff further alleges that it complied with all policy conditions and submitted claims relating to remediation losses, but Richmond failed and refused to pay benefits due under the policy.
                      </p>
                      <p className="mt-2 text-sm text-[#212223]">
                        Plaintiff also alleges Richmond acted in bad faith by unreasonably delaying and denying the claim, failing to investigate fairly and objectively, misrepresenting policy terms, delaying claim handling, and failing to communicate properly. Plaintiff alleges this conduct violated California insurance statutes and regulations and was intentional, malicious, and oppressive.
                      </p>
                    </div>

                    {/* Subsection b: Defendant's Motion */}
                    <div>
                      <h3 className="mb-2 text-base font-semibold text-[#212223]">
                        b. Defendant&apos;s Motion
                      </h3>
                      <p className="text-sm text-[#212223]">
                        Richmond moves to dismiss both claims. As to breach of contract, Richmond argues the policy covers only sums the insured is legally obligated to pay as &quot;damages,&quot; and that DG Plumbing&apos;s remediation costs were voluntary cleanup expenses rather than covered damages. Richmond further argues there was no lawsuit, judgment, or court order requiring Plaintiff to incur those expenses, and that Plaintiff violated the policy&apos;s no-voluntary-payments provision by incurring such costs without Richmond&apos;s consent.
                      </p>
                      <p className="mt-2 text-sm text-[#212223]">
                        As to bad faith, Richmond argues that a bad faith claim cannot stand absent a contractual duty to pay benefits. Because Richmond contends no coverage exists, it argues the bad faith claim necessarily fails.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            // BRIEF FLOW OUTLINE - Motion to Dismiss
            <>
              {/* Section I: PRELIMINARY STATEMENT */}
              <div className="border-b border-[#e5e5e5]">
                <button
                  onClick={() => toggleSection("preliminary-statement")}
                  className="flex w-full items-center justify-between py-4"
                >
                  <h2 className="text-lg font-semibold text-[#212223]">
                    I. PRELIMINARY STATEMENT
                  </h2>
                  {expandedSections.includes("preliminary-statement") ? (
                    <ChevronUp className="size-5 text-[#737373]" />
                  ) : (
                    <ChevronDown className="size-5 text-[#737373]" />
                  )}
                </button>
                {expandedSections.includes("preliminary-statement") && (
                  <div className="pb-6">
                    <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                      <li>
                        Plaintiff Adrienne Love alleges a vast conspiracy — encompassing the author, publisher, literary agents, editors, and a movie studio — to steal her life story as depicted in her unpublished memoir Eat the Lemon and exploit it in Rebecca Serle&apos;s novel One Italian Summer, published by S&S. <span className="text-[#737373]">(FAC ¶¶46-48)</span>
                      </li>
                      <li>
                        Love further alleges that the conspirators stalked her, sent strangers claiming to work for the FBI to confront her, and caused two mysterious deaths to intimidate her into silence. <span className="text-[#737373]">(FAC ¶¶63, 65)</span>
                      </li>
                      <li>
                        Love has now filed a First Amended Complaint that is substantially identical to her original complaint, asserting copyright infringement and 13 state law claims against S&S. <span className="text-[#737373]">(FAC ¶¶130-264)</span>
                      </li>
                      <li>
                        A complaint must be dismissed under Rule 12(b)(6) where it fails to state a claim for relief. The FAC&apos;s fatal defects are apparent from the face of the pleading and the works themselves, without any need for discovery. <span className="text-[#737373]">(FRCP 12(b)(6))</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-[#212223]">
                      Because (1) the two works are not substantially similar in protectable expression, (2) the state law claims lack specific allegations of conduct by S&S, and (3) many state law claims are untimely and/or preempted, the FAC should be dismissed with prejudice.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Section II */}
          {flowType === "judicial" ? (
            <div className="border-b border-[#e5e5e5]">
              <button
                onClick={() => toggleSection("legal-standards")}
                className="flex w-full items-center justify-between py-4"
              >
                <h2 className="text-lg font-semibold text-[#212223]">
                  II. APPLICABLE LEGAL STANDARDS
                </h2>
                {expandedSections.includes("legal-standards") ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>

              {expandedSections.includes("legal-standards") && (
                <div className="pb-6 space-y-6">
                  {/* a. Motion to Dismiss */}
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-[#212223]">
                      a. Motion to Dismiss
                    </h3>
                    <p className="text-sm text-[#212223]">
                      On a motion to dismiss, the court accepts well-pleaded factual allegations as true and construes them in the light most favorable to the plaintiff. The issue is not whether plaintiff will ultimately prevail, but whether plaintiff has stated a plausible claim for relief.
                    </p>
                  </div>

                  {/* b. Breach of Contract */}
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-[#212223]">
                      b. Breach of Contract
                    </h3>
                    <p className="text-sm text-[#212223]">
                      To state a claim for breach of contract, a plaintiff generally must allege:
                    </p>
                    <ol className="ml-6 mt-2 space-y-1 text-sm text-[#212223] list-decimal">
                      <li>the existence of a contract,</li>
                      <li>plaintiff&apos;s performance or excuse for nonperformance,</li>
                      <li>defendant&apos;s breach, and</li>
                      <li>resulting damages.</li>
                    </ol>
                  </div>

                  {/* c. Insurance Bad Faith */}
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-[#212223]">
                      c. Insurance Bad Faith
                    </h3>
                    <p className="text-sm text-[#212223]">
                      To state a bad faith claim, a plaintiff generally must allege:
                    </p>
                    <ol className="ml-6 mt-2 space-y-1 text-sm text-[#212223] list-decimal">
                      <li>benefits due under the policy were withheld, and</li>
                      <li>the withholding was unreasonable or without proper cause.</li>
                    </ol>
                    <p className="mt-2 text-sm text-[#212223]">
                      Where there is no potential policy benefit due, a bad faith claim generally cannot proceed. However, where coverage is sufficiently alleged and the insurer&apos;s conduct is alleged to have been unreasonable, dismissal at the pleading stage is not appropriate.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
          <div className="border-b border-[#e5e5e5]">
            <button
              onClick={() => toggleSection("factual-background")}
              className="flex w-full items-center justify-between py-4"
            >
              <h2 className="text-lg font-semibold text-[#212223]">
                II. FACTUAL BACKGROUND
              </h2>
              {expandedSections.includes("factual-background") ? (
                <ChevronUp className="size-5 text-[#737373]" />
              ) : (
                <ChevronDown className="size-5 text-[#737373]" />
              )}
            </button>

            {expandedSections.includes("factual-background") && (
              <div className="pb-6 space-y-6">
                {/* Subsection A: The Parties */}
                <div>
                  <h3 className="mb-3 text-base font-semibold text-[#212223]">A. The Parties</h3>
                  <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                    <li className="list-disc">Plaintiff Love authored Eat the Lemon, an unpublished personal memoir, registered with the Copyright Office in July 2020 and February 2021 draft versions; the work was completed in 2021.</li>
                    <li className="list-disc">S&S published One Italian Summer by Rebecca Serle, first announced in March 2021 (with a sample chapter released) and published in March 2022.</li>
                  </ul>
                </div>

                {/* Subsection B: The Alleged Conspiracy */}
                <div>
                  <h3 className="mb-3 text-base font-semibold text-[#212223]">B. The Alleged Conspiracy</h3>
                  <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                    <li className="list-disc">Love claims a network of conspirators, including her own trusted advisors, determined that her life story would be more profitably told by Serle and arranged to deliver her manuscript to Serle.</li>
                    <li className="list-disc">Love alleges the manuscript was shared with numerous parties in May–June 2019, then specifically sent to literary agents with connections to Serle in early 2020, and to an S&S editor in early 2021.</li>
                    <li className="list-disc">Love alleges the conspiracy extended to intimidation tactics: surveillance, strangers claiming FBI affiliation, and two unexplained deaths.</li>
                    <li className="list-disc">Love alleges that One Italian Summer both copied and distorted her life story — claiming simultaneously that it is an unlawful copy and that it was altered to cast her in a negative light.</li>
                    <li className="list-disc">Correspondence between Serle and her literary agent demonstrates that Serle formulated the concept and basic plot of One Italian Summer in June 2019, before Love&apos;s manuscript was supposedly circulating in her orbit.</li>
                  </ul>
                </div>

                {/* Subsection C: The Two Works Compared */}
                <div>
                  <h3 className="mb-3 text-base font-semibold text-[#212223]">C. The Two Works Compared</h3>
                  
                  <p className="mb-2 ml-2 text-sm font-medium text-[#212223]">Eat the Lemon</p>
                  <ul className="ml-8 mb-4 space-y-1 text-sm text-[#212223]">
                    <li className="list-disc">A personal memoir describing Love&apos;s true experiences processing her tumultuous family life and her mother&apos;s death (from cancer, a decade prior) through extended immersion in Italy&apos;s Amalfi Coast.</li>
                    <li className="list-disc">Love travels to the Amalfi Coast initially with her boyfriend Brad; later returns alone to locate her mother&apos;s former cooking teacher and complete her mother&apos;s cookbook.</li>
                    <li className="list-disc">Love&apos;s upbringing is depicted as deeply unhappy: her father abandoned the family, her stepfather was emotionally abusive and defrauded her, and her relationship with her mother is characterized as cold and loveless.</li>
                    <li className="list-disc">Love befriends Adele (a landlady) and her mother Rosa, who becomes a surrogate mother figure; Love eventually meets Marietta, the assistant to her mother&apos;s now-deceased cooking teacher, who shares happy memories of her mother.</li>
                    <li className="list-disc">The memoir spans approximately eighteen months across three separate trips to Italy; narrative structure is episodic/vignette-based with no driving plot toward resolution.</li>
                  </ul>

                  <p className="mb-2 ml-2 text-sm font-medium text-[#212223]">One Italian Summer</p>
                  <ul className="ml-8 space-y-1 text-sm text-[#212223]">
                    <li className="list-disc">An avowed work of fiction incorporating magical realism; narrator Katy&apos;s mother has just died of cancer and Katy travels alone to Positano for a trip they had planned together.</li>
                    <li className="list-disc">The central narrative device is Katy encountering and befriending a 30-year-old version of her mother — a person she never knew — in what turns out to be a different timeline (1992).</li>
                    <li className="list-disc">Katy&apos;s relationship with her mother was loving and defining; her character arc involves learning to see her mother as an independent person with her own desires and sacrifices.</li>
                    <li className="list-disc">Katy discovers her mother abandoned her as an infant to travel to Italy, leading to confrontation and eventual reconciliation; Katy also navigates a marital crisis and an affair in the alternate timeline.</li>
                    <li className="list-disc">The novel spans a few weeks; plot builds steadily toward multiple resolutions (mother relationship, marriage, hotel subplot).</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          )}

          {/* Section III */}
          {flowType === "judicial" ? (
            // JUDICIAL FLOW: ANALYSIS, DISPOSITION, AND TENTATIVE RULING
            <>
            <div className="border-b border-[#e5e5e5]">
              <button
                onClick={() => toggleSection("analysis")}
                className="flex w-full items-center justify-between py-4"
              >
                <h2 className="text-lg font-semibold text-[#212223]">
                  III. ANALYSIS
                </h2>
                {expandedSections.includes("analysis") ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>

              {expandedSections.includes("analysis") && (
                <div className="pb-6 space-y-6">
                  {/* a. FIRST CAUSE OF ACTION — BREACH OF CONTRACT */}
                  <div>
                    <h3 className="mb-3 text-base font-bold text-[#212223]">
                      a. FIRST CAUSE OF ACTION — BREACH OF CONTRACT
                    </h3>

                    <div className="mb-4">
                      <p className="mb-1 text-sm font-semibold text-[#212223]">1. Plaintiff&apos;s Pleading Is Facially Sufficient</p>
                      <p className="mb-2 text-sm text-[#212223]">Plaintiff alleges that:</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223] list-disc">
                        <li>a valid insurance contract existed,</li>
                        <li>Plaintiff performed all conditions required under the policy,</li>
                        <li>Richmond failed to pay benefits allegedly due for remediation-related losses, and</li>
                        <li>Plaintiff suffered damages as a result.</li>
                      </ul>
                      <p className="mt-2 text-sm text-[#212223]">These allegations satisfy the basic elements of a contract claim at the pleading stage.</p>
                    </div>

                    <div className="mb-4">
                      <p className="mb-2 text-sm font-semibold text-[#212223]">2. Defendant&apos;s Coverage Argument Does Not Defeat the Claim at This Stage</p>
                      <p className="mb-2 text-sm text-[#212223]">Richmond&apos;s principal argument is that the policy covers only amounts the insured is legally obligated to pay as &quot;damages,&quot; and that the claimed remediation expenses were merely voluntary cleanup costs. That may ultimately prove to be a meritorious coverage defense. However, on the record summarized here, the Court cannot conclude as a matter of law that the claimed losses fall outside the policy&apos;s coverage grant.</p>
                      <p className="mb-2 text-sm text-[#212223]">The key dispute is one of policy interpretation and factual characterization:</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223] list-disc">
                        <li>whether remediation expenses can qualify as covered &quot;damages,&quot;</li>
                        <li>whether such expenses were undertaken in response to legal liability or merely as voluntary mitigation,</li>
                        <li>and whether a formal lawsuit or court order is required before the insuring agreement is triggered.</li>
                      </ul>
                      <p className="mt-2 text-sm text-[#212223]">Absent policy language and facts that conclusively resolve those issues against Plaintiff on the face of the complaint, dismissal is premature.</p>
                    </div>

                    <div className="mb-4">
                      <p className="mb-2 text-sm font-semibold text-[#212223]">3. The No-Voluntary-Payments Argument Also Does Not Warrant Dismissal</p>
                      <p className="mb-2 text-sm text-[#212223]">Richmond also argues Plaintiff violated the policy&apos;s no-voluntary-payments provision by incurring remediation costs without Richmond&apos;s consent. But whether Plaintiff&apos;s conduct constituted impermissible voluntary payments, whether consent was required under the circumstances, and whether any exception or excuse applies are fact-dependent issues not appropriately resolved on a motion to dismiss unless clearly established by the pleadings.</p>
                      <p className="text-sm text-[#212223]">On the present allegations, Plaintiff&apos;s general assertion that it performed all conditions required under the policy is sufficient to withstand dismissal.</p>
                    </div>

                    <div className="mb-4">
                      <p className="mb-2 text-sm font-semibold text-[#212223]">4. Recommended Ruling as to Breach of Contract</p>
                      <p className="mb-2 text-sm text-[#212223]">Because Plaintiff has adequately pleaded the elements of breach of contract and Defendant&apos;s coverage defenses are not conclusively established at the pleading stage, the motion to dismiss the first cause of action should be denied.</p>
                      <p className="px-4 py-2 bg-[#f7f7f7] rounded text-sm font-semibold text-[#212223]">
                        Ruling: Motion to dismiss the breach of contract claim: DENIED.
                      </p>
                    </div>
                  </div>

                  {/* b. SECOND CAUSE OF ACTION — BAD FAITH */}
                  <div>
                    <h3 className="mb-3 text-base font-bold text-[#212223]">
                      b. SECOND CAUSE OF ACTION — BAD FAITH
                    </h3>

                    <div className="mb-4">
                      <p className="mb-2 text-sm font-semibold text-[#212223]">1. Defendant&apos;s Derivative Argument Fails Because the Contract Claim Survives</p>
                      <p className="mb-2 text-sm text-[#212223]">Richmond&apos;s primary argument is that the bad faith claim rises or falls with the contract claim. That proposition is generally correct insofar as a bad faith claim requires the withholding of policy benefits due. But because the Court concludes Plaintiff has sufficiently alleged a viable contract claim, Richmond&apos;s derivative challenge does not support dismissal.</p>
                    </div>

                    <div className="mb-4">
                      <p className="mb-2 text-sm font-semibold text-[#212223]">2. Plaintiff Alleges Unreasonable Claims Handling Beyond Mere Denial</p>
                      <p className="mb-2 text-sm text-[#212223]">Plaintiff does not rely solely on the fact of nonpayment. Plaintiff also alleges Richmond:</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223] list-disc">
                        <li>unreasonably delayed claim handling,</li>
                        <li>failed to conduct a thorough, objective, and fair investigation,</li>
                        <li>misrepresented policy terms,</li>
                        <li>and failed to communicate properly.</li>
                      </ul>
                      <p className="mt-2 text-sm text-[#212223]">Those allegations, though ultimately subject to proof, are sufficient at the pleading stage to state a plausible claim that Richmond&apos;s handling of the claim was unreasonable.</p>
                    </div>

                    <div className="mb-4">
                      <p className="mb-2 text-sm font-semibold text-[#212223]">3. Defendant&apos;s No-Coverage Position Does Not Eliminate the Claim at This Stage</p>
                      <p className="mb-2 text-sm text-[#212223]">Richmond may ultimately establish that no benefits were due under the policy, in which event the bad faith claim may fail. But at this juncture, the Court cannot determine as a matter of law that the claim was uncovered. Because potential coverage remains plausibly alleged, the bad faith claim may proceed.</p>
                    </div>

                    <div className="mb-4">
                      <p className="mb-2 text-sm font-semibold text-[#212223]">4. Recommended Ruling as to Bad Faith</p>
                      <p className="mb-2 text-sm text-[#212223]">Given that the contract claim survives and Plaintiff has alleged unreasonable investigation, delay, denial, and misrepresentation, the bad faith claim is adequately pleaded.</p>
                      <p className="px-4 py-2 bg-[#f7f7f7] rounded text-sm font-semibold text-[#212223]">
                        Ruling: Motion to dismiss the bad faith claim: DENIED.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section IV: RECOMMENDED DISPOSITION */}
            <div className="border-b border-[#e5e5e5]">
              <button
                onClick={() => toggleSection("disposition")}
                className="flex w-full items-center justify-between py-4"
              >
                <h2 className="text-lg font-semibold text-[#212223]">
                  IV. RECOMMENDED DISPOSITION
                </h2>
                {expandedSections.includes("disposition") ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>

              {expandedSections.includes("disposition") && (
                <div className="pb-6">
                  <p className="mb-3 text-sm text-[#212223]">
                    Defendant Richmond National Insurance Company&apos;s motion to dismiss should be resolved as follows:
                  </p>
                  <ol className="ml-6 space-y-2 text-sm text-[#212223] list-decimal">
                    <li>
                      <span>First Cause of Action – Breach of Contract:</span>
                      <br />
                      <span className="font-semibold">DENIED</span>
                    </li>
                    <li>
                      <span>Second Cause of Action – Bad Faith:</span>
                      <br />
                      <span className="font-semibold">DENIED</span>
                    </li>
                  </ol>
                </div>
              )}
            </div>

            {/* Section V: PROPOSED TENTATIVE RULING */}
            <div>
              <button
                onClick={() => toggleSection("tentative-ruling")}
                className="flex w-full items-center justify-between py-4"
              >
                <h2 className="text-lg font-semibold text-[#212223]">
                  V. PROPOSED TENTATIVE RULING
                </h2>
                {expandedSections.includes("tentative-ruling") ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>

              {expandedSections.includes("tentative-ruling") && (
                <div className="pb-6 space-y-3">
                  <p className="font-semibold text-sm text-[#212223]">Tentative Ruling:</p>
                  <p className="text-sm text-[#212223]">
                    Defendant&apos;s motion to dismiss is <span className="font-semibold">DENIED</span> as to both the breach of contract claim and the bad faith claim.
                  </p>
                  <p className="text-sm text-[#212223]">
                    Plaintiff has sufficiently alleged the existence of an insurance contract, its own performance, Defendant&apos;s refusal to pay benefits, and resulting damages. Defendant&apos;s arguments that the claimed remediation expenses do not constitute covered &quot;damages,&quot; and that Plaintiff violated the policy&apos;s no-voluntary-payments provision, depend on policy interpretation and factual determinations not properly resolved on the pleadings alone.
                  </p>
                  <p className="text-sm text-[#212223]">
                    The bad faith claim likewise survives. Because the Court declines to dismiss the contract claim, Defendant&apos;s argument that bad faith fails for lack of coverage is unavailing at this stage. Plaintiff also alleges unreasonable delay, inadequate investigation, misrepresentation, and improper claims handling, which are sufficient to state a plausible claim for bad faith.
                  </p>
                </div>
              )}
            </div>
            </>
          ) : (
            // BRIEF FLOW: ARGUMENT
            <>
            <div className="border-b border-[#e5e5e5]">
              <button
                onClick={() => toggleSection("argument")}
                className="flex w-full items-center justify-between py-4"
              >
                <h2 className="text-lg font-semibold text-[#212223]">
                  III. ARGUMENT
                </h2>
                {expandedSections.includes("argument") ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>
              {expandedSections.includes("argument") && (
                <div className="space-y-6 pb-6">
                  {/* Subsection A: Copyright Infringement */}
                  <div>
                    <h3 className="mb-4 text-base font-semibold text-[#212223]">
                      A. Love&apos;s Copyright Infringement Claim Fails as a Matter of Law
                    </h3>
                    
                    {/* Subsubsection 1: Biographical Facts */}
                    <div className="mb-6 ml-4">
                      <h4 className="mb-3 text-sm font-semibold text-[#212223]">1. The Alleged Similarities Involve Biographical Facts Not Subject to Copyright Protection</h4>
                      <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                        <li>To state a copyright infringement claim, a plaintiff must plead copying of copyrighted material and unlawful appropriation. Woodland v. Hill, 136 F.4th 1199, 1205 (9th Cir. 2025).</li>
                        <li>Copyright protects original expression, not facts. &quot;No author may copyright . . . the facts he narrates.&quot; Feist Publ&apos;ns, Inc. v. Rural Tel. Serv. Co., 499 U.S. 340, 344–45 (1991).</li>
                        <li>Courts have denied copyright protection to facts set forth in biographical works, including memoirs and autobiographies. 1 Nimmer on Copyright § 2.11 (2025).</li>
                        <li>Corbello v. Valli, 974 F.3d 965, 984 (9th Cir. 2020): where a work is &quot;emphatic[ally]&quot; represented as nonfiction autobiography, a fictional work does not infringe even if it draws on the autobiographical facts recounted; Vallejo v. Narcos Prods. LLC, 833 F. App&apos;x 250 (11th Cir. 2020) (same as to memoir of Pablo Escobar&apos;s mistress vs. Narcos); Hathaway v. Caputo, 2021 WL 1862248 (D. Ariz. 2021); Newt v. Twentieth Century Fox, 2016 WL 4059691 (C.D. Cal. 2016); Eggleston v. Twentieth Century Fox, 2022 WL 3371601 (E.D. Mich. 2022).</li>
                        <li>Love&apos;s FAC explicitly characterizes Eat the Lemon as a &quot;personal memoir based on her own life&quot; and alleges that One Italian Summer &quot;interjects [Serle] into Love&apos;s life&quot; and is &quot;replete with intricate personal details from Love&apos;s life.&quot; Love further alleges that friends told her the novel &quot;was Love&apos;s story&quot; and that One Italian Summer gave Katy&apos;s father the same name as Love&apos;s real-life father.</li>
                        <li>Every alleged similarity between the two works — the mother dying of cancer, the Italy trips, the cooking teacher connection — corresponds to facts Love herself represented as true biographical events.</li>
                      </ul>
                      <p className="mt-3 text-sm text-[#212223]">
                        Because the alleged similarities are biographical facts rather than original creative expression, they are categorically unprotectable under copyright law, and the infringement claim fails on this threshold basis alone.
                      </p>
                    </div>

                    {/* Subsubsection 2: No Substantial Similarity */}
                    <div className="ml-4">
                      <h4 className="mb-3 text-sm font-semibold text-[#212223]">2. Even Treating Eat the Lemon as Fiction, the Works Are Not Substantially Similar</h4>
                      
                      {/* Standard */}
                      <div className="mb-4">
                        <p className="mb-2 text-sm font-medium text-[#737373]">Standard</p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                          <li>To survive a motion to dismiss, a plaintiff must satisfy both the extrinsic and intrinsic tests for substantial similarity. Skidmore v. Led Zeppelin, 952 F.3d 1051, 1064 (9th Cir. 2020).</li>
                          <li>The extrinsic test — which focuses on &quot;articulable similarities between the plot, themes, dialogue, mood, setting, pace, characters, and sequence of events&quot; — may be decided by the court as a matter of law at the pleading stage. Woodland, 136 F.4th at 1210; Funky Films v. Time Warner Ent. Co., 462 F.3d 1072, 1077 (9th Cir. 2006).</li>
                          <li>The first step is to filter out unprotectable elements: ideas, historical facts, common phrases, scenes-a-faire, and stock themes. Corbello, 974 F.3d at 975.</li>
                          <li>Dismissal with prejudice is appropriate where the deficiency stems from the &quot;fundamental characteristics of the works themselves&quot; rather than pleading deficiency. Eden Film Prod. LLC v. Lockjaw LLC, 2025 WL 1386018, at *7 (C.D. Cal. 2025).</li>
                        </ul>
                      </div>

                      {/* a. Plot and Sequence of Events */}
                      <div className="mb-4 ml-4">
                        <p className="mb-2 text-sm font-medium text-[#212223]">a. Plot and Sequence of Events</p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                          <li>&quot;No one can own the basic idea for a story. General plot ideas are not protected by copyright law.&quot; Berkic v. Crichton, 761 F.2d 1289, 1293 (9th Cir. 1985). Courts compare &quot;the actual concrete elements that make up the total sequence of events,&quot; not general premises. Funky Films, 462 F.3d at 1077.</li>
                          <li>Courts routinely reject substantial similarity claims where works&apos; plotlines had similarities &quot;but developed quite differently.&quot; Whitehead v. Netflix, Inc., 2022 WL 17342602, at *15 (N.D. Cal. 2022). See also Biani v. Showtime Networks, 2025 WL 2586647 (9th Cir. 2025); Benay v. Warner Bros., 607 F.3d 620 (9th Cir. 2010); Funky Films, 462 F.3d at 1078.</li>
                          <li>Scenes-a-faire that &quot;flow naturally or necessarily from a basic plot premise&quot; are not protectable. Corbello, 974 F.3d at 975. A &quot;compilation of random similarities scattered throughout the works&quot; cannot justify a finding of substantial similarity. Cavalier v. Random House, 297 F.3d 815, 825 (9th Cir. 2002).</li>
                          <li>The sole overlapping premise is a woman who travels alone to the Amalfi Coast to connect with her deceased mother — a general, unprotectable plot point. Love herself acknowledged in her 2020 draft that &quot;another American woman finds herself in Italy&quot; is &quot;[w]hat could possibly be more cliché?&quot;</li>
                          <li>One Italian Summer&apos;s central developments — time travel, meeting a younger version of one&apos;s mother, discovering an infant abandonment — have no counterpart in Eat the Lemon. Eat the Lemon&apos;s central developments — finding a surrogate family, meeting someone with happy memories of the mother — have no counterpart in One Italian Summer.</li>
                          <li>Superficial alleged similarities (leaving a partner behind, meeting a love interest, cooking with a mother figure, Amalfi lemons, Frank Sinatra music, golden imagery, a boat driver named Antonio, Aveeno face cream) are either scenes-a-faire flowing from the Amalfi Coast setting, or random scattered details that develop entirely differently in context.</li>
                      </ul>
                      <p className="mt-3 text-sm text-[#212223]">
                        Beyond the unprotectable common premise, the plots and sequences of events in the two works are wholly different and share no protectable expression.
                      </p>
                    </div>

                      {/* b. Characters */}
                      <div className="mb-4 ml-4">
                        <p className="mb-2 text-sm font-medium text-[#212223]">b. Characters</p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                          <li>Literary characters are generally not subject to copyright protection unless &quot;especially distinctive.&quot; Olson v. NBC, 855 F.2d 1446, 1451–52 (9th Cir. 1988).</li>
                          <li>Minor characters cannot anchor a substantial similarity finding. Cavalier, 297 F.3d at 825.</li>
                          <li>Both protagonists grieve a mother lost to cancer — a general, unprotectable plot point. Otherwise, the characters are opposites: Love endured abandonment, abuse, and a cold relationship with her mother; Katy had a loving, defining bond with her mother and an intact family.</li>
                          <li>The mother characters are likewise distinct: in One Italian Summer, the mother is warm and domestically accomplished but independently ambitious; in Eat the Lemon, the mother is cold, unhappy, and defined by her connection to Italian cooking. A critical plot point in Eat the Lemon is Love&apos;s surprise at learning her mother was ever happy.</li>
                          <li>Alleged similarities between minor characters (love interest Peppe vs. Adam; a &quot;beautiful&quot; hotel manager) are unremarkable scenes-a-faire of travel stories.</li>
                        </ul>
                        <p className="mt-3 text-sm text-[#212223]">
                          No protectable character similarities exist between the two works.
                        </p>
                      </div>

                      {/* c. Dialogue */}
                      <div className="mb-4 ml-4">
                        <p className="mb-2 text-sm font-medium text-[#212223]">c. Dialogue</p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                          <li>Love alleges no similar dialogue between the two works.</li>
                        </ul>
                        <p className="mt-3 text-sm text-[#212223]">
                          This element provides no basis for a substantial similarity finding.
                        </p>
                      </div>

                      {/* d. Setting */}
                      <div className="mb-4 ml-4">
                        <p className="mb-2 text-sm font-medium text-[#212223]">d. Setting</p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                          <li>&quot;[T]he mere fact that&quot; two works are &quot;set in the same city does not give rise to a finding of substantial similarity.&quot; Silas v. HBO, 201 F. Supp. 3d 1158, 1176 (C.D. Cal. 2016). A setting that &quot;naturally and necessarily flows from the basic plot premise . . . constitutes scenes-a-faire.&quot; Cavalier, 297 F.3d at 824.</li>
                        <li>One Italian Summer is set entirely in Positano; Eat the Lemon ranges widely across the Amalfi Coast, with the protagonist staying in a rental apartment, not a hotel. The temporal settings also differ: Eat the Lemon is set entirely in the present; One Italian Summer operates across two timelines, one in the present and one in 1992.</li>
                        </ul>
                        <p className="mt-3 text-sm text-[#212223]">
                          No protectable setting similarities exist between the two works.
                        </p>
                      </div>

                      {/* e. Theme */}
                      <div className="mb-4 ml-4">
                        <p className="mb-2 text-sm font-medium text-[#212223]">e. Theme</p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                          <li>A general theme &quot;too general to be protectible for the purposes of the extrinsic test&quot; cannot support a substantial similarity finding. Masterson v. Walt Disney Co., 821 F. App&apos;x 779, 782 (9th Cir. 2020).</li>
                          <li>The general theme of a woman finding connection with her deceased mother by visiting Italy is unprotectable. Beyond that, the thematic concerns are opposite: One Italian Summer is about dismantling an idealized image of a beloved mother; Eat the Lemon is about overcoming deeply unhappy memories of a cold, difficult mother.</li>
                        </ul>
                        <p className="mt-3 text-sm text-[#212223]">
                          No protectable thematic similarities exist between the two works.
                        </p>
                      </div>

                      {/* f. Mood and Pace */}
                      <div className="ml-4">
                        <p className="mb-2 text-sm font-medium text-[#212223]">f. Mood and Pace</p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                          <li>One Italian Summer is driven by plot twists, drama, and suspense across a compressed timeline of a few weeks. Eat the Lemon is a darker, trauma-inflected work told as episodic vignettes across eighteen months, with no driving plotlines toward resolution.</li>
                        </ul>
                        <p className="mt-3 text-sm text-[#212223]">
                          The mood and pace of the two works are fundamentally different and share no protectable expression.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subsection B: State Law Claims */}
                  <div>
                    <h3 className="mb-4 text-base font-semibold text-[#212223]">
                      B. Love&apos;s State Law Claims Fail as to S&S
                    </h3>
                    
                    {/* 1. Conspiracy Allegations Implausible */}
                    <div className="mb-6 ml-4">
                      <h4 className="mb-3 text-sm font-semibold text-[#212223]">1. The Conspiracy Allegations Are Fundamentally Implausible</h4>
                      <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                        <li>A complex conspiracy to commit and conceal infringement is implausible where, as a matter of law, no infringement occurred. Briggs v. Cameron, 2020 WL 6118493, at *3 (N.D. Cal. 2020).</li>
                        <li>Every one of Love&apos;s 13 state law claims is predicated on the alleged conspiracy to infringe her copyright and intimidate her into silence about it.</li>
                      </ul>
                      <p className="mt-3 text-sm text-[#212223]">
                        Because no infringement occurred as a matter of law, the entire conspiratorial premise of Love&apos;s state law claims is implausible, and each claim fails on this basis.
                      </p>
                    </div>

                    {/* 2. No Specific Conduct by S&S */}
                    <div className="mb-6 ml-4">
                      <h4 className="mb-3 text-sm font-semibold text-[#212223]">2. Love Has Not Alleged Specific Conduct by S&S</h4>
                      <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                        <li>&quot;Everyone did everything&quot; group pleading is improper and warrants dismissal. Destfino v. Reiswig, 630 F.3d 952, 958–59 (9th Cir. 2011). A plaintiff &quot;must identify what action each Defendant took that caused Plaintiffs&apos; harm.&quot; Sebastian Brown Prods. v. Muzooka, 143 F. Supp. 3d 1026, 1037 (N.D. Cal. 2015).</li>
                        <li>The only S&S-specific allegations are: (1) S&S published One Italian Summer; (2) one S&S editor is married to a former Love literary agent; and (3) another S&S editor rejected Love&apos;s manuscript two weeks before the One Italian Summer announcement.</li>
                        <li>Individual state law claims fail for the following additional reasons:
                          <ul className="mt-2 ml-4 space-y-2 list-disc list-inside">
                            <li>Breach of Fiduciary Duty: A publisher that &quot;possessed and reviewed&quot; a manuscript did not thereby undertake to act on behalf of the author. Blatty v. Warner Bros., 2011 WL 13217379 (C.D. Cal. 2011).</li>
                            <li>Intentional/Tortious Interference: No allegations that S&S knew of or intentionally acted to disrupt any specific contract or business relationship. Disney Enters. v. Redbox, 2018 WL 1942139 (C.D. Cal. 2018); Celebrity Chefs Tour v. Macy&apos;s, 2015 WL 11237460 (S.D. Cal. 2015).</li>
                            <li>Intentional/Negligent Misrepresentation: No allegation that S&S made any specific misrepresentation to Love, or that she relied on one. Solo v. Dawson, 2010 WL 11508000 (C.D. Cal. 2010); Ryder v. Lightstorm, 246 Cal. App. 4th 1064 (2016).</li>
                            <li>Negligence: No allegation that S&S owed Love a duty of care or what it did to breach it. McCormick v. Sony Pictures, 2008 WL 11336160 (C.D. Cal. 2008).</li>
                            <li>Intentional Infliction of Emotional Distress: No allegation of &quot;extreme and outrageous&quot; conduct by S&S specifically. McCrudden v. DeMarco, 2022 WL 17369135 (C.D. Cal. 2022).</li>
                            <li>Stalking: No allegation of any conduct by S&S constituting a &quot;pattern&quot; of following, alarming, surveilling, or harassing Love. Cal. Civ. Code § 1708.7.</li>
                            <li>Civil Conspiracy: No allegation of an agreement involving S&S to engage in any tortious act. Idema v. Dreamworks, 162 F. Supp. 2d 1129, 1197 (C.D. Cal. 2001).</li>
                            <li>UCL § 17200: No adequately alleged predicate violation by S&S. Eidmann v. Walgreen Co., 522 F. Supp. 3d 634, 647 (N.D. Cal. 2021).</li>
                            <li>Accounting/Constructive Trust: Entirely derivative of the copyright claim, which fails as a matter of law. Glue-Fold v. Slautterback, 82 Cal. App. 4th 1018, 1023 n.3 (2000).</li>
                            <li>Declaratory Judgment: Love seeks a declaration regarding &quot;duties under alleged agreements,&quot; but alleges no agreements with S&S.</li>
                          </ul>
                        </li>
                      </ul>
                      <p className="mt-3 text-sm text-[#212223]">
                        Each state law claim fails independently for lack of any plausible, S&S-specific factual allegation sufficient to support liability.
                      </p>
                    </div>

                    {/* 3. Untimely and/or Preempted */}
                    <div className="ml-4">
                      <h4 className="mb-3 text-sm font-semibold text-[#212223]">3. Many State Law Claims Are Untimely and/or Preempted (Joining CAA&apos;s Motion)</h4>
                      <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                        <li>The following claims are time-barred: constructive trust, intentional interference with contractual relations, tortious interference with business advantage, negligence, IIED, and intentional and negligent misrepresentation. (As set forth in CAA&apos;s Motion to Dismiss, joined in full.)</li>
                        <li>The following claims are preempted by the Copyright Act: breach of fiduciary duty, intentional interference, tortious interference, negligence, IIED, civil conspiracy, UCL § 17200, accounting, and constructive trust. (As set forth in CAA&apos;s Motion to Dismiss, joined in full.)</li>
                      </ul>
                      <p className="mt-3 text-sm text-[#212223]">
                        Each of these claims is independently subject to dismissal on timeliness and/or preemption grounds.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section IV: CONCLUSION */}
            <div>
              <button
                onClick={() => toggleSection("conclusion")}
                className="flex w-full items-center justify-between py-4"
              >
                <h2 className="text-lg font-semibold text-[#212223]">
                  IV. CONCLUSION
                </h2>
                {expandedSections.includes("conclusion") ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>
              {expandedSections.includes("conclusion") && (
                <div className="pb-6">
                  <ul className="space-y-2 list-disc list-inside text-sm text-[#212223]">
                    <li>The copyright claim fails as a matter of law because (a) the alleged similarities involve unprotectable biographical facts, and (b) even under a fictional-work analysis, the two works share no substantial similarity in any protectable element — plot, characters, dialogue, setting, theme, mood, or pace.</li>
                    <li>The state law claims fail because (a) there is no underlying infringement to conspire to conceal; (b) Love has not alleged conduct by S&S specifically sufficient to support any of the asserted claims; and (c) many are untimely and/or preempted.</li>
                    <li className="font-medium">S&S respectfully requests dismissal of the First Amended Complaint with prejudice.</li>
                  </ul>
                </div>
              )}
            </div>
            </>
          )}

        </div>

        {/* Bottom Action Button — on gray background, outside white card */}
        <div className="flex items-center justify-center gap-3 py-8">
          <Button
            onClick={onNextDraft}
            className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
          >
            Next: Draft
          </Button>
        </div>
      </div>
      <SelectionContextMenu
        position={position}
        onAddFacts={hide}
        onAddAuthorities={hide}
        onAskQuestion={hide}
      />
    </div>
  );
}
