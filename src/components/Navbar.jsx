import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

/**
 * NavBar:
 * - PayFlow wordmark animated by GSAP
 * - Framer Motion mobile drawer
 * - animated underline on hover using framer + css fallback
 */
export default function Navbar({ navItems = [], primaryCta = { title: 'Get Started', href: '/signup' } }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    // GSAP intro for "PayFlow" wordmark
    if (logoRef.current) {
      gsap.fromTo(logoRef.current.querySelectorAll('.char'), { y: 8, opacity: 0, skewY: 6 }, {
        y: 0, opacity: 1, skewY: 0, stagger: 0.03, ease: 'power3.out', duration: 0.6
      });
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [menuOpen]);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* left: desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.slice(0, Math.ceil(navItems.length / 2)).map((it) => (
              <a key={it.id} href={it.href} className="relative text-sm text-slate-700 hover:text-slate-900 group">
                {it.title}
                <span className="block h-[2px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1" />
              </a>
            ))}
          </nav>

          {/* center logo */}
          <div className="flex justify-center items-center">
            <a href="/" className="flex items-center gap-3" ref={logoRef} aria-label="PayFlow home">
              {/* stylized PayFlow wordmark - each letter wrapped for GSAP */}
              <div className="text-2xl payflow-logo text-slate-900 flex items-center gap-1">
                {Array.from('PayFlow').map((ch, i) => (
                  <span key={i} className="char inline-block">{ch}</span>
                ))}
              </div>
            </a>
          </div>

          {/* right: desktop nav + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center gap-6">
              {navItems.slice(Math.ceil(navItems.length / 2)).map((it) => (
                <a key={it.id} href={it.href} className="relative text-sm text-slate-700 hover:text-slate-900 group">
                  {it.title}
                  <span className="block h-[2px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1" />
                </a>
              ))}
            </nav>

            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={primaryCta.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium shadow">
              {primaryCta.title}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </motion.a>
          </div>

          {/* mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="p-2 rounded-md border border-gray-100 shadow-sm bg-white">
              <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} />
            <motion.aside className="fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-2xl p-6" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} role="dialog" aria-modal="true">
              <div className="flex items-center justify-between mb-6">
                <div className="font-semibold text-lg">PayFlow</div>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((it) => <a key={it.id} href={it.href} className="py-2 text-slate-800 font-medium border-b border-gray-100" onClick={() => setMenuOpen(false)}>{it.title}</a>)}
              </nav>

              <div className="mt-6">
                <a href="/signup" className="block text-center py-3 rounded-md bg-indigo-600 text-white font-semibold">Get Started</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
