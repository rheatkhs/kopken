"use client";

import { useState } from "react";
import { Cpu, Play } from "lucide-react";

export default function Hero() {
  // Interactive recipe simulator
  const [sweetness, setSweetness] = useState(50);
  const [ice, setIce] = useState(50);
  const [milk, setMilk] = useState("Oat Milk");
  const [showConsole, setShowConsole] = useState(false);

  return (
    <section
      id="hero"
      className="relative block overflow-hidden border-b border-[#c8c0b5] pt-[74px]"
      style={{ height: "clamp(32.5rem, 60.3vw, 54.4rem)" }}
    >
      {/* Background Fade Gradient Overlay matching Neo-Mirai ::after */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(244, 240, 235, 0.98) 0%,
            rgba(244, 240, 235, 0.95) 28.8%,
            rgba(244, 240, 235, 0.88) 32.2%,
            rgba(244, 240, 235, 0.34) 39.5%,
            transparent 50%
          )`,
        }}
      ></div>

      {/* Vertical Poem Block */}
      <div className="vertical-poem absolute left-[clamp(1rem,3.2vw,2.8rem)] top-[35%] z-10 hidden sm:flex">
        <span className="font-serif text-[clamp(0.9rem,1.4vw,1.15rem)] text-[#4a453f] font-bold">
          未来を描き、共に創る。
        </span>
        <i className="w-[1px] h-[clamp(5rem,11vw,9rem)] bg-[#c8c0b5]"></i>
        <img
          src="/assets/stamp-seal.svg"
          alt="Stamp Seal"
          className="w-[clamp(1.45rem,2.1vw,1.95rem)] opacity-90"
        />
      </div>

      {/* Hero Copy Content */}
      <div className="relative z-10 w-full max-w-[min(50rem,calc(100%-2rem))] pt-[clamp(2.6rem,4.6vw,4.2rem)] pl-[clamp(2rem,9vw,8rem)] pr-4">
        <h1
          id="hero-title"
          className="font-display font-light text-[clamp(2.8rem,6.8vw,5.5rem)] leading-[0.96] uppercase text-[#1f1d1a] tracking-tight"
        >
          <span className="block">KOPI KENANGAN</span>
          <span className="block text-[#c82a2b] font-normal">NEO-MIRAI</span>
          <span className="block">EDITION</span>
        </h1>

        <p className="font-serif text-[clamp(1.5rem,3.1vw,2.8rem)] leading-none text-[#a51d1e] mt-[0.9rem] font-bold">
          Jakarta 2026
        </p>

        <p className="max-w-[20rem] text-[#4a453f] text-[clamp(0.85rem,1.1vw,1.1rem)] leading-[1.38] mt-[1.05rem] mb-[clamp(2rem,3.8vw,3.8rem)] font-sans">
          Menggabungkan seni baristisme tradisional Indonesia dengan akurasi penyeduhan IoT masa depan.
        </p>

        {/* Action Meta & CTA Buttons */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-[#1f1d1a]">
          <div className="flex flex-col gap-1.5">
            <span>SEJAK // EST. 2017</span>
            <span>BEANS // 100% INDONESIAN SPECIALTY</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowConsole(!showConsole)}
              className="px-5 py-2.5 bg-[#1f1d1a] text-white hover:bg-[#c82a2b] transition-all rounded-full flex items-center gap-2 border border-[#1f1d1a]"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{showConsole ? "CLOSE SIMULATOR" : "OPEN BREW SIMULATOR"}</span>
            </button>
            <a
              href="#catalog"
              className="px-5 py-2.5 border border-[#1f1d1a]/20 hover:border-[#1f1d1a] transition-all rounded-full flex items-center"
            >
              EXPLORE CATALOGUE →
            </a>
          </div>
        </div>
      </div>

      {/* Hero Art Block (Background WebP Image with vertical stamp-tag) */}
      <figure className="absolute inset-0 z-1 w-full h-full m-0 p-0">
        <img
          src="/assets/hero-kopi-kenangan.webp"
          alt="Kopi Kenangan Specialty Coffee"
          className="w-full h-full object-cover object-center mix-blend-multiply opacity-80 saturate-[1.05] contrast-[1.02]"
        />

        {/* Vertical Stamp box on the right of the Hero Art */}
        <div
          className="absolute right-[clamp(1.3rem,3.2vw,3rem)] top-[clamp(4.9rem,8vw,7rem)] z-10 w-[clamp(3.5rem,5.6vw,5.4rem)] h-[clamp(7.2rem,12vw,11.5rem)] border border-[#1f1d1a]/30 bg-[#eae5de]/90 flex flex-col justify-between items-center py-6 px-1.5 shadow-md shadow-neutral-900/10 text-[#1f1d1a] font-mono text-[clamp(0.58rem,0.9vw,0.76rem)] leading-tight text-center"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="tracking-widest">新しい未来の珈琲体験</span>
          <span className="text-[10px] text-[#c82a2b]">BREWING REVOLUTION</span>
        </div>
      </figure>

      {/* Interactive Brew Console Panel Overlay */}
      {showConsole && (
        <div className="absolute top-[20%] right-[10%] z-20 w-full max-w-[380px] bg-[#f4f0eb]/95 border border-[#c8c0b5] rounded-2xl p-6 shadow-2xl backdrop-blur-md font-mono text-xs text-[#1f1d1a]">
          <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#c8c0b5]">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#c82a2b] animate-pulse" />
              <span className="font-bold tracking-wider">BREW CONSOLE v1.0</span>
            </div>
            <button
              onClick={() => setShowConsole(false)}
              className="text-[#4a453f] hover:text-[#1f1d1a] border border-[#c8c0b5] px-2 py-0.5 rounded"
            >
              [X]
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1.5">
                <span>MILK SELECTOR</span>
                <span className="font-bold text-[#c82a2b]">{milk}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Oat Milk", "Fresh Milk", "Soy Milk"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMilk(m)}
                    className={`py-1.5 px-1 text-[10px] rounded border transition-all ${
                      milk === m
                        ? "bg-[#c82a2b]/10 border-[#c82a2b] text-[#c82a2b] font-bold"
                        : "bg-[#eae5de] border-[#c8c0b5] hover:border-neutral-500"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>SWEETNESS</span>
                <span className="font-bold">{sweetness}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="25"
                value={sweetness}
                onChange={(e) => setSweetness(Number(e.target.value))}
                className="w-full h-1 bg-[#eae5de] rounded-lg appearance-none cursor-pointer accent-[#c82a2b]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>ICE LEVEL</span>
                <span className="font-bold">{ice}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="50"
                value={ice}
                onChange={(e) => setIce(Number(e.target.value))}
                className="w-full h-1 bg-[#eae5de] rounded-lg appearance-none cursor-pointer accent-[#c82a2b]"
              />
            </div>

            <div className="bg-[#eae5de] p-3 rounded-lg border border-[#c8c0b5] space-y-1 text-[11px] text-[#4a453f]">
              <div className="flex justify-between">
                <span>Richness Index:</span>
                <span className="text-[#1f1d1a] font-bold">
                  {milk === "Oat Milk" ? "High (Creamy)" : "Medium (Smooth)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Est. Calories:</span>
                <span className="text-[#1f1d1a] font-bold">{130 + sweetness * 1.2} kcal</span>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Resep terkirim!\nSusu: ${milk}\nKemanisan: ${sweetness}%\nEs: ${ice}%\nSedang menyeduh di mesin kopi IoT terdekat.`);
                setShowConsole(false);
              }}
              className="w-full py-2.5 bg-[#c82a2b] hover:bg-[#a51d1e] text-white font-bold rounded tracking-widest transition-all"
            >
              SIMULATE BREW
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
