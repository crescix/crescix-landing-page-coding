import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Produtos from "@/components/Produtos";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import HowWeArose from "@/components/HowWeArose";
import ForWhom from "@/components/ForWhom";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/wayfind/SiteFooter";
import { useWayfind } from "@/hooks/useWayfind";
import { FOTOS } from "@/lib/fotos";

export default function Home() {
  useWayfind();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Produtos />
        <HowItWorks />
        <Features />
        <HowWeArose />
        <ForWhom />
        <Pricing />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <SiteFooter fotos={[FOTOS.feiraSaude, FOTOS.feiraRua]} />
    </>
  );
}
