"use client";

import { useState } from "react";
import { Smartphone, Gift, Award, Zap, QrCode, Sparkles, CheckCircle2 } from "lucide-react";

export default function AppShowcase() {
  const [tier, setTier] = useState<"BRONZE" | "GOLD" | "LEGEND">("GOLD");
  const [points, setPoints] = useState(2450);

  const tiers = {
    BRONZE: {
      pointsRequired: "0 - 999",
      multiplier: "1.0x Points",
      discount: "5% Welcome Discount",
      voucher: "Free Regular Cup on Sign Up",
      accent: "from-amber-700 to-amber-900 border-amber-600/40 text-amber-400",
    },
    GOLD: {
      pointsRequired: "1,000 - 4,999",
      multiplier: "1.5x Points",
      discount: "10% Everyday Discount",
      voucher: "2x Free Large Cup / Month",
      accent: "from-yellow-600 to-amber-700 border-yellow-500/40 text-yellow-400",
    },
    LEGEND: {
      pointsRequired: "5,000+",
      multiplier: "2.0x Points",
      discount: "15% Everyday Discount + Priority Queue",
      voucher: "Unlimited Free Customization + Gift Box",
      accent: "from-red-600 to-rose-800 border-red-500/40 text-red-400",
    },
  };

  const selectedTier = tiers[tier];

  return (
    <section id="app" className="py-24 bg-[#090a0f] border-b border-white/10 relative overflow-hidden">
      {/* Background neon effect */}
      <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase mb-2">
              04 // LOYALTY & MOBILE ECOSYSTEM
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
              APLIKASI & <span className="text-gradient-red">LOYALTI</span>
            </h2>
          </div>
          <p className="text-neutral-400 font-mono text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            Dapatkan poin berlipat, pesan tanpa antre, dan nikmati penawaran eksklusif masa depan.
          </p>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Mobile Device Simulator (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] bg-neutral-950 rounded-[40px] p-3 border-4 border-neutral-800 shadow-2xl relative">
              {/* Speaker / Camera notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-neutral-800 rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-950"></div>
              </div>

              {/* Phone Content Screen */}
              <div className="bg-[#0b0c14] rounded-[32px] px-4 py-8 border border-neutral-900 font-mono text-xs text-neutral-300">
                {/* Micro header */}
                <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-6 pt-2 border-b border-neutral-900 pb-2">
                  <span>KENANGAN APP v4.2</span>
                  <span>100% SIGNAL</span>
                </div>

                {/* User Stats Card */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-neutral-400 uppercase">MEMBER TIER</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-950 border border-white/10 uppercase`}>
                      {tier}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white tracking-tight mb-1">
                    {points.toLocaleString()} <span className="text-xs text-neutral-400">PTS</span>
                  </div>
                  <div className="w-full bg-neutral-950 h-1 rounded-full overflow-hidden mb-2">
                    <div
                      className="bg-red-500 h-full transition-all duration-500"
                      style={{ width: `${(points / 6000) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-[9px] text-neutral-500">
                    +{6000 - points} Points to next tier milestone.
                  </p>
                </div>

                {/* Interactive Points Adder */}
                <div className="mb-4">
                  <button
                    onClick={() => setPoints((prev) => Math.min(prev + 250, 6000))}
                    className="w-full py-2 bg-gradient-to-r from-red-950 to-red-900 hover:from-red-900 hover:to-red-850 text-red-400 text-[10px] tracking-wider rounded border border-red-900/50 transition-all font-bold"
                  >
                    + SIMULATE PURCHASE (+250 PTS)
                  </button>
                </div>

                {/* Voucher Showcase */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-[11px]">
                    <Gift className="w-4 h-4 text-red-500" />
                    <span>ACTIVE BENEFITS</span>
                  </div>
                  <div className="space-y-2 text-[10px] text-neutral-400">
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span>Multiplier:</span>
                      <span className="text-white">{selectedTier.multiplier}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span>Discount:</span>
                      <span className="text-white">{selectedTier.discount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Voucher:</span>
                      <span className="text-white text-right">{selectedTier.voucher}</span>
                    </div>
                  </div>
                </div>

                {/* Qr Code simulated */}
                <div className="mt-5 flex flex-col items-center justify-center bg-white p-3 rounded-xl border border-neutral-200">
                  <QrCode className="w-20 h-20 text-neutral-950" />
                  <span className="text-[8px] text-neutral-500 font-bold tracking-widest mt-1">KENANGAN-PAY SCAN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy and Selector Cards (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight mb-4 uppercase">
                TIER LOYALITAS <span className="text-gradient-red">NEO-MIRAI</span>
              </h3>
              <p className="text-neutral-400 font-mono text-xs sm:text-sm leading-relaxed mb-6">
                Pilih atau klik tingkatan loyalitas di bawah untuk melihat rincian manfaat eksklusif yang dirancang khusus untuk anggota premium Kopi Kenangan.
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
                      ? "bg-red-950/40 border-red-500 text-white"
                      : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  <span className="text-[10px] text-red-500 block mb-1">0{t === "BRONZE" ? 1 : t === "GOLD" ? 2 : 3}</span>
                  <span className="font-bold text-xs block text-white">{t}</span>
                </button>
              ))}
            </div>

            {/* Detailed Perks */}
            <div className="bg-[#121420] border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold tracking-widest uppercase">
                <Award className="w-4 h-4 text-amber-500" />
                <span>BENEFITS SPECIFICATIONS ({tier} TIER)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-neutral-300">
                <div className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block mb-1">CASHBACK & POINT RATIO:</span>
                  <span className="text-white font-bold">{selectedTier.multiplier} on all transactions</span>
                </div>
                <div className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block mb-1">TIER DISCOUNT:</span>
                  <span className="text-white font-bold">{selectedTier.discount}</span>
                </div>
                <div className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800 col-span-1 sm:col-span-2">
                  <span className="text-neutral-500 block mb-1">SPECIAL REWARDS:</span>
                  <span className="text-white font-bold">{selectedTier.voucher}</span>
                </div>
              </div>
            </div>

            {/* App Badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-xs font-mono text-neutral-500">DOWNLOAD NOW:</span>
              <button
                onClick={() => alert("Mengunduh Kopi Kenangan App dari App Store...")}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white font-mono text-xs rounded transition-all flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                APP STORE
              </button>
              <button
                onClick={() => alert("Mengunduh Kopi Kenangan App dari Google Play...")}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white font-mono text-xs rounded transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                GOOGLE PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
