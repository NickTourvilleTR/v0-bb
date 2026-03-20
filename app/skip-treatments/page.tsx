import { SkipButtonTreatments } from "@/components/skip-button-treatments";

export default function SkipTreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-2xl font-bold text-[#212223]">Skip Button Treatments</h1>
        <p className="mb-8 text-[#737373]">10 different design approaches for the "Skip this step" button</p>
        <div className="rounded-xl border border-[#e5e5e5] bg-white">
          <SkipButtonTreatments />
        </div>
      </div>
    </div>
  );
}
