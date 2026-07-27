import { Button } from "@/components/ui/button";
import { CTAPopup } from "./CTAPopup";

export function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-blue-50 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-indigo-900 sm:text-4xl">Ready to Start Your Admission Journey?</h2>
        <p className="mt-6 text-lg leading-8 text-slate-600 mb-10">
          Get expert counseling to navigate the admission process at SRM University KTR Campus smoothly. Let our professionals guide you through every step.
        </p>
        <CTAPopup>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
            Get Started Now
          </Button>
        </CTAPopup>
      </div>
    </section>
  );
}
