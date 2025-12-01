// src/components/TopBar.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchCountries } from '../data/siteData';

/**
 * TopBar (updated — always show text labels for Login and Sign up)
 */

export default function Header({ initialCountries = null, onCountryChange = () => {} }) {
  const [countries, setCountries] = useState(initialCountries || []);
  const [selected, setSelected] = useState('IN');

  useEffect(() => {
    AOS.init({ duration: 500, once: true, easing: 'ease-out-cubic' });
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!initialCountries) {
      fetchCountries().then((list) => {
        if (!mounted) return;
        setCountries(list);
        if (list.find((c) => c.code === 'IN')) setSelected('IN');
      });
    }
    return () => (mounted = false);
  }, [initialCountries]);

  function handleChange(e) {
    setSelected(e.target.value);
    onCountryChange(e.target.value);
  }

  const selectedObj = countries.find((c) => c.code === selected) || {};

  return (
    <div className="w-full py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-down">
        <div className="flex items-center justify-between gap-4 header-glass rounded-full px-3 py-2 shadow-sm">
          {/* Left: support */}
          <div className="flex items-center gap-3 text-sm text-slate-700 min-w-0">
            <svg className="h-5 w-5 text-indigo-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 3v2M12 19v2M4 12H2M22 12h-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="truncate">Need help? Reach us 24/7 — +91-2222-222222</span>
          </div>

          {/* Center: small promo (hidden on very small screens) */}
          <div className="hidden sm:flex items-center gap-3 px-2">
            <span className="text-xs text-slate-600">New</span>
            <div className="text-sm font-medium bg-indigo-50/60 px-3 py-1 rounded-full text-indigo-700">Instant settlements for startups</div>
          </div>

          {/* Right: country selector + login/signup (text ALWAYS visible) */}
          <div className="flex items-center gap-2">
            {selectedObj.flag && (
              <img
                src={selectedObj.flag}
                alt={`${selectedObj.name} flag`}
                className="h-5 w-6 rounded-sm object-cover shadow-sm flex-shrink-0"
              />
            )}

            <select
              value={selected}
              onChange={handleChange}
              aria-label="Choose country"
              className="text-sm bg-transparent focus:outline-none"
            >
              {countries.length === 0 && <option>Loading...</option>}
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* LOGIN: always visible with text */}
            <a
              href="/login"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-gray-200 text-sm text-slate-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
            >
              {/* icon optional, kept small */}
              <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 21v-1a4 4 0 014-4h8a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Login</span>
            </a>

            {/* SIGNUP: always visible with text */}
            <a
              href="/signup"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            >
              <span>Sign up</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
