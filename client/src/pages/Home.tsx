import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import ForWhom from "@/components/ForWhom";
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
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
