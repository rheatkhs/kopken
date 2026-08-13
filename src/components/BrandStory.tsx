"use client";

export default function BrandStory() {
  const storyPhases = [
    {
      phase: "Phase 01",
      date: "2017.08",
      title: "Warisan Nusantara",
      desc: "Menghubungkan kopi specialty lokal (Gayo, Mandheling, Toraja) langsung dari petani lokal.",
    },
    {
      phase: "Phase 02",
      date: "2021.05",
      title: "IoT Extraction & Scaling",
      desc: "Digitalisasi jaringan kedai dengan presisi suhu dan rasio ekstraksi terkontrol otomatis.",
    },
    {
      phase: "Phase 03",
      date: "2026.08",
      title: "Neo-Mirai Sustainable Era",
      desc: "Transisi ke eco-cup serat jagung biodegradable dan program kemitraan petani 100% fair trade.",
    },
  ];

  return (
    <section
      id="story"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#c8c0b5] overflow-hidden"
      style={{ minHeight: "clamp(23.1rem, 43vw, 38.7rem)" }}
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
              BRAND STORY
            </p>
            <h2 className="text-[1.1rem] font-serif text-[#cfa869] font-normal leading-snug">
              Perjalanan dari Kedai Lokal Menuju Era Presisi Modern
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
          <a href="#catalog" className="text-action text-[#cfa869] hover:text-white">
            <span>DISCOVER FULL PHILOSOPHY</span>
            <span className="text-action-icon">
              <span className="text-action-arrow">→</span>
            </span>
          </a>
        </div>
      </div>

      {/* Agenda/Story Right Art Image (7 columns on LG) */}
      <figure className="lg:col-span-7 relative m-0 p-0 min-h-[300px] lg:min-h-full bg-[#eae5de] overflow-hidden">
        <img
          src="/assets/agenda-architecture.webp"
          alt="Neo-Mirai Architecture"
          className="w-full h-full object-cover mix-blend-multiply filter saturate-[1.02] contrast-[1.05]"
        />
        <figcaption
          className="absolute left-8 top-12 text-[#4a453f] font-serif text-[clamp(1rem,1.7vw,1.25rem)]"
          style={{ writingMode: "vertical-rl" }}
        >
          創造は、未来をつくる最初の一歩。
        </figcaption>
      </figure>
    </section>
  );
}
