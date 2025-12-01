// components/BottomBar.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * BottomBar
 * Props:
 *  - items: [{id,label,href}]
 *  - label: string
 *  - sticky: boolean (if true, bar sticks to bottom on small screens)
 *  - dismissible: boolean (if true, show close button)
 */
export default function BottomBar({
  items = [],
  label = "Looking for a product?",
  sticky = true,
  dismissible = true,
}) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className={`w-full flex justify-center z-50 ${
        sticky ? "fixed left-0 right-0 bottom-4 px-4" : "mt-10"
      }`}
      aria-live="polite"
    >
      <div
        className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-slate-100 px-3 py-3 flex items-center gap-3 sm:gap-4
                   border border-transparent sm:border-slate-50"
        role="region"
        aria-label="Quick product actions"
      >
        {/* left icon + label */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-50 text-indigo-600 shrink-0">
            {/* product icon (subtle) */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M3 7h18M3 12h18M3 17h18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="text-sm font-semibold text-slate-800 truncate">
              {label}
            </div>
            <div className="text-xs text-slate-500 hidden sm:block">
              Explore features & start in minutes
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="hidden sm:block h-8 w-px bg-slate-100 mx-2" />

        {/* action row: horizontally scrollable on small, grid on large */}
        <div className="flex-1">
          <ul
            role="list"
            className="flex gap-3 items-center py-1 px-1 overflow-x-auto snap-x snap-mandatory touch-pan-x no-scrollbar
                       sm:grid sm:grid-cols-6 sm:auto-rows-fr sm:gap-3"
          >
            {items.map((it) => (
              <li
                key={it.id}
                className="flex-shrink-0 snap-center sm:snap-none"
                aria-hidden={false}
              >
                <a
                  href={it.href}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 text-sm text-slate-700 border border-slate-100
                             hover:bg-white hover:scale-100 transform transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300
                             active:scale-95"
                  aria-label={it.label}
                >
                  {/* tag icon */}
                  <svg
                    className="w-4 h-4 text-indigo-500 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M20.59 13.41L11 3.83 3.83 11 13.41 20.59a2 2 0 002.83 0l1.35-1.35a2 2 0 000-2.83z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
                  </svg>

                  <span className="truncate max-w-[10rem] sm:max-w-none">
                    {it.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* dismiss button on the right (optional) */}
        {dismissible && (
          <div className="flex items-start sm:items-center">
            <button
              type="button"
              aria-label="Dismiss quick actions"
              title="Dismiss"
              onClick={() => setVisible(false)}
              className="p-1.5 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300"
            >
              <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

BottomBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  label: PropTypes.string,
  sticky: PropTypes.bool,
  dismissible: PropTypes.bool,
};
