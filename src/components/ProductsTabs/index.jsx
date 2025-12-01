import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * ProductsTabs
 * Props:
 *  - tabs: [{ id, label, meta (optional), panels: [{ id, title, desc, badge, image, href, tag }...] }]
 *  - defaultTabId: id to open by default
 *
 * Example usage at the bottom of this file.
 */
export default function ProductsTabs({ tabs = [], defaultTabId = null }) {
  const firstTab = defaultTabId ?? (tabs[0] && tabs[0].id);
  const [activeId, setActiveId] = useState(firstTab);
  const tabsRef = useRef([]);
  const activePanelRef = useRef(null);

  // keyboard navigation for tabs
  useEffect(() => {
    const handler = (e) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      const currentIndex = tabs.findIndex((t) => t.id === activeId);
      if (currentIndex === -1) return;
      let nextIndex = currentIndex;
      if (e.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
      if (e.key === "Home") nextIndex = 0;
      if (e.key === "End") nextIndex = tabs.length - 1;
      tabsRef.current[nextIndex]?.focus();
      setActiveId(tabs[nextIndex].id);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [tabs, activeId]);

  // for small screens: scroll active tab into view
  useEffect(() => {
    const el = tabsRef.current[tabs.findIndex(t => t.id === activeId)];
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
    }
  }, [activeId, tabs]);

  const renderCards = (panelItems) => (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-live="polite"
      ref={activePanelRef}
    >
      {panelItems.map((card) => (
        <article
          key={card.id}
          className="flex flex-col items-center text-center h-full rounded-2xl border border-slate-400 outline outline-2 outline-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:outline-indigo-400 transition transform hover:-translate-y-1"
        >
          {/* image / icon */}
          {card.image && (
            <div className="flex items-center justify-start mb-4">
              <img
                src={card.image}
                alt={card.title || ""}
                className="h-20 w-auto object-contain mx-auto"
              />

            </div>
          )}

          {/* title + badge */}
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-lg font-semibold text-slate-900">{card.title}</h4>
            {card.badge && (
              <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full">
                {card.badge}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 mt-2 flex-1">{card.desc}</p>

          <div className="mt-4 flex items-center justify-between gap-3">
            {card.tag && <span className="text-xs text-slate-500">{card.tag}</span>}
            <a
              href={card.href || "#"}
              className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Learn more →
            </a>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">The all in one finance platform</h2>
          <p className="text-sm text-slate-600 mt-2">Choose a product category to explore features & quick links.</p>
        </div>

        <div className="w-full sm:w-auto">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab, i) => {
              const active = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabsRef.current[i] = el)}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition
                              ${active ? "bg-indigo-600 text-white shadow" : "bg-white text-slate-700 border border-slate-100"}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{tab.label}</span>
                    {tab.meta && <span className="text-xs bg-slate-50 px-2 py-0.5 rounded-full text-slate-500">{tab.meta}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Panels */}
      <div>
        {tabs.map((tab) => {
          const active = tab.id === activeId;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={!active}
              className={`transition-all ${active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
            >
              <div className="py-3">
                {renderCards(tab.panels)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

ProductsTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  defaultTabId: PropTypes.string,
};
