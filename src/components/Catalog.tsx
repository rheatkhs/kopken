"use client";

import { useState } from "react";
import Link from "next/link";
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
      desc: "Perpaduan kopi espresso mantap dengan susu Oatside oat milk yang creamy and gula aren pilihan.",
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
      badge: "HEALTHY CHOICE",
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
    <section
      id="catalog"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#c8c0b5] overflow-hidden bg-[#f4f0eb] px-4 sm:px-8 py-16"
    >
      {/* Intro Sidebar (4 columns on LG, placed on the right) */}
      <div className="lg:col-span-4 lg:order-last flex flex-col justify-between lg:pl-6 pb-8 lg:pb-0">
        <div className="space-y-4">
          <p className="font-display text-xs font-mono uppercase tracking-widest text-[#c82a2b]">
            03 // MENU CATALOGUE
          </p>
          <h2 className="text-3xl sm:text-4xl font-light font-display uppercase tracking-tight text-[#1f1d1a]">
            {limit ? (
              <>
                FEATURED <span className="text-[#c82a2b]">MENU</span>
              </>
            ) : (
              <>
                SEMUA <span className="text-[#c82a2b]">MENU</span>
              </>
            )}
          </h2>
          <p className="text-xs text-[#80766b] font-serif leading-relaxed">
            Jelajahi petualangan rasa dari biji kopi arabika robusta pilihan terbaik Indonesia, dipadukan gula aren murni dan bahan berkualitas tinggi.
          </p>

          {/* Category Filter Pills (stacked/vertical on desktop, horizontal on mobile) */}
          {!limit && (
            <div className="flex flex-wrap lg:flex-col lg:items-start gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-[10px] font-mono rounded border transition-all uppercase tracking-wider cursor-pointer ${
                    filter === cat
                      ? "bg-[#c82a2b] text-white font-bold border-[#c82a2b]"
                      : "bg-[#eae5de] text-[#4a453f] border-[#c8c0b5] hover:border-neutral-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View All Button for Homepage / Limit Mode */}
        {limit ? (
          <Link href="/catalog" className="ticket-pill mt-8">
            <span>VIEW ALL</span>
            <svg className="w-5 h-5 p-1 border border-current rounded-full" viewBox="0 0 24 24">
              <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : (
          <Link href="/" className="text-[10px] font-mono text-[#80766b] hover:text-[#c82a2b] transition-colors mt-8 block">
            &lt; KEMBALI KE BERANDA
          </Link>
        )}
      </div>

      {/* Product Grid (8 columns on LG, placed on the left) */}
      <div className="lg:col-span-8 lg:order-first grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              className="group flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedProduct(p.id)}
            >
              <div>
                {/* Image Frame (Experiences/Installations style) */}
                <div className="overflow-hidden rounded-lg border border-[#c8c0b5] bg-[#eae5de] mb-3 aspect-square relative group-hover:border-[#c82a2b] transition-colors">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-[0.98] contrast-[1.03]"
                    loading="lazy"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-[#c82a2b] text-white text-[8px] font-mono font-bold px-1.5 py-0.5 tracking-wider uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Meta Row */}
                <div className="flex justify-between items-center text-[9px] font-mono text-[#80766b] mb-1">
                  <span className="text-[#c82a2b] font-bold uppercase">{p.category}</span>
                  <span>{p.japanese}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold font-sans text-[#1f1d1a] group-hover:text-[#c82a2b] transition-colors leading-tight mb-1">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#80766b] font-serif leading-relaxed mb-3 line-clamp-2">
                  {p.desc}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2.5 border-t border-[#c8c0b5]/50 flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono text-[#80766b] block">IDR / PRICE</span>
                  <span className="text-xs font-mono font-bold text-[#1f1d1a]">
                    {price.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                  {p.category !== "BAKERY & FOOD" && (
                    <div className="flex bg-[#eae5de] p-0.5 rounded border border-[#c8c0b5]">
                      {(["Regular", "Large"] as const).map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSizeMap((prev) => ({ ...prev, [p.id]: sz }))}
                          className={`text-[8px] font-mono py-0.5 px-1.5 transition-all uppercase rounded-sm cursor-pointer ${
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
                    style={{ minHeight: "26px", padding: "0.15rem 0.45rem", fontSize: "9px" }}
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
            onClick={() => setSelectedProduct(null)}
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
                  className="bg-[#f4f0eb] border border-[#c8c0b5] rounded-lg max-w-2xl w-full relative overflow-hidden font-mono text-[#1f1d1a] shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#c8c0b5]">
                    {/* Left: Product Image Panel */}
                    <div className="md:col-span-5 relative bg-[#eae5de] min-h-[220px] md:min-h-full">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover filter saturate-[0.98] contrast-[1.03]"
                      />
                      {p.badge && (
                        <span className="absolute top-4 left-4 bg-[#c82a2b] text-white text-[8px] font-mono font-bold px-1.5 py-0.5 tracking-wider uppercase">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    {/* Right: Spec details */}
                    <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Decorative Header */}
                        <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#c8c0b5]/60">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#b38b4d]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f1d1a]">
                              SPECIFICATION PANEL
                            </span>
                          </div>
                          <button
                            onClick={() => setSelectedProduct(null)}
                            className="text-[#4a453f] hover:text-[#1f1d1a] text-[9px] bg-[#eae5de] border border-[#c8c0b5] px-2 py-0.5 rounded cursor-pointer"
                          >
                            [CLOSE]
                          </button>
                        </div>

                        <h3 className="text-lg font-bold font-sans text-[#1f1d1a] leading-tight mb-1">
                          {p.name}
                        </h3>
                        <p className="text-xs text-[#c82a2b] font-semibold mb-4">
                          {`${p.japanese} // ${p.category}`}
                        </p>

                        <p className="text-xs text-[#80766b] font-serif leading-relaxed mb-6">
                          {p.desc}
                        </p>

                        {/* Flavor Metrics */}
                        <div className="space-y-3 mb-6">
                          <div>
                            <div className="flex justify-between text-[10px] mb-1">
                              <span className="text-[#4a453f]">SWEETNESS</span>
                              <span className="text-[#1f1d1a]">
                                {"★".repeat(p.notes.sweetness)}
                                {"☆".repeat(5 - p.notes.sweetness)}
                              </span>
                            </div>
                            <div className="w-full bg-[#eae5de] h-1 rounded-full overflow-hidden">
                              <div
                                className="bg-[#c82a2b] h-full"
                                style={{ width: `${p.notes.sweetness * 20}%` }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[10px] mb-1">
                              <span className="text-[#4a453f]">INTENSITY</span>
                              <span className="text-[#1f1d1a]">
                                {"★".repeat(p.notes.intensity)}
                                {"☆".repeat(5 - p.notes.intensity)}
                              </span>
                            </div>
                            <div className="w-full bg-[#eae5de] h-1 rounded-full overflow-hidden">
                              <div
                                className="bg-[#c82a2b] h-full"
                                style={{ width: `${p.notes.intensity * 20}%` }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[10px] mb-1">
                              <span className="text-[#4a453f]">ACIDITY</span>
                              <span className="text-[#1f1d1a]">
                                {"★".repeat(p.notes.acidity)}
                                {"☆".repeat(5 - p.notes.acidity)}
                              </span>
                            </div>
                            <div className="w-full bg-[#eae5de] h-1 rounded-full overflow-hidden">
                              <div
                                className="bg-[#c82a2b] h-full"
                                style={{ width: `${p.notes.acidity * 20}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Extra Info Panel */}
                        <div className="bg-[#eae5de] p-3 rounded border border-[#c8c0b5]/60 text-[10px] space-y-1.5 mb-6">
                          <div className="flex justify-between">
                            <span className="text-[#4a453f]">Caffeine:</span>
                            <span className="text-[#c82a2b] font-bold">{p.notes.caffeine}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#4a453f]">Roast Profile:</span>
                            <span className="text-[#1f1d1a]">Medium-Dark Roast</span>
                          </div>
                        </div>
                      </div>

                      {/* Modal CTA */}
                      <div>
                        <button
                          onClick={() => {
                            alert(
                              `Pesanan ${p.name} simulasi ditambahkan! Unduh aplikasi Kopi Kenangan untuk memesan produk ini.`
                            );
                            setSelectedProduct(null);
                          }}
                          className="ticket-pill w-full justify-center"
                        >
                          <span>ORDER NOW</span>
                          <svg
                            className="w-5 h-5 p-1 border border-current rounded-full"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h12m-5-5 5 5-5 5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
