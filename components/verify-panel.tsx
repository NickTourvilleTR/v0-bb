"use client";

import { FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JumpToMenu, type JumpToSection } from "@/components/jump-to-menu";

interface VerifyPanelProps {
  onNextOpposition?: () => void;
  onSkipToFinalize?: () => void;
  onEditOutline?: () => void;
  onOpenMetcalfSource?: () => void;
}

export function VerifyPanel({ onNextOpposition, onSkipToFinalize, onEditOutline, onOpenMetcalfSource }: VerifyPanelProps) {
  const [showOutlinePreview, setShowOutlinePreview] = useState(false);
  const [showVerificationDetails, setShowVerificationDetails] = useState(false);
  const [showMastersonVerificationDetails, setShowMastersonVerificationDetails] = useState(false);
  const [showIssuesNavBar, setShowIssuesNavBar] = useState(false);
  const [currentIssueIndex, setCurrentIssueIndex] = useState(0);
  const verificationDetailsRef = useRef<HTMLDivElement>(null);
  const mastersonVerificationDetailsRef = useRef<HTMLDivElement>(null);
  const metcalfWarningRef = useRef<HTMLButtonElement>(null);
  const mastersonWarningRef = useRef<HTMLButtonElement>(null);

  const totalIssues = 2;

  const scrollToIssue = (index: number) => {
    setCurrentIssueIndex(index);
    if (index === 0) {
      metcalfWarningRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (index === 1) {
      mastersonWarningRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handlePotentialIssuesClick = () => {
    setShowIssuesNavBar(true);
    setCurrentIssueIndex(0);
    setTimeout(() => {
      metcalfWarningRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  const goToPreviousIssue = () => {
    const newIndex = currentIssueIndex === 0 ? totalIssues - 1 : currentIssueIndex - 1;
    scrollToIssue(newIndex);
  };

  const goToNextIssue = () => {
    const newIndex = currentIssueIndex === totalIssues - 1 ? 0 : currentIssueIndex + 1;
    scrollToIssue(newIndex);
  };

  const handleWarningClick = () => {
    const newState = !showVerificationDetails;
    setShowVerificationDetails(newState);
    if (newState) {
      setTimeout(() => {
        verificationDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      // Open the Metcalf v. Bochco source and scroll to the highlighted paragraph
      onOpenMetcalfSource?.();
    }
  };

  const handleMastersonWarningClick = () => {
    const newState = !showMastersonVerificationDetails;
    setShowMastersonVerificationDetails(newState);
    if (newState) {
      setTimeout(() => {
        mastersonVerificationDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <div className="mx-auto flex max-w-4xl gap-6 px-6 py-8">
        {/* Left sidebar buttons - sticky */}
        <div className="sticky top-8 flex h-fit flex-col gap-2">
          <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
            <List className="size-5 text-[#212223]" />
          </button>
        </div>

        {/* Main content column */}
        <div className="flex-1 max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#737373]">
            VERIFY
          </p>
          <h1 className="mb-4 text-2xl font-semibold text-[#212223]">
            Document verification results
          </h1>

          {/* Potential issues button */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePotentialIssuesClick}
              className="flex items-center gap-1.5 rounded-full border border-[#cccccc] bg-white px-3 py-1.5 text-sm text-[#212223] hover:bg-[#f5f5f5] transition-colors"
            >
              <AlertTriangle className="size-4 text-[#ab3300]" />
              2 potential issues
            </button>
          </div>
        </div>

        {/* Legal Document */}
        <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 shadow-sm">
          {/* Issues Navigation Bar */}
          {showIssuesNavBar && (
            <div className="sticky top-4 z-10 -mt-2 mb-6 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full border border-[#cccccc] bg-white px-4 py-2 shadow-lg">
                <button 
                  onClick={goToPreviousIssue}
                  className="flex size-8 items-center justify-center rounded-full text-[#737373] hover:bg-[#f5f5f5] hover:text-[#212223] transition-colors"
                >
                  <ChevronLeft className="size-5" />
                </button>
                
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-4 text-[#ab3300]" />
                  <span className="text-sm font-medium text-[#212223]">
                    Issue {currentIssueIndex + 1} of {totalIssues}
                  </span>
                </div>
                
                <button 
                  onClick={goToNextIssue}
                  className="flex size-8 items-center justify-center rounded-full text-[#737373] hover:bg-[#f5f5f5] hover:text-[#212223] transition-colors"
                >
                  <ChevronRight className="size-5" />
                </button>
                
                <div className="mx-1 h-5 w-px bg-[#e5e5e5]" />
                
                <button 
                  onClick={() => setShowIssuesNavBar(false)}
                  className="flex size-8 items-center justify-center rounded-full text-[#737373] hover:bg-[#f5f5f5] hover:text-[#212223] transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          )}

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

          {/* I. INTRODUCTION */}
          <div id="verify-introduction" className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">I. INTRODUCTION</h2>
            
            {/* Paragraph Content */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-[#212223]">
                Plaintiff Adrienne Love claims to be the victim of an elaborate conspiracy to steal her life story. She alleges that a wide-ranging network of co-conspirators—including the author and publisher of the supposedly infringing novel, an array of literary agents and editors, and even a major film studio—coordinated to misappropriate her unpublished memoir, <em>Eat the Lemon</em>, and exploit it through Rebecca Serle&apos;s novel <em>One Italian Summer</em> and a related film project. Love further contends that these same conspirators undertook a campaign of surveillance and physical intimidation to pressure her into silence, including deploying strangers who claimed to work for federal law enforcement agencies, and that two mysterious deaths occurred in connection with the alleged scheme.
              </p>
              
              <p className="text-sm leading-relaxed text-[#212223]">
                None of this happened. The allegations reflect an elaborate and unfortunate fiction of Love&apos;s own making. But this Court need not wade into a factual dispute to reach that conclusion—the record currently before the Court is sufficient to dispose of each of Love&apos;s claims as a matter of law.
              </p>
              
              <p className="text-sm leading-relaxed text-[#212223]">
                Love&apos;s First Amended Complaint (&quot;FAC&quot;) fails for three independent reasons. First, the copyright infringement claim that anchors her entire case cannot survive even a cursory comparison of the two works at issue. To establish copyright infringement, Love must demonstrate that <em>One Italian Summer</em> is substantially similar to the protected expression in <em>Eat the Lemon</em>. She cannot do so because (a) the alleged similarities concern facts from Love&apos;s own biography, which are categorically unprotectable under copyright law, and (b) even if <em>Eat the Lemon</em> were analyzed as a work of fiction, the two works share no substantial similarity in any protectable element—their plots, characters, settings, themes, dialogue, mood, and pace are all materially different.
              </p>
              
              <p className="text-sm leading-relaxed text-[#212223]">
                Second, Love&apos;s thirteen state law claims fail on their own terms as to Simon &amp; Schuster, LLC (&quot;S&amp;S&quot;). Each of those claims is premised on a conspiracy to commit and conceal copyright infringement that, as a matter of law, never occurred. Beyond that, Love has not alleged conduct specifically attributable to S&amp;S that would support liability on any of those claims.
              </p>
              
              <p className="text-sm leading-relaxed text-[#212223]">
                Third, as set forth in the Motion to Dismiss filed by Defendant Creative Artists Agency, LLC (&quot;CAA&quot;), which S&amp;S joins in its entirety, many of Love&apos;s state law claims are independently barred by applicable statutes of limitation and/or preempted by the Copyright Act.
              </p>
              
              <p className="text-sm leading-relaxed text-[#212223]">
                For all of these reasons, S&amp;S respectfully requests that this Court dismiss the First Amended Complaint with prejudice.
              </p>
            </div>
          </div>

          {/* II. FACTUAL BACKGROUND */}
          <div id="verify-factual-background" className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">II. FACTUAL BACKGROUND</h2>
            
            {/* A. The Parties */}
            <div id="verify-parties" className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">A. The Parties</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                Love is the author of <em>Eat the Lemon</em>, an unpublished memoir she describes as a personal account of her own life experiences. FAC ¶¶ 33–34. She has registered two manuscript versions with the U.S. Copyright Office—a July 2020 draft and a February 2021 draft—and represents that the work was completed in 2021. Id. Ex. A.
              </p>
              <p className="text-sm leading-relaxed text-[#212223]">
                S&amp;S is the publisher of <em>One Italian Summer</em>, a novel authored by Rebecca Serle. FAC ¶¶ 11, 31, 78. The novel was first publicly announced in March 2021, when a sample chapter was released; it was published in March 2022. Id. ¶¶ 48, 50.
              </p>
            </div>

            {/* B. The Alleged Conspiracy */}
            <div id="verify-conspiracy" className="mb-6">
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
            <div id="verify-works-compared" className="mb-6">
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
                  The remainder of the memoir follows Love&apos;s deepening connection to Adele, her family, and the rhythms of Italian life. On her mother&apos;s birthday, Love hosts a dinner party and prepares a recipe from her mother&apos;s cookbook; Adele&apos;s mother Rosa, who is an experienced cook, steps in to lead the preparation. Id. at 70, 73–78. Rosa later teaches Love to cook—offering a form of maternal warmth Love had never received from her own mother. Id. at 80–81, 93. Love also befriends a local woman named Anita, who helps her track down the identity of her mother&apos;s cooking teacher, only to learn that the teacher has died. Id. at 85–86. After a brief return to California, Love travels back to Italy and is introduced to Marietta, who was the cooking teacher&apos;s assistant and knew Love&apos;s mother during her time in Amalfi. Id. at 89–90, 94–95. From Marietta, Love learns that her mother was happy during the period Marietta knew her�����a revelation that provides Love with a measure of peace she had not previously found. Id. at 95. The memoir ends with Love cherishing this new understanding of her mother and embracing Rosa as the mother figure she never had. Id. at 100.
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
            <div id="verify-procedural" className="mb-6">
              <h3 className="mb-2 font-bold text-[#212223]">D. Procedural History</h3>
              <p className="text-sm leading-relaxed text-[#212223]">
                Love filed her original Complaint on February 28, 2025. S&amp;S accepted service in June 2025 and filed a Motion to Dismiss the original Complaint on June 30, 2025. ECF Nos. 19, 27–28. Love filed an Opposition on August 18, 2025, and two days later filed the First Amended Complaint, which is now the operative pleading. ECF Nos. 43–44. The FAC is substantially identical to the original Complaint, with the primary difference being that Love no longer asserts each state law claim against every defendant. Because the FAC suffers from the same fatal deficiencies as the original pleading, S&amp;S now moves to dismiss it with prejudice.
              </p>
            </div>
          </div>

          {/* III. ARGUMENT */}
          <div id="verify-argument" className="mb-8">
            <h2 className="mb-4 text-lg font-bold text-[#212223]">III. ARGUMENT</h2>
            
            {/* A. Copyright Claim */}
            <div id="verify-copyright" className="mb-6">
              <h3 className="mb-4 font-bold text-[#212223]">A. Love&apos;s Copyright Infringement Claim Fails as a Matter of Law.</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                To state a claim for copyright infringement, a plaintiff must plead, among other things, &quot;the copying of copyrighted material and the unlawful appropriation of it.&quot; <em>Woodland v. Hill</em>, 136 F.4th 1199, 1205 (9th Cir. 2025). Unlawful appropriation requires proof that the defendant copied enough protected expression from the plaintiff&apos;s work to render the two works &quot;substantially similar.&quot; <em>Id.</em> at 1206. Love&apos;s copyright claim fails on this requirement for two independent reasons: the alleged similarities involve unprotectable biographical facts, and, even setting that aside, the two works are not substantially similar in any protectable element.
              </p>
              
              {/* 1. Biographical Facts */}
              <div className="mb-6 ml-4">
                <h4 className="mb-3 font-bold text-[#212223]">1. The Details Love Claims Were Copied Are Biographical Facts Not Subject to Copyright Protection.</h4>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Love&apos;s copyright claim fails at the threshold because the similarities she identifies between <em>Eat the Lemon</em> and <em>One Italian Summer</em> correspond to the facts of her own life—and facts, by definition, are not subject to copyright protection.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The Copyright Act protects original expression, not the underlying facts an author expresses. As the Supreme Court made clear in <em>Feist Publications, Inc. v. Rural Telephone Service Co.</em>, 499 U.S. 340, 344–45 (1991), &quot;no author may copyright . . . the facts he narrates.&quot; This principle applies with full force to memoirs and autobiographies. Courts have consistently held that an author cannot claim ownership over the details of her own life simply by setting them down on paper. <em>See</em> 1 Nimmer on Copyright § 2.11 (2025) (&quot;Courts have denied copyright protection not only to raw historical facts, but also to facts set forth in biographical works, in news stories, and in other forms of expression.&quot;).
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The Ninth Circuit applied this rule directly in <em>Corbello v. Valli</em>, 974 F.3d 965 (9th Cir. 2020), a case with facts closely analogous to this one. There, the court rejected a copyright claim based on alleged similarities between a nonfiction autobiography of a member of the Four Seasons and the Broadway musical about the band. Because the similarities between the two works concerned facts from the author&apos;s actual experiences, those similarities were not protectable—even assuming the musical&apos;s creators had access to and drew on the autobiography. <em>Id.</em> at 971, 976–77, 984. Where a work &quot;emphatically&quot; represents itself as a nonfiction account, the fictional work does not infringe by incorporating the same facts, even if the author conducted extensive research to uncover them. <em>Id.</em> at 984. Other courts have applied the same principle in cases directly paralleling this one, where the allegation was that details from a plaintiff&apos;s memoir were incorporated into a fictional work. <em>See, e.g., Vallejo v. Narcos Prods. LLC</em>, 833 F. App&apos;x 250, 257–61 (11th Cir. 2020); <em>Hathaway v. Caputo</em>, 2021 WL 1862248, at *6–7 (D. Ariz. May 10, 2021); <em>Newt v. Twentieth Century Fox Film Corp.</em>, 2016 WL 4059691, at *7 n.11 (C.D. Cal. July 27, 2016); <em>Eggleston v. Twentieth Century Fox Film Corp.</em>, 2022 WL 3371601, at *4 (E.D. Mich. Aug. 16, 2022).
                </p>
                <p className="text-sm leading-relaxed text-[#212223]">
                  The FAC makes plain that the same rule controls here. Love describes <em>Eat the Lemon</em> throughout as a &quot;personal memoir based on her own life.&quot; FAC ¶ 33. She alleges that <em>One Italian Summer</em> is &quot;replete with intricate personal details from Love&apos;s life,&quot; FAC ¶ 74, that Serle &quot;effectively interjects herself into Love&apos;s life&quot; to tell &quot;the detailed story of Love&apos;s highly personal experiences,&quot; FAC ¶ 75, and that Love&apos;s own friends recognized the novel as &quot;Love&apos;s story,&quot; FAC ¶ 62. Love even contends that <em>One Italian Summer</em> assigned to Katy&apos;s father the same first name as Love&apos;s real-life father—a detail not revealed anywhere in <em>Eat the Lemon</em> itself. FAC ¶ 88. In short, Love&apos;s own pleading establishes that the alleged similarities are biographical facts, not original creative expression. Because she cannot claim copyright in the facts of her own life, her infringement claim fails as a matter of law on this ground alone.
                </p>
              </div>

              {/* 2. No Substantial Similarity */}
              <div className="mb-6 ml-4">
                <h4 className="mb-3 font-bold text-[#212223]">2. Even Treating <em>Eat the Lemon</em> as a Fictional Work, There Is No Substantial Similarity.</h4>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Even if this Court were to set aside <em>Eat the Lemon</em>&apos;s status as a personal memoir and analyze its protectable expression as if it were a fictional work, the result does not change. Under any mode of analysis, the two works are not substantially similar in their protected elements.
                </p>

                {/* Legal Standard */}
                <div className="mb-4">
                  <p className="mb-3 font-semibold text-[#212223]">Legal Standard</p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    A plaintiff asserting copyright infringement must satisfy both an &quot;extrinsic&quot; and an &quot;intrinsic&quot; test for substantial similarity. <em>Skidmore v. Led Zeppelin</em>, 952 F.3d 1051, 1064 (9th Cir. 2020). While the intrinsic test is a jury question, the extrinsic test &quot;may be decided by the court as a matter of law,&quot; including at the motion-to-dismiss stage. <em>Woodland</em>, 136 F.4th at 1210. Where the works at issue are before the court and it is clear as a matter of law that they are not substantially similar, dismissal is proper. <em>Gallagher v. Lions Gate Ent. Inc.</em>, 2015 WL 12481504, at *2 (C.D. Cal. Sept. 11, 2015); <em>Hankins v. Titmouse Inc.</em>, 2025 U.S. Dist. LEXIS 147690, at *7 (C.D. Cal. July 30, 2025). Indeed, the Ninth Circuit has &quot;repeatedly affirmed dismissals&quot; in cases alleging infringement of literary works on substantial similarity grounds. <em>Masterson v. Walt Disney Co.</em>, 821 F. App&apos;x 779, 780 &amp; n.1 (9th Cir. 2020).
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    For literary works, the extrinsic test focuses on &quot;articulable similarities between the plot, themes, dialogue, mood, setting, pace, characters, and sequence of events.&quot; <span className="inline-flex items-center gap-1"><a href="#" className="text-[#0062c4] hover:underline"><em>Metcalf v. Bochco</em>, 294 F.3d 1069, 1073 (9th Cir. 2002)</a><button ref={metcalfWarningRef} onClick={handleWarningClick} className="inline-flex items-center justify-center transition-transform duration-150 hover:scale-125"><AlertTriangle className="inline size-4 text-[#ab3300]" /></button></span>. Critically, the threshold step is to filter out unprotectable elements. <em>Woodland</em>, 136 F.4th at 1210. Non-protectable elements include ideas; historical facts; common phrases; scenes-a-faire (situations and incidents that flow naturally or necessarily from a basic plot premise or generic storyline); and familiar stock themes. <em>Corbello</em>, 974 F.3d at 975 (citing <em>Benay v. Warner Bros. Entm&apos;t., Inc.</em>, 607 F.3d 620, 624–25 (9th Cir. 2010)). Only after those elements are set aside does the court compare what remains. That comparative analysis conclusively forecloses any finding of substantial similarity here.
                  </p>
                  
                  {showVerificationDetails && (
                    <div ref={verificationDetailsRef} className="my-4 rounded-lg border border-solid border-[#cccccc] bg-[#fafafa] p-6 text-sm">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#737373]">VERIFICATION DETAILS:</p>
                        <button onClick={() => setShowVerificationDetails(false)} className="flex items-center justify-center rounded-md p-1 text-[#737373] transition-colors hover:bg-[#e5e5e5] hover:text-[#212223]">
                          <X className="size-4" />
                        </button>
                      </div>
                      
                      <p className="mb-4 leading-relaxed text-[#212223]">
                        <span className="font-bold">Statement:</span> For literary works, the extrinsic test focuses on &quot;articulable similarities between the plot, themes, dialogue, mood, setting, pace, characters, and sequence of events.&quot;
                      </p>
                      
                      <p className="mb-6 leading-relaxed text-[#212223]">
                        <a href="#" className="text-[#0062c4] hover:underline">Metcalf v. Bochco, 294 F.3d 1069 (2002)</a>
                      </p>
                      
                      <div className="flex gap-3">
                        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-[#ab3300]" />
                        <div>
                          <p className="font-bold text-[#212223]">Problematic</p>
                          <p className="text-[#212223]">The cited case finds copyright infringement, holding that even when the alleged similarities consist entirely of generic, individually unprotectable elements, the selection and arrangement of those elements—the particular sequence in which an author strings them together—can itself be protectable. The court used the musical analogy: each note in a scale is unprotectable, but a pattern of notes may earn copyright protection.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* a. Plot */}
                <div className="mb-4 ml-4">
                  <p className="mb-3 font-bold text-[#212223]">a. Plot and Sequence of Events</p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    &quot;No one can own the basic idea for a story. General plot ideas are not protected by copyright law; they remain forever the common property of artistic mankind.&quot; <em>Berkic v. Crichton</em>, 761 F.2d 1289, 1293 (9th Cir. 1985). Courts applying the extrinsic test therefore look beyond a general plot premise and compare &quot;the actual concrete elements that make up the total sequence of events and the relationships between the major characters.&quot; <em>Funky Films</em>, 462 F.3d at 1077. Under this standard, courts routinely reject substantial similarity claims where the works share a common premise but &quot;developed quite differently.&quot; <em>Whitehead v. Netflix, Inc.</em>, 2022 WL 17342602, at *15 (N.D. Cal. Nov. 30, 2022) (quoting <em>Funky Films</em>, 462 F.3d at 1077–78).
                  </p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    The only genuine overlap between <em>Eat the Lemon</em> and <em>One Italian Summer</em> at the level of plot is the general, unprotectable premise of a woman who travels alone to Italy&apos;s Amalfi Coast in order to connect with her deceased mother. That premise is not Love&apos;s to own. <em>See Berkic</em>, 761 F.2d at 1293; <em>see also Funky Films</em>, 462 F.3d at 1078; <em>Benay</em>, 607 F.3d at 625. Love herself seemed to recognize as much: in the prefatory note to her 2020 draft, she described that premise as &quot;another American woman finds herself in Italy&quot; and asked, &quot;[w]hat could possibly be more cliché?&quot;
                  </p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    Once that unprotectable premise is set aside, the two works diverge fundamentally. The defining events of <em>One Italian Summer</em>—Katy traveling back in time, meeting and befriending a thirty-year-old version of her mother, discovering that her mother had abandoned her as an infant, and being forced to confront her mother as a wholly autonomous person separate from the role she had always played—have no counterpart in <em>Eat the Lemon</em>. That novel contains no time travel, no magical realism, no relationship with a younger version of the mother, and no shattering revelation about the mother&apos;s independent life. Conversely, the defining events of <em>Eat the Lemon</em>—Love&apos;s discovery of a surrogate family in Italy, her experience of genuine maternal warmth for the first time through Rosa, and her encounter with Marietta, who knew her mother when she was happy—are entirely absent from <em>One Italian Summer</em>.
                  </p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    The alleged surface-level similarities that Love catalogs in the FAC do not cure this deficiency. That both protagonists leave a romantic partner behind to travel to Italy and encounter new love interests is a scene-a-faire that flows directly and naturally from the premise of a woman journeying to Italy to find herself; it is not protectable. <em>See Corbello</em>, 974 F.3d at 975. Moreover, even those storylines develop entirely differently: in <em>One Italian Summer</em>, the question of Katy&apos;s marriage dominates much of the narrative and resolves with her happy reunion with Eric; in <em>Eat the Lemon</em>, Brad scarcely appears after Love decides to return to Italy alone, and the two do not reconcile. Similarly, both works include a scene in which the protagonist cooks with a mother figure, but the nature of that scene is entirely different in each: in <em>One Italian Summer</em>, the mother figure is literally Katy&apos;s mother, and the scene explores the complexity of their relationship; in <em>Eat the Lemon</em>, the mother figure is Rosa, an older Italian woman whose warmth provides Love with the maternal connection she never had.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                    Other alleged similarities—that both mothers possess lemon-themed decorative items, that Aveeno face cream is mentioned in connection with both mother characters, that Frank Sinatra music plays during a dinner in each work, that each protagonist befriends a local boat driver named Antonio, and that both works use golden imagery—are precisely the kind of &quot;random similarities scattered throughout the works&quot; that cannot sustain a finding of substantial similarity. <em>Cavalier v. Random House, Inc.</em>, 297 F.3d 815, 825 (9th Cir. 2002) (quoting <em>Litchfield v. Spielberg</em>, 736 F.2d 1352, 1356 (9th Cir. 1984)); <em>see also Gallagher</em>, 2015 WL 12481504, at *14 (dismissing copyright claim where complaint listed &quot;thirty-three &apos;specific scene similarities&apos;&quot; between the works). These details—lemons, Sinatra, Italian sunshine—are scenes-a-faire endemic to any story set on the Amalfi Coast, and they are therefore unprotectable as a matter of law.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    The two works share no substantial similarity in their plots or sequences of events.
                  </p>
                </div>

                {/* b. Characters */}
                <div className="mb-4 ml-4">
                  <p className="mb-3 font-bold text-[#212223]">b. Characters</p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    Literary characters are generally not subject to copyright protection unless they are &quot;especially distinctive.&quot; <em>Olson v. NBC</em>, 855 F.2d 1446, 1451–52 (9th Cir. 1988). Purported similarities between minor characters are afforded even less weight. <em>See Cavalier</em>, 297 F.3d at 825.
                  </p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    Love and Katy share one trait in common: each is a woman processing the loss of a mother who died of cancer. That is a general plot point, not a protectable character attribute. In every other significant respect, the protagonists are drawn from entirely different wells of experience. Love&apos;s story is one of trauma and emotional deprivation—an absent father, an abusive stepfather, a cold and distant mother. Katy&apos;s story begins from the opposite place: she has had a warm, loving, all-defining relationship with her mother, and the loss of that relationship threatens to destabilize everything she knows about herself.
                  </p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    The mother characters are equally distinct. Both can cook, but in <em>One Italian Summer</em>, cooking is part of a portrait of a woman who excels at domestic life while quietly sacrificing her professional ambitions; in <em>Eat the Lemon</em>, cooking is the thread that connects Love to her mother&apos;s time in Italy and drives the memoir&apos;s central quest. More fundamentally, while Katy&apos;s mother is portrayed as warm, capable, and loving—if not without complexity—Love&apos;s mother is depicted throughout as cold, unhappy, and emotionally unavailable. That disparity is so central to <em>Eat the Lemon</em> that a pivotal moment in the work is Love&apos;s quiet joy upon learning, for the first time, that her mother was once happy.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    As to minor characters, Love&apos;s allegation that Adam (in <em>One Italian Summer</em>) and Peppe (in <em>Eat the Lemon</em>) are similar because each is a love interest identifies only the most generic of shared attributes. The two characters otherwise bear no resemblance. And that each work features a friendly, attractive hotel manager is an unremarkable scene-a-faire common to any travel narrative. The works are not substantially similar at the level of character.
                  </p>
                </div>

                {/* c. Dialogue */}
                <div className="mb-4 ml-4">
                  <p className="mb-3 font-bold text-[#212223]">c. Dialogue</p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Love identifies no similar dialogue between the two works. This element provides no basis for a substantial similarity finding.
                  </p>
                </div>

                {/* d. Setting */}
                <div className="mb-4 ml-4">
                  <p className="mb-3 font-bold text-[#212223]">d. Setting</p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    &quot;The mere fact that&quot; two works are &quot;set in the same city does not give rise to a finding of substantial similarity.&quot; <em>Silas v. HBO</em>, 201 F. Supp. 3d 1158, 1176 (C.D. Cal. 2016). A setting that &quot;naturally and necessarily flows from the basic plot premise . . . constitutes scenes-a-faire and cannot support a finding of substantial similarity.&quot; <em>Cavalier</em>, 297 F.3d at 824.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                    Both works are set in part on Italy&apos;s Amalfi Coast, but the specifics of that setting diverge considerably. <em>One Italian Summer</em> takes place entirely in Positano, where Katy stays at a particular hotel. <em>Eat the Lemon</em> follows Love across a broader stretch of the Amalfi Coast over multiple trips spanning a year and a half, with Love staying not in a hotel but in a rented apartment. Any setting associated with the Amalfi Coast—hotel terraces, lemon groves, the Italian sea—flows naturally from the premise and locale and is therefore unprotectable. Beyond geography, the temporal settings also diverge: <em>Eat the Lemon</em> is set in the present, with periodic flashbacks; <em>One Italian Summer</em> operates across two distinct timelines, one contemporary and one set in 1992.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    The two works are not substantially similar in their protected setting elements.
                  </p>
                </div>

                {/* e. Theme */}
                <div className="mb-4 ml-4">
                  <p className="mb-3 font-bold text-[#212223]">e. Theme</p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    A general thematic similarity that is &quot;too general to be protectible for the purposes of the extrinsic test&quot; cannot support a finding of substantial similarity. <span className="inline-flex items-center gap-1"><a href="#" className="text-[#0062c4] hover:underline"><em>Masterson</em>, 821 F. App&apos;x at 782</a><button ref={mastersonWarningRef} onClick={handleMastersonWarningClick} className="inline-flex items-center justify-center transition-transform duration-150 hover:scale-125"><AlertTriangle className="inline size-4 text-[#ab3300]" /></button></span>. The general idea of a woman traveling to Italy to reach a greater understanding of—and peace with—her deceased mother is not protectable.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    Moreover, the specific thematic preoccupations of the two works are meaningfully different. <em>One Italian Summer</em> is fundamentally about dismantling an idealized image of a beloved mother in order to see her, for the first time, as an autonomous person—and about how that act of perception liberates Katy to claim her own autonomy. <em>Eat the Lemon</em> operates from an entirely different emotional premise. Love does not need to dismantle an idealized image; she carries no idealization to begin with. Her memoir is instead about the possibility of overcoming deeply unhappy memories of a difficult, emotionally distant mother—and about discovering, through her Italian family of choice, what real warmth and belonging feel like for the first time. The works are not substantially similar as to theme.
                  </p>
                  
                  {showMastersonVerificationDetails && (
                    <div ref={mastersonVerificationDetailsRef} className="my-4 rounded-lg border border-solid border-[#cccccc] bg-[#fafafa] p-6 text-sm">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#737373]">VERIFICATION DETAILS:</p>
                        <button onClick={() => setShowMastersonVerificationDetails(false)} className="flex items-center justify-center rounded-md p-1 text-[#737373] transition-colors hover:bg-[#e5e5e5] hover:text-[#212223]">
                          <X className="size-4" />
                        </button>
                      </div>
                      
                      <p className="mb-6 leading-relaxed text-[#212223]">
                        <span className="font-bold">Statement:</span> A general thematic similarity that is &quot;too general to be protectible for the purposes of the extrinsic test&quot; cannot support a finding of substantial similarity.
                      </p>
                      
                      <div className="flex gap-3">
                        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-[#ab3300]" />
                        <div>
                          <p className="font-bold text-[#212223]">Problematic</p>
                          <p className="text-[#212223]">The Masterson case actually supports the proposition that general thematic similarities are not protectable. However, it also affirms that when multiple unprotectable elements are combined in a specific sequence, that arrangement may itself warrant copyright protection. This could potentially undermine the argument if opposing counsel argues that the combination of elements in Love&apos;s work constitutes a protectable arrangement.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* f. Mood and Pace */}
                <div className="mb-4 ml-4">
                  <p className="mb-3 font-bold text-[#212223]">f. Mood and Pace</p>
                  <p className="mb-3 text-sm leading-relaxed text-[#212223]">
                    The two works differ substantially in both mood and pace. <em>One Italian Summer</em> is a novel driven by narrative momentum and plot mechanics: time-travel, revelation, and a series of escalating dramatic confrontations. Readers are propelled forward by the awareness that the alternate timeline will not last, that Katy must decide what to do with the knowledge she has gained, and that she must ultimately choose what kind of life she wants to live. <em>Eat the Lemon</em>, by contrast, is a darker and more contemplative work, structured as a series of vignettes rather than a propulsive narrative. Its emotional weight derives from Love&apos;s documented traumas—watching her mother endure brutal cancer treatments, surviving years of emotional abuse from her stepfather—and the story builds not toward dramatic resolution but toward a quiet and hard-won measure of peace.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                    The pace of the two works is likewise different. <em>One Italian Summer</em> unfolds over a matter of weeks and moves inexorably toward resolution. <em>Eat the Lemon</em> spans roughly eighteen months of intermittent travel and contains no equivalent narrative urgency.
                  </p>
                  <p className="text-sm leading-relaxed text-[#212223]">
                    The works are not substantially similar in mood or pace.
                  </p>
                </div>

                <hr className="my-4 border-t border-[#e0e0e0]" />

                <p className="text-sm leading-relaxed text-[#212223]">
                  In sum, beyond the unprotectable premise of a woman who travels alone to the Amalfi Coast to come to terms with the death of her mother, <em>Eat the Lemon</em> and <em>One Italian Summer</em> are fundamentally different works in every dimension that the extrinsic test examines. The copyright infringement claim fails as a matter of law and should be dismissed with prejudice. <em>See Eden Film Prod. LLC v. Lockjaw LLC</em>, 2025 WL 1386018, at *7 (C.D. Cal. Apr. 25, 2025) (dismissal with prejudice warranted where deficiencies &quot;stem from the fundamental characteristics of the works themselves&quot;); <em>Hankins</em>, 2025 U.S. Dist. LEXIS 147690, at *37.
                </p>
              </div>
            </div>

            <hr className="my-6 border-t border-[#e0e0e0]" />

            {/* B. State Law Claims */}
            <div id="verify-state-law" className="mb-6">
              <h3 className="mb-4 font-bold text-[#212223]">B. None of Love&apos;s State Law Claims States a Plausible Claim for Relief Against S&amp;S.</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                To the extent this Court elects to address Love&apos;s thirteen state law claims notwithstanding that federal jurisdiction rests entirely on the copyright count, those claims fail independently on multiple grounds.
              </p>

              {/* 1. Conspiracy Allegations */}
              <div className="mb-4 ml-4">
                <h4 className="mb-3 font-bold text-[#212223]">1. The Conspiracy Allegations Are Fundamentally Implausible.</h4>
                <p className="text-sm leading-relaxed text-[#212223]">
                  Every state law claim Love asserts against S&amp;S is premised on the allegation that it was a knowing participant in a conspiracy to infringe her copyright and then silence her about that infringement. <em>See, e.g.</em>, FAC ¶¶ 46, 63–66, 76, 126, 143–44, 158, 173, 183–84, 187, 195, 199, 209–10, 216–17, 223, 229, 237, 243, 247, 253, 261. But, as demonstrated above, no infringement occurred as a matter of law. And where no infringement occurred, it is implausible that &quot;a complex web of intentional misrepresentations, breaches of contract, and breaches of confidence occurred in concealing&quot; it. <em>Briggs v. Cameron</em>, 2020 WL 611849 (N.D. Cal. Feb. 10, 2020). Love has not plausibly alleged any predicate wrongdoing to conspire about or conceal. Each of her state law claims should be dismissed on this basis alone.
                </p>
              </div>

              {/* 2. No Alleged Conduct */}
              <div className="mb-4 ml-4">
                <h4 className="mb-3 font-bold text-[#212223]">2. Love Has Not Alleged Conduct by S&amp;S That Could Support Liability.</h4>
                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  The state law claims should be dismissed for the additional reason that Love has not pleaded facts sufficient to establish S&amp;S&apos;s liability on any individual claim. The only allegations in the FAC directed specifically at S&amp;S are: (1) that S&amp;S published <em>One Italian Summer</em>; (2) that an S&amp;S editor is married to a former Love literary agent; and (3) that a different S&amp;S editor rejected Love&apos;s manuscript approximately two weeks before the announcement of <em>One Italian Summer</em>. FAC ¶¶ 47–48, 60, 78. Beyond those three facts, Love&apos;s FAC relies on collective, undifferentiated allegations that do not specify what S&amp;S itself did or failed to do. Such &quot;everyone did everything&quot; pleading is improper and cannot sustain Love&apos;s claims. <em>Destfino v. Reiswig</em>, 630 F.3d 952, 958–59 (9th Cir. 2011); <em>Sebastian Brown Prods., LLC v. Muzooka, Inc.</em>, 143 F. Supp. 3d 1026, 1037 (N.D. Cal. 2015).
                </p>

                <p className="mb-4 text-sm leading-relaxed text-[#212223]">
                  Examining the individual claims against S&amp;S confirms this deficiency:
                </p>

                <div className="ml-4 space-y-4 text-sm leading-relaxed text-[#212223]">
                  <div>
                    <p className="font-bold"><em>Breach of Fiduciary Duty.</em></p>
                    <p>Love alleges that S&amp;S &quot;possessed and reviewed&quot; her manuscript, giving rise to a fiduciary duty. FAC ¶ 141. But a publisher&apos;s review of an unsolicited or submitted manuscript does not give rise to a fiduciary obligation. A fiduciary duty requires facts showing that the defendant &quot;knowingly undertook to act on behalf of and for the benefit of&quot; the plaintiff. <em>Blatty v. Warner Bros. Ent.</em>, 2011 WL 13217379, at *8–9 (C.D. Cal. Apr. 21, 2011). Love has alleged no such undertaking by S&amp;S.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Intentional Interference with Contractual Relations and Tortious Interference with Business Advantage.</em></p>
                    <p>These claims require, respectively, knowledge of the specific contractual or business relationship purportedly disrupted and intentional acts directed at causing that disruption. <em>Disney Enters., Inc. v. Redbox Automated Retail, LLC</em>, 2018 WL 1942139, at *9 (C.D. Cal. Feb. 20, 2018); <em>Celebrity Chefs Tour, LLC v. Macy&apos;s, Inc.</em>, 2015 WL 11237460, at *19 (S.D. Cal. Aug. 10, 2015). Love does not allege that S&amp;S was aware of any specific contract or business relationship, let alone that it took deliberate steps to interfere with one.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Intentional and Negligent Misrepresentation.</em></p>
                    <p>Both claims require a specific misrepresentation by the defendant on which the plaintiff relied to her detriment. <em>Solo v. Dawson</em>, 2010 WL 11508000, at *21 (C.D. Cal. Feb. 8, 2010); <em>Ryder v. Lightstorm Ent., Inc.</em>, 246 Cal. App. 4th 1064, 1079 (2016). Love does not allege that S&amp;S made any representation to her, let alone one she acted upon.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Negligence.</em></p>
                    <p>A negligence claim requires, among other elements, a duty of care owed by the defendant to the plaintiff and a specific breach of that duty. <em>McCormick v. Sony Pictures Entm&apos;t</em>, 2008 WL 11336160, at *7 (C.D. Cal. Nov. 17, 2008). Love has not alleged facts establishing any duty S&amp;S owed to her, nor has she identified any specific act or omission by S&amp;S constituting a breach.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Intentional Infliction of Emotional Distress.</em></p>
                    <p>IIED requires conduct that is &quot;extreme and outrageous&quot;—conduct so beyond the bounds of decency as to be considered atrocious and utterly intolerable in a civilized community. <em>McCrudden v. DeMarco</em>, 2022 WL 17369135, at *13 (C.D. Cal. Oct. 6, 2022). Love has alleged no such conduct by S&amp;S specifically.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Stalking.</em></p>
                    <p>A civil stalking claim requires a pattern of conduct by the defendant directed at following, alarming, surveilling, or harassing the plaintiff. Cal. Civ. Code § 1708.7(a). Love has made no factual allegation connecting S&amp;S to any such conduct.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Civil Conspiracy.</em></p>
                    <p>A conspiracy claim requires both an agreement to commit a tortious act and the commission of that act. <em>Idema v. Dreamworks, Inc.</em>, 162 F. Supp. 2d 1129, 1197 (C.D. Cal. 2001). Love has not alleged facts plausibly showing that S&amp;S entered into any agreement to commit a tort, nor that it committed one.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Unfair Business Practices (Cal. Bus. &amp; Prof. Code § 17200).</em></p>
                    <p>A UCL claim depends entirely on the viability of the predicate legal violations alleged. Where the plaintiff cannot establish the predicate violations, the UCL claim fails alongside them. <em>Eidmann v. Walgreen Co.</em>, 522 F. Supp. 3d 634, 647 (N.D. Cal. 2021). Because Love has not adequately alleged any predicate violation by S&amp;S, her UCL claim fails.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Accounting and Constructive Trust.</em></p>
                    <p>Both of these equitable remedies depend on the success of a substantive underlying claim. <em>Glue-Fold, Inc. v. Slautterback Corp.</em>, 82 Cal. App. 4th 1018, 1023 n.3 (2000). Because Love&apos;s copyright infringement claim and all predicate state law claims fail, these derivative claims fail with them.</p>
                  </div>

                  <div>
                    <p className="font-bold"><em>Declaratory Judgment.</em></p>
                    <p>Love seeks a declaration as to her rights and S&amp;S&apos;s obligations under alleged agreements between them. FAC ¶ 264. The FAC identifies no agreement between Love and S&amp;S. This claim fails for that reason.</p>
                  </div>
                </div>
              </div>

              {/* 3. Untimeliness and Preemption */}
              <div className="mb-4 ml-4">
                <h4 className="mb-3 font-bold text-[#212223]">3. Many State Law Claims Are Also Untimely and/or Preempted.</h4>
                <p className="text-sm leading-relaxed text-[#212223]">
                  As set forth in the motion to dismiss filed by CAA, which S&amp;S joins in its entirety, many of Love&apos;s state law claims face independent obstacles of untimeliness and preemption. Specifically, the following claims are barred by the applicable statutes of limitation: constructive trust, intentional interference with contractual relations, tortious interference with business advantage, negligence, IIED, and intentional and negligent misrepresentation. In addition, the following claims are preempted by the Copyright Act: breach of fiduciary duty, intentional interference with contractual relations, tortious interference with prospective business advantage, negligence, IIED, civil conspiracy, UCL § 17200, accounting, and constructive trust. Each of these claims is subject to dismissal on these additional, independent grounds.
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
