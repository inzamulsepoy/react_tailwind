import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Support", href: "#" },
    { label: "Status", href: "#" },
  ];

  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-600">© {year} Acme, Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-gray-700 hover:text-gray-900">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
