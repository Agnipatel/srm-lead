import { Button } from "@/components/ui/button";
import { CTAPopup } from "./CTAPopup";

export function WhyChooseUs() {
  const reasons = [
    {
      id: "1",
      title: "Professional Assistance",
      desc: "Expert guidance throughout the entire complex university admission lifecycle."
    },
    {
      id: "2",
      title: "Transparent Communication",
      desc: "100% transparency regarding eligibility, fees, and quota realities."
    },
    {
      id: "3",
      title: "Step-by-step Guidance",
      desc: "We're by your side from the application form down to final document verification."
    },
    {
      id: "4",
      title: "Prompt Support",
      desc: "Quick query resolution and proactive updates on admission deadlines."
    },
    {
      id: "5",
      title: "Student-Focused",
      desc: "Personalized counseling aligned with the student's career aspirations."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 px-6 lg:px-8 bg-slate-50">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-12">Why Choose Our Counseling?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center ${i === 3 ? 'md:col-start-2' : ''}`}>
              <div className="h-14 w-14 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
                <span className="text-2xl font-black text-indigo-600">{r.id}</span>
              </div>
              <h4 className="font-bold text-xl mb-3 text-slate-900">{r.title}</h4>
              <p className="text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <CTAPopup>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
              Connect with an Expert
            </Button>
          </CTAPopup>
        </div>
      </div>
    </section>
  );
}
