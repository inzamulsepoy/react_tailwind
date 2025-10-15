import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold">codingbolt</a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm text-gray-700 hover:text-gray-900">
              {l.label}
            </a>
          ))}
          <a href="#get-started" className="rounded-xl px-3 py-2 bg-gray-900 text-white hover:bg-gray-800 text-sm">
            Get started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden border rounded-xl p-2"
          onClick={() => setOpen(v => !v)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="1.5">
            {open ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/> : <>
              <path d="M3 6h18" strokeLinecap="round"/>
              <path d="M3 12h18" strokeLinecap="round"/>
              <path d="M3 18h18" strokeLinecap="round"/>
            </>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-2">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded px-3 py-2 text-sm hover:bg-gray-50">
                {l.label}
              </a>
            ))}
            <a href="#get-started" onClick={() => setOpen(false)} className="rounded px-3 py-2 bg-gray-900 text-white text-sm">
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
