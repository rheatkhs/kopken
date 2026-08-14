import Header from "@/components/Header";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f0eb] text-[#1f1d1a]">
      <Header />
      <main className="flex-1 pt-[74px]">
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}
