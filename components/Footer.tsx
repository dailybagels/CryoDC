import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-xs">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-slate-300/90">
            © {new Date().getFullYear()} CryoDC. All rights reserved.
          </p>
          <p className="mt-2 max-w-md text-[11px] text-slate-400">
            CryoDC operates with Shariah-compliant business ethics:
            transparent structures, fair counterparties, and principled
            deployment of capital and infrastructure.
          </p>
        </div>
        <div className="flex gap-4 text-slate-300/80">
          <Link href="#infrastructure" className="hover:text-cyan-400">
            Infrastructure
          </Link>
          <Link href="#why" className="hover:text-cyan-400">
            Why CryoDC
          </Link>
          <Link href="#contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
