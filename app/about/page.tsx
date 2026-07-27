import { Navbar } from "@/components/landing/Navbar";
import { About as AboutSection } from "@/components/landing/About";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
