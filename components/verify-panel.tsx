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

        {/* Legal Document */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white p-8 shadow-sm">
          {/* Document Header */}
          <div className="mb-4 text-center">
            <p className="text-xs text-[#737373]">[Form OP-1]</p>
            <p className="text-xs text-[#737373]">[Essential LR Form]</p>
            <p className="text-xs text-[#737373]">Revised 06/01/2014</p>
            <p className="text-xs text-[#737373]">Revised 02/03/2022</p>
          </div>

          <div className="mb-6 text-center">
            <h2 className="mb-1 text-sm font-bold uppercase text-[#212223]">UNITED STATES DISTRICT COURT</h2>
            <h3 className="mb-4 text-sm font-bold uppercase text-[#212223]">CENTRAL DISTRICT OF CALIFORNIA</h3>
          </div>

          {/* Case Information */}
          <div className="mb-6 grid grid-cols-2 gap-8 border-b border-[#e5e5e5] pb-6">
            <div>
              <p className="mb-1 text-sm text-[#212223]"><span className="font-medium">CAROLINE LEWIS,</span></p>
              <p className="mb-2 ml-8 text-sm text-[#737373]">Plaintiff,</p>
              <p className="mb-1 text-sm text-[#212223]">vs.</p>
              <p className="mb-1 text-sm text-[#212223]"><span className="font-medium">MIRAMAX, INC., et al.,</span></p>
              <p className="ml-8 text-sm text-[#737373]">Defendants.</p>
            </div>
            <div className="text-sm">
              <p className="mb-1 text-[#212223]">Case No: <span className="font-medium">5:23-cv-01234-AB-SHKx</span></p>
              <p className="mb-4 text-[#212223]">Assigned to: <span className="font-medium">Hon. André Birotte Jr.</span></p>
              <p className="mb-1 font-medium text-[#212223]">DEFENDANT MIRAMAX&apos;S OPPOSITION</p>
              <p className="mb-1 font-medium text-[#212223]">TO PLAINTIFF&apos;S MOTION FOR</p>
              <p className="mb-1 font-medium text-[#212223]">SUMMARY JUDGMENT RE:</p>
              <p className="mb-1 font-medium text-[#212223]">COMPLAINT; INFRINGEMENT OF POINTS AND</p>
              <p className="mb-4 font-medium text-[#212223]">AUTHORITIES</p>
              <p className="text-xs text-[#737373]">Hearing Date: January 15, 2024</p>
              <p className="text-xs text-[#737373]">Hearing Time: 10:00 a.m.</p>
              <p className="text-xs text-[#737373]">Courtroom: 7A, 7th Floor</p>
            </div>
          </div>

          {/* Document Title */}
          <div className="mb-6 text-center">
            <h1 className="text-base font-bold uppercase text-[#212223]">MEMORANDUM OF POINTS AND AUTHORITIES</h1>
          </div>

          {/* Section I - Introductory Statement */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">I. INTRODUCTORY STATEMENT</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Plaintiff Caroline Lewis (&quot;Plaintiff&quot; or &quot;Lewis&quot;) filed this action against Defendants Miramax, Inc. (&quot;Miramax&quot;) and Searchlight Pictures, Inc. (&quot;Searchlight&quot;) (collectively, &quot;Defendants&quot;), alleging copyright infringement of her unpublished screenplay entitled &quot;Coastal Dreams&quot; (the &quot;Lewis Screenplay&quot;). Lewis claims that the 2019 film &quot;A Hidden Life&quot; (the &quot;Film&quot;) directed by Terrence Malick and distributed by Searchlight infringed her copyright in the Lewis Screenplay.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis&apos;s claims fail as a matter of law because she cannot establish the essential elements of copyright infringement. First, Lewis cannot prove that Defendants had access to her screenplay before the Film was created. The Film is based on the true story of Franz Jägerstätter, an Austrian conscientious objector during World War II, and Malick had been developing the project since 2016—well before Lewis claims to have submitted her screenplay to any production company.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Second, even if Lewis could demonstrate access, the works are not substantially similar as a matter of law. The only similarities between the Lewis Screenplay and the Film involve unprotectable elements: historical facts, stock characters, common themes of conscience and sacrifice, and scenes à faire inherent to stories about wartime conscientious objection.
            </p>
          </div>

          {/* Section II - Factual Background */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">II. FACTUAL BACKGROUND</h2>
            
            <h3 className="mb-2 text-sm font-semibold text-[#212223]">A. The Alleged Similarities</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis submitted an eight-page &quot;concept document&quot; to Miramax&apos;s general submission portal in March 2018. Decl. of Lewis ¶ 4. Lewis admits she never received any response from Miramax regarding her submission. Id. ¶ 6. There is no evidence that anyone at Miramax or Searchlight ever reviewed Lewis&apos;s submission.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The Film, &quot;A Hidden Life,&quot; premiered at the Cannes Film Festival in May 2019 and was released theatrically in December 2019. Declaration of Producer Grant Hill ¶¶ 3-4. The Film was written and directed by Terrence Malick based on the true story of Franz Jägerstätter. Id. ¶ 5. Malick began researching Jägerstätter&apos;s life in 2016 and wrote the screenplay between 2016 and 2017. Id. ¶¶ 6-8.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">B. The Works at Issue</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis&apos;s screenplay tells a fictional story of a modern-day conscientious objector who refuses military service during a contemporary conflict. The protagonist faces social ostracism, legal consequences, and family pressure, ultimately choosing imprisonment over compromising his beliefs.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The Film depicts the true story of Franz Jägerstätter, an Austrian farmer who refused to fight for the Nazi regime during World War II. The historical record of Jägerstätter&apos;s life, including his arrest, trial, and execution, is extensively documented in historical sources, including Gordon Zahn&apos;s 1964 biography &quot;In Solitary Witness.&quot;
            </p>
          </div>

          {/* Section III - Argument */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">III. ARGUMENT</h2>
            
            <h3 className="mb-2 text-sm font-semibold text-[#212223]">A. Lewis&apos;s Copyright Infringement Claims Fails As a Matter Of Law</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              A copyright plaintiff must establish &quot;(1) ownership of a valid copyright; and (2) copying of constituent elements of the work that are original.&quot; <span className="text-[#0062c4]">Feist Publ&apos;ns, Inc. v. Rural Tel. Serv. Co., 499 U.S. 340, 361 (1991)</span>. To prove copying, a plaintiff must show that the defendant actually copied the plaintiff&apos;s work and that the copying amounts to an improper appropriation. <span className="text-[#0062c4]">Rentmeester v. Nike, Inc., 883 F.3d 1111, 1117 (9th Cir. 2018)</span>.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Copying may be established by direct evidence or, more commonly, by showing that the defendant had access to the plaintiff&apos;s work and that the two works share similarities probative of copying. <span className="text-[#0062c4]">Three Boys Music Corp. v. Bolton, 212 F.3d 477, 481 (9th Cir. 2000)</span>.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              To establish copyright infringement, a plaintiff must demonstrate that the defendant copied protected elements of the work by satisfying both the extrinsic and intrinsic tests for substantial similarity. <span className="text-[#0062c4]">Corbello v. Valli, 974 F.3d 965, 974 (9th Cir. 2020)</span>. The extrinsic test is an objective comparison of specific expressive elements — including plot, theme, dialogue, mood, setting, pace, characters, and sequence of events — after filtering out unprotectable material such as facts, ideas, and scènes à faire; the intrinsic test asks whether an ordinary reasonable person would find the works substantially similar in their total concept and feel.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">B. The Two Works Are Not Substantially Similar</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The extrinsic test is an objective one that focuses on &quot;articulable similarities between the plot, themes, dialogue, mood, setting, pace, characters, and sequence of events.&quot; <span className="text-[#0062c4]">Kouf v. Walt Disney Pictures &amp; Television, 16 F.3d 1042, 1045 (9th Cir. 1994)</span> (citation and internal quotation marks omitted).
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Under the extrinsic test, the court must first &quot;filter out&quot; the unprotectable elements of the plaintiff&apos;s work—including ideas, facts, public domain elements, merger material, scenes à faire, and other unoriginal elements. <span className="text-[#0062c4]">Cavalier v. Random House, Inc., 297 F.3d 815, 822 (9th Cir. 2002)</span>. Only after this filtration can the court meaningfully compare the two works.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">C. Plot and Sequence of Events</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The basic plot sequence—person of conscience refuses military service, faces legal consequences, is imprisoned, and maintains conviction despite pressure—is not protectable. This sequence derives from the historical facts of countless conscientious objector cases and is a standard narrative structure for stories in this genre. See <span className="text-[#0062c4]">Berkic v. Crichton, 761 F.2d 1289, 1293 (9th Cir. 1985)</span> (holding that &quot;sequence of events&quot; similarities are not protectable when they flow naturally from a common premise).
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">D. Characters</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The character types in both works—a principled objector, a supportive spouse, disapproving community members, and legal/military authorities—are stock characters inherent to any conscientious objector narrative. Stock characters are not protectable. <span className="text-[#0062c4]">Cavalier, 297 F.3d at 823</span>. Moreover, to the extent the Film&apos;s characters resemble historical figures, they are based on documented facts about Franz Jägerstätter and his family.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">E. Mood and Theme</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The themes of conscience, sacrifice, and standing firm against authority are ideas that cannot be copyrighted. <span className="text-[#0062c4]">17 U.S.C. § 102(b)</span>; <span className="text-[#0062c4]">Satava v. Lowry, 323 F.3d 805, 810 (9th Cir. 2003)</span> (&quot;It is well established that a copyright holder cannot claim copyright protection over ideas.&quot;).
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">F. Select of Lewis&apos;s State Law Claims Preempted by Federal Copyright Law</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis&apos;s state law claims for unfair competition and unjust enrichment are preempted by federal copyright law because they are based on the same allegations of copying that underlie her copyright claim. <span className="text-[#0062c4]">Laws v. Sony Music Entm&apos;t, Inc., 448 F.3d 1134, 1143-44 (9th Cir. 2006)</span>.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">G. Lewis&apos;s Compulsory Arbitration Are Independently Subject to Copyright Preemption</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Section 301(a) of the Copyright Act preempts all state law claims that (1) fall within the subject matter of copyright as defined in sections 102 and 103, and (2) assert rights that are equivalent to any of the exclusive rights granted to copyright holders under section 106. <span className="text-[#0062c4]">17 U.S.C. § 301(a)</span>.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">H. Breach of Fiduciary Duty: The Confidential Relations and Business Advantage Theory Fails</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis cannot establish any fiduciary or confidential relationship with Defendants. The submission of an unsolicited screenplay to a studio&apos;s general submissions portal does not create a fiduciary duty. <span className="text-[#0062c4]">Benay v. Warner Bros. Entm&apos;t, Inc., 607 F.3d 620, 629 (9th Cir. 2010)</span>.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">I. Implied-in-Fact Contract Requires California Business and Professions Code § 17200</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis cannot state a claim for breach of implied contract because there was no &quot;meeting of the minds&quot; between the parties. Lewis admits she never received any response from Miramax. Without any communication or course of dealing, no implied contract can arise. <span className="text-[#0062c4]">Chandler v. Roach, 156 Cal. App. 2d 435, 441 (1957)</span>.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">J. Accounting and Declaratory Relief: These Claims Are Derivative and Fail</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis&apos;s claims for an accounting and declaratory relief are derivative of her substantive claims and must fail with them. An accounting is an equitable remedy that requires the existence of an underlying fiduciary relationship. <span className="text-[#0062c4]">Civic W. Corp. v. Zila Indus., Inc., 66 Cal. App. 3d 1, 14 (1977)</span>.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">K. Many of Lewis&apos;s State Law Claims Are Ultimately and/or Subject to Copyright Preemption</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              All of Lewis&apos;s state law claims that depend on allegations that Defendants copied protected expression from the Lewis Screenplay are preempted by 17 U.S.C. § 301 because they seek to vindicate rights equivalent to the exclusive rights protected by copyright.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">L. Lewis Has Not Alleged Contract By Deed That Could Make It Liable For State Law Claims</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Searchlight is entitled to summary judgment on all state law claims because it had no contact with Lewis or her screenplay. Lewis admits her only submission was to Miramax&apos;s portal, not Searchlight.
            </p>
          </div>

          {/* Section IV - Conclusion */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">IV. CONCLUSION</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis offers derivative Constitutionally-protected opinions and ideas on a topic of interest, no more. Her claims are barred by Copyright law preemption and fail as a matter of copyright and state contract law. The mere use similar ideas or themes of conscientious objection and conviction does not constitute copyright infringement. An alleged infringer has no obligation not to copy mere themes, plot sequence, or stock characters, which constitute unprotectable elements under Ninth Circuit Copyright law.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              For the foregoing reasons, Defendant Miramax, Inc. and Searchlight Pictures, Inc. respectfully request that this Court grant summary judgment in their favor on all of Plaintiff&apos;s claims.
            </p>
          </div>

          {/* Signature Block */}
          <div className="mt-8 border-t border-[#e5e5e5] pt-6">
            <p className="mb-1 text-sm text-[#212223]">DATED: September 16, 2023</p>
            <p className="mb-4 text-sm font-medium text-[#212223]">KIRKLAND ASSOCIATES LLP</p>
            <p className="mb-1 text-sm text-[#212223]">By: _______________________</p>
            <p className="ml-6 text-sm text-[#212223]">Sarah Mitchell</p>
            <p className="ml-6 text-sm text-[#737373]">Attorneys for Defendant</p>
            <p className="ml-6 text-sm text-[#737373]">MIRAMAX, INC.</p>
          </div>

          {/* Certificate of Compliance */}
          <div className="mt-6 border-t border-[#e5e5e5] pt-6 text-center">
            <p className="mb-4 text-xs font-bold uppercase text-[#212223]">CERTIFICATE OF COMPLIANCE</p>
            <p className="text-xs text-[#737373]">[Certificate content would appear here]</p>
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
