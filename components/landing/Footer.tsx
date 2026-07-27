export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-8 text-sm text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="font-bold text-slate-300">Important Disclaimer</p>
        <p>
          We provide admission guidance and counseling services only. Admission decisions are made solely by SRM University in accordance with its official admission policies, eligibility criteria, seat availability, and applicable regulations. We do not guarantee admission, ranks, scholarships, or seats. Management and NRI quota admissions, where applicable, are governed by the university's official rules and procedures.
        </p>
        <p className="pt-8 border-t border-slate-800">
          Contact Now: <a href="tel:+919807068865" className="text-blue-400 hover:text-blue-300 font-bold">9807068865</a>
          <span className="px-4">|</span>
          <a href="mailto:admissions@example.com" className="text-blue-400 hover:text-blue-300 font-bold">admissions@example.com</a>
        </p>
      </div>
    </footer>
  );
}
