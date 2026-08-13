"use client";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="grid grid-cols-1 md:grid-cols-2 border-b border-[#c8c0b5] overflow-hidden"
      style={{ minHeight: "clamp(11.6rem, 21.4vw, 18rem)" }}
    >
      {/* Manifesto Left Panel */}
      <div className="bg-[#b38b4d] text-[#fcfbfa] p-[clamp(2.35rem,4.55vw,4.1rem)] flex flex-col justify-between relative overflow-hidden">
        {/* Fine grid layout look */}
        <div
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1f1d1a 1px, transparent 1px), linear-gradient(0deg, #1f1d1a 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="relative z-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#fcfbfa]/80 mb-2">
            OUR MISSION
          </p>
          <h2 className="text-[clamp(1.5rem,2.2vw,2.5rem)] font-light font-display leading-relaxed text-white">
            “At Kopi Kenangan, our dream is to serve high quality coffee, made with the freshest local ingredients to customers across Indonesia and the rest of the world.”
          </h2>
          <p className="font-mono text-xs text-[#eae5de] mt-4">— Edward Tirtanata, CEO & Founder</p>
        </div>

        <div className="relative z-10 pt-4">
          <a href="#catalog" className="text-action text-[#fcfbfa] hover:text-[#1f1d1a]">
            <span>COFFEE JOURNEY</span>
            <span className="text-action-icon border-white text-white">
              <span className="text-action-arrow">→</span>
            </span>
          </a>
        </div>
      </div>

      {/* Manifesto Right Image Panel */}
      <figure className="m-0 p-0 overflow-hidden h-full min-h-[250px] md:min-h-full">
        <img
          src="/assets/manifesto-fuji-regenerated.webp"
          alt="Coffee Landscape"
          className="w-full h-full object-cover object-center mix-blend-multiply filter saturate-[1.02] contrast-[1.02] scale-[1.015]"
        />
      </figure>
    </section>
  );
}
