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
} from "lucide-react";

interface DraftEditorProps {
  className?: string;
  onVerifyBrief?: () => void;
  flowType?: "brief" | "judicial";
}

export function DraftEditor({ className, onVerifyBrief, flowType = "brief" }: DraftEditorProps) {
  const [fontSize, setFontSize] = React.useState(36);

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
        <div className="mx-auto max-w-3xl rounded-lg border border-[#e5e5e5] bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wide text-[#737373]">DRAFT</p>
            <h1 className="text-2xl font-semibold text-[#212223]">
              Review and edit your draft {flowType === "judicial" ? "opinion" : "brief"}
            </h1>
          </div>

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

              {/* Bottom Action Button */}
              <div className="flex items-center justify-center gap-3 pb-8 pt-8">
                <Button
                  onClick={onVerifyBrief}
                  className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
                >
                  Verify opinion
                </Button>
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
            <p className="text-lg font-semibold text-[#212223]">SOUTHERN DIVISION</p>
          </div>

          {/* Case Information */}
          <div className="mb-8 flex gap-8">
            {/* Left Column - Parties */}
            <div className="flex-1 border-r border-[#e5e5e5] pr-8">
              <p className="mb-4 text-sm text-[#212223]">
                <span className="font-medium">516 Inc., dba DG Plumbing</span>,
              </p>
              <p className="mb-4 ml-16 text-sm text-[#212223]">Plaintiff,</p>
              <p className="mb-4 ml-8 text-sm text-[#212223]">v.</p>
              <p className="mb-4 text-sm text-[#212223]">
                <span className="font-medium">RICHMOND SERVICES, INC. dba RICHMOND NATIONAL INSURANCE COMPANY, a Delaware Corporation; and DOES 1 through 100, inclusive</span>,
              </p>
              <p className="ml-16 text-sm text-[#212223]">Defendants.</p>
            </div>

            {/* Right Column - Case Details */}
            <div className="flex-1">
              <p className="mb-2 text-sm text-[#212223]">Case No. 8:25-cv-01204-DOC-KES</p>
              <p className="text-sm font-semibold uppercase text-[#212223]">
                ORDER DENYING DEFENDANT&apos;S MOTION TO DISMISS
              </p>
              <p className="mt-4 text-sm text-[#212223]">Hearing Date: October 31, 2025</p>
              <p className="text-sm text-[#212223]">Hearing Time: 10:00 a.m.</p>
              <p className="text-sm text-[#212223]">Courtroom: 7B</p>
            </div>
          </div>

          {/* Notice of Joinder */}
          <div className="mb-8">
            <h2 className="mb-4 text-center text-base font-bold text-[#212223] underline">
              NOTICE OF JOINDER AND MOTION AND JOINDER AND MOTION
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              <strong>PLEASE TAKE NOTICE</strong> that on October 31, 2025, at 10:00 a.m. or as soon as may be heard before the Honorable André Birotte Jr. in Courtroom 7B of the United States District Court for the Central District of California, United States Courthouse, 350 West First Street, Los Angeles, California 90012, defendant Simon and Schuster, LLC ("S&S") will and hereby does move this Court for an order dismissing with prejudice the First Amended Complaint filed by plaintiff Adrienne Love.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              This motion is made following the conference of counsel pursuant to L.R. 7-3, which took place on September 5, 2025 by videoconference.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The motion is made pursuant to Federal Rule of Civil Procedure 12(b)(6) on the ground that Love's First Amended Complaint fails to state a claim. <span className="underline">First</span>, Love's claim for copyright infringement fails because there is no substantial similarity of protected expression between Rebecca Serle's novel One Italian Summer, which was published by S&S, and Love's unpublished memoir Eat the Lemon. Any purported similarities consist of unprotectable facts from Love's own life or the unprotectable premise of a woman traveling alone to Italy in search of connection to her deceased mother.
            </p>
          </div>

          {/* I. INTRODUCTION */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">I. INTRODUCTION</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              In this case, Plaintiff Adrienne Love contends that she is the victim of a vast conspiracy to steal her life story. According to her, the conspiracy encompasses not just the author and publisher of the allegedly infringing work—Rebecca Serle's novel, <em>One Italian Summer</em>—but also a wide array of literary agents and editors, and even a movie studio. Love further alleges that, to pressure her into silence, this purported conspiracy involved stalking and various other attempts at physical or emotional intimidation.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              <strong><em>None of this actually happened.</em></strong> Sadly, it is entirely a figment of Love's imagination. Fortunately, it is unnecessary to proceed to discovery to sort this out.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Although Love has now amended her Complaint, nothing pleaded in the First Amended Complaint ("FAC") cures her claims' fatal defects. Each of Love's claims can and should be rejected as a matter of law just based on the record currently before this Court: i.e., Love's First Amended Complaint and copies of the implicated works.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              <span className="underline">First</span>, the accusation that lies at the center of Love's conspiracy allegations—that One Italian Summer infringes on her copyright in her unpublished memoir Eat the Lemon—can be rejected as a matter of law just by comparing the two works. To prove copyright infringement, Love must demonstrate that the works at issue are "substantially similar" in their original protected expression. She cannot do that because (a) the purported similarities involve facts from Love's own life, which are not subject to copyright protection; and (b) even if Eat the Lemon were entitled to the same protection afforded fictional works, the only real overlap is that both works involve a female protagonist who travels alone to Italy's Amalfi Coast in search of connection with her deceased mother, and that is a general plot point over which Love cannot claim ownership.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              <span className="underline">Second</span>, Love's multiple state law claims are also fatally deficient. Those claims fail as to S&S because (a) each is premised on a purported conspiracy to commit and hide copyright infringement, when no such infringement occurred; (b) Love has not alleged conduct specifically by S&S that could make it liable for any of the claims asserted against it; and (c) many of the claims are untimely and/or preempted by the <a href="#" className="text-[#0062c4] hover:underline">Copyright Act</a>, as set forth in the <a href="#" className="text-[#0062c4] hover:underline">Motion to Dismiss of CAA</a>, which S&S joins in its entirety.
            </p>
            <p className="text-sm leading-relaxed text-[#212223]">
              For these reasons, S&S respectfully requests that this Court dismiss the First Amended Complaint with prejudice as to it.
            </p>
          </div>

          {/* II. FACTUAL BACKGROUND */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">II. FACTUAL BACKGROUND</h2>
            
            {/* A. The Parties */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">A. The Parties</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Love is the author of the unpublished memoir <em>Eat the Lemon</em>. <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 33-34</a>. She has registered two versions of the manuscript with the Copyright Office, a July 2020 draft and a February 2021 draft. Id. Ex. A. According to the copyright registration, the work was completed in 2021. <em>Id.</em>
              </p>
              <p className="text-sm leading-relaxed text-[#212223]">
                S&S is the publisher of <em>One Italian Summer</em>. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 11, 31, 78</a>. The book was first publicly announced in March 2021, when a sample chapter was released, and then published in March 2022. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 48, 50</a>.
              </p>
            </div>

            {/* B. The Alleged Conspiracy */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">B. The Alleged Conspiracy</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Love claims to be the victim of a far-ranging conspiracy relating to <em>Eat the Lemon</em>. <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 46, 126</a>. Her central allegation is that "a network of conspirators, including some of Love's trusted advisors," decided that her life story would be more profitably told coming from "Serle, a well-known author," than coming from her. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶ 46</a>. She contends that these conspirators then worked to deliver her manuscript to Serle, after which it was misappropriated both in Serle's novel <em>One Italian Summer</em> and a related film project currently under development. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 37-48, 50, 57-61, 78-79</a>.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                While Love asserts that One Italian Summer is an unlawful copy of <em>Eat the Lemon</em>, she also—and contradictorily—maintains that the novel distorts and misrepresents many aspects of her life. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 64, 126</a>. She contends that her life story was altered "to cast [her] in a negative light" to intimidate her from challenging the conspirators' plan to commercially exploit her work. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 76, 126</a>. She further asserts that, as part of this alleged plan to intimidate her into silence, she was "surveilled" by Serle and repeatedly confronted by "unfamiliar individuals" who "clearly knew who [she] was," and who "attempted to engage in discussions with [her], including concerning literary agencies, and told her that they worked for government agencies, including the FBI." <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 63, 66, 76, 126</a>. She also maintains that two mysterious deaths occurred in connection with the conspiracy. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶ 65</a>.
              </p>
              <p className="text-sm leading-relaxed text-[#212223]">
                Based on these broad conspiracy allegations, Love has sued 28 separate defendants, including S&S. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 4-31</a>. In addition to her claim for copyright infringement, Love is asserting 13 state law claims against S&S. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 130-52, 163-212, 220-64</a>.
              </p>
            </div>

            {/* C. The Two Works Compared */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">C. The Two Works Compared</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Love's contention that One Italian Summer is an unlawful copy of Eat the Lemon is at the center of all her claims. What follows is a summary of the two works:
              </p>

              {/* 1. Eat the Lemon */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-medium text-[#212223]">1. <em>Eat the Lemon</em></p>
                <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                  <em>Eat the Lemon</em> is, by Love's own account, a "personal memoir," which purports to describe her true experiences. <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 33, 36</a>. The memoir is centered on Love's efforts to come to terms with her tumultuous family life, including her mother's death a decade prior, through an extended immersion in day-to-day life in Italy's Amalfi Coast. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 112, 118, 124</a>. Love's memoir begins with her traveling down the Amalfi Coast with her boyfriend Brad. Schilken Decl. Ex. 1 (Eat the Lemon 2021 manuscript) ("ETL") at 3-4.; Later, readers learn that the trip was taken roughly ten years after Love's mother died from cancer, and that Love wanted to go to the Amalfi Coast because that was a meaningful place for her mother, where she briefly studied cooking. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 19-21, 36</a>.
                </p>
                <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                  The first third of the manuscript details Love and Brad's romantic adventures in Italy, with occasional flashbacks to scenes of Love's family life. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 1-44</a>. From the flashbacks, readers learn that Love's mother died after a brutal ten-year struggle with cancer, that Love's father abandoned the family when Love was a small child, and that Love's stepfather was emotionally abusive and defrauded Love out of her mother's possessions and property. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 6-10, 17-18, 36, 38-39</a>. Throughout the manuscript, Love's relationship with her mother is depicted as an unhappy one, with Love at one point observing: "I didn't have a single memory of warmth between my mother and me." <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 60-61, 93</a>.
                </p>
                <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                  While in Italy, Love and Brad form a connection with Adele, a woman who rents out an apartment to the couple. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 11, 34-37</a>. Love tells Adele about her mother studying cooking in Amalfi when Love "was a child." <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 36</a>.
                </p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  The memoir ends with Love reveling in having met "a magical elderly woman who remembers my mom when she was happy," and kissing the "beautiful shoulder" of Rosa, her new mother figure. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 100</a>.
                </p>
              </div>

              {/* 2. One Italian Summer */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-medium text-[#212223]">2. <em>One Italian Summer</em></p>
                <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                  Unlike <em>Eat the Lemon</em>, <em>One Italian Summer</em> is an avowed work of fiction, which incorporates elements of magical realism. When the novel opens, the narrator, Katy, has just experienced the loss of her mother to cancer. <a href="#" className="text-[#0062c4] hover:underline">Schilken Decl. Ex. 3 ("OIS") at 1</a>. Readers quickly learn that Katy's mother was "the great love of [her] life," that Katy feels completely lost without her, and that she has told her husband, Eric, that she "did not know if [she] could be married to him anymore" in light of the overwhelming loss of self she suddenly feels. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 3</a>.
                </p>
                <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                  Prior to her mother's death, Katy and her mother had made arrangements for a long-discussed trip to Positano, Italy, where her mother spent time as a young woman and which "had always been special" to her. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 10-11</a>. In her grief, Katy decides to take the trip alone. <em>Id.</em> at 12-13. Once in Positano, Katy stays at the Hotel Poseidon, which her mother chose based on her memories of the place. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 24</a>. There, Katy meets a handsome American named Adam, who begins to casually pursue her. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 38-45, 74-80, 90-91, 94-101, 122-27</a>.
                </p>
                <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                  On her first full day in Positano, Katy runs into a woman she instantly recognizes as her mother, only at the age she was when she spent time in Positano. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 52-56</a>. This turns out to be the central narrative device of the book—Katy getting the opportunity to spend time with her mother as a peer during a period in her mother's life when she wasn't defined by being her mother.
                </p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  The books ends with Katy spreading her mother's ashes, which Eric had brought to her, in the Italian sea. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> at 241-45</a>.
                </p>
              </div>
            </div>

            {/* D. Procedural History */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">D. Procedural History</h3>
              <p className="text-sm leading-relaxed text-[#212223]">
                Love filed her original Complaint on February 28, 2025. <a href="#" className="text-[#0062c4] hover:underline">ECF No. 1</a>. On June 30, 2025, S&S accepted service as part of a stipulation extending its time to respond to the Complaint to July 30, 2025. <a href="#" className="text-[#0062c4] hover:underline">ECF No. 19</a>. On June 30, 2025, S&S filed a Motion to Dismiss the Complaint in its entirety. <a href="#" className="text-[#0062c4] hover:underline">ECF Nos. 27-28</a>. On August 18, Love filed an Opposition to S&S's Motion to Dismiss. <a href="#" className="text-[#0062c4] hover:underline">ECF No. 43</a>. Two days later, Love filed the First Amended Complaint, which is now the operative pleading. <a href="#" className="text-[#0062c4] hover:underline">ECF No. 44</a>.
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
            <p className="mb-8 text-sm leading-relaxed text-[#212223]">
              For the foregoing reasons, S&S respectfully asks this Court to dismiss Love's claims against S&S with prejudice.
            </p>
            
            {/* Signature Block */}
            <div className="flex justify-between">
              <p className="text-sm text-[#212223]">DATED: September 12, 2025</p>
              <div className="text-right">
                <p className="text-sm text-[#212223]">BALLARD SPAHR LLP</p>
                <p className="text-sm text-[#212223]">Paul J. Safier</p>
                <p className="text-sm text-[#212223]">Elizabeth L. Schilken</p>
                <p className="mt-4 text-sm italic text-[#212223]">/s/ Elizabeth L. Schilken</p>
                <p className="text-sm text-[#212223]">Elizabeth L. Schilken</p>
                <p className="mt-4 text-sm italic text-[#212223]">Attorneys for Defendant Simon & Schuster, LLC</p>
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

          {/* Bottom Action Button */}
          <div className="flex items-center justify-center gap-3 pb-8 pt-8">
            <Button
              onClick={onVerifyBrief}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Verify brief
            </Button>
          </div>
          </>)}
        </div>
      </div>
    </div>
  );
}
