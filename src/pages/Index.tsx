import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { SubjectSection } from "@/components/SubjectSection";
import { PricingSection } from "@/components/PricingSection";
import { DoubtForm } from "@/components/DoubtForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection />
        <HowItWorks />
        <SubjectSection />
        <PricingSection />
        <DoubtForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
