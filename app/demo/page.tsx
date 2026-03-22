'use client';

import React from 'react';
import { MessageCardQuote } from '@/components/message-card-quote';
import { Button } from '@/components/ui/button';

export default function DemoPage() {
  const handleQuote = (message: string) => {
    console.log('[v0] Quoted message:', message);
  };

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#f7f7f7] to-white p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-[#212223]">Simple Icon Button Quote/Reply Variation</h1>
        <p className="mb-8 text-lg text-[#737373]">Hover over any message card to see the green circular Reply button</p>

        <div className="space-y-6">
          {/* Demo Card 1 */}
          <MessageCardQuote onQuote={() => handleQuote('Your intake summary is ready')}>
            <p className="mb-2 text-sm text-[#212223]">
              Your intake summary is ready. I've analyzed the complaint and identified the key facts, parties, and claims.
            </p>
            <p className="mb-3 text-sm text-[#212223]">
              What would you like to do next?
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                Skip to generate draft
              </Button>
              <Button
                size="sm"
                className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
              >
                Next: Select arguments
              </Button>
            </div>
          </MessageCardQuote>

          {/* Demo Card 2 */}
          <MessageCardQuote onQuote={() => handleQuote('Supporting authorities are ready')}>
            <p className="mb-2 text-sm font-medium text-[#212223]">Supporting authorities are ready for review</p>
            <p className="mb-2 text-sm text-[#212223]">
              I've pre-selected the stronger supporting authorities for your brief. You can tell me if you want to add, edit, or remove authorities.
            </p>
            <p className="mb-3 text-sm text-[#212223]">
              What would you like to do next?
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full border-[#cccccc] px-4 text-sm text-[#212223] hover:bg-[#f2f2f2]"
              >
                Skip to generate draft
              </Button>
              <Button
                size="sm"
                className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
              >
                Next: Outline
              </Button>
            </div>
          </MessageCardQuote>

          {/* Demo Card 3 */}
          <MessageCardQuote onQuote={() => handleQuote('Brief finalization summary is ready')}>
            <p className="mb-2 text-sm font-medium text-[#212223]">Brief finalization summary is ready for review</p>
            <p className="mb-2 text-sm text-[#212223]">
              Your motion to dismiss has been finalized with all arguments, supporting authorities, and distinguished contrary authorities incorporated.
            </p>
            <p className="mb-3 text-sm text-[#212223]">
              What would you like to do next?
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                className="h-8 rounded-full bg-[#1d4b34] px-4 text-sm text-white hover:bg-[#163d2a]"
              >
                Download brief
              </Button>
            </div>
          </MessageCardQuote>
        </div>

        <div className="mt-12 rounded-lg bg-[#f0f4f2] p-6">
          <h2 className="mb-3 text-lg font-semibold text-[#212223]">Interaction Details</h2>
          <ul className="space-y-2 text-sm text-[#212223]">
            <li>• Green circular Reply button appears at top-right corner on hover</li>
            <li>• Smooth scale animation (hover scale: 1.1)</li>
            <li>• Clicking the button triggers the quote/reply action</li>
            <li>• Works on all message container cards</li>
            <li>• Brand color (#1d4b34) provides visual hierarchy</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
