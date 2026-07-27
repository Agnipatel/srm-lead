import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "./CTAPopup";

export function FAQ() {
  const faqs = [
    {
      question: "What is the role of your admission guidance service?",
      answer: "We provide expert counseling to help students and parents navigate the admission process at SRM University KTR Campus. We assist with eligibility checks, documentation, and step-by-step guidance for Management and NRI quotas."
    },
    {
      question: "Do you guarantee admission to SRM University?",
      answer: "No, we do not guarantee admission. We provide guidance and counseling services. All final admission decisions are made solely by SRM University in accordance with its official policies and seat availability."
    },
    {
      question: "Who is eligible for the NRI Quota?",
      answer: "NRI Quota is generally available for Non-Resident Indians, Persons of Indian Origin (PIO), and Overseas Citizens of India (OCI). Specific eligibility criteria regarding academic scores and sponsorship details apply. We help you understand these requirements."
    },
    {
      question: "What courses do you provide guidance for?",
      answer: "We primarily provide guidance for B.Tech engineering programs and other professional courses offered at the SRM University Kattankulathur (KTR) main campus."
    },
    {
      question: "How can I start the process?",
      answer: "You can start by filling out the Contact Form on our website or calling our admission experts directly at 9807068865. We will schedule a personalized counseling session."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl w-full">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAPopup>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
              Have More Questions? Ask Us
            </Button>
          </CTAPopup>
        </div>
      </div>
    </section>
  );
}
