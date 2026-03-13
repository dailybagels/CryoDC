"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#dashboard", label: "Dashboard" },
  { href: "#specs", label: "Specs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-[#1a1a1a] bg-[#050505]/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <Terminal className="h-5 w-5 text-accent" />
          <span className="text-[var(--foreground)]">Cryo</span>
          <span className="text-accent">DC</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded border border-accent/40 bg-accent/5 px-4 py-2 font-mono text-xs uppercase tracking-wider text-accent transition hover:bg-accent/10 hover:border-accent/60"
          >
            Audit Capacity
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="rounded-md p-2 text-[var(--foreground)] hover:bg-[var(--muted)] md:hidden"
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
            className="border-t border-[#1a1a1a] bg-[#050505] md:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded border border-accent/40 bg-accent/5 px-3 py-2 text-center font-mono text-xs uppercase tracking-wider text-accent"
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
