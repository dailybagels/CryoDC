"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#why", label: "Why CryoDC" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-50"
        >
          <span className="mr-1">Cryo</span>
          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
            DC
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300/80 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.35)] transition hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="rounded-md p-2 text-slate-200 hover:bg-slate-800 md:hidden"
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
            className="border-t border-slate-800/70 bg-slate-950 md:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-2 text-center text-sm font-medium text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.30)]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
