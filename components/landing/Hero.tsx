"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Phone } from "lucide-react";

export function Hero() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      course: formData.get("course"),
      quota: formData.get("quota"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative px-6 py-24 md:py-32 lg:px-8 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-500/30">
            <GraduationCap className="w-4 h-4 mr-2" />
            For Serious Aspirants Only
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-sm">
            Secure Your Future with <span className="text-blue-300">SRM University (KTR Campus)</span> Admission Guidance
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl">
            Expert Guidance for Management & NRI Quota Admissions. Your Journey to a Premier Engineering & Professional Education Starts Here.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 font-semibold" render={<a href="#lead-form" />}>
              Check Your Eligibility
            </Button>
            <Button size="lg" variant="outline" className="text-black border-indigo-200 hover:bg-white/20 hover:text-white" render={<a href="tel:+919807068865" />}>
              <Phone className="w-4 h-4 mr-2" />
              Call 9807068865
            </Button>
          </div>
        </div>
        
        <div className="w-full flex justify-center lg:justify-center" id="lead-form">
          <Card className="w-full max-w-lg bg-white text-slate-900 shadow-2xl border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Request a Callback</CardTitle>
              <CardDescription>
                {success ? <span className="text-green-600 font-medium">Thank you! Our admission expert will contact you shortly.</span> : "Fill out the form below and our admission expert will contact you shortly."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Desired Course</Label>
                  <Input id="course" name="course" placeholder="e.g. B.Tech Computer Science" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quota">Admission Route</Label>
                  <select id="quota" name="quota" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select Option</option>
                    <option value="management">Management Quota</option>
                    <option value="nri">NRI Quota</option>
                    <option value="undecided">Need Guidance</option>
                  </select>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Talk to an Admission Expert"}
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  Limited counseling slots available.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
