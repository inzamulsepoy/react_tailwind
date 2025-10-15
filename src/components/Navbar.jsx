import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold">
            <span className="inline-block h-6 w-6 rounded-md ring-1 ring-gray-900" />
            <span>Acme</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium">
                {item.label}
              </a>
            ))}
            <a href="#get-started" className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
              Get started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border p-2"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth={1.5}>
              {open ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" /> : <>
                <path d="M3 6h18" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
                <path d="M3 18h18" strokeLinecap="round" />
              </>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-6 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm">
                {item.label}
              </a>
            ))}
            <a href="#get-started" onClick={() => setOpen(false)} className="mt-1 rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white">
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
