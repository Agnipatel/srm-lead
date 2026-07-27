import { Navbar } from "@/components/landing/Navbar";
import { Services as ServicesSection } from "@/components/landing/Services";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16">
        <ServicesSection />
        <TargetAudience />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
