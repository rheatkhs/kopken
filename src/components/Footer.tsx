"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f4f0eb] border-t border-[#c8c0b5] px-4 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[11px] text-[#4a453f]">
      {/* Brand Lockup */}
      <a href="#" className="inline-flex items-center gap-2">
        <img
          src="/favicon.ico"
          alt="Kopi Kenangan Logo"
          className="w-9 h-9"
        />
        <div className="grid gap-0.5 font-mono text-[10px] leading-none tracking-wider text-[#1f1d1a] font-bold uppercase">
          <span>KOPI</span>
          <span>KENANGAN</span>
        </div>
      </a>

      {/* Slogan */}
      <div className="flex flex-col md:flex-row items-center gap-3 text-[#80766b]">
        <p className="font-serif">未来の珈琲、共に創る。</p>
        <span className="hidden md:inline text-[#c8c0b5]">•</span>
        <p className="text-[10px]">© 2026 Kopi Kenangan</p>
      </div>
      <nav className="flex flex-wrap justify-center gap-6 uppercase tracking-wider">
        <a href="#hero" className="hover:text-[#1f1d1a] transition-colors">Overview</a>
        <a href="#story" className="hover:text-[#1f1d1a] transition-colors">Story</a>
        <a href="#catalog" className="hover:text-[#1f1d1a] transition-colors">Catalog</a>
        <a href="#app" className="hover:text-[#1f1d1a] transition-colors">App</a>
        <a href="#stores" className="hover:text-[#1f1d1a] transition-colors">Stores</a>
        <a href="#testimonials" className="hover:text-[#1f1d1a] transition-colors">Reviews</a>
      </nav>

      {/* Language / Platform switcher */}
      <div className="flex items-center gap-1.5 font-bold">
        <a href="#" className="text-[#1f1d1a]">ID</a>
        <span className="text-[#c8c0b5]">/</span>
        <a href="#" className="text-[#80766b] hover:text-[#1f1d1a] transition-colors">EN</a>
        <span className="text-[#c8c0b5]">/</span>
        <a href="#" className="text-[#80766b] hover:text-[#1f1d1a] transition-colors">日本語</a>
      </div>
    </footer>
  );
}
