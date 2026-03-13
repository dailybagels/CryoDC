"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Building2, User, MessageSquare } from "lucide-react";

const interests = [
  "Blackwell Blueprint Download",
  "Capacity Audit",
  "Site Visit Request",
  "Partnership Inquiry",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "contact");

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-[var(--background)] py-20 md:py-28"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
            Get Started
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Audit Your <span className="text-accent">Capacity</span>
          </h2>
          <p className="text-[var(--muted-foreground)]">
            Share your requirements. We respond within one business day.
          </p>
        </motion.div>

        <motion.form
          name="contact"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 rounded-lg border border-[var(--border)] bg-[#0a0a0a] p-6 md:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Do not fill: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                <User className="h-3 w-3" />
                Name
              </label>
              <input
                required
                name="name"
                className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-mono text-sm text-[var(--foreground)] outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/40 placeholder:text-[var(--muted-foreground)]"
                placeholder="Your name"
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                <Building2 className="h-3 w-3" />
                Company
              </label>
              <input
                required
                name="company"
                className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-mono text-sm text-[var(--foreground)] outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/40 placeholder:text-[var(--muted-foreground)]"
                placeholder="Your company"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
              <Mail className="h-3 w-3" />
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-mono text-sm text-[var(--foreground)] outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/40 placeholder:text-[var(--muted-foreground)]"
              placeholder="you@company.com"
            />
          </div>

          {/* Interest */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
              <MessageSquare className="h-3 w-3" />
              Interest
            </label>
            <select
              required
              name="interest"
              className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-mono text-sm text-[var(--foreground)] outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/40"
            >
              <option value="" className="bg-[#0a0a0a]">
                Select your interest...
              </option>
              {interests.map((i) => (
                <option key={i} value={i} className="bg-[#0a0a0a]">
                  {i}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
              <MessageSquare className="h-3 w-3" />
              Message (optional)
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-none rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-mono text-sm text-[var(--foreground)] outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/40 placeholder:text-[var(--muted-foreground)]"
              placeholder="Tell us about your capacity requirements..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded border border-accent bg-accent/10 px-6 py-3 font-mono text-sm uppercase tracking-wider text-accent transition hover:bg-accent/20 disabled:opacity-50 glow-accent"
          >
            {status === "idle" && (
              <>
                <Send size={16} />
                Submit Inquiry
              </>
            )}
            {status === "sending" && "Transmitting..."}
            {status === "sent" && "Message Received — We'll respond shortly"}
            {status === "error" && "Transmission failed — Please retry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
