"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Undo2,
  Redo2,
  Plus,
  ChevronDown,
  Minus,
  Bold,
  Italic,
  Underline,
  MoreHorizontal,
  Upload,
} from "lucide-react";
import { SelectionContextMenu, useSelectionContextMenu } from "@/components/selection-context-menu";

interface DraftEditorProps {
  className?: string;
  onVerifyBrief?: () => void;
  flowType?: "brief" | "judicial";
}

export function DraftEditor({ className, onVerifyBrief, flowType = "brief" }: DraftEditorProps) {
  const [fontSize, setFontSize] = React.useState(36);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { position, hide } = useSelectionContextMenu(contentRef as React.RefObject<HTMLElement>);

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      {/* Formatting Toolbar */}
      <div className="flex items-center gap-1 border-b border-[#e5e5e5] bg-white px-4 py-2">
        {/* Undo/Redo */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Undo2 className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Redo2 className="size-4" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Add */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Plus className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <ChevronDown className="size-3" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Heading Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 text-sm text-[#212223]">
              Heading 1
              <ChevronDown className="size-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Heading 1</DropdownMenuItem>
            <DropdownMenuItem>Heading 2</DropdownMenuItem>
            <DropdownMenuItem>Heading 3</DropdownMenuItem>
            <DropdownMenuItem>Body</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Font Size */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="size-8 p-0 text-[#737373] hover:text-[#212223]"
          onClick={() => setFontSize(Math.max(8, fontSize - 1))}
        >
          <Minus className="size-3" />
        </Button>
        <span className="w-8 text-center text-sm text-[#212223]">{fontSize}</span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="size-8 p-0 text-[#737373] hover:text-[#212223]"
          onClick={() => setFontSize(Math.min(72, fontSize + 1))}
        >
          <Plus className="size-3" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* Text Formatting */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Bold className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Italic className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <Underline className="size-4" />
        </Button>

        <div className="mx-2 h-5 w-px bg-[#e5e5e5]" />

        {/* More Options */}
        <Button variant="ghost" size="sm" className="size-8 p-0 text-[#737373] hover:text-[#212223]">
          <MoreHorizontal className="size-4" />
        </Button>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto bg-[#fcfcfc] p-8">
        <div className="mx-auto max-w-3xl">
        {/* Judicial header — above the white card */}
        {flowType === "judicial" && (
          <div className="mx-auto mb-4 max-w-3xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">Draft</p>
                <h1 className="text-2xl font-semibold text-[#212223]">Review and edit your draft opinion</h1>
              </div>
              <button className="flex items-center gap-1.5 rounded-full border border-[#cccccc] px-3 py-1.5 text-xs text-[#212223] hover:bg-[#f2f2f2]">
                <Upload className="size-3" />
                Upload files for styling
              </button>
            </div>
          </div>
        )}

        <div ref={contentRef} className="rounded-lg border border-[#e5e5e5] bg-white p-8 shadow-sm">
          {/* Header — brief only, stays inside the white card */}
          {flowType !== "judicial" && (
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wide text-[#737373]">DRAFT</p>
              <h1 className="text-2xl font-semibold text-[#212223]">
                Review and edit your draft brief
              </h1>
            </div>
          )}

          {flowType === "judicial" ? (
            // JUDICIAL FLOW: OPINION CONTENT
            <>
              {/* Court Header */}
              <div className="mb-8 text-center">
                <p className="text-lg font-semibold text-[#212223]">UNITED STATES DISTRICT COURT</p>
                <p className="text-lg font-semibold text-[#212223]">CENTRAL DISTRICT OF CALIFORNIA</p>
                <p className="text-lg font-semibold text-[#212223]">SOUTHERN DIVISION</p>
              </div>

              {/* Case Information - Two Column Section */}
              <div className="mb-8 flex gap-8">
                {/* Left Column - Parties */}
                <div className="flex-1 border-r border-[#e5e5e5] pr-8">
                  <p className="mb-4 text-sm text-[#212223]">516 Inc., dba DG Plumbing,</p>
                  <p className="mb-4 ml-8 text-sm text-[#212223]">Plaintiff</p>
                  <p className="mb-4 ml-4 text-sm text-[#212223]">v.</p>
                  <p className="mb-4 text-sm text-[#212223]">RICHMOND SERVICES, INC. dba RICHMOND NATIONAL INSURANCE COMPANY, a Delaware Corporation; and DOES 1 through 100, inclusive,</p>
                  <p className="ml-8 text-sm text-[#212223]">Defendants.</p>
                </div>

                {/* Right Column - Case Details */}
                <div className="flex-1">
                  <p className="mb-12 text-sm text-[#212223]">Case No. 8:25-cv-01204-DOC-KES</p>
                  <p className="text-sm font-bold text-[#212223]">ORDER DENYING DEFENDANT&apos;S MOTION TO DISMISS</p>
                </div>
              </div>

              {/* Opening */}
              <div className="mb-8">
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Before the Court is Defendant&apos;s Richmond National Insurance Company (&quot;Defendant&quot; or &quot;RNIC&quot;) Motion to Dismiss (&quot;Motion&quot; or &quot;Mot.&quot;) (Dkt. 10) Plaintiff&apos;s 516, Inc. (&quot;Plaintiff&quot;) Complaint (&quot;Compl.&quot;) (Dkt. 1-2). For the following reasons, the Court hereby DENIES Defendant&apos;s Motion.
                </p>
              </div>

              {/* I. Background */}
              <div className="mb-8">
                <h2 className="mb-4 text-base font-bold text-[#212223]">I. Background</h2>
                <h3 className="mb-3 font-semibold text-[#212223]">A. Facts</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The following facts are taken from Plaintiff&apos;s Complaint. Plaintiff is a commercial plumbing company with its corporate office in Orange County, California. Compl. ¶ 1. Defendant is a surplus lines insurer registered to do business in the State of California. Id. ¶¶ 2-3. On or about February 1, 2024, Defendant issued a Commercial General Liability policy (&quot;CGL Policy&quot;) to Plaintiff with a policy period of February 1, 2024, to February 1, 2025. Id. ¶¶ 4-5. Pursuant to the policy, Plaintiff paid an insurance premium of $16,800. Id. ¶ 15.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The CGL Policy&apos;s terms are outlined in the Commercial General Liability Coverage Form and contains multiple provisions. Compl., Ex. A, Commercial General Liability Coverage Form (&quot;CGL Policy&quot;) (Dkt. 1-2). Section I pertaining to the Bodily Injury and Property Damage Liability, subsection 1 (a) states that Defendant &quot;will pay those sums that an insured becomes legally obligated to pay as damages because of &apos;bodily injury&apos; or &apos;property damage&apos; to which this insurance applies. [Defendant] will have the right and duty to defend the insured against any &apos;suit&apos; seeking those damages. However, [Defendant] will have no duty to defend the insured against any &apos;suit&apos; seeking damages for &apos;bodily injury&apos; or &apos;property damage&apos; to which this insurance does not apply.&quot; Id. at 1. Section V outlines the Definitions and subsection 18 defines a &quot;suit&quot; as &quot;a civil proceeding in which damages because of &apos;bodily injury&apos;, &apos;property damage,&apos; or &apos;personal and advertising injury&apos; to which this insurance applies are alleged.&quot; Id. at 16. Section IV which is titled &quot;Commercial General Liability Conditions,&quot; subsection 2(d) includes a &quot;no voluntary payments provision&quot; stating that &quot;[n]o insured will, except at that insured&apos;s own cost, voluntarily make a payment, assume any obligation, or incur any expense, other than for first aid, without our consent.&quot; Id. at 11.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  On June 10, 2024, Plaintiff alleges to have installed a plumbing fixture on the third floor of a commercial remodeling project that leaked overnight and caused substantial damage to the building. Id. ¶ 9. This damage was alleged to affect all three floors of the building and the basement. Id. The total cost of remediation and repair exceeded $100,000, and Plaintiff alleges to have become &quot;legally obligated for these costs.&quot; Id. ¶ 12. Plaintiff does not allege that any suit was filed against Plaintiff for the remediation expenses. See generally Compl. According to Plaintiff, Plaintiff reported the loss to George L. Brown Insurance Agency, an agent for Defendant, on or around June 10, 2024, and it was decided that further investigation of the leak was warranted. Id. ¶ 10. On or about July 11, 2024, George L. Brown Insurance Agency reported the loss to Defendant. Id. ¶ 11. Plaintiff claims to have fully cooperated with Defendant&apos;s investigation of the claim. Id. ¶ 12. On September 13, 2024, Defendant denied coverage for the claim. Id. ¶ 13. Plaintiff retained counsel and asked Defendant to reconsider, but Defendant maintained its denial of coverage. Id.
                </p>
              </div>

            </>
          ) : (
            // BRIEF FLOW: MOTION CONTENT
            <>
              {/* Party/Attorney Fields */}
              <div className="mb-8 space-y-2 text-sm text-[#212223]">
                <p>[Party/Attorney]</p>
                <p>[Email]</p>
                <p>[Street/Address]</p>
                <p>[Telephone]</p>
                <p>[Facsimile]</p>
              </div>

              {/* Add Party Button */}
              <button className="mb-8 flex items-center gap-2 rounded-md border border-[#cccccc] px-3 py-2 text-sm text-[#212223] hover:bg-[#f2f2f2]">
                <Plus className="size-4" />
                Add a Party/Attorney
              </button>
            </>
          )}

          {flowType !== "judicial" && (<>
          {/* Court Header */}
          <div className="mb-8 text-center">
            <p className="text-lg font-semibold text-[#212223]">UNITED STATES DISTRICT COURT</p>
            <p className="text-lg font-semibold text-[#212223]">CENTRAL DISTRICT OF CALIFORNIA</p>
          </div>

          {/* Case Information */}
          <div className="mb-8 flex gap-8">
            {/* Left Column - Parties */}
            <div className="flex-1 border-r border-[#e5e5e5] pr-8">
              <p className="mb-4 text-sm text-[#212223]">
                <span className="font-medium">ADRIENNE LOVE</span>,
              </p>
              <p className="mb-4 ml-16 text-sm text-[#212223]">Plaintiff,</p>
              <p className="mb-4 ml-8 text-sm text-[#212223]">v.</p>
              <p className="mb-4 text-sm text-[#212223]">
                <span className="font-medium">AIRBNB, INC., et al.</span>,
              </p>
              <p className="ml-16 text-sm text-[#212223]">Defendants.</p>
            </div>

            {/* Right Column - Case Details */}
            <div className="flex-1">
              <p className="mb-2 text-sm text-[#212223]">Case No. 2:25-cv-01779-AB(KSx)</p>
              <p className="mb-6 text-sm text-[#212223]">Hon. André Birotte Jr.</p>
              <p className="mb-2 text-sm font-semibold uppercase text-[#212223]">
                DEFENDANT DEFENDANT'S JOINDER IN<br/>
                CREATIVE ARTISTS AGENCY, LLC'S MOTION TO<br/>
                DISMISS FIRST AMENDED COMPLAINT AND<br/>
                MOTION TO DISMISS FIRST AMENDED<br/>
                COMPLAINT; MEMORANDUM OF POINTS AND<br/>
                AUTHORITIES IN SUPPORT THEREOF
              </p>
              <p className="mt-6 text-sm text-[#212223]">Hearing Date: October 31, 2025</p>
              <p className="text-sm text-[#212223]">Hearing Time: 10:00 a.m.</p>
              <p className="text-sm text-[#212223]">Courtroom: 7B</p>
            </div>
          </div>

          {/* MEMORANDUM OF POINTS AND AUTHORITIES */}
          <div className="mb-8 text-center border-t border-b border-[#e5e5e5] py-4">
            <h2 className="text-base font-bold text-[#212223] underline">
              MEMORANDUM OF POINTS AND AUTHORITIES
            </h2>
          </div>

          {/* I. INTRODUCTION - Updated to PRELIMINARY STATEMENT */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">I. PRELIMINARY STATEMENT</h2>
            
            {/* Bulleted Points */}
            <ul className="space-y-3">
              {/* Facts 1 */}
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  <span className="mr-2 inline-block shrink-0 rounded border border-[#93c5fd] bg-[#eff6ff] px-1.5 py-px align-middle text-xs font-medium leading-none text-[#1d4ed8]">Facts</span>
                  Plaintiff Adrienne Love alleges a vast conspiracy — encompassing the author, publisher, literary agents, editors, and a movie studio — to steal her life story as depicted in her unpublished memoir Eat the Lemon and exploit it in Rebecca Serle's novel One Italian Summer, published by S&S. <span className="text-[#737373]">(FAC ¶¶46-48)</span>
                </span>
              </li>
              
              {/* Facts 2 */}
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  <span className="mr-2 inline-block shrink-0 rounded border border-[#93c5fd] bg-[#eff6ff] px-1.5 py-px align-middle text-xs font-medium leading-none text-[#1d4ed8]">Facts</span>
                  Love further alleges that the conspirators stalked her, sent strangers claiming to work for the FBI to confront her, and caused two mysterious deaths to intimidate her into silence. <span className="text-[#737373]">(FAC ¶¶63, 65)</span>
                </span>
              </li>
              
              {/* Facts 3 */}
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  <span className="mr-2 inline-block shrink-0 rounded border border-[#93c5fd] bg-[#eff6ff] px-1.5 py-px align-middle text-xs font-medium leading-none text-[#1d4ed8]">Facts</span>
                  Love has now filed a First Amended Complaint that is substantially identical to her original complaint, asserting copyright infringement and 13 state law claims against S&S. <span className="text-[#737373]">(FAC ¶¶130-264)</span>
                </span>
              </li>
              
              {/* Law */}
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  <span className="mr-2 inline-block shrink-0 rounded border border-[#fcd34d] bg-[#fffbeb] px-1.5 py-px align-middle text-xs font-medium leading-none text-[#b45309]">Law</span>
                  A complaint must be dismissed under Rule 12(b)(6) where it fails to state a claim for relief. The FAC&apos;s fatal defects are apparent from the face of the pleading and the works themselves, without any need for discovery. <span className="text-[#0062c4]">(FRCP 12(b)(6))</span>
                </span>
              </li>
              
              {/* Conclusion */}
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  <span className="mr-2 inline-block shrink-0 rounded border border-[#6ee7b7] bg-[#ecfdf5] px-1.5 py-px align-middle text-xs font-medium leading-none text-[#065f46]">Conclusion</span>
                  Because (1) the two works are not substantially similar in protectable expression, (2) the state law claims lack specific allegations of conduct by S&S, and (3) many state law claims are untimely and/or preempted, the FAC should be dismissed with prejudice.
                </span>
              </li>
            </ul>
          </div>

          {/* II. FACTUAL BACKGROUND */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">II. FACTUAL BACKGROUND</h2>
            
            {/* A. The Parties */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">A. The Parties</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Love is the author of <em>Eat the Lemon</em>, an unpublished memoir she describes as a personal account of her own life experiences. FAC ¶¶ 33–34. She has registered two manuscript versions with the U.S. Copyright Office—a July 2020 draft and a February 2021 draft—and represents that the work was completed in 2021. Id. Ex. A.
              </p>
              <p className="text-sm leading-relaxed text-[#212223]">
                S&S is the publisher of <em>One Italian Summer</em>, a novel authored by Rebecca Serle. FAC ¶¶ 11, 31, 78. The novel was first publicly announced in March 2021, when a sample chapter was released; it was published in March 2022. Id. ¶¶ 48, 50.
              </p>
            </div>

            {/* B. The Alleged Conspiracy */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">B. The Alleged Conspiracy</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Love's central allegation is that a network of conspirators—including individuals she had trusted as her own advisors—decided that her life story would fetch greater commercial returns if told by Serle, an established novelist, rather than by Love herself. FAC ¶ 46. She contends that these conspirators arranged to funnel her manuscript to Serle, who then appropriated it for both <em>One Italian Summer</em> and a related film project currently in development. Id. ¶¶ 37–48, 50, 57–61, 78–79. Love further alleges that in May–June 2019 her literary agent shared the manuscript widely, that it was later sent to agents connected to Serle in early 2020, and that an S&S editor received a copy in early 2021. Id. ¶¶ 26, 39, 42–43, 47, 58–61.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                The alleged conspiracy goes well beyond literary theft. Love asserts that to silence her, the conspirators arranged for her to be surveilled, confronted by strangers claiming to work for the FBI, and subjected to other forms of physical and emotional intimidation. Id. ¶¶ 63, 66, 76, 126. She also contends that two individuals died under circumstances connected to the alleged scheme. Id. ¶ 65.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                In a contradiction the FAC never resolves, Love simultaneously claims that <em>One Italian Summer</em> is an unlawful copy of <em>Eat the Lemon</em> and that it deliberately distorts the facts of her life to cast her in a negative light. Id. ¶¶ 64, 76, 126.
              </p>
              <p className="text-sm leading-relaxed text-[#212223]">
                Notably, correspondence between Serle and her literary agent demonstrates that Serle had already formulated the concept and basic plot of <em>One Italian Summer</em> in June 2019—before Love's manuscript was allegedly circulating in Serle's orbit. That correspondence was shared with Love's counsel in an effort to resolve this matter without litigation, to no avail. As explained below, however, the Court need not resolve the question of independent creation because the two works are not substantially similar as a matter of law.
              </p>
            </div>

            {/* C. The Two Works Compared */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">C. The Two Works Compared</h3>
              
              {/* 1. Eat the Lemon */}
              <div className="mb-6 ml-4">
                <p className="mb-4 font-semibold text-[#212223]">1. <em>Eat the Lemon</em></p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  <em>Eat the Lemon</em> is, by Love's own description, a "personal memoir" recounting her true experiences. FAC ¶¶ 33, 36. The work centers on Love's efforts to come to terms with the loss of her mother—who died of cancer roughly a decade before the events described—and with the broader trauma of her family life, through extended periods of immersion in the culture and landscape of Italy's Amalfi Coast. Id. ¶¶ 112, 118, 124.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The memoir opens with Love and her boyfriend, Brad, traveling together down the Amalfi Coast. ETL at 3–4. Through a series of flashbacks, readers learn that Love's childhood was marked by deep unhappiness: her father abandoned the family when she was young, her stepfather was emotionally abusive and defrauded her of her mother's belongings after her mother's death, and her relationship with her mother was characterized by distance and coldness. Id. at 6–10, 17–18, 36, 38–39. Love herself reflects at one point that she could not recall a single warm memory of her mother. Id. at 60–61, 93.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  While in Italy, Love and Brad befriend Adele, a woman who rents them an apartment, and Love confides to Adele that her mother once studied cooking in Amalfi. Id. at 11, 34–37. Shortly after Love and Brad return to San Francisco, Love decides to go back to Italy alone, this time with a specific mission: to locate her mother's former cooking teacher and complete a cookbook her mother had assembled during her time in Italy. Id. at 45. Brad largely disappears from the narrative at this point.
                </p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  The remainder of the memoir follows Love's deepening connection to Adele, her family, and the rhythms of Italian life. On her mother's birthday, Love hosts a dinner party and prepares a recipe from her mother's cookbook; Adele's mother Rosa, who is an experienced cook, steps in to lead the preparation. Id. at 70, 73–78. Rosa later teaches Love to cook—offering a form of maternal warmth Love had never received from her own mother. Id. at 80–81, 93. Love also befriends a local woman named Anita, who helps her track down the identity of her mother's cooking teacher, only to learn that the teacher has died. Id. at 85–86. After a brief return to California, Love travels back to Italy and is introduced to Marietta, who was the cooking teacher's assistant and knew Love's mother during her time in Amalfi. Id. at 89–90, 94–95. From Marietta, Love learns that her mother was happy during the period Marietta knew her—a revelation that provides Love with a measure of peace she had not previously found. Id. at 95. The memoir ends with Love cherishing this new understanding of her mother and embracing Rosa as the mother figure she never had. Id. at 100.
                </p>
              </div>

              {/* 2. One Italian Summer */}
              <div className="ml-4">
                <p className="mb-4 font-semibold text-[#212223]">2. <em>One Italian Summer</em></p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  <em>One Italian Summer</em> is an avowed work of fiction built around an extended device of magical realism. The novel opens with Katy, the narrator, in the immediate aftermath of her mother's death from cancer—a loss that has upended her sense of self and strained her marriage to Eric. OIS at 1, 3. Before her mother died, she and Katy had planned a trip together to Positano, Italy, where her mother had spent a meaningful summer as a young woman. Id. at 10–13. Katy decides to take the trip alone.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  From the moment she arrives at the Hotel Poseidon—her mother's chosen accommodation—the novel takes a fantastical turn. On her first full day in Positano, Katy encounters a woman she immediately recognizes as her mother, but at the age her mother was when she lived in Italy decades earlier. Id. at 52–56. This encounter becomes the novel's central conceit: Katy is given the extraordinary opportunity to know her mother not as a parent, but as a peer—a young woman with ambitions, desires, and a life of her own that predated and ultimately outlasted her role as a mother.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  During her time in Positano, Katy also meets Adam, a charming American who works for a hotel acquisition company and is exploring the purchase of two local properties, including the Hotel Poseidon. Id. at 38–47. Her romantic entanglement with Adam unfolds as a parallel storyline to her growing relationship with her younger mother, and eventually culminates in a sexual encounter. Id. at 197–200.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The novel's central revelation arrives when Katy, while visiting her mother's apartment, discovers a photograph of herself as an infant on her mother's nightstand. Id. at 193. She realizes that her mother's trip to Italy did not occur before she was born, as she had always believed, but after—meaning her mother left her as a baby to come here. Id. at 193–96. Katy confronts her mother in anger, then later reconciles with her, coming to understand that her mother had felt her own identity and ambitions subsumed by the sudden responsibilities of motherhood and marriage, and had needed to reclaim a piece of who she was. Id. at 206–16.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  In the novel's final act, Katy learns she has been living in 1992—the year her mother spent the summer in Italy—and that all of her experiences with Adam and her younger mother have taken place in a separate timeline. Id. at 211. She returns to the present to find Eric waiting for her in Positano. After speaking with her father and processing what she has learned, Katy recommits to her marriage. Id. at 227–37. The novel ends with Katy spreading her mother's ashes in the Italian sea, having come to see her mother—and herself—as a fully autonomous person, not defined by her relationships to others. Id. at 238–45.
                </p>
              </div>
            </div>

            {/* D. Procedural History */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">D. Procedural History</h3>
              <p className="text-sm leading-relaxed text-[#212223]">
                Love filed her original Complaint on February 28, 2025. S&S accepted service in June 2025 and filed a Motion to Dismiss the original Complaint on June 30, 2025. ECF Nos. 19, 27–28. Love filed an Opposition on August 18, 2025, and two days later filed the First Amended Complaint, which is now the operative pleading. ECF Nos. 43–44. The FAC is substantially identical to the original Complaint, with the primary difference being that Love no longer asserts each state law claim against every defendant. Because the FAC suffers from the same fatal deficiencies as the original pleading, S&S now moves to dismiss it with prejudice.
              </p>
            </div>
          </div>

          {/* III. ARGUMENT */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">III. ARGUMENT</h2>
            
            {/* A. Copyright Claim */}
            <div className="mb-6">
              <h3 className="mb-4 font-bold text-[#212223]">A. Love's Copyright Infringement Claim Fails As A Matter Of Law.</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                To state a claim for copyright infringement, a plaintiff is required to plead "among other things, (1) the copying of copyrighted material and (2) the unlawful appropriation of it." <a href="#" className="text-[#0062c4] hover:underline">Woodland v. Hill, 136 F.4th 1199, 1205 (9th Cir. 2025)</a>. "To show unlawful appropriation, the plaintiff must prove that the defendant copied enough of the protected expression in the work to render the two works 'substantially similar.'" <em>Id.</em> at 1206. Here, Love's copyright claim fails as a matter of law because the two works are not substantially similar in their protected elements.
              </p>
              
              {/* 1. Biographical Facts */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">1. The Details Allegedly Copied Are Biographical Facts That Are Not Protectable.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Love's copyright claim fails on the threshold ground that the alleged copying involved the facts of her biography, which are not subject to copyright protection. Love's First Amended Complaint is explicit that the narrative details <em>One Italian Summer</em> supposedly lifted from <em>Eat the Lemon</em> correspond to the facts of her own life. She characterizes <em>Eat the Lemon</em> as a "personal memoir based on her own life," and alleges that, with <em>One Italian Summer</em>, "Serle effectively interjects herself into Love's life and stands in her shoes to tell the detailed story of Love's highly personal experiences." <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 33, 75</a>; see also <a href="#" className="text-[#0062c4] hover:underline">¶ 74</a> asserting <em>One Italian Summer</em> is "replete with intricate personal details from Love's life and manuscript").
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Love cannot claim copyright protection in the facts of her life. "To qualify for copyright protection, a work must be original to the author." <a href="#" className="text-[#0062c4] hover:underline"><em>Feist Publ'ns, Inc. v. Rural Tel. Serv. Co.</em>, 499 U.S. 340, 345 (1991)</a> Accordingly, "no author may copyright . . . the facts he narrates." Id. at 344-45. Thus, an author cannot claim copyright ownership over the details of his or her life, even when they are set forth in a memoir or autobiography. <a href="#" className="text-[#0062c4] hover:underline"><em>See</em> 1 Nimmer On Copyright § 2.11 (2025)</a> ("Courts have denied copyright protection not only to raw historical facts, but also to facts set forth in biographical works, in news stories, and in other forms of expression.").
                </p>
              </div>

              {/* 2. No Substantial Similarity */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">2. Even If Eat the Lemon Were Entitled To The Protection Afforded Fictional Works, There Would Still Be No Substantial Similarity.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Even if <em>Eat the Lemon</em> is analyzed as if it were a fictional work, notwithstanding Love's emphatic representations about its non-fictional status, the result does not change. There would be no substantial similarity in protectable expression even if Love <em>were</em> entitled to claim copyright protection in the events and characters depicted in her memoir.
                </p>

                {/* a. Plot */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">a. Plot and Sequence of Events</p>
                  <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                    It is fundamental that "[n]o one can own the basic idea for a story. General plot ideas are not protected by copyright law; they remain forever the common property of artistic mankind." <a href="#" className="text-[#0062c4] hover:underline"><em>Berkic v. Crichton</em>, 761 F.2d 1289, 1293 (9th Cir. 1985)</a>. Thus, in applying the extrinsic test, a court must look "beyond the vague, abstracted idea of a general plot." Id. Instead, the court "compares, not the basic plot ideas for stories, but the actual concrete elements that make up the total sequence of events and the relationships between the major characters." <a href="#" className="text-[#0062c4] hover:underline"><em>Funky Films</em>, 462 F.3d at 1077</a>.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Beyond the unprotectable fact that <em>Eat the Lemon</em> and <em>One Italian Summer</em> both involve women who travel alone to the Amalfi Coast seeking connection with their deceased mothers, the works tell very different stories. The central developments in <em>One Italian Summer</em> are Katy travelling back in time after arriving in Positano, meeting and befriending a 30-year-old version of her mother, discovering that her mother abandoned her as an infant, and then being forced to confront, for the first time, her mother's status as an independent person. <em>Eat the Lemon</em> involves no such time travel or disillusioning revelations. Instead, the central developments are Love's finding a surrogate family in Italy, with whom she experiences true feelings of family for the first time, and meeting someone who knew her mother when she was younger and is able to share happy memories about her.
                  </p>
                </div>

                {/* b. Characters */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">b. Characters</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Nor are there protectable similarities between the characters across the two works, especially considering that characters are generally not subject to copyright protection unless they are "especially distinctive." <a href="#" className="text-[#0062c4] hover:underline"><em>Olson v. NBC</em>, 855 F.2d 1446, 1451, 1452 (9th Cir. 1988)</a>. While both Love and Katy grieve over losing a mother to cancer, that is a general plot point that is not subject to copyright protection. The characters are otherwise portrayed quite differently, particularly with respect to the family situations that form the context for their travels to Italy.
                  </p>
                </div>

                {/* c. Dialogue */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">c. Dialogue</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Love does not allege any similar dialogue between the works.
                  </p>
                </div>

                {/* d. Setting */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">d. Setting</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    There are also no protectable similarities at the level of setting. While Love asserts that both works "are set on the Amalfi Coast of Italy in quaint, family-run hotels," <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 81</a>, that is misleading. In One Italian Summer, Katy spends all her time in Positano, while, in <em>Eat the Lemon</em>, the protagonist travels widely across the Amalfi Coast, and stays in a rental apartment, not a family-run hotel. At any rate, "[t]he mere fact that" two works may be "set in the same city does not give rise to a finding of substantial similarity of copyrightable expression." <a href="#" className="text-[#0062c4] hover:underline"><em>Silas v. HBO</em>, 201 F. Supp. 3d 1158, 1176 (C.D. Cal. 2016)</a>.
                  </p>
                </div>

                {/* e. Theme */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">e. Theme</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Nor are there protectable similarities at the level of theme. The general theme of a female protagonist coming to feel greater connection to her deceased mother by visiting the Amalfi Coast is not protectable. <a href="#" className="text-[#0062c4] hover:underline"><em>See Masterson</em>, 821 F. App'x at 782</a> ("Though the works share a general theme—i.e., every feeling has a reason—such a theme is too general to be protectible for the purposes of the extrinsic test."). Beyond that, the works' themes are quite different. <em>One Italian Summer</em> is about Katy coming to see her mother as a flawed person with interests, desires, and passions beyond her and her father, and the way that realization empowers Katy to similarly see herself as her own person. In <em>Eat the Lemon</em>, Love is not similarly burdened by an idealized picture of her mother she must break out of. Quite the contrary, Eat the Lemon is about the narrator's overcoming her unhappy memories of her mother.
                  </p>
                </div>

                {/* f. Mood and Pace */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">f. Mood and Pace</p>
                  <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                    The mood of the two works is also significantly different. <em>One Italian Summer</em> builds drama and suspense through various plot twists, such as Katy meeting the younger version of her mother and discovering that her mother had left her as a baby to travel to Italy. There is no similar drama and suspense in Love's work, which is told more as a series of vignettes. Likewise, while both works are occasionally somber when the protagonist relives memories of her mother, <em>Eat the Lemon</em> is a much darker work, as the protagonist is depicted as traumatized by having to watch her mother endure painful cancer treatments and by the emotional abuse and economic exploitation she experienced from her stepfather.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    The pace of the two works is different as well. <em>One Italian Summer</em> takes place over a few weeks and the plot moves steadily toward a resolution—readers know, or at least suspect, that the younger version of Katy's mother is only there for a short while, that there is some lesson Katy must learn before she is gone, and that Katy will soon have to decide whether to go back to her husband. <em>Eat the Lemon</em> takes place over a year and a half, through Love's three separate visits to the Amalfi Coast, and does not feature any plotlines that speed toward resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* B. State Law Claims */}
            <div className="mb-6">
              <h3 className="mb-4 font-bold text-[#212223]">B. None Of Love's State Law Claims Presents A Plausible Claim For Relief Against S&S.</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                To the extent this Court chooses to reach Love's state law claims, notwithstanding that federal jurisdiction is premised exclusively on the copyright claim, those claims, likewise, fail as a matter of law.
              </p>

              {/* 1. Conspiracy Allegations */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">1. Love's Conspiracy Allegations Are Fundamentally Implausible.</p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  Every one of Love's state law claims is based on conduct purportedly undertaken in service of the alleged conspiracy both to infringe on her copyright and to intimidate her into silence about the conspiracy. <em>See</em> <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 46, 63-66, 76, 126, 143-44, 158, 173, 183-84, 187, 195, 199, 209-10, 216-17, 223, 229, 237, 243, 247, 253, 261</a>. However, as set forth above, there was no copyright infringement.
                </p>
              </div>

              {/* 2. No Alleged Conduct */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">2. Love Has Not Alleged Conduct By S&S That Could Make It Liable For Her State Law Claims.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The state law claims Love asserts against S&S should be dismissed for the additional reason that she has not alleged conduct by S&S that could render it liable for those claims. Beyond the conclusory assertion that "S&S was and is an agent for the infringing and unlawful projects at issue," <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 11</a>, the only allegations Love makes regarding conduct by S&S specifically are that (1) one of its divisions published <em>One Italian Summer</em> and (2) one of its editors is married to a former literary agent of Love's, while another rejected her manuscript two weeks before the book announcement for <em>One Italian Summer</em> came out. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 47-48, 60, 78</a>. Love cannot proceed with her state law claims against S&S based on such threadbare allegations. In particular:
                </p>
                <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                  <li className="list-disc"><strong>Breach of Fiduciary Duty:</strong> This claim should be dismissed because the circumstances purportedly giving rise to a fiduciary duty on S&S's part to Love—that S&S supposedly "possessed and reviewed" her manuscript, <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 141</a>—cannot, as a matter of law, give rise to such a duty. <a href="#" className="text-[#0062c4] hover:underline"><em>See Blatty v. Warner Bros. Ent.</em>, 2011 WL 13217379, at *8-9 (C.D. Cal. Apr. 21, 2011)</a></li>
                  <li className="list-disc"><strong>Intentional Interference with Contractual Relations and Business Advantage:</strong> These claims should be dismissed because no facts are alleged indicating either that S&S had knowledge of the contract or business relationship that was allegedly interfered with, or that S&S undertook intentional acts designed to disrupt that contractual or business relationship.</li>
                  <li className="list-disc"><strong>Intentional and Negligent Misrepresentation:</strong> These claims should be dismissed because no facts are alleged indicating that S&S made any misrepresentation to Love, let alone facts indicating that Love relied on that misrepresentation to her detriment.</li>
                  <li className="list-disc"><strong>Negligence:</strong> This claim should be dismissed because no facts are alleged indicating either that S&S owed Love a duty of care or what specifically S&S did to breach it.</li>
                  <li className="list-disc"><strong>Intentional Infliction of Emotional Distress:</strong> This claim should be dismissed because no facts are alleged ascribing conduct to S&S specifically that could qualify as "extreme and outrageous."</li>
                  <li className="list-disc"><strong>Stalking:</strong> This claim should be dismissed because no facts are alleged ascribing conduct to S&S that could constitute stalking, let alone a "pattern" of such conduct.</li>
                  <li className="list-disc"><strong>Conspiracy:</strong> This claim should be dismissed because Love not only has failed to allege any underlying tortious act by S&S, she has also failed to allege any facts indicating an agreement involving S&S to engage in any tortious act.</li>
                  <li className="list-disc"><strong>Unfair Business Practices under California Business and Professions Code § 17200:</strong> This claim should be dismissed because Love has not adequately alleged any predicate violations by S&S.</li>
                  <li className="list-disc"><strong>Accounting and Constructive Trust:</strong> These claims should be dismissed because they depend entirely on the success of Love's copyright claims, and, as explained above, the copyright claim fails as a matter of law.</li>
                  <li className="list-disc"><strong>Declaratory Judgment:</strong> Love's claim for declaratory judgment fails for the reason that Love seeks only a declaration to "ascertain her rights" and defendants' "duties under the alleged agreements," <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 264</a>, yet the FAC alleges no agreements with S&S.</li>
                </ul>
              </div>

              {/* 3. Time-barred claims */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">3. Many of Love's State Law Claims Are Untimely and/or Subject to Copyright Preemption.</p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  Finally, as set forth in CAA's Motion to Dismiss, many of Love's state law claims are barred by the applicable statutes of limitation and/or preempted by the Copyright Act. Specifically, her claims for constructive trust, intentional interference with contractual relations, tortious interference with business advantage, negligence, intentional infliction of emotional distress, and intentional and negligent misrepresentation are each time barred. And her claims for breach of fiduciary duty, intentional interference with contractual relationship, tortious interference with prospective business advantage, negligence, intentional infliction of emotional distress, conspiracy, Business & Professions Code § 17200, accounting, and constructive trust are each subject to copyright preemption. Each of those claims is subject to dismissal on these additional bases.
                </p>
              </div>
            </div>
          </div>

          {/* IV. CONCLUSION */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">IV. CONCLUSION</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Love's First Amended Complaint presents a sweeping conspiracy narrative that is unsupported by any plausible factual allegation and contradicted by the works at issue. The copyright infringement claim at the heart of that narrative fails as a matter of law because (a) the alleged similarities concern biographical facts that are categorically unprotectable, and (b) even analyzing <em>Eat the Lemon</em> as fiction, the two works diverge fundamentally across every dimension of the extrinsic test. Love's state law claims fall with the copyright claim because there was no infringement to conspire to commit or conceal, and because Love has not alleged any conduct by S&S specifically sufficient to support liability on any individual claim.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-[#212223]">
              Because these deficiencies are irremediable—they arise from what the works themselves say, not from any correctable pleading shortfall—dismissal with prejudice is warranted. S&S respectfully requests that this Court dismiss the First Amended Complaint in its entirety, with prejudice, as to S&S.
            </p>
            
            {/* Signature Block */}
            <div className="flex justify-between">
              <p className="text-sm text-[#212223]">DATED: September 12, 2025</p>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#212223]">STERLING & ASSOCIATES LLP</p>
                <p className="mt-4 text-sm text-[#212223]">David R. Mercer</p>
                <p className="text-sm text-[#212223]">Sarah M. Thornton</p>
                <p className="mt-4 text-sm italic text-[#212223]">/s/ Sarah M. Thornton</p>
                <p className="text-sm text-[#212223]">Sarah M. Thornton</p>
                <p className="mt-4 text-sm italic text-[#212223]">Attorneys for Defendant Defendant</p>
              </div>
            </div>
          </div>

          {/* Certificate of Compliance */}
          <div className="mb-8 border-t border-[#e5e5e5] pt-8">
            <h2 className="mb-4 text-center text-base font-bold text-[#212223] underline">CERTIFICATE OF COMPLIANCE</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Pursuant to Local Rule 11-6.2, I hereby certify that this Memorandum of Points and Authorities in support of Simon & Schuster, LLC's Joinder in Creative Artist Agency, LLC's Motion to Dismiss and Motion to Dismiss complies with this Court's Standing Order Rule 12.c, ECF No. 10, limiting memoranda of points and authorities to 25 pages.
            </p>
            <div className="mt-8 flex justify-between">
              <p className="text-sm text-[#212223]">DATED: September 12, 2025</p>
              <div className="text-right">
                <p className="text-sm text-[#212223]">BALLARD SPAHR LLP</p>
                <p className="mt-4 text-sm italic text-[#212223]">/s/ Elizabeth L. Schilken</p>
                <p className="text-sm text-[#212223]">Elizabeth L. Schilken</p>
                <p className="mt-4 text-sm italic text-[#212223]">Attorneys for Simon & Schuster, LLC</p>
              </div>
            </div>
          </div>

            </>
          )}
        </div>
        <div className="flex items-center justify-center gap-3 py-8">
          <Button
            onClick={onVerifyBrief}
            className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
          >
            {flowType === "judicial" ? "Verify opinion" : "Verify brief"}
          </Button>
        </div>
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
