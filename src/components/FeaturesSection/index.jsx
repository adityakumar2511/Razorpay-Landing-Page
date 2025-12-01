// components/FeaturesSection.jsx
import React, { useEffect, useRef } from "react";

/**
 * A polished, modern feature grid with:
 * - left-aligned headline + optional CTA
 * - 4 attractive feature cards with icons
 * - subtle gradient accents, hover lift + shadow
 * - reveal-on-scroll using IntersectionObserver
 *
 * Props can be added easily (titles, features) if you want customization.
 */
export default function FeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".feature-card");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // leave revealed (no unobserve) for smoother UX
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      title: "Lightning onboarding",
      desc: "Go live in minutes with guided setup and zero paperwork.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Rock-solid security",
      desc: "PCI-grade security and dedicated monitoring for every transaction.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 1l9 4v6c0 5-3.58 9.74-9 12-5.42-2.26-9-7-9-12V5l9-4z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11.5l2.5 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Instant reporting",
      desc: "Live dashboards and exportable reports to keep your team aligned.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14v-4m5 6V9m5 4v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Human-first support",
      desc: "Real people, fast responses — onboarding to growth, we help every step.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Everything you need to scale
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Powerful, composable tools to accept payments, pay your team, and manage cashflow — all in one place.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium shadow-sm hover:scale-[1.02] transform transition"
            >
              Explore products
            </a>
            <a href="/contact" className="text-sm text-slate-600 hover:text-slate-800">
              Talk to sales →
            </a>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <article
              key={f.id}
              className="feature-card relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-white/60 to-white/40 p-6 shadow-sm transform transition will-change-transform"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* gradient accent */}
              <div className="absolute -left-6 -top-6 w-36 h-36 rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-50 opacity-60 blur-3xl pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 shadow-sm shrink-0">
                  {f.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                </div>
              </div>

              {/* subtle hover actions */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-0 transition-all"></div>

              <style>{`
                /* reveal animation */
                .feature-card { opacity: 0; transform: translateY(12px) scale(0.995); }
                .feature-card.show { opacity: 1; transform: translateY(0) scale(1); transition: all 450ms cubic-bezier(.2,.9,.2,1); }

                .feature-card:hover {
                  transform: translateY(-6px) scale(1.01);
                  box-shadow: 0 12px 30px rgba(16,24,40,0.08);
                }

                /* nicer blur helper (tailwind blur-3xl may not exist) */
                .blur-3xl { filter: blur(36px); }
              `}</style>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
