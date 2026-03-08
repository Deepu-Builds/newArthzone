"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutFounderSection } from "@/components/sections/AboutFounderSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { PopupModal } from "@/components/PopupModal";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutFounderSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <SocialProofSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <BackToTop />
      <PopupModal />
    </main>
  );
}
