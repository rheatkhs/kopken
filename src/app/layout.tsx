import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOPI KENANGAN // NEO-MIRAI — Future of Indonesian Coffee",
  description: "Sensasi kopi lokal dengan sentuhan masa depan. Modernizing Indonesian coffee culture through state-of-the-art brewing technology, loyalty ecosystem, and premium bean selection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-neutral-100 selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
