// components/TrustedBy.jsx
import React from "react";

export default function TrustedBy({
  logos = [
    { id: "unacademy", src: "/logos/clearTax.avif", alt: "Clear Tax" },
    { id: "urban", src: "/logos/urban.avif", alt: "Urban Company" },
    { id: "swiggy", src: "/logos/swiggy.avif", alt: "Swiggy" },
    { id: "pb", src: "/logos/paisaBazar.avif", alt: "PaisaBazaar" },
    { id: "nykaa", src: "/logos/nykaa.avif", alt: "Nykaa" },
    { id: "zerodha", src: "/logos/zerodha.avif", alt: "Zerodha" },
  ],
}) {
  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      {/* Title (optional remove if you want only slider) */}
      <h3 className="text-center text-xs uppercase tracking-wide text-slate-500 mb-6">
        Trusted by leading brands
      </h3>

      {/* Full-width slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-12 animate-slider hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-9 object-contain opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes fullWidthSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slider {
          width: max-content;
          animation: fullWidthSlide 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
