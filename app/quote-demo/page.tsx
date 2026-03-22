"use client";

import * as React from "react";
import { Reply } from "lucide-react";

const messages = [
  {
    id: 1,
    author: "CoCounsel",
    time: "10:14 a.m.",
    avatar: null,
    text: "Your intake summary is ready. I've analyzed the complaint and identified the key facts, parties, and claims.",
  },
  {
    id: 2,
    author: "Jane Lawson",
    time: "10:15 a.m.",
    avatar: "JL",
    text: "Can you add the argument that the statute of limitations has expired under §1983?",
  },
  {
    id: 3,
    author: "CoCounsel",
    time: "10:17 a.m.",
    avatar: null,
    text: "All set. I've added the argument to your draft brief. The §1983 statute of limitations argument is now included under Section II.",
  },
  {
    id: 4,
    author: "Jane Lawson",
    time: "10:18 a.m.",
    avatar: "JL",
    text: "What supporting authorities do you recommend for the personal jurisdiction argument?",
  },
  {
    id: 5,
    author: "CoCounsel",
    time: "10:20 a.m.",
    avatar: null,
    text: "I've pre-selected the stronger supporting authorities for your brief, including International Shoe Co. v. Washington, 326 U.S. 310 (1945) and Burger King Corp. v. Rudzewicz, 471 U.S. 462 (1985).",
  },
];

function MessageCard({ message, onQuote }: { message: typeof messages[0]; onQuote: (id: number) => void }) {
  const [hovered, setHovered] = React.useState(false);
  const isCounsel = message.author === "CoCounsel";

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Simple icon button — appears top-right on hover */}
      <button
        onClick={() => onQuote(message.id)}
        className={`absolute right-2 top-2 z-10 flex size-7 items-center justify-center rounded-full bg-[#1d4b34] text-white shadow-sm transition-all duration-150 ${
          hovered ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
        title="Quote reply"
      >
        <Reply className="size-3.5" />
      </button>

      <div className={`flex items-start gap-3 ${isCounsel ? "" : "flex-row-reverse"}`}>
        {/* Avatar */}
        {isCounsel ? (
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1d4b34]">
            <svg viewBox="0 0 24 24" fill="white" className="size-4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
        ) : (
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-xs font-medium text-white">
            {message.avatar}
          </div>
        )}

        {/* Bubble */}
        <div className={`max-w-[80%] ${isCounsel ? "" : "items-end"}`}>
          <p className="mb-1 text-xs text-[#737373]">
            {message.author} · {message.time}
          </p>
          <div
            className={`rounded-lg px-4 py-3 text-sm ${
              isCounsel
                ? "rounded-tl-none border border-[#e5e5e5] bg-white text-[#212223]"
                : "rounded-tr-none bg-[#1d4b34] text-white"
            }`}
          >
            {message.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuoteDemoPage() {
  const [quotedId, setQuotedId] = React.useState<number | null>(null);

  const handleQuote = (id: number) => {
    setQuotedId(id);
    setTimeout(() => setQuotedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] p-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#212223]">Simple Icon Button</h1>
          <p className="mt-1 text-sm text-[#737373]">
            Hover over any message to reveal a green circular reply button at the top-right corner. Click it to quote the message.
          </p>
        </div>

        {/* Toast */}
        {quotedId && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-[#1d4b34] px-4 py-3 text-sm text-white shadow">
            <Reply className="size-4" />
            Message quoted — ready to reply
          </div>
        )}

        {/* Chat messages */}
        <div className="flex flex-col gap-4 rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
          {messages.map((message) => (
            <MessageCard key={message.id} message={message} onQuote={handleQuote} />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center gap-3 rounded-lg border border-[#e5e5e5] bg-white p-4">
          <div className="flex size-7 items-center justify-center rounded-full bg-[#1d4b34] text-white">
            <Reply className="size-3.5" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#212223]">Simple icon button</p>
            <p className="text-xs text-[#737373]">Appears on hover · Brand color · Smooth scale animation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
