"use client";

import * as React from "react";
import { Search, Plus, Star, Settings, FileText, Scale, MessageSquare, ClipboardList, BarChart3, FileSearch, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PromptCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isFavorite?: boolean;
}

const prompts: PromptCard[] = [
  {
    id: "1",
    title: "AI Jurisdiction Surveys",
    description: "Please provide a comprehensive survey of the law across different jurisdictions regarding: [LEGAL QUESTION]",
    icon: <Scale className="size-4 text-[#c9a227]" />,
  },
  {
    id: "2",
    title: "Agreement Clause Drafting",
    description: "Draft a [CLAUSE TYPE] clause for a [AGREEMENT TYPE] that addresses the following requirements: [REQUIREMENTS]",
    icon: <FileText className="size-4 text-[#2e6b5c]" />,
  },
  {
    id: "3",
    title: "AI-Assisted Research US",
    description: "Research the following legal question and provide relevant answers with citations to Westlaw authority: [QUESTION]",
    icon: <FileSearch className="size-4 text-[#c9a227]" />,
  },
  {
    id: "4",
    title: "Allegation Summary Email",
    description: "Draft a professional email to the client summarizing the allegations and outlining the recommended defense strategy.",
    icon: <MessageSquare className="size-4 text-[#2e6b5c]" />,
    isFavorite: true,
  },
  {
    id: "5",
    title: "Amendment Term Analysis",
    description: "Analyze the amendment and modification provisions in the attached contract and explain their implications.",
    icon: <FileText className="size-4 text-[#2e6b5c]" />,
    isFavorite: true,
  },
  {
    id: "6",
    title: "Argument and Counterargument Table",
    description: "Create a table showing the main arguments and corresponding counterarguments for this legal matter.",
    icon: <ClipboardList className="size-4 text-[#2e6b5c]" />,
    isFavorite: true,
  },
  {
    id: "7",
    title: "Argument Outline",
    description: "Provide a detailed outline of all arguments presented in the attached documents.",
    icon: <Scale className="size-4 text-[#c9a227]" />,
  },
  {
    id: "8",
    title: "Authority Analysis Table",
    description: "Extract and analyze all legal authorities cited in the attached litigation document.",
    icon: <FileText className="size-4 text-[#2e6b5c]" />,
  },
  {
    id: "9",
    title: "Bulk Opinion Summary",
    description: "Provide summaries of the court holdings and their potential impact on similar cases.",
    icon: <Scale className="size-4 text-[#c9a227]" />,
  },
  {
    id: "10",
    title: "Claim Identification and Analysis",
    description: "Identify all claims against the defendants and outline the supporting facts for each claim.",
    icon: <FileText className="size-4 text-[#2e6b5c]" />,
  },
  {
    id: "11",
    title: "Claim Summary",
    description: "Summarize all claims presented in the pleading in a clear, structured format.",
    icon: <Scale className="size-4 text-[#c9a227]" />,
  },
  {
    id: "12",
    title: "Claims Explorer",
    description: "Analyze the fact pattern and identify all potential claims including statutory, common law, and constitutional causes of action.",
    icon: <FileSearch className="size-4 text-[#c9a227]" />,
  },
  {
    id: "13",
    title: "Compare Documents",
    description: "Compare the attached documents and identify all significant differences and changes.",
    icon: <GitCompare className="size-4 text-[#737373]" />,
  },
  {
    id: "14",
    title: "Compare Opinions",
    description: "Compare the substantive legal analysis in the attached court opinions and highlight key differences.",
    icon: <GitCompare className="size-4 text-[#737373]" />,
  },
  {
    id: "15",
    title: "Contract Provision Analysis",
    description: "Analyze the contract and organize all provisions by topic or clause type.",
    icon: <FileText className="size-4 text-[#2e6b5c]" />,
  },
];

const tabs = ["Prompts", "Question sets", "Documents"];

export function LibraryScreen() {
  const [activeTab, setActiveTab] = React.useState("Prompts");
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-medium text-[#212223]">Library</h1>
          <button className="text-[#737373] hover:text-[#212223]">
            <Settings className="size-4" />
          </button>
        </div>
        <Button className="gap-2 bg-[#1d4b34] text-white hover:bg-[#163d2a]">
          <Plus className="size-4" />
          New prompt
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#e5e5e5] px-6">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "border-b-2 py-3 text-sm font-medium transition-colors",
                activeTab === tab
                  ? "border-[#212223] text-[#212223]"
                  : "border-transparent text-[#737373] hover:text-[#212223]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-3">
        <div className="flex items-center gap-2">
          <select className="rounded-md border border-[#e5e5e5] bg-white px-3 py-1.5 text-sm text-[#212223]">
            <option>My prompts</option>
            <option>All prompts</option>
          </select>
          <select className="rounded-md border border-[#e5e5e5] bg-white px-3 py-1.5 text-sm text-[#212223]">
            <option>Task type</option>
          </select>
          <select className="rounded-md border border-[#e5e5e5] bg-white px-3 py-1.5 text-sm text-[#212223]">
            <option>Practice area</option>
          </select>
          <select className="rounded-md border border-[#e5e5e5] bg-white px-3 py-1.5 text-sm text-[#212223]">
            <option>Tags</option>
          </select>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#737373]" />
          <Input
            type="text"
            placeholder="Search prompts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 border-[#e5e5e5] pl-9 text-sm"
          />
        </div>
      </div>

      {/* Prompt Cards Grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          {prompts.map((prompt) => (
            <div
              key={prompt.id}
              className="group relative rounded-lg border border-[#e5e5e5] bg-white p-4 transition-shadow hover:shadow-md"
            >
              {prompt.isFavorite && (
                <Star className="absolute right-3 top-3 size-4 fill-[#c9a227] text-[#c9a227]" />
              )}
              <div className="mb-2 flex items-center gap-2">
                {prompt.icon}
                <h3 className="font-medium text-[#212223]">{prompt.title}</h3>
              </div>
              <p className="text-sm text-[#737373] line-clamp-2">{prompt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
