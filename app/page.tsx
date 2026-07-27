import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { TopUniversity } from "@/components/landing/TopUniversity";
import { Services } from "@/components/landing/Services";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <TopUniversity />
      <Services />
      <TargetAudience />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
