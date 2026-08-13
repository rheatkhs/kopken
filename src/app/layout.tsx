import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOPI KENANGAN // NEO-MIRAI — The Future of Indonesian Coffee",
  description: "Sensasi kopi lokal dengan sentuhan masa depan. Modernizing Indonesian coffee culture through state-of-the-art brewing technology, loyalty ecosystem, and premium bean selection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f4f0eb] text-[#1f1d1a] selection:bg-[#c82a2b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
