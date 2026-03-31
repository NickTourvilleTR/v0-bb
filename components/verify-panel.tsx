"use client";

import { useState } from "react";
import { FileText, AlertTriangle, List, Plus } from "lucide-react";
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
        <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 shadow-sm">
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
                DEFENDANT DEFENDANT&apos;S JOINDER IN<br/>
                CREATIVE ARTISTS AGENCY, LLC&apos;S MOTION TO<br/>
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

          {/* I. PRELIMINARY STATEMENT */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">I. PRELIMINARY STATEMENT</h2>
            
            {/* Bulleted Points */}
            <ul className="space-y-3">
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  Plaintiff Adrienne Love alleges a vast conspiracy — encompassing the author, publisher, literary agents, editors, and a movie studio — to steal her life story as depicted in her unpublished memoir Eat the Lemon and exploit it in Rebecca Serle&apos;s novel One Italian Summer, published by S&amp;S. <span className="text-[#737373]">(FAC ¶¶46-48)</span>
                </span>
              </li>
              
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  Love further alleges that the conspirators stalked her, sent strangers claiming to work for the FBI to confront her, and caused two mysterious deaths to intimidate her into silence. <span className="text-[#737373]">(FAC ¶¶63, 65)</span>
                </span>
              </li>
              
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  Love has now filed a First Amended Complaint that is substantially identical to her original complaint, asserting copyright infringement and 13 state law claims against S&amp;S. <span className="text-[#737373]">(FAC ¶¶130-264)</span>
                </span>
              </li>
              
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  A complaint must be dismissed under Rule 12(b)(6) where it fails to state a claim for relief. The FAC&apos;s fatal defects are apparent from the face of the pleading and the works themselves, without any need for discovery. <span className="text-[#0062c4]">(FRCP 12(b)(6))</span>
                </span>
              </li>
              
              <li className="flex items-baseline gap-2 text-sm text-[#212223]">
                <span className="mt-px shrink-0 text-[#212223]">•</span>
                <span>
                  Because (1) the two works are not substantially similar in protectable expression, (2) the state law claims lack specific allegations of conduct by S&amp;S, and (3) many state law claims are untimely and/or preempted, the FAC should be dismissed with prejudice.
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
                S&amp;S is the publisher of <em>One Italian Summer</em>, a novel authored by Rebecca Serle. FAC ¶¶ 11, 31, 78. The novel was first publicly announced in March 2021, when a sample chapter was released; it was published in March 2022. Id. ¶¶ 48, 50.
              </p>
            </div>

            {/* B. The Alleged Conspiracy */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">B. The Alleged Conspiracy</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Love&apos;s central allegation is that a network of conspirators—including individuals she had trusted as her own advisors—decided that her life story would fetch greater commercial returns if told by Serle, an established novelist, rather than by Love herself. FAC ¶ 46. She contends that these conspirators arranged to funnel her manuscript to Serle, who then appropriated it for both <em>One Italian Summer</em> and a related film project currently in development. Id. ¶¶ 37–48, 50, 57–61, 78–79.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                The alleged conspiracy goes well beyond literary theft. Love asserts that to silence her, the conspirators arranged for her to be surveilled, confronted by strangers claiming to work for the FBI, and subjected to other forms of physical and emotional intimidation. Id. ¶¶ 63, 66, 76, 126.
              </p>
            </div>

            {/* C. The Two Works Compared */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">C. The Two Works Compared</h3>
              
              {/* 1. Eat the Lemon */}
              <div className="mb-6 ml-4">
                <p className="mb-4 font-semibold text-[#212223]">1. <em>Eat the Lemon</em></p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  <em>Eat the Lemon</em> is, by Love&apos;s own description, a &quot;personal memoir&quot; recounting her true experiences. FAC ¶¶ 33, 36. The work centers on Love&apos;s efforts to come to terms with the loss of her mother—who died of cancer roughly a decade before the events described—and with the broader trauma of her family life, through extended periods of immersion in the culture and landscape of Italy&apos;s Amalfi Coast. Id. ¶¶ 112, 118, 124.
                </p>
              </div>

              {/* 2. One Italian Summer */}
              <div className="ml-4">
                <p className="mb-4 font-semibold text-[#212223]">2. <em>One Italian Summer</em></p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  <em>One Italian Summer</em> is an avowed work of fiction built around an extended device of magical realism. The novel opens with Katy, the narrator, in the immediate aftermath of her mother&apos;s death from cancer—a loss that has upended her sense of self and strained her marriage to Eric. OIS at 1, 3. Before her mother died, she and Katy had planned a trip together to Positano, Italy, where her mother had spent a meaningful summer as a young woman. Id. at 10–13.
                </p>
              </div>
            </div>

            {/* D. Procedural History */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">D. Procedural History</h3>
              <p className="text-sm leading-relaxed text-[#212223]">
                Love filed her original Complaint on February 28, 2025. S&amp;S accepted service in June 2025 and filed a Motion to Dismiss the original Complaint on June 30, 2025. ECF Nos. 19, 27–28. Love filed an Opposition on August 18, 2025, and two days later filed the First Amended Complaint, which is now the operative pleading. ECF Nos. 43–44.
              </p>
            </div>
          </div>

          {/* III. ARGUMENT */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">III. ARGUMENT</h2>
            
            {/* A. Copyright Claim */}
            <div className="mb-6">
              <h3 className="mb-4 font-bold text-[#212223]">A. Love&apos;s Copyright Infringement Claim Fails As A Matter Of Law.</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                To state a claim for copyright infringement, a plaintiff is required to plead &quot;among other things, (1) the copying of copyrighted material and (2) the unlawful appropriation of it.&quot; <a href="#" className="text-[#0062c4] hover:underline">Woodland v. Hill, 136 F.4th 1199, 1205 (9th Cir. 2025)</a>. &quot;To show unlawful appropriation, the plaintiff must prove that the defendant copied enough of the protected expression in the work to render the two works &apos;substantially similar.&apos;&quot; <em>Id.</em> at 1206.
              </p>
              
              {/* 1. Biographical Facts */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">1. The Details Allegedly Copied Are Biographical Facts That Are Not Protectable.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Love&apos;s copyright claim fails on the threshold ground that the alleged copying involved the facts of her biography, which are not subject to copyright protection. Love&apos;s First Amended Complaint is explicit that the narrative details <em>One Italian Summer</em> supposedly lifted from <em>Eat the Lemon</em> correspond to the facts of her own life. <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 33, 75</a>
                </p>
              </div>

              {/* 2. No Substantial Similarity */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">2. Even If Eat the Lemon Were Entitled To The Protection Afforded Fictional Works, There Would Still Be No Substantial Similarity.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Even if <em>Eat the Lemon</em> is analyzed as if it were a fictional work, notwithstanding Love&apos;s emphatic representations about its non-fictional status, the result does not change.
                </p>

                {/* a. Plot */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">a. Plot and Sequence of Events</p>
                  <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                    It is fundamental that &quot;[n]o one can own the basic idea for a story. General plot ideas are not protected by copyright law; they remain forever the common property of artistic mankind.&quot; <a href="#" className="text-[#0062c4] hover:underline"><em>Berkic v. Crichton</em>, 761 F.2d 1289, 1293 (9th Cir. 1985)</a>.
                  </p>
                </div>

                {/* b. Characters */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">b. Characters</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Nor are there protectable similarities between the characters across the two works, especially considering that characters are generally not subject to copyright protection unless they are &quot;especially distinctive.&quot; <a href="#" className="text-[#0062c4] hover:underline"><em>Olson v. NBC</em>, 855 F.2d 1446, 1451, 1452 (9th Cir. 1988)</a>.
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
                    There are also no protectable similarities at the level of setting. While Love asserts that both works &quot;are set on the Amalfi Coast of Italy in quaint, family-run hotels,&quot; <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 81</a>, that is misleading.
                  </p>
                </div>

                {/* e. Theme */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">e. Theme</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Nor are there protectable similarities at the level of theme. The general theme of a female protagonist coming to feel greater connection to her deceased mother by visiting the Amalfi Coast is not protectable.
                  </p>
                </div>
              </div>
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
