"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Circle, Server, Shield, Clock } from "lucide-react";
import Image from "next/image";

interface FacilityStatus {
  id: string;
  location: string;
  region: string;
  capacity: string;
  status: "online" | "available" | "audit";
  statusText: string;
  latency: string;
}

const facilities: FacilityStatus[] = [
  {
    id: "SGP-01",
    location: "SGP-Loyang",
    region: "APAC",
    capacity: "1.2MW",
    status: "available",
    statusText: "Available",
    latency: "2ms",
  },
  {
    id: "LON-01",
    location: "LON-Slough",
    region: "EMEA",
    capacity: "800kW",
    status: "available",
    statusText: "Available",
    latency: "8ms",
  },
  {
    id: "BAH-01",
    location: "BAH-Manama",
    region: "GCC",
    capacity: "TBD",
    status: "audit",
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

export function CapacityDashboard() {
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
        setDisplayedLines(prev => [...prev, terminalLines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowFacilities(true), 300);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  const getStatusColor = (status: FacilityStatus["status"]) => {
    switch (status) {
      case "online":
        return "text-green-400";
      case "available":
        return "text-accent";
      case "audit":
        return "text-yellow-400";
      default:
        return "text-[var(--muted-foreground)]";
    }
  };

  const getStatusDot = (status: FacilityStatus["status"]) => {
    switch (status) {
      case "online":
        return "bg-green-400";
      case "available":
        return "bg-accent";
      case "audit":
        return "bg-yellow-400";
      default:
        return "bg-[var(--muted-foreground)]";
    }
  };

  return (
    <section id="dashboard" className="relative bg-[var(--background)] py-20 md:py-28">
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Capacity <span className="text-accent">Dashboard</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--muted-foreground)]">
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
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[#0a0a0a]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] bg-[#111] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--muted-foreground)]">
                  {currentTime}
                </span>
                <div className="flex items-center gap-1.5">
                  <Activity className="h-3 w-3 text-accent animate-pulse" />
                  <span className="font-mono text-xs text-accent">LIVE</span>
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
                      line.startsWith("root@") 
                        ? "text-accent" 
                        : line.includes("═") || line.includes("║")
                        ? "text-accent/80"
                        : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Facility Status Table */}
              {showFacilities && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-2 border-b border-[var(--border)] pb-2 text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
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
                      className="grid grid-cols-12 gap-2 items-center py-2 border-b border-[var(--border)]/50 hover:bg-accent/5 transition-colors"
                    >
                      <div className="col-span-2 flex items-center gap-2">
                        <Server className="h-4 w-4 text-accent" />
                        <span className="text-[var(--foreground)]">{facility.id}</span>
                      </div>
                      <div className="col-span-3 text-[var(--foreground)]">
                        {facility.location}
                      </div>
                      <div className="col-span-2 text-[var(--muted-foreground)]">
                        {facility.region}
                      </div>
                      <div className="col-span-2 text-accent font-semibold">
                        {facility.capacity}
                      </div>
                      <div className={`col-span-2 flex items-center gap-2 ${getStatusColor(facility.status)}`}>
                        <span className={`h-2 w-2 rounded-full ${getStatusDot(facility.status)} animate-pulse`} />
                        {facility.statusText}
                      </div>
                      <div className="col-span-1 text-[var(--muted-foreground)]">
                        {facility.latency}
                      </div>
                    </motion.div>
                  ))}

                  {/* Summary */}
                  <div className="mt-6 flex flex-wrap items-center gap-6 pt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <Circle className="h-3 w-3 fill-accent text-accent" />
                      <span className="text-[var(--muted-foreground)]">Total Available:</span>
                      <span className="text-accent font-semibold">2.0MW</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-3 w-3 text-green-400" />
                      <span className="text-[var(--muted-foreground)]">Security:</span>
                      <span className="text-green-400">SOC2 Type II</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-[var(--muted-foreground)]" />
                      <span className="text-[var(--muted-foreground)]">Last Updated:</span>
                      <span className="text-[var(--foreground)]">Just now</span>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="mt-4 flex items-center">
                    <span className="text-accent">root@cryodc:~$</span>
                    <span className="ml-2 h-4 w-2 animate-pulse bg-accent" />
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
