"use client";

import { useState } from "react";
import { Coffee, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090a0f]/80 backdrop-blur-md border-b border-white/10">
      {/* Top Banner Ticker */}
      <div className="bg-red-950/40 border-b border-red-900/30 text-xs font-mono py-1.5 px-4 overflow-hidden whitespace-nowrap text-red-300 flex justify-between items-center">
        <div className="flex items-center gap-6 animate-pulse">
          <span className="flex items-center gap-1.5 font-bold tracking-widest text-red-400">
            <Sparkles className="w-3 h-3 text-amber-400" /> NEO-MIRAI BATCH #2026
          </span>
          <span className="text-neutral-400">|</span>
          <span>ROASTING TEMP: 204.5°C</span>
          <span className="text-neutral-400">|</span>
          <span>100% INDONESIAN ARABICA & ROBUSTA SELECTION</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-neutral-400 text-[11px]">
          <span>JAKARTA / BANDUNG / SURABAYA / BALI</span>
          <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
            SYSTEM ONLINE
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/30 border border-red-400/30">
              <Coffee className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white font-mono">
                  KOPI KENANGAN
                </span>
                <span className="text-xs font-mono font-bold bg-red-600/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30">
                  ネオ未来
                </span>
              </div>
              <p className="text-[11px] font-mono text-neutral-400 tracking-wider">
                MEMORIES IN EVERY CUP // EST. 2017
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-mono tracking-wide">
            <a href="#hero" className="text-neutral-300 hover:text-red-400 transition-colors">
              <span className="text-red-500 text-xs mr-1">01.</span>OVERVIEW
            </a>
            <a href="#story" className="text-neutral-300 hover:text-red-400 transition-colors">
              <span className="text-red-500 text-xs mr-1">02.</span>STORY
            </a>
            <a href="#catalog" className="text-neutral-300 hover:text-red-400 transition-colors">
              <span className="text-red-500 text-xs mr-1">03.</span>CATALOG
            </a>
            <a href="#app" className="text-neutral-300 hover:text-red-400 transition-colors">
              <span className="text-red-500 text-xs mr-1">04.</span>LOYALTY
            </a>
            <a href="#stores" className="text-neutral-300 hover:text-red-400 transition-colors">
              <span className="text-red-500 text-xs mr-1">05.</span>LOCATOR
            </a>
            <a href="#testimonials" className="text-neutral-300 hover:text-red-400 transition-colors">
              <span className="text-red-500 text-xs mr-1">06.</span>VOICES
            </a>
          </nav>

          {/* CTA Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#app"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs px-5 py-2.5 rounded-lg font-semibold tracking-wider transition-all duration-300 shadow-md shadow-red-950/50 border border-red-400/30"
            >
              <span>ORDER VIA APP</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0c0e17] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 font-mono text-sm">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-red-400"
          >
            01. OVERVIEW
          </a>
          <a
            href="#story"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-red-400"
          >
            02. STORY
          </a>
          <a
            href="#catalog"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-red-400"
          >
            03. CATALOG
          </a>
          <a
            href="#app"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-red-400"
          >
            04. LOYALTY
          </a>
          <a
            href="#stores"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-red-400"
          >
            05. LOCATOR
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-red-400"
          >
            06. VOICES
          </a>
          <div className="pt-2">
            <a
              href="#app"
              onClick={() => setIsOpen(false)}
              className="w-full justify-center flex items-center gap-2 bg-red-600 text-white py-2.5 rounded font-bold text-xs tracking-wider"
            >
              ORDER VIA APP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
