"use client";

import { motion } from "framer-motion";
import { Droplets, Server, Globe2 } from "lucide-react";

const items = [
  {
    icon: Droplets,
    title: "Liquid Cooling",
    body: "Immersion and cold-plate solutions for 50kW+ racks, tuned for AI workloads where air cooling fails.",
  },
  {
    icon: Server,
    title: "High-Density Hosting",
    body: "Facilities engineered for H100/B200 GPU clusters and dense training pods, not retrofitted enterprise racks.",
  },
  {
    icon: Globe2,
    title: "AI Infrastructure Scouting",
    body: "Strategic lead generation for global data center opportunities outside Singapore, aligned with your AI roadmap.",
  },
];

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="bg-slate-950/80 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Infrastructure Focus
          </h2>
          <p className="mt-3 text-sm text-slate-300/80 md:text-base">
            Liquid-first, AI-native capacity—from rack design to site
            discovery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%)]" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-lg border border-cyan-500/40 bg-cyan-500/10 p-2.5 text-cyan-300">
                  <item.icon size={20} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300/80 md:text-sm">
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
