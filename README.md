# ☕ Kopi Kenangan (kopken) — Web Showcase, Interactive Catalog & Barista AI

Website showcase modern, katalog menu digital interaktif, dan asisten virtual cerdas untuk **Kopi Kenangan**, dirancang dengan estetika **Japanese-Indonesian Editorial & Industrial-Artisanal**.

---

## 🌟 Fitur Utama

### 1. 🤖 Barista Kenangan (Virtual AI Assistant)
- **Ditenagai Google Gemini AI**: Memberikan rekomendasi minuman & makanan yang personal berdasarkan preferensi rasa pelanggan (manis, *creamy*, *low caffeine*, *plant-based/oat milk*).
- **Desain Khusus Editorial**: Kartu pesan bergaya *tasting note receipt*, penyorotan harga otomatis, dan penghapusan format markdown kasar.
- **Tombol & UI Konsisten**: Mengadopsi sistem tombol `.ticket-pill` khas Kopi Kenangan dengan indikator status *live*.
- **Scrolling Terisolasi**: Dilengkapi `data-lenis-prevent` dan scrollbar elegan sehingga obrolan dapat discroll dengan lancar tanpa mengganggu scroll halaman utama.
- **Quick Suggestion Chips**: Rekomendasi pertanyaan cepat untuk memudahkan pengguna.

### 2. 📖 Interactive Menu Catalog (`/catalog` & Homepage)
- Filter kategori menu lengkap: **COFFEE**, **NON-COFFEE**, **BAKERY & FOOD**.
- Pemilihan ukuran (*Regular* / *Large*) dengan penyesuaian harga dinamis.
- Indikator profil rasa (*Sweetness*, *Intensity*, *Acidity*, *Caffeine Level*).
- Modal pop-up detail produk interaktif dengan animasi halus *Framer Motion*.

### 3. 📍 Gerai & Store Locator Interaktif
- Pencarian dan filter lokasi gerai di berbagai kota besar (Jakarta, Bandung, Surabaya, Bali, Medan).
- Informasi jam operasional, koordinat GPS, fasilitas *Drive-Thru*, dan indikator **Estimated Brew Wait Time** (waktu tunggu antrean real-time).
- Integrasi tombol navigasi langsung ke peta digital.

### 4. 📜 Brand Story & Leadership Showcase
- Linimasa sejarah perjalanan Kopi Kenangan dari gerai pertama (2017), sertifikasi 100% Halal MUI (2020), hingga penghargaan *World Brand of The Year* di London (2025).
- Profil para founder: Edward Tirtanata, James Prananto, dan Cynthia Chaerunnisa.

### 5. 🎨 Sensory Experiences & Installations
- Eksplorasi instalasi konseptual sensorik (*Harmonic Extraction Lab*, *Aroma Compiler*, *Echoes of Roastery*).

### 6. 📱 App Showcase & Voucher Passes
- Panduan pemesanan lewat aplikasi *Skip-the-Queue*, perolehan poin loyalti *Kenangan Points*, dan link unduhan resmi ke Google Play Store & Apple App Store.
- Pilihan paket langganan voucher harian (*Daily Pass*, *Oatside Pass*, *Masterclass*, *Corporate Group*).

### 7. 🌊 Smooth Momentum Scrolling
- Menggunakan **Lenis** untuk navigasi scroll yang mulus di seluruh halaman dengan penanganan offset anchor links otomatis.

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router & Turbopack)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Custom CSS Variables |
| **Artificial Intelligence** | [Google Gemini API (Gemini Flash)](https://ai.google.dev/) |
| **Animasi & Interaksi** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Tipografi** | Google Fonts (*Azeret Mono*, *Chakra Petch*, *Zen Old Mincho*) |
| **Package Manager** | [Bun](https://bun.sh/) (bisa juga menggunakan npm / pnpm / yarn) |

---

## 📁 Struktur Direktori

```text
kopken/
├── public/
│   ├── assets/              # Aset gambar produk, fotografi founder & instalasi
│   └── favicon.ico, svgs    # Logo & ikon SVG
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts # Backend endpoint API Gemini AI
│   │   ├── catalog/
│   │   │   └── page.tsx     # Halaman katalog menu penuh
│   │   ├── globals.css      # Custom styling, variabel tema & Lenis CSS
│   │   ├── layout.tsx       # Root layout & integrasi global Chatbot
│   │   └── page.tsx         # Halaman beranda utama
│   └── components/
│       ├── AppShowcase.tsx  # Promosi aplikasi & link download
│       ├── BrandStory.tsx   # Linimasa sejarah & milestone
│       ├── Catalog.tsx      # Komponen katalog menu & modal detail
│       ├── Chatbot.tsx      # Komponen Chatbot AI Barista Kenangan
│       ├── Footer.tsx       # Footer brand lockup & language switcher
│       ├── Header.tsx       # Sticky navbar dengan menu navigasi
│       ├── Hero.tsx         # Section pembuka editorial & motion
│       ├── Installations.tsx# Eksplorasi pengalaman sensorik
│       ├── Manifesto.tsx    # Visi misi perusahaan oleh CEO
│       ├── SmoothScroll.tsx # Integrasi Lenis Smooth Scroll
│       ├── Speakers.tsx     # Profil Founder & kepemimpinan
│       ├── StoreLocator.tsx # Pencari gerai & estimasi waktu tunggu
│       ├── Testimonials.tsx # Ulasan & testimoni pelanggan
│       └── Vouchers.tsx     # Pilihan tiket pass & voucher
├── .env.example             # Contoh konfigurasi environment
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🚀 Panduan Memulai (Getting Started)

### 1. Kloning Repositori
```bash
git clone https://github.com/rheatkhs/kopken.git
cd kopken
```

### 2. Instal Dependensi
```bash
bun install
# atau: npm install / pnpm install / yarn install
```

### 3. Konfigurasi Environment Variable
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```

Buka `.env.local` dan masukkan API Key Gemini Anda:
```env
GEMINI_API_KEY=masukkan_api_key_gemini_anda_di_sini
GEMINI_MODEL=gemini-3.5-flash
```

### 4. Jalankan Development Server
```bash
bun run dev
# atau: npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### 5. Build untuk Produksi
```bash
bun run build
bun run start
```

---

## 📜 Lisensi & Atribusi
Proyek ini dibuat untuk tujuan showcase portofolio digital & demonstrasi teknologi modern web development. Seluruh aset merek, logo, dan nama produk adalah hak cipta milik **Kopi Kenangan**.
