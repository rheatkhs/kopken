"use client";

import { useState } from "react";
import { Info, Zap, Sparkles } from "lucide-react";

export default function Catalog() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [sizeMap, setSizeMap] = useState<Record<number, "Regular" | "Large">>({});

  const categories = ["ALL", "CLASSICS", "OATSIDE", "COLD BREW", "NON-COFFEE"];

  const products = [
    {
      id: 1,
      name: "KOPI KENANGAN MANTAN",
      japanese: "元カレの思い出",
      category: "CLASSICS",
      desc: "Kopi susu legendaris dengan gula aren murni pilihan. Cita rasa manis lembut berpadu sempurna dengan kehangatan kopi arabika robusta pilihan.",
      price: { Regular: 18000, Large: 22000 },
      badge: "BEST SELLER",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      color: "from-amber-800 to-amber-950",
    },
    {
      id: 2,
      name: "AVOCADO COFFEE OATSIDE",
      japanese: "アボカドオーツ",
      category: "OATSIDE",
      desc: "Perpaduan premium alpukat mentega segar dengan espresso ganda dan susu Oatside oatmilk premium. Creamy, sehat, bertenaga.",
      price: { Regular: 28000, Large: 32000 },
      badge: "HEALTHY PICK",
      notes: { sweetness: 3, intensity: 2, acidity: 1, caffeine: "High" },
      color: "from-emerald-800 to-emerald-950",
    },
    {
      id: 3,
      name: "SALTED CARAMEL MACCHIATO",
      japanese: "塩キャラメル",
      category: "CLASSICS",
      desc: "Susu hangat berpadu sirup karamel gurih asin pilihan, dibubuhi espresso kental dan saus karamel di atasnya.",
      price: { Regular: 24000, Large: 28000 },
      badge: "NEW RECIPE",
      notes: { sweetness: 5, intensity: 3, acidity: 2, caffeine: "Medium" },
      color: "from-yellow-800 to-yellow-950",
    },
    {
      id: 4,
      name: "NITRO COLD BREW TORAJA",
      japanese: "窒素コールドブリュー",
      category: "COLD BREW",
      desc: "Kopi Toraja pilihan yang diekstraksi dingin selama 16 jam, dialiri gas nitrogen untuk menghasilkan tekstur selembut sutra dengan busa tebal alami.",
      price: { Regular: 29000, Large: 34000 },
      badge: "NITRO CHARGED",
      notes: { sweetness: 1, intensity: 5, acidity: 3, caffeine: "Extra High" },
      color: "from-neutral-800 to-neutral-950",
    },
    {
      id: 5,
      name: "MATCHA LATTE PREMIUM",
      japanese: "抹茶ラテ",
      category: "NON-COFFEE",
      desc: "Matcha asli Uji Kyoto dipadukan dengan pemanis alami tebu pilihan dan susu murni segar berstandar tinggi.",
      price: { Regular: 22000, Large: 26000 },
      badge: "AUTHENTIC",
      notes: { sweetness: 3, intensity: 1, acidity: 0, caffeine: "Low" },
      color: "from-green-800 to-green-950",
    },
    {
      id: 6,
      name: "MILO DINOSAURUS",
      japanese: "ミロダイナソー",
      category: "NON-COFFEE",
      desc: "Minuman cokelat Milo favorit sepanjang masa disajikan dingin dengan taburan bubuk Milo melimpah di atasnya.",
      price: { Regular: 20000, Large: 24000 },
      badge: "FAVORITE",
      notes: { sweetness: 5, intensity: 1, acidity: 0, caffeine: "None" },
      color: "from-amber-900 to-stone-900",
    },
  ];

  const filteredProducts =
    filter === "ALL"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section id="catalog" className="py-24 border-b border-[#c8c0b5] relative">
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
                    : "bg-[#eae5de] text-[#4a453f] border border-[#c8c0b5] hover:border-neutral-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => {
            const size = sizeMap[p.id] || "Regular";
            const price = p.price[size];

            return (
              <div
                key={p.id}
                className="bg-[#eae5de]/60 border border-[#c8c0b5] hover:border-[#c82a2b]/70 hover:shadow-md transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Badge & Jp Title */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono font-bold bg-[#fcfbfa] border border-[#c8c0b5] text-[#c82a2b] px-2 py-0.5 rounded">
                      {p.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#80766b]">{p.japanese}</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-bold text-[#1f1d1a] font-sans tracking-wide mb-2 group-hover:text-[#c82a2b] transition-colors">
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#4a453f] font-sans leading-relaxed mb-6 line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                <div>
                  {/* Size Switcher */}
                  <div className="flex items-center justify-between mb-4 bg-[#eae5de] p-1.5 rounded-lg border border-[#c8c0b5]/50">
                    <span className="text-[10px] font-mono text-[#80766b] pl-2">UKURAN</span>
                    <div className="flex gap-1">
                      {(["Regular", "Large"] as const).map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSizeMap((prev) => ({ ...prev, [p.id]: sz }))}
                          className={`text-[9px] font-mono py-1 px-3.5 rounded transition-all uppercase ${
                            size === sz
                              ? "bg-[#c82a2b] text-white font-bold"
                              : "text-[#4a453f] hover:text-[#1f1d1a]"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#c8c0b5]/60">
                    <div>
                      <span className="text-[9px] font-mono text-[#80766b] block">RP / NETT</span>
                      <span className="text-base font-mono font-bold text-[#1f1d1a]">
                        {price.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(p.id)}
                      className="px-4 py-2 bg-[#fcfbfa] hover:bg-[#eae5de] text-[#1f1d1a] text-xs font-mono rounded border border-[#c8c0b5] transition-all flex items-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5" />
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Info Detail */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            {/* Modal Body */}
            {(() => {
              const p = products.find((prod) => prod.id === selectedProduct)!;
              return (
                <div className="bg-[#f4f0eb] border border-[#c8c0b5] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative overflow-hidden font-mono text-[#1f1d1a]">
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
                      className="text-[#4a453f] hover:text-[#1f1d1a] text-xs bg-[#eae5de] border border-[#c8c0b5] px-3 py-1 rounded"
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
                  <div className="bg-[#eae5de] p-4 rounded-xl border border-[#c8c0b5] text-xs space-y-2 mb-6">
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
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        alert(`Pesanan ${p.name} simulasi ditambahkan! Unduh aplikasi Kopi Kenangan untuk memesan produk ini.`);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 py-3 bg-[#c82a2b] hover:bg-[#a51d1e] text-white text-xs font-bold tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all"
                    >
                      <Zap className="w-4 h-4" />
                      ORDER NOW
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
