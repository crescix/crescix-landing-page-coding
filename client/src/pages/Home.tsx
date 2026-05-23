import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import HowWeArose from "@/components/HowWeArose";
import ForWhom from "@/components/ForWhom";
import Pricing from "@/components/Pricing";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <HowWeArose />
        <ForWhom />
        <Pricing />
        <Partners />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
