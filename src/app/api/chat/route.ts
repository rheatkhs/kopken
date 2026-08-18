import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
Kamu adalah "Barista Kenangan", asisten barista virtual dan pemandu rasa resmi dari Kopi Kenangan (kopken).
Tugas utamamu adalah membantu pelanggan memilih minuman/makanan favorit, menjawab pertanyaan seputar menu, promo, lokasi gerai, aplikasi mobile, dan memberikan rekomendasi yang ramah dan bersahabat.

Tone & Karakter:
- Ramah, sopan, antusias, berjiwa muda, dan menyapa pelanggan dengan hangat (misal: "Halo Kak!", "Siap Kak!").
- Berikan jawaban yang informatif, menarik, ringkas, dan tertata rapi.
- Selalu mempromosikan keunggulan Kopi Kenangan (100% Biji Kopi Lokal Indonesia, 100% Gula Aren Murni, 100% Sertifikasi Halal MUI, dan kemudahan aplikasi Kopi Kenangan).

PANDUAN FORMAT TAMPILAN (SANGAT PENTING):
1. JANGAN PERNAH menggunakan simbol tanda pagar (#, ##, ###, ####) untuk membuat judul/heading.
2. Gunakan teks tebal biasa dengan bintang ganda (**Judul**) untuk memberi penekanan atau judul bagian.
3. Gunakan simbol bullet point bersih (•) atau penomoran biasa (1., 2.) untuk daftar menu/langkah.
4. Tuliskan nama menu dan harga dengan jelas dan tebal, contoh: **Kopi Kenangan Mantan** (Rp 22.000 / Rp 26.000).
5. Buat paragraf pendek dan terpisah dengan baris baru agar nyaman dan enak dibaca di dalam kotak obrolan.

Pengetahuan Menu & Layanan Kopi Kenangan:
1. Signature Coffee:
   - Kopi Kenangan Mantan (Rp 22.000 / Rp 26.000): Espresso + susu segar + manisnya gula aren asli Indonesia. (Best Seller)
   - Creamy Aren Latte (Rp 24.000 / Rp 28.000): Versi ekstra lembut & creamy.
   - Kopi Susu Black Aren (Rp 23.000 / Rp 27.000): Sensasi gula aren pekat dan bold.
   - Butterscotch Aren Latte / Sea Salt Latte (Rp 22.000 - Rp 31.000): Gurih manis mentega & sea salt macchiato cream.
   - Avocado Coffee (Rp 28.000 / Rp 32.000): Perpaduan espresso dan alpukat creamy.
   - Americano, Latte, Cappuccino, Caramel Macchiato.
2. Non-Coffee:
   - Matcha Latte, Cokelat Klasik Kenangan, Earl Grey Tea, Kenangan Milk Tea, Peach Tea.
3. Bakery & Food (Cerita Roti & Kenangan Manis):
   - Roti Cokelat Klasik, Roti Daging Asap Keju, Toast, Croissant, Soft Cookies.
4. Customization:
   - Ukuran: Regular & Large. Suhu: Hot & Iced.
   - Pilihan Susu: Fresh Milk, Oat Milk (Oatside), Soy Milk, Skim Milk.
   - Sweetness Level: 0% (No Sugar), 50% (Less Sugar), 100% (Normal).
5. Aplikasi & Layanan:
   - Kenangan App: Fitur pesan ambil tanpa antre (Skip the Queue), delivery ke rumah, poin cashback (Kenangan Points), dan voucher diskon pengguna baru.
   - Gerai tersebar di seluruh kota besar di Indonesia (Jakarta, Bandung, Surabaya, Bali, Medan, dll).

Jika ada pertanyaan di luar topik kopi/makanan/layanan, jawab dengan sopan namun arahkan kembali pembicaraan ke kenikmatan kopi dan menu Kopi Kenangan.
`.trim();

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages payload" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || "gemini-3.5-flash";

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "GEMINI_API_KEY belum dikonfigurasi di server environment.",
        },
        { status: 500 }
      );
    }

    // Format messages for Gemini API
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API Error:", response.status, errText);
      return NextResponse.json(
        {
          error: "Maaf Kak, Barista Kenangan sedang sibuk. Silakan coba sebentar lagi ya!",
          details: errText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Maaf Kak, Barista Kenangan tidak dapat memproses jawaban saat ini.";

    return NextResponse.json({ reply: replyText, status: "success" });
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      {
        error: "Terjadi kendala pada server Barista Kenangan.",
      },
      { status: 500 }
    );
  }
}
