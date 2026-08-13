"use client";

export default function BrandStory() {
  const storyPhases = [
    {
      phase: "Phase 01",
      date: "2017.08",
      title: "First Kopi Susu Kekinian",
      desc: "Kopi Kenangan berdiri membawa mimpi menyajikan kopi berkualitas tinggi berlandaskan bahan lokal terbaik.",
    },
    {
      phase: "Phase 02",
      date: "2020.10",
      title: "MUI Halal Certification",
      desc: "Menjadi rantai kopi grab-and-go Kopi Susu Kekinian pertama yang memperoleh Sertifikasi Halal dari Majelis Ulama Indonesia.",
    },
    {
      phase: "Phase 03",
      date: "2025.11",
      title: "World Branding Awards Winner",
      desc: "Dinobatkan sebagai pemenang Brand of The Year kategori Café Chain dari Indonesia di ajang World Branding Awards.",
    },
  ];

  return (
    <section
      id="story"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#c8c0b5] overflow-hidden lg:h-[clamp(23.1rem,43vw,38.7rem)]"
    >
      {/* Agenda/Story Left Dark Panel (5 columns on LG) */}
      <div className="lg:col-span-5 bg-[#12131a] text-[#fcfbfa] p-[clamp(1.5rem,2.5vw,2.5rem)] relative overflow-hidden flex flex-col justify-between">
        {/* Decorative Golden Sun disk overlay */}
        <div
          className="absolute -right-32 top-0 z-0 w-80 h-80 rounded-full opacity-80 pointer-events-none mix-blend-multiply"
          style={{
            background: "linear-gradient(180deg, #cfa869, #c82a2b)",
          }}
        ></div>

        <div className="relative z-10 space-y-6">
          <div>
            <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-none uppercase text-[#fcfbfa] mb-2">
              COFFEE JOURNEY
            </p>
            <h2 className="text-[1.1rem] font-serif text-[#cfa869] font-normal leading-snug">
              Delivering on Our Promise: Harvest, Tasting, Roasting & Local Producers
            </h2>
          </div>

          {/* Timeline List matching agenda-days */}
          <ol className="space-y-6 font-mono border-l border-[#cfa869]/40 pl-4 py-2">
            {storyPhases.map((p, idx) => (
              <li key={idx} className="relative group">
                {/* Timeline Circle Bullet */}
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-[#cfa869] bg-[#12131a] group-hover:bg-[#c82a2b] transition-colors"></div>

                <div className="flex items-baseline justify-between text-[11px] text-[#c82a2b] font-bold uppercase mb-1">
                  <span>{p.phase}</span>
                  <span className="text-[#fcfbfa] font-normal">{p.date}</span>
                </div>
                <h3 className="text-xs font-bold text-[#cfa869] font-sans mb-1">
                  {p.title}
                </h3>
                <p className="text-[11px] text-[#dbd5cd]/80 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Action Link */}
        <div className="relative z-10 pt-6">
          <a href="#catalog" className="ticket-pill">
            <span>LEARN MORE ABOUT US</span>
            <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
              <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Agenda/Story Right Art Image (7 columns on LG) */}
      <figure className="lg:col-span-7 relative m-0 p-0 min-h-[300px] lg:min-h-full bg-[#eae5de] overflow-hidden">
        <img
          src="/assets/coffee-journey.webp"
          alt="Kopi Kenangan Coffee Journey"
          className="w-full h-full object-cover mix-blend-multiply filter saturate-[1.02] contrast-[1.05]"
        />
        <figcaption
          className="absolute left-8 top-12 text-[#4a453f] font-serif text-[clamp(0.9rem,1.4vw,1.1rem)] max-w-[280px]"
          style={{ writingMode: "vertical-rl" }}
        >
          QUALITY COFFEE MADE WITH FRESH LOCAL INGREDIENTS.
        </figcaption>
      </figure>
    </section>
  );
}
