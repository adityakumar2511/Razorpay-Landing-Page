// src/components/HeroSection/Slider/index.jsx
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Slider({ slides = [], autoplayInterval = 5000 }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (!autoplayInterval) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, autoplayInterval);
    return () => clearInterval(timerRef.current);
  }, [slides.length, autoplayInterval]);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  if (!slides.length) return null;

  const s = slides[idx];

  return (
    <div className="relative w-full flex items-center">

      {/* ----------------------- LEFT ARROW (outside content) ----------------------- */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="
          hidden lg:flex
          absolute -left-12
          top-1/2 -translate-y-1/2
          p-4 bg-white shadow-lg rounded-full
          hover:bg-slate-50 border border-slate-200
          transition
        "
      >
        <span className="text-xl font-bold text-slate-700">‹</span>
      </button>

      {/* ----------------------- MAIN SLIDER CONTENT ----------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.45 }}
            >
              <h1 className={`text-4xl md:text-5xl font-bold ${s.textColor}`}>{s.title}</h1>
              <p className="mt-3 text-xl text-slate-700">{s.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.bullets.map((b, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-700">
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a href={s.primary.href} className={`px-6 py-3 text-white font-semibold rounded-md shadow ${s.btnColor}`}>
                  {s.primary.label}
                </a>
                <a href={s.secondary.href} className="text-sm font-medium underline text-slate-700">
                  {s.secondary.label}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* dots */}
          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-3 h-3 rounded-full ${i === idx ? 'bg-indigo-600' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={s.img}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-lg">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />

            {/* Floating card */}
            {/* <div className="absolute -bottom-8 right-6 w-64 bg-white rounded-xl shadow-xl ring-1 ring-slate-200">
              <div style={{ background: s.cardAccent }} className="px-4 py-2 text-xs font-semibold text-slate-900">
                Payments
              </div>
              <div className="p-4">
                <div className="h-8 w-full bg-slate-100 rounded mb-3" />
                <div className="text-sm text-slate-600 mb-2">Select Payment Method</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-slate-50 rounded">Card</div>
                  <div className="p-2 bg-slate-50 rounded">UPI</div>
                  <div className="p-2 bg-slate-50 rounded">Netbanking</div>
                  <div className="p-2 bg-slate-50 rounded">EMI</div>
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* ----------------------- RIGHT ARROW (outside content) ----------------------- */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="
          hidden lg:flex
          absolute -right-12
          top-1/2 -translate-y-1/2
          p-4 bg-white shadow-lg rounded-full
          hover:bg-slate-50 border border-slate-200
          transition
        "
      >
        <span className="text-xl font-bold text-slate-700">›</span>
      </button>

    </div>
  );
}
