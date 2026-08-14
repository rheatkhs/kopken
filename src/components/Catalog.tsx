"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Catalog() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [sizeMap, setSizeMap] = useState<Record<number, "Regular" | "Large">>({});

  const categories = ["ALL", "COFFEE", "NON-COFFEE", "BAKERY"];

  const products = [
    {
      id: 1,
      name: "KOPI KENANGAN MANTAN",
      japanese: "元カレの思い出",
      category: "COFFEE",
      desc: "Kopi susu legendaris dengan gula aren murni pilihan. Cita rasa manis lembut berpadu sempurna dengan kehangatan kopi arabika robusta pilihan.",
      price: { Regular: 22000, Large: 26000 },
      badge: "BEST SELLER",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://i.postimg.cc/90RKhyxX/image.png",
    },
    {
      id: 2,
      name: "CREAMY AREN LATTE",
      japanese: "クリーミーアレン",
      category: "COFFEE",
      desc: "Es kopi susu dengan cita rasa lebih creamy dan lembut, pas untuk menemani petualangan harimu.",
      price: { Regular: 24000, Large: 28000 },
      badge: "CREAMY FAV",
      notes: { sweetness: 4, intensity: 2, acidity: 1, caffeine: "Medium" },
      image: "https://i.postimg.cc/vTTM613C/image.png",
    },
    {
      id: 3,
      name: "CARAMEL MACCHIATO",
      japanese: "キャラメルマキアート",
      category: "COFFEE",
      desc: "Paduan espresso dengan susu segar dan sirup karamel gurih manis. Cita rasa mewah di setiap tegukan.",
      price: { Regular: 30000, Large: 34000 },
      badge: "PREMIUM SELECTION",
      notes: { sweetness: 5, intensity: 3, acidity: 2, caffeine: "Medium" },
      image: "https://i.postimg.cc/cJ7sqGvk/image.png",
    },
    {
      id: 4,
      name: "CARAMEL LATTE",
      japanese: "キャラメルラテ",
      category: "COFFEE",
      desc: "Espresso premium berpadu susu segar dan saus karamel lezat yang disajikan dingin menyegarkan.",
      price: { Regular: 28000, Large: 32000 },
      badge: "SWEET SPOT",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://i.postimg.cc/nz8Q2J6d/image.png",
    },
    {
      id: 5,
      name: "HAZELNUT LATTE",
      japanese: "ヘーゼルナッツ",
      category: "COFFEE",
      desc: "Kombinasi espresso mantap dengan sirup hazelnut panggang aromatik dan susu segar.",
      price: { Regular: 28000, Large: 32000 },
      badge: "POPULAR",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://i.postimg.cc/c4J6QCvx/image.png",
    },
    {
      id: 6,
      name: "BUTTERSCOTCH SEA SALT LATTE",
      japanese: "シーsoltアレン",
      category: "COFFEE",
      desc: "Kopi susu dengan saus mentega butterscotch dan sentuhan garam laut gurih.",
      price: { Regular: 27000, Large: 31000 },
      badge: "SIGNATURE",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://i.postimg.cc/28vvq3M1/image.png",
    },
    {
      id: 7,
      name: "AMERICANO",
      japanese: "アメリカーノ",
      category: "COFFEE",
      desc: "Espresso ganda klasik dengan air murni, menghasilkan rasa kopi murni yang pekat dan bersih.",
      price: { Regular: 20000, Large: 24000 },
      badge: "CLASSIC BLACK",
      notes: { sweetness: 1, intensity: 4, acidity: 3, caffeine: "High" },
      image: "https://i.postimg.cc/Pqqk7vkJ/image.png",
    },
    {
      id: 8,
      name: "CAPPUCCINO",
      japanese: "カプチーノ",
      category: "COFFEE",
      desc: "Espresso berpadu dengan susu steamed lembut menghasilkan froth tebal khas kopi Italia.",
      price: { Regular: 24000, Large: 28000 },
      badge: "TRADITIONAL",
      notes: { sweetness: 2, intensity: 4, acidity: 2, caffeine: "Medium" },
      image: "https://i.postimg.cc/hvkwPhwL/image.png",
    },
    {
      id: 9,
      name: "DUTCH CHOCOLATE",
      japanese: "ダッチチョコ",
      category: "NON-COFFEE",
      desc: "Minuman cokelat premium khas Belanda yang pekat, manis gurih, dan penuh kehangatan.",
      price: { Regular: 26000, Large: 30000 },
      badge: "RICH & CREAMY",
      notes: { sweetness: 4, intensity: 1, acidity: 0, caffeine: "None" },
      image: "https://i.postimg.cc/FRvYMxDm/image.png",
    },
    {
      id: 10,
      name: "AVOCADO MILK",
      japanese: "アボカドミルク",
      category: "NON-COFFEE",
      desc: "Minuman alpukat segar yang creamy berpadu dengan susu pilihan kualitas tinggi.",
      price: { Regular: 26000, Large: 30000 },
      badge: "FRUITY CHILL",
      notes: { sweetness: 4, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://i.postimg.cc/ZRJq7555/image.png",
    },
    {
      id: 11,
      name: "MATCHA KELAPA",
      japanese: "抹茶ココナッツ",
      category: "NON-COFFEE",
      desc: "Cita rasa matcha khas Jepang dipadukan dengan air kelapa segar yang menyegarkan dahaga.",
      price: { Regular: 24000, Large: 28000 },
      badge: "REFRESHING",
      notes: { sweetness: 3, intensity: 1, acidity: 1, caffeine: "Low" },
      image: "https://i.postimg.cc/HLzmL4TT/image.png",
    },
    {
      id: 12,
      name: "KENANGAN MILK TEA",
      japanese: "ミルクティー",
      category: "NON-COFFEE",
      desc: "Teh susu khas Kenangan dengan racikan daun teh premium berkualitas tinggi.",
      price: { Regular: 21000, Large: 25000 },
      badge: "DAILY MILKTEA",
      notes: { sweetness: 4, intensity: 1, acidity: 0, caffeine: "Low" },
      image: "https://i.postimg.cc/QCHhw9Gh/image.png",
    },
    {
      id: 13,
      name: "OREO SHAKE",
      japanese: "オレオシェイク",
      category: "NON-COFFEE",
      desc: "Blended shake vanilla premium bertabur remah biskuit Oreo renyah melimpah.",
      price: { Regular: 26000, Large: 30000 },
      badge: "KIDS FAVORITE",
      notes: { sweetness: 5, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://i.postimg.cc/tJxC7ZrD/image.png",
    },
    {
      id: 14,
      name: "BUTTER CROISSANT",
      japanese: "クロワッサン",
      category: "BAKERY",
      desc: "Danish pastry mentega berlapis renyah di luar, bertekstur lembut di dalam.",
      price: { Regular: 17000, Large: 17000 },
      badge: "BAKERY FRESH",
      notes: { sweetness: 2, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://i.postimg.cc/Hs16SJGg/image.png",
    },
    {
      id: 15,
      name: "ROTI SRIKAYA",
      japanese: "ココナッツジャムパン",
      category: "BAKERY",
      desc: "Roti lembut khas Kenangan dengan isian selai srikaya kelapa manis harum tradisional.",
      price: { Regular: 17000, Large: 17000 },
      badge: "HERITAGE BREAD",
      notes: { sweetness: 4, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://i.postimg.cc/bYt6HxBg/image.png",
    },
    {
      id: 16,
      name: "ROTI KEJU MANIS",
      japanese: "チーズパン",
      category: "BAKERY",
      desc: "Roti panggang bertekstur empuk diisi dengan keju cheddar manis gurih berlimpah.",
      price: { Regular: 15000, Large: 15000 },
      badge: "CHEESY BREAD",
      notes: { sweetness: 3, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://i.postimg.cc/zG0pX0yz/image.png",
    },
    {
      id: 17,
      name: "CHOCOLATE MILK BUN",
      japanese: "ミルクチョコレート",
      category: "BAKERY",
      desc: "Roti susu khas Jepang bertabur bubuk cokelat pekat dan krim cokelat lumer.",
      price: { Regular: 27000, Large: 27000 },
      badge: "VIRAL BREAD",
      notes: { sweetness: 5, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://i.postimg.cc/v8fz6Q4S/image.png",
    },
  ];

  const filteredProducts =
    filter === "ALL"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section id="catalog" className="py-24 border-b border-[#c8c0b5] relative bg-[#fcfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c8c0b5]">
          <div>
            <div className="text-[#c82a2b] font-mono text-[11px] font-bold tracking-widest uppercase mb-2">
              03 // MENU CATALOGUE
            </div>
            <h2 className="text-3xl sm:text-5xl font-light font-display uppercase tracking-tight text-[#1f1d1a]">
              KATALOG <span className="text-[#c82a2b]">PREMIUM</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[10px] font-mono rounded transition-all uppercase tracking-wider ${
                  filter === cat
                    ? "bg-[#c82a2b] text-white font-bold"
                    : "bg-[#eae5de] text-[#4a453f] border border-[#c8c0b5] hover:border-neutral-500 cursor-pointer"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => {
            const size = sizeMap[p.id] || "Regular";
            const price = p.price[size];

            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between"
              >
                <div>
                  {/* Image Card Frame */}
                  <div className="overflow-hidden rounded-lg border border-[#c8c0b5] bg-[#eae5de] mb-4 aspect-square relative group-hover:border-[#c82a2b] transition-colors">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-[0.98] contrast-[1.03]"
                      loading="lazy"
                    />
                    {p.badge && (
                      <span className="absolute top-3 left-3 bg-[#c82a2b] text-white text-[9px] font-mono font-bold px-2 py-0.5 tracking-wider uppercase">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  {/* Meta Row */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-mono text-[#c82a2b] tracking-wider uppercase font-bold">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#80766b]">{p.japanese}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold font-sans text-[#1f1d1a] group-hover:text-[#c82a2b] transition-colors leading-snug">
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#80766b] font-serif leading-relaxed mt-2 mb-4 line-clamp-2">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom Row Actions */}
                <div className="pt-3 border-t border-[#c8c0b5]/50 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-[#80766b] block">IDR / PRICE</span>
                    <span className="text-base font-mono font-bold text-[#1f1d1a]">
                      {price.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {p.category !== "BAKERY" && (
                      <div className="flex bg-[#eae5de] p-0.5 rounded border border-[#c8c0b5]">
                        {(["Regular", "Large"] as const).map((sz) => (
                          <button
                            key={sz}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSizeMap((prev) => ({ ...prev, [p.id]: sz }));
                            }}
                            className={`text-[9px] font-mono py-1 px-2 transition-all uppercase rounded-sm cursor-pointer ${
                              size === sz
                                ? "bg-[#c82a2b] text-white font-bold"
                                : "text-[#4a453f] hover:text-[#1f1d1a]"
                            }`}
                          >
                            {sz.charAt(0)}
                          </button>
                        ))}
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedProduct(p.id)}
                      className="ticket-pill"
                      style={{ minHeight: "32px", padding: "0.25rem 0.6rem" }}
                    >
                      <span>INFO</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Modal Info Detail with Framer Motion AnimatePresence */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            >
              {/* Modal Body */}
              {(() => {
                const p = products.find((prod) => prod.id === selectedProduct)!;
                return (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-[#f4f0eb] border border-[#c8c0b5] rounded-lg max-w-lg w-full p-6 sm:p-8 relative overflow-hidden font-mono text-[#1f1d1a]"
                  >
                    {/* Decorative Header */}
                    <div className="flex justify-between items-center pb-4 mb-6 border-b border-[#c8c0b5]">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#b38b4d]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1f1d1a]">
                          SPECIFICATION PANEL
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="text-[#4a453f] hover:text-[#1f1d1a] text-xs bg-[#eae5de] border border-[#c8c0b5] px-3 py-1 rounded cursor-pointer"
                      >
                        [CLOSE]
                      </button>
                    </div>

                    <h3 className="text-xl font-bold font-sans text-[#1f1d1a] mb-1">{p.name}</h3>
                    <p className="text-xs text-[#c82a2b] mb-6">{p.japanese} // {p.category}</p>

                    {/* Flavor Metrics */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#4a453f]">SWEETNESS</span>
                          <span className="text-[#1f1d1a]">{"★".repeat(p.notes.sweetness)}{"☆".repeat(5 - p.notes.sweetness)}</span>
                        </div>
                        <div className="w-full bg-[#eae5de] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#c82a2b] h-full" style={{ width: `${p.notes.sweetness * 20}%` }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#4a453f]">INTENSITY</span>
                          <span className="text-[#1f1d1a]">{"★".repeat(p.notes.intensity)}{"☆".repeat(5 - p.notes.intensity)}</span>
                        </div>
                        <div className="w-full bg-[#eae5de] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#c82a2b] h-full" style={{ width: `${p.notes.intensity * 20}%` }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#4a453f]">ACIDITY</span>
                          <span className="text-[#1f1d1a]">{"★".repeat(p.notes.acidity)}{"☆".repeat(5 - p.notes.acidity)}</span>
                        </div>
                        <div className="w-full bg-[#eae5de] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#c82a2b] h-full" style={{ width: `${p.notes.acidity * 20}%` }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Extra Info Panel */}
                    <div className="bg-[#eae5de] p-4 rounded-lg border border-[#c8c0b5] text-xs space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-[#4a453f]">Caffeine Profile:</span>
                        <span className="text-[#c82a2b] font-bold">{p.notes.caffeine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4a453f]">Optimal Temperature:</span>
                        <span className="text-[#1f1d1a]">4.0°C (Chilled) / 65.0°C (Hot)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4a453f]">Roast Profile:</span>
                        <span className="text-[#1f1d1a]">Medium-Dark Roast</span>
                      </div>
                    </div>

                    {/* Modal CTA */}
                    <div>
                      <button
                        onClick={() => {
                          alert(`Pesanan ${p.name} simulasi ditambahkan! Unduh aplikasi Kopi Kenangan untuk memesan produk ini.`);
                          setSelectedProduct(null);
                        }}
                        className="ticket-pill w-full justify-center"
                      >
                        <span>ORDER NOW</span>
                        <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
                          <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
