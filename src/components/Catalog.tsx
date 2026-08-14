"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Catalog({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [sizeMap, setSizeMap] = useState<Record<number, "Regular" | "Large">>({});

  const categories = ["ALL", "COFFEE", "NON-COFFEE", "BAKERY & FOOD"];

  const products = [
    {
      id: 1,
      name: "Kopi Kenangan Mantan",
      japanese: "元カレの思い出",
      category: "COFFEE",
      desc: "Perpaduan kopi espresso dan susu dengan manis gula aren asli Indonesia yang lembut dan seimbang.",
      price: { Regular: 22000, Large: 26000 },
      badge: "BEST SELLER",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/kopi-kenangan-mantan.png",
    },
    {
      id: 2,
      name: "Creamy Aren Latte",
      japanese: "クリーミーアレン",
      category: "COFFEE",
      desc: "Perpaduan espresso, susu creamy dan gula aren asli yang pas untuk penikmat kopi yang menyukai kelembutan ekstra.",
      price: { Regular: 24000, Large: 28000 },
      badge: "CREAMY FAV",
      notes: { sweetness: 4, intensity: 2, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/creamy-aren-latte.png",
    },
    {
      id: 3,
      name: "Kopi Susu Black Aren",
      japanese: "ブラックアレン",
      category: "COFFEE",
      desc: "Racikan kopi susu premium dengan kemewahan rasa gula aren yang lebih pekat, kuat, dan nikmat.",
      price: { Regular: 23000, Large: 27000 },
      badge: "INTENSE PICK",
      notes: { sweetness: 3, intensity: 4, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/kopi-susu-black-aren.png",
    },
    {
      id: 4,
      name: "Butterscotch Aren Latte",
      japanese: "バタースコッチアレン",
      category: "COFFEE",
      desc: "Perpaduan susu, espresso, sea salt, gula aren asli, dan sirup mentega butterscotch yang lezat.",
      price: { Regular: 22000, Large: 26000 },
      badge: "SIGNATURE",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/butterscotch-aren-latte.png",
    },
    {
      id: 5,
      name: "Butterscotch Sea Salt Latte",
      japanese: "シーソルトラテ",
      category: "COFFEE",
      desc: "Perpaduan susu, espresso, sea salt, dan sirup butterscotch premium dengan topping Sea Salt Macchiato Cream.",
      price: { Regular: 27000, Large: 31000 },
      badge: "PREMIUM SELECTION",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/butterscotch-sea-salt-latte.png",
    },
    {
      id: 6,
      name: "Caramel Macchiato",
      japanese: "キャラメルマキアート",
      category: "COFFEE",
      desc: "Kopi espresso dan susu segar dengan lapisan sirup karamel gurih manis yang melimpah dan creamy.",
      price: { Regular: 30000, Large: 34000 },
      badge: "POPULAR",
      notes: { sweetness: 5, intensity: 3, acidity: 2, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/caramel-macchiato.png",
    },
    {
      id: 7,
      name: "Avocado Coffee",
      japanese: "アボカドコーヒー",
      category: "COFFEE",
      desc: "Perpaduan alpukat mentega segar yang creamy dengan espresso ganda untuk rasa manis lembut yang menyegarkan.",
      price: { Regular: 34000, Large: 38000 },
      badge: "CREAMY EXTRACT",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "High" },
      image: "https://kopikenangan.menu-kopi.id/img/avocado-coffee.png",
    },
    {
      id: 8,
      name: "Oatside Kopi Kenangan Mantan",
      japanese: "オーツサイド元カレ",
      category: "COFFEE",
      desc: "Perpaduan kopi espresso mantap dengan susu Oatside oat milk yang creamy dan gula aren pilihan.",
      price: { Regular: 25000, Large: 29000 },
      badge: "OATSIDE SERIES",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/oatside-kopi-kenangan-mantan.png",
    },
    {
      id: 9,
      name: "Oatside Latte",
      japanese: "オーツサイドラテ",
      category: "COFFEE",
      desc: "Espresso premium berpadu susu Oatside oat milk untuk tekstur kopi yang sangat lembut dan ringan.",
      price: { Regular: 27000, Large: 31000 },
      badge: "HEALTHY CHICE",
      notes: { sweetness: 2, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/oatside-latte.png",
    },
    {
      id: 10,
      name: "Café Malt Latte",
      japanese: "カフェモルト",
      category: "COFFEE",
      desc: "Latte espresso dengan campuran susu Oatside dan aroma malt hazelnut panggang yang harum.",
      price: { Regular: 26000, Large: 30000 },
      badge: "NEW FAVORITE",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/cafe-malt-latte.png",
    },
    {
      id: 11,
      name: "Spanish Latte",
      japanese: "スパニッシュラテ",
      category: "COFFEE",
      desc: "Perpaduan susu segar pilihan, double shot espresso, dan susu kental manis ala Spanyol.",
      price: { Regular: 21000, Large: 25000 },
      badge: "SWEET SPOT",
      notes: { sweetness: 4, intensity: 3, acidity: 1, caffeine: "High" },
      image: "https://kopikenangan.menu-kopi.id/img/spanish-latte.png",
    },
    {
      id: 12,
      name: "Kopi Kenangan Mantan Frappe",
      japanese: "フッラペ元カレ",
      category: "COFFEE",
      desc: "Frappe kopi susu gula aren yang di-blend halus dengan rasa manis seimbang dan topping whipped cream lembut.",
      price: { Regular: 31000, Large: 35000 },
      badge: "ICE BLENDED",
      notes: { sweetness: 5, intensity: 2, acidity: 1, caffeine: "Medium" },
      image: "https://kopikenangan.menu-kopi.id/img/kopi-kenangan-mantan-frappe.png",
    },
    {
      id: 13,
      name: "Dutch Chocolate",
      japanese: "ダッチチョコ",
      category: "NON-COFFEE",
      desc: "Perpaduan cokelat asli Belanda yang kaya rasa dengan creamy-nya susu segar berkualitas tinggi.",
      price: { Regular: 26000, Large: 30000 },
      badge: "RICH CHOCO",
      notes: { sweetness: 4, intensity: 1, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/dutch-chocolate.png",
    },
    {
      id: 14,
      name: "Matcha Latte",
      japanese: "抹茶ラテ",
      category: "NON-COFFEE",
      desc: "Perpaduan fresh milk segar dengan bubuk matcha berkualitas tinggi khas Kyoto Jepang.",
      price: { Regular: 27000, Large: 31000 },
      badge: "AUTHENTIC",
      notes: { sweetness: 3, intensity: 1, acidity: 0, caffeine: "Low" },
      image: "https://kopikenangan.menu-kopi.id/img/matcha-latte.png",
    },
    {
      id: 15,
      name: "Oatside Matcha Latte",
      japanese: "オーツサイド抹茶",
      category: "NON-COFFEE",
      desc: "Matcha latte premium dipadukan susu Oatside oat milk menghasilkan rasa gurih nabati yang lembut.",
      price: { Regular: 27000, Large: 31000 },
      badge: "OATSIDE MATCH",
      notes: { sweetness: 3, intensity: 1, acidity: 0, caffeine: "Low" },
      image: "https://kopikenangan.menu-kopi.id/img/oatside-matcha-latte.png",
    },
    {
      id: 16,
      name: "Avocado Milk",
      japanese: "アボカドミルク",
      category: "NON-COFFEE",
      desc: "Kelembutan buah alpukat matang berpadu dengan susu manis segar untuk menemani petualangan harimu.",
      price: { Regular: 26000, Large: 30000 },
      badge: "SWEET SMOOTH",
      notes: { sweetness: 4, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/avocado-milk.png",
    },
    {
      id: 17,
      name: "Avocado Caramel",
      japanese: "アボカドキャラメル",
      category: "NON-COFFEE",
      desc: "Kelembutan buah alpukat dipadu dengan saus caramel gurih manis di dalam minumanmu.",
      price: { Regular: 30000, Large: 34000 },
      badge: "DESSERT DRINK",
      notes: { sweetness: 5, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/avocado-caramel.png",
    },
    {
      id: 18,
      name: "Milo Dinosaurus",
      japanese: "ミロダイナソー",
      category: "NON-COFFEE",
      desc: "Minuman cokelat Milo pekat dingin dengan taburan bubuk Milo melimpah di atasnya.",
      price: { Regular: 23000, Large: 27000 },
      badge: "FAVORITE CHILD",
      notes: { sweetness: 5, intensity: 1, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/milo-dinosaurus.png",
    },
    {
      id: 19,
      name: "Oreo Shake",
      japanese: "オreoシェイク",
      category: "NON-COFFEE",
      desc: "Minuman susu vanilla premium di-blend dengan remahan biskuit Oreo renyah melimpah.",
      price: { Regular: 26000, Large: 30000 },
      badge: "CREAMY CRUNCH",
      notes: { sweetness: 5, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/oreo-shake.png",
    },
    {
      id: 20,
      name: "Kenangan Milk Tea",
      japanese: "ミルクティー",
      category: "NON-COFFEE",
      desc: "Resep orisinil milk tea khas Kopi Kenangan yang terkenal manis lembut di lidah.",
      price: { Regular: 21000, Large: 25000 },
      badge: "CLASSIC TEA",
      notes: { sweetness: 4, intensity: 1, acidity: 0, caffeine: "Low" },
      image: "https://kopikenangan.menu-kopi.id/img/kenangan-milk-tea.png",
    },
    {
      id: 21,
      name: "Thai Tea",
      japanese: "タイティー",
      category: "NON-COFFEE",
      desc: "Racikan teh Thailand tradisional dipadukan dengan susu manis kental yang legit.",
      price: { Regular: 22000, Large: 26000 },
      badge: "COLD FRESH",
      notes: { sweetness: 4, intensity: 1, acidity: 0, caffeine: "Low" },
      image: "https://kopikenangan.menu-kopi.id/img/thai-tea.png",
    },
    {
      id: 22,
      name: "Susu Grass Jelly",
      japanese: "グラスジェリーミルク",
      category: "NON-COFFEE",
      desc: "Susu segar dengan gula aren asli Indonesia lengkap dengan potongan cincau grass jelly lembut.",
      price: { Regular: 24000, Large: 28000 },
      badge: "TRADITIONAL CULT",
      notes: { sweetness: 4, intensity: 1, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/susu-grass-jelly.png",
    },
    {
      id: 23,
      name: "Butter Croissant",
      japanese: "バタークロワッサン",
      category: "BAKERY & FOOD",
      desc: "Croissant pastry klasik yang renyah di luar dengan aroma mentega butter Prancis yang wangi.",
      price: { Regular: 17000, Large: 17000 },
      badge: "BAKED FRESH",
      notes: { sweetness: 2, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/buttercroissant.png",
    },
    {
      id: 24,
      name: "Chocolate Croissant",
      japanese: "チョコクロワッサン",
      category: "BAKERY & FOOD",
      desc: "Croissant pastry yang renyah dengan lapisan mentega butter dan isian cokelat lumer premium.",
      price: { Regular: 21000, Large: 21000 },
      badge: "BAKED FRESH",
      notes: { sweetness: 4, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/chocolate-croissant.png",
    },
    {
      id: 25,
      name: "Roti Srikaya",
      japanese: "ココナッツジャムパン",
      category: "BAKERY & FOOD",
      desc: "Roti bantal lembut khas Kenangan dengan isian selai srikaya kelapa harum manis.",
      price: { Regular: 17000, Large: 17000 },
      badge: "TRADITIONAL BREAD",
      notes: { sweetness: 4, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/roti-srikaya.png",
    },
    {
      id: 26,
      name: "Roti Keju Manis",
      japanese: "チーズパン",
      category: "BAKERY & FOOD",
      desc: "Roti bantal lembut dengan isian keju cheddar asin gurih dan topping krim mentega manis.",
      price: { Regular: 15000, Large: 15000 },
      badge: "CHEESY BREAD",
      notes: { sweetness: 3, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/roti-keju-manis.png",
    },
    {
      id: 27,
      name: "Roti Coklat Klasik",
      japanese: "クラシックチョコパン",
      category: "BAKERY & FOOD",
      desc: "Roti bantal lembut dengan isian krim coklat manis legit dan taburan coklat meses melimpah.",
      price: { Regular: 12000, Large: 12000 },
      badge: "KIDS FAVORITE",
      notes: { sweetness: 4, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/roti-coklat-klasik.png",
    },
    {
      id: 28,
      name: "Roti Susu Manis",
      japanese: "ミルクパン",
      category: "BAKERY & FOOD",
      desc: "Roti bantal lembut dengan isian krim susu manis gurih dan remahan susu bubuk lezat.",
      price: { Regular: 12000, Large: 12000 },
      badge: "BEST SELLER BREAD",
      notes: { sweetness: 4, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/roti-susu-manis.png",
    },
    {
      id: 29,
      name: "Kenangan Toast Wahyu Sapi",
      japanese: "トースト和牛",
      category: "BAKERY & FOOD",
      desc: "Roti panggang mentega tebal dengan isian daging luncheon sapi gurih, keju slice, saus keju, dan mayonnaise.",
      price: { Regular: 21000, Large: 21000 },
      badge: "SAVORY TOAST",
      notes: { sweetness: 2, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/kenangan-toast-wahyu-sapi.png",
    },
    {
      id: 30,
      name: "Kenangan Toast Adam Ayam",
      japanese: "トーストチキン",
      category: "BAKERY & FOOD",
      desc: "Roti panggang mentega tebal dengan isian daging luncheon ayam, keju slice, topping saus keju, dan mayonnaise.",
      price: { Regular: 21000, Large: 21000 },
      badge: "SAVORY TOAST",
      notes: { sweetness: 2, intensity: 0, acidity: 0, caffeine: "None" },
      image: "https://kopikenangan.menu-kopi.id/img/kenangan-toast-adam-ayam.png",
    },
  ];

  const filteredProducts =
    filter === "ALL"
      ? products
      : products.filter((p) => p.category === filter);

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section id="catalog" className="py-24 border-b border-[#c8c0b5] relative bg-[#fcfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c8c0b5]">
          <div>
            <div className="text-[#c82a2b] font-mono text-[11px] font-bold tracking-widest uppercase mb-2">
              03 // MENU CATALOGUE
            </div>
            {limit ? (
              <h2 className="text-3xl sm:text-5xl font-light font-display uppercase tracking-tight text-[#1f1d1a]">
                FEATURED <span className="text-[#c82a2b]">MENU</span>
              </h2>
            ) : (
              <div className="space-y-1">
                <a href="/" className="text-[10px] font-mono text-[#80766b] hover:text-[#c82a2b] transition-colors block mb-1">
                  &lt; KEMBALI KE BERANDA
                </a>
                <h2 className="text-3xl sm:text-5xl font-light font-display uppercase tracking-tight text-[#1f1d1a]">
                  SEMUA <span className="text-[#c82a2b]">MENU</span>
                </h2>
              </div>
            )}
          </div>
          {!limit && (
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
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((p) => {
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
                    {p.category !== "BAKERY & FOOD" && (
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

        {/* View All Button for Homepage / Limit Mode */}
        {limit && (
          <div className="flex justify-center mt-16">
            <a href="/catalog" className="ticket-pill">
              <span>LIHAT SEMUA MENU / VIEW ALL</span>
              <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
                <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}

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
