"use client";

import { useState } from "react";
import { FileText, AlertTriangle, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";
import { FilePreviewIcon } from "@/components/file-preview-icon";

interface VerifyPanelProps {
  onNextOpposition?: () => void;
  onSkipToFinalize?: () => void;
  onEditOutline?: () => void;
}

export function VerifyPanel({ onNextOpposition, onSkipToFinalize, onEditOutline }: VerifyPanelProps) {
  const [showOutlinePreview, setShowOutlinePreview] = useState(false);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-8">
        {/* Left sidebar buttons - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
          <button onClick={() => setShowOutlinePreview(true)} className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <FilePreviewIcon className="size-5 text-[#1d4b34]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex-1">
        {/* Header */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#737373]">
            VERIFY
          </p>
          <h1 className="mb-4 text-2xl font-semibold text-[#212223]">
            Document verification results
          </h1>

          {/* Filter badges */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#737373]">Filter by:</span>
            <button className="flex items-center gap-1.5 rounded-full bg-[#1d4b34] px-3 py-1.5 text-sm text-white">
              <FileText className="size-4" />
              46 total statements
            </button>
            <button className="flex items-center gap-1.5 rounded-full border border-[#cccccc] bg-white px-3 py-1.5 text-sm text-[#212223]">
              <AlertTriangle className="size-4 text-[#ab3300]" />
              4 potential issues
            </button>
          </div>
        </div>

        {/* Legal Document - White paper style */}
        <div className="mx-auto max-w-[816px] bg-white shadow-lg" style={{ fontFamily: "Times New Roman, serif" }}>
          <div className="px-16 py-12">
            {/* Form Header */}
            <div className="mb-2 text-left text-[10px] leading-tight text-[#666]">
              <p>[Form OP-1]</p>
              <p>[Essential LR Form]</p>
              <p>Revised 06/01/2014</p>
              <p>Revised 02/03/2022</p>
            </div>

            {/* Court Header */}
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-wide text-[#212223]">UNITED STATES DISTRICT COURT</p>
              <p className="text-xs font-bold uppercase tracking-wide text-[#212223]">CENTRAL DISTRICT OF CALIFORNIA</p>
            </div>

            {/* Case Caption Box */}
            <div className="mb-6 flex border border-[#212223]">
              {/* Left side - parties */}
              <div className="flex-1 border-r border-[#212223] p-4">
                <p className="text-xs text-[#212223]">CAROLINE LEWIS,</p>
                <p className="ml-8 text-xs italic text-[#212223]">Plaintiff,</p>
                <p className="my-2 text-xs text-[#212223]">vs.</p>
                <p className="text-xs text-[#212223]">MIRAMAX, INC., et al.,</p>
                <p className="ml-8 text-xs italic text-[#212223]">Defendants.</p>
              </div>
              {/* Right side - case info */}
              <div className="flex-1 p-4">
                <p className="text-xs text-[#212223]">Case No: 5:23-cv-01234-AB-SHKx</p>
                <p className="mb-2 text-xs text-[#212223]">Assigned to: Hon. André Birotte Jr.</p>
                <p className="text-xs font-bold text-[#212223]">DEFENDANT MIRAMAX&apos;S OPPOSITION</p>
                <p className="text-xs font-bold text-[#212223]">TO PLAINTIFF&apos;S MOTION FOR</p>
                <p className="text-xs font-bold text-[#212223]">SUMMARY JUDGMENT RE:</p>
                <p className="text-xs font-bold text-[#212223]">COMPLAINT; INFRINGEMENT OF POINTS AND</p>
                <p className="mb-2 text-xs font-bold text-[#212223]">AUTHORITIES</p>
                <p className="text-[10px] text-[#666]">Hearing Date: January 15, 2024</p>
                <p className="text-[10px] text-[#666]">Hearing Time: 10:00 a.m.</p>
                <p className="text-[10px] text-[#666]">Courtroom: 7A, 7th Floor</p>
              </div>
            </div>

            {/* Document Title */}
            <div className="mb-8 text-center">
              <p className="text-sm font-bold uppercase text-[#212223]">MEMORANDUM OF POINTS AND AUTHORITIES</p>
            </div>

            {/* Section I */}
            <div className="mb-6">
              <p className="mb-3 text-xs font-bold uppercase text-[#212223]">I. INTRODUCTORY STATEMENT</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Plaintiff Caroline Lewis (&quot;Plaintiff&quot; or &quot;Lewis&quot;) filed this action against Defendants Miramax, Inc. (&quot;Miramax&quot;) and Searchlight Pictures, Inc. (&quot;Searchlight&quot;) (collectively, &quot;Defendants&quot;), alleging that Defendants infringed her copyright in her unpublished screenplay entitled &quot;Coastal Dreams&quot; (the &quot;Lewis Screenplay&quot;). Lewis claims that the 2019 film &quot;A Hidden Life&quot; (the &quot;Film&quot;), directed by Terrence Malick and distributed by Fox Searchlight Pictures, Inc. (&quot;Fox Searchlight&quot;), infringed her copyright in the Lewis Screenplay.
              </p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis asserts that despite a dearth of evidentiary support that Miramax had access to her unpublished screenplay, Miramax is liable for willful copyright infringement. Lewis also claims that Defendants misappropriated her ideas and violated California&apos;s unfair competition law. The Court should grant summary judgment in favor of Defendants because Lewis cannot satisfy her burden of proving that Defendants had access to her screenplay, that the two works are substantially similar as a matter of law, and that any similarities involve protectable expression rather than unprotectable ideas, stock characters, and scenes à faire.
              </p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                For all of these reasons, the Motion for Summary Judgment should be DENIED.
              </p>
            </div>

            {/* Section II */}
            <div className="mb-6">
              <p className="mb-3 text-xs font-bold uppercase text-[#212223]">II. FACTUAL BACKGROUND</p>
              
              <p className="mb-2 text-xs font-bold text-[#212223]">A. The Alleged Similarities</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis alleges that her screenplay &quot;Coastal Dreams&quot; was infringed upon by Miramax&apos;s film &quot;A Hidden Life.&quot; Lewis registered her screenplay with the U.S. Copyright Office on March 15, 2018, and claims she submitted it to several production companies, including a company that was later acquired by Miramax. However, Lewis cannot establish that any employee of Miramax ever received, reviewed, or had access to her screenplay prior to the Film&apos;s production.
              </p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                The Film, &quot;A Hidden Life,&quot; premiered at the Cannes Film Festival in May 2019 and was released theatrically in December 2019. The Film was written and directed by Terrence Malick and is based on the true story of Franz Jägerstätter, an Austrian conscientious objector who was executed for refusing to fight for the Nazis during World War II. Malick began researching Jägerstätter&apos;s life in 2016 and wrote the screenplay between 2016 and 2017, well before Lewis claims to have submitted her screenplay.
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">B. The Works at Issue</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis&apos;s screenplay tells a fictional story of a contemporary conscientious objector who refuses military service during a modern conflict. The protagonist faces social ostracism, legal consequences, and family pressure, ultimately choosing imprisonment over compromising his beliefs. The Film depicts the true story of Franz Jägerstätter, an Austrian farmer who refused to serve in the Nazi military. The historical record of Jägerstätter&apos;s life is extensively documented in historical sources.
              </p>
            </div>

            {/* Section III */}
            <div className="mb-6">
              <p className="mb-3 text-xs font-bold uppercase text-[#212223]">III. ARGUMENT</p>
              
              <p className="mb-2 text-xs font-bold text-[#212223]">A. Lewis&apos;s Copyright Infringement Claims Fails As A Matter Of Law</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                A copyright plaintiff must establish &quot;(1) ownership of a valid copyright; and (2) copying of constituent elements of the work that are original.&quot; <span className="italic text-[#0062c4]">Feist Publ&apos;ns, Inc. v. Rural Tel. Serv. Co.</span>, 499 U.S. 340, 361 (1991). To prove copying, a plaintiff must show that the defendant actually copied the plaintiff&apos;s work and that the copying amounts to an improper appropriation. <span className="italic text-[#0062c4]">Rentmeester v. Nike, Inc.</span>, 883 F.3d 1111, 1117 (9th Cir. 2018).
              </p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                To establish copyright infringement, a plaintiff must demonstrate that the defendant copied protected elements of the work by satisfying both the extrinsic and intrinsic tests for substantial similarity. <span className="italic text-[#0062c4]">Corbello v. Valli</span>, 974 F.3d 965, 974 (9th Cir. 2020). The extrinsic test is an objective comparison of specific expressive elements—including plot, theme, dialogue, mood, setting, pace, characters, and sequence of events—after filtering out unprotectable material such as facts, ideas, and scènes à faire; the intrinsic test asks whether an ordinary reasonable person would find the works substantially similar in their total concept and feel.
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">B. The Two Works Are Not Substantially Similar</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                The extrinsic test is an objective one that focuses on &quot;articulable similarities between the plot, themes, dialogue, mood, setting, pace, characters, and sequence of events.&quot; <span className="italic text-[#0062c4]">Kouf v. Walt Disney Pictures &amp; Television</span>, 16 F.3d 1042, 1045 (9th Cir. 1994). Under the extrinsic test, the court must first &quot;filter out&quot; the unprotectable elements of the plaintiff&apos;s work—including ideas, facts, public domain elements, merger material, scenes à faire, and other unoriginal elements. <span className="italic text-[#0062c4]">Cavalier v. Random House, Inc.</span>, 297 F.3d 815, 822 (9th Cir. 2002). Only after this filtration can the court meaningfully compare the two works.
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">C. Plot and Sequence of Events</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                The basic plot sequence—person of conscience refuses military service, faces legal consequences, is imprisoned, and maintains conviction despite pressure—is not protectable. This sequence derives from the historical facts of countless conscientious objector cases and is a standard narrative structure for stories in this genre. See <span className="italic text-[#0062c4]">Berkic v. Crichton</span>, 761 F.2d 1289, 1293 (9th Cir. 1985).
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">D. Characters</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                The character types in both works—a principled objector, a supportive spouse, disapproving community members, and legal/military authorities—are stock characters inherent to any conscientious objector narrative. Stock characters are not protectable. <span className="italic text-[#0062c4]">Cavalier</span>, 297 F.3d at 823.
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">E. Mood and Theme</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                The themes of conscience, sacrifice, and standing firm against authority are ideas that cannot be copyrighted. 17 U.S.C. § 102(b); <span className="italic text-[#0062c4]">Satava v. Lowry</span>, 323 F.3d 805, 810 (9th Cir. 2003).
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">F. Select of Lewis&apos;s State Law Claims Preempted by Federal Copyright Law</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis&apos;s state law claims for unfair competition and unjust enrichment are preempted by federal copyright law because they are based on the same allegations of copying that underlie her copyright claim. <span className="italic text-[#0062c4]">Laws v. Sony Music Entm&apos;t, Inc.</span>, 448 F.3d 1134, 1143-44 (9th Cir. 2006).
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">G. Lewis&apos;s Compulsory Arbitration Are Independently Subject to Copyright Preemption</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Section 301(a) of the Copyright Act preempts all state law claims that (1) fall within the subject matter of copyright as defined in sections 102 and 103, and (2) assert rights that are equivalent to any of the exclusive rights granted to copyright holders under section 106. 17 U.S.C. § 301(a).
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">H. Breach of Fiduciary Duty: The Confidential Relations and Business Advantage Theory Fails</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis cannot establish any fiduciary or confidential relationship with Defendants. The submission of an unsolicited screenplay to a studio&apos;s general submissions portal does not create a fiduciary duty. <span className="italic text-[#0062c4]">Benay v. Warner Bros. Entm&apos;t, Inc.</span>, 607 F.3d 620, 629 (9th Cir. 2010).
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">I. Implied-in-Fact Contract Requires California Business and Professions Code § 17200</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis cannot state a claim for breach of implied contract because there was no &quot;meeting of the minds&quot; between the parties. Lewis admits she never received any response from Miramax. <span className="italic text-[#0062c4]">Chandler v. Roach</span>, 156 Cal. App. 2d 435, 441 (1957).
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">J. Accounting and Declaratory Relief: These Claims Are Derivative and Fail</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis&apos;s claims for an accounting and declaratory relief are derivative of her substantive claims and must fail with them. <span className="italic text-[#0062c4]">Civic W. Corp. v. Zila Indus., Inc.</span>, 66 Cal. App. 3d 1, 14 (1977).
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">K. Many of Lewis&apos;s State Law Claims Are Ultimately and/or Subject to Copyright Preemption</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                All of Lewis&apos;s state law claims that depend on allegations that Defendants copied protected expression from the Lewis Screenplay are preempted by 17 U.S.C. § 301.
              </p>

              <p className="mb-2 text-xs font-bold text-[#212223]">L. Lewis Has Not Alleged Contract By Deed That Could Make It Liable For State Law Claims</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Searchlight is entitled to summary judgment on all state law claims because it had no contact with Lewis or her screenplay. Lewis admits her only submission was to Miramax&apos;s portal, not Searchlight.
              </p>
            </div>

            {/* Section IV */}
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase text-[#212223]">IV. CONCLUSION</p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                Lewis offers derivative Constitutionally-protected opinions and ideas on a topic of interest, no more. Her claims are barred by copyright law preemption and fail as a matter of copyright and state contract law. The mere use of similar ideas or themes of conscientious objection and conviction does not constitute copyright infringement. An alleged infringer has no obligation not to copy mere themes, plot sequence, or stock characters, which constitute unprotectable elements under Ninth Circuit copyright law.
              </p>
              <p className="mb-3 text-justify text-xs leading-relaxed text-[#212223]">
                For the foregoing reasons, Defendant Miramax, Inc. and Searchlight Pictures, Inc. respectfully request that this Court grant summary judgment in their favor on all of Plaintiff&apos;s claims.
              </p>
            </div>

            {/* Signature Block */}
            <div className="mb-8">
              <p className="mb-4 text-xs text-[#212223]">DATED: September 16, 2023</p>
              <p className="mb-4 text-right text-xs font-bold text-[#212223]">KIRKLAND ASSOCIATES LLP</p>
              <div className="text-right">
                <p className="text-xs text-[#212223]">By: _______________________</p>
                <p className="text-xs text-[#212223]">Sarah Mitchell</p>
                <p className="text-xs text-[#666]">Attorneys for Defendant</p>
                <p className="text-xs text-[#666]">MIRAMAX, INC.</p>
              </div>
            </div>

            {/* Certificate of Compliance */}
            <div className="border-t border-[#ccc] pt-6 text-center">
              <p className="mb-4 text-xs font-bold uppercase text-[#212223]">CERTIFICATE OF COMPLIANCE</p>
              <p className="text-[10px] text-[#666]">[Certificate content]</p>
            </div>
          </div>
        </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-3 pb-8 pt-6">
            <Button
              variant="outline"
              onClick={onSkipToFinalize}
              className="rounded-full border-[#cccccc] px-6 text-[#212223] hover:bg-[#f7f7f7]"
            >
              Skip to finalize
            </Button>
            <Button
              onClick={onNextOpposition}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Next: Opposition brief
            </Button>
          </div>
        </div>
      </div>
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
