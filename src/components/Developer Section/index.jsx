// src/components/DevSection.jsx
import React, { useState } from "react";
import developerData from "./developerData";

/*
  Notes:
  - This component uses Tailwind CSS.
  - Make sure your Tailwind setup allows arbitrary shadow and gradient classes,
    or replace with your preferred shadow utilities.
*/

function Ticker({ items }) {
  // duplicate items for seamless loop
  const track = items.concat(items);
  return (
    <div className="bg-slate-900/95 border-b border-slate-800/60">
      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {track.map((t, i) => (
              <span
                key={i}
                className="inline-block px-6 text-sm font-medium text-slate-200/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
        .animate-marquee { display:inline-flex; animation: marquee 16s linear infinite; }
      `}</style>
    </div>
  );
}

function FeatureCard({ f }) {
  /* Visible border + stronger card shadow for punchy elevated look */
  return (
    <div className="bg-white/3 backdrop-blur-sm rounded-xl p-5 border border-slate-700/40
                    shadow-[0_10px_30px_rgba(2,6,23,0.45)] hover:shadow-[0_18px_42px_rgba(2,6,23,0.55)]
                    transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="text-2xl">{f.icon}</div>
        <div>
          <h4 className="text-sm font-semibold text-slate-100">{f.title}</h4>
          <p className="mt-2 text-xs text-slate-300/85 max-w-xs">{f.desc}</p>
        </div>
      </div>
    </div>
  );
}

function CodePanel({ samples }) {
  const keys = Object.keys(samples);
  const [lang, setLang] = useState(keys[0]);

  return (
    <div className="rounded-xl p-4 md:p-6 bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl border border-slate-800/40">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-2 items-center">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setLang(k)}
              className={`text-xs font-medium px-3 py-1 rounded-md ${lang === k ? "bg-sky-600 text-white" : "bg-slate-900/30 text-slate-300"}`}
            >
              {samples[k].label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-400">{developerData.meta.supportLine}</div>
      </div>

      <pre className="rounded-md overflow-auto text-xs md:text-sm leading-relaxed bg-slate-900/60 p-4 md:p-6 text-slate-100">
        <code>{samples[lang].snippet}</code>
      </pre>
    </div>
  );
}

export default function DevSection() {
  const { ticker, hero, features, codeSamples, meta } = developerData;

  return (
    <section className="w-full bg-slate-900 text-white">
      <Ticker items={ticker} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Hero + features */}
          <div className="lg:col-span-6">
            <p className="text-sm text-sky-400 font-semibold mb-3">Razorpay is built</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              {hero.title}
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">{hero.subtitle}</p>

            <div className="mt-6 flex gap-3 flex-wrap">
              {hero.ctas.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold
                    ${c.variant === "solid" ? "bg-sky-500 hover:bg-sky-600 text-white shadow-lg" : "bg-white/5 text-sky-300 hover:bg-white/8"}
                  `}
                >
                  {c.label}
                </a>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f) => <FeatureCard key={f.id} f={f} />)}
            </div>

            <div className="mt-6 text-sm text-slate-400">
              <strong className="text-slate-200">{meta.trust}</strong> · APIs with predictable SLAs
            </div>
          </div>

          {/* Right: code panel + CTA card */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <CodePanel samples={codeSamples} />

            <div className="bg-gradient-to-b from-white/6 to-white/2 rounded-xl p-5 md:p-6 border border-white/8
                            shadow-[0_12px_40px_rgba(2,6,23,0.5)]">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Try it in your stack</h4>
                  <p className="text-sm text-slate-300 mt-1">Use SDKs, quickstart guides and Postman collections to test locally.</p>
                </div>
                <div className="text-sky-400 font-semibold">Docs →</div>
              </div>

              <div className="mt-4 flex gap-3">
                <a className="px-4 py-2 bg-sky-500 rounded-md text-white text-sm font-semibold" href="#sdk">SDKs</a>
                <a className="px-4 py-2 bg-slate-800/40 rounded-md text-slate-200 text-sm" href="#postman">Postman</a>
                <a className="px-4 py-2 bg-slate-800/40 rounded-md text-slate-200 text-sm" href="#playground">Playground</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small footer bar */}
      <div className="bg-slate-800/80 text-slate-300 text-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <div>{meta.trust}</div>
          <div>© {new Date().getFullYear()} Your Company</div>
        </div>
      </div>
    </section>
  );
}
