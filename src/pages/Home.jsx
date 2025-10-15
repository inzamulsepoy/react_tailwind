import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <header className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Build faster, ship better.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A sleek starter layout with a reusable Navbar and Footer. Tweak the
              content, plug in your data, and you’re live.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="#get-started"
                className="rounded-2xl px-5 py-3 text-base font-semibold shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Get started
              </a>
              <a
                href="#learn-more"
                className="rounded-2xl px-5 py-3 text-base font-semibold bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,.15), rgba(0,0,0,0))",
            height: 300,
          }}
        />
      </header>

      {/* Features */}
      <main className="flex-1">
        <section id="features" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Opinions included, bloat excluded
              </h2>
              <p className="mt-4 text-gray-600">
                Sensible defaults, componentized layout, and a tidy structure you
                can extend as your app grows.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Responsive Navbar",
                  desc: "Mobile-first menu with keyboard-friendly focus states.",
                },
                {
                  title: "Hero + CTA",
                  desc: "Clear value prop and actions to drive conversions.",
                },
                {
                  title: "Reusable Footer",
                  desc: "Links, socials, and legal in one neat place.",
                },
                {
                  title: "Utility-first styling",
                  desc: "Tailwind-ready classes for rapid iteration.",
                },
                {
                  title: "Accessible by default",
                  desc: "Semantic HTML, aria labels, and good contrast.",
                },
                {
                  title: "Easy to customize",
                  desc: "Swap colors, copy, or layout in minutes.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition"
                >
                  <div className="mb-3">
                    {/* simple decorative icon */}
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3l2.39 4.84 5.34.78-3.86 3.76.91 5.31L12 15.9l-4.78 2.5.91-5.31L4.27 8.62l5.34-.78L12 3z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Callout */}
        <section
          id="get-started"
          className="bg-gray-50 border-y border-gray-200 py-14"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-start gap-6 rounded-2xl p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Ready to launch?</h3>
                <p className="mt-2 text-gray-600">
                  Copy these files into your project and tailor them to your brand.
                </p>
              </div>
              <a
                href="#"
                className="rounded-2xl bg-gray-900 px-5 py-3 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                View docs
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
