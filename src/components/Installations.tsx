"use client";

export default function Installations() {
  const experiences = [
    {
      title: "Harmonic Extraction Lab",
      category: "Immersive Sensory Environment",
      image: "/assets/install-flux.webp",
    },
    {
      title: "Aroma Compiler",
      category: "Generative Coffee Sculpture",
      image: "/assets/install-dream.webp",
    },
    {
      title: "Echoes of Roastery",
      category: "Acoustic Bean Soundscape",
      image: "/assets/install-echoes.webp",
    },
  ];

  return (
    <section
      id="installations"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#c8c0b5] overflow-hidden bg-[#f4f0eb] px-4 sm:px-8 py-16"
      style={{ minHeight: "clamp(15.3rem, 28.7vw, 25.5rem)" }}
    >
      {/* Intro Sidebar (4 columns on LG) */}
      <div className="lg:col-span-4 flex flex-col justify-between pr-4 pb-8 lg:pb-0">
        <div className="space-y-3">
          <p className="font-display text-xs font-mono uppercase tracking-widest text-[#c82a2b]">
            EXPERIENCES
          </p>
          <h2 className="text-2xl sm:text-3xl font-light font-display text-[#1f1d1a] leading-tight">
            Experiences Beyond the Cup
          </h2>
        </div>

        <a href="#catalog" className="text-action text-[#4a453f] hover:text-[#c82a2b] mt-6">
          <span>EXPLORE EXPERIENCES</span>
          <span className="text-action-icon">
            <span className="text-action-arrow">→</span>
          </span>
        </a>
      </div>

      {/* Installations 3-card Rhythm (8 columns on LG) */}
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <article key={idx} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg border border-[#c8c0b5] bg-[#eae5de] mb-3">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-[0.98] contrast-[1.03]"
              />
            </div>
            <h3 className="text-sm font-bold font-sans text-[#1f1d1a] group-hover:text-[#c82a2b] transition-colors mb-0.5">
              {exp.title}
            </h3>
            <p className="text-xs font-serif text-[#80766b]">{exp.category}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
