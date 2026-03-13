"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";

const regions = [
  {
    name: "Singapore",
    code: "SGP",
    highlight: "APAC Hub",
    description: "Strategic gateway to Southeast Asia's AI ecosystem",
  },
  {
    name: "London",
    code: "LON",
    highlight: "EMEA Hub",
    description: "Financial and enterprise AI center for Europe",
  },
  {
    name: "GCC",
    code: "BAH",
    highlight: "Emerging",
    description: "Sovereign AI infrastructure for the Gulf region",
  },
];

const advantages = [
  {
    icon: Zap,
    title: "Power Secured",
    text: "Long-term power agreements at competitive rates with renewable options",
  },
  {
    icon: Shield,
    title: "Data Sovereignty",
    text: "Physical and logical isolation compliant with local regulations",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    text: "Pre-built infrastructure ready for your hardware within 90 days",
  },
];

export function Why() {
  return (
    <section id="why" className="relative bg-[var(--background)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
              Global Presence
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
              The SGP—LON—GCC{" "}
              <span className="text-accent">Axis</span>
            </h2>
            <p className="mb-8 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Strategic positioning across three continents for low-latency inference, 
              data sovereignty compliance, and diversified infrastructure risk.
            </p>

            {/* Region Cards */}
            <div className="space-y-4">
              {regions.map((region, i) => (
                <motion.div
                  key={region.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[#0a0a0a] p-4 transition-all hover:border-accent/40"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-accent/30 bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg font-semibold text-[var(--foreground)]">
                        {region.name}
                      </span>
                      <span className="rounded bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">
                        {region.code}
                      </span>
                      <span className="font-mono text-xs text-[var(--muted-foreground)]">
                        {region.highlight}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                      {region.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image + Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg border border-[var(--border)]">
              <Image
                src="/images/datacenter-interior.jpg"
                alt="CryoDC high-density data center interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded bg-[#050505]/80 px-3 py-1.5 backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  <span className="font-mono text-xs text-accent">SGP-Loyang Facility</span>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="grid gap-4 sm:grid-cols-3">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="rounded-lg border border-[var(--border)] bg-[#0a0a0a] p-4"
                >
                  <adv.icon className="mb-2 h-5 w-5 text-accent" />
                  <h4 className="mb-1 font-mono text-sm font-semibold text-[var(--foreground)]">
                    {adv.title}
                  </h4>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {adv.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
