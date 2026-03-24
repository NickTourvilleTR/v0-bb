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
  ChevronUp,
  Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OutlineEditorProps {
  className?: string;
  onNextDraft?: () => void;
  flowType?: "brief" | "judicial";
}

export function OutlineEditor({ className, onNextDraft, flowType = "brief" }: OutlineEditorProps) {
  const [expandedSections, setExpandedSections] = React.useState<string[]>(flowType === "judicial" ? ["factual-procedural"] : ["factual-background"]);

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
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
              OUTLINE
            </p>
            {flowType === "judicial" && (
              <button className="flex items-center gap-1.5 rounded-full border border-[#cccccc] px-3 py-1.5 text-xs text-[#212223] hover:bg-[#f2f2f2]">
                <Upload className="size-3" />
                Upload an outline
              </button>
            )}
          </div>
          <h1 className="mb-6 text-2xl font-semibold text-[#212223]">
            Confirm your outline selections
          </h1>

          {/* Document Length */}
          <div className="mb-6 rounded bg-[#f7f7f7] px-4 py-2">
            <span className="text-sm text-[#212223]">Document length: {flowType === "judicial" ? "~15 pages" : "~17 pages"}</span>
          </div>

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
            // BRIEF FLOW OUTLINE
            <>
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
            <div className="border-b border-[#e5e5e5]">
              <button
                onClick={() => toggleSection("argument")}
                className="flex w-full items-center justify-between px-1 py-3 text-left"
              >
                <h2 className="text-lg font-bold text-[#212223]">
                  III. ARGUMENT
                </h2>
                {expandedSections.includes("argument") ? (
                  <ChevronUp className="size-5 text-[#737373]" />
                ) : (
                  <ChevronDown className="size-5 text-[#737373]" />
                )}
              </button>
              {expandedSections.includes("argument") && (
                <div className="space-y-6 pb-6 pl-4">
                {/* Subsection A: Copyright Infringement */}
                <div>
                  <h3 className="mb-4 text-base font-bold text-[#212223]">
                    A. Copyright Infringement Claim Fails as Matter of Law
                  </h3>
                  
                  {/* Paragraph 6 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm text-[#737373]">Paragraph 6:</p>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Selected arguments:</p>
                    <ul className="ml-6 mb-2 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Complaint fails to meet Twombly/Iqbal plausibility standard</li>
                      <li className="list-disc">Allegations are conclusory and lack factual support</li>
                    </ul>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Supporting authorities:</p>
                    <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Plaintiff must prove: (1) copying of copyrighted material; (2) unlawful appropriation <a href="#" className="text-[#0062c4] hover:underline">Benay v. Warner Bros. Ent., Inc., 607 F.3d 620 (9th Cir. 2010)</a></li>
                      <li className="list-disc">Unlawful appropriation requires "substantial similarity" in protected expression</li>
                      <li className="list-disc">Extrinsic test may be decided as matter of law at motion to dismiss stage <a href="#" className="text-[#0062c4] hover:underline">Berkic v. Crichton, 761 F.2d 1289 (9th Cir. 1985)</a></li>
                      <li className="list-disc">Court may consider works where judicially noticed and no substantial similarity exists <a href="#" className="text-[#0062c4] hover:underline">Biasi v. Sheehan Networks, Inc., ... 2025 WL 2086047 (Sept. 8, 2025)</a></li>
                    </ul>
                  </div>

                  {/* Paragraph 7 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm text-[#737373]">Paragraph 7:</p>
                    <p className="mb-2 text-sm font-medium text-[#212223]">2. Biographical Facts Are Not Protectable</p>
                    <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Love characterizes <em>Eat the Lemon</em> as "personal memoir based on her own life"</li>
                      <li className="list-disc">Alleges <em>One Italian Summer</em> contains "intricate personal details from Love's life"</li>
                      <li className="list-disc">Facts of one's life are not subject to copyright protection <a href="#" className="text-[#0062c4] hover:underline">Blatty v. Warner Bros. Ent., 2011 WL 13217379 (C.D. Cal. Apr. 21, 2011)</a></li>
                      <li className="list-disc">Courts reject copyright claims based on similarities between autobiographies and other works <a href="#" className="text-[#0062c4] hover:underline">Briggs v. Cameron, 2020 WL 6118493 (N.D. Cal. Oct. 16, 2020)</a></li>
                      <li className="list-disc">Example: <em>Corbello (Four Seasons autobiography)</em>, <em>Vollejo (Escobar mistress memoir)</em>, <em>Hathaway</em>, <em>Newt</em>, <em>Idema</em>, <em>Egleston</em></li>
                    </ul>
                  </div>

                  {/* Paragraph 8 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm text-[#737373]">Paragraph 8:</p>
                    <p className="mb-2 text-sm font-medium text-[#212223]">3. Even if Treated as Fiction, No Substantial Similarity</p>
                    
                    {/* a. Plot and Sequence */}
                    <div className="mb-3 ml-4">
                      <p className="mb-1 text-sm font-medium text-[#212223]">a. Plot and Sequence of Events</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                        <li className="list-disc">General plot ideas not protected; must compare concrete elements <a href="#" className="text-[#0062c4] hover:underline">Cavalier v. Random House, Inc., 297 F.3d 815 (9th Cir. 2002)</a></li>
                        <li className="list-disc">Only shared unprotectable premise: woman travels alone to Amalfi Coast seeking connection with deceased mother; <a href="#" className="text-[#0062c4] hover:underline">Capella Chef's Toa, LLC v. Macy's, Inc., 2016 WL 1122946 (C.S. Cal. Aug. 10, 2016)</a></li>
                        <li className="list-disc">Central developments vastly different:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li className="list-disc"><em>One Italian Summer</em>: Time travel, meeting young mother, discovering abandonment, confronting mother's independence</li>
                            <li className="list-disc"><em>Eat the Lemon</em>: Finding surrogate family, meeting person who knew happy mother</li>
                          </ul>
                        </li>
                        <li className="list-disc">Timing different: Katy leaves within week of death; Love travels decade later</li>
                        <li className="list-disc">Superficial similarities are scenes a faire flowing from premise</li>
                        <li className="list-disc">Storylines develop differently:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li className="list-disc">Reconciliation with husband (Katy) vs. no reunion (Love/Brad)</li>
                            <li className="list-disc">Prominent romance subplot (Katy/Adam) vs. peripheral relationship (Love/Peppe)</li>
                            <li className="list-disc">Cooking with literal mother (Katy) vs. mother figure (Love/Rosa)</li>
                          </ul>
                        </li>
                        <li className="list-disc">Random similarities cannot establish substantial similarity <a href="#" className="text-[#0062c4] hover:underline">Blatty v. Warner Bros. Ent., 2011 WL 13217379 (C.D. Cal. Apr. 21, 2011)</a></li>
                      </ul>
                    </div>

                    {/* b. Characters */}
                    <div className="mb-3 ml-4">
                      <p className="mb-1 text-sm text-[#737373]">Paragraph 9:</p>
                      <p className="mb-1 text-sm font-medium text-[#212223]">b. Characters</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                        <li className="list-disc">Characters generally not protected unless "especially distinctive" <a href="#" className="text-[#0062c4] hover:underline">Berkic v. Crichton, 761 F.2d 1289 (9th Cir. 1985)</a></li>
                        <li className="list-disc">Both protagonists grieve mother lost to cancer (unprotectable general plot point)</li>
                        <li className="list-disc">Characters portrayed quite differently:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li className="list-disc">Family context: Tumultuous upbringing (Love) vs. loving, happy family (Katy)</li>
                            <li className="list-disc">Mother relationships: Cold, unhappy memories (Love) vs. warm, close bond (Katy)</li>
                          </ul>
                        </li>
                        <li className="list-disc">Mother characters differ significantly:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li className="list-disc">Cooking relationship to Italy differs</li>
                            <li className="list-disc">Personality: Warm/happy (Katy's mother) vs. cold/unhappy (Love's mother)</li>
                          </ul>
                        </li>
                        <li className="list-disc">Minor character similarities unremarkable or scenes-a-faire</li>
                      </ul>
                    </div>

                    {/* c. Dialogue */}
                    <div className="mb-3 ml-4">
                      <p className="mb-1 text-sm text-[#737373]">Paragraph 10:</p>
                      <p className="mb-1 text-sm font-medium text-[#212223]">c. Dialogue</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                        <li className="list-disc">No similar dialogue alleged</li>
                      </ul>
                    </div>

                    {/* d. Setting */}
                    <div className="mb-3 ml-4">
                      <p className="mb-1 text-sm text-[#737373]">Paragraph 11:</p>
                      <p className="mb-1 text-sm font-medium text-[#212223]">d. Setting</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                        <li className="list-disc">Both set on Amalfi Coast (not protectable) <a href="#" className="text-[#0062c4] hover:underline">Blatty v. Warner Bros. Ent., 2011 WL 13217379 (C.D. Cal. Apr. 21, 2011)</a></li>
                        <li className="list-disc">Misleading characterization: Katy stays in Positano; Love travels widely</li>
                        <li className="list-disc">Love stays in rental apartment, not family-run hotel</li>
                        <li className="list-disc">Same city setting insufficient for substantial similarity</li>
                        <li className="list-disc">Temporal setting different: Present with flashbacks (Eat the Lemon) vs. dual timelines present/1992 (One Italian Summer)</li>
                      </ul>
                    </div>

                    {/* e. Theme */}
                    <div className="mb-3 ml-4">
                      <p className="mb-1 text-sm text-[#737373]">Paragraph 12:</p>
                      <p className="mb-1 text-sm font-medium text-[#212223]">e. Theme</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                        <li className="list-disc">General theme of connection to deceased mother not protectable <a href="#" className="text-[#0062c4] hover:underline">Briggs v. Cameron, 2020 WL 6118493 (N.D. Cal. Oct. 16, 2020)</a></li>
                        <li className="list-disc">Specific themes differ:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li className="list-disc"><em>One Italian Summer</em>: Seeing mother as independent person empowers self-realization</li>
                            <li className="list-disc"><em>Eat the Lemon</em>: Overcoming unhappy memories, experiencing real family for first time</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* f. Mood and Pace */}
                    <div className="mb-3 ml-4">
                      <p className="mb-1 text-sm text-[#737373]">Paragraph 13:</p>
                      <p className="mb-1 text-sm font-medium text-[#212223]">f. Mood and Pace</p>
                      <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                        <li className="list-disc">Mood significantly different:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li className="list-disc"><em>One Italian Summer</em>: Drama and suspense through plot twists</li>
                            <li className="list-disc"><em>Eat the Lemon</em>: Series of vignettes, much darker tone, trauma from cancer and abuse</li>
                          </ul>
                        </li>
                        <li className="list-disc">Pace different:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li className="list-disc"><em>One Italian Summer</em>: Few weeks, steady movement toward resolution</li>
                            <li className="list-disc"><em>Eat the Lemon</em>: Year and a half across three visits, no speeding toward resolution</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Paragraph 14 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm text-[#737373]">Paragraph 14:</p>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Selected arguments:</p>
                    <ul className="ml-6 mb-2 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Complaint fails to meet Twombly/Iqbal plausibility standard</li>
                      <li className="list-disc">Allegations are conclusory and lack factual support</li>
                    </ul>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Supporting authorities:</p>
                    <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">No substantial similarity in protected expression <a href="#" className="text-[#0062c4] hover:underline">Briggs v. Cameron, 2020 WL 6118493 (N.D. Cal. Oct. 16, 2020)</a></li>
                      <li className="list-disc">Dismissal with prejudice warranted where deficiencies stem from fundamental characteristics of works <a href="#" className="text-[#0062c4] hover:underline">Blatty v. Warner Bros. Ent., 2011 WL 13217379 (C.D. Cal. Apr. 21, 2011)</a></li>
                    </ul>
                  </div>
                </div>

                {/* Subsection B: State Law Claims */}
                <div>
                  <h3 className="mb-4 text-base font-bold text-[#212223]">
                    B. State Law Claims Fail as Matter of Law
                  </h3>

                  {/* Paragraph 15 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm text-[#737373]">Paragraph 15:</p>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Selected arguments:</p>
                    <ul className="ml-6 mb-2 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Complaint fails to meet Twombly/Iqbal plausibility standard</li>
                      <li className="list-disc">Allegations are conclusory and lack factual support</li>
                    </ul>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Supporting authorities:</p>
                    <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">All state law claims premised on conspiracy to infringe and intimidate <a href="#" className="text-[#0062c4] hover:underline">Benay v. Warner Bros. Ent., Inc., 607 F.3d 620 (9th Cir. 2010)</a></li>
                      <li className="list-disc">No copyright infringement occurred</li>
                      <li className="list-disc">Implausible that complex conspiracy existed to conceal non-existent infringement</li>
                    </ul>
                  </div>

                  {/* Paragraph 16 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm text-[#737373]">Paragraph 16:</p>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Selected arguments:</p>
                    <ul className="ml-6 mb-2 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Complaint fails to meet Twombly/Iqbal plausibility standard</li>
                      <li className="list-disc">Allegations are conclusory and lack factual support</li>
                    </ul>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Supporting authorities:</p>
                    <ul className="ml-6 mb-2 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Only allegations: Published book, editor married to former agent, editor rejected manuscript</li>
                      <li className="list-disc">Conclusory assertion S&S was "agent" insufficient</li>
                    </ul>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Specific defenses by claim:</p>
                    <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc"><strong>Breach of Fiduciary Duty:</strong> Possessing/reviewing manuscript cannot create fiduciary duty <a href="#" className="text-[#0062c4] hover:underline">Benay v. Warner Bros. Ent., Inc., 607 F.3d 620 (9th Cir. 2010)</a></li>
                      <li className="list-disc"><strong>Intentional Interference (Contractual/Business):</strong> No facts showing S&S knowledge or intentional disruption</li>
                      <li className="list-disc"><strong>Misrepresentation (Intentional/Negligent):</strong> No misrepresentation to Love alleged or reliance</li>
                      <li className="list-disc"><strong>Negligence:</strong> No duty or breach alleged specifically as to S&S</li>
                      <li className="list-disc"><strong>Intentional Infliction of Emotional Distress:</strong> No extreme/outrageous conduct by S&S alleged</li>
                      <li className="list-disc"><strong>Stalking:</strong> No pattern of conduct by S&S alleged</li>
                      <li className="list-disc"><strong>Conspiracy:</strong> No underlying tortious act or agreement by S&S alleged</li>
                      <li className="list-disc"><strong>Unfair Business Practices:</strong> No predicate violation by S&S adequately alleged</li>
                      <li className="list-disc"><strong>Accounting/Constructive Trust:</strong> Depend on copyright claim which fails</li>
                      <li className="list-disc"><strong>Declaratory Judgment:</strong> No agreements with S&S alleged</li>
                      <li className="list-disc">"Everyone did everything" allegations improper and warrant dismissal <a href="#" className="text-[#0062c4] hover:underline">Briggs v. Cameron, 2020 WL 6118493 (N.D. Cal. Oct. 16, 2020)</a></li>
                    </ul>
                  </div>

                  {/* Paragraph 17 */}
                  <div>
                    <p className="mb-2 text-sm text-[#737373]">Paragraph 17:</p>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Selected arguments:</p>
                    <ul className="ml-6 mb-2 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">Complaint fails to meet Twombly/Iqbal plausibility standard</li>
                      <li className="list-disc">Allegations are conclusory and lack factual support</li>
                    </ul>
                    <p className="mb-1 text-sm font-medium text-[#212223]">Supporting authorities:</p>
                    <ul className="ml-6 space-y-1 text-sm text-[#212223]">
                      <li className="list-disc">S&S joins CAA's Motion to Dismiss on these additional grounds</li>
                      <li className="list-disc"><strong>Time-barred claims:</strong> Constructive trust, intentional interference with contractual relations, tortious interference with business advantage, negligence, intentional infliction of emotional distress, intentional and negligent misrepresentation <a href="#" className="text-[#0062c4] hover:underline">Briggs v. Cameron, 2020 WL 6118493 (N.D. Cal. Oct. 16, 2020)</a></li>
                      <li className="list-disc"><strong>Preempted claims:</strong> Breach of fiduciary duty, intentional interference with contractual relationships, tortious interference with prospective business advantage, negligence, intentional infliction of emotional distress, conspiracy, <a href="#" className="text-[#0062c4] hover:underline">Business & Professions Code § 17200</a>, accounting, constructive trust</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          )}

          {/* Bottom Action Button */}
          <div className="flex items-center justify-center gap-3 pt-8">
            <Button
              onClick={onNextDraft}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Next: Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
