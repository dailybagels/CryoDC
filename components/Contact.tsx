"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const interests = [
  "AI Infrastructure Scouting",
  "High-Density Hosting",
  "Liquid Cooling",
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
      className="bg-slate-950/90 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm text-slate-300/85">
            Name, company, and what you&apos;re exploring. We&apos;ll respond
            within one business day.
          </p>
        </div>

        <motion.form
          name="contact"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Do not fill: <input name="bot-field" />
            </label>
          </p>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-200">Name</label>
            <input
              required
              name="name"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-200">
              Company
            </label>
            <input
              required
              name="company"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-200">
              Contact email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-200">
              Interest
            </label>
            <select
              required
              name="interest"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
            >
              <option value="" className="bg-slate-900">
                Select...
              </option>
              {interests.map((i) => (
                <option key={i} value={i} className="bg-slate-900">
                  {i}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500/50 bg-cyan-500/15 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:bg-cyan-500/25 disabled:opacity-60"
          >
            {status === "idle" && (
              <>
                Send enquiry <Send size={16} />
              </>
            )}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Sent - we'll be in touch"}
            {status === "error" && "Something went wrong - please try again"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
