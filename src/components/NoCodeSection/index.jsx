// src/components/NoCodeSection.jsx
import React from "react";
import noCodeData from "./noCodeData";

export default function NoCodeSection() {
  const { eyebrow, kicker, title, subtitle, cards } = noCodeData;

  return (
    <section className="w-full bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-12">
          <p className="text-sm text-slate-500">{eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            <span className="text-emerald-600 mr-2 inline-block">{kicker}</span>
            <span className="block text-slate-900">{title}</span>
          </h2>
          {subtitle && <p className="mt-3 text-slate-600 max-w-2xl">{subtitle}</p>}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100
                         shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_14px_40px_rgba(2,6,23,0.10)]
                         transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">{c.tag}</p>
                  <h3 className="mt-3 text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                    <span>{c.title} </span>
                    <span className="text-indigo-600">{c.highlight}</span>
                    {c.desc ? <span className="text-slate-900"> {c.desc}</span> : null}
                  </h3>
                </div>

                <div className="ml-4 flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 text-xl">
                  <span aria-hidden>{c.icon}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-5">
                <a
                  href={c.primary.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
                >
                  {c.primary.label}
                </a>

                <a
                  href={c.secondary.href}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  {c.secondary.label}
                </a>
              </div>

              {/* small decorative right arrow circle (like screenshot) */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md hidden lg:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
