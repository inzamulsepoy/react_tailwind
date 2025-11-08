import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "/about" },
  ];

  // Scroll to section smoothly
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (l) => {
    setOpen(false);
    if (l.href.startsWith("/")) {
      // Navigate to another route (About)
      navigate(l.href);
    } else {
      // Internal section
      if (location.pathname !== "/") {
        // If not on home, go to home first
        navigate("/", { replace: false });
        setTimeout(() => handleScroll(l.href), 100); // small delay to allow DOM render
      } else {
        handleScroll(l.href);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl">
          codingbolt
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleLinkClick(l)}
              className="text-sm text-gray-700 hover:text-gray-900 rounded px-3 py-2"
            >
              {l.label}
            </button>
          ))}

          {/* Get Started */}
          <button
            onClick={() => handleLinkClick({ href: "#get-started" })}
            className="rounded-xl px-3 py-2 bg-gray-900 text-white hover:bg-gray-800 text-sm"
          >
            Get started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden border rounded-xl p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h18" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
                <path d="M3 18h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleLinkClick(l)}
                className="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick({ href: "#get-started" })}
              className="rounded px-3 py-2 bg-gray-900 text-white text-sm"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
