"use client";

import { 
  Scale, 
  Gavel, 
  MessageSquare, 
  MessagesSquare,
  Swords,
  Target,
  ShieldCheck,
  Crosshair,
  Landmark,
  BookOpen,
} from "lucide-react";

const iconOptions = [
  { 
    name: "Scale", 
    icon: Scale, 
    description: "Balance/Justice - Legal argumentation" 
  },
  { 
    name: "Gavel", 
    icon: Gavel, 
    description: "Judge's hammer - Court proceedings" 
  },
  { 
    name: "MessageSquare", 
    icon: MessageSquare, 
    description: "Single argument/statement" 
  },
  { 
    name: "MessagesSquare", 
    icon: MessagesSquare, 
    description: "Multiple arguments/debate" 
  },
  { 
    name: "Swords", 
    icon: Swords, 
    description: "Confrontation/Opposition" 
  },
  { 
    name: "Target", 
    icon: Target, 
    description: "Focused argument/objective" 
  },
  { 
    name: "ShieldCheck", 
    icon: ShieldCheck, 
    description: "Defense argument/protection" 
  },
  { 
    name: "Crosshair", 
    icon: Crosshair, 
    description: "Precision/targeted points" 
  },
  { 
    name: "Landmark", 
    icon: Landmark, 
    description: "Courthouse/legal institution" 
  },
  { 
    name: "BookOpen", 
    icon: BookOpen, 
    description: "Legal briefs/case law" 
  },
];

export default function ArgueIconsPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-semibold text-[#212223]">
          Argue Icon Options
        </h1>
        <p className="mb-8 text-[#737373]">
          10 different icon options for the Argue step in the stepper navigation
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {iconOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={option.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-[#e5e5e5] bg-white p-6 transition-all hover:border-[#1d4b34] hover:shadow-md"
              >
                <div className="text-sm font-medium text-[#737373]">
                  Option {index + 1}
                </div>
                
                {/* Icon in stepper context */}
                <div className="flex items-center justify-center rounded-full bg-[#1f1f1f] px-4 py-2.5">
                  <Icon className="size-5 text-white" />
                </div>

                {/* Icon standalone */}
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-[#f7f7f7]">
                  <Icon className="size-6 text-[#212223]" />
                </div>

                <div className="text-center">
                  <p className="font-medium text-[#212223]">{option.name}</p>
                  <p className="mt-1 text-xs text-[#737373]">{option.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Preview in stepper context */}
        <div className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-[#212223]">
            Preview in Stepper Context
          </h2>
          <div className="space-y-4">
            {iconOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.name}
                  className="rounded-xl border border-[#e5e5e5] bg-white p-4"
                >
                  <p className="mb-3 text-sm text-[#737373]">Option {index + 1}: {option.name}</p>
                  <div className="flex items-center rounded-full bg-[#f2f2f2] p-1">
                    {/* Intake */}
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-[#737373]">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="1" />
                        <path d="M9 12h6" />
                        <path d="M9 16h6" />
                      </svg>
                      <span className="hidden lg:inline">Intake</span>
                    </div>
                    {/* Argue - Active */}
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-3 py-2.5 text-sm font-medium text-[#212223] shadow-sm">
                      <Icon className="size-4" />
                      <span className="hidden lg:inline">Argue</span>
                    </div>
                    {/* Develop */}
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-[#737373]">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18" />
                        <rect x="8" y="8" width="8" height="5" rx="1" />
                      </svg>
                      <span className="hidden lg:inline">Develop</span>
                    </div>
                    {/* Outline */}
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-[#737373]">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12h-8" />
                        <path d="M21 6H8" />
                        <path d="M21 18h-8" />
                        <path d="M3 6v4c0 1.1.9 2 2 2h3" />
                        <path d="M3 10v6c0 1.1.9 2 2 2h3" />
                      </svg>
                      <span className="hidden lg:inline">Outline</span>
                    </div>
                    {/* Draft */}
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-[#737373]">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                      <span className="hidden lg:inline">Draft</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
