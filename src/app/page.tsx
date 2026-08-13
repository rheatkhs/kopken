import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Catalog from "@/components/Catalog";
import AppShowcase from "@/components/AppShowcase";
import StoreLocator from "@/components/StoreLocator";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-neutral-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandStory />
        <Catalog />
        <AppShowcase />
        <StoreLocator />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
