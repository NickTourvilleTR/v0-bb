import {
  Eye,
  ScanEye,
  FileSearch,
  ClipboardList,
  LayoutList,
  ScrollText,
  BookOpen,
  PanelRight,
  Presentation,
  GalleryVertical,
} from "lucide-react";

const iconOptions = [
  { id: 1, name: "Eye", description: "Classic preview/view indicator", icon: Eye },
  { id: 2, name: "ScanEye", description: "Preview with scan/inspection feel", icon: ScanEye },
  { id: 3, name: "FileSearch", description: "Document with magnifying glass", icon: FileSearch },
  { id: 4, name: "ClipboardList", description: "Clipboard with list items", icon: ClipboardList },
  { id: 5, name: "LayoutList", description: "Layout with list structure", icon: LayoutList },
  { id: 6, name: "ScrollText", description: "Scrollable document preview", icon: ScrollText },
  { id: 7, name: "BookOpen", description: "Open book for reading mode", icon: BookOpen },
  { id: 8, name: "PanelRight", description: "Side panel indicator", icon: PanelRight },
  { id: 9, name: "Presentation", description: "Presentation/preview screen", icon: Presentation },
  { id: 10, name: "GalleryVertical", description: "Vertical gallery/document view", icon: GalleryVertical },
];

export default function PreviewIconsPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-semibold text-[#212223]">Preview Icon Options</h1>
        <p className="mb-8 text-[#737373]">Select an icon option to use for the outline preview button</p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {iconOptions.map((option) => (
            <div
              key={option.id}
              className="flex flex-col items-center gap-3 rounded-xl border border-[#e5e5e5] bg-white p-6 transition-all hover:border-[#1d4b34] hover:shadow-md"
            >
              <span className="text-sm font-medium text-[#737373]">Option {option.id}</span>
              
              {/* Button preview */}
              <div className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white">
                <option.icon className="size-5 text-[#1d4b34]" />
              </div>

              <div className="text-center">
                <p className="font-medium text-[#212223]">{option.name}</p>
                <p className="mt-1 text-xs text-[#737373]">{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Preview in context */}
        <div className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-[#212223]">Preview in Context</h2>
          <p className="mb-6 text-sm text-[#737373]">How each icon looks alongside the List (table of contents) button</p>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {iconOptions.map((option) => (
              <div
                key={option.id}
                className="flex flex-col items-center gap-3 rounded-xl border border-[#e5e5e5] bg-white p-6"
              >
                <span className="text-sm font-medium text-[#737373]">Option {option.id}</span>
                
                {/* Button pair preview */}
                <div className="flex flex-col gap-2">
                  <div className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white">
                    <LayoutList className="size-5 text-[#212223]" />
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white">
                    <option.icon className="size-5 text-[#1d4b34]" />
                  </div>
                </div>

                <p className="text-sm font-medium text-[#212223]">{option.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
