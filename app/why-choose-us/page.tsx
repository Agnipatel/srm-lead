import { Navbar } from "@/components/landing/Navbar";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { TopUniversity } from "@/components/landing/TopUniversity";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16">
        <WhyChooseUs />
        <TopUniversity />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
