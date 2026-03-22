"use client";

import * as React from "react";
import {
  QuoteVariant1,
  QuoteVariant2,
  QuoteVariant3,
  QuoteVariant4,
  QuoteVariant5,
  QuoteVariant6,
  QuoteVariant7,
  QuoteVariant8,
  QuoteVariant9,
  QuoteVariant10,
} from "@/components/quote-interactions-explorations";

const variants = [
  { id: 1, label: "Simple icon button", description: "A single circular reply icon appears at the top right corner on hover." },
  { id: 2, label: "Floating action bar", description: "A pill-shaped toolbar floats above the card center with quote, copy, and more actions." },
  { id: 3, label: "Side dock", description: "A vertical icon dock appears docked to the right edge of the card." },
  { id: 4, label: "Inline text button", description: "A 'Quote reply' text link slides in at the bottom right, separated by a divider." },
  { id: 5, label: "Corner ribbon", description: "A green corner badge with a quote icon clips into the top left corner." },
  { id: 6, label: "Slide in from left", description: "A green panel slides in from the left edge of the card revealing a quote icon." },
  { id: 7, label: "Tooltip style", description: "A dark tooltip appears above the card with Quote and Copy actions." },
  { id: 8, label: "Glow border", description: "The card border glows green and a compact reply pill appears at the bottom right." },
  { id: 9, label: "Teams-style reaction bar", description: "A horizontal bar with emoji reactions and a reply icon appears above the card, similar to Microsoft Teams." },
  { id: 10, label: "Minimalist dot expand", description: "A small dot icon expands into an icon row on click, keeping the UI minimal until needed." },
];

const sampleMessages = [
  {
    user: "JL",
    name: "Jane Lawson",
    time: "12:30 p.m.",
    text: "I've identified relevant case law and statutes to support your arguments. Review the authorities and select which ones to include in your brief.",
  },
  {
    user: "AL",
    name: "Alex Lee",
    time: "12:45 p.m.",
    text: "Your outline is ready. Review the structure and headings, then proceed to generate the full draft.",
  },
];

const VariantComponents = [
  QuoteVariant1,
  QuoteVariant2,
  QuoteVariant3,
  QuoteVariant4,
  QuoteVariant5,
  QuoteVariant6,
  QuoteVariant7,
  QuoteVariant8,
  QuoteVariant9,
  QuoteVariant10,
];

export default function QuoteDemoPage() {
  const [quotedVariant, setQuotedVariant] = React.useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f7f7] font-sans">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] bg-white px-8 py-5">
        <div className="mx-auto max-w-4xl">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[#1d4b34]">Explorations</p>
          <h1 className="text-2xl font-semibold text-[#212223]">Quote Reply Interactions</h1>
          <p className="mt-1 text-sm text-[#737373]">10 hover-triggered variants for quoting messages in the CoCounsel chat panel. Hover over any card to see it in action.</p>
        </div>
      </div>

      {/* Toast notification */}
      {quotedVariant !== null && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2 shadow-lg">
          <p className="text-sm text-[#212223]">
            Quoted from <span className="font-medium text-[#1d4b34]">Variant {quotedVariant}</span>
          </p>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-8 py-10">
        <div className="grid gap-10">
          {variants.map((variant, index) => {
            const VariantComponent = VariantComponents[index];
            return (
              <div key={variant.id} className="grid grid-cols-[1fr_2fr] gap-6 rounded-2xl border border-[#e5e5e5] bg-white p-6">
                {/* Left: Label + description */}
                <div className="border-r border-[#e5e5e5] pr-6">
                  <div className="mb-2 inline-flex items-center rounded-full bg-[#ebf0ed] px-2.5 py-0.5 text-xs font-medium text-[#1d4b34]">
                    Variant {variant.id}
                  </div>
                  <h2 className="mb-1 text-sm font-semibold text-[#212223]">{variant.label}</h2>
                  <p className="text-xs leading-relaxed text-[#737373]">{variant.description}</p>
                </div>

                {/* Right: Live demo with two message cards */}
                <div className="space-y-3 py-2 pl-2 pr-6">
                  {sampleMessages.map((msg, msgIndex) => (
                    <div key={msgIndex} className="flex items-start gap-3">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
                        {msg.user}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="mb-1 text-xs text-[#737373]">{msg.name} · {msg.time}</p>
                        <VariantComponent
                          quoteVariant={variant.id}
                          onQuote={() => {
                            setQuotedVariant(variant.id);
                            setTimeout(() => setQuotedVariant(null), 2000);
                          }}
                        >
                          <p className="text-sm text-[#212223]">{msg.text}</p>
                        </VariantComponent>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
