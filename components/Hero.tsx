"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9),rgba(15,23,42,1))]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/70"
        >
          AI-READY DATA CENTER INFRASTRUCTURE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Cooling the{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
            Intelligence Revolution.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mb-8 max-w-xl text-balance text-sm text-slate-300/80 sm:text-base"
        >
          Specialized High-Density Infrastructure and AI Scouting for Global Markets. Liquid-cooled, AI-native capacity beyond Singapore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="flex items-center gap-3"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-cyan-500/15 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.4)] transition hover:border-cyan-400 hover:bg-cyan-500/25"
          >
            Get in Touch
            <ArrowRight size={16} className="translate-y-[0.5px]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
