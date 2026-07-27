"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function CTAPopup({ children, triggerText = "Get Started" }: { children?: React.ReactElement, triggerText?: string }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
        setTimeout(() => setOpen(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) setSuccess(false); }}>
      <DialogTrigger render={children || <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">{triggerText}</Button>} />
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request a Callback</DialogTitle>
          <DialogDescription>
            {success ? "Thank you! Our admission expert will contact you shortly." : "Fill out the form below and we'll get in touch."}
          </DialogDescription>
        </DialogHeader>
        {!success && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="popup-name">Full Name</Label>
              <Input id="popup-name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="popup-phone">Phone Number</Label>
              <Input id="popup-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="popup-course">Desired Course</Label>
              <Input id="popup-course" name="course" placeholder="e.g. B.Tech Computer Science" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="popup-quota">Admission Route</Label>
              <select id="popup-quota" name="quota" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">Select Options</option>
                <option value="management">Management Quota</option>
                <option value="nri">NRI Quota</option>
                <option value="undecided">Need Guidance</option>
              </select>
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Talk to an Admission Expert"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
