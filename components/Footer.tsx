import Link from "next/link";
import { Terminal, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo & Info */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <Terminal className="h-5 w-5 text-accent" />
              <span className="text-[var(--foreground)]">Cryo</span>
              <span className="text-accent">DC</span>
            </Link>
            <p className="mb-4 text-sm text-[var(--muted-foreground)] leading-relaxed">
              Securing institutional, liquid-cooled infrastructure for the Blackwell era 
              across the Singapore—London—GCC axis.
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">
              CryoDC operates with Shariah-compliant business ethics: transparent structures, 
              fair counterparties, and principled deployment of capital and infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                Navigate
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  href="#dashboard"
                  className="font-mono text-sm text-[var(--muted-foreground)] transition hover:text-accent"
                >
                  Dashboard
                </Link>
                <Link
                  href="#specs"
                  className="font-mono text-sm text-[var(--muted-foreground)] transition hover:text-accent"
                >
                  Specifications
                </Link>
                <Link
                  href="#why"
                  className="font-mono text-sm text-[var(--muted-foreground)] transition hover:text-accent"
                >
                  Global Presence
                </Link>
                <Link
                  href="#contact"
                  className="font-mono text-sm text-[var(--muted-foreground)] transition hover:text-accent"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                Facilities
              </h4>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-sm text-[var(--muted-foreground)]">
                  <MapPin className="h-3 w-3 text-accent" />
                  SGP-Loyang
                </div>
                <div className="flex items-center gap-2 font-mono text-sm text-[var(--muted-foreground)]">
                  <MapPin className="h-3 w-3 text-accent" />
                  LON-Slough
                </div>
                <div className="flex items-center gap-2 font-mono text-sm text-[var(--muted-foreground)]">
                  <MapPin className="h-3 w-3 text-accent" />
                  BAH-Manama
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} CryoDC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent">
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
