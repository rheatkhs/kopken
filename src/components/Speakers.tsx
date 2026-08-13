"use client";

export default function Speakers() {
  const founders = [
    {
      name: "Edward Tirtanata",
      role: "CEO & Co-Founder",
      label: "FOUNDER",
      image: "/assets/edward.png",
    },
    {
      name: "James Prananto",
      role: "CBO & Co-Founder",
      label: "FOUNDER",
      image: "/assets/speaker-keisuke-tanaka.webp",
    },
    {
      name: "Cynthia Chaerunnisa",
      role: "CMO & Co-Founder",
      label: "FOUNDER",
      image: "/assets/speaker-yumi-nakamura.webp",
    },
  ];

  return (
    <section
      id="speakers"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#c8c0b5] overflow-hidden bg-[#eae5de] lg:h-[clamp(17.9rem, 33.4vw, 30rem)]"
    >
      {/* Founders Track (9 columns on LG) */}
      <div className="lg:col-span-9 h-full overflow-hidden">
        <div className="h-full grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#c8c0b5]/50">
          {founders.map((person, pIdx) => (
            <div
              key={pIdx}
              className="relative h-full overflow-hidden bg-[#eae5de] group"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[1.04] contrast-[1.08]"
              />
              {/* Badge Overlay */}
              <div
                className="absolute top-4 right-4 z-10 text-[10px] font-mono tracking-widest text-[#dbd5cd] drop-shadow-md"
                style={{ writingMode: "vertical-rl" }}
              >
                {person.label}
              </div>
              {/* Profile Meta Overlay */}
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
      </div>

      {/* Intro Sidebar (3 columns on LG) */}
      <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between bg-[#f4f0eb] border-l border-[#c8c0b5]">
        <div className="space-y-3">
          <p className="font-display text-xs font-mono uppercase tracking-widest text-[#c82a2b]">
            LEADERSHIP
          </p>
          <h2 className="text-xl font-normal font-sans text-[#1f1d1a] leading-tight">
            Founders & Leadership Team
          </h2>
        </div>

        <a href="#story" className="ticket-pill mt-6">
          <span>COFFEE JOURNEY</span>
          <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
            <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
