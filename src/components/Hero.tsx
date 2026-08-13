"use client";

import { useState } from "react";
import { ArrowDown, Cpu, Sparkles, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  // Interactive recipe simulator
  const [sweetness, setSweetness] = useState(50);
  const [ice, setIce] = useState(50);
  const [milk, setMilk] = useState("Oat Milk");

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center bg-grid-pattern bg-radial-glow border-b border-white/10 overflow-hidden">
      {/* Decorative vertical lines and text indicators */}
      <div className="absolute left-6 top-1/4 hidden xl:flex flex-col items-center gap-4 text-[10px] font-mono text-neutral-500 tracking-[0.2em] [writing-mode:vertical-lr]">
        <span>ORIGIN // KINTAMANI - TANA TORAJA - GAYO</span>
        <div className="w-[1px] h-20 bg-neutral-800"></div>
        <span>COORD // 6.2088° S, 106.8456° E</span>
      </div>

      <div className="absolute right-6 top-1/4 hidden xl:flex flex-col items-center gap-4 text-[10px] font-mono text-neutral-500 tracking-[0.2em] [writing-mode:vertical-lr]">
        <span>未来のコーヒー体験</span>
        <div className="w-[1px] h-20 bg-neutral-800"></div>
        <span>NEO-MIRAI COFFEE EXPERIMENT</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy (8 columns on large screens) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-500/30 text-red-400 rounded-full text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Revolutionizing Kopi Indonesia
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-sans uppercase tracking-tighter leading-none text-white">
                SENSASI KOPI
                <br />
                <span className="text-gradient-red">MASA DEPAN</span>
              </h1>
              <p className="text-neutral-400 font-mono text-xs sm:text-sm max-w-xl leading-relaxed">
                [未来の香り] Kopi Kenangan Neo-Mirai menggabungkan cita rasa kopi legendaris Indonesia dengan teknologi presisi masa depan. Setiap cangkir diseduh dengan akurasi termal mikro demi cita rasa yang tak terlupakan.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#catalog"
                className="px-8 py-4 bg-white text-[#090a0f] hover:bg-neutral-200 font-mono font-bold text-sm tracking-wider transition-all duration-300 rounded border border-white hover:shadow-lg hover:shadow-white/10"
              >
                DISCOVER MENU
              </a>
              <a
                href="#story"
                className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-mono text-sm tracking-wider transition-all duration-300 rounded border border-white/20 flex items-center gap-2"
              >
                <span>OUR VISION</span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              </a>
            </div>

            {/* Micro Stats panel */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl font-bold text-white font-mono tracking-tight">100%</p>
                <p className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">Local Beans</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono tracking-tight">0.1s</p>
                <p className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">Brew Precision</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono tracking-tight">1.5M+</p>
                <p className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">Loyal Members</p>
              </div>
            </div>
          </div>

          {/* Interactive Brew Console (5 columns on large screens) */}
          <div className="lg:col-span-5">
            <div className="bg-[#121420]/90 border border-neutral-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-600/10 to-transparent pointer-events-none"></div>

              {/* Console Header */}
              <div className="flex justify-between items-center pb-4 mb-6 border-b border-neutral-800 font-mono">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-red-500 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-widest">BREW CONSOLE V1.0</span>
                </div>
                <span className="text-[10px] text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  STATUS: IDLE
                </span>
              </div>

              {/* Interactive Coffee Customizer */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-neutral-400">MILK BASE</span>
                    <span className="text-amber-400">{milk}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Oat Milk", "Fresh Milk", "Soy Milk"].map((m) => (
                      <button
                        key={m}
                        onClick={() => setMilk(m)}
                        className={`py-2 px-1 text-[11px] font-mono rounded border transition-all ${
                          milk === m
                            ? "bg-red-950/40 border-red-500 text-red-400 font-bold"
                            : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sweetness Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-neutral-400">SWEETNESS LEVEL</span>
                    <span className="text-white font-bold">{sweetness}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="25"
                    value={sweetness}
                    onChange={(e) => setSweetness(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-1">
                    <span>0% (LESS)</span>
                    <span>50% (REGULAR)</span>
                    <span>100% (EXTRA)</span>
                  </div>
                </div>

                {/* Ice Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-neutral-400">ICE LEVEL</span>
                    <span className="text-white font-bold">{ice}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="50"
                    value={ice}
                    onChange={(e) => setIce(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-1">
                    <span>NO ICE</span>
                    <span>MEDIUM</span>
                    <span>MAX ICE</span>
                  </div>
                </div>

                {/* Simulation Output Stats */}
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 font-mono text-xs space-y-2">
                  <div className="text-[10px] text-neutral-500 mb-1 tracking-wider">CALCULATED RECIPE METRICS:</div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Flavor Richness:</span>
                    <span className="text-white font-bold">{milk === "Oat Milk" ? "★ ★ ★ ★ ★ (Premium)" : "★ ★ ★ ★ ☆ (Smooth)"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Estimated Calories:</span>
                    <span className="text-white font-bold">{120 + sweetness * 1.5} kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Caffeine Intensity:</span>
                    <span className="text-white font-bold">165 mg (Optimal)</span>
                  </div>
                </div>

                {/* Simulate Brew Button */}
                <button
                  onClick={() => alert(`Sedang mensimulasikan resep kustom Anda:\n- Susu: ${milk}\n- Kemanisan: ${sweetness}%\n- Es: ${ice}%\nResep dikirim ke antrean mesin espresso IoT!`)}
                  className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs font-bold tracking-widest rounded-lg flex items-center justify-center gap-2 border border-red-500/30 transition-all active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  INITIATE SIMULATION BREW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16">
          <a
            href="#story"
            className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors group font-mono text-[10px] tracking-widest"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-red-500 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
