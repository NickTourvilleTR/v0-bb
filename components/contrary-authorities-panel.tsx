"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SelectionContextMenu, useSelectionContextMenu } from "@/components/selection-context-menu";
import { JumpToMenu, type JumpToSection } from "@/components/jump-to-menu";

interface ContraryAuthoritiesPanelProps {
  className?: string;
  onNextFinalize?: () => void;
}

export function ContraryAuthoritiesPanel({ className, onNextFinalize }: ContraryAuthoritiesPanelProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { position, hide } = useSelectionContextMenu(contentRef as React.RefObject<HTMLElement>);
  return (
    <div className={cn("flex flex-1 flex-col items-center justify-center px-8 py-12 overflow-y-auto", className)}>
      <div style={{ width: "800px", maxWidth: "100%" }} className="w-full flex flex-col" ref={contentRef}>
        {/* Header */}
        <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
              OPPOSITION
            </p>
            <h1 className="text-2xl font-semibold text-[#212223]">
              Review anticipated challenges
            </h1>
          </div>

        {/* Party/Attorney Form Fields */}
        <div id="opposition-party-attorney" className="mb-6 space-y-2">
          <p className="text-base text-[#212223]">[Party/Attorney]</p>
          <p className="text-base text-[#212223]">[Email]</p>
          <p className="text-base text-[#212223]">[Street/Address]</p>
          <p className="text-base text-[#212223]">[Telephone]</p>
          <p className="text-base text-[#212223]">[Facsimile]</p>
        </div>

        {/* Add Party/Attorney Button */}
        <Button
          variant="outline"
          className="mb-12 rounded-full border-[#cccccc] px-6 text-[#212223] hover:bg-[#f7f7f7]"
        >
          <Plus className="mr-2 size-4" />
          Add a Party/Attorney
        </Button>

        {/* Court Document Preview */}
        <div className="space-y-8">
            {/* Court Header */}
            <div id="opposition-court-header" className="text-center">
                <p className="text-lg font-semibold uppercase tracking-wide text-[#212223]">
                  IN THE UNITED STATES DISTRICT COURT
                </p>
                <p className="text-lg font-semibold uppercase tracking-wide text-[#212223]">
                  NORTHERN DISTRICT OF TEXAS
                </p>
                <p className="text-lg font-semibold uppercase tracking-wide text-[#212223]">
                  FORT WORTH DIVISION
                </p>
              </div>

              {/* Case Caption */}
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-1/2">
                    <p className="font-semibold uppercase text-[#212223]">ADRIENNE LOVE,</p>
                  </div>
                  <div className="w-1/2 text-right">
                    <p className="text-[#212223]">Plaintiff,</p>
                  </div>
                </div>

                <p className="pl-8 text-[#212223]">v.</p>

                <div className="flex">
                  <div className="w-1/2">
                    <p className="font-semibold uppercase text-[#212223]">REBECCA SERLE, ET AL.,</p>
                  </div>
                  <div className="w-1/2 text-right">
                    <p className="text-[#212223]">Defendant.</p>
                    <p className="mt-2 text-[#212223]">Civil Action No. 4:25-cv-00064-O</p>
                  </div>
                </div>
              </div>

              {/* Horizontal Divider */}
              <hr className="border-t border-[#212223]" />

              {/* Legal Brief Content */}
              <div id="opposition-brief-content" className="space-y-6 pt-4 text-sm leading-relaxed text-[#212223]">
                <p>
                  Defendants&apos; substantial similarity argument proceeds as if a plaintiff alleging copyright infringement in a memoir is limited to protecting only the most ornate literary flourishes while surrendering every narrative element to the public domain. That is not the law. While it is true that facts standing alone are not protectable, <em>Feist Publications, Inc. v. Rural Tel. Serv. Co.</em>, 499 U.S. 340, 344–45 (1991), it is equally settled that &quot;the particular sequence in which an author strings a significant number of unprotectable elements can itself be a protectable element.&quot; <em>Metcalf v. Bochco</em>, 294 F.3d 1069, 1074 (9th Cir. 2002). The &quot;original selection and arrangement&quot; of otherwise generic components constitutes protectable expression, and infringement may be established by demonstrating that the defendant copied that arrangement. <em>Id.</em>; <em>see also Skidmore v. Led Zeppelin</em>, 952 F.3d 1051, 1074 (9th Cir. 2020).
                </p>

                <p>
                  That is precisely what Love alleges here. The First Amended Complaint does not ask this Court to protect the idea of a woman traveling to Italy to grieve her mother. It asks the Court to recognize that the specific constellation of expressive choices in <em>Eat the Lemon</em> — the protagonist&apos;s father named Chuck, the Aveeno face cream at the deathbed, the local boat driver named Antonio, the Frank Sinatra music during the cooking scene, the first intimate encounter during a storm, and the protagonist&apos;s mother connected to lemons — appears in <em>One Italian Summer</em> in the same combination and at substantially the same narrative junctures. Where &quot;the totality of the similarities goes beyond the necessities of the theme,&quot; a genuine question of copying is presented. <em>Shaw v. Lindheim</em>, 919 F.2d 1353, 1363 (9th Cir. 1990). The cumulative weight of these correspondences raises precisely the question <em>Metcalf</em> reserved for the trier of fact.
                </p>

                <p>
                  Defendants&apos; reliance on <em>Corbello v. Valli</em>, 974 F.3d 965 (9th Cir. 2020), is misplaced. <em>Corbello</em> applied the &quot;asserted truths doctrine&quot; to strip copyright protection from elements of a work that its own author repeatedly held out to publishers as a &quot;complete and truthful chronicle&quot; constituting the band&apos;s definitive factual record. <em>Id.</em> at 975–76. <em>Eat the Lemon</em> presents a materially different posture. Love&apos;s memoir is a work of literary nonfiction that employs fictional craft — composite scenes, interior monologue, reconstructed dialogue, and deliberate structural choices — none of which she has characterized as a verbatim factual record. Where an author&apos;s original expressive choices in recounting personal experience are what was allegedly copied, those choices do not lose protection merely because the underlying events were real. <em>See Harper &amp; Row, Publishers, Inc. v. Nation Enters.</em>, 471 U.S. 539, 547 (1985) (&quot;[C]opyright assures authors the right to their original expression.&quot;).
                </p>

                <p>
                  Finally, dismissal at the pleading stage is appropriate only where it is clear as a matter of law that no substantial similarity exists between the protectable elements of the works. <em>Woodland v. Hill</em>, 136 F.4th 1199, 1210 (9th Cir. 2025). Where, as here, the complaint identifies a substantial number of specific correspondences whose protectability — individually or in combination — cannot be resolved without a careful comparative analysis of both works in their entirety, the motion to dismiss should be denied. <em>See Zindel v. Fox Searchlight Pictures, Inc.</em>, No. 18-56087, 2020 WL 4502108, at *1 (9th Cir. Aug. 5, 2020) (reversing dismissal where &quot;reasonable minds could differ on the issue of substantial similarity&quot; and expert testimony could bear on the qualitative significance of the shared elements). Love is entitled to the opportunity to make that showing.
                </p>
              </div>

            {/* Bottom Action Button */}
            <div className="flex items-center justify-center gap-3 pb-8 pt-8">
              <Button
                onClick={onNextFinalize}
                className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
              >
                Next: Finalize
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}

