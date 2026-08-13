"use client";

import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aditya Pratama",
      role: "Software Architect // Jakarta",
      comment: "Aplikasi Kopi Kenangan beneran kerasa canggihnya. Pesen lewat aplikasi, dapet diskon kustom, lalu kopi diseduh presisi dan diambil langsung tanpa antre. Cita rasanya konsisten!",
      rating: 5,
      avatar: "AP",
      date: "12.08.2026",
    },
    {
      id: 2,
      name: "Rania Amanda",
      role: "Creative Director // Bandung",
      comment: "Desain gelas barunya yang biodegradable keren banget, kontribusinya nyata untuk lingkungan. Rasa Avocado Coffee Oatside-nya juga top notch! Creamy dan gak kemanisan.",
      rating: 5,
      avatar: "RA",
      date: "09.08.2026",
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Barista & Coffee Enthusiast // Bali",
      comment: "Untuk skala gerai nasional, konsistensi ekstraksi Kopi Kenangan patut diacungi jempol. Mesin espresso IoT mereka menjaga profil ekstraksi ideal di setiap cup.",
      rating: 5,
      avatar: "BS",
      date: "05.08.2026",
    },
  ];

  return (
    <section id="testimonials" className="py-24 border-b border-[#c8c0b5] relative bg-[#eae5de]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c8c0b5]">
          <div>
            <div className="text-[#c82a2b] font-mono text-[11px] font-bold tracking-widest uppercase mb-2">
              06 // VOICE OF CONSUMER
            </div>
            <h2 className="text-3xl sm:text-5xl font-light font-display uppercase tracking-tight text-[#1f1d1a]">
              REVIU & <span className="text-[#c82a2b]">TESTIMONI</span>
            </h2>
          </div>
          <p className="text-[#4a453f] font-sans text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            Apa kata mereka tentang cita rasa kopi premium masa depan dari Kopi Kenangan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#f4f0eb] border border-[#c8c0b5] hover:border-[#c82a2b]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Upper row: Avatar & Date */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1f1d1a] text-white flex items-center justify-center font-mono font-bold text-xs">
                      {t.avatar}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1f1d1a] font-sans">{t.name}</h3>
                      <p className="text-[10px] font-mono text-[#80766b]">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#80766b]">{t.date}</span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#b38b4d] fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs text-[#4a453f] font-serif leading-relaxed italic relative">
                  "{t.comment}"
                </p>
              </div>

              {/* Lower Decorative Icon */}
              <div className="flex justify-end pt-6 mt-6 border-t border-[#c8c0b5]/50">
                <Quote className="w-5 h-5 text-[#80766b]/40 rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
