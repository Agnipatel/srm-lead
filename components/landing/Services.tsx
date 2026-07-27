import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "./CTAPopup";

export function Services() {
  const services = [
    "Personalized counseling",
    "Eligibility assessment",
    "Management & NRI quota process guidance",
    "Document checklist assistance",
    "Application support",
    "Fee structure guidance",
    "Timely admission updates"
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Admission Guidance Includes</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((item, i) => (
            <div key={i} className="flex items-center bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
              <ArrowRight className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAPopup>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
              Get Professional Help Today
            </Button>
          </CTAPopup>
        </div>
      </div>
    </section>
  );
}
