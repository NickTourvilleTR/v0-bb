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
          <div className="mb-6 text-center">
            <p className="text-xs text-[#737373]">[Form OP-1]</p>
            <p className="text-xs text-[#737373]">[Essential LR Form]</p>
            <p className="text-xs text-[#737373]">Revised 06/01/2014</p>
            <p className="text-xs text-[#737373]">Revised 02/03/2022</p>
          </div>

          <div className="mb-8 text-center">
            <h2 className="mb-1 text-sm font-bold uppercase text-[#212223]">UNITED STATES DISTRICT COURT</h2>
            <h3 className="mb-4 text-sm font-bold uppercase text-[#212223]">CENTRAL DISTRICT OF CALIFORNIA</h3>
          </div>

          {/* Case Information */}
          <div className="mb-8 grid grid-cols-2 gap-8 border-b border-[#e5e5e5] pb-6">
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
              <p className="mb-4 font-medium text-[#212223]">COPYRIGHT INFRINGEMENT</p>
              <p className="text-xs text-[#737373]">Hearing Date: January 15, 2024</p>
              <p className="text-xs text-[#737373]">Hearing Time: 10:00 a.m.</p>
              <p className="text-xs text-[#737373]">Courtroom: 7A, 7th Floor</p>
            </div>
          </div>

          {/* Document Title */}
          <div className="mb-8 text-center">
            <h1 className="text-base font-bold uppercase text-[#212223]">MEMORANDUM OF POINTS AND AUTHORITIES</h1>
          </div>

          {/* Section I */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">I. INTRODUCTORY STATEMENT</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Plaintiff Caroline Lewis (&quot;Plaintiff&quot; or &quot;Lewis&quot;) has moved for summary judgment on her claim of copyright infringement of her screenplay &quot;Pacific Heights,&quot; alleging it was copied by Defendant Miramax, Inc. (&quot;Miramax&quot;) in their production of the motion picture &quot;Coastal Dreams.&quot; As set forth below, the motion should be denied because (1) Lewis cannot establish that Miramax had access to her screenplay, (2) the works are not substantially similar as a matter of law, and (3) any similarities between the works involve unprotectable elements such as stock characters, common themes, and scenes à faire.
            </p>
          </div>

          {/* Section II */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">II. FACTUAL BACKGROUND</h2>
            
            <h3 className="mb-2 text-sm font-semibold text-[#212223]">A. The Alleged Similarities</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Lewis alleges that her screenplay &quot;Pacific Heights&quot; was infringed upon by Miramax&apos;s film &quot;Coastal Dreams.&quot; Lewis registered her screenplay with the U.S. Copyright Office on March 15, 2019, and claims she submitted it to several production companies, including a company that was later acquired by Miramax. However, Lewis cannot establish that any employee of Miramax ever received or reviewed her screenplay.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">B. The Works at Issue</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Both works involve a young woman who moves to a coastal California town to start a new life after a difficult relationship. Both protagonists find employment at a local business and develop romantic interests in local residents. These are common, unprotectable themes that have appeared in countless works of fiction.
            </p>
          </div>

          {/* Section III */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">III. ARGUMENT</h2>
            
            <h3 className="mb-2 text-sm font-semibold text-[#212223]">A. Lewis Cannot Establish Copyright Infringement</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              To establish copyright infringement, a plaintiff must demonstrate that the defendant copied protected elements of the work by satisfying both the extrinsic and intrinsic tests for substantial similarity. <span className="text-[#0062c4]">Corbello v. Valli, 974 F.3d 965, 974 (9th Cir. 2020)</span>. The extrinsic test is an objective comparison of specific expressive elements — including plot, theme, dialogue, mood, setting, pace, characters, and sequence of events — after filtering out unprotectable material such as facts, ideas, and scènes à faire; the intrinsic test asks whether an ordinary reasonable person would find the works substantially similar in their total concept and feel.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[#212223]">B. The Works Are Not Substantially Similar</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              The extrinsic test is an objective one that focuses on &quot;articulable similarities between the plot, themes, dialogue, mood, setting, pace, characters, and sequence of events.&quot; <span className="text-[#0062c4]">Kouf v. Walt Disney Pictures & Television, 16 F.3d 1042, 1045 (9th Cir. 1994)</span>. Here, when the unprotectable elements are filtered out, the remaining similarities are insufficient to establish substantial similarity as a matter of law.
            </p>
          </div>

          {/* Conclusion */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-[#212223]">IV. CONCLUSION</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              For the foregoing reasons, Defendant Miramax respectfully requests that the Court deny Plaintiff&apos;s Motion for Summary Judgment in its entirety.
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
