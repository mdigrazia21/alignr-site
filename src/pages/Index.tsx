
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { HowWeHelpSection } from "@/components/HowWeHelpSection";
import { ResultsSection } from "@/components/ResultsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-dm-sans">
      <Navbar />
      <div className="pt-16"> {/* Reduced padding from pt-20 to pt-16 */}
        <Hero />
        <ProblemSection />
        <WhatWeDoSection />
        <HowWeHelpSection />
        <ResultsSection />
        <WhyUsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
