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
        <div className="mx-auto max-w-3xl rounded-lg border border-[#e5e5e5] bg-white p-6 shadow-sm">
          {/* Party/Attorney Fields */}
          <div className="mb-8 space-y-2 text-sm text-[#212223]">
            <p>[Party/Attorney]</p>
            <p>[Email]</p>
            <p>[Street/Address]</p>
            <p>[Telephone]</p>
            <p>[Facsimile]</p>
          </div>

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
                DEFENDANT SIMON &amp; SCHUSTER, LLC&apos;S JOINDER IN<br/>
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
                Love&apos;s central allegation is that a network of conspirators—including individuals she had trusted as her own advisors—decided that her life story would fetch greater commercial returns if told by Serle, an established novelist, rather than by Love herself. FAC ¶ 46. She contends that these conspirators arranged to funnel her manuscript to Serle, who then appropriated it for both <em>One Italian Summer</em> and a related film project currently in development. Id. ¶¶ 37–48, 50, 57–61, 78–79. Love further alleges that in May–June 2019 her literary agent shared the manuscript widely, that it was later sent to agents connected to Serle in early 2020, and that an S&amp;S editor received a copy in early 2021. Id. ¶¶ 26, 39, 42–43, 47, 58–61.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                The alleged conspiracy goes well beyond literary theft. Love asserts that to silence her, the conspirators arranged for her to be surveilled, confronted by strangers claiming to work for the FBI, and subjected to other forms of physical and emotional intimidation. Id. ¶¶ 63, 66, 76, 126. She also contends that two individuals died under circumstances connected to the alleged scheme. Id. ¶ 65.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                In a contradiction the FAC never resolves, Love simultaneously claims that <em>One Italian Summer</em> is an unlawful copy of <em>Eat the Lemon</em> and that it deliberately distorts the facts of her life to cast her in a negative light. Id. ¶¶ 64, 76, 126.
              </p>
              <p className="text-sm leading-relaxed text-[#212223]">
                Notably, correspondence between Serle and her literary agent demonstrates that Serle had already formulated the concept and basic plot of <em>One Italian Summer</em> in June 2019—before Love&apos;s manuscript was allegedly circulating in Serle&apos;s orbit. That correspondence was shared with Love&apos;s counsel in an effort to resolve this matter without litigation, to no avail. As explained below, however, the Court need not resolve the question of independent creation because the two works are not substantially similar as a matter of law.
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
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The memoir opens with Love and her boyfriend, Brad, traveling together down the Amalfi Coast. ETL at 3–4. Through a series of flashbacks, readers learn that Love&apos;s childhood was marked by deep unhappiness: her father abandoned the family when she was young, her stepfather was emotionally abusive and defrauded her of her mother&apos;s belongings after her mother&apos;s death, and her relationship with her mother was characterized by distance and coldness. Id. at 6–10, 17–18, 36, 38–39. Love herself reflects at one point that she could not recall a single warm memory of her mother. Id. at 60–61, 93.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  While in Italy, Love and Brad befriend Adele, a woman who rents them an apartment, and Love confides to Adele that her mother once studied cooking in Amalfi. Id. at 11, 34–37. Shortly after Love and Brad return to San Francisco, Love decides to go back to Italy alone, this time with a specific mission: to locate her mother&apos;s former cooking teacher and complete a cookbook her mother had assembled during her time in Italy. Id. at 45. Brad largely disappears from the narrative at this point.
                </p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  The remainder of the memoir follows Love&apos;s deepening connection to Adele, her family, and the rhythms of Italian life. On her mother&apos;s birthday, Love hosts a dinner party and prepares a recipe from her mother&apos;s cookbook; Adele&apos;s mother Rosa, who is an experienced cook, steps in to lead the preparation. Id. at 70, 73–78. Rosa later teaches Love to cook—offering a form of maternal warmth Love had never received from her own mother. Id. at 80–81, 93. Love also befriends a local woman named Anita, who helps her track down the identity of her mother&apos;s cooking teacher, only to learn that the teacher has died. Id. at 85–86. After a brief return to California, Love travels back to Italy and is introduced to Marietta, who was the cooking teacher&apos;s assistant and knew Love&apos;s mother during her time in Amalfi. Id. at 89–90, 94–95. From Marietta, Love learns that her mother was happy during the period Marietta knew her—a revelation that provides Love with a measure of peace she had not previously found. Id. at 95. The memoir ends with Love cherishing this new understanding of her mother and embracing Rosa as the mother figure she never had. Id. at 100.
                </p>
              </div>

              {/* 2. One Italian Summer */}
              <div className="ml-4">
                <p className="mb-4 font-semibold text-[#212223]">2. <em>One Italian Summer</em></p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  <em>One Italian Summer</em> is an avowed work of fiction built around an extended device of magical realism. The novel opens with Katy, the narrator, in the immediate aftermath of her mother&apos;s death from cancer—a loss that has upended her sense of self and strained her marriage to Eric. OIS at 1, 3. Before her mother died, she and Katy had planned a trip together to Positano, Italy, where her mother had spent a meaningful summer as a young woman. Id. at 10–13. Katy decides to take the trip alone.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  From the moment she arrives at the Hotel Poseidon—her mother&apos;s chosen accommodation—the novel takes a fantastical turn. On her first full day in Positano, Katy encounters a woman she immediately recognizes as her mother, but at the age her mother was when she lived in Italy decades earlier. Id. at 52–56. This encounter becomes the novel&apos;s central conceit: Katy is given the extraordinary opportunity to know her mother not as a parent, but as a peer—a young woman with ambitions, desires, and a life of her own that predated and ultimately outlasted her role as a mother.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  During her time in Positano, Katy also meets Adam, a charming American who works for a hotel acquisition company and is exploring the purchase of two local properties, including the Hotel Poseidon. Id. at 38–47. Her romantic entanglement with Adam unfolds as a parallel storyline to her growing relationship with her younger mother, and eventually culminates in a sexual encounter. Id. at 197–200.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The novel&apos;s central revelation arrives when Katy, while visiting her mother&apos;s apartment, discovers a photograph of herself as an infant on her mother&apos;s nightstand. Id. at 193. She realizes that her mother&apos;s trip to Italy did not occur before she was born, as she had always believed, but after—meaning her mother left her as a baby to come here. Id. at 193–96. Katy confronts her mother in anger, then later reconciles with her, coming to understand that her mother had felt her own identity and ambitions subsumed by the sudden responsibilities of motherhood and marriage, and had needed to reclaim a piece of who she was. Id. at 206–16.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  In the novel&apos;s final act, Katy learns she has been living in 1992—the year her mother spent the summer in Italy—and that all of her experiences with Adam and her younger mother have taken place in a separate timeline. Id. at 211. She returns to the present to find Eric waiting for her in Positano. After speaking with her father and processing what she has learned, Katy recommits to her marriage. Id. at 227–37. The novel ends with Katy spreading her mother&apos;s ashes in the Italian sea, having come to see her mother—and herself—as a fully autonomous person, not defined by her relationships to others. Id. at 238–45.
                </p>
              </div>
            </div>

            {/* D. Procedural History */}
            <div className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">D. Procedural History</h3>
              <p className="text-sm leading-relaxed text-[#212223]">
                Love filed her original Complaint on February 28, 2025. S&amp;S accepted service in June 2025 and filed a Motion to Dismiss the original Complaint on June 30, 2025. ECF Nos. 19, 27–28. Love filed an Opposition on August 18, 2025, and two days later filed the First Amended Complaint, which is now the operative pleading. ECF Nos. 43–44. The FAC is substantially identical to the original Complaint, with the primary difference being that Love no longer asserts each state law claim against every defendant. Because the FAC suffers from the same fatal deficiencies as the original pleading, S&amp;S now moves to dismiss it with prejudice.
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
                To state a claim for copyright infringement, a plaintiff is required to plead &quot;among other things, (1) the copying of copyrighted material and (2) the unlawful appropriation of it.&quot; <a href="#" className="text-[#0062c4] hover:underline">Woodland v. Hill, 136 F.4th 1199, 1205 (9th Cir. 2025)</a>. &quot;To show unlawful appropriation, the plaintiff must prove that the defendant copied enough of the protected expression in the work to render the two works &apos;substantially similar.&apos;&quot; <em>Id.</em> at 1206. Here, Love&apos;s copyright claim fails as a matter of law because the two works are not substantially similar in their protected elements.
              </p>
              
              {/* 1. Biographical Facts */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">1. The Details Allegedly Copied Are Biographical Facts That Are Not Protectable.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Love&apos;s copyright claim fails on the threshold ground that the alleged copying involved the facts of her biography, which are not subject to copyright protection. Love&apos;s First Amended Complaint is explicit that the narrative details <em>One Italian Summer</em> supposedly lifted from <em>Eat the Lemon</em> correspond to the facts of her own life. She characterizes <em>Eat the Lemon</em> as a &quot;personal memoir based on her own life,&quot; and alleges that, with <em>One Italian Summer</em>, &quot;Serle effectively interjects herself into Love&apos;s life and stands in her shoes to tell the detailed story of Love&apos;s highly personal experiences.&quot; <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 33, 75</a>; see also <a href="#" className="text-[#0062c4] hover:underline">¶ 74</a> asserting <em>One Italian Summer</em> is &quot;replete with intricate personal details from Love&apos;s life and manuscript&quot;).
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Love cannot claim copyright protection in the facts of her life. &quot;To qualify for copyright protection, a work must be original to the author.&quot; <a href="#" className="text-[#0062c4] hover:underline"><em>Feist Publ&apos;ns, Inc. v. Rural Tel. Serv. Co.</em>, 499 U.S. 340, 345 (1991)</a> Accordingly, &quot;no author may copyright . . . the facts he narrates.&quot; Id. at 344-45. Thus, an author cannot claim copyright ownership over the details of his or her life, even when they are set forth in a memoir or autobiography. <a href="#" className="text-[#0062c4] hover:underline"><em>See</em> 1 Nimmer On Copyright § 2.11 (2025)</a> (&quot;Courts have denied copyright protection not only to raw historical facts, but also to facts set forth in biographical works, in news stories, and in other forms of expression.&quot;).
                </p>
              </div>

              {/* 2. No Substantial Similarity */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">2. Even If Eat the Lemon Were Entitled To The Protection Afforded Fictional Works, There Would Still Be No Substantial Similarity.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Even if <em>Eat the Lemon</em> is analyzed as if it were a fictional work, notwithstanding Love&apos;s emphatic representations about its non-fictional status, the result does not change. There would be no substantial similarity in protectable expression even if Love <em>were</em> entitled to claim copyright protection in the events and characters depicted in her memoir.
                </p>

                {/* a. Plot */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">a. Plot and Sequence of Events</p>
                  <p className="mb-2 text-sm leading-relaxed text-[#212223]">
                    It is fundamental that &quot;[n]o one can own the basic idea for a story. General plot ideas are not protected by copyright law; they remain forever the common property of artistic mankind.&quot; <a href="#" className="text-[#0062c4] hover:underline"><em>Berkic v. Crichton</em>, 761 F.2d 1289, 1293 (9th Cir. 1985)</a>. Thus, in applying the extrinsic test, a court must look &quot;beyond the vague, abstracted idea of a general plot.&quot; Id. Instead, the court &quot;compares, not the basic plot ideas for stories, but the actual concrete elements that make up the total sequence of events and the relationships between the major characters.&quot; <a href="#" className="text-[#0062c4] hover:underline"><em>Funky Films</em>, 462 F.3d at 1077</a>.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Beyond the unprotectable fact that <em>Eat the Lemon</em> and <em>One Italian Summer</em> both involve women who travel alone to the Amalfi Coast seeking connection with their deceased mothers, the works tell very different stories. The central developments in <em>One Italian Summer</em> are Katy travelling back in time after arriving in Positano, meeting and befriending a 30-year-old version of her mother, discovering that her mother abandoned her as an infant, and then being forced to confront, for the first time, her mother&apos;s status as an independent person. <em>Eat the Lemon</em> involves no such time travel or disillusioning revelations. Instead, the central developments are Love&apos;s finding a surrogate family in Italy, with whom she experiences true feelings of family for the first time, and meeting someone who knew her mother when she was younger and is able to share happy memories about her.
                  </p>
                </div>

                {/* b. Characters */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">b. Characters</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Nor are there protectable similarities between the characters across the two works, especially considering that characters are generally not subject to copyright protection unless they are &quot;especially distinctive.&quot; <a href="#" className="text-[#0062c4] hover:underline"><em>Olson v. NBC</em>, 855 F.2d 1446, 1451, 1452 (9th Cir. 1988)</a>. While both Love and Katy grieve over losing a mother to cancer, that is a general plot point that is not subject to copyright protection. The characters are otherwise portrayed quite differently, particularly with respect to the family situations that form the context for their travels to Italy.
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
                    There are also no protectable similarities at the level of setting. While Love asserts that both works &quot;are set on the Amalfi Coast of Italy in quaint, family-run hotels,&quot; <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 81</a>, that is misleading. In One Italian Summer, Katy spends all her time in Positano, while, in <em>Eat the Lemon</em>, the protagonist travels widely across the Amalfi Coast, and stays in a rental apartment, not a family-run hotel. At any rate, &quot;[t]he mere fact that&quot; two works may be &quot;set in the same city does not give rise to a finding of substantial similarity of copyrightable expression.&quot; <a href="#" className="text-[#0062c4] hover:underline"><em>Silas v. HBO</em>, 201 F. Supp. 3d 1158, 1176 (C.D. Cal. 2016)</a>.
                  </p>
                </div>

                {/* e. Theme */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">e. Theme</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Nor are there protectable similarities at the level of theme. The general theme of a female protagonist coming to feel greater connection to her deceased mother by visiting the Amalfi Coast is not protectable. <a href="#" className="text-[#0062c4] hover:underline"><em>See Masterson</em>, 821 F. App&apos;x at 782</a> (&quot;Though the works share a general theme—i.e., every feeling has a reason—such a theme is too general to be protectible for the purposes of the extrinsic test.&quot;). Beyond that, the works&apos; themes are quite different. <em>One Italian Summer</em> is about Katy coming to see her mother as a flawed person with interests, desires, and passions beyond her and her father, and the way that realization empowers Katy to similarly see herself as her own person. In <em>Eat the Lemon</em>, Love is not similarly burdened by an idealized picture of her mother she must break out of. Quite the contrary, Eat the Lemon is about the narrator&apos;s overcoming her unhappy memories of her mother.
                  </p>
                </div>

                {/* f. Mood and Pace */}
                <div className="mb-3 ml-4">
                  <p className="mb-2 font-bold text-[#212223]">f. Mood and Pace</p>
                  <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                    The mood of the two works is also significantly different. <em>One Italian Summer</em> builds drama and suspense through various plot twists, such as Katy meeting the younger version of her mother and discovering that her mother had left her as a baby to travel to Italy. There is no similar drama and suspense in Love&apos;s work, which is told more as a series of vignettes. Likewise, while both works are occasionally somber when the protagonist relives memories of her mother, <em>Eat the Lemon</em> is a much darker work, as the protagonist is depicted as traumatized by having to watch her mother endure painful cancer treatments and by the emotional abuse and economic exploitation she experienced from her stepfather.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    The pace of the two works is different as well. <em>One Italian Summer</em> takes place over a few weeks and the plot moves steadily toward a resolution—readers know, or at least suspect, that the younger version of Katy&apos;s mother is only there for a short while, that there is some lesson Katy must learn before she is gone, and that Katy will soon have to decide whether to go back to her husband. <em>Eat the Lemon</em> takes place over a year and a half, through Love&apos;s three separate visits to the Amalfi Coast, and does not feature any plotlines that speed toward resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* B. State Law Claims */}
            <div className="mb-6">
              <h3 className="mb-4 font-bold text-[#212223]">B. None Of Love&apos;s State Law Claims Presents A Plausible Claim For Relief Against S&amp;S.</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                To the extent this Court chooses to reach Love&apos;s state law claims, notwithstanding that federal jurisdiction is premised exclusively on the copyright claim, those claims, likewise, fail as a matter of law.
              </p>

              {/* 1. Conspiracy Allegations */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">1. Love&apos;s Conspiracy Allegations Are Fundamentally Implausible.</p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  Every one of Love&apos;s state law claims is based on conduct purportedly undertaken in service of the alleged conspiracy both to infringe on her copyright and to intimidate her into silence about the conspiracy. <em>See</em> <a href="#" className="text-[#0062c4] hover:underline">FAC ¶¶ 46, 63-66, 76, 126, 143-44, 158, 173, 183-84, 187, 195, 199, 209-10, 216-17, 223, 229, 237, 243, 247, 253, 261</a>. However, as set forth above, there was no copyright infringement.
                </p>
              </div>

              {/* 2. No Alleged Conduct */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">2. Love Has Not Alleged Conduct By S&amp;S That Could Make It Liable For Her State Law Claims.</p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The state law claims Love asserts against S&amp;S should be dismissed for the additional reason that she has not alleged conduct by S&amp;S that could render it liable for those claims. Beyond the conclusory assertion that &quot;S&amp;S was and is an agent for the infringing and unlawful projects at issue,&quot; <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 11</a>, the only allegations Love makes regarding conduct by S&amp;S specifically are that (1) one of its divisions published <em>One Italian Summer</em> and (2) one of its editors is married to a former literary agent of Love&apos;s, while another rejected her manuscript two weeks before the book announcement for <em>One Italian Summer</em> came out. <a href="#" className="text-[#0062c4] hover:underline"><em>Id.</em> ¶¶ 47-48, 60, 78</a>. Love cannot proceed with her state law claims against S&amp;S based on such threadbare allegations. In particular:
                </p>
                <ul className="ml-6 space-y-2 text-sm text-[#212223]">
                  <li className="list-disc"><strong>Breach of Fiduciary Duty:</strong> This claim should be dismissed because the circumstances purportedly giving rise to a fiduciary duty on S&amp;S&apos;s part to Love—that S&amp;S supposedly &quot;possessed and reviewed&quot; her manuscript, <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 141</a>—cannot, as a matter of law, give rise to such a duty. <a href="#" className="text-[#0062c4] hover:underline"><em>See Blatty v. Warner Bros. Ent.</em>, 2011 WL 13217379, at *8-9 (C.D. Cal. Apr. 21, 2011)</a></li>
                  <li className="list-disc"><strong>Intentional Interference with Contractual Relations and Business Advantage:</strong> These claims should be dismissed because no facts are alleged indicating either that S&amp;S had knowledge of the contract or business relationship that was allegedly interfered with, or that S&amp;S undertook intentional acts designed to disrupt that contractual or business relationship.</li>
                  <li className="list-disc"><strong>Intentional and Negligent Misrepresentation:</strong> These claims should be dismissed because no facts are alleged indicating that S&amp;S made any misrepresentation to Love, let alone facts indicating that Love relied on that misrepresentation to her detriment.</li>
                  <li className="list-disc"><strong>Negligence:</strong> This claim should be dismissed because no facts are alleged indicating either that S&amp;S owed Love a duty of care or what specifically S&amp;S did to breach it.</li>
                  <li className="list-disc"><strong>Intentional Infliction of Emotional Distress:</strong> This claim should be dismissed because no facts are alleged ascribing conduct to S&amp;S specifically that could qualify as &quot;extreme and outrageous.&quot;</li>
                  <li className="list-disc"><strong>Stalking:</strong> This claim should be dismissed because no facts are alleged ascribing conduct to S&amp;S that could constitute stalking, let alone a &quot;pattern&quot; of such conduct.</li>
                  <li className="list-disc"><strong>Conspiracy:</strong> This claim should be dismissed because Love not only has failed to allege any underlying tortious act by S&amp;S, she has also failed to allege any facts indicating an agreement involving S&amp;S to engage in any tortious act.</li>
                  <li className="list-disc"><strong>Unfair Business Practices under California Business and Professions Code § 17200:</strong> This claim should be dismissed because Love has not adequately alleged any predicate violations by S&amp;S.</li>
                  <li className="list-disc"><strong>Accounting and Constructive Trust:</strong> These claims should be dismissed because they depend entirely on the success of Love&apos;s copyright claims, and, as explained above, the copyright claim fails as a matter of law.</li>
                  <li className="list-disc"><strong>Declaratory Judgment:</strong> Love&apos;s claim for declaratory judgment fails for the reason that Love seeks only a declaration to &quot;ascertain her rights&quot; and defendants&apos; &quot;duties under the alleged agreements,&quot; <a href="#" className="text-[#0062c4] hover:underline">FAC ¶ 264</a>, yet the FAC alleges no agreements with S&amp;S.</li>
                </ul>
              </div>

              {/* 3. Time-barred claims */}
              <div className="mb-4 ml-4">
                <p className="mb-2 font-bold text-[#212223]">3. Many of Love&apos;s State Law Claims Are Untimely and/or Subject to Copyright Preemption.</p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  Finally, as set forth in CAA&apos;s Motion to Dismiss, many of Love&apos;s state law claims are barred by the applicable statutes of limitation and/or preempted by the Copyright Act. Specifically, her claims for constructive trust, intentional interference with contractual relations, tortious interference with business advantage, negligence, intentional infliction of emotional distress, and intentional and negligent misrepresentation are each time barred. And her claims for breach of fiduciary duty, intentional interference with contractual relationship, tortious interference with prospective business advantage, negligence, intentional infliction of emotional distress, conspiracy, Business &amp; Professions Code § 17200, accounting, and constructive trust are each subject to copyright preemption. Each of those claims is subject to dismissal on these additional bases.
                </p>
              </div>
            </div>
          </div>

          {/* IV. CONCLUSION */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">IV. CONCLUSION</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#212223]">
              Love&apos;s First Amended Complaint presents a sweeping conspiracy narrative that is unsupported by any plausible factual allegation and contradicted by the works at issue. The copyright infringement claim at the heart of that narrative fails as a matter of law because (a) the alleged similarities concern biographical facts that are categorically unprotectable, and (b) even analyzing <em>Eat the Lemon</em> as fiction, the two works diverge fundamentally across every dimension of the extrinsic test. Love&apos;s state law claims fall with the copyright claim because there was no infringement to conspire to commit or conceal, and because Love has not alleged any conduct by S&amp;S specifically sufficient to support liability on any individual claim.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-[#212223]">
              Because these deficiencies are irremediable—they arise from what the works themselves say, not from any correctable pleading shortfall—dismissal with prejudice is warranted. S&amp;S respectfully requests that this Court dismiss the First Amended Complaint in its entirety, with prejudice, as to S&amp;S.
            </p>
            
            {/* Signature Block */}
            <div className="flex justify-between">
              <p className="text-sm text-[#212223]">DATED: September 12, 2025</p>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#212223]">STERLING &amp; ASSOCIATES LLP</p>
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
              Pursuant to Local Rule 11-6.2, I hereby certify that this Memorandum of Points and Authorities in support of Simon &amp; Schuster, LLC&apos;s Joinder in Creative Artist Agency, LLC&apos;s Motion to Dismiss and Motion to Dismiss complies with this Court&apos;s Standing Order Rule 12.c, ECF No. 10, limiting memoranda of points and authorities to 25 pages.
            </p>
            <div className="mt-8 flex justify-between">
              <p className="text-sm text-[#212223]">DATED: September 12, 2025</p>
              <div className="text-right">
                <p className="text-sm text-[#212223]">BALLARD SPAHR LLP</p>
                <p className="mt-4 text-sm italic text-[#212223]">/s/ Elizabeth L. Schilken</p>
                <p className="text-sm text-[#212223]">Elizabeth L. Schilken</p>
                <p className="mt-4 text-sm italic text-[#212223]">Attorneys for Simon &amp; Schuster, LLC</p>
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
