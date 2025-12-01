import React, { useMemo } from "react";
import founderData from "./founderData";

export default function FoundersSliderStyled() {
  const { title, highlight, countText, people } = founderData;
  const list = useMemo(() => [...people, ...people], [people]);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          {title} <span className="text-indigo-600">{highlight}</span>
        </h2>
        <div className="text-sm text-slate-600 mt-2">{countText}</div>
      </div>

      <div className="mt-12 overflow-hidden slider-wrap">
        <div className="flex gap-6 slider-track items-stretch py-6">
          {list.map((p, idx) => (
            <article
              key={idx}
              className="card-container min-w-[280px] max-w-[280px] flex-shrink-0 h-96"
              aria-label={`${p.name} — ${p.role}`}
            >
              <div className="card-inner">
                {/* Front side - Grayscale Image with Name */}
                <div className="card-face card-front">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
                    {/* Grayscale Image */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover filter grayscale"
                    />
                    
                    {/* Dark gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Name and Role at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                      <div className="text-lg font-bold text-white">{p.name}</div>
                      <div className="text-sm text-slate-200 mt-1">{p.role}</div>
                    </div>
                  </div>
                </div>

                {/* Back side - Description with testimonial style */}
                <div className="card-face card-back">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-6 flex flex-col justify-center">
                    {/* Decorative quote mark */}
                    <div className="text-white/20 text-6xl font-serif leading-none mb-2">"</div>
                    
                    {/* Description text */}
                    <div className="text-white text-sm leading-relaxed mb-4 flex-grow flex items-center">
                      {p.desc}
                    </div>
                    
                    {/* Name and role at bottom */}
                    <div className="mt-auto pt-4 border-t border-white/20">
                      <div className="text-white font-bold text-base">{p.name}</div>
                      <div className="text-white/80 text-xs mt-1">{p.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* Slider animation */
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slider-track {
          width: max-content;
          display: flex;
          align-items: stretch;
          animation: slide 35s linear infinite;
        }
        
        .slider-wrap:hover .slider-track { 
          animation-play-state: paused; 
        }

        /* 3D card flip setup */
        .card-container {
          perspective: 1000px;
          cursor: pointer;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s ease-in-out;
          transform-style: preserve-3d;
        }

        .card-container:hover .card-inner {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .card-front {
          z-index: 2;
        }

        .card-back {
          transform: rotateY(180deg);
        }

        /* Smooth hover effect on front image */
        .card-container:hover .card-front img {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        /* Small screens */
        @media (max-width: 640px) {
          .card-container { 
            min-width: 240px; 
            max-width: 240px;
            height: 360px;
          }
          .slider-track { 
            animation-duration: 25s; 
          }
        }
      `}</style>
    </section>
  );
}