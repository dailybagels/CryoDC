"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Terminal,
  Download,
  Search,
  Activity,
  Circle,
  Server,
  Shield,
  Clock,
  Cpu,
  Droplets,
  Building2,
  Lock,
  MapPin,
  Zap,
  Send,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

// =============================================================================
// DATA
// =============================================================================

const navLinks = [
  { href: "#dashboard", label: "Dashboard" },
  { href: "#specs", label: "Specs" },
  { href: "#contact", label: "Contact" },
];

const facilities = [
  {
    id: "SGP-01",
    location: "SGP-Loyang",
    region: "APAC",
    capacity: "1.2MW",
    status: "available" as const,
    statusText: "Available",
    latency: "2ms",
  },
  {
    id: "LON-01",
    location: "LON-Slough",
    region: "EMEA",
    capacity: "800kW",
    status: "available" as const,
    statusText: "Available",
    latency: "8ms",
  },
  {
    id: "BAH-01",
    location: "BAH-Manama",
    region: "GCC",
    capacity: "TBD",
    status: "audit" as const,
    statusText: "Under Audit",
    latency: "--",
  },
];

const terminalLines = [
  "root@cryodc:~$ ./capacity-audit --region=all",
  "Connecting to monitoring cluster...",
  "Authenticated via PKI certificate",
  "Fetching real-time telemetry...",
  "",
  "╔═══════════════════════════════════════════════════════════════╗",
  "║              CRYODC CAPACITY DASHBOARD v2.4.1                 ║",
  "║                   [ LIVE TELEMETRY ]                          ║",
  "╚═══════════════════════════════════════════════════════════════╝",
  "",
];

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

const interests = [
  "Blackwell Blueprint Download",
  "Capacity Audit",
  "Site Visit Request",
  "Partnership Inquiry",
];

// =============================================================================
// NAVBAR
// =============================================================================

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-[#262626] bg-[#050505]/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Terminal className="h-5 w-5 text-[#00F0FF]" />
          <span className="text-[#e5e5e5]">Cryo</span>
          <span className="text-[#00F0FF]">DC</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-[#737373] transition-colors hover:text-[#00F0FF]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded border border-[#00F0FF]/40 bg-[#00F0FF]/5 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#00F0FF] transition hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/60"
          >
            Audit Capacity
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="rounded-md p-2 text-[#e5e5e5] hover:bg-[#1a1a1a] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#262626] bg-[#050505] md:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 font-mono text-xs uppercase tracking-wider text-[#737373] hover:bg-[#1a1a1a] hover:text-[#00F0FF]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded border border-[#00F0FF]/40 bg-[#00F0FF]/5 px-3 py-2 text-center font-mono text-xs uppercase tracking-wider text-[#00F0FF]"
              >
                Audit Capacity
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// =============================================================================
// HERO
// =============================================================================

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.03) 2px, rgba(0, 240, 255, 0.03) 4px)`,
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 px-4 py-1.5"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#00F0FF]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
            Blackwell-Ready Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6 max-w-4xl text-balance"
        >
          <span className="block text-5xl font-bold tracking-tight text-[#e5e5e5] sm:text-6xl md:text-7xl lg:text-8xl">
            The{" "}
            <span
              className="text-[#00F0FF]"
              style={{ textShadow: "0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.2)" }}
            >
              132kW
            </span>{" "}
            Barrier.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mb-10 max-w-2xl text-balance text-base text-[#737373] sm:text-lg md:text-xl"
        >
          Securing institutional, liquid-cooled infrastructure for the Blackwell era across the{" "}
          <span className="font-mono text-[#00F0FF]">Singapore</span>—
          <span className="font-mono text-[#00F0FF]">London</span>—
          <span className="font-mono text-[#00F0FF]">GCC</span> axis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#specs"
            className="group inline-flex items-center gap-2 rounded border border-[#00F0FF] bg-transparent px-6 py-3 font-mono text-sm uppercase tracking-wider text-[#00F0FF] transition hover:bg-[#00F0FF]/10"
            style={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1)" }}
          >
            <Download size={16} />
            Download Blackwell Blueprint
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-[#262626] bg-[#1a1a1a] px-6 py-3 font-mono text-sm uppercase tracking-wider text-[#e5e5e5] transition hover:border-[#00F0FF]/40 hover:text-[#00F0FF]"
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-8 w-px bg-gradient-to-b from-[#00F0FF] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
// CAPACITY DASHBOARD
// =============================================================================

function CapacityDashboard() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState("");
  const [showFacilities, setShowFacilities] = useState(false);

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toISOString().slice(0, 19).replace("T", " ") + " UTC");
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toISOString().slice(0, 19).replace("T", " ") + " UTC");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let lineIndex = 0;
    const typeInterval = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        setDisplayedLines((prev) => [...prev, terminalLines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowFacilities(true), 300);
      }
    }, 150);
    return () => clearInterval(typeInterval);
  }, []);

  const getStatusColor = (status: "online" | "available" | "audit") => {
    switch (status) {
      case "online":
        return "text-green-400";
      case "available":
        return "text-[#00F0FF]";
      case "audit":
        return "text-yellow-400";
      default:
        return "text-[#737373]";
    }
  };

  const getStatusDot = (status: "online" | "available" | "audit") => {
    switch (status) {
      case "online":
        return "bg-green-400";
      case "available":
        return "bg-[#00F0FF]";
      case "audit":
        return "bg-yellow-400";
      default:
        return "bg-[#737373]";
    }
  };

  return (
    <section id="dashboard" className="relative bg-[#050505] py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/datacenter-construction.jpg"
          alt="Data center construction site"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e5e5e5] sm:text-4xl md:text-5xl">
            Capacity <span className="text-[#00F0FF]">Dashboard</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#737373]">
            Real-time infrastructure status across our global facility network.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-lg border border-[#262626] bg-[#0a0a0a]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-[#262626] bg-[#111] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#737373]">{currentTime}</span>
                <div className="flex items-center gap-1.5">
                  <Activity className="h-3 w-3 text-[#00F0FF] animate-pulse" />
                  <span className="font-mono text-xs text-[#00F0FF]">LIVE</span>
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="min-h-[400px] p-4 font-mono text-sm">
              {/* Typed Lines */}
              <div className="mb-4 space-y-1">
                {displayedLines.map((line, i) => (
                  <div
                    key={i}
                    className={`${
                      line?.startsWith("root@")
                        ? "text-[#00F0FF]"
                        : line?.includes("═") || line?.includes("║")
                        ? "text-[#00F0FF]/80"
                        : "text-[#737373]"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Facility Status Table */}
              {showFacilities && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-2 border-b border-[#262626] pb-2 text-xs uppercase tracking-wider text-[#737373]">
                    <div className="col-span-2">ID</div>
                    <div className="col-span-3">Location</div>
                    <div className="col-span-2">Region</div>
                    <div className="col-span-2">Capacity</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-1">Ping</div>
                  </div>

                  {/* Facility Rows */}
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={facility.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="grid grid-cols-12 gap-2 items-center py-2 border-b border-[#262626]/50 hover:bg-[#00F0FF]/5 transition-colors"
                    >
                      <div className="col-span-2 flex items-center gap-2">
                        <Server className="h-4 w-4 text-[#00F0FF]" />
                        <span className="text-[#e5e5e5]">{facility.id}</span>
                      </div>
                      <div className="col-span-3 text-[#e5e5e5]">{facility.location}</div>
                      <div className="col-span-2 text-[#737373]">{facility.region}</div>
                      <div className="col-span-2 text-[#00F0FF] font-semibold">{facility.capacity}</div>
                      <div className={`col-span-2 flex items-center gap-2 ${getStatusColor(facility.status)}`}>
                        <span className={`h-2 w-2 rounded-full ${getStatusDot(facility.status)} animate-pulse`} />
                        {facility.statusText}
                      </div>
                      <div className="col-span-1 text-[#737373]">{facility.latency}</div>
                    </motion.div>
                  ))}

                  {/* Summary */}
                  <div className="mt-6 flex flex-wrap items-center gap-6 pt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <Circle className="h-3 w-3 fill-[#00F0FF] text-[#00F0FF]" />
                      <span className="text-[#737373]">Total Available:</span>
                      <span className="text-[#00F0FF] font-semibold">2.0MW</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-3 w-3 text-green-400" />
                      <span className="text-[#737373]">Security:</span>
                      <span className="text-green-400">SOC2 Type II</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-[#737373]" />
                      <span className="text-[#737373]">Last Updated:</span>
                      <span className="text-[#e5e5e5]">Just now</span>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="mt-4 flex items-center">
                    <span className="text-[#00F0FF]">root@cryodc:~$</span>
                    <span className="ml-2 h-4 w-2 animate-pulse bg-[#00F0FF]" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
// INFRASTRUCTURE / SPECS
// =============================================================================

function Infrastructure() {
  return (
    <section id="specs" className="relative bg-[#050505] py-20 md:py-28">
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
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
            Technical Specifications
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e5e5e5] sm:text-4xl md:text-5xl">
            Built for the <span className="text-[#00F0FF]">Blackwell Era</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#737373]">
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
              className="group relative overflow-hidden rounded-lg border border-[#262626] bg-[#0a0a0a] p-6 transition-all hover:border-[#00F0FF]/40"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-[#00F0FF]/5 to-transparent" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10 p-3 text-[#00F0FF]">
                  <spec.icon size={24} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-1 font-mono text-xs uppercase tracking-widest text-[#737373]">{spec.title}</h3>

                {/* Value */}
                <div className="mb-1">
                  <span
                    className="text-2xl font-bold text-[#00F0FF]"
                    style={{ textShadow: "0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.2)" }}
                  >
                    {spec.value}
                  </span>
                </div>

                {/* Unit */}
                <p className="mb-3 font-mono text-sm text-[#e5e5e5]">{spec.unit}</p>

                {/* Description */}
                <p className="text-sm text-[#737373] leading-relaxed">{spec.description}</p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#00F0FF] transition-all duration-300 group-hover:w-full" />
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
            <div key={stat.label} className="rounded border border-[#262626] bg-[#0a0a0a]/50 p-4 text-center">
              <div className="font-mono text-xl font-bold text-[#00F0FF]">{stat.value}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-[#737373]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
// WHY / GLOBAL PRESENCE
// =============================================================================

function Why() {
  return (
    <section id="why" className="relative bg-[#050505] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
              Global Presence
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#e5e5e5] sm:text-4xl md:text-5xl">
              {"The SGP—LON—GCC"} <span className="text-[#00F0FF]">Axis</span>
            </h2>
            <p className="mb-8 text-lg text-[#737373] leading-relaxed">
              Strategic positioning across three continents for low-latency inference, data sovereignty compliance, and
              diversified infrastructure risk.
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
                  className="group flex items-start gap-4 rounded-lg border border-[#262626] bg-[#0a0a0a] p-4 transition-all hover:border-[#00F0FF]/40"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10">
                    <MapPin className="h-5 w-5 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg font-semibold text-[#e5e5e5]">{region.name}</span>
                      <span className="rounded bg-[#00F0FF]/10 px-2 py-0.5 font-mono text-xs text-[#00F0FF]">
                        {region.code}
                      </span>
                      <span className="font-mono text-xs text-[#737373]">{region.highlight}</span>
                    </div>
                    <p className="mt-1 text-sm text-[#737373]">{region.description}</p>
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
            <div className="relative aspect-video overflow-hidden rounded-lg border border-[#262626]">
              <Image src="/images/datacenter-interior.jpg" alt="CryoDC high-density data center interior" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded bg-[#050505]/80 px-3 py-1.5 backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#00F0FF]" />
                  <span className="font-mono text-xs text-[#00F0FF]">SGP-Loyang Facility</span>
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
                  className="rounded-lg border border-[#262626] bg-[#0a0a0a] p-4"
                >
                  <adv.icon className="mb-2 h-5 w-5 text-[#00F0FF]" />
                  <h4 className="mb-1 font-mono text-sm font-semibold text-[#e5e5e5]">{adv.title}</h4>
                  <p className="text-xs text-[#737373] leading-relaxed">{adv.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// CONTACT
// =============================================================================

function Contact() {
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
    <section id="contact" className="relative bg-[#050505] py-20 md:py-28">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">Get Started</span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e5e5e5] sm:text-4xl">
            Audit Your <span className="text-[#00F0FF]">Capacity</span>
          </h2>
          <p className="text-[#737373]">Share your requirements. We respond within one business day.</p>
        </motion.div>

        <motion.form
          name="contact"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 rounded-lg border border-[#262626] bg-[#0a0a0a] p-6 md:p-8"
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
              <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#737373]">
                <User className="h-3 w-3" />
                Name
              </label>
              <input
                required
                name="name"
                className="w-full rounded border border-[#262626] bg-[#050505] px-4 py-3 font-mono text-sm text-[#e5e5e5] outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]/40 placeholder:text-[#737373]"
                placeholder="Your name"
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#737373]">
                <Building2 className="h-3 w-3" />
                Company
              </label>
              <input
                required
                name="company"
                className="w-full rounded border border-[#262626] bg-[#050505] px-4 py-3 font-mono text-sm text-[#e5e5e5] outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]/40 placeholder:text-[#737373]"
                placeholder="Your company"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#737373]">
              <Mail className="h-3 w-3" />
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded border border-[#262626] bg-[#050505] px-4 py-3 font-mono text-sm text-[#e5e5e5] outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]/40 placeholder:text-[#737373]"
              placeholder="you@company.com"
            />
          </div>

          {/* Interest */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#737373]">
              <MessageSquare className="h-3 w-3" />
              Interest
            </label>
            <select
              required
              name="interest"
              className="w-full rounded border border-[#262626] bg-[#050505] px-4 py-3 font-mono text-sm text-[#e5e5e5] outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]/40"
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
            <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#737373]">
              <MessageSquare className="h-3 w-3" />
              Message (optional)
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-none rounded border border-[#262626] bg-[#050505] px-4 py-3 font-mono text-sm text-[#e5e5e5] outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]/40 placeholder:text-[#737373]"
              placeholder="Tell us about your capacity requirements..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded border border-[#00F0FF] bg-[#00F0FF]/10 px-6 py-3 font-mono text-sm uppercase tracking-wider text-[#00F0FF] transition hover:bg-[#00F0FF]/20 disabled:opacity-50"
            style={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1)" }}
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

// =============================================================================
// FOOTER
// =============================================================================

function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#050505] py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo & Info */}
          <div className="max-w-sm">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
              <Terminal className="h-5 w-5 text-[#00F0FF]" />
              <span className="text-[#e5e5e5]">Cryo</span>
              <span className="text-[#00F0FF]">DC</span>
            </Link>
            <p className="mb-4 text-sm text-[#737373] leading-relaxed">
              Securing institutional, liquid-cooled infrastructure for the Blackwell era across the Singapore—London—GCC axis.
            </p>
            <p className="text-xs text-[#737373]">
              CryoDC operates with Shariah-compliant business ethics: transparent structures, fair counterparties, and
              principled deployment of capital and infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-[#00F0FF]">Navigate</h4>
              <div className="flex flex-col gap-2">
                <Link href="#dashboard" className="font-mono text-sm text-[#737373] transition hover:text-[#00F0FF]">
                  Dashboard
                </Link>
                <Link href="#specs" className="font-mono text-sm text-[#737373] transition hover:text-[#00F0FF]">
                  Specifications
                </Link>
                <Link href="#why" className="font-mono text-sm text-[#737373] transition hover:text-[#00F0FF]">
                  Global Presence
                </Link>
                <Link href="#contact" className="font-mono text-sm text-[#737373] transition hover:text-[#00F0FF]">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-[#00F0FF]">Facilities</h4>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-sm text-[#737373]">
                  <MapPin className="h-3 w-3 text-[#00F0FF]" />
                  SGP-Loyang
                </div>
                <div className="flex items-center gap-2 font-mono text-sm text-[#737373]">
                  <MapPin className="h-3 w-3 text-[#00F0FF]" />
                  LON-Slough
                </div>
                <div className="flex items-center gap-2 font-mono text-sm text-[#737373]">
                  <MapPin className="h-3 w-3 text-[#00F0FF]" />
                  BAH-Manama
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#262626] pt-8 md:flex-row">
          <p className="font-mono text-xs text-[#737373]">© {new Date().getFullYear()} CryoDC. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00F0FF]" />
            <span className="font-mono text-xs text-[#00F0FF]">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function CryoDCLanding() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CapacityDashboard />
      <Infrastructure />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
