import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAPopup } from "./CTAPopup";

export function Navbar() {
  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <Link href="/" className="text-xl font-bold text-indigo-900">SRM Admission Guidance</Link>
      <nav className="hidden md:flex gap-6 items-center">
        <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About Us</Link>
        <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</Link>
        <Link href="/why-choose-us" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Why Choose Us</Link>
        <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</Link>
        <CTAPopup>
          <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Contact Us
          </Button>
        </CTAPopup>
      </nav>
    </header>
  );
}
