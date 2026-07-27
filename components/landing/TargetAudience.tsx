import { Button } from "@/components/ui/button";
import { CTAPopup } from "./CTAPopup";

export function TargetAudience() {
  const audience = [
    "Students seeking admission to SRM University (KTR Campus)",
    "Parents looking for professional admission counseling",
    "Candidates exploring Management or NRI quota admission routes",
    "Students who require complete guidance throughout the admission process"
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-indigo-900 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-12">Who Should Contact Us?</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {audience.map((item, i) => (
            <div key={i} className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 flex items-center justify-center text-center">
              <span className="font-medium text-lg">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CTAPopup>
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 font-bold">
              Reach Out Today
            </Button>
          </CTAPopup>
        </div>
      </div>
    </section>
  );
}
