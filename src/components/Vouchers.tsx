"use client";

export default function Vouchers() {
  const passes = [
    {
      title: "Daily Coffee Pass",
      desc: "1x Regular Cup setiap hari selama 30 hari.",
      price: "Rp 199,000",
    },
    {
      title: "Specialty Oatside Pass",
      desc: "Akses penuh ke semua menu Oatside Series.",
      price: "Rp 249,000",
    },
    {
      title: "Masterclass Supporter",
      desc: "Sesi cupping bersama Roaster Master + Merchandise.",
      price: "Rp 499,000",
    },
    {
      title: "Corporate Group",
      desc: "Untuk lisensi langganan kantor / tim 10+ orang.",
      price: "Contact Us",
    },
  ];

  return (
    <section
      id="vouchers"
      className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-16 px-4 sm:px-8 border-b border-[#c8c0b5] bg-[#f4f0eb] overflow-hidden"
    >
      {/* Pine Tree Image on Left Background */}
      <img
        src="/assets/pine-ticket.png"
        alt="Pine Decoration"
        className="absolute -left-16 -top-12 w-96 pointer-events-none opacity-40 mix-blend-multiply"
      />

      {/* Heading (3 columns) */}
      <div className="md:col-span-3 relative z-10 space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#c82a2b] font-bold">
          PASSES & VOUCHERS
        </p>
        <h2 className="text-2xl sm:text-3xl font-light font-display text-[#1f1d1a]">
          Choose Your Experience
        </h2>
      </div>

      {/* 4 Ticket Cards Grid (6 columns) */}
      <div className="md:col-span-6 relative z-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#c8c0b5]">
        {passes.map((pass, idx) => (
          <article key={idx} className="px-3 py-2 flex flex-col justify-between items-center text-center space-y-3">
            <div className="w-2.5 h-2.5 rounded-full border border-[#b38b4d] bg-[#f4f0eb]"></div>
            <h3 className="text-xs font-bold font-mono text-[#1f1d1a] uppercase">{pass.title}</h3>
            <p className="text-[10px] text-[#4a453f] font-serif leading-tight">{pass.desc}</p>
            <strong className="text-xs font-serif font-bold text-[#c82a2b]">{pass.price}</strong>
            <button
              onClick={() => alert(`Memilih paket: ${pass.title}`)}
              className="w-7 h-7 rounded-full bg-[#1f1d1a] hover:bg-[#c82a2b] text-white flex items-center justify-center font-mono text-xs transition-colors"
            >
              →
            </button>
          </article>
        ))}
      </div>

      {/* Circular Ticket Seal Badge (3 columns) */}
      <div className="md:col-span-3 relative z-10 flex justify-center">
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#c82a2b] to-[#a51d1e] text-white flex flex-col items-center justify-center p-4 text-center font-mono text-[11px] uppercase font-bold tracking-widest border-2 border-[#cfa869] shadow-lg">
          <span>GET YOUR</span>
          <span>KENANGAN PASS</span>
          <a
            href="#app"
            className="mt-2 w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#c82a2b] transition-colors"
          >
            →
          </a>
        </div>
      </div>
    </section>
  );
}
