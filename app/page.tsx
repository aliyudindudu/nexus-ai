import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGridFeatures from "@/components/BentoGridFeatures";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-nexus-dark text-white selection:bg-neon-purple/30">
      <Navbar />
      <HeroSection />
      <BentoGridFeatures />
      <Footer />
    </main>
  );
}