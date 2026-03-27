export interface UploadedDocument {
  name: string;
  uploadedAt: string;
}

export interface CaseOrStatute {
  citation: string;
  topic: string;
}

export interface SourcesData {
  uploadedDocuments: UploadedDocument[];
  casesAndStatutes: CaseOrStatute[];
}

export const sourcesData: SourcesData = {
  uploadedDocuments: [
    {
      name: "Gyant v. NFM - Complaint.pdf",
      uploadedAt: "9:17 a.m."
    },
    {
      name: "Gyant v. NFM - Answer.pdf",
      uploadedAt: "9:17 a.m."
    },
    {
      name: "Hansen Deposition.pdf",
      uploadedAt: "9:17 a.m."
    },
    {
      name: "Policy Endorsement - Wind/Hail, Notice of Claim.pdf",
      uploadedAt: "9:17 a.m."
    },
    {
      name: "ROR Letter.docx",
      uploadedAt: "9:17 a.m."
    },
    {
      name: "Letter to NFM Dated September 19, 2023.docx",
      uploadedAt: "9:17 a.m."
    }
  ],
  casesAndStatutes: [
    {
      citation: "Harvey v. Grey Wolf Drilling Co., 542 F.3d 1077, 1080 (5th Cir. 2008)",
      topic: "LLC Citizenship for Diversity Jurisdiction"
    },
    {
      citation: "Mullins v. TestAmerica Inc., 564 F.3d 386, 397-98 (5th Cir. 2009)",
      topic: "Multi-Layer Member Citizenship Tracing"
    },
    {
      citation: "Americold Realty Tr. v. Conagra Foods, Inc., 577 U.S. 378, 381-84 (2016)",
      topic: "Trust Citizenship for Diversity Jurisdiction"
    },
    {
      citation: "Hertz Corp. v. Friend, 559 U.S. 77 (2010)",
      topic: "Corporate Citizenship - Principal Place of Business"
    },
    {
      citation: "X Corp v. Media Matters for Am., et al., No. 4:23-01175, 2024 WL 3850454, at *2 (N.D. Tex. Aug. 16, 2024)",
      topic: "Entity Membership Disclosure Requirements"
    },
    {
      citation: "Carr v. IF&P Holding Co., LLC, No. 22-480, 2024 WL 2207487, at *4 (E.D. La. May 16, 2024)",
      topic: "Information and Belief Pleading for Diversity"
    },
    {
      citation: "TEX. INS. CODE ANN. § 541.152",
      topic: "Texas Insurance Code - Treble Damages"
    },
    {
      citation: "28 U.S.C. § 1332",
      topic: "Federal Diversity Jurisdiction"
    },
    {
      citation: "28 U.S.C. § 1441",
      topic: "Federal Case Removal"
    },
    {
      citation: "28 U.S.C. § 1446",
      topic: "Removal Procedures"
    },
    {
      citation: "Fed. R. Civ. P. 7.1(a)(2)",
      topic: "Civil Procedure - Entity Citizenship Disclosure"
    }
  ]
};
