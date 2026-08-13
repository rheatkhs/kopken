"use client";

import { useState } from "react";
import { Smartphone, Gift, Award, QrCode } from "lucide-react";

export default function AppShowcase() {
  const [tier, setTier] = useState<"BRONZE" | "GOLD" | "LEGEND">("GOLD");
  const [points, setPoints] = useState(2450);

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
              APLIKASI & <span className="text-[#c82a2b]">KENANGAN POINTS</span>
            </h2>
          </div>
          <p className="text-[#4a453f] font-sans text-xs max-w-sm mt-4 md:mt-0 leading-relaxed font-bold">
            Extra convenience. Extra benefits. Only in Kenangan app.
          </p>
        </div>

        {/* Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mobile Simulator (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[300px] bg-[#1f1d1a] rounded-[40px] p-3 border-4 border-[#eae5de] shadow-xl relative">
              {/* Speaker notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-3.5 bg-[#eae5de] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#1f1d1a]"></div>
              </div>

              {/* Phone Content Screen */}
              <div className="bg-[#12131a] rounded-[32px] px-4 py-8 border border-white/5 font-mono text-[11px] text-[#dbd5cd]">
                <div className="flex justify-between items-center text-[9px] text-[#80766b] mb-4 pt-1 border-b border-white/5 pb-2">
                  <span>KENANGAN APP</span>
                  <span>100% SIGNAL</span>
                </div>

                {/* User Stats Card */}
                <div className="bg-[#1d1e28] border border-white/5 rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] text-[#dbd5cd]/60 uppercase">MEMBER TIER</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-black/40 border border-white/10 uppercase text-[#cfa869]">
                      {tier}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white tracking-tight mb-1">
                    {points.toLocaleString("id-ID")} <span className="text-[10px] text-[#dbd5cd]/50">PTS</span>
                  </div>
                  <div className="w-full bg-[#12131a] h-1 rounded-full overflow-hidden mb-2">
                    <div
                      className="bg-[#c82a2b] h-full transition-all duration-500"
                      style={{ width: `${(points / 6000) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Points Adder */}
                <div className="mb-4">
                  <button
                    onClick={() => setPoints((prev) => Math.min(prev + 250, 6000))}
                    className="w-full py-2 bg-[#c82a2b]/20 hover:bg-[#c82a2b]/30 text-[#cfa869] text-[9px] tracking-wider rounded border border-[#c82a2b]/40 transition-all font-bold"
                  >
                    + SIMULATE ORDER (+250 PTS)
                  </button>
                </div>

                {/* Voucher Showcase */}
                <div className="bg-[#1d1e28] border border-white/5 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-[10px]">
                    <Gift className="w-3.5 h-3.5 text-[#c82a2b]" />
                    <span>ACTIVE BENEFITS</span>
                  </div>
                  <div className="space-y-1.5 text-[9px] text-[#dbd5cd]/70">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Multiplier:</span>
                      <span className="text-white">{selectedTier.multiplier}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Discount:</span>
                      <span className="text-white">{selectedTier.discount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Voucher:</span>
                      <span className="text-white text-right">{selectedTier.voucher}</span>
                    </div>
                  </div>
                </div>

                {/* Qr Code */}
                <div className="mt-4 flex flex-col items-center justify-center bg-white p-2.5 rounded-xl">
                  <QrCode className="w-16 h-16 text-black" />
                  <span className="text-[8px] text-black font-bold tracking-widest mt-1">KENANGAN-PAY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy and Tiers (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#1f1d1a] mb-4 uppercase">
                TIER LOYALITAS <span className="text-[#c82a2b]">KENANGAN APP</span>
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
                    if (t === "BRONZE") setPoints(450);
                    if (t === "GOLD") setPoints(2450);
                    if (t === "LEGEND") setPoints(5450);
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
              <span>DOWNLOAD NOW:</span>
              <a
                href="https://kopikenangan.onelink.me/4u50/tabak"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#eae5de] border border-[#c8c0b5] hover:border-neutral-500 text-[#1f1d1a] rounded transition-all flex items-center gap-2 font-bold"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#c82a2b]" />
                KENANGAN APP (APP STORE & GOOGLE PLAY)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
