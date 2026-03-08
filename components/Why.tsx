"use client";

import { motion } from "framer-motion";
import { ThermometerSnowflake, Zap } from "lucide-react";

export function Why() {
  return (
    <section id="why" className="bg-slate-950 py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Traditional Air Cooling Is Failing AI.
          </h2>
          <p className="mt-4 text-sm text-slate-300/85 md:text-base">
            AI clusters are pushing rack densities past 50kW. Legacy
            air-cooled designs hit thermal and efficiency limits, triggering
            throttling, downtime risk, and unsustainable power overhead.
          </p>
          <p className="mt-4 text-sm text-slate-300/85 md:text-base">
            CryoDC bridges that gap with liquid-first designs and targeted
            site scouting - so your AI capacity scales without fighting
            physics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <div className="flex gap-3">
            <div className="mt-1 rounded-lg bg-red-500/10 p-2 text-red-300">
              <ThermometerSnowflake size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-50">
                Air Cooling at 50kW+ Racks
              </h3>
              <p className="mt-1 text-xs text-slate-300/80 md:text-sm">
                High PUE, noisy retrofits, and hardware running at the edge
                of its thermal envelope. Good for legacy enterprise, not
                AI-scale.
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-red-500/40 via-slate-700 to-cyan-400/40" />

          <div className="flex gap-3">
            <div className="mt-1 rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
              <Zap size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-50">
                Liquid-First, AI-Ready by Design
              </h3>
              <p className="mt-1 text-xs text-slate-300/80 md:text-sm">
                Immersion and cold-plate architectures tuned for GPUs, plus
                scouting of global locations where power, regulation, and
                latency all work in your favor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
