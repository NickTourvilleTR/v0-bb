"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, CircleCheck, FileText, List, Paperclip, Reply, ScanEye, Upload } from "lucide-react";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";

interface IntakeScreenProps {
  className?: string;
  onNextSelectArguments?: () => void;
  onSkipToGenerateDraft?: () => void;
  onGenerateDraft?: () => void;
  onEditOutline?: () => void;
  onQuote?: (text: string) => void;
  flowType?: "brief" | "judicial";
}

function QuotableCard({ children, label, onQuote, className }: { children: React.ReactNode; label: string; onQuote?: (text: string) => void; className?: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className={cn("relative rounded-lg border border-[#e5e5e5] bg-white p-5", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && onQuote && (
        <button
          onClick={() => onQuote(label)}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-[#1d4b34] text-white transition-transform duration-200 hover:scale-110 hover:bg-[#163d2a]"
          title="Quote this message"
        >
          <Reply className="size-4" />
        </button>
      )}
      {children}
    </div>
  );
}

const uploadedFiles = [
  { name: "Love – First Amended Complaint", type: "P" },
  { name: "Quitclaim & Assignment Agreement", type: "P" },
  { name: "Eat The Lemon Feb 2021 Manuscript", type: "W" },
  { name: "One Italian Summer (lodged)", type: "W" },
];

const judicialUploadedFiles = [
  { name: "COMPLAINT filed by 516, Inc.", type: "P" },
  { name: "NOTICE OF MOTION AND MOTION to Dismiss Case", type: "P" },
  { name: "OPPOSITION to NOTICE OF MOTION AND MOTION to Dismiss Case", type: "P" },
  { name: "Defendant's Objection and Request to Strike Plaintiff's Declarations", type: "W" },
  { name: "REPLY In Support NOTICE OF MOTION AND MOTION to Dismiss Case", type: "W" },
];

const argumentsSelected = [
  {
    id: "copyright",
    title: "Copyright infringement (17 U.S.C. § 101 et seq.)",
    description: "Direct, contributory, and vicarious infringement of Love's exclusive rights in Eat the Lemon, including reproduction, preparation of derivative works, and distribution.",
  },
  {
    id: "breach-fiduciary",
    title: "Breach of fiduciary duty",
    description: "Each defendant owed Love duties of loyalty and care arising from their roles as agents, managers, editors, and publishers entrusted with her manuscript.",
  },
  {
    id: "breach-contract",
    title: "Breach of contract",
    description: "Defendants who entered written and oral agreements to represent and market the ETL manuscript failed to perform their obligations and pay sums due.",
  },
  {
    id: "promissory-estoppel",
    title: "Promissory estoppel",
    description: "Defendants made promises regarding the care and commercialization of ETL on which Love justifiably relied to her detriment.",
  },
  {
    id: "intentional-interference",
    title: "Intentional interference with contractual relations",
    description: "Defendants intentionally disrupted Love's existing contracts related to the ETL Work, preventing performance and causing loss of profits and goodwill.",
  },
  {
    id: "tortious-interference",
    title: "Tortious interference with prospective business advantage",
    description: "Defendants interfered with economic relationships that would have resulted in benefit to Love from the exploitation of the ETL manuscript.",
  },
  {
    id: "intentional-misrepresentation",
    title: "Intentional misrepresentation",
    description: "Defendants misrepresented their intentions regarding the care, protection, and distribution of the ETL Work and related proceeds.",
  },
  {
    id: "negligent-misrepresentation",
    title: "Negligent misrepresentation",
    description: "Defendants negligently or falsely represented that they would use the ETL manuscript solely for agreed-upon purposes.",
  },
  {
    id: "negligence",
    title: "Negligence",
    description: "Defendants failed to act as reasonable professionals and breached their duty of care in handling Love's intellectual property.",
  },
  {
    id: "conversion",
    title: "Conversion",
    description: "Defendants converted Love's intellectual property, funds, and goodwill to their own use without consent.",
  },
  {
    id: "emotional-distress",
    title: "Intentional infliction of emotional distress",
    description: "Defendants' conduct in misappropriating Love's life story and allegedly silencing and isolating her caused severe emotional distress.",
  },
  {
    id: "stalking",
    title: "Stalking (Cal. Civ. Code § 1708.7)",
    description: "Certain defendants engaged in a pattern of conduct intended to follow, surveil, and harass Love to prevent her from challenging the alleged scheme.",
  },
  {
    id: "conspiracy",
    title: "Conspiracy",
    description: "Two or more defendants agreed to convert Love's manuscript and related intellectual property to their own benefit through deceptive means.",
  },
  {
    id: "unfair-business",
    title: "Unfair business practices (Cal. Bus. & Prof. Code § 17200 et seq.)",
    description: "Defendants' conduct constitutes unlawful, unfair, and fraudulent business practices under California law.",
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Love seeks a judicial accounting to determine monies generated from the ETL Work that defendants have failed to disclose or distribute.",
  },
  {
    id: "constructive-trust",
    title: "Constructive trust",
    description: "Defendants hold Love's intellectual property, goodwill, and proceeds as involuntary trustees and must re-convey them to Love.",
  },
  {
    id: "declaratory-relief",
    title: "Declaratory relief",
    description: "Love seeks a declaration clarifying defendants' obligations under the parties' agreements and her rights in the ETL Work.",
  },
];

const complaintSections = [
  "Parties and Jurisdiction",
  "Plaintiff's Work and Copyright",
  "Development, Submissions, and Industry Interest",
  "Alleged Access and Timeline Around OIS",
  "Alleged Substantial Similarities",
  "Causes of Action",
  "Prayer for Relief",
];

const complaintContent: { [key: string]: string[] } = {
  "Parties and Jurisdiction": [
    "Plaintiff is Adrienne Love, a California resident.",
    "Defendants include Acme Corp, Sound Made Public, Folio Literary Agency, The Gotham Group, 3 Arts, CAA, WME, Pinnacle Publishing/Atria, Paramount, Temple Hill, TFC, and individual industry professionals and author Rebecca Serle.",
    "Jurisdiction is based on federal copyright claims and supplemental jurisdiction, with venue alleged proper in this District.",
  ],
  "Plaintiff's Work and Copyright": [
    "Love wrote a memoir titled \"Eat the Lemon: A Journey to Amalfi in Search of My Mother's Missing Cookbook\" after trips to Positano in 2017, while at Djerassi.",
    "She alleges ownership of U.S. Copyright Registration No. TXu002385900 for the ETL Work, attached as Exhibit A.",
    "The memoir recounts grieving her mother's cancer death, traveling to Positano, seeking her mother's cooking teacher, leaving a five-year partner in California, and time-shifting to her mother's youth.",
  ],
  "Development, Submissions, and Industry Interest": [
    "In mid-2018, Love met agents Jeff Kleinman and Marly Rusoff, and discussions began including with Acme Corp.",
    "In early 2019, Acme Corp proposed a film and book rights agreement; at an April 2019 meeting Love was asked to leave, and an October 6, 2020 Acme Corp Quitclaim & Assignment Agreement is attached as Exhibit B.",
    "In May–June 2019, agent Shari Smiley shared the ETL manuscript widely; Love alleges Serle supposedly began writing One Italian Summer then.",
    "From May–October 2019, drafts were provided to editor Alexis Gargagliano, with a February 10, 2021 Certificate of Engagement attached as Exhibit C.",
    "A May 2019 letter from Rusoff to Gotham is attached as Exhibit D.",
    "In early 2020, Chronicle's Nion McEvoy expressed interest, and Gargagliano sent Love's pitch to agents including those for Serle.",
    "By 2020, materials were sent to CAA's Mollie Glick, WME's Erin Malone, and ICM's Andrianna deLone, who offered representation in April 2020.",
    "In 2022, CAA acquired ICM and deLone moved to CAA.",
    "Love alleges promises of expedited movement and serious buyer interest including Acme Corp, Chronicle, and HarperCollins, but she was advised to decline sponsorships.",
  ],
  "Alleged Access and Timeline Around OIS": [
    "Love alleges a conspiratorial plan to have Serle tell Love's story for greater financial reward, with sharing of manuscripts with CAA, Pinnacle Publishing, and Serle's team.",
    "On March 5, 2021, deLone sent ETL to Atria editor Trish Todd, who passed but praised it and cc'd editor Elbers.",
    "March 19, 2021 OIS book announcement issued with a sample chapter.",
    "On January 18, 2022, deLone emailed Love the OIS announcement; on reading about OIS, Love perceived strong similarities.",
    "OIS published March 1, 2022; Love recognized Hotel Poseidon on the cover and read materials on PP's site, then felt the sample chapter mirrored her opening chapter.",
    "Love's attorney urged her to read OIS; she alleges similarities including family names and experiences.",
    "On March 7, 2022, Love's IP counsel ended representation; Love retained new counsel.",
    "Love's agent dropped her on April 20, 2022, citing broken trust.",
    "Love learned Malone was Serle's agent and Glick had been Serle's agent, Atria published OIS, and deLone's husband worked at Atria.",
    "Love alleges Serle had access via these individuals.",
  ],
  "Alleged Substantial Similarities": [
    "Love alleges Serle used the ETL setting, characters, plot, themes, motifs, mood, and pace, not verbatim but with numerous detailed similarities.",
    "Love includes side-by-side social media photo parallels with matching locations, clothing, poses, and people.",
    "Both works share Positano hotel settings tied to mothers' romanticized pasts and real locations.",
    "Protagonists are young women grieving mothers' misdiagnosed cancer, leaving five-year California partners, seeking connection in Positano.",
    "Each mother is tied to cooking and lemons; fathers share the name Chuck; a local friend named Antonio takes boat trips at sunset.",
    "Motifs include cooking, Aveeno near death, pervasive \"gold\" imagery, and lemons linked to mothers.",
    "Themes involve grief journeys and understanding mothers anew through Amalfi, with solitary transformation.",
  ],
  "Causes of Action": [
    "Copyright infringement against all defendants, alleging access, willful copying, contributory/vicarious liability, ongoing harm, and seeking damages and injunction.",
    "Breach of fiduciary duty for failing to protect ETL, sharing with unauthorized parties, withholding updates and funds.",
    "Breach of contract for nonpayment and nonperformance under written marketing agreements.",
    "Promissory estoppel based on promises to manage, protect, and account for ETL and profits.",
    "Intentional interference with contractual relations and tortious interference with prospective advantage related to ETL deals.",
    "Intentional and negligent misrepresentation inducing access and control over ETL and proceeds.",
    "Negligence for failing to act reasonably, causing loss of control and proceeds.",
    "Conversion of intellectual property, goodwill, and proceeds.",
    "Intentional infliction of emotional distress based on theft of her personal story and severe distress.",
    "Stalking causing fear and substantial emotional distress.",
    "Conspiracy to convert ETL through fraud.",
    "Unfair competition under B&P § 17200 for unfair business practices and fraudulent conversion of funds.",
    "Accounting for monies generated from ETL and held in trust.",
    "Constructive trust and related equitable relief, including TRO and injunction.",
    "Declaratory relief to clarify obligations and rights regarding access, control, and monies from ETL.",
  ],
  "Prayer for Relief": [
    "Love seeks findings of willful infringement, fiduciary breach, injunctive relief, compensatory and statutory damages, disgorgement, punitive damages, fees and costs, and interest.",
  ],
};

const briefParties = [
  { label: "Plaintiff 1", name: "Adrienne Love", functional: false, disabled: true },
  { label: "Defendant 1", name: "Airbnb, Inc.", functional: false, disabled: false },
  { label: "Defendant 2", name: "Simon & Schuster, LLC", functional: true, disabled: false },
  { label: "Defendant 3", name: "Sound Made Public, Inc.", functional: false, disabled: false },
  { label: "Defendant 4", name: "Folio Literary Agency", functional: false, disabled: false },
  { label: "Defendant 5", name: "The Gotham Group, LLC", functional: false, disabled: false },
  { label: "Defendant 6", name: "3 Arts Entertainment, LLC", functional: false, disabled: false },
  { label: "Defendant 7", name: "Creative Artists Agency, LLC", functional: false, disabled: false },
  { label: "Defendant 8", name: "William Morris Endeavor Entertainment, LLC", functional: false, disabled: false },
];

export function IntakeScreen({ className, onNextSelectArguments, onSkipToGenerateDraft, onGenerateDraft, onEditOutline, onQuote, flowType = "brief" }: IntakeScreenProps) {
  const [showOutlinePreview, setShowOutlinePreview] = React.useState(false);
  const [selectedJurisdiction, setSelectedJurisdiction] = React.useState("9th-circuit");
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);
  const [selectedParties, setSelectedParties] = React.useState<string[]>([]);
  const [additionalDetails, setAdditionalDetails] = React.useState("");

  const toggleSection = (section: string) =>
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );

  const toggleParty = (name: string) =>
    setSelectedParties((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  return (
    <div className={cn("flex h-full flex-1 flex-col overflow-hidden bg-[#fcfcfc]", className)}>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-4xl gap-6 px-6 py-8 pb-32">
          {/* Left sidebar buttons - sticky */}
          <div className="sticky top-8 flex h-fit flex-col gap-2">
            <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
              <List className="size-5 text-[#212223]" />
            </button>
            <button onClick={() => setShowOutlinePreview(true)} className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
              <ScanEye className="size-5 text-[#1d4b34]" />
            </button>
          </div>

          {/* Main content column */}
          <div className="flex-1 max-w-3xl">
            {/* Header */}
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                INTAKE
              </p>
              <h1 className="text-2xl font-semibold text-[#212223]">
                Review and make your selections
              </h1>
            </div>

            {/* Brief flow: single combined card */}
            {flowType === "brief" && (
              <QuotableCard label="Complaint Summary" onQuote={onQuote} className="mb-6">
                {/* Complaint Summary section */}
                <h3 className="mb-3 text-base font-semibold text-[#212223]">Complaint Summary</h3>
                <div className="mb-6 divide-y divide-[#e5e5e5] rounded-lg border border-[#e5e5e5]">
                  {complaintSections.map((section) => (
                    <div key={section}>
                      <button
                        onClick={() => toggleSection(section)}
                        className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-[#f7f7f7]"
                      >
                        <ChevronRight className={cn("size-4 shrink-0 text-[#737373] transition-transform", expandedSections.includes(section) && "rotate-90")} />
                        <span className="text-sm text-[#212223]">{section}</span>
                      </button>
                      {expandedSections.includes(section) && complaintContent[section].length > 0 && (
                        <div className="border-t border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3">
                          <ul className="space-y-2">
                            {complaintContent[section].map((bullet, idx) => (
                              <li key={idx} className="flex gap-2 text-sm text-[#212223]">
                                <span className="shrink-0">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Party selection section */}
                <p className="mb-3 text-sm text-[#212223]">I&apos;ve also identified the following parties in the case.</p>
                <div className="mb-6 rounded-lg border border-[#e5e5e5] p-4">
                  <p className="mb-3 text-sm font-medium text-[#212223]">Please indicate which party you represent:</p>
                  <div className="space-y-2.5">
                    {briefParties.map((party) => (
                      <label
                        key={party.name}
                        className={cn(
                          "flex items-center gap-3",
                          party.functional ? "cursor-pointer" : party.disabled ? "cursor-default" : "cursor-not-allowed"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={selectedParties.includes(party.name)}
                          onChange={() => party.functional && toggleParty(party.name)}
                          disabled={party.disabled}
                          className={cn(
                            "size-4 rounded border-[#a3a3a3] accent-[#1d4b34]",
                            !party.functional && !party.disabled && "cursor-not-allowed",
                            party.disabled && "opacity-30"
                          )}
                        />
                        <span className={cn(
                          "text-sm",
                          party.disabled ? "text-[#a3a3a3]" : "text-[#212223]"
                        )}>
                          <span className="font-medium">{party.label}:</span> {party.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional details section */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-[#212223]">Additional details</h4>
                    <span className="rounded bg-[#f2f2f2] px-2 py-0.5 text-xs text-[#737373]">Optional</span>
                  </div>
                  <p className="mb-3 text-sm text-[#212223]">
                    <span className="font-semibold">Are there any other key details you can provide?</span>{" "}
                    These will help tailor the brief to your scenario. You can enter additional information such as:
                  </p>
                  <ul className="mb-3 ml-5 list-disc space-y-1 text-sm text-[#212223]">
                    <li>Pertinent facts</li>
                    <li>Relevant context</li>
                    <li>Theory of the case</li>
                    <li>Client&apos;s side of the story</li>
                    <li>Contested facts and issues</li>
                    <li>Strategic objectives or considerations</li>
                  </ul>
                  <div className="relative rounded-lg border border-[#e5e5e5]">
                    <textarea
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      placeholder="Enter additional details here..."
                      rows={4}
                      className="w-full resize-none rounded-lg bg-white px-4 py-3 pr-10 text-sm text-[#212223] placeholder:text-[#a3a3a3] focus:outline-none"
                    />
                    <button className="absolute bottom-3 right-3 text-[#a3a3a3] hover:text-[#737373]">
                      <Paperclip className="size-4" />
                    </button>
                  </div>
                </div>
              </QuotableCard>
            )}

            {/* Judicial flow: work product card */}
            {flowType === "judicial" && (
              <QuotableCard label="Work product: Opinion" onQuote={onQuote} className="mb-6">
                <h3 className="mb-3 text-sm font-medium text-[#212223]">Work product</h3>
                <div className="rounded-md border border-[#d4d4d4] bg-[#f2f2f2] px-4 py-2.5 text-sm font-medium text-[#212223]">
                  Opinion
                </div>
              </QuotableCard>
            )}

            {/* Judicial flow: uploaded files card */}
            {flowType === "judicial" && (
              <QuotableCard label="Uploaded files" onQuote={onQuote} className="mb-6">
                <h3 className="mb-3 text-sm font-medium text-[#212223]">Uploaded files</h3>
                <div className="flex flex-wrap gap-2">
                  {judicialUploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-md border border-[#e5e5e5] bg-white px-3 py-2">
                      <div className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded text-[10px] font-bold text-white",
                        file.type === "P" ? "bg-[#dc0a0a]" : "bg-[#2563eb]"
                      )}>
                        {file.type}
                      </div>
                      <span className="text-sm text-[#212223]">{file.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <div className="flex flex-1 items-start justify-between gap-3 rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3">
                    <div className="flex items-start gap-3">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-[#737373]" />
                      <div>
                        <p className="text-sm font-medium text-[#212223]">Verify uploaded filings</p>
                        <p className="mt-0.5 text-xs text-[#737373]">Check citations in the uploaded documents</p>
                      </div>
                    </div>
                    <ChevronRight className="mt-0.5 size-4 shrink-0 text-[#737373]" />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-3 rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] px-4 py-3">
                    <div className="flex items-start gap-3">
                      <Upload className="mt-0.5 size-4 shrink-0 text-[#737373]" />
                      <div>
                        <p className="text-sm font-medium text-[#212223]">Upload prior opinions</p>
                        <p className="mt-0.5 text-xs text-[#737373]">Automatically customize the style, voice, and formatting of your draft.</p>
                      </div>
                    </div>
                    <ChevronRight className="mt-0.5 size-4 shrink-0 text-[#737373]" />
                  </div>
                </div>
              </QuotableCard>
            )}

            {/* Case Details Card - judicial only */}
            {flowType === "judicial" && (
            <QuotableCard label="Case details" onQuote={onQuote} className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-[#212223]">Case details</h3>
              <div className="rounded-md border border-[#d4d4d4] bg-[#f2f2f2] px-4 py-3">
                <div className="space-y-2 text-sm text-[#212223]">
                  <p><span className="font-medium text-[#212223]">Judge:</span> David O. Carter</p>
                  <p><span className="font-medium text-[#212223]">Civil Action No.:</span> 8:25-CV-01204</p>
                  <p><span className="font-medium text-[#212223]">Court:</span> United States District Court, C.D. California</p>
                  <p><span className="font-medium text-[#212223]">Plaintiff:</span> 516, Inc. dba DG Plumbing</p>
                  <p><span className="font-medium text-[#212223]">Defendant:</span> Richmond National Insurance Company</p>
                </div>
              </div>
            </QuotableCard>
            )}

            {/* Jurisdiction Card - judicial flow only */}
            {flowType === "judicial" && (
              <QuotableCard label="Jurisdiction" onQuote={onQuote} className="mb-6">
                <h3 className="mb-1 text-sm font-medium text-[#212223]">Jurisdiction</h3>
                <p className="mb-4 text-xs text-[#737373]">Sets the scope for your research</p>
                <div className="space-y-3">
                  {[
                    { id: "9th-circuit", label: "9th Circuit" },
                    { id: "different", label: "Select different jurisdiction(s)" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedJurisdiction(option.id)}
                      className="flex w-full items-center gap-3 text-left"
                    >
                      <div className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                        selectedJurisdiction === option.id
                          ? "border-[#1d4b34] bg-[#1d4b34]"
                          : "border-[#a3a3a3]"
                      )}>
                        {selectedJurisdiction === option.id && (
                          <div className="size-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={cn(
                        "text-sm",
                        selectedJurisdiction === option.id ? "text-[#212223]" : "text-[#525252]"
                      )}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </QuotableCard>
            )}

            {/* Call to Action Buttons */}
            <div className="flex items-center justify-center gap-3 pb-8 pt-4">
              {flowType !== "judicial" && (
                <button
                  onClick={onSkipToGenerateDraft}
                  className="rounded-full border border-[#e5e5e5] bg-white px-6 py-3 text-sm font-medium text-[#212223] hover:bg-[#f7f7f7]"
                >
                  Skip to generate draft
                </button>
              )}
              <button
                onClick={onNextSelectArguments}
                className="rounded-full bg-[#1d4b34] px-6 py-3 text-sm font-medium text-white hover:bg-[#163d2a]"
              >
                {flowType === "judicial" ? "Next: Select claims" : "Next: Select arguments"}
              </button>
            </div>
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
