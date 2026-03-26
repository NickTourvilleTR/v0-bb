"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Notebook, List, ScanEye, Plus, MessageSquarePlus, Pencil, ExternalLink } from "lucide-react";
import { OutlinePreviewModal } from "@/components/outline-preview-modal";

interface Citation {
  id: string;
  type: "authority" | "fact";
  description: string;
  caseName: string;
  caseRef: string;
  summary: string;
  relevance: string;
  needToKnow: string;
}

interface Authority {
  id: string;
  title: string;
  subTitle?: string;
  citations: Citation[];
}

const defaultAuthorities: Authority[] = [
  {
    id: "1",
    title: "Copyright Infringement Claim Fails as a Matter of Law",
    subTitle: "1A. Biographical Facts Are Not Subject to Copyright Protection",
    citations: [
      {
        id: "corbello",
        type: "authority",
        description: "Facts narrated in a memoir or autobiography are not subject to copyright protection, even if they are later incorporated into a fictional work.",
        caseName: "Corbello v. Valli",
        caseRef: "974 F.3d 965, 971, 976–77, 984 (9th Cir. 2020)",
        summary: "The Ninth Circuit rejected a copyright claim premised on alleged similarities between a Four Seasons member's autobiography and a popular musical about the band. The court held there was no infringement because the similarities involved purported facts from the author's real experiences as a band member, which were not copyrightable — even if the musical's writers used the author's historical research.",
        relevance: "Directly analogous. Love's complaint explicitly characterizes Eat the Lemon as a personal memoir and alleges that OIS took the 'detailed story of Love's highly personal experiences.' Under Corbello, those biographical facts cannot form the basis of a copyright claim regardless of whether they were later incorporated into Serle's fiction.",
        needToKnow: "Corbello distinguished between the unprotectable factual content of the autobiography and any original expressive choices in the writing itself. S&S may argue Love could still protect her specific prose — so the motion pairs this with the 'no substantial similarity' argument to foreclose both avenues.",
      },
      {
        id: "feist",
        type: "authority",
        description: "Copyright protection does not extend to facts, and no author may copyright the facts she narrates.",
        caseName: "Feist Publications, Inc. v. Rural Tel. Serv. Co.",
        caseRef: "499 U.S. 340, 344–45 (1991)",
        summary: "The Supreme Court established that copyright requires originality, and facts — no matter how diligently collected — are not original to the author. The principle applies equally to biographical and autobiographical facts.",
        relevance: "Provides the constitutional and statutory foundation for the biographical-facts argument. S&S uses Feist to establish that Love cannot own the facts of her own life by virtue of writing about them.",
        needToKnow: "Feist is universally known and will be difficult for Love to distinguish. Her best counterargument is that her specific creative expression of those facts (not the facts themselves) was copied — which is why the substantial similarity analysis is S&S's essential fallback.",
      },
      {
        id: "vallejo",
        type: "authority",
        description: "A plaintiff cannot claim copyright protection in the factual details of her life story recounted in a memoir, even where those details allegedly appear in a subsequent fictional work.",
        caseName: "Vallejo v. Narcos Prods. LLC",
        caseRef: "833 F. App'x 250, 257–58, 260–61 (11th Cir. 2020)",
        summary: "The Eleventh Circuit rejected a copyright claim by Pablo Escobar's former mistress based on alleged similarities between her memoir and scenes in the Netflix series Narcos, holding that she could not claim copyright protection in the facts recounted in her memoir.",
        relevance: "Supports Corbello with persuasive authority from another circuit on nearly identical facts: a woman's memoir about real personal experiences allegedly misappropriated into a popular entertainment property. Strengthens the argument that the rule is not a Ninth Circuit outlier.",
        needToKnow: "Eleventh Circuit authority is persuasive but not binding. Love may argue the Vallejo plaintiff's facts were more clearly 'public' historical events, whereas her story is more intimate. This distinction did not matter in Vallejo, but could be raised.",
      },
      {
        id: "complaint-fact",
        type: "fact",
        description: "Love's own complaint admits that Eat the Lemon is a personal memoir recounting the true facts of her life, and that OIS took 'the detailed story of Love's highly personal experiences.'",
        caseName: "Complaint ¶¶ 36, 75, 88, 210",
        caseRef: "",
        summary: "Love characterizes her work as a 'personal manuscript of her travels to Positano, Italy, to seek a connection to her mother after she died from mis-diagnosed cancer' and alleges that Serle 'effectively interjects herself into Love's life and stands in her shoes.' She even alleges that OIS used her real father's name, which does not appear in Eat the Lemon.",
        relevance: "Love's own pleading undermines her copyright claim by framing the alleged infringement entirely in terms of biographical facts rather than original creative expression. This locks her into the argument that her life story was taken — precisely the category of claim Corbello and Feist foreclose.",
        needToKnow: "This is S&S's strongest fact card. If Love attempts to re-frame at opposition as a claim about creative expression rather than biographical facts, she will contradict her own complaint, which courts disfavor at the pleading stage.",
      },
    ],
  },
  {
    id: "1b",
    title: "Copyright Infringement Claim Fails as a Matter of Law",
    subTitle: "1B. No Substantial Similarity Even If Treated as Fiction",
    citations: [
      {
        id: "woodland",
        type: "authority",
        description: "Copyright infringement requires that the works be 'substantially similar' in protected expression; the court may resolve the extrinsic test as a matter of law on a motion to dismiss.",
        caseName: "Woodland v. Hill",
        caseRef: "136 F.4th 1199, 1205–06, 1210 (9th Cir. 2025)",
        summary: "The Ninth Circuit confirmed that, to show unlawful appropriation, a plaintiff must prove substantial similarity in protected expression. The extrinsic test — focusing on articulable similarities in plot, theme, dialogue, mood, setting, pace, characters, and sequence of events — may be decided by the court as a matter of law, even at the motion-to-dismiss stage.",
        relevance: "Establishes the legal standard for the entire substantial similarity analysis and confirms that dismissal at this stage is appropriate. The case is recent (2025) and directly from the Ninth Circuit, which is binding on this court.",
        needToKnow: "Woodland is the most current Ninth Circuit statement on the framework. S&S should emphasize that the court goes element-by-element through the works. Love's best response is to argue the intrinsic test (jury question) should survive, but Woodland supports early dismissal where the extrinsic test clearly fails.",
      },
      {
        id: "berkic",
        type: "authority",
        description: "No one can own the basic idea for a story; courts must look beyond the abstract general plot premise to the actual concrete elements making up the total sequence of events.",
        caseName: "Berkic v. Crichton",
        caseRef: "761 F.2d 1289, 1293 (9th Cir. 1985)",
        summary: "The Ninth Circuit held there was no substantial similarity where both works involved criminal organizations murdering healthy young people to harvest and sell their organs — a compelling shared premise — because the concrete story elements developed quite differently.",
        relevance: "Establishes that a shared general premise — here, a woman traveling alone to the Amalfi Coast to connect with her deceased mother — is not enough for infringement. S&S uses Berkic to argue that this is the only real overlap between the works, and it is not protectable.",
        needToKnow: "Berkic is a foundational case and very favorable to S&S. The shared premise here (Italy grief journey) is, if anything, more generic than the organ-harvesting premise in Berkic, which makes the argument even stronger.",
      },
      {
        id: "funky-films",
        type: "authority",
        description: "Courts routinely reject substantial similarity claims where disputed works' plotlines share similarities 'but developed quite differently,' examining plot, characters, dialogue, setting, theme, and mood/pace in turn.",
        caseName: "Funky Films v. Time Warner Ent. Co.",
        caseRef: "462 F.3d 1072, 1077–78 (9th Cir. 2006)",
        summary: "The Ninth Circuit found no substantial similarity where both works involved family-run funeral parlors and began with a father's death and a prodigal son's return — a strong thematic overlap — but the concrete plot developments, characters, and sequences were materially different.",
        relevance: "Provides the six-factor analytical framework (plot, characters, dialogue, setting, theme, mood/pace) that S&S applies systematically to show that OIS and Eat the Lemon diverge on every element once the unprotectable premise is set aside.",
        needToKnow: "Funky Films is the workhorse case for the element-by-element analysis. Love will likely respond by pointing to the specific overlapping details (Aveeno, Antonio, Frank Sinatra, lemons), so S&S must ensure each of those is covered either under scenes-a-faire or random-similarities doctrine.",
      },
      {
        id: "ois-narrative-fact",
        type: "fact",
        description: "The central narrative device of OIS — Katy meeting and befriending the 30-year-old version of her recently deceased mother through magical time travel — has no parallel in Eat the Lemon.",
        caseName: "Schilken Decl. Ex. 5 (OIS) at 52–56, 193–216; Schilken Decl. Ex. 3 (ETL) at entire manuscript",
        caseRef: "",
        summary: "OIS is an avowed work of fiction incorporating magical realism. Its plot turns on Katy traveling back in time to 1992 Positano, meeting her young mother as a peer, discovering her mother abandoned her as an infant, and confronting her mother's independent personhood. None of these events — the time travel, the living mother, the abandonment revelation — appear in Eat the Lemon.",
        relevance: "Illustrates the most powerful concrete difference between the works. No matter how many surface details overlap, the entire spine of OIS (magical realism, time travel, mother-as-peer) is absent from ETL. This makes a finding of substantial similarity in plot and sequence of events nearly impossible.",
        needToKnow: "This fact card will be most useful in the reply brief if Love's opposition focuses only on the overlapping details without addressing the profound structural and narrative differences. Courts look at the 'total concept and feel' of the works, and these core differences dominate.",
      },
    ],
  },
  {
    id: "1c",
    title: "Copyright Infringement Claim Fails as a Matter of Law",
    subTitle: "1C. A Compilation of Random Scattered Similarities Cannot Establish Infringement",
    citations: [
      {
        id: "cavalier",
        type: "authority",
        description: "A 'compilation of random similarities scattered throughout the works' cannot justify a finding of substantial similarity.",
        caseName: "Cavalier v. Random House, Inc",
        caseRef: "297 F.3d 815, 825 (9th Cir. 2002) (quoting Litchfield v. Spielberg, 736 F.2d 1352, 1356 (9th Cir. 1984))",
        summary: "The Ninth Circuit affirmed that courts must distinguish between specific, protectable creative expression and incidental overlaps that do not, even in aggregate, establish infringement. The court must focus on whether the overall expression is substantially similar, not merely tabulate shared details.",
        relevance: "Love's complaint leans heavily on a list of surface parallels — Aveeno cream, a character named Antonio, Frank Sinatra music, lemon imagery, golden light. Cavalier is the direct authority for why this catalogue approach fails. Courts are not to tally similarities but assess whether protected expression was copied.",
        needToKnow: "Love will likely respond that the number of coincidences is too great to be accidental. S&S should be prepared to show that each listed similarity is either a biographical fact, a scene-a-faire of Amalfi travel narratives, or a meaningless incidental detail — not protected original expression.",
      },
      {
        id: "corbello-1c",
        type: "authority",
        description: "Similarities that 'naturally and necessarily flow from a basic plot premise' constitute unprotectable scenes-a-faire and cannot support a finding of substantial similarity.",
        caseName: "Corbello v. Valli",
        caseRef: "974 F.3d 965, 975 (9th Cir. 2020) (quoting Benay v. Warner Bros. Ent., Inc., 607 F.3d 620, 624–25 (9th Cir. 2010))",
        summary: "Courts applying the extrinsic test must filter out scenes-a-faire — situations, incidents, and settings that flow naturally or necessarily from the basic plot premise — before comparing protected expression.",
        relevance: "Many of Love's specific 'similarities' are textbook scenes-a-faire for a story set on the Amalfi Coast: lemon imagery, golden Mediterranean light, Frank Sinatra at a romantic dinner, a local boat driver named Antonio. These flow inevitably from the locale and genre, not from copying.",
        needToKnow: "The scenes-a-faire doctrine is Love's biggest structural problem. S&S should walk through each of her listed similarities and categorize each as (a) biographical fact, (b) scenes-a-faire, or (c) an incidental detail too trivial to support infringement. This leaves nothing protectable.",
      },
      {
        id: "gallagher",
        type: "authority",
        description: "Dismissal of a copyright infringement claim is proper where the court judicially notices the works and it is clear there is no substantial similarity as a matter of law, even where the complaint lists dozens of specific scene similarities.",
        caseName: "Gallagher v. Lions Gate Ent. Inc",
        caseRef: "2015 WL 12481504, at *2, *14 (C.D. Cal. Sept. 11, 2015)",
        summary: "The Central District dismissed a copyright claim where the complaint listed thirty-three specific scene similarities between two works, finding that a long list of superficial overlaps still does not establish substantial similarity in protectable expression when the works develop those elements differently.",
        relevance: "Directly addresses Love's list-based pleading strategy. This court (C.D. Cal.) dismissed even a complaint with 33 enumerated similarities. Love's list is similarly long but no more substantive.",
        needToKnow: "Gallagher is the most directly applicable district court precedent. It also supports taking the works up at the motion-to-dismiss stage rather than waiting for discovery, which is S&S's procedural goal.",
      },
    ],
  },
  {
    id: "2a",
    title: "State Law Claims Fail",
    subTitle: "2A. The Conspiracy Allegations Are Fundamentally Implausible",
    citations: [
      {
        id: "iqbal",
        type: "authority",
        description: "Where there is a claim of a 'publishing conspiracy' in an accusation of copyright infringement is implausible, and conclusory allegations of conspiracy are insufficient.",
        caseName: "Ashcroft v. Iqbal",
        caseRef: "556 U.S. 662, 678 (2009)",
        summary: "The Supreme Court held that complaints must contain factual allegations sufficient to make claims plausible, not merely possible. Conclusory allegations of conspiracy — without specific facts showing an agreement — are insufficient to survive a motion to dismiss.",
        relevance: "Love's conspiracy theory — that a major publishing house, its parent corporation, and multiple individuals conspired to steal her life story — is exactly the sort of implausible claim that Iqbal requires courts to dismiss at the pleading stage. The conspiracy theory rests entirely on temporal coincidence and speculation.",
        needToKnow: "Iqbal was decided on nearly identical conspiracy pleading grounds. S&S should emphasize that Love alleges no facts showing any agreement between the defendants, only that events occurred in a sequence she finds suspicious. Courts routinely dismiss conspiracy claims that rely on this type of speculation.",
      },
      {
        id: "love-langan",
        type: "authority",
        description: "Love's complaint alleges the existence of a multi-party 'conspiracy' involving a publishing house, its employees, and the novel's author to steal the plaintiff's life story and publish it as fiction.",
        caseName: "Love v. Langan",
        caseRef: "No. 2:23-cv-08934 (C.D. Cal. 2024)",
        summary: "In a related proceeding, the court examined Love's conspiracy claims and noted that temporal proximity between events does not establish an agreement. The court emphasized that Love's theory required inferring a conspiracy from innocent, commonplace publishing activities.",
        relevance: "Directly undermines Love's conspiracy theory by showing that the same type of allegations have already been found insufficient. S&S can argue that Love is recycling failed theories rather than alleging new facts.",
        needToKnow: "This is a prior proceeding involving the same plaintiff. Love may argue the circumstances are different or that she has now alleged additional facts. S&S should compare the allegations side-by-side to show they remain materially the same.",
      },
      {
        id: "conspiracy-fact",
        type: "fact",
        description: "Love's complaint alleges that Serle 'conceived the overall concept for a novel' as part of a conspiracy involving S&S and others, but provides no factual basis beyond temporal proximity and speculation.",
        caseName: "Complaint ¶¶ 42, 58–72, 105",
        caseRef: "",
        summary: "Love characterizes the writing and publication timeline as evidence of conspiracy: Serle visited Positano after Love, one S&S editor is married to Love's former literary agent, and another S&S editor previously rejected Love's manuscript. Love converts these unrelated facts into a coordinated theft scheme without alleging any direct communication or agreement.",
        relevance: "Love's complaint converts innocent, commonplace publishing industry connections into a conspiracy. The 'evidence' amounts to: (1) people in publishing know each other, (2) an author visited a popular tourist destination, and (3) a manuscript was rejected — none of which suggests conspiracy.",
        needToKnow: "This is S&S's strongest fact card on the conspiracy issue. If Love attempts to rely on these connections at opposition, S&S can show that each 'suspicious' fact has an innocent explanation and that Love has not alleged the essential element: an actual agreement.",
      },
    ],
  },
  {
    id: "2b",
    title: "State Law Claims Fail",
    subTitle: "2B. No Specific Conduct Alleged Against S&S",
    citations: [
      {
        id: "starr",
        type: "authority",
        description: "Because each defendant must individually satisfy pleading requirements, complaints must allege specific facts showing what each defendant did, not rely on group pleading against all defendants collectively.",
        caseName: "Starr v. Baca",
        caseRef: "652 F.3d 1202, 1216 (9th Cir. 2011)",
        summary: "The Ninth Circuit held that in a multi-defendant case, the complaint must set forth what role each defendant played in the alleged harm. Group allegations that lump defendants together without distinguishing their individual conduct are insufficient under Iqbal and Twombly.",
        relevance: "Love's complaint groups all defendants together without specifying what S&S specifically did beyond publishing OIS. Under Starr, each defendant must have individualized factual allegations; 'everyone did everything' pleading fails.",
        needToKnow: "Starr is binding Ninth Circuit authority and directly on point. Love may argue that corporate defendants can be treated as a group, but Starr explicitly rejects this where the complaint fails to allege what each entity did.",
      },
      {
        id: "korea-supply",
        type: "authority",
        description: "A claim for breach of fiduciary duty requires the existence of a fiduciary relationship between the specific parties; a publisher-reader relationship does not create fiduciary obligations.",
        caseName: "Korea Supply Co. v. Lockheed Martin Corp.",
        caseRef: "29 Cal. 4th 1134, 1159 (2003)",
        summary: "The California Supreme Court held that a fiduciary duty claim requires a special relationship of trust and confidence between the parties. Arm's-length commercial relationships do not give rise to fiduciary duties absent specific circumstances creating such a relationship.",
        relevance: "S&S had no contractual, fiduciary, or personal relationship with Love. S&S is a publisher that published a novel by a different author. There is no basis for a fiduciary duty between a publisher and a member of the reading public.",
        needToKnow: "This is one of the strongest grounds for dismissal of the fiduciary duty count. Love cannot identify any relationship between herself and S&S that would create fiduciary obligations.",
      },
      {
        id: "quelimane",
        type: "authority",
        description: "A claim for intentional interference with contractual relations requires identification of a specific existing contract; speculative future publishing opportunities do not qualify.",
        caseName: "Quelimane Co. v. Stewart Title Guar. Co.",
        caseRef: "19 Cal. 4th 26, 55 (1998)",
        summary: "The California Supreme Court held that a plaintiff must identify a specific existing contract that was disrupted by the defendant's conduct. Generalized allegations of lost business opportunities or prospective relationships are insufficient.",
        relevance: "Love has not identified any specific contract that S&S interfered with. Her allegations concern a general loss of publishing opportunities, which does not satisfy the requirement of identifying a specific contractual relationship.",
        needToKnow: "Love may attempt to identify her prior literary agent relationship or manuscript submissions as 'contracts.' S&S should be prepared to show these were at-will relationships that do not satisfy the requirement.",
      },
      {
        id: "hughes-pair-o-dice",
        type: "authority",
        description: "A defendant cannot be liable for intentional infliction of emotional distress where the complaint does not allege that the specific defendant engaged in extreme and outrageous conduct directed at the plaintiff.",
        caseName: "Hughes v. Pair-O-Dice Club",
        caseRef: "108 Cal. App. 4th 500, 510 (2003)",
        summary: "The court held that IIED requires conduct 'so extreme as to exceed all bounds of that usually tolerated in a civilized community.' Publishing a novel by a different author, even if it shares thematic similarities with the plaintiff's work, does not meet this standard.",
        relevance: "S&S's conduct — publishing a novel by Jenna Serle — is ordinary publishing activity. Even if OIS drew inspiration from similar life experiences, publishing a book is not outrageous conduct directed at Love.",
        needToKnow: "IIED is among the easiest claims for S&S to defeat. The bar for 'outrageous' conduct is extremely high, and routine publishing decisions fall far below it.",
      },
      {
        id: "cel-tech",
        type: "authority",
        description: "A claim under Business & Professions Code § 17200 et seq. requires the plaintiff to show that the specific defendant engaged in an unlawful, unfair, or fraudulent business act or practice.",
        caseName: "Cel-Tech Communications, Inc. v. Los Angeles Cellular Tel. Co.",
        caseRef: "20 Cal. 4th 163, 180 (1999)",
        summary: "The California Supreme Court held that a UCL claim requires identifying the specific business practice at issue and showing that the particular defendant engaged in it. Derivative UCL claims fail where the underlying claims fail.",
        relevance: "Love's UCL claim against S&S is entirely derivative of her other state law claims. If those underlying claims fail for lack of specific allegations against S&S, the UCL claim necessarily fails as well.",
        needToKnow: "The derivative nature of Love's UCL claim means S&S can seek dismissal of this count as a consequence of dismissing the underlying claims, without needing separate analysis.",
      },
      {
        id: "no-conduct-fact",
        type: "fact",
        description: "Love's complaint does not allege any direct interaction between S&S and Love, any contract between them, or any conduct by S&S directed at Love other than publishing One Italian Summer.",
        caseName: "Complaint ¶¶ 1–245 (reviewed in full)",
        caseRef: "",
        summary: "The complaint's allegations against S&S are limited to: (1) S&S published OIS, (2) one S&S editor is married to Love's former literary agent, and (3) another S&S editor previously rejected Love's manuscript. These are the only allegations connecting S&S to Love in any way.",
        relevance: "Without specific conduct beyond ordinary publishing activity, Love cannot satisfy the individualized pleading requirements for any state law claim against S&S. The marriage and rejection allegations are not actionable conduct.",
        needToKnow: "This fact card is critical for the 'no specific conduct' argument. S&S should emphasize the absence of allegations by cataloguing what Love does NOT allege: no communication with Love, no duty to Love, no agreement to harm Love, and no conduct directed at Love.",
      },
    ],
  },
  {
    id: "3a",
    title: "Statute of Limitations and Copyright Preemption Bar the State Law Claims",
    subTitle: "3A. Many State Law Claims Are Time-Barred",
    citations: [
      {
        id: "bassin",
        type: "authority",
        description: "Each cause of action is subject to an applicable statute of limitations, and an expired limitations period can bar claims at the pleading stage where the complaint's own allegations establish untimeliness.",
        caseName: "Law Offices of Lev A. Bassin v. Bassin",
        caseRef: "No. B283801, 2019 WL 1773808, at *4 (Cal. Ct. App. Apr. 23, 2019)",
        summary: "The California Court of Appeal affirmed that courts may dismiss claims as time-barred at the pleading stage where the complaint itself reveals that the applicable statute of limitations has expired. No discovery or extrinsic evidence is needed when the dates alleged in the complaint conclusively establish the claims are untimely.",
        relevance: "Based on the dates in Love's own complaint, many state law claims appear untimely. OIS was published in March 2022, and Love's complaint was not filed until late 2024 — outside the limitations period for several tort claims with two-year statutes.",
        needToKnow: "Love will likely argue equitable tolling or delayed discovery. S&S must be prepared to show that OIS was a bestselling, widely publicized novel that Love could not reasonably have been unaware of within the limitations period.",
      },
      {
        id: "fox-ethicon",
        type: "authority",
        description: "Courts apply the delayed-discovery rule only where the plaintiff pleads specific facts showing she could not have discovered the injury earlier through reasonable diligence; the rule does not excuse the plaintiff to simply ignore publicly available information.",
        caseName: "Fox v. Ethicon, Inc.",
        caseRef: "35 Cal. 4th 797, 808–09 (2005)",
        summary: "The California Supreme Court held that the delayed-discovery rule requires a plaintiff to plead facts demonstrating: (1) the time and manner of discovery, and (2) the inability to have made an earlier discovery despite reasonable diligence. Constructive knowledge of widely publicized facts starts the limitations clock.",
        relevance: "OIS was a New York Times bestseller reviewed in major media outlets. Love's complaint itself acknowledges she was aware of OIS and its alleged similarities. Under Fox, this constructive — if not actual — knowledge defeats any delayed-discovery argument for claims accruing at publication.",
        needToKnow: "Fox sets a very high bar for delayed discovery when the alleged infringement is publicly available. S&S should chart each cause of action against its applicable limitations period and the complaint's alleged dates. This provides a clean, independent basis for dismissing multiple claims without reaching the merits.",
      },
      {
        id: "sol-fact",
        type: "fact",
        description: "Love alleges that in January 2022, her agent, Andrea Barzvi, told her about OIS's plot; she read the novel in June, saw similar details, and sent an email listing her concerns. She did not bring suit for nearly two and a half years.",
        caseName: "Complaint ¶¶ 58–60",
        caseRef: "",
        summary: "Love's own complaint alleges she knew about OIS in January 2022 and had identified similarities by June 2022. Despite this knowledge, the complaint was not filed until late 2024 — over two years after Love's own alleged discovery of the facts giving rise to her claims.",
        relevance: "The timeline in Love's own complaint undermines any delayed-discovery argument. Love's allegations confirm she had actual knowledge of OIS and its alleged similarities to her work by mid-2022 at the latest, yet she waited over two years to file suit.",
        needToKnow: "This is S&S's strongest timing fact. Love's own allegations establish the exact date she discovered the claims, making it nearly impossible for her to argue delayed discovery for claims with two-year statutes that expired before filing.",
      },
    ],
  },
  {
    id: "3b",
    title: "Statute of Limitations and Copyright Preemption Bar the State Law Claims",
    subTitle: "3B. Many State Law Claims Are Preempted by the Copyright Act",
    citations: [
      {
        id: "laws-sony",
        type: "authority",
        description: "Section 301 of the Copyright Act expressly preempts state-law claims that are equivalent to any of the exclusive rights within the general scope of copyright — regardless of how the plaintiff labels them or what additional state-law theories she invokes.",
        caseName: "Laws v. Sony Music Entm't, Inc.",
        caseRef: "448 F.3d 1134, 1137–38 (9th Cir. 2006)",
        summary: "The Ninth Circuit applied the two-part test for copyright preemption: (1) whether the work falls within copyright's subject matter, and (2) whether the state law right asserted is 'equivalent' to a copyright right. Claims for conversion, misappropriation, and unjust enrichment based on alleged copying are preempted.",
        relevance: "Many of Love's state law claims — conversion, constructive trust, accounting — are essentially copyright claims repackaged as state torts. The gravamen of each is that S&S took Love's creative work without permission, which is the core of a copyright claim.",
        needToKnow: "Laws v. Sony is the leading Ninth Circuit case on copyright preemption. Love's best argument is that her claims involve an 'extra element' beyond copying (e.g., breach of confidence), but S&S should show that the complaint does not actually allege any extra element as to S&S.",
      },
      {
        id: "briarpatch",
        type: "authority",
        description: "Preemption applies to all state-law claims — including conversion, unjust enrichment, unfair competition, and constructive trust — where the plaintiff's only real complaint is that the defendant copied her work without permission.",
        caseName: "Briarpatch Ltd., v. Phoenix Pictures, Inc.",
        caseRef: "373 F.3d 296, 305–06 (2d Cir. 2004)",
        summary: "The Second Circuit held that state law claims are preempted when the work at issue falls within copyright's subject matter and the rights asserted are qualitatively the same as those protected by copyright. The court emphasized that a plaintiff cannot avoid preemption simply by re-labeling a copyright claim as a state tort.",
        relevance: "Provides a clear analytical framework for identifying preempted claims. S&S can apply Briarpatch's test to each of Love's state law claims to show that none involves a qualitatively different right from copyright's exclusive rights.",
        needToKnow: "Briarpatch is a Second Circuit case, so it is persuasive but not binding. However, the Ninth Circuit applies essentially the same test. S&S should cite Briarpatch for its clear articulation of the principle and pair it with Laws v. Sony for binding authority.",
      },
      {
        id: "preemption-fact",
        type: "fact",
        description: "Love's state law claims are rooted in the same core allegation as her copyright claim: that S&S published a novel incorporating elements of Love's life story without permission. Each state claim merely re-labels the alleged unauthorized copying.",
        caseName: "Complaint ¶¶ 110–245 (Causes of Action 2–14)",
        caseRef: "",
        summary: "Each of Love's state law claims is premised on the allegation that OIS 'took' elements of Love's life story. The breach of fiduciary duty claim alleges S&S violated a duty by publishing Love's story; the conversion claim alleges S&S converted Love's story; the UCL claim alleges S&S's publication was unfair. In every case, the underlying wrong is the same: alleged unauthorized use of copyrightable material.",
        relevance: "Because all of Love's state law claims reduce to unauthorized copying, they satisfy both prongs of the preemption test: the subject matter is copyrightable, and the rights asserted are equivalent to copyright's exclusive rights.",
        needToKnow: "S&S should present a chart mapping each state law claim to the copyright right it duplicates. This visual aid makes the preemption argument immediately clear and difficult for Love to rebut without alleging truly independent wrongdoing.",
      },
    ],
  },
];

interface JudicialClaim {
  id: string;
  title: string;
  plaintiffSummary: string;
  plaintiffPoints: string[];
  defendantSummary: string;
  defendantPoints: string[];
}

const judicialClaims: JudicialClaim[] = [
  {
    id: "breach-of-contract",
    title: "Breach of contract",
    plaintiffSummary: `The court in <a href="#" class="text-blue-600 underline"><em>McCormick v. Sentinel Life Ins. Co.</em> (Cal. App. 2nd Dist. 1984) 153 Cal. App. 3d 1030, 1046</a> said: "An insurance company has a duty to pay a claim when it has acquired, though one means or another, sufficient evidence to establish the validity of that claim. It does not have the right to insist the claim be proved only through certain types of evidence. Nor does it exhibit good faith in denying a claim merely because an insured failed to dot the i's or cross the t's on a claim for or other submission...the real question is whether there was enough evidence of whatever form and however acquired that it would be unreasonable for the insurance company to refuse to pay the claim." In <a href="#" class="text-blue-600 underline"><em>McCormick</em></a>, the court reversed the arbitrator's order granting the insurance company's motion for summary judgment.`,
    plaintiffPoints: [
      `The California Supreme Court in <a href="#" class="text-blue-600 underline"><em>Isaacson v. California Ins. Guarantee Assn</em> (Cal. 1988) supra at 791</a> said: "Accordingly, if an insurer 'erroneously denies coverage and/or improperly refuses to defend the insured' in violation of its contractual duties, 'the insured is entitled to make a reasonable settlement of the claim in good faith and may then maintain an action against the insurer to recover the amount of the settlement."`,
      `The <a href="#" class="text-blue-600 underline"><em>Isaacson</em></a> court went onto say: "Further, if an insurer wrongfully fails to provide coverage or a defense, and the insured then settled the claim, the insured is given the benefit of an evidentiary presumption. In a later action against the insurer for reimbursement based on a breach of its contractual duty to defend the action, a reasonable settlement made by the insured to terminate the underlying claim against him may be used as presumptive evidence of the insured's liability on the underlying claim, and the amount of such liability."`,
      "Thus, the amounts paid by PLAINTIFF in this case are presumptive evidence of PLAINTIFF'S and thus RNIC's liability.",
    ],
    defendantSummary: `Under California law, non-compliance with a no voluntary payments provision may be excused when an insured is under duress regarding its legal interests. <a href="#" class="text-blue-600 underline"><em>Jamestown Builders, Inc. v. Gen. Star Indem. Co.</em>, 77 Cal. App. 4th 341, 348 (1999)</a> (cited by DG Plumbing). For example, non-compliance has been excused when an insured has to incur legal expenses to avoid a default judgment. See, e.g., <a href="#" class="text-blue-600 underline"><em>Fiorito v. Super. Ct.</em>, 226 Cal. App. 3d 433, 438 (1990)</a>. On the other hand, non-compliance has not been excused when, as here, an insured assumes amounts solely to protect its business interests.`,
    defendantPoints: [
      `See, e.g., <a href="#" class="text-blue-600 underline"><em>Umpqua Bank v. First Am. Title Ins. Co.</em>, No. CIV. 2:09-3208 WBS, 2011 WL 4852229, at *9 (E.D. Cal. Oct. 12, 2011)</a> (holding that a bank's decision to settle a lawsuit was a business decision that did not fall within the exception), aff'd, <a href="#" class="text-blue-600 underline">542 F. App'x 635 (9th Cir. 2013)</a>; <a href="#" class="text-blue-600 underline"><em>Jamestown Builders</em>, 77 Cal. App. 4th at 344-45, 349</a> (holding that a developer's payments to repair water intrusion damages before any lawsuits were filed against it did not fall within the exception). For its part, DG Plumbing cites no authority holding that it faced the type of legal risks that allowed it to incur the Remediation Expenses without Richmond's consent. See Pl.'s Opp. at 10-11.`,
      `Non-compliance with a no voluntary payments provision may also be excused when an insured is unaware of the identity of its insurer or the contents of the policy. <a href="#" class="text-blue-600 underline"><em>Jamestown Builders</em>, 77 Cal. App. 4th at 348</a>; see also <a href="#" class="text-blue-600 underline"><em>Corthera, Inc. v. Scottsdale Ins. Co.</em>, No. 14-CV-05014-EMC, 2016 WL 270951, at *9 (N.D. Cal. Jan. 22, 2016)</a> ('[T]he key is not the involuntary nature of the underlying obligation, but the involuntariness of not giving prior notice to the insurer as required by NVP clauses.'). Here, DG Plumbing was immediately aware of the need to notice the Water Leak to Richmond, but it decided to delay providing that notice.`,
      "By voluntarily assuming the Remediation Expenses without Richmond's consent, DG Plumbing deprived Richmond of those standard contractual rights. DG Plumbing has no right under the Policy to unilaterally resolve a potential pre-'suit' claim based on DG Plumbing's own conclusion that it would be liable for the same.",
    ],
  },
  {
    id: "bad-faith",
    title: "Breach of the implied covenant of good faith and fair dealing",
    plaintiffSummary: `The true "bedrock" case pertaining to the circumstances in the present case is <a href="#" class="text-blue-600 underline"><em>Egan v. Mut of Omaha Ins. Co.</em> (Cal 1979) 24 Cal. 3d 809, 817</a>. In that case, the California Supreme Court said: "For the reasons discussed below, we conclude that an insurer may breach the covenant of good faith and fair dealing when it fails to properly investigate its insured claim." [Emphasis added.] The Egan court went onto say: "the insurer, when determining whether to settle a claim, must give at least as much consideration to the welfare of its insured as it gives to its own interest." <a href="#" class="text-blue-600 underline">Id. at 818</a>. "When the insurer unreasonably and in bad faith withholds payment of the claim of its insured it is subject to liability in tort. [Citations.] For the insurer to fulfill its obligation not to impair the right of the insured to receive the benefits of the agreement, it again must give at least as much consideration to the latter's interests as it does to its own." <a href="#" class="text-blue-600 underline">Id. at 818-819</a>.`,
    plaintiffPoints: [
      `The Egan court explained: "The purchase of...insurance provides peace of mind and security...[Citation.] To protect these interests it is essential that an insurer fully inquire into possible bases that might support the insured's claim. Although we recognize that distinguishing fraudulent from legitimate claims may occasionally be difficult for insurers...an insurer cannot reasonably and in good faith deny payments to its insured without thoroughly investigating the foundation for its denial." <a href="#" class="text-blue-600 underline">Id. at 819</a>.`,
      `As stated above, RNIC did almost nothing to investigate PLAINTIFF'S claim. They did not come to the job site and did not speak with the general contractor or any of the contractors who performed the water remediation and made the repairs. They simply denied the claim. (<a href="#" class="text-blue-600 underline">Gomez Dec, para 11</a>).`,
      `PLAINTIFF'S expert, Kevin Quinley states: "In my 47 years of experience with insurance claims, liability insurers do not confine their investigative or settlement responsibilities to litigated cases; instead they routinely investigate, evaluate and settle pre-litigation claims where appropriate." (<a href="#" class="text-blue-600 underline">Quinley Dec, para 16</a>).`,
    ],
    defendantSummary: `As explained in Richmond's opening brief, California law is well-settled that there cannot be bad faith when there is no covered loss. <a href="#" class="text-blue-600 underline">MTD Br. at 13-14</a> (citing cases). DG Plumbing does not dispute this conclusion, and in fact, cites authority confirming it. See <a href="#" class="text-blue-600 underline"><em>Love v. Fire Ins. Exch.</em>, 221 Cal. App. 3d 1136, 1153 (1990)</a> ("Our conclusion that a bad faith claim cannot be maintained unless policy benefits are due is in accord with the policy in which the duty of good faith is rooted."). Because there is no coverage for the Insurance Claim, there is no bad faith as a matter of law.`,
    defendantPoints: [
      `DG Plumbing nonetheless maintains that Richmond is liable for bad faith because it purportedly failed to investigate the Insurance Claim. Pl.'s Opp. at 5-7. DG Plumbing's argument was rejected in a recent opinion issued in this District involving nearly identical facts. See <a href="#" class="text-blue-600 underline"><em>R.P. Ruiz</em>, 764 F. Supp. 3d at 944</a>. In R.P. Ruiz, an insured under a commercial general liability policy remediated deficient work at a project. <a href="#" class="text-blue-600 underline">Id. at 940-41</a>. The client never sued the insured. Id. Rather, the insured corrected the work at its own expense and then sought reimbursement under the insurance policy. <a href="#" class="text-blue-600 underline">Id. at 941</a>. The Court held that there was no indemnity coverage for the remediation expenses because they were not court-ordered damages. <a href="#" class="text-blue-600 underline">Id. at 944</a>. The Court also rejected the insured's claim that the insurer was liable in bad faith for failing to investigate the insurance claim--the Court concluded there was no mandatory duty under the policy to investigate any pre-"suit" claim and that there could be no bad faith without covered loss. <a href="#" class="text-blue-600 underline">Id. at 944, 946</a> (citations omitted). The Court dismissed with prejudice the contract and bad faith claims. <a href="#" class="text-blue-600 underline">Id. at 946</a>.`,
      "In accordance with the authority cited in Richmond's opening brief and R.P. Ruiz, the Court does not need to scrutinize Richmond's specific theory of alleged bad faith to dismiss the count. But if the Court does consider it, the failure-to-investigate theory apparently depends on the illogical and false premise that the Insurance Claim is a first-party insurance claim that also involves the duty to defend under a third-party liability policy. DG Plumbing cites cases addressing both contexts,³ even though neither one actually applies to the Insurance Claim seeking indemnity under the third-party liability Policy.",
    ],
  },
];

// Kept for brief flow
const judicialAuthorities: Authority[] = [];

interface SupportingAuthoritiesPanelProps {
  className?: string;
  onNextOutline?: () => void;
  onSkipToGenerateDraft?: () => void;
  onEditOutline?: () => void;
  flowType?: "brief" | "judicial";
}

export function SupportingAuthoritiesPanel({
  className,
  onNextOutline,
  onSkipToGenerateDraft,
  onEditOutline,
  flowType = "brief",
}: SupportingAuthoritiesPanelProps) {
  const [showOutlinePreview, setShowOutlinePreview] = React.useState(false);
  const [selectedCitations, setSelectedCitations] = React.useState<string[]>(() =>
    defaultAuthorities.flatMap((a) => a.citations.map((c) => c.id))
  );

  // Judicial: per-claim decision state
  const [decisions, setDecisions] = React.useState<Record<string, "plaintiff" | "defendant" | "neither" | null>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, null]))
  );
  const [comments, setComments] = React.useState<Record<string, string>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, "Accordingly, the Court DENIES Defendant's Motion as to Plaintiff's breach of contract claim WITHOUT PREJUDICE."]))
  );
  const [editingComment, setEditingComment] = React.useState<Record<string, boolean>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, false]))
  );
  const [showComment, setShowComment] = React.useState<Record<string, boolean>>(
    Object.fromEntries(judicialClaims.map((c) => [c.id, false]))
  );

  const toggleCitation = (citationId: string) => {
    setSelectedCitations((prev) =>
      prev.includes(citationId)
        ? prev.filter((id) => id !== citationId)
        : [...prev, citationId]
    );
  };

  const authorities = defaultAuthorities;

  return (
    <div className={cn("flex h-full flex-col overflow-y-auto", className)}>
      {/* Main Content with sidebar */}
      <div className="mx-auto flex w-full max-w-5xl gap-6 px-6 py-8">
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
        <div className="flex-1">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
              {flowType === "judicial" ? "DECIDE" : "SUPPORTING AUTHORITIES"}
            </p>
            <h1 className="text-2xl font-semibold text-[#212223]">
              {flowType === "judicial" ? "Indicate how you would like to resolve the disputes" : "Select the desired authorities"}
            </h1>
          </div>

        {/* Argument Sections */}
        {flowType === "judicial" ? (
          // Judicial: traditional two-column table + radio decisions
          judicialClaims.map((claim, claimIndex) => {
            const decision = decisions[claim.id];
            const isEditing = editingComment[claim.id];
            const commentVisible = showComment[claim.id];

            return (
              <div key={claim.id} className={claimIndex > 0 ? "mt-10" : ""}>
                {/* Section heading */}
                <h2 className="mb-4 text-lg font-semibold text-[#212223]">{claim.title}</h2>

                {/* Table */}
                <div className="overflow-hidden rounded-lg border border-[#e5e5e5] bg-white">
                  {/* Table header */}
                  <div className="flex border-b border-[#e5e5e5]">
                    <div className="w-1/2 bg-[#f2f2f2] px-5 py-3">
                      <span className="text-sm font-semibold text-[#212223]">{"Plaintiff's claims"}</span>
                    </div>
                    <div className="w-1/2 border-l border-[#e5e5e5] bg-[#f2f2f2] px-5 py-3">
                      <span className="text-sm font-semibold text-[#212223]">{"Defendant's response"}</span>
                    </div>
                  </div>

                  {/* Single content row */}
                  <div className="flex border-b border-[#e5e5e5]">
                    <div className="w-1/2 px-5 py-4">
                      <p className="mb-3 text-sm leading-relaxed text-[#212223]" dangerouslySetInnerHTML={{ __html: claim.plaintiffSummary }} />
                      <ul className="space-y-2">
                        {claim.plaintiffPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed text-[#212223]">
                            <span className="mt-0.5 shrink-0 text-[#737373]">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-1/2 border-l border-[#e5e5e5] px-5 py-4">
                      <p className="mb-3 text-sm leading-relaxed text-[#212223]" dangerouslySetInnerHTML={{ __html: claim.defendantSummary }} />
                      <ul className="space-y-2">
                        {claim.defendantPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed text-[#212223]">
                            <span className="mt-0.5 shrink-0 text-[#737373]">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Decision row — full width, header background, no column divider */}
                  <div className="bg-[#ebf0ed] px-5 py-4">
                    <p className="mb-3 text-sm font-semibold text-[#212223]">Decision:</p>
                    <div className="flex items-center gap-6">
                      {(["plaintiff", "defendant", "neither"] as const).map((option) => {
                        const labels = { plaintiff: "Agree with Plaintiff", defendant: "Agree with Defendant", neither: "Neither" };
                        // breach-of-contract: plaintiff is functional; bad-faith: neither is functional
                        const isFunctional =
                          claim.id === "bad-faith"
                            ? option === "neither"
                            : option === "plaintiff";
                        return (
                          <label key={option} className={cn("flex items-center gap-2", isFunctional ? "cursor-pointer" : "cursor-not-allowed select-none")}>
                            <input
                              type="radio"
                              name={`decision-${claim.id}`}
                              value={option}
                              checked={decision === option}
                              onChange={() => {
                                if (!isFunctional) return;
                                setDecisions((prev) => ({ ...prev, [claim.id]: option }));
                                if (claim.id !== "bad-faith") {
                                  setShowComment((prev) => ({ ...prev, [claim.id]: true }));
                                }
                              }}
                              onClick={(e) => { if (!isFunctional) e.preventDefault(); }}
                              className="accent-[#1d4b34] cursor-[inherit]"
                            />
                            <span className="text-sm text-[#212223]">{labels[option]}</span>
                          </label>
                        );
                      })}
                    </div>

                    {/* Legal Research card — shown for bad-faith when Neither is selected */}
                    {claim.id === "bad-faith" && decision === "neither" && (
                      <div className="mt-4 rounded-lg border border-[#e5e5e5] bg-white p-5">
                        <p className="mb-3 text-sm font-semibold text-[#212223]">Legal research</p>
                        <div className="space-y-4">
                          <div className="text-sm leading-relaxed text-[#212223]">
                            &hellip;To establish a claim for a breach of the implied covenant of good faith and fair dealing, Plaintiff must demonstrate (1) benefits due under the policy must have been withheld; and (2) the reason for withholding benefits must have been unreasonable or without proper cause.&hellip;
                            <br />
                            <a href="#" className="text-blue-600 hover:underline"><em>Wilshire Manor Apartments, LLC v. State Farm Gen. Ins. Co.</em>, 732 Fed. Appx. 613, 614 (9th Cir. 2018)</a>
                          </div>
                          <div className="text-sm leading-relaxed text-[#212223]">
                            &hellip;California courts have held that when there is no breach of contract, there necessarily is no breach of the implied covenant of good faith and fair dealing.&hellip;
                            <br />
                            <a href="#" className="text-blue-600 hover:underline"><em>Razuki v. AmGUARD Ins. Co.</em>, No. 24-2352, 2025 WL 1604592, at *1 (9th Cir. June 6, 2025)</a>
                          </div>
                          <div className="text-sm leading-relaxed text-[#212223]">
                            &hellip;It is clear that if there is no <em>potential</em> for coverage and, hence, no duty to defend under the terms of the policy, there can be no action for breach of the implied covenant of good faith and fair dealing because the covenant is based on the contractual relationship between the insured and the insurer.&hellip;
                            <br />
                            <a href="#" className="text-blue-600 hover:underline"><em>Waller</em>, 11 Cal. 4th at 36, 44 Cal.Rptr.2d 370, 900 P.2d 619</a>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full border-[#e5e5e5] bg-white px-4 text-[#212223] hover:bg-[#f7f7f7]"
                          >
                            Continue with AI Deep Research
                            <ExternalLink className="ml-2 size-4" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Comment area — shown for non-bad-faith claims */}
                    {claim.id !== "bad-faith" && commentVisible && (
                      <div className="mt-3">
                        {isEditing ? (
                          <div className="flex flex-col gap-2">
                            <textarea
                              className="w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#212223] focus:border-[#1d4b34] focus:outline-none"
                              rows={3}
                              value={comments[claim.id]}
                              onChange={(e) => setComments((prev) => ({ ...prev, [claim.id]: e.target.value }))}
                            />
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                className="rounded-full bg-[#1d4b34] px-4 text-white hover:bg-[#163d2a]"
                                onClick={() => setEditingComment((prev) => ({ ...prev, [claim.id]: false }))}
                              >
                                Save
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full border-[#e5e5e5] bg-white px-4 text-[#212223] hover:bg-[#f7f7f7]"
                                onClick={() => setEditingComment((prev) => ({ ...prev, [claim.id]: false }))}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start gap-3 rounded-lg border border-[#e5e5e5] bg-white px-4 py-3">
                            <p className="flex-1 text-sm text-[#212223]">{comments[claim.id]}</p>
                            <button
                              onClick={() => setEditingComment((prev) => ({ ...prev, [claim.id]: true }))}
                              className="shrink-0 text-[#737373] hover:text-[#212223]"
                            >
                              <Pencil className="size-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}

  {/* Add reasoning button — shown for non-bad-faith claims when no comment yet */}
  {claim.id !== "bad-faith" && !commentVisible && (
    <div className="mt-3">
      <button
        onClick={() => setCommentVisible(true)}
        className="flex items-center gap-2 text-sm text-[#0066CC] hover:underline"
      >
        <MessageSquarePlus className="size-4 text-[#737373]" />
        Add reasoning
      </button>
    </div>
  )}

  {/* Add reasoning button for bad-faith — shown whenever comment is not yet visible */}
  {claim.id === "bad-faith" && !commentVisible && (
    <div className="mt-3">
      <button
        onClick={() => setCommentVisible(true)}
        className="flex items-center gap-2 text-sm text-[#0066CC] hover:underline"
      >
        <MessageSquarePlus className="size-4 text-[#737373]" />
        Add reasoning
      </button>
    </div>
  )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (() => {
          // Build a list of unique titles in order to assign correct group numbers
          const uniqueTitles: string[] = [];
          authorities.forEach((a) => {
            if (!uniqueTitles.includes(a.title)) uniqueTitles.push(a.title);
          });

          return authorities.map((authority, authorityIndex) => {
            const groupNumber = uniqueTitles.indexOf(authority.title) + 1;
            const isFirstInGroup = authorityIndex === 0 || authorities[authorityIndex - 1].title !== authority.title;
            const isFirstEntry = authorityIndex === 0;

            return (
            <div key={authority.id} className={!isFirstEntry ? (isFirstInGroup ? "mt-10" : "mt-8") : ""}>
              {/* Main section header — only shown once per unique title */}
              {isFirstInGroup && (
                <h2 className="mb-1 text-lg font-semibold text-[#212223]">
                  {groupNumber}. {authority.title}
                </h2>
              )}
              {/* Subheader (e.g. "1A. ...") */}
              {authority.subTitle && (
                <h3 className={cn("text-base font-semibold text-[#212223]", isFirstInGroup ? "mb-4" : "mb-4 mt-1")}>
                  {authority.subTitle}
                </h3>
              )}
              <div className="rounded-lg border border-[#e5e5e5] bg-white">
                {/* Table header row */}
                <div className="flex border-b border-[#e5e5e5]">
                  <div className="flex w-1/2 items-center gap-3 bg-[#f5f7f6] px-4 py-3">
                    <Checkbox
                      checked={authority.citations.every((c) => selectedCitations.includes(c.id))}
                      onCheckedChange={() => {
                        const allSelected = authority.citations.every((c) => selectedCitations.includes(c.id));
                        if (allSelected) {
                          setSelectedCitations((prev) => prev.filter((id) => !authority.citations.some((c) => c.id === id)));
                        } else {
                          setSelectedCitations((prev) => [...new Set([...prev, ...authority.citations.map((c) => c.id)])]);
                        }
                      }}
                      className="border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                    />
                    <span className="font-semibold text-[#212223]">Citations</span>
                    <span className="text-sm text-[#737373]">
                      • {authority.citations.filter((c) => selectedCitations.includes(c.id)).length} selected
                    </span>
                  </div>
                  <div className="w-1/2 border-l border-dashed border-[#d2d2d2] bg-[#f5f7f6] px-6 py-3">
                    <span className="font-semibold text-[#212223]">Key details</span>
                  </div>
                </div>
                {/* Citation rows */}
                {authority.citations.map((citation, index) => (
                  <div key={citation.id} className={cn("flex", index < authority.citations.length - 1 && "border-b border-[#e5e5e5]")}>
                    {/* Left column: Citation info */}
                    <div className={cn("w-1/2 p-4", selectedCitations.includes(citation.id) ? "bg-[#f5f7f6]" : "bg-white")}>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedCitations.includes(citation.id)}
                          onCheckedChange={() => toggleCitation(citation.id)}
                          className="mt-0.5 border-[#737373] data-[state=checked]:border-[#2e6b5c] data-[state=checked]:bg-[#2e6b5c]"
                        />
                        <div className="flex-1">
                          {/* Type label */}
                          <p className="mb-1 text-sm font-semibold text-[#212223]">
                            {citation.type === "authority" ? "Supporting authority" : "Supporting fact"}
                          </p>
                          {/* Description */}
                          <p className="mb-3 text-sm leading-relaxed text-[#212223]">{citation.description}</p>
                          {/* Case name as link with external icon */}
                          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-[#2e6b5c] underline hover:text-[#1d4b34]">
                            {citation.caseName}
                            <svg className="size-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.5 1.5H10.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10.5 1.5L1.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                          {/* Citation reference */}
                          {citation.caseRef && <p className="text-sm text-[#737373]">{citation.caseRef}</p>}
                          {/* Summary section */}
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-[#212223]">Summary:</p>
                            <p className="mt-1 text-sm leading-relaxed text-[#212223]">{citation.summary}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Right column: Key details (Relevance & Need to Know) */}
                    <div className={cn("w-1/2 border-l border-dashed border-[#d2d2d2] p-4 pl-6", selectedCitations.includes(citation.id) ? "bg-[#f5f7f6]" : "bg-white")}>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-[#212223]">Relevance:</p>
                          <p className="mt-1 text-sm leading-relaxed text-[#212223]">{citation.relevance}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#212223]">Need to Know:</p>
                          <p className="mt-1 text-sm leading-relaxed text-[#212223]">{citation.needToKnow}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            );
          });
        })()}

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-3 pb-8 pt-6">
            {flowType !== "judicial" && (
              <Button
                variant="outline"
                onClick={onSkipToGenerateDraft}
                className="rounded-full border-[#cccccc] px-6 text-[#212223] hover:bg-[#f7f7f7]"
              >
                Skip to generate draft
              </Button>
            )}
            <Button
              onClick={onNextOutline}
              className="rounded-full bg-[#1d4b34] px-6 text-white hover:bg-[#163d2a]"
            >
              Next: Outline
            </Button>
          </div>
        </div>
      </div>
      {/* Outline Preview Overlay */}
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
