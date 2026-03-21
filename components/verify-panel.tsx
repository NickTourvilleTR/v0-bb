"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Notebook, FileText, AlertTriangle, ChevronRight, List, ScanEye } from "lucide-react";

export function VerifyPanel() {
  const [expandedPassages, setExpandedPassages] = useState<Record<string, boolean>>({ "1-1": true });

  const togglePassage = (key: string) => {
    setExpandedPassages((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-8">
        {/* Left sidebar buttons - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <ScanEye className="size-5 text-[#1d4b34]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex-1">
        {/* Header */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#737373]">
            DOCUMENT VERIFICATION RESULTS
          </p>
          <h1 className="mb-4 text-2xl font-semibold text-[#212223]">
            Navigate potential issues and explore related case law to validate each statement in your brief.
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

        {/* Verification Table */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white">
          {/* ===== STATEMENT #1 ===== */}
          {/* Table Header Row 1 */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e5e5e5] bg-[#f7f7f7]">
            <div className="border-r border-[#e5e5e5] p-4">
              <span className="font-semibold text-[#212223]">Statement #1</span>
            </div>
            <div className="border-r border-[#e5e5e5] p-4">
              <span className="font-semibold text-[#212223]">Verify</span>
            </div>
            <div className="p-4">
              <span className="font-semibold text-[#212223]">Explore more</span>
            </div>
          </div>

          {/* Table Row 1 Content */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e5e5e5]">
            {/* Statement Column */}
            <div className="border-r border-[#e5e5e5] p-4">
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                To establish copyright infringement, a plaintiff must demonstrate that the defendant copied protected elements of the work by satisfying both the extrinsic and intrinsic tests for substantial similarity. The extrinsic test is an objective comparison of specific expressive elements — including plot, theme, dialogue, mood, setting, pace, characters, and sequence of events — after filtering out unprotectable material such as facts, ideas, and scènes à faire; the intrinsic test asks whether an ordinary reasonable person would find the works substantially similar in their total concept and feel.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
              >
                Corbello v. Valli, 974 F.3d 965, 974 (9th Cir. 2020)
                <Notebook className="size-3" />
              </a>
            </div>

            {/* Verify Column */}
            <div className="border-r border-[#e5e5e5] p-4">
              {/* Supporting passage 1 */}
              <button
                onClick={() => togglePassage("1-1")}
                className="flex w-full items-center gap-2 text-left"
              >
                {expandedPassages["1-1"] ? (
                  <ChevronDown className="size-4 text-[#212223]" />
                ) : (
                  <ChevronRight className="size-4 text-[#212223]" />
                )}
                <span className="font-medium text-[#212223]">Supporting passage 1</span>
              </button>

              {expandedPassages["1-1"] && (
                <div className="mt-3 pl-6">
                  <p className="text-sm leading-relaxed text-[#212223]">
                    "Disparagement of Property. Bothmann's primary cause of action is for slander of title, or more appropriately called disparagement of title or property. In a disparagement action the plaintiff must allege and prove the following elements: (1) A falsehood (2) has been published, or communicated to a third person (3) when the defendant-publisher knows or reasonably should know that it will likely result in inducing others not to deal with the plaintiff and (4) in fact, the falsehood does play a material and substantial part in inducing others not to deal with the plaintiff; and (5) special damages are proximately caused as a result of the published falsehood."
                  </p>
                  <a
                    href="#"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                  >
                    Bothmann v. Harrington, 458 So. 2d at 1165 (Fla. Dist. Ct. App. 1984) — See in context
                  </a>
                </div>
              )}

              {/* Supporting passage 2 */}
              <button
                onClick={() => togglePassage("1-2")}
                className="mt-3 flex w-full items-center gap-2 text-left"
              >
                <ChevronRight className="size-4 text-[#212223]" />
                <span className="font-medium text-[#212223]">Supporting passage 2</span>
              </button>

              {/* Supporting passage 3 */}
              <button
                onClick={() => togglePassage("1-3")}
                className="mt-3 flex w-full items-center gap-2 text-left"
              >
                <ChevronRight className="size-4 text-[#212223]" />
                <span className="font-medium text-[#212223]">Supporting passage 3</span>
              </button>
            </div>

            {/* Explore More Column */}
            <div className="space-y-4 p-4">
              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Key Numbers:</p>
                <a
                  href="#"
                  className="mb-1 flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  237k136 Libel and Slander {'>'} Defenses
                  <Notebook className="size-3" />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  237k139 Libel and Slander {'>'} Actions
                  <Notebook className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Precision Research:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  Defamation and Disparagement {'>'} General Determination
                  <Notebook className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Citing References:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  Cases citing Bothmann v. Harrington
                  <Notebook className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Parallel Search:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  Cases with similar language
                  <Notebook className="size-3" />
                </a>
              </div>
            </div>
          </div>

          {/* ===== STATEMENT #2 ===== */}
          {/* Table Header Row 2 */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e5e5e5] bg-[#f7f7f7]">
            <div className="border-r border-[#e5e5e5] p-4">
              <span className="font-semibold text-[#212223]">Statement #2</span>
            </div>
            <div className="border-r border-[#e5e5e5] p-4">
              <span className="font-semibold text-[#212223]">Verify</span>
            </div>
            <div className="p-4">
              <span className="font-semibold text-[#212223]">Explore more</span>
            </div>
          </div>

          {/* Table Row 2 Content */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e5e5e5]">
            {/* Statement Column */}
            <div className="border-r border-[#e5e5e5] p-4">
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Legal malice, sometimes said to be an element of a disparagement of property action, is presumed to exist if the other elements are established.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
              >
                Bothmann v. Harrington, 458 So. 2d 1163 (Fla. Dist. Ct. App. 1984)
              </a>
            </div>

            {/* Verify Column - Problematic */}
            <div className="border-r border-[#e5e5e5] p-4">
              {/* Problematic Alert */}
              <div className="mb-4 rounded-lg border border-[#dc2626] bg-[#fef2f2] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="size-4 text-[#dc2626]" />
                  <span className="font-semibold text-[#dc2626]">Problematic</span>
                </div>
                <p className="text-sm leading-relaxed text-[#212223]">
                  The cited passage directly contradicts this statement. The court explicitly states that "there is no presumption" regarding essential elements in a disparagement action. The plaintiff bears the burden of establishing falsity without any presumption. Furthermore, the enumerated five elements do not include "legal malice" as a separate element that could be presumed; instead, knowledge or intent is embedded within element three.
                </p>
              </div>

              {/* Relevant passage */}
              <div>
                <p className="mb-2 font-medium text-[#212223]">Relevant passage</p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  "Disparagement of Property. A review of the record and the pleadings reveals that a genuine issue of material fact exists as to the falsehood element of the disparagement action. In this type of action, there is no presumption that a disparaging statement is false, as is the case in a personal slander action, and the plaintiff has the burden of establishing falsity."
                </p>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  Bothmann v. Harrington, 458 So. 2d at 1165 (Fla. Dist. Ct. App. 1984) — See in context
                </a>
              </div>
            </div>

            {/* Explore More Column - Empty for this row */}
            <div className="p-4"></div>
          </div>

          {/* ===== STATEMENT #3 ===== */}
          {/* Table Header Row 3 */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e5e5e5] bg-[#f7f7f7]">
            <div className="border-r border-[#e5e5e5] p-4">
              <span className="font-semibold text-[#212223]">Statement #3</span>
            </div>
            <div className="border-r border-[#e5e5e5] p-4">
              <span className="font-semibold text-[#212223]">Verify</span>
            </div>
            <div className="p-4">
              <span className="font-semibold text-[#212223]">Explore more</span>
            </div>
          </div>

          {/* Table Row 3 Content */}
          <div className="grid grid-cols-[1fr_1fr_1fr]">
            {/* Statement Column */}
            <div className="border-r border-[#e5e5e5] p-4">
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                However, if a privilege is shown by a defendant, the plaintiff must establish that the defendant acted with actual malice to overcome the privilege.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
              >
                Bothmann v. Harrington, 458 So. 2d 1163 (Fla. Dist. Ct. App. 1984)
              </a>
            </div>

            {/* Verify Column - Potential issue */}
            <div className="border-r border-[#e5e5e5] p-4">
              {/* Potential issue Alert */}
              <div className="mb-4 rounded-lg border border-[#d97706] bg-[#fffbeb] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="size-4 text-[#d97706]" />
                  <span className="font-semibold text-[#d97706]">Potential issue</span>
                </div>
                <p className="text-sm leading-relaxed text-[#212223]">
                  After analyzing all 16 passages from the cited case, no passages discuss privilege as a defense or the actual malice standard required to overcome privileges in disparagement claims. While this legal principle may be correct under Florida law, the specific citation provided does not support it. The case focuses on the five basic elements of disparagement but does not address privilege defenses.
                </p>
              </div>

              {/* Alternative authority found */}
              <div>
                <p className="mb-2 font-medium text-[#212223]">Alternative authority found</p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  "If the basis for a privilege is proven, then the plaintiff is required to prove actual malice in order to prevail."
                </p>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  Salit v. Ruden, McClosky, Smith, Schuster & Russell, P.A., 742 So. 2d at 384 (Fla. Dist. Ct. App. 1999) — See in context
                </a>
              </div>
            </div>

            {/* Explore More Column */}
            <div className="space-y-4 p-4">
              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Key Number:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  217k123 Libel and Slander {'>'} Trade Disparagement
                  <Notebook className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Precision Research:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  Defamation {'>'} Trade Disparagement
                  <Notebook className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Citing References:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  Cases citing Salit v. Ruden, McClosky, Smith, Schuster & Russell, P.A., 743 So. 2d 381 (Fla. Dist. Ct. App. 1999)
                  <Notebook className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Parallel Search:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#0062c4] underline hover:text-[#005da2]"
                >
                  25 cases with similar language
                  <Notebook className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
