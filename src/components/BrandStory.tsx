"use client";

import { useState } from "react";
import { Compass, Flame, ShieldCheck, HeartHandshake, Check } from "lucide-react";

export default function BrandStory() {
  const [activePillar, setActivePillar] = useState(0);

  const storyPillars = [
    {
      id: "01",
      title: "WARISAN KOPI NUSANTARA",
      japanese: "伝統とルーツ",
      icon: Compass,
      subtitle: "Biji Kopi Asli Indonesia Dari Petani Lokal",
      desc: "Kopi Kenangan tidak pernah melupakan akar perjalanannya. Kami bermitra langsung dengan ribuan petani lokal di Sumatra, Jawa, Bali, dan Sulawesi untuk menghadirkan biji Arabika dan Robusta kualitas tertinggi.",
      stats: [
        { label: "Direct Trade", value: "100%" },
        { label: "Biji Pilihan", value: "Grade 1 Specialty" },
        { label: "Ketinggian Kebun", value: "1,200 - 1,800 MDPL" },
      ],
    },
    {
      id: "02",
      title: "EKSTRAKSI MASA DEPAN",
      japanese: "未来の抽出技術",
      icon: Flame,
      subtitle: "Presisi Suhu & Tekanan Berbasis IoT",
      desc: "Menggabungkan seni baristisme tradisional dengan mesin penyeduh generasi baru. Kami mengontrol suhu hingga 0.1°C dan rasio ekstraksi secara otomatis untuk menjamin konsistensi di setiap gerai.",
      stats: [
        { label: "Akurasi Suhu", value: "±0.1°C" },
        { label: "Pressure Curve", value: "9.2 Bar Dynamic" },
        { label: "Extraction Time", value: "28 Detik Optimum" },
      ],
    },
    {
      id: "03",
      title: "MICRO-BATCH ROASTING",
      japanese: "マイクロロースト",
      icon: ShieldCheck,
      subtitle: "Profil Sangrai Terbuka & Terukur",
      desc: "Biji kopi disangrai dalam kelompok kecil (micro-batch) di fasilitas roastery terpusat kami. Setiap profil sangrai dipantau dengan instrumen spektrometri untuk warna dan tingkat karamelisasi yang presisi.",
      stats: [
        { label: "Batch Size", value: "15 KG / Cycle" },
        { label: "Degassing Standard", value: "72 Jam Room Temp" },
        { label: "Moisture Index", value: "11.2% Controlled" },
      ],
    },
    {
      id: "04",
      title: "SUSTAINABILITY & DIGNITY",
      japanese: "持続可能性と未来",
      icon: HeartHandshake,
      subtitle: "Pemberdayaan Petani & Kemasan Ramah Lingkungan",
      desc: "Visi Neo-Mirai adalah keberlanjutan. Kami beralih ke cup biodegradable berbahan dasar serat jagung dan menginvestasikan sebagian keuntungan untuk fasilitas sanitasi & sekolah anak petani kopi.",
      stats: [
        { label: "Eco-Cup Transition", value: "85% Deployed" },
        { label: "Community Fund", value: "Rp 2.5B / Year" },
        { label: "Carbon Offset", value: "-30% Neutralized" },
      ],
    },
  ];

  const currentPillar = storyPillars[activePillar];
  const IconComponent = currentPillar.icon;

  return (
    <section id="story" className="py-24 bg-[#090a0f] border-b border-white/10 relative overflow-hidden">
      {/* Background Japanese typography element */}
      <div className="absolute right-4 top-10 text-[120px] font-black text-white/[0.02] pointer-events-none select-none font-mono">
        物語
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase mb-2">
              02 // BRAND STORY & PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
              REVOLUSI RASA & <span className="text-gradient-red">FILOSOFI</span>
            </h2>
          </div>
          <p className="text-neutral-400 font-mono text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            Menghubungkan masa lalu cita rasa Nusantara dengan teknologi modern yang humanis.
          </p>
        </div>

        {/* Story Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Selector List (4 columns) */}
          <div className="lg:col-span-4 space-y-3">
            {storyPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 font-mono ${
                  activePillar === idx
                    ? "bg-red-950/40 border-red-500 text-white shadow-lg shadow-red-950/40"
                    : "bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-red-500 font-bold tracking-widest">{pillar.id}</span>
                  <span className="text-[10px] text-neutral-500">{pillar.japanese}</span>
                </div>
                <div className="font-sans font-bold text-sm tracking-wide text-white">{pillar.title}</div>
                <div className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{pillar.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Active Pillar Highlight Card (8 columns) */}
          <div className="lg:col-span-8">
            <div className="bg-[#121420] border border-neutral-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              <div className="flex items-center gap-3 text-red-500 font-mono text-xs tracking-widest mb-6">
                <IconComponent className="w-5 h-5 text-red-500" />
                <span>PILLAR {currentPillar.id} // {currentPillar.japanese}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mb-2">
                {currentPillar.title}
              </h3>
              <p className="text-red-400 font-mono text-xs mb-6 tracking-wide">
                {currentPillar.subtitle}
              </p>

              <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
                {currentPillar.desc}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
                {currentPillar.stats.map((stat, i) => (
                  <div key={i} className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800/80">
                    <p className="text-xs font-mono text-neutral-400 mb-1 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-base font-bold text-amber-400 font-mono">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Bottom detail badge */}
              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 p-3 rounded-lg">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>VERIFIED STANDARDS: Meets Indonesian Specialty Coffee Association (SCAI) benchmarks.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
