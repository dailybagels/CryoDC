"use client";

import { motion } from "framer-motion";
import { Cpu, Droplets, Building2, Lock } from "lucide-react";
import Image from "next/image";

const specs = [
  {
    icon: Cpu,
    title: "Density",
    value: "120kW–150kW",
    unit: "per rack",
    description: "Purpose-built for GB200 NVL72 configurations. No compromises.",
  },
  {
    icon: Droplets,
    title: "Cooling",
    value: "Integrated",
    unit: "Liquid-to-Liquid CDUs",
    description: "Direct-to-chip cooling with rear-door heat exchangers. PUE < 1.15.",
  },
  {
    icon: Building2,
    title: "Structural",
    value: "2,100",
    unit: "kg/sqm floor loading",
    description: "Reinforced foundations for high-density GPU clusters and battery systems.",
  },
  {
    icon: Lock,
    title: "Sovereignty",
    value: "Private",
    unit: "pods with chain-of-custody",
    description: "Dedicated cages, biometric access, and full physical chain-of-custody audit trails.",
  },
];

export function Infrastructure() {
  return (
    <section
      id="specs"
      className="relative bg-[var(--background)] py-20 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/cooling-infrastructure.jpg"
          alt="Liquid cooling infrastructure"
          fill
          className="object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
            Technical Specifications
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Built for the <span className="text-accent">Blackwell Era</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--muted-foreground)]">
            Every facility engineered from the ground up for next-generation AI compute density.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec, i) => (
            <motion.article
              key={spec.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[#0a0a0a] p-6 transition-all hover:border-accent/40"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-accent/5 to-transparent" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex rounded border border-accent/30 bg-accent/10 p-3 text-accent">
                  <spec.icon size={24} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-1 font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                  {spec.title}
                </h3>

                {/* Value */}
                <div className="mb-1">
                  <span className="text-2xl font-bold text-accent text-glow">
                    {spec.value}
                  </span>
                </div>

                {/* Unit */}
                <p className="mb-3 font-mono text-sm text-[var(--foreground)]">
                  {spec.unit}
                </p>

                {/* Description */}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {spec.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { label: "Target PUE", value: "<1.15" },
            { label: "Redundancy", value: "2N+1" },
            { label: "Network", value: "400G" },
            { label: "Deployment", value: "Q2 2026" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded border border-[var(--border)] bg-[#0a0a0a]/50 p-4 text-center"
            >
              <div className="font-mono text-xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
