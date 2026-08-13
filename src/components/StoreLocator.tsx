"use client";

import { useState } from "react";
import { MapPin, Search, Clock, Navigation, Zap, Car } from "lucide-react";

export default function StoreLocator() {
  const [selectedCity, setSelectedCity] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = ["ALL", "JAKARTA", "BANDUNG", "SURABAYA", "BALI", "MEDAN"];

  const stores = [
    {
      id: 1,
      name: "KENANGAN FLAGSHIP STORE - SENOPATI",
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
      name: "KENANGAN HUB - CENTRAL PARK",
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
    <section id="stores" className="py-24 border-b border-[#c8c0b5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c8c0b5]">
          <div>
            <div className="text-[#c82a2b] font-mono text-[11px] font-bold tracking-widest uppercase mb-2">
              05 // GERAI & STORE LOCATOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-light font-display uppercase tracking-tight text-[#1f1d1a]">
              CARI GERAI <span className="text-[#c82a2b]">TERDEKAT</span>
            </h2>
          </div>
          <p className="text-[#4a453f] font-sans text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            Temukan lokasi gerai Kopi Kenangan dengan indikator estimasi waktu tunggu real-time.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Search bar */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#80766b] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama gerai, nama jalan, atau area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#eae5de]/60 border border-[#c8c0b5] rounded-xl pl-11 pr-4 py-3 text-xs font-mono text-[#1f1d1a] placeholder-[#80766b] focus:outline-none focus:border-[#c82a2b] transition-colors"
            />
          </div>

          {/* City buttons */}
          <div className="md:col-span-6 flex flex-wrap gap-2 items-center">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-2 text-xs font-mono rounded transition-all uppercase ${
                  selectedCity === city
                    ? "bg-[#c82a2b] text-white font-bold"
                    : "bg-[#eae5de] text-[#4a453f] border border-[#c8c0b5] hover:border-neutral-500"
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
              className="bg-[#eae5de]/60 border border-[#c8c0b5] hover:border-[#c82a2b]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header status bar */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold bg-[#fcfbfa] text-emerald-600 border border-[#c8c0b5] px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                    {store.status} NOW
                  </span>

                  <span className="text-[10px] font-mono text-[#80766b]">{store.coordinates}</span>
                </div>

                <h3 className="text-base font-bold text-[#1f1d1a] font-sans mb-2 group-hover:text-[#c82a2b] transition-colors">
                  {store.name}
                </h3>

                <p className="text-xs text-[#4a453f] font-sans mb-4 flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#c82a2b] shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#c8c0b5] font-mono text-xs">
                <div className="flex items-center justify-between text-[#4a453f] text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#80766b]" />
                    {store.hours}
                  </span>
                  {store.driveThru && (
                    <span className="flex items-center gap-1 text-[#b38b4d] font-bold bg-[#eae5de] px-2 py-0.5 rounded border border-[#c8c0b5]/50 text-[10px]">
                      <Car className="w-3 h-3" /> DRIVE-THRU
                    </span>
                  )}
                </div>

                <div className="bg-[#f4f0eb] p-3 rounded-lg border border-[#c8c0b5]/60 flex justify-between items-center">
                  <span className="text-[10px] text-[#80766b]">ESTIMATED BREW WAIT TIME:</span>
                  <span className="text-xs font-bold text-[#c82a2b] flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" />
                    {store.queueTime}
                  </span>
                </div>

                <button
                  onClick={() => alert(`Membuka rute GPS ke: ${store.name}`)}
                  className="w-full py-2.5 bg-[#fcfbfa] hover:bg-[#eae5de] text-[#1f1d1a] text-xs font-mono font-bold rounded border border-[#c8c0b5] transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#c82a2b]" />
                  OPEN IN MAPS
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-16 bg-[#eae5de] rounded-2xl border border-[#c8c0b5] font-mono text-[#80766b]">
            [0 GERAI DITEMUKAN UNTUK PENCARIAN TERSERBUT]
          </div>
        )}
      </div>
    </section>
  );
}
