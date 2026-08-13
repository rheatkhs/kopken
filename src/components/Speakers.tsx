"use client";

import { useState } from "react";

export default function Speakers() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    [
      {
        name: "Yumi Nakamura",
        role: "Head of Sensory & Bean Selection",
        kanji: "中村由美",
        image: "/assets/speaker-yumi-nakamura.webp",
      },
      {
        name: "Keisuke Tanaka",
        role: "Roast Master & Micro-Batch Lead",
        kanji: "田中啓介",
        image: "/assets/speaker-keisuke-tanaka.webp",
      },
      {
        name: "Sophia Lee",
        role: "Extraction Precision Engineer",
        kanji: "李ソフィア",
        image: "/assets/speaker-sophia-lee.webp",
      },
    ],
    [
      {
        name: "Aiko Watanabe",
        role: "Flavor Systems Specialist",
        kanji: "渡辺藍子",
        image: "/assets/speaker-aiko-watanabe.webp",
      },
      {
        name: "Ren Sato",
        role: "Robotics & IoT Brew Architect",
        kanji: "佐藤蓮",
        image: "/assets/speaker-ren-sato.webp",
      },
      {
        name: "Mina Kuroda",
        role: "Aroma & Degassing Curator",
        kanji: "黒田美奈",
        image: "/assets/speaker-mina-kuroda.webp",
      },
    ],
    [
      {
        name: "Hana Mori",
        role: "Sustainability & Eco-Cup Lead",
        kanji: "森花",
        image: "/assets/speaker-hana-mori.webp",
      },
      {
        name: "Daichi Ito",
        role: "Neural Recipe Formulator",
        kanji: "伊藤大地",
        image: "/assets/speaker-daichi-ito.webp",
      },
      {
        name: "Emi Kobayashi",
        role: "Civic Coffee Culture Lead",
        kanji: "小林恵美",
        image: "/assets/speaker-emi-kobayashi.webp",
      },
    ],
    [
      {
        name: "Kenji Arata",
        role: "Fermentation Process Lead",
        kanji: "荒田健司",
        image: "/assets/speaker-kenji-arata.webp",
      },
      {
        name: "Naomi Koga",
        role: "Cold Brew Extraction Specialist",
        kanji: "古賀直美",
        image: "/assets/speaker-naomi-koga.webp",
      },
      {
        name: "Ryo Fujimoto",
        role: "Embodied Coffee Experience Lead",
        kanji: "藤本亮",
        image: "/assets/speaker-ryo-fujimoto.webp",
      },
    ],
  ];

  return (
    <section
      id="speakers"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#c8c0b5] overflow-hidden bg-[#eae5de] lg:h-[clamp(17.9rem,33.4vw,30rem)]"
    >
      {/* Carousel Track (9 columns on LG) */}
      <div className="lg:col-span-9 relative h-full overflow-hidden group">
        <div
          className="flex flex-col h-full transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(0, -${activeSlide * 100}%, 0)` }}
        >
          {slides.map((slideSet, slideIdx) => (
            <div
              key={slideIdx}
              className="h-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-3 divide-x divide-[#c8c0b5]/50"
            >
              {slideSet.map((person, pIdx) => (
                <div
                  key={pIdx}
                  className="relative h-full overflow-hidden bg-[#eae5de] group/person"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/person:scale-105 filter saturate-[1.04] contrast-[1.08]"
                  />
                  {/* Kanji Vertical Overlay */}
                  <div
                    className="absolute top-4 right-4 z-10 text-[10px] font-mono tracking-widest text-[#dbd5cd] drop-shadow-md"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {person.kanji}
                  </div>
                  {/* Speaker Meta Overlay */}
                  <div className="absolute bottom-4 left-4 z-10 font-sans text-white drop-shadow-md">
                    <span className="block text-[#cfa869] font-bold text-sm">
                      {person.name}
                    </span>
                    <small className="block text-[10px] text-[#dbd5cd] font-mono">
                      {person.role}
                    </small>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Carousel Slide Indicators */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeSlide === i
                  ? "bg-[#c82a2b] scale-125"
                  : "bg-[#4a453f]/50 hover:bg-[#1f1d1a]"
              }`}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Intro Sidebar (3 columns on LG) */}
      <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between bg-[#f4f0eb] border-l border-[#c8c0b5]">
        <div className="space-y-3">
          <p className="font-display text-xs font-mono uppercase tracking-widest text-[#c82a2b]">
            BARISTAS & MASTERS
          </p>
          <h2 className="text-xl font-normal font-sans text-[#1f1d1a] leading-tight">
            Pioneers Shaping Future Coffee
          </h2>
        </div>

        <a href="#catalog" className="ticket-pill mt-6">
          <span>VIEW ALL MASTERS</span>
          <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
            <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
