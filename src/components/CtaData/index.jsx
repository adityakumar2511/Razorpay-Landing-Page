// src/components/SuperchargeSection.jsx
import React from "react";
import ctaData from "./ctaData";

/**
 * SuperchargeSection
 * - Responsive, accessible CTA band with optional alert on top.
 * - Tailwind CSS utilities used. Replace classes if needed.
 */

export default function SuperchargeSection() {
  const { alert, hero } = ctaData;

  // small helper for alert color
  const alertClasses = {
    warning: "bg-orange-50 border-orange-200 text-orange-700",
    info: "bg-sky-50 border-sky-200 text-sky-800",
    success: "bg-emerald-50 border-emerald-200 text-emerald-700"
  }[alert?.tone || "info"];

  return (
    <div className="w-full">
      {/* Top alert (optional) */}
      {alert?.show && (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4`}>
          <div className={`rounded-md p-3 border ${alertClasses} shadow-sm`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {/* small icon */}
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M10 2a8 8 0 110 16 8 8 0 010-16zm.75 4.75a.75.75 0 10-1.5 0v4.5a.75.75 0 001.5 0v-4.5zM10 13a.9.9 0 100 1.8.9.9 0 000-1.8z" />
                </svg>
              </div>
              <div className="text-sm text-left">
                <div className="text-xs leading-snug">{alert.text}</div>
                {alert.cta && (
                  <div className="mt-2">
                    <a
                      href={alert.cta.href}
                      className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-md bg-white/90 border border-current"
                    >
                      {alert.cta.label}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main hero CTA band */}
      <section className={`${hero.bg} py-14 sm:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* text block */}
            <div className="lg:col-span-7">
              {hero.eyebrow && <p className="text-sm text-slate-500 mb-2">{hero.eyebrow}</p>}

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight whitespace-pre-line">
                {hero.heading}
              </h2>

              {hero.sub && <p className="mt-4 text-lg text-slate-600 max-w-2xl">{hero.sub}</p>}

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={hero.primary.href}
                  className="inline-flex items-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
                >
                  {hero.primary.label}
                </a>

                {hero.secondary && (
                  <a
                    href={hero.secondary.href}
                    className="inline-flex items-center px-4 py-3 rounded-md bg-white text-indigo-600 font-medium border border-slate-200 hover:shadow-sm transition"
                  >
                    {hero.secondary.label}
                  </a>
                )}
              </div>
            </div>

            {/* empty right column or decorative image/illustration */}
            <div className="lg:col-span-5">
              {/* You can place an illustration or decorative element here.
                  Kept empty to match your screenshot (clean left-aligned CTA). */}
              <div className="hidden lg:block" aria-hidden>
                {/* decorative placeholder */}
                <div className="w-full h-40 rounded-lg bg-gradient-to-r from-indigo-50 to-sky-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
