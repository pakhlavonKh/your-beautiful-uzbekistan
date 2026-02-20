import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PromotionsSection } from "@/components/PromotionsSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { FurnitureItems } from "@/components/FurnitureItems";
import { DesignCTA } from "@/components/DesignCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <PromotionsSection />
      <CollectionsSection />
      <FurnitureItems />
      <DesignCTA />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
