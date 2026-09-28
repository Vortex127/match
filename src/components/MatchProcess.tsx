import { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { ArrowRight } from 'lucide-react';

export function MatchProcess() {
  const [activeStage, setActiveStage] = useState(0);
  const stages = SITE_DATA.matchStages;

  return (
    <section
      id="method"
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] py-28 md:py-36 px-6 md:px-12 border-t border-[#E7E1D7]/10"
    >
      <div className="max-w-[1800px] w-full mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#E7E1D7]/15 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-mono text-[#8E8B85]">
              Section 04 · Methodology
            </span>
            <h2 className="font-editorial-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-light uppercase text-[#F1EDE6]">
              HOW WE MATCH
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end lg:pl-12">
            <p className="font-editorial-serif italic text-2xl sm:text-3xl text-[#E7E1D7]/85 font-light leading-snug">
              “We don’t search for more options. We search for the right reason to introduce two people.”
            </p>
            <span className="text-[10px] tracking-[0.25em] text-[#8E8B85] uppercase font-mono mt-4">
              FOUR INTENTIONAL CHAPTERS
            </span>
          </div>
        </div>

        {/* Editorial Chapter Navigation (Desktop & Tablet) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-b border-[#E7E1D7]/10 pb-6">
          {stages.map((stage, idx) => (
            <button
              key={stage.number}
              onClick={() => setActiveStage(idx)}
              className={`text-left group transition-all duration-300 relative pb-4 ${
                activeStage === idx ? 'opacity-100' : 'opacity-40 hover:opacity-75'
              }`}
            >
              <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#C5A880] mb-2">
                <span>{stage.number}</span>
                <span className="w-4 h-[1px] bg-[#C5A880]/40" />
                <span className="text-[10px] uppercase text-[#8E8B85]">{stage.subtitle}</span>
              </div>
              <h3 className="font-editorial-serif text-2xl sm:text-3xl md:text-4xl text-[#F1EDE6] tracking-tight">
                {stage.title}
              </h3>
              {activeStage === idx && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E7E1D7] transition-all duration-500" />
              )}
            </button>
          ))}
        </div>

        {/* Immersive Editorial Showcase Area (No rounded cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-4">
          
          {/* Left Column: Image with Reveal Mask */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden bg-[#161716]">
              {stages.map((stage, idx) => (
                <div
                  key={stage.number}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeStage === idx
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 pointer-events-none z-0'
                  }`}
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/80 via-transparent to-transparent opacity-40" />
                  
                  {/* Photo metadata watermark */}
                  <div className="absolute top-4 left-4 text-[9px] tracking-[0.25em] font-mono text-[#E7E1D7] bg-[#101110]/60 backdrop-blur-sm px-2.5 py-1 uppercase">
                    CHAPTER {stage.number} · {stage.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Caption */}
            <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-mono text-[#8E8B85] mt-3">
              <span>Human Intuition & Verified Discretion</span>
              <span>Stage {activeStage + 1} of 4</span>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Nuance Points */}
          <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C5A880] block mb-2">
                0{activeStage + 1} — {stages[activeStage].subtitle}
              </span>
              <h4 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#F1EDE6] tracking-tight leading-none mb-6">
                {stages[activeStage].title}
              </h4>
              <p className="text-base sm:text-lg text-[#E7E1D7]/85 font-light leading-relaxed font-cormorant">
                {stages[activeStage].description}
              </p>
            </div>

            {/* Nuance / Execution Detail Points */}
            <div className="space-y-4 pt-4 border-t border-[#E7E1D7]/10">
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8E8B85] block">
                Protocol Nuances:
              </span>
              <ul className="space-y-3">
                {stages[activeStage].detailPoints.map((point) => (
                  <li key={point} className="flex items-start space-x-3 text-xs md:text-sm text-[#8E8B85] font-light">
                    <span className="text-[#C5A880] mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Next Chapter Trigger */}
            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                className="inline-flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#F1EDE6] hover:text-[#C5A880] transition-colors py-1 font-mono group"
              >
                <span>Proceed to next chapter</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
