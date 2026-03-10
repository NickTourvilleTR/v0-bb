"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, FileText, AlertTriangle } from "lucide-react";

export function VerifyPanel() {
  const [expandedPassage, setExpandedPassage] = useState<number | null>(1);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto max-w-5xl">
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
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e5e5e5]">
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

          {/* Table Row */}
          <div className="grid grid-cols-[1fr_1fr_1fr]">
            {/* Statement Column */}
            <div className="border-r border-[#e5e5e5] p-4">
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                In a disparagement action, the plaintiff must allege and prove: (1) a falsehood; (2) has been published or communicated to a third person; (3) when the defendant-publisher knows or reasonably should know that it will likely result in inducing others not to deal with the plaintiff; (4) in fact, the falsehood does play a material and substantial part in inducing others not to deal with the plaintiff; and (5) special damages are proximately caused as a result of the published falsehood.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-[#006fc4] underline hover:text-[#005da2]"
              >
                Bothmann v. Harrington, 458 So. 2d 1163 (Fla. Dist. Ct. App. 1984)
                <ExternalLink className="size-3" />
              </a>
            </div>

            {/* Verify Column */}
            <div className="border-r border-[#e5e5e5] p-4">
              <button
                onClick={() => setExpandedPassage(expandedPassage === 1 ? null : 1)}
                className="flex w-full items-center gap-2 text-left"
              >
                {expandedPassage === 1 ? (
                  <ChevronUp className="size-4 text-[#212223]" />
                ) : (
                  <ChevronDown className="size-4 text-[#212223]" />
                )}
                <span className="font-medium text-[#212223]">Supporting passage 1</span>
              </button>

              {expandedPassage === 1 && (
                <div className="mt-3">
                  <p className="text-sm leading-relaxed text-[#212223]">
                    "Disparagement of Property. Bothmann's primary cause of action is for slander of title, or more appropriately called disparagement of title or property. In a disparagement action the plaintiff must allege and prove the following elements: (1) A falsehood (2) has been published, or communicated to a third person (3) when the defendant-publisher knows or reasonably should know that it will likely result in inducing others not to deal with the plaintiff and (4) in fact, the falsehood does play a material and substantial part in inducing others not to deal with the plaintiff; and (5) special damages are proximately caused as a result of the published falsehood."
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-[#006fc4] underline hover:text-[#005da2]"
                  >
                    Bothmann v. Harrington, 458 So. 2d 1163
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Explore More Column */}
            <div className="p-4 space-y-4">
              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Key Numbers:</p>
                <a
                  href="#"
                  className="mb-1 flex items-center gap-1 text-sm text-[#006fc4] underline hover:text-[#005da2]"
                >
                  237k136 Libel and Slander {'>'} Defenses
                  <ExternalLink className="size-3" />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#006fc4] underline hover:text-[#005da2]"
                >
                  237k139 Libel and Slander {'>'} Actions
                  <ExternalLink className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Precision Research:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#006fc4] underline hover:text-[#005da2]"
                >
                  Defamation and Disparagement {'>'} General Determination
                  <ExternalLink className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Citing References:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#006fc4] underline hover:text-[#005da2]"
                >
                  Cases citing Bothmann v. Harrington
                  <ExternalLink className="size-3" />
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-[#212223]">Parallel Search:</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-[#006fc4] underline hover:text-[#005da2]"
                >
                  Cases with similar language
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
