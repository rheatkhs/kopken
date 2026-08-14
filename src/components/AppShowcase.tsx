"use client";

import { useState } from "react";
import { Gift, Award } from "lucide-react";

export default function AppShowcase() {
  const [tier, setTier] = useState<"BRONZE" | "GOLD" | "LEGEND">("GOLD");

  const tiers = {
    BRONZE: {
      multiplier: "1.0x Points",
      discount: "5% Welcome Discount",
      voucher: "Free Regular Cup on Sign Up",
    },
    GOLD: {
      multiplier: "1.5x Points",
      discount: "10% Everyday Discount",
      voucher: "2x Free Large Cup / Month",
    },
    LEGEND: {
      multiplier: "2.0x Points",
      discount: "15% Everyday Discount + Priority Queue",
      voucher: "Unlimited Free Customization + Birthday Drink",
    },
  };

  const selectedTier = tiers[tier];

  return (
    <section id="app" className="py-24 border-b border-[#c8c0b5] relative overflow-hidden bg-[#eae5de]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c8c0b5]">
          <div>
            <div className="text-[#c82a2b] font-mono text-[11px] font-bold tracking-widest uppercase mb-2">
              04 // KOPI KENANGAN APP
            </div>
            <h2 className="text-3xl sm:text-5xl font-light font-display uppercase tracking-tight text-[#1f1d1a]">
              KOPI KENANGAN <span className="text-[#c82a2b]">APP</span>
            </h2>
          </div>
          <p className="text-[#4a453f] font-sans text-xs max-w-sm mt-4 md:mt-0 leading-relaxed font-bold">
            Extra convenience. Extra benefits. Only in Kenangan app.
          </p>
        </div>

        {/* Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mobile Simulator / GIF Preview (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1605250463718-RAWESAHFYEWXB7PXRP0B/hp-2.gif?format=500w"
              alt="Kopi Kenangan App Preview"
              className="w-full max-w-[280px] object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Copy and Tiers (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#1f1d1a] mb-4 uppercase">
                KOPI KENANGAN <span className="text-[#c82a2b]">APP</span>
              </h3>
              <p className="text-[#4a453f] font-sans text-xs sm:text-sm leading-relaxed mb-6">
                Gunakan aplikasi Kopi Kenangan untuk memesan dengan fitur Pickup atau Delivery tanpa perlu mengantre. Kumpulkan Kenangan Points cashback di setiap transaksi.
              </p>
            </div>

            {/* Tier Select Buttons */}
            <div className="grid grid-cols-3 gap-4">
              {(["BRONZE", "GOLD", "LEGEND"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTier(t);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 font-mono ${
                    tier === t
                      ? "bg-[#eae5de] border-[#c82a2b] text-[#1f1d1a]"
                      : "bg-[#f4f0eb]/80 border-[#c8c0b5] text-[#4a453f] hover:border-neutral-500"
                  }`}
                >
                  <span className="text-[10px] text-[#c82a2b] block mb-1">0{t === "BRONZE" ? 1 : t === "GOLD" ? 2 : 3}</span>
                  <span className="font-bold text-xs block text-[#1f1d1a]">{t}</span>
                </button>
              ))}
            </div>

            {/* Detailed Perks */}
            <div className="bg-[#eae5de] border border-[#c8c0b5] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#1f1d1a] font-mono text-xs font-bold tracking-widest uppercase">
                <Award className="w-4 h-4 text-[#b38b4d]" />
                <span>BENEFITS SPECIFICATIONS ({tier})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#4a453f]">
                <div className="bg-[#f4f0eb] p-4 rounded-lg border border-[#c8c0b5]/50">
                  <span className="text-[#80766b] block mb-1">CASHBACK & POINT RATIO:</span>
                  <span className="text-[#1f1d1a] font-bold">{selectedTier.multiplier} on all orders</span>
                </div>
                <div className="bg-[#f4f0eb] p-4 rounded-lg border border-[#c8c0b5]/50">
                  <span className="text-[#80766b] block mb-1">TIER DISCOUNT:</span>
                  <span className="text-[#1f1d1a] font-bold">{selectedTier.discount}</span>
                </div>
                <div className="bg-[#f4f0eb] p-4 rounded-lg border border-[#c8c0b5]/50 col-span-1 sm:col-span-2">
                  <span className="text-[#80766b] block mb-1">SPECIAL REWARDS:</span>
                  <span className="text-[#1f1d1a] font-bold">{selectedTier.voucher}</span>
                </div>
              </div>
            </div>

            {/* App Badges */}
            <div className="flex flex-wrap gap-4 items-center font-mono text-xs text-[#80766b]">
              <span className="font-bold">DOWNLOAD NOW:</span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?gl=US&hl=en&id=com.kopikenangan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-85 transition-opacity"
                >
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1611739412718-FB769K21E5S37C17MOMX/app-donlod-01.png"
                    alt="Google Play Store"
                    className="h-10 object-contain"
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
                    className="h-10 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
