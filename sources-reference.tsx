// ============================================================================
// SOURCES TAB - COPY/PASTE REFERENCE
// ============================================================================
// This file contains all the code needed to add the Sources tab functionality
// to a ChatDrawer component. It includes:
//   1. The document content data (gyantComplaintPages)
//   2. Required state variables and effects
//   3. The Sources list view with dropdown filter
//   4. The Document Viewer with continuous scroll
//   5. Parent layout integration for 50/50 split
// ============================================================================

// ============================================================================
// PART 1: LUCIDE ICONS NEEDED
// ============================================================================
// Add these to your lucide-react import:
// FileText, ChevronDown, ArrowLeft, Undo2, Redo2, ZoomIn, ZoomOut, Download, ExternalLink

// ============================================================================
// PART 2: DOCUMENT CONTENT DATA (lib/document-content.ts)
// ============================================================================
// Create this as a separate file: lib/document-content.ts

export const gyantComplaintPages: { pageHeader: string; content: string }[] = [
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 1 of 8 PageID 1",
    content: `IN THE UNITED STATES DISTRICT COURT NORTHERN DISTRICT OF TEXAS FORT WORTH DIVISION

GYANT PROPERTIES, LLC, Plaintiff,

V.

Civil Action No. 4:25-cv-00064

NATIONAL FIRE & MARINE INSURANCE COMPANY, Defendant.

DEFENDANT NATIONAL FIRE & MARINE INSURANCE COMPANY'S NOTICE OF REMOVAL

TO THE HONORABLE UNITED STATES DISTRICT JUDGE:

COMES NOW, Defendant National Fire & Marine Insurance Company ("Defendant" or "NF&M") in the above-styled and numbered cause, and respectfully invokes the Court's federal diversity jurisdiction under 28 U.S.C. §1332 and hereby serves notice of its removal of this case from the 153rd Judicial District Court of Tarrant County, Texas, under 28 U.S.C. §1441 and §1446. Complete diversity of citizenship exists between Plaintiff and Defendant, and the amount in controversy exceeds $75,000, exclusive of interest and costs. NF&M is not a citizen of the State of Texas and may permissibly remove this case to federal court.

I. NATURE OF THE SUIT

1. This is a civil lawsuit as a result of a disputed insurance claim in which Plaintiff affirmatively seeks economic damages in excess of $828,750.01. See Plaintiff's Original Petition filed herewith as Exhibit 2 at paragraphs 13 and 17. The dispute pertains to the amount of covered property damage allegedly suffered by the Plaintiff as a result of hail/windstorm on or about March 16, 2023. Id. at paragraphs 11, 12, 16, 22, and 28. Because this suit arises out of an insurance claim for damage to covered property, this suit is therefore subject to Chapter 542 of the Texas Insurance Code.

2. Plaintiff contends it is entitled to certain disputed insurance benefits under a`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 2 of 8 PageID 2",
    content: `property and casualty policy issued by NF&M. Plaintiff contends NF&M has allegedly committed the following acts: anticipatory breach of contract, breach of contract, violations of certain provisions of Chapters 541 and 542 of the Texas Insurance Code, breach of the duty of good faith and fair dealing, and violations of certain provisions of Chapter 17 of the Texas Deceptive Trade Practices Act ("the DTPA").

II. PROCEDURAL BACKGROUND

3. On December 11, 2024, Plaintiff originally filed this suit in the 153rd Judicial District Court of Tarrant County, Texas, in Cause No. 153-360214-24, styled Gyant Properties, LLC. v. National Fire & Marine Insurance Company ("the State Court Action"). See Plaintiff's Original Petition filed herewith as Exhibit 2.

4. NF&M was not properly served with legal process in this matter.

5. NF&M did not answer the petition in state court.

III. REMOVAL IS TIMELY

6. In compliance with 28 U.S.C. §1446(b)(1), this Notice of Removal is being filed timely because Plaintiff has not yet effectuated service of process of Plaintiff's Original Petition upon NF&M. See Plaintiff's Rejected Executed Process in the Case filed herewith as Exhibit 1.

7. Furthermore, in compliance with 28 U.S.C. § 1446(c)(1), this Notice of Removal is being filed within one year of the date that the State Court Action was filed in state court. See the citation served on NF&M filed herewith as Exhibit 1, affirmatively stating that the State Court Action was filed on December 11, 2024. See the filing date stamp on the Plaintiff's Original Petition filed herewith as Exhibit 2. This Notice of Removal therefore is timely in all respects.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 3 of 8 PageID 3",
    content: `IV. VENUE IS PROPER

8. Venue is proper in this Court under 28 U.S.C. § 1446(a) because this district and division encompass the venue where the State Court Action is pending, i.e., Tarrant County, Texas. See Plaintiff's Original Petition filed herewith as Exhibit 2 at paragraphs 1, 5-6.

9. Venue also is proper in this Court under 28 U.S.C. § 1391(b)(2), in that a substantial part of the events or omissions giving rise to the State Court Action allegedly occurred in Tarrant County, Texas, a county within this federal district and division. See Plaintiff's Original Petition filed herewith as Exhibit 2 at paragraph 6.

10. The insured's properties for which the disputed insurance claim was submitted is in Tarrant County, Texas. See Plaintiff's Original Petition filed herewith as Exhibit 2 at paragraphs 1 and 6.

V. DIVERSITY JURISDICTION IS PRESENT

11. This Court may properly exercise its diversity jurisdiction under 28 U.S.C. §1332, as this is a civil action where there is complete diversity of citizenship between all parties who are properly joined, and the matter in controversy exceeds $75,000, exclusive of interest and costs.

A. Complete Diversity of Citizenship Among the Parties Is Present

i. Plaintiff is a Texas Entity

12. Plaintiff Gyant Properties, LLC is a limited liability company duly organized in the State of Texas whose members are Jeffrey Givens and Theron L. Bryant Revocable Trust. Jeffrey Givens is an individual who resides in Tarrant County, Texas, and is a citizen of the State of Texas.

13. For the purposes of establishing diversity, a limited liability company is a citizen of any state of which a member of the company is a citizen. Harvey v. Grey Wolf Drilling Co., 542 F.3d 1077, 1080 (5th Cir. 2008). If the members are themselves other entities, then the citizenship`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 4 of 8 PageID 4",
    content: `must be traced through however many layers of members or partners there may be. Mullins v. TestAmerica Inc., 564 F.3d 386, 397-98 (5th Cir. 2009). Unincorporated entities such as trusts possess the citizenship of the trustee suing or the citizenship of the trust's members for purposes of diversity jurisdiction. Americold Realty Tr. v. Conagra Foods, Inc., 577 U.S. 378, 381-84 (2016). Plaintiff's Original Petition does not indicate that a trustee brought the action. See Plaintiff's Original Petition filed herewith as Exhibit 2.

14. After an exhaustive search of Theron L. Bryant Revocable Trust, no information regarding the trust's membership is publicly available or available through subscription-based resources commonly used for legal practice. Federal Rule of Civil Procedure 7.1(a)(2) requires Plaintiff to name and disclose the citizenship of every individual or entity whose citizenship is attributed to that party. Fed. R. Civ. P. 7.1(a)(2). The advisory committee notes to Rule 7.1(a)(2) further provide that a "party suing an LLC may not have all the information it needs to plead the LLC's citizenship.... Pleading on information and belief is acceptable at the pleading stage, but disclosure is necessary both to ensure that diversity jurisdiction exists and to protect against the waste that may occur upon belated discovery of a diversity-destroying citizenship." Advisory Committee Note, Fed. R. Civ. P. 7.1(a)(2). Courts have further permitted removing parties to allege an entity's members' citizenship on information and belief after which the opposing party must file a disclosure of citizenship to enable the removing party to distinctly and affirmatively allege citizenship. See X Corp v. Media Matters for Am., et al., No. 4:23-01175, 2024 WL 3850454, at *2 (N.D. Tex. Aug. 16, 2024); Carr v. IF&P Holding Co., LLC, No. 22-480, 2024 WL 2207487, at *4 (E.D. La. May 16, 2024). Thus, while the party seeking to invoke the Court's jurisdiction bears the burden of proving the existence of federal jurisdiction, the Supreme Court's adoption of Rule 7.1(a)(2) allows a party to plead an entity's membership based upon information and belief`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 5 of 8 PageID 5",
    content: `at the pleading stage, and Rule 7.1(a)(2) places an independent obligation on an entity party to provide certain ownership information unilaterally. Carr, 2024 WL 2207487 at *4. Accordingly, upon information and belief, Theron L. Bryant is the sole member of the Theron L. Bryant Revocable Trust. Theron L. Bryant is an individual who resides in Tarrant County, Texas and is a citizen of the State of Texas.

15. Therefore, Plaintiff is a citizen of Texas for the purpose of determining diversity jurisdiction.

ii. Citizenship of the Defendant

16. NF&M is a foreign corporation organized under the laws of the State of Nebraska with its principal place of business in Omaha, Nebraska. Hence, NF&M is completely diverse as to the Plaintiff.

17. For the purposes of establishing diversity, an incorporated entity is considered a citizen of the state of incorporation and citizen of the state in which it maintains its principal place of business. See Hertz Corp. v. Friend, 559 U.S. 77 (2010). Therefore, NF&M is a citizen of the state of Nebraska for purposes of establishing citizenship. Because NF&M is not a citizen of the State of Texas, NF&M may properly remove the State Court Action pursuant to 28 U.S.C. § 1441(b)(2).

B. Amount In Controversy Exceeds $75,000

18. In its Original Petition, Plaintiff affirmatively seeks treble economic damages, consequential damages, attorney's fees, treble mental anguish, court costs, interest, exemplary damages, pre- and post-judgment interest, and expert witness fees. See Plaintiff's Original Petition filed herewith as Exhibit 2 at paragraph 57. Plaintiff claims economic damages of at least $828,750.01, specifically, $294,668.83 at the Bryant Irvin property, $534,081.18 at the Stuart property, and an unspecified amount at the Seminary property. Id. at paragraphs 13 and 17.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 6 of 8 PageID 6",
    content: `19. Furthermore, under § 541.152(b) of the Texas Insurance Code, "on a finding by the trier of fact that the defendant knowingly committed the act complained of, the trier of fact may award an amount not to exceed three times the amount of actual damages...." TEX. INS. CODE ANN. § 541.152; see Plaintiff's Original Petition filed herewith as Exhibit 2 at paragraph 57(c).

20. Therefore, Plaintiff's Original Petition seeks recovery of an amount in excess of $828,750.01 and asserts claims under statutes that provide for treble damages, attorneys' fees, if Plaintiff's allegations are proven. Accordingly, since Plaintiff's Original Petition demonstrates an amount in controversy that exceeds $75,000, this Court has subject-matter jurisdiction under 28 U.S.C. § 1332, and this removal is proper.

21. Removal to the Northern District of Texas, Fort Worth Division is proper because the state court action is pending in Tarrant County, which is part of the Northern District.

VI. ADDITIONAL DOCUMENTS FILED IN SUPPORT OF THE REMOVAL

22. Pursuant to 28 U.S.C. § 1446(a) governing removals, the following materials are being filed with this Notice of Removal:

\u2022 Form JS-44, Civil Cover Sheet
\u2022 Exhibit 1: Rejected Executed Process in the Case
\u2022 Exhibit 2: Pleadings in the State Court Case
\u2022 Exhibit 3: Orders Signed in the State Court Case (None)
\u2022 Exhibit 4: State Court Docket Sheet
\u2022 Exhibit 5: Index of Matters being Filed with the Notice of Removal
\u2022 Exhibit 6: List of All Counsel of Record

23. Pursuant to 28 U.S.C. § 1446(d), NF&M will provide prompt written notice to Plaintiff of the filing of this Notice of Removal and will file a notice with the Clerk of the 153rd`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 7 of 8 PageID 7",
    content: `Judicial District Court in Tarrant County, Texas, where the State Court Action was initially filed.

VII. CONCLUSION AND PRAYER

24. Complete diversity of citizenship is present between Plaintiff and Defendant. In addition, Plaintiff's Original Petition facially establishes that the amount in controversy exceeds $75,000, exclusive of interest and costs, and this removal is timely in all respects. Thus, this honorable Court therefore may exercise its federal diversity jurisdiction under 28 U.S.C. §1332.

25. Defendant NATIONAL FIRE & MARINE INSURANCE COMPANY therefore respectfully prays that the Court entertain its federal diversity jurisdiction over this matter.

Respectfully submitted,

PHELPS DUNBAR LLP

BY:
/s/ Clinton J. Wolbert
Clinton J. Wolbert
State Bar No. 24103020
Nicholas A. Pohl
State Bar No. 24110230
ONE SHELL PLAZA
910 Louisiana Street; Suite 4300
Houston, Texas 77002
Telephone: 713 626 1386
Facsimile: 713 626 1388
Email: clinton.wolbert@phelps.com
nick.pohl@phelps.com

ATTORNEYS FOR DEFENDANT, NATIONAL FIRE & MARINE INSURANCE COMPANY`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1 Filed 01/24/25 Page 8 of 8 PageID 8",
    content: `CERTIFICATE OF SERVICE

I hereby certify that a true and correct copy of the foregoing instrument has been served upon all known counsel of record electronically on January 24, 2025.

Todd M. Hurd
Todd Hurd & Associates
PO Box 1741
Burleson, Texas 76097

-and-

Juliana Morris
Law Office of Juliana Morris
661 E Main St., Ste. 200-136
Midlothian, Texas 76065

VIA E-MAIL: t.hurd@texasattorneylaw.com
juliana@morristexaslaw.com

/s/ Clinton J. Wolbert
Clinton J. Wolbert`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 1 of 510 PageID 13",
    content: `FILED
TARRANT COUNTY
12/11/2024 11:44 AM
THOMAS A. WILDER
DISTRICT CLERK
153-360214-24

IN THE DISTRICT COURT OF TARRANT COUNTY, TEXAS ____ JUDICIAL DISTRICT

GYANT PROPERTIES, LLC, Plaintiff,

vs.

NATIONAL FIRE & MARINE INSURANCE COMPANY, Defendant.

PLAINTIFF'S ORIGINAL PETITION

CAUSE NO. __________

TO THE HONORABLE JUDGE OF SAID COURT:

COMES NOW, GYANT PROPERTIES, LLC (hereinafter "Gyant" or "Plaintiff"), and files this, its Plaintiff's Original Petition, complaining of Defendant, NATIONAL FIRE & MARINE INSURANCE COMPANY (hereinafter "National Fire" or "Defendant"), and for cause of action against said Defendant, would respectfully show the Honorable Court as follows:

I. PARTIES AND SERVICE

1. Plaintiff, Gyant Properties, LLC ("Gyant" or "Plaintiff") is a Texas Limited Liability Company, duly organized under the laws of the State of Texas and in good standing. Gyant is the insured and owner/operator of 1136 E. Seminary Dr. Fort Worth, Texas 76115, 3316-3328 Stuart Dr. Fort Worth, Texas 76110, and 4804 Bryant Irvin Ct. Fort Worth, Texas 76107 (the "Properties"), in Tarrant County, Texas.

2. Defendant, National Fire and Marine Insurance Company ("National" or "Defendant") is an insurance company registered to do business in the State of Texas by the Texas Department of Insurance (TDI). Defendant has provided the State of Texas with its Nebraska address as 1314 Douglas St., Suite 1400, Omaha, Nebraska 68102-1944. Defendant has also provided the State of Texas its attorney in fact for service of process, being National Fire and`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 2 of 510 PageID 14",
    content: `Marine Insurance Company and its agent for service of process, Corporation Service Company, 211 E 7th St., Ste. 620 Austin, Texas 78701-3218. Defendant may be served with process at this Austin, Texas address.

3. In the event that the Defendant, National Fire and Marine Insurance Company, or any other potential defendant to this action are misnamed or are not included herein, it is the Plaintiff's contention that such was a "misidentification", "misnomer", and/or such defendants are/were "alter egos" of the Defendant named herein. Alternatively, the Plaintiff contends that such "corporate/limited liability company veils" should be pierced to hold such party-defendant(s), whether one or more, properly included in the interest of justice. Plaintiff believes that it has properly identified Defendant in this pleading; however, to avoid any assertation by Defendant that it has not been properly named in this lawsuit, Plaintiff advises the Court and all parties that it is suing the entity that issued the insurance policy that is the subject of this lawsuit.

II. DISCOVERY CONTROL PLAN

4. Gyant Properties, LLC intends for discovery to be conducted under Level 3 of Rule 190 of the Texas Rules of Civil Procedure.

III. JURISDICTION AND VENUE

5. The amount in controversy and the subject matter of this action are within this Court's subject matter jurisdiction. The subject matter in controversy of this suit is within the jurisdictional limits of this Court. This court has personal jurisdiction over Insurer's who are engaged in the business of insurance in the State of Texas and the causes of action alleged herein arise out of the acts and/or omissions related to the sale and servicing of the insurance policy, adjusting, and inspection of storm damage to the Gyant Properties located in Tarrant County, Texas.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 3 of 510 PageID 15",
    content: `6. Venue is proper in Tarrant County, Texas under Texas Civil Practice and Remedies Code \u00A7 15.011 because this suit concerns a recovery of damages suffered by real property located in Tarrant County, Texas. Accordingly, venue is proper in such county under the mandatory venue provisions of the Texas Civil Practice and Remedies Code cited above. Venue is also proper in Tarrant County, Texas pursuant to Texas Civil Practice and Remedies Code \u00A7 15.002(a)(1) because all or a substantial part of the acts, omissions, occurrences and/or events giving rise to the claim made the basis of this suit and damages incurred took place in Tarrant County, Texas. See TEX. CIV. P. REM. CODE \u00A7 15.035(b).

IV. GENERAL FACTUAL BACKGROUND

7. The Defendant, National Fire & Marine Insurance Company, sold and issued an insurance policy (Policy No. 12PRM086299-02) to Gyant Properties, LLC. A "certified" copy of the policy is attached hereto and incorporated for all purposes as Exhibit A. Gyant obtained this "certified" copy of the policy by requesting same from Defendant during the investigation of the claim the subject of this suit. However, this policy is notably different from the policy attached hereto as Exhibit A-1, which was provided to Gyant at the inception of the policy. In producing this "certified" copy of the policy to its own insured, Defendant, without cause or excuse, redacted any reference to the amount of premiums paid for the policy or additional premiums paid in exchange for purchase of additional endorsements for coverage.

8. In all, Defendant redacted the amount of premiums paid, and only that information, from the "certified" copy of the policy on pages 5, 15-45, 114, 118, 122, 131, 133, 134, 140, 150, 151, 167, 179, 184, 200, 202, and 204. In total, the "certified" copy of the policy is 211 pages. The policy provided to the client as Exhibit A-1 is only 115 pages. In addition to A-1 not including various endorsements for coverage that were added after the inception of the policy, the policy`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 4 of 510 PageID 16",
    content: `provided to the client at inception DOES include, the first page of Exhibit A-1, which reads, "This Face Page attaches to and becomes a part of the following policy: Insured: Gyant Properties, LLC Policy #: 12PRM086299-02 Effective Date: 4/30/2022 Date Policy/Endorsement Received: (blank) Zip Code of Risk Location: 76102." That page continues to set forth the amount of premiums paid, being $192,979.00, and included the itemized fees and taxes for a total paid by Gyant of $203,007.84. For reasons known only to Defendant, that page of the policy was not included in the "certified" copy of the policy.

9. Further inspection of the "certified" copy of the policy shows that among the various pages, there are changes to the policy bearing titles that include endorsement, limitation and exclusion, by way of example. However, in reading the policy as a whole, the inclusion of these pages creates ambiguous and contradictory provisions for coverage. The policy, as constructed by Defendant, violates the Texas Insurance Code, including but not limited to Chapters 541, 542, 2301 and others. In addition, when Defendant, in adjustment of the claims as described hereinbelow, purportedly applies the coverage to the claims, it knowingly and intentionally misrepresented the coverage provided and attempted to hide its misrepresentations by use of the phrase "reservation of rights" in repeated communications with Gyant. By way of example only, and not limitation, National Fire sold to Gyant coverage that included replacement cost coverage on all of the buildings, as indicated on the declarations' pages for each property. National Fire baited and switched the policy by including a so-called endorsement entitled "Limitations on Coverage for Roof Servicing" as an addendum to the policy found at the end of the policy. This addendum purports to take away the replacement cost coverage for roof surfacing on the buildings and reduce the coverage to actual cash value. Notably, National Fire did not reduce or refund any portion of the premiums paid by Gyant for this purported reduction in coverage.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 5 of 510 PageID 17",
    content: `10. Before even knowing the facts of the shameful claim-handling and so-called investigation, Defendant's bait-and-switch began with its inaccurate production of a "certified" policy upon request by its consumer, Gyant, during the claims process. This conduct by Defendant constitutes violations of the Texas Insurance Code and DTPA.

11. The policy purported to furnish coverage for damages and losses caused by wind and/or hailstorm, among other types of coverage, for properties insured by Gyant at 27 separate locations, comprising 34 total buildings situated in Tarrant County, Texas and for which Gyant paid the sum of $203,007.84. See Exhibit A-1, page 1. On or about March 16, 2023, a significant hail/windstorm struck Tarrant County, Texas. Fortunately, after inspection, only three of Gyant's 34 buildings appeared to be damaged by this storm, which include hail strikes in excess of an inch and up to almost two inches at each of the three properties in question. The properties that Gyant reported to Defendant as being damaged were: 4804 Bryant Irvin Ct. Fort Worth, Tarrant County, Texas, referred to in the policy as Premises No. 16 (referred to herein as "Bryant Irvin property"), 3316-3328 Stuart Dr. Fort Worth, Tarrant County, Texas, referred to in the policy as Premises No. 26 (referred to herein as "Stuart Road property"), and 1100-1134 E. Seminary Drive, Fort Worth, Tarrant County, Texas, referred to in the policy as Premises No. 11 (referred to herein as "Seminary property").

V. FACTUAL BACKGROUND \u2013 BRYANT IRVIN PROPERTY

12. The Bryant Irvin property sustained significant damage as a result of a major hail and/or windstorm that struck the Tarrant County area on or about March 16, 2023. The subject hailstorm event occurred during the policy's coverage period. Shortly thereafter, the Defendant, National Fire, assigned claim number 00607998 to the Bryant Irvin Property.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 6 of 510 PageID 18",
    content: `13. Following receipt of the claim, National Fire hired an independent adjuster to inspect the property and provide an estimate. On June 7, 2023, National Fire valued the claim at $48,120.81 and provided payment to Gyant Properties in the amount of $28,543.20. (See Exhibit B). Gyant disagreed with this valuation and obtained its own estimate of the damages from Tyler Melton of Proclaim Roofing. Using industry standard estimating metrics, Mr. Melton determined the scope of work and amount of damages to be $294,668.83 (RCV), more than 6 times of what National Fire represented the amount of the claim to be.

14. By letter dated April 25, 2024, Gyant sent a TEX. INS. CODE, Chapter 542 A Notice to National Fire demanding prompt and full payment of the claim, including damage to the real property and business personal property, based on the RCV value of its submitted estimate. A copy of said notice with proof of receipt to Defendant is attached hereto and incorporated for all purposes as Exhibit C. To date, National Fire has not changed their position on the amount of the claim and continues to fail to abide by their own policy by not promptly and accurately adjusting the claim.

15. The damage from the hail/windstorm was so substantial that Gyant was required to take emergency remedial action due to the ongoing damage caused by subsequent weather events. The property in question houses a dialysis facility and Gyant paid out of pocket to have the damage to the metal roofing temporarily remediated by adding flute filler to protect against the structural damage to the metal roofing and then overlay the entire metal roof with a remedial thermoplastic polyolefin (TPO) membrane. Notably, TPO roofing is not as durable as metal roofing, requires additional maintenance and upkeep and is susceptible to surface puncturing. It is not a roof replacement. Because National Fire failed and refused to properly and timely adjust the claim fully, Gyant has suffered actual and consequential damages, including but not limited to the cost of the`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 7 of 510 PageID 19",
    content: `temporary nature of the remedial repairs and the failure to be made whole, by receiving the same kind and quality of roofing system that it had prior to the storm, that being a roof replacement, not an emergency temporary repair.

VI. FACTUAL BACKGROUND \u2013 STUART PROPERTY

16. The Stuart property sustained significant damage as a result of a major hail and/or windstorm that struck the Tarrant County area on or about March 16, 2023. The subject hailstorm event occurred during the policy's coverage period. Shortly thereafter, the Defendant, National Fire, assigned claim number 00605743 to the Stuart Property.

17. National Fire retained Signature Adjustment Group to inspect the property and adjust the claim. Despite acknowledging hail damage to the skylights, vent caps, and HVAC units, on or about April 24, 2023, approximately one month after the storm event, National Fire valued the claim at just $6,077.58 (See Exhibit D). No payment was issued to Gyant due to the deductible being higher than what they estimated the repairs to be. National Fire then unilaterally decided to close the claim file without accurately investigating and adjusting the claim. Unsurprisingly, Gyant disagreed with National Fire's estimate and obtained a more accurate estimate of repairs. Using industry standard estimating metrics, Gyant's estimate valued the scope of work to be $534,081.18 (RCV) over 87 times National Fire's unbelievably low estimate.

18. Almost one year after the claim was reported, National Fire elected to engage HVACi, an organization that advertises its exclusive function is to work on behalf of insurance carriers, to purportedly assess damage to the HVAC units on the premises. In addition, National Fire engaged HAAG Engineering, which by National Fire's own admission, to conduct its "3rd inspection" (See Exhibit E). Haag Engineering is a known consulting firm in the insurance litigation field, advertising itself as being ready for hire by the "insurance industry".`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 8 of 510 PageID 20",
    content: `19. Despite National Fire receiving the report from Haag Engineering on January 22, 2024, it wasn't until March 19, 2024, that National Fire provided a copy of the report to Gyant via an email dated March 19, 2024 (See Exhibit E). National Fire, now 12 months later, acknowledged that all 22 skylights need to be removed and replaced and yet did not increase the value of their estimate. National Fire followed up this email with a letter dated March 29, 2024, reconfirming that all 22 skylights needed to be replaced, but still refused to properly value the amount of damage, after one full year (See Exhibit F). Despite verifiable evidence, National Fire has failed to properly adjust the claim, and abide by its own policy by continuing to delay timely and accurately adjustment and payment of the claim.

20. By letter dated April 25, 2024, Gyant sent a TEX. INS. CODE, Chapter 542 A Notice to National Fire demanding prompt and full payment of the claim, including damage to the real property, based on the RCV value of its submitted estimate. A copy of said notice with proof of receipt to Defendant is attached hereto and incorporated for all purposes as Exhibit G. Upon receipt of said letter, National Fire requested to re-inspect the property a 4th time. That inspection occurred on June 25, 2024. In yet another violation of the TEX. INS. CODE, National Fire did not issue any payment for the objectively verifiable damage, that was confirmed in their own expert's report of January 2024 (as referenced in Exhibit E). After letting another five months go by from the 4th inspection, National Fire issued a small payment of $3,940.38. Said payment failed to include the mandatory payment of prompt payment penalties or attorney's fees for the substantial 17-month delinquency in the timing of the payment. See attached Exhibit H, the payment of $3,940.38 and letter tendered by National Fire on November 21, 2024, 18 months after the storm and 4 inspections by National Fire.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 9 of 510 PageID 21",
    content: `21. In addition to the damage to the skylights, the roofing system itself was damaged by intrusion from the wind-driven rain causing the need for the entire roofing system to be replaced. Despite 4 inspections by National Fire, it failed to pay to replace the Stuart property roof as agreed in the policy and required by Texas law.

22. National Fire's results-oriented "investigation" of the claim ignored the objective, verifiable evidence of damage from the storm event, breaching its obligations under the policy of insurance for which it was paid and the Texas Insurance Code responsibilities to timely and appropriately investigate the claim in good faith. The purposeful delays for more than 17 months, including dragging out 4 inspections and ultimately making not only an untimely but substandard payment of $3,940.38 \u2013 evidence of National Fires violations of the Texas Insurance Code and obnoxious and shameful treatment of Gyant whose only transgression was making claims for damage from the significant hail and windstorm to 3 of its 34 insured buildings under the policy.

VII. FACTUAL BACKGROUND \u2013 SEMINARY PROPERTY

22. The Seminary property sustained significant damage as a result of a major hail and/or windstorm that struck the Tarrant County area on or about March 16, 2023. The subject hailstorm event occurred during the policy's coverage period. Shortly thereafter, the Defendant, National Fire, joined the Seminary Property claim into the Stuart Property claim file and gave it the same claim number 00605743.

23. HVACi also inspected the Seminary Property and recommended replacing 4 HVAC units and repairs for 19 additional HVAC units. See Exhibit F, as referenced above. National Fire noted the estimated replacement cost of just the HVAC units to be $58,566.16, conveniently under the Plaintiff's deductible and therefore did not issue payment. By letter dated March 29, 2024 (Exhibit F, as referenced above), almost a year following the claim being filed, National Fire stated`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 10 of 510 PageID 22",
    content: `it was still waiting for the engineering report by Haag Engineering to be complete; another example of National Fire continuing to delay the proper adjustment of the Plaintiff's claims, not only as to this location, but to all three locations covered by the insurance policy, as set forth in Exhibit A.

24. On July 11, 2024, Plaintiff sent a TEX. INS. CODE, Chapter 542 A Notice to National Fire demanding prompt and full payment of the claim using Plaintiff's own estimate for the value of the claim. A copy of said notice with proof of receipt to Defendant is attached hereto and incorporated for all purposes as Exhibit I. To this day, National Fire has failed to provide a report, estimate, adjustment, or otherwise, for Gyant's Seminary Property. In its continued delay tactics, National Fire requested another inspection of this property as well. That inspection did not occur until November 12, 2024. In furtherance of National Fire's concocted plans to unlawfully deny coverage and payment, National Fire has inspected this property not less than three times.

25. A visual inspection of this property revealed that the property had suffered substantial hail strikes that were consistent with the hail and windstorm event of March 2023. Based on the size of the strike marks, the hail was likely 1 1/2 to 2 inches in size. Punctures to the roofing system from the hail strikes permeated throughout the entire roof, rendering a full replacement of the roof necessary. Gyant's engineer, David Day, of Casa Engineering, had to be hired to meet National Fire's agents/experts and inspect this property which was objectively damaged to the point of needing replacement since 2023.

VIII. SUMMARY OF FACTUAL BACKGROUND

26. For over a year National Fire & Marine Insurance Company has continuously used every delay and deny tactic conceivable to attempt to exhaust Gyant in the hopes that it would give up its pursuit of its righteous claims. National Fire continuously engaged in repeated, frivolous rounds of property inspections (no less than three per location) with little to no payment being`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 11 of 510 PageID 23",
    content: `issued to Plaintiff. Despite the abundance of verifiable evidence, National Fire has chosen to undervalue each of the Plaintiff's claims and ultimately caused further damage to not only Plaintiff's property but also its tenants' business personal property. Gyant has received multiple service requests from its tenants regarding the leaky roofs and has had to put temporary measures in place while ultimately being forced to file this lawsuit to be made whole by National Fire Insurance Company. National Fire's conduct and its refusal to honor its contractual and legal obligations under the Policy and the laws of the State of Texas have left Plaintiff no choice but to file this suit.

27. The Defendant, by and through the action and/or inactions of its agents, failed to conduct a reasonable investigation, despite at least 9 total inspections of the properties of the damage to Gyant's properties and the claims. Without sound basis and in a deliberate strategy to delay, deny, and/or underpay and under value the covered losses and damages to Gyant, Defendant negligently and purposefully undervalued the Plaintiff's three separate property damage claims even though liability for such damages was reasonably clear at each and every inspection. The Defendant wrongfully denied and/or undervalued the Plaintiff's claims under the policy and refused to pay the additionally damaged business personal property as covered under the policy.

28. The Defendant has admitted, acknowledged, and paid portions of the covered damages from both of the hail and windstorm events that caused damage to Gyant's properties. There is no dispute that the policy issued by Defendant to Gyant, for which Gyant paid good and valuable considerations, provides insurance coverage for damage to the Properties from a hail or windstorm event, including its business personal property. There is no dispute that the hail/windstorms on or about March 16, 2023 is a covered event and that caused damages to Plaintiff's properties.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 12 of 510 PageID 24",
    content: `29. The objective evidence in this case indicates that the Properties sustained significant hail damage and wind damage. That damage compromised Plaintiff's buildings, caused further leaking and damages, and is ongoing, causing severe business personal property damage, as well. Plaintiff, and its tenants, have suffered substantial damage to its business personal property as a result of the leaking caused by the hailstorms during the policy period.

IX. CAUSES OF ACTION AGAINST DEFENDANT

Plaintiff adopts, incorporates, realleges, and reasserts each and every, all and singular, the previous allegations made in this pleading the same as if here and now fully set forth verbatim.

COUNTS 1-3
ANTICIPATORY BREACH OF CONTRACT, BREACH OF CONTRACT & INSURANCE CODE VIOLATIONS AS TO EACH OF THE THREE PROPERTY LOCATIONS DESCRIBED HEREIN

30. Defendant's conduct, as described above, constitutes a breach of the insurance contract (the Policy) made between Defendant and Gyant Properties, LLC.

31. Plaintiff paid premiums under the terms of the policy and met the conditions precedent to the Insurer's obligation to pay the Plaintiff's losses under the policy.

32. Defendant, National Fire & Marine Insurance Company, failed and refused and continues to fail and refuse to pay the value of the Plaintiff's claim thereby materially breaching the policy of insurance and causing Plaintiff to suffer those losses previously asserted herein together with other harm and damages as described further in this petition.

33. Defendant's continuing failure and refusal to pay the adequate compensation to Gyant as Defendant is obligated to do so under the terms of the policy in question and under the laws of the State of Texas, constitute material breaches of the insurance contract with Gyant. Gyant`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 13 of 510 PageID 25",
    content: `has suffered damages in the form of actual damages, consequential damages, and reasonable and necessary attorney's fees for such violations of the TEX. INS. CODE.

34. Defendant's conduct in this regard also constitutes multiple violations of the Texas Unfair Compensation and Unfair Practices Act. See TEX. INS. CODE, Chapter 541. All violations under this article are made actionable by TEX. INS. CODE \u00A7541.15. Defendants have committed multiple violations of this provision of the Texas Insurance Code \u2013 specifically they have violated this provision relating to each of three properties identified herein, respectively. Defendants have directed multiple communications to Plaintiff that violate these provisions of the Texas Insurance Code.

35. Defendant's unfair practices, as described above, of misrepresenting to Gyant material facts relating to the coverage at issues, constitute an unfair method of competition and an unfair and deceptive act or practice in the business of insurance. See TEX. INS. CODE \u00A7541.051, \u00A7541.060, and \u00A7541.061. Defendants have committed multiple violations of this provision of the Texas Insurance Code \u2013 specifically they have violated this provision relating to each of three properties identified herein, respectively. Defendants have directed multiple communications to Plaintiff that violate these provisions of the Texas Insurance Code.

36. Defendant's unfair settlement practices, as described above, of failing in good faith to effectuate a prompt, fair, and equitable settlement of the claims, when Defendant's liability has become reasonably clear; failing to promptly provide Gyant a reasonable explanation of the basis in the insurance policy, in relation to the facts or applicable law, for the Defendant's denial of a claim, or offer of a compromise settlement of a claim; and not attempting in good faith to effectuate a prompt, fair, and equitable settlement of the claims submitted, in which liability has become reasonably clear, constitute unfair methods of competition and unfair and deceptive acts or practices in the business of insurance. See TEX. INS. CODE \u00A7541.060.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 14 of 510 PageID 26",
    content: `37. Defendant's conduct, as described above, of making an untrue statement of material fact, failing to state material facts necessary to make other statements not misleading considering the circumstances under which the statements were made, making statements in a manner reasonably calculated to deceive, and failing to disclose matters required by law to be disclosed constitute misrepresentations in violation of the insurance code. See TEX. INS. CODE \u00A7541.061.

38. Defendant's improper settlement practices were a producing cause of Gyant's damages.

COUNTS 4-6
VIOLATIONS OF THE DTPA AS TO EACH OF THE THREE PROPERTY LOCATIONS DESCRIBED HEREIN

39. As described herein, the conduct of the Defendants constitutes violations of the Deceptive Trade Practices Act. See TEX. BUS. & COM. CODE \u00A717.50 et. seq. All violations under the Insurance Code are made actionable by TEX. BUS. & COM. CODE \u00A717.50 (a)(4). Plaintiff brings this claim for all violations arising out of each of the three real properties the subject of this lawsuit. Defendant, through and by their agents and adjusters, represented to Plaintiff that the insurance policy held by Gyant only provided coverage up to the amounts represented to and paid to Plaintiff. Defendant, intentionally and knowingly, misrepresented the coverage available under the policy. Defendant's conduct described above constitutes a producing cause of Gyant's damages.

COUNTS 7-9
BREACH OF THE COMMON LAW DUTY OF GOOD FAITH AND FAIR DEALING AS TO EACH OF THE THREE PROPERTY LOCATIONS DESCRIBED HEREIN

40. Defendant had a duty of good faith and fair dealing with respect to the payment of claims under the policy. Defendant's knowing, intentional, and/or negligent failure to comply with the policy's terms and/or statutory requirements under the Texas Insurance Code constitute a breach of its duty of good faith and fair dealing with respect to the claims made by Gyant regarding the three real properties the subject of this lawsuit. Defendant was liable for these claims because`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 15 of 510 PageID 27",
    content: `the loss at each property was covered under the policy. Defendant failed to conduct a reasonable investigation and failed to exercise good faith in handling the claims under the Policy.

41. Defendant had no reasonable basis for its delay in payment, its undervaluation, and/or its denial of Gyant's claims and/or its corresponding failure to deal fairly and in good faith with the Plaintiff.

42. Defendant knew or should have known that Defendant did not have a reasonable basis to deny, delay payment, and/or undervalue Gyant's claims and/or Defendant's failure to deal fairly and in good faith with Gyant.

43. Defendant's breaches of its duty of good faith and fair dealing were a producing cause of Gyant's damages, including independent injury, as described herein. See Republic Ins. Co. v. Stoker, 903 S.W.2d 338 (Tex. 1995); Universe Life Ins. Co. v. Giles, 950 S.W.2d 48 (Tex. 1997).

COUNTS 10-12
VIOLATIONS OF TEXAS PROMPT PAYMENT OF CLAIMS ACT AS TO EACH OF THE THREE PROPERTY LOCATIONS DESCRIBED HEREIN`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 16 of 510 PageID 28",
    content: `44. As described herein, Gyant has multiple claims under the Policy. Defendant is fully liable for the claims and has failed to comply with both the Policy's terms, and the statutory requirement of Texas Prompt Payment of Claims Act related to the real property damage and business personal property damage as to each of the three real properties the subject of this lawsuit. See TEX. INS. CODE \u00A7542.051-542.061.

45. National Fire's delay of payment and processing of Gyant's claims, as described above, for longer than the amount of time provided for under the Policy and/or the Texas Insurance Code constitutes a failure to promptly pay Patton's claim(s). See, TEX. INS. CODE \u00A7 542.055-542.060.

46. As described herein, Gyant has a claim under the Policy. National Fire is liable for the claims and has failed to comply with both the Policy's terms, and the statutory requirement of Texas Prompt Payment of Claims Act. See, TEX. INS. CODE \u00A7 542.051-542.061.

47. National Fire failed to perform one or more of those duties not later than the 15th day (30th day if National Fire is a surplus lines' insurer) after receipt of notice of the claim and, pay the claim within five "business days" (or twenty days if National Fire is a surplus lines' insurer).`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 17 of 510 PageID 29",
    content: `COUNTS 13-15
UNFAIR INSURANCE PRACTICES AS TO EACH OF THE THREE PROPERTY LOCATIONS DESCRIBED HEREIN

48. Defendant's conduct as described above, constitutes multiple violations of Unfair Insurance Practices, of the three real properties the subject of this lawsuit.

49. Defendant has engaged in one or more of the following unfair insurance practices with respect to the claims made by Gyant regarding the three real properties the subject of this lawsuit:

a. Misrepresenting to Gyant one or more material facts or policy provisions relating to coverage at issue;

b. Failing to attempt in good faith to effectuate a prompt, fair, and equitable settlement of the claim:

    i. with respect to which Defendant's liability had become reasonably clear; or

    ii. a claim under one portion of the policy of the claim with respect to which Defendant's liability had become reasonably clear in order to influence Gyant to settle an additional claim under another portion of the coverage, unless payment under one portion of the coverage constitutes evidence of liability under another portion of the policy;

c. Failing to provide promptly to Gyant a reasonable explanation of the basis in the policy, in relation to the facts or applicable law, for Defendants' denial of the claim or for the offer of a compromise settlement of the claim;

d. Failing within a reasonable time to:

    i. affirm or deny coverage of a claim to Gyant;
    ii. submit a reservation of rights to Gyant;

See TEX. INS. CODE \u00A7541.060.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 18 of 510 PageID 30",
    content: `50. Defendant also engaged in one or more of the following improper and unfair settlement practices with respect to the claims made by Gyant regarding the three real properties the subject of this lawsuit:

a. Misrepresentations and false advertising of policy contracts;
b. False information and advertising generally;
c. Unfair discrimination;
d. Rebates;
e. Deceptive names, word symbols, devices, and slogans; and/or
f. Misrepresentation of the insurance policies.

See TEX. INS. CODE \u00A7541.151.

51. The Defendant also engaged in one or more of the following improper settlement practices with respect to the claims made by Gyant regarding the three real properties the subject of this lawsuit:

a. Making an untrue statement of material fact;
b. Failing to state a material fact necessary to make other statements made not misleading, considering the circumstances under which the statements were made;
c. Making a statement in such manner as to mislead a reasonably prudent person to a false conclusion of a material fact;
d. Making a material misstatement of law; and/or
e. Failing to disclose a matter required by law to be disclosed, including failing to make disclosure in accordance with another provision of the insurance code.

See TEX. INS. CODE \u00A7541.061.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 19 of 510 PageID 31",
    content: `X. REQUEST TO COMPEL MEDIATION

52. Plaintiff adopts, incorporates, realleges, and asserts each and every, all and singular, the previous allegations made in this pleading the same as if here and now fully set forth verbatim.

53. Pursuant to TEX. INS. CODE \u00A7541.161, Gyant seeks relief to compel mediation of the dispute in the manner provided, as the court "... shall, not later than the 30th day after date a motion under this section is filed, sign an order setting the time and place of the mediation." See TEX. INS. CODE \u00A7541.161(b).

XI. AFFIRMATIVE DEFENSES

54. Plaintiff adopts, incorporates, realleges, and reasserts each and every, all and singular, the previous allegations made in this pleading the same as if here and now fully set forth verbatim.

55. Contra Proferentem. If necessary, Defendant's Policy/contract is unilateral and in the event of ambiguity must be held against the drafter.

XII. JURY DEMAND

56. Gyant Properties, LLC respectfully demands a trial by jury and remits such fee upon the filing of this Plaintiff's Original Petition.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 20 of 510 PageID 32",
    content: `XIII. DAMAGES & PRAYER

57. WHEREFORE, PREMISES CONSIDERED, GYANT PROPERTIES, LLC complaining of NATIONAL FIRE & MARINE INSURANCE COMPANY, requests that such Defendant further appear and answer herein and that upon a final trial on the merits, Gyant Properties, LLC has and recovers from such Defendant the following:

a. Gyant would show that all the aforementioned acts, taken together or singularly, constitute the proximate and or producing causes of damages sustained and to be recovered by Gyant.

b. For breach of contract, Gyant is entitled to regain the benefit of the bargain, which is the amount of the policy benefits withheld, together with consequential damages and attorney's fees;

c. For noncompliance with the Texas Unfair Competition and Unfair Practices Act, Gyant is entitled to actual damages, which includes the loss of the benefits that should have been paid pursuant to the policy, including but not limited to direct and indirect consequential damages, mental anguish, court costs, and mandatory attorney's fees. See, Rosenblatt v. Freedom Life Ins. Co. of Am., 240 S.W.3d 315, 2007 Tex. App. LEXIS 6177 (Tex. App. \u2013 Houston [1st Dist.] 2007, no pet.) For knowing and intentional conduct of the acts complained of, Gyant asks for three times economic damages and/or three times mental anguish damages. See TEX. INS. CODE \u00A7541.152 and TEX. BUS. & COM. CODE \u00A717.50;

d. For noncompliance with Texas Prompt Payment of Claims Act, Gyant is entitled to the amount of their claims, as well as interest on the total amount of the claim per annum post judgement interest, as allowed by law, and for any other further relief, either at law or in equity, to which it may show here to be justly entitled.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 21 of 510 PageID 33",
    content: `e. For breach of the common law duty of good faith and fair dealing, actual damages, direct and indirect consequential damages, exemplary damages and/or mental anguish as to be determined by the jury. Exemplary damages are recoverable for a breach of duty of good faith and fair dealing under the same principles allowing recovery of those damages in other tort actions; mental anguish damages are recoverable for a breach of duty of good faith and fair dealing under the same principles allowing recovery of those damages in other tort actions.

f. Gyant seeks recovery of attorney fees as allowed by law. If attorney fees must be quantified at an hourly rate, Gyant seeks attorney fees at $450.00 per hour. Attorney's fees are awarded to a party as part of the damages owed by an insurance company that violates the cited provisions of the TEX. INS. CODE and it is appropriate to require those found liable for such violations to pay the attorney's hourly fee, statutorily, and for common law claims;

g. Furthermore, the denial and/or wrongful delay to provide Gyant with insurance benefits by Defendant was apparently part of a common plan, routine, scheme, and design calculated to deny insurance benefits to policy holders. In order to punish Defendant and to set an example and thereby prevent other policy holders from being treated in this manner, exemplary damages should be awarded. Accordingly, Gyant seeks exemplary damages in an amount the jury deems appropriate:

    i. Pre-judgment and post-judgment interest at the maximum rate allowed by law;
    ii. Expert Witness fees;
    iii. Costs of court;
    iv. Such further relief, at law or in equity to which Plaintiff may be justly entitled.`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 22 of 510 PageID 34",
    content: `Respectfully Submitted,

By: /s/ Todd M. Hurd
Todd M. Hurd
TX Bar No. 24025443
Todd Hurd & Associates
PO Box 1741
Burleson, Texas 76097
Tel: 817.426.4529
Fax: 817.426.8159

AND

Juliana Morris
TX Bar No. 24026356
Law Office of Juliana Morris
juliana@morristexaslaw.com
661 E Main Street, Suite 200-136
Midlothian, Texas 76065
Tel: 817.415.0999
Fax: 817.426.8159

ATTORNEYS FOR PLAINTIFF, GYANT PROPERTIES, LLC`,
  },
  {
    pageHeader: "Case 4:25-cv-00064-P Document 1-3 Filed 01/24/25 Page 23 of 510 PageID 35",
    content: `PLAINTIFF'S ORIGINAL PETITION

Page 23 of 23`,
  },
];

// ============================================================================
// PART 3: STATE VARIABLES (add inside your ChatDrawer component)
// ============================================================================
/*
  const [sourcesView, setSourcesView] = React.useState<"uploaded" | "cases">("uploaded");
  const [sourcesDropdownOpen, setSourcesDropdownOpen] = React.useState(false);
  const [openedDocument, setOpenedDocument] = React.useState<{ name: string; time: string } | null>(null);
  const sourcesDropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sourcesDropdownRef.current && !sourcesDropdownRef.current.contains(event.target as Node)) {
        setSourcesDropdownOpen(false);
      }
    }
    if (sourcesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [sourcesDropdownOpen]);
*/

// ============================================================================
// PART 4: TAB SYNCING (keeps parent layout in sync with internal tab state)
// ============================================================================
// ChatDrawer props to add:
/*
  onDocumentOpen?: () => void;
  onDocumentClose?: () => void;
  onTabChange?: (tab: "chat" | "notes" | "versions" | "sources") => void;
*/

// Replace useState for activeTab with:
/*
  const [activeTab, setActiveTabInternal] = React.useState<"chat" | "notes" | "versions" | "sources">(defaultTab);
  const setActiveTab = React.useCallback((tab: "chat" | "notes" | "versions" | "sources") => {
    setActiveTabInternal(tab);
    onTabChange?.(tab);
  }, [onTabChange]);

  // Sync from parent (use internal setter to avoid loop)
  React.useEffect(() => {
    setActiveTabInternal(defaultTab);
  }, [defaultTab]);
*/

// ============================================================================
// PART 5: HEADER & TABS (hide when document is open)
// ============================================================================
// Wrap your header and tabs sections with:
//   {!openedDocument && ( ... header JSX ... )}
//   {!openedDocument && ( ... tabs JSX ... )}

// ============================================================================
// PART 6: SOURCES LIST VIEW JSX (inside the scrollable content area)
// ============================================================================
/*
{activeTab === "sources" && !openedDocument && (
  <div className="flex flex-col gap-3">
    {/* View dropdown *\/}
    <div className="flex items-center gap-2">
      <span className="text-sm text-[#737373]">View:</span>
      <div ref={sourcesDropdownRef} className="relative">
        <button
          onClick={() => setSourcesDropdownOpen(!sourcesDropdownOpen)}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#1d4b34] px-3 py-1 text-sm font-medium text-[#1d4b34]"
        >
          {sourcesView === "uploaded" ? "Uploaded documents" : "Cases & statutes"}
          <ChevronDown className={cn("size-3.5 transition-transform", sourcesDropdownOpen && "rotate-180")} />
        </button>
        {sourcesDropdownOpen && (
          <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] overflow-hidden rounded-lg border border-[#e5e5e5] bg-white shadow-lg">
            <button
              onClick={() => { setSourcesView("uploaded"); setSourcesDropdownOpen(false); }}
              className={cn(
                "flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#f7f7f7]",
                sourcesView === "uploaded" ? "font-medium text-[#212223]" : "text-[#737373]"
              )}
            >
              Uploaded documents
            </button>
            <button
              onClick={() => { setSourcesView("cases"); setSourcesDropdownOpen(false); }}
              className={cn(
                "flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#f7f7f7]",
                sourcesView === "cases" ? "font-medium text-[#212223]" : "text-[#737373]"
              )}
            >
              Cases & statutes
            </button>
          </div>
        )}
      </div>
    </div>

    {/* Document list *\/}
    {sourcesView === "uploaded" && (
      <div className="flex flex-col gap-1">
        {[
          { name: "Gyant v. NFM - Complaint.pdf", time: "9:17 a.m." },
          { name: "Gyant v. NFM - Answer.pdf", time: "9:17 a.m." },
          { name: "Hansen Deposition.pdf", time: "9:17 a.m." },
          { name: "Policy Endorsement - Wind/Hail, Notice of Claim.pdf", time: "9:17 a.m." },
          { name: "ROR Letter.docx", time: "9:17 a.m." },
          { name: "Letter to NFM Dated September 19, 2023.docx", time: "9:17 a.m." },
        ].map((doc) => (
          <button
            key={doc.name}
            onClick={() => {
              setOpenedDocument(doc);
              onDocumentOpen?.();
            }}
            className="flex items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-[#f7f7f7]"
          >
            <FileText className="mt-0.5 size-5 shrink-0 text-[#737373]" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-[#212223] break-words">{doc.name}</p>
              <p className="text-xs text-[#737373]">Uploaded at {doc.time}</p>
            </div>
          </button>
        ))}
      </div>
    )}

    {sourcesView === "cases" && (
      <div className="text-sm text-[#737373]">No cases or statutes yet.</div>
    )}
  </div>
)}
*/

// ============================================================================
// PART 7: DOCUMENT VIEWER JSX (after the sources list view)
// ============================================================================
/*
{activeTab === "sources" && openedDocument && (
  <div className="flex flex-col gap-4">
    {/* Back to Sources *\/}
    <button
      onClick={() => {
        setOpenedDocument(null);
        onDocumentClose?.();
      }}
      className="flex items-center gap-2 text-sm text-[#212223] hover:text-[#1d4b34] transition-colors"
    >
      <ArrowLeft className="size-4" />
      Back to Sources
    </button>

    {/* Document title *\/}
    <div>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-lg font-semibold text-[#1d4b34] underline decoration-[#1d4b34] underline-offset-2 hover:text-[#163d2a]"
      >
        {openedDocument.name}
        <ExternalLink className="size-4" />
      </a>
      <p className="mt-1 text-sm text-[#737373]">Uploaded at {openedDocument.time}</p>
    </div>

    {/* Toolbar *\/}
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-lg border border-[#e5e5e5] bg-[#f7f7f7] px-3 py-2">
      <div className="flex items-center gap-1">
        <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
          <Undo2 className="size-4" />
        </button>
        <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
          <Redo2 className="size-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-[#e5e5e5]" />
        <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
          <ZoomOut className="size-4" />
        </button>
        <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
          <ZoomIn className="size-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-[#e5e5e5]" />
        <button className="flex size-8 items-center justify-center rounded-md text-[#737373] hover:bg-[#e5e5e5] hover:text-[#212223]">
          <Download className="size-4" />
        </button>
      </div>
    </div>

    {/* Document Content - continuous scroll *\/}
    <div className="rounded-lg border border-[#e5e5e5] bg-white p-6">
      {(openedDocument.name === "Gyant v. NFM - Complaint.pdf" ? gyantComplaintPages : []).map((page, index) => (
        <div key={index} className={index > 0 ? "mt-8 border-t border-[#e5e5e5] pt-8" : ""}>
          <p className="mb-3 text-xs text-[#737373]">{page.pageHeader}</p>
          <div className="whitespace-pre-line text-sm leading-relaxed text-[#212223]">
            {page.content}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
*/

// ============================================================================
// PART 8: PARENT LAYOUT INTEGRATION (in AppLayoutWrapper or similar)
// ============================================================================
// Add these state variables:
/*
  const [isDocumentOpen, setIsDocumentOpen] = React.useState(false);
  const previousWidthRef = React.useRef(380);
*/

// Add these handler functions:
/*
  const handleDocumentOpen = () => {
    if (containerRef.current) {
      previousWidthRef.current = drawerWidth;
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      setDrawerWidth(Math.round(containerWidth / 2));
      setIsDocumentOpen(true);
    }
  };

  const handleDocumentClose = () => {
    setDrawerWidth(previousWidthRef.current);
    setIsDocumentOpen(false);
  };
*/

// Pass these props to ChatDrawer:
/*
  <ChatDrawer
    ...
    onDocumentOpen={handleDocumentOpen}
    onDocumentClose={handleDocumentClose}
    onTabChange={setDrawerTab}
  />
*/

// Center chat input visibility logic (only hide when Chat tab is active):
/*
  {(!drawerOpen || drawerTab !== "chat") && onSendMessage && (
    ... inline chat input ...
  )}
*/
