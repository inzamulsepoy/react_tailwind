import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-600">© {year} Acme, Inc.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
}
