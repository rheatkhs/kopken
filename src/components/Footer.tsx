"use client";

import { Coffee, Send, Heart } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#050609] border-t border-white/10 text-neutral-400 font-mono text-xs">
      {/* Top Banner Ticker */}
      <div className="border-b border-neutral-900 py-4 overflow-hidden bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[10px] tracking-widest text-neutral-500">
          <span>KOPI KENANGAN // NEO-MIRAI SYSTEM ARCHITECTURE</span>
          <span>EST. 2017 - BEYOND 2026</span>
          <span className="hidden sm:inline">INDONESIA TO THE WORLD</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand info (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-mono">
                KOPI KENANGAN
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed font-sans">
              Pelopor jaringan kedai kopi retail dengan pertumbuhan tercepat di Indonesia. Menghadirkan kopi segar berkualitas tinggi dengan harga yang terjangkau.
            </p>
            <p className="text-[10px] text-neutral-500">
              ネオ未来 // THE NEXT ERA OF INDONESIAN BEVERAGES
            </p>
          </div>

          {/* Quick links (4 columns) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-xs">NAVIGATION</h4>
              <ul className="space-y-2.5">
                <li><a href="#hero" className="hover:text-red-400 transition-colors">01. Overview</a></li>
                <li><a href="#story" className="hover:text-red-400 transition-colors">02. Story</a></li>
                <li><a href="#catalog" className="hover:text-red-400 transition-colors">03. Catalog</a></li>
                <li><a href="#app" className="hover:text-red-400 transition-colors">04. Loyalty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-xs">LOCATIONS</h4>
              <ul className="space-y-2.5">
                <li><a href="#stores" className="hover:text-red-400 transition-colors">Jakarta Flagship</a></li>
                <li><a href="#stores" className="hover:text-red-400 transition-colors">Bandung Dago</a></li>
                <li><a href="#stores" className="hover:text-red-400 transition-colors">Surabaya Hub</a></li>
                <li><a href="#stores" className="hover:text-red-400 transition-colors">Bali Canggu</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">NEO NEWSLETTER</h4>
            <p className="text-neutral-400 text-xs font-sans">
              Dapatkan berita rilis menu edisi terbatas dan promo eksklusif langsung di email Anda.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-900 text-emerald-400 p-3 rounded text-xs">
                ✓ Berhasil terdaftar dalam jaringan Neo-Mirai!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded font-bold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-500 gap-4">
          <p>© 2026 PT Kopi Kenangan Indonesia. All rights reserved.</p>
          <p className="flex items-center gap-1">
            BUILT WITH <Heart className="w-3 h-3 text-red-500 fill-current" /> USING NEXT.JS & BUN
          </p>
        </div>
      </div>
    </footer>
  );
}
