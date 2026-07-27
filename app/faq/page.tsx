import { Navbar } from "@/components/landing/Navbar";
import { FAQ as FAQSection } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16">
        <FAQSection />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
