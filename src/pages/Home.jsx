import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Build faster, ship better.</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          This file holds only the page content. The layout (Navbar & Footer) is in App.jsx.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-gray-900 text-white hover:bg-gray-800"
          >
            Get started
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 border hover:bg-gray-50"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16 border-t">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">Features</h2>
          <p className="mt-2 text-gray-600">
            Opinionated defaults, accessible components, and a layout that scales with you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Responsive Navbar",
              desc: "Mobile-friendly menu with keyboard accessibility.",
            },
            {
              title: "Reusable Sections",
              desc: "Drop-in sections for hero, features, pricing, and about.",
            },
            {
              title: "Utility-first styling",
              desc: "Tailwind classes for fast iteration and consistent UI.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border p-6 hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16 border-t">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">Pricing</h2>
          <p className="mt-2 text-gray-600">
            Simple, transparent plans. Pick what fits—upgrade anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$0",
              perks: ["Basic components", "Email support", "MIT License"],
              cta: "Get Starter",
            },
            {
              name: "Pro",
              price: "$19",
              perks: ["Everything in Starter", "Extra sections", "Priority support"],
              cta: "Go Pro",
              highlighted: true,
            },
            {
              name: "Team",
              price: "$49",
              perks: ["Everything in Pro", "Team license", "Design tokens"],
              cta: "Choose Team",
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 flex flex-col ${
                plan.highlighted ? "ring-1 ring-gray-900" : ""
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-2 text-3xl font-bold">{plan.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {plan.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span aria-hidden>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-gray-900 text-white hover:bg-gray-800"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 border-t">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="mt-3 text-gray-600">
              This starter gives you a clean foundation: a responsive Navbar,
              a reusable Footer, and practical sections to launch quickly.
              Customize copy, colors, and components to match your brand.
            </p>
            <p className="mt-3 text-gray-600">
              Built with accessibility and performance in mind, so you can focus
              on your product—without reinventing the layout every time.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">Tech stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>React + Vite</li>
              <li>Tailwind CSS (v4-ready)</li>
              <li>Semantic HTML, ARIA-friendly patterns</li>
            </ul>
            <a
              id="get-started"
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-gray-900 text-white hover:bg-gray-800"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
