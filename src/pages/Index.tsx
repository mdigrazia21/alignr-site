
import { Hero1 } from "@/components/ui/hero-with-text-and-two-button";
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
      <div className="pt-14"> {/* Reduced padding from pt-16 to pt-14 */}
        <div id="hero">
          <Hero1 />
        </div>
        <ProblemSection />
        <div id="what-we-do">
          <WhatWeDoSection />
        </div>
        <div id="how-we-help">
          <HowWeHelpSection />
        </div>
        <ResultsSection />
        <WhyUsSection />
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
