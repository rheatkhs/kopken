"use client";

import { useState } from "react";
import { MessageSquare, Quote, Star, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aditya Pratama",
      role: "Software Architect // Jakarta",
      comment: "Aplikasi Kopi Kenangan Neo-Mirai beneran kerasa canggihnya. Pesen lewat aplikasi, dapet diskon kustom, lalu kopi diseduh presisi dan diambil langsung tanpa antre. Cita rasanya konsisten banget!",
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
    <section id="testimonials" className="py-24 bg-[#090a0f] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase mb-2">
              06 // VOICE OF CONSUMER
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
              REVIU & <span className="text-gradient-red">TESTIMONI</span>
            </h2>
          </div>
          <p className="text-neutral-400 font-mono text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            Apa kata mereka tentang cita rasa kopi premium masa depan dari Kopi Kenangan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#121420]/80 border border-neutral-800 hover:border-red-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm"
            >
              <div>
                {/* Upper row: Avatar & Date */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center font-mono font-bold text-xs text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-sans">{t.name}</h3>
                      <p className="text-[10px] font-mono text-neutral-400">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">{t.date}</span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs text-neutral-300 font-sans leading-relaxed italic relative">
                  "{t.comment}"
                </p>
              </div>

              {/* Lower Decorative Icon */}
              <div className="flex justify-end pt-6 mt-6 border-t border-neutral-900">
                <Quote className="w-6 h-6 text-neutral-800 rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
