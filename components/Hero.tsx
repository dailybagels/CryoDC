"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Search } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/datacenter-interior.jpg"
          alt="High-density data center with liquid cooling infrastructure"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 scanline pointer-events-none" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Blackwell-Ready Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6 max-w-4xl text-balance"
        >
          <span className="block text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl">
            The{" "}
            <span className="text-accent text-glow">132kW</span>
            {" "}Barrier.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mb-10 max-w-2xl text-balance text-base text-[var(--muted-foreground)] sm:text-lg md:text-xl"
        >
          Securing institutional, liquid-cooled infrastructure for the Blackwell era across the{" "}
          <span className="font-mono text-accent">Singapore</span>—
          <span className="font-mono text-accent">London</span>—
          <span className="font-mono text-accent">GCC</span> axis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#specs"
            className="group inline-flex items-center gap-2 rounded border border-accent bg-transparent px-6 py-3 font-mono text-sm uppercase tracking-wider text-accent transition hover:bg-accent/10 glow-accent"
          >
            <Download size={16} />
            Download Blackwell Blueprint
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-[var(--border)] bg-[var(--muted)] px-6 py-3 font-mono text-sm uppercase tracking-wider text-[var(--foreground)] transition hover:border-accent/40 hover:text-accent"
          >
            <Search size={16} />
            Audit Your Capacity
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
