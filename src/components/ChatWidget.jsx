// src/components/ChatWidget.jsx
import React, { useState, useRef, useEffect } from "react";

/**
 * ChatWidget
 * - Sticky button bottom-right
 * - Hover opens popout on desktop
 * - Click toggles on mobile
 * - Keyboard accessible (Enter/Space to toggle, Esc to close)
 *
 * Tailwind CSS required for styles. If not using Tailwind, convert classes to your CSS.
 */

const actions = [
  { id: "find", label: "Help me find a product", icon: "🔍" },
  { id: "checkout", label: "Use Razorpay checkout", icon: "🛒" },
  { id: "pricing", label: "Know about product pricing", icon: "₹" },
  { id: "accept", label: "Accept Payments on Website", icon: "🌐" },
  { id: "integrate", label: "How do I integrate Razorpay?", icon: "⚙️" },
  { id: "other", label: "Something else?", icon: "✉️" }
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Open panel when hovering on desktop (mouse)
  useEffect(() => {
    if (hovering) setOpen(true);
    else setOpen(false);
  }, [hovering]);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!panelRef.current) return;
      if (panelRef.current.contains(e.target) || buttonRef.current.contains(e.target)) return;
      setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // toggle for click/tap
  const toggle = () => setOpen((v) => !v);

  return (
    <>
      {/* container - fixed at bottom-right */}
      <div className="fixed left-[10] bottom-6 z-[60]">
        {/* Popout panel */}
        <div
          ref={panelRef}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={`origin-bottom-right transform transition-all duration-200 ${
            open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          <div className="w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100 flex items-start gap-3">
              <div className="flex-none">
                {/* small logo icon */}
                <div className="w-8 h-8 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">R</div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">RAY</div>
                <div className="text-xs text-slate-500 mt-0.5">Looking for something? Let me help you!</div>
              </div>
            </div>

            <div className="p-3 space-y-2">
              {actions.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    // handle action here (navigate / open modal / analytics)
                    console.log("clicked", a.id);
                    setOpen(false); // optionally close
                  }}
                  className="w-full text-left inline-flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 transition"
                >
                  <span className="text-lg">{a.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm text-slate-800">{a.label}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>

            <div className="px-3 py-3 border-t border-slate-100 bg-slate-50">
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
                onClick={() => {
                  console.log("ask ray");
                  setOpen(false);
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 5v.01M12 12v.01M12 19v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Ask RAY
              </button>
            </div>
          </div>
        </div>

        {/* Floating button (hover toggles on desktop, click toggles on mobile) */}
        <button
          ref={buttonRef}
          onClick={toggle}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          aria-haspopup="true"
          aria-expanded={open}
          className="group relative inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 shadow-lg hover:shadow-2xl transition"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            {/* chat icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <span className="hidden sm:inline-block text-sm font-medium text-slate-700 group-hover:text-slate-900">Ask RAY</span>

          {/* small badge arrow */}
          <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs">
            ?
          </span>
        </button>
      </div>
    </>
  );
}
