'use client';

import { 
  Gavel, 
  Scale, 
  BookOpen, 
  Lightbulb, 
  Layers, 
  Workflow, 
  Network, 
  GitBranch, 
  Briefcase, 
  BarChart3,
  List 
} from 'lucide-react';

const icons = [
  { 
    name: 'Gavel', 
    icon: Gavel, 
    description: 'Legal authority & judgment' 
  },
  { 
    name: 'Scale', 
    icon: Scale, 
    description: 'Balance & justice' 
  },
  { 
    name: 'BookOpen', 
    icon: BookOpen, 
    description: 'Case law & legal briefs' 
  },
  { 
    name: 'Lightbulb', 
    icon: Lightbulb, 
    description: 'Legal insights & analysis' 
  },
  { 
    name: 'Layers', 
    icon: Layers, 
    description: 'Building legal arguments' 
  },
  { 
    name: 'Workflow', 
    icon: Workflow, 
    description: 'Legal process & procedures' 
  },
  { 
    name: 'Network', 
    icon: Network, 
    description: 'Connecting legal theories' 
  },
  { 
    name: 'GitBranch', 
    icon: GitBranch, 
    description: 'Alternative legal theories' 
  },
  { 
    name: 'Briefcase', 
    icon: Briefcase, 
    description: 'Legal work & briefs' 
  },
  { 
    name: 'BarChart3', 
    icon: BarChart3, 
    description: 'Legal analysis & evidence' 
  },
];

export default function DevelopLawIconsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcfcfc] to-[#f0f0f0] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#212223] mb-3">
            Develop Step Icons (Legal Context)
          </h1>
          <p className="text-lg text-[#737373]">
            10 icon options for the Develop step in a legal brief builder
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {icons.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.name}
                className="bg-white rounded-xl p-6 border border-[#e5e5e5] hover:border-[#1d4b34] hover:shadow-lg transition-all duration-200"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="size-10 text-[#1d4b34]" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-center text-[#212223] mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-center text-[#737373]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Segmented Control Context */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-[#212223] mb-6">
            In Segmented Control (Stepper)
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#f2f2f2] p-1 max-w-4xl mx-auto mb-8">
            {icons.slice(0, 4).map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium transition-all cursor-pointer hover:bg-white"
                >
                  <IconComponent className="size-4" strokeWidth={1.5} />
                  <span className="hidden lg:inline text-xs">{item.name}</span>
                </button>
              );
            })}
          </div>
          <p className="text-center text-[#737373]">
            Showing sample icons in segmented control stepper style
          </p>
        </div>

        {/* Sidebar Button Context */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#212223] mb-6">
            As Sidebar Button (Paired with List Icon)
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {icons.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.name} className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
                      <List className="size-5 text-[#212223]" />
                    </button>
                    <button className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white hover:bg-[#f7f7f7]">
                      <IconComponent className="size-5 text-[#1d4b34]" strokeWidth={1.5} />
                    </button>
                  </div>
                  <p className="text-xs text-center text-[#737373] font-medium">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
