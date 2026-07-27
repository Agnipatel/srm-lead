import { Button } from "@/components/ui/button";
import { CTAPopup } from "./CTAPopup";

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Us</h2>
        <div className="mt-8 text-lg leading-8 text-slate-600 text-left space-y-6">
          <p>
            Welcome to <strong>SRM Admission Guidance</strong>. We are a dedicated team of educational counselors focused on helping aspiring students secure their future at a premier institution. Our primary focus is on providing transparent, step-by-step guidance for admissions into SRM University – Kattankulathur (KTR) Campus.
          </p>
          <p>
            With years of experience in the educational sector, we understand that the college admission process can be overwhelming for both students and parents. Our goal is to simplify this journey. We provide expert advice on eligibility, documentation, and the application processes, especially for Management and NRI quota admissions.
          </p>
          <p className="font-semibold text-center text-indigo-900 text-xl pt-4">
            "To empower students with the right information and professional support, bridging the gap between ambition and opportunity."
          </p>
        </div>
        <div className="mt-12 text-center">
          <CTAPopup>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
              Contact Our Counselors
            </Button>
          </CTAPopup>
        </div>
      </div>
    </section>
  );
}
