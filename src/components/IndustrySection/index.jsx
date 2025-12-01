// src/components/IndustrySection.jsx
import React, { useState } from 'react';
import tabsData from './tabsData';
import sampleImage from '/industrySection.avif';
export default function IndustrySection({ imagePath = sampleImage }) {
  // default opens second item (education) — adjust index if needed
  const [activeTab, setActiveTab] = useState(tabsData[1].id);
  const active = tabsData.find((t) => t.id === activeTab) || tabsData[0];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Powering every industry.
              <br />
              <span className="text-indigo-600">Powering all disruptors.</span>
            </h2>
            <p className="mt-3 text-slate-600">Companies of all sizes — from startups to enterprises — trust us to run payments &amp; financials.</p>
          </div>

          {/* Desktop tab buttons */}
          <div className="hidden sm:flex gap-3 items-center">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-shadow duration-200 focus:outline-none
                  ${activeTab === tab.id ? 'bg-white shadow-md ring-1 ring-indigo-200' : 'text-slate-600 hover:bg-white/60 hover:shadow-sm'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main card + image grid */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Image (left on large) */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="h-64 sm:h-80 lg:h-full rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={imagePath}
                  alt="industry"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Info panel (right on large) */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div
                className={`
                  bg-white rounded-2xl p-6 sm:p-8 border border-gray-100
                  shadow-[0_8px_30px_rgba(2,6,23,0.06)]
                  hover:shadow-[0_12px_40px_rgba(2,6,23,0.08)]
                  transition-shadow duration-300
                  `}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">{active.title}</h3>
                      {active.badge ? (
                        <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                          {active.badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-3 text-slate-600">{active.desc}</p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition"
                      >
                        {active.cta}
                      </a>

                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm text-slate-700 hover:underline">
                        See customer stories
                      </a>
                    </div>

                    <ul className="mt-6 grid grid-cols-2 gap-2 text-xs text-slate-500">
                      <li>Unacademy</li>
                      <li>Toppr</li>
                      <li>+20,000 others</li>
                      <li>Trusted payouts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile tabs overlay (bottom) */}
          <div className="sm:hidden absolute left-4 right-4 -bottom-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg p-3 flex overflow-x-auto gap-3">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-w-max px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap
                    ${activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-slate-700 bg-white/60'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab list / panels (desktop / below) */}
        <div className="hidden sm:block mt-8">
          <div className="max-w-4xl rounded-md overflow-hidden">
            <nav className="flex gap-4 px-1 py-1">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 text-left px-4 py-3 rounded-md transition-transform transform hover:-translate-y-0.5 focus:outline-none
                    ${activeTab === tab.id ? 'bg-indigo-50 ring-1 ring-indigo-100' : 'bg-white/0'}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{tab.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{tab.title}</div>
                    </div>
                    <div className="text-xs text-indigo-600 font-medium">View</div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
