"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative block overflow-hidden border-b border-[#c8c0b5] pt-[74px] pb-16 lg:pb-0 flex flex-col justify-center"
      style={{ minHeight: "clamp(32.5rem, 60.3vw, 54.4rem)" }}
    >
      {/* Background Fade Gradient Overlay */}
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

      {/* Vertical Poem Block with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="vertical-poem absolute left-[clamp(1rem,3.2vw,2.8rem)] top-[35%] z-10 hidden sm:flex"
      >
        <span className="font-serif text-[clamp(0.9rem,1.4vw,1.15rem)] text-[#4a453f] font-bold tracking-widest uppercase">
          COFFEE MEMORIES
        </span>
        <motion.i
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
          className="w-[1px] h-[clamp(5rem,11vw,9rem)] bg-[#c8c0b5] origin-top"
        ></motion.i>
        <img
          src="/assets/stamp-seal.svg"
          alt="Stamp Seal"
          className="w-[clamp(1.45rem,2.1vw,1.95rem)] opacity-90"
        />
      </motion.div>

      {/* Hero Copy Content with stagger layout */}
      <div className="relative z-10 w-full max-w-[min(50rem,calc(100%-2rem))] pt-[clamp(1.5rem,4.6vw,4.2rem)] pl-[clamp(1rem,9vw,8rem)] pr-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-4"
        >
          <h1
            id="hero-title"
            className="font-display font-light text-[clamp(2.4rem,6.8vw,5.5rem)] leading-[0.96] uppercase text-[#1f1d1a] tracking-tight"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="block text-[#c82a2b] font-normal"
            >
              KOPI KENANGAN
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="block text-[0.55em] tracking-wider text-[#4a453f] font-normal mt-2"
            >
              STANDS FOR YOU
            </motion.span>
          </h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="font-serif text-[clamp(1.2rem,3.1vw,2.8rem)] leading-none text-[#a51d1e] mt-[0.9rem] font-bold"
          >
            Brand of The Year
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="max-w-[20rem] text-[#4a453f] text-[clamp(0.85rem,1.1vw,1.1rem)] leading-[1.38] mt-[1.05rem] mb-[clamp(1.5rem,3.8vw,3.8rem)] font-sans"
          >
            Serving high quality coffee, made with the freshest local ingredients to customers across Indonesia and the rest of the world.
          </motion.p>

          {/* Action Meta & CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="flex flex-col items-start gap-6 font-mono text-[11px] uppercase tracking-wider text-[#1f1d1a]"
          >
            <div className="flex flex-col gap-1.5">
              <span>EST. 2017</span>
              <span>100% INDONESIAN FRESH LOCAL INGREDIENTS</span>
            </div>

            <div>
              <a href="#catalog" className="ticket-pill">
                <span>EXPLORE CATALOGUE</span>
                <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
                  <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Art Block with Motion */}
      <figure className="absolute inset-0 z-1 w-full h-full m-0 p-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src="/assets/hero-kopi-kenangan.png"
          alt="Kopi Kenangan Specialty Coffee"
          className="w-full h-full object-cover object-center mix-blend-multiply saturate-[1.05] contrast-[1.02]"
        />

        {/* Vertical Stamp box on the right of the Hero Art - Hidden on Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[clamp(1.3rem,3.2vw,3rem)] top-[clamp(4.9rem,8vw,7rem)] z-10 w-auto h-auto py-8 px-4 border border-[#1f1d1a]/30 bg-[#eae5de]/90 hidden lg:flex flex-col justify-between items-center gap-6 shadow-md shadow-neutral-900/10 text-[#1f1d1a] font-mono text-[clamp(0.58rem,0.9vw,0.76rem)] leading-tight text-center"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="tracking-widest">WORLD BRAND WINNER 2025-2026</span>
          <span className="text-[10px] text-[#c82a2b]">CAFÉ CHAIN CATEGORY</span>
        </motion.div>
      </figure>
    </section>
  );
}
