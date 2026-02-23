/*
 * CrescIX Landing Page — Home
 * Design: "Fluid Data Streams" — Organic Modernism
 * Paleta: #D8DDEF, #A3C3D9, #508991, #09636B, #004346, #172A3A
 * Tipografia: Plus Jakarta Sans (display) + DM Sans (body)
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import ForWhom from "@/components/ForWhom";
import Pricing from "@/components/Pricing";
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
        <SocialProof />
        <ForWhom />
        <Pricing />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
