"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function AppShowcase() {
  const steps = [
    {
      step: "Step 01",
      title: "ORDER & SKIP THE QUEUE",
      desc: "Use the Kopi Kenangan app to order, you may select pickup or delivery to skip the queue",
    },
    {
      step: "Step 02",
      title: "COLLECT CASHBACK POINTS",
      desc: "Collect Kenangan Points cashback through in-app ordering OR scan the QR code at the cashier.",
    },
    {
      step: "Step 03",
      title: "ENJOY EXCLUSIVE MEMBERSHIP DEALS",
      desc: "Enjoy exclusive membership deals like free vouchers, birthday drinks, priority access to new products and more!",
    },
  ];

  return (
    <section
      id="app"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#c8c0b5] overflow-hidden lg:h-[clamp(23.1rem,43vw,38.7rem)] bg-[#12131a]"
    >
      {/* Left Panel: Info & Steps (5 columns on LG) */}
      <div className="lg:col-span-5 bg-[#12131a] text-[#fcfbfa] p-[clamp(1.5rem,2.5vw,2.5rem)] relative overflow-hidden flex flex-col justify-between h-full">
        <div className="relative z-10 space-y-6">
          <div>
            <p className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-light leading-none uppercase text-[#fcfbfa] mb-2">
              Kopi Kenangan App
            </p>
            <h2 className="text-[10px] font-mono text-[#cfa869] font-bold tracking-widest uppercase">
              Find out how to get free vouchers, priority access and extra benefits.
            </h2>
          </div>

          {/* Steps list matching BrandStory styling */}
          <ol className="space-y-5 font-mono border-l border-[#cfa869]/40 pl-4 py-1">
            {steps.map((s, idx) => (
              <li key={idx} className="relative group">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-[#cfa869] bg-[#12131a] group-hover:bg-[#c82a2b] transition-colors"></div>

                <div className="text-[9px] text-[#c82a2b] font-bold uppercase mb-1">
                  {s.step}
                </div>
                <h3 className="text-xs font-bold text-[#cfa869] font-sans mb-1 uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="text-[10px] text-[#dbd5cd]/80 font-sans leading-relaxed">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Download Badges at bottom */}
        <div className="relative z-10 pt-6 border-t border-[#cfa869]/20 flex flex-wrap items-center gap-3">
          <a
            href="https://play.google.com/store/apps/details?gl=US&hl=en&id=com.kopikenangan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-85 transition-opacity"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1611739412718-FB769K21E5S37C17MOMX/app-donlod-01.png"
              alt="Google Play Store"
              className="h-9 object-contain"
            />
          </a>
          <a
            href="https://apps.apple.com/id/app/kopi-kenangan/id1458086649"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-85 transition-opacity"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1611739426194-A3PTF4R4K1Z2PP0JYOQ6/app-donlod-02.png"
              alt="Apple App Store"
              className="h-9 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Right Panel: GIF Phone Preview (7 columns on LG) */}
      <div className="lg:col-span-7 relative m-0 p-6 lg:p-0 min-h-[350px] lg:min-h-full bg-[#eae5de] overflow-hidden flex items-center justify-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1605250463718-RAWESAHFYEWXB7PXRP0B/hp-2.gif?format=500w"
          alt="Kopi Kenangan App Preview"
          className="h-[85%] max-h-[420px] object-contain transition-transform duration-500 hover:scale-105 drop-shadow-md z-10"
        />
        <figcaption
          className="absolute right-8 top-12 text-[#4a453f] font-mono text-[9px] tracking-widest font-bold uppercase hidden md:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Extra convenience. Extra benefits. Only in Kenangan app.
        </figcaption>
      </div>
    </section>
  );
}
