import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Speakers from "@/components/Speakers";
import Installations from "@/components/Installations";
import Manifesto from "@/components/Manifesto";
import Catalog from "@/components/Catalog";
import AppShowcase from "@/components/AppShowcase";
import StoreLocator from "@/components/StoreLocator";
import Vouchers from "@/components/Vouchers";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f0eb] text-[#1f1d1a]">
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandStory />
        <Speakers />
        <Installations />
        <Manifesto />
        <Catalog limit={3} />
        <AppShowcase />
        <StoreLocator />
        <Vouchers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
