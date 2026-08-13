"use client";

import { useState } from "react";
import { MapPin, Search, Clock, Navigation, Zap, Phone, Car } from "lucide-react";

export default function StoreLocator() {
  const [selectedCity, setSelectedCity] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = ["ALL", "JAKARTA", "BANDUNG", "SURABAYA", "BALI", "MEDAN"];

  const stores = [
    {
      id: 1,
      name: "KENANGAN NEO-MIRAI FLAGSHIP - SENOPATI",
      city: "JAKARTA",
      address: "Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan",
      hours: "07:00 - 23:00 WIB",
      status: "OPEN",
      queueTime: "3 MINS",
      driveThru: true,
      phone: "+62 21 555 0192",
      coordinates: "6.2341° S, 106.8089° E",
    },
    {
      id: 2,
      name: "KENANGAN CONCEPT STORE - DAGO 360",
      city: "BANDUNG",
      address: "Jl. Ir. H. Juanda No. 120, Dago, Bandung",
      hours: "08:00 - 22:00 WIB",
      status: "OPEN",
      queueTime: "5 MINS",
      driveThru: false,
      phone: "+62 22 420 8910",
      coordinates: "6.8851° S, 107.6136° E",
    },
    {
      id: 3,
      name: "KENANGAN HUB - TUNJUNGAN PLAZA 6",
      city: "SURABAYA",
      address: "Tunjungan Plaza 6 Lt. 2, Jl. Basuki Rahmat, Surabaya",
      hours: "10:00 - 22:00 WIB",
      status: "OPEN",
      queueTime: "2 MINS",
      driveThru: false,
      phone: "+62 31 531 4099",
      coordinates: "7.2625° S, 112.7388° E",
    },
    {
      id: 4,
      name: "KENANGAN COASTAL BOUTIQUE - CANGGU",
      city: "BALI",
      address: "Jl. Batu Bolong No. 45, Canggu, Kuta Utara, Bali",
      hours: "06:30 - 23:30 WITA",
      status: "OPEN",
      queueTime: "4 MINS",
      driveThru: true,
      phone: "+62 361 844 7712",
      coordinates: "8.6514° S, 115.1323° E",
    },
    {
      id: 5,
      name: "KENANGAN EXPRESS - MEDAN CENTER",
      city: "MEDAN",
      address: "Jl. Diponegoro No. 18, Medan Petisah, Medan",
      hours: "07:30 - 21:30 WIB",
      status: "OPEN",
      queueTime: "1 MIN",
      driveThru: true,
      phone: "+62 61 455 9011",
      coordinates: "3.5952° N, 98.6722° E",
    },
    {
      id: 6,
      name: "KENANGAN NEO HUB - CENTRAL PARK",
      city: "JAKARTA",
      address: "Ground Floor, Central Park Mall, Jakarta Barat",
      hours: "10:00 - 22:00 WIB",
      status: "OPEN",
      queueTime: "6 MINS",
      driveThru: false,
      phone: "+62 21 2920 0110",
      coordinates: "6.1774° S, 106.7907° E",
    },
  ];

  const filteredStores = stores.filter((store) => {
    const matchesCity = selectedCity === "ALL" || store.city === selectedCity;
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <section id="stores" className="py-24 bg-grid-pattern border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase mb-2">
              05 // GERAI & STORE LOCATOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
              CARI GERAI <span className="text-gradient-red">TERDEKAT</span>
            </h2>
          </div>
          <p className="text-neutral-400 font-mono text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            Temukan lokasi gerai Kopi Kenangan Neo-Mirai dengan indikator estimasi waktu tunggu real-time.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Search bar */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama gerai, nama jalan, atau area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121420] border border-neutral-800 rounded-xl pl-11 pr-4 py-3 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* City buttons */}
          <div className="md:col-span-6 flex flex-wrap gap-2 items-center">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-2 text-xs font-mono rounded transition-all ${
                  selectedCity === city
                    ? "bg-red-600 text-white font-bold"
                    : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-[#121420]/80 border border-neutral-800 hover:border-red-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm group"
            >
              <div>
                {/* Header status bar */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-900 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    {store.status} NOW
                  </span>

                  <span className="text-[10px] font-mono text-neutral-500">{store.coordinates}</span>
                </div>

                <h3 className="text-base font-bold text-white font-sans mb-2 group-hover:text-red-400 transition-colors">
                  {store.name}
                </h3>

                <p className="text-xs text-neutral-400 font-sans mb-4 flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-900 font-mono text-xs">
                <div className="flex items-center justify-between text-neutral-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    {store.hours}
                  </span>
                  {store.driveThru && (
                    <span className="flex items-center gap-1 text-amber-400 font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/50 text-[10px]">
                      <Car className="w-3 h-3" /> DRIVE-THRU
                    </span>
                  )}
                </div>

                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-900 flex justify-between items-center">
                  <span className="text-[10px] text-neutral-500">ESTIMATED BREW WAIT TIME:</span>
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" />
                    {store.queueTime}
                  </span>
                </div>

                <button
                  onClick={() => alert(`Membuka rute GPS ke: ${store.name}`)}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-mono font-bold rounded border border-neutral-800 hover:border-neutral-700 transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-500" />
                  OPEN IN MAPS / GET DIRECTIONS
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-16 bg-[#121420] rounded-2xl border border-neutral-800 font-mono text-neutral-500">
            [0 GERAI DITEMUKAN UNTUK PENCARIAN TERSERBUT]
          </div>
        )}
      </div>
    </section>
  );
}
