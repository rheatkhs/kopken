"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f4f0eb] border-b border-[#c8c0b5]/50 shadow-sm"
          : "bg-gradient-to-b from-[#f4f0eb]/95 via-[#f4f0eb]/70 to-transparent"
      }`}
      style={{ minHeight: "74px" }}
    >
      {/* Brand Lockup */}
      <a href="#" className="inline-flex items-center gap-2.5 group">
        <img
          src="/favicon.ico"
          alt="Kopi Kenangan Logo"
          className="w-9 h-9 group-hover:scale-105 transition-transform"
        />
        <div className="grid gap-0.5 font-mono text-[12px] leading-none tracking-wider text-[#1f1d1a] font-bold uppercase">
          <span>KOPI</span>
          <span>KENANGAN</span>
        </div>
      </a>

      {/* Primary Nav */}
      <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-[#4a453f]">
        <a href="#hero" className="hover:text-[#1f1d1a] transition-colors py-2 relative group">
          Overview
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c82a2b] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
        <a href="#story" className="hover:text-[#1f1d1a] transition-colors py-2 relative group">
          Story
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c82a2b] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
        <a href="#catalog" className="hover:text-[#1f1d1a] transition-colors py-2 relative group">
          Catalog
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c82a2b] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
        <a href="#app" className="hover:text-[#1f1d1a] transition-colors py-2 relative group">
          App
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c82a2b] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
        <a href="#stores" className="hover:text-[#1f1d1a] transition-colors py-2 relative group">
          Stores
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c82a2b] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
        <a href="#testimonials" className="hover:text-[#1f1d1a] transition-colors py-2 relative group">
          Reviews
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c82a2b] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
      </nav>

      {/* Ticket Pill CTA */}
      <div className="flex items-center gap-3">
        <a href="#app" className="ticket-pill">
          <span>GET APP ORDER</span>
          <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
            <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1f1d1a] focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#f4f0eb] border-b border-[#c8c0b5] p-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest text-[#1f1d1a] shadow-lg">
          <a href="#hero" onClick={() => setIsOpen(false)}>Overview</a>
          <a href="#story" onClick={() => setIsOpen(false)}>Story</a>
          <a href="#catalog" onClick={() => setIsOpen(false)}>Catalog</a>
          <a href="#app" onClick={() => setIsOpen(false)}>App</a>
          <a href="#stores" onClick={() => setIsOpen(false)}>Stores</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</a>
        </div>
      )}
    </header>
  );
}
