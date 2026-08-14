import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Kopi Kenangan",
  description:
    "At Kopi Kenangan, our dream is to serve high quality coffee, made with the freshest local ingredients to customers across Indonesia and the rest of the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f4f0eb] text-[#1f1d1a] selection:bg-[#c82a2b] selection:text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
