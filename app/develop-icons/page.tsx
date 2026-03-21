'use client';

import {
  Code2,
  Lightbulb,
  Beaker,
  Wrench,
  Database,
  GitBranch,
  Layers,
  Zap,
  BookMarked,
  Settings,
} from 'lucide-react';

const developIcons = [
  { name: 'Code2', icon: Code2, description: 'Code/Development' },
  { name: 'Lightbulb', icon: Lightbulb, description: 'Ideas/Insights' },
  { name: 'Beaker', icon: Beaker, description: 'Experiment/Testing' },
  { name: 'Wrench', icon: Wrench, description: 'Tools/Building' },
  { name: 'Database', icon: Database, description: 'Data Structure' },
  { name: 'GitBranch', icon: GitBranch, description: 'Version Control' },
  { name: 'Layers', icon: Layers, description: 'Layered Structure' },
  { name: 'Zap', icon: Zap, description: 'Power/Energy' },
  { name: 'BookMarked', icon: BookMarked, description: 'Documentation' },
  { name: 'Settings', icon: Settings, description: 'Configuration' },
];

export default function DevelopIconsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] to-[#fcfcfc] p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-[#212223]">Develop Step Icons</h1>
        <p className="mb-12 text-lg text-[#737373]">
          Choose an icon that best represents the "Develop" step
        </p>

        {/* Grid of individual icons */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-semibold text-[#212223]">Individual Icons</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {developIcons.map(({ name, icon: Icon, description }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 rounded-lg border border-[#e5e5e5] bg-white p-6 hover:border-[#1d4b34] hover:shadow-md transition-all"
              >
                <Icon className="size-12 text-[#1d4b34]" />
                <p className="text-center text-sm font-medium text-[#212223]">{name}</p>
                <p className="text-center text-xs text-[#737373]">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* In Context - Stepper */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-semibold text-[#212223]">In Stepper Context</h2>
          {developIcons.map(({ name, icon: Icon, description }) => (
            <div key={name} className="mb-4 rounded-lg border border-[#e5e5e5] bg-white p-6">
              <p className="mb-3 font-medium text-[#212223]">
                {name} - {description}
              </p>
              <div className="flex items-center justify-center gap-2 rounded-full bg-[#f2f2f2] p-1 w-fit mx-auto">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all text-[#737373] hover:text-[#212223]">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} stroke="currentColor" strokeLinecap="round" />
                  </svg>
                  <span>Intake</span>
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all text-[#737373] hover:text-[#212223]">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 12h8M8 18h8" strokeWidth={2} stroke="currentColor" strokeLinecap="round" />
                  </svg>
                  <span>Argue</span>
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium transition-all text-[#212223] shadow-sm">
                  <Icon className="size-4" />
                  <span>Develop</span>
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all text-[#737373] hover:text-[#212223]">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 7h10M7 13h10" strokeWidth={2} stroke="currentColor" strokeLinecap="round" />
                  </svg>
                  <span>Outline</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Context */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-semibold text-[#212223]">As Sidebar Button</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {developIcons.map(({ name, icon: Icon, description }) => (
              <div key={name} className="flex flex-col items-center gap-4">
                <p className="text-center text-sm font-medium text-[#212223]">{name}</p>
                <div className="flex flex-col gap-2">
                  <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
                    <svg className="size-5 text-[#212223]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} stroke="currentColor" />
                    </svg>
                  </button>
                  <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
                    <Icon className="size-5 text-[#1d4b34]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
