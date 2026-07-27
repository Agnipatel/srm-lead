import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "./CTAPopup";

export function TopUniversity() {
  const benefits = [
    "Industry-oriented curriculum",
    "Excellent placement opportunities",
    "Modern laboratories and research facilities",
    "Global academic collaborations",
    "Experienced faculty members",
    "Strong alumni network",
    "Better career growth and higher earning potential",
    "Exposure to innovation, entrepreneurship, and leadership"
  ];

  return (
    <section id="benefits" className="py-20 px-6 lg:px-8 bg-slate-50">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">Why Choose a Top University?</h3>
        <p className="text-slate-600 mb-12 text-lg italic max-w-2xl mx-auto">
          "Your college choice can significantly influence your professional journey."
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <CheckCircle2 className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
              <span className="text-slate-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAPopup>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
              Secure Your Seat
            </Button>
          </CTAPopup>
        </div>
      </div>
    </section>
  );
}
