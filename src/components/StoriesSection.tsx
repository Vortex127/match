import { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function StoriesSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const stories = SITE_DATA.stories;
  const current = stories[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="stories"
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] py-32 md:py-44 px-6 md:px-12 border-t border-[#E7E1D7]/10"
    >
      <div className="max-w-[1800px] w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E7E1D7]/15 mb-16">
          <div className="space-y-4">
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-sans text-[#8E8B85] uppercase">
              Section 07 · Archival Introductions
            </span>
            <h2 className="blur-in font-editorial-serif italic text-4xl sm:text-5xl md:text-6xl tracking-[-0.01em] font-light text-[#F1EDE6]">
              Selected Stories
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-6">
            <span className="text-xs font-sans text-[#8E8B85] tracking-widest uppercase">
              0{selectedIdx + 1} / 0{stories.length}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                aria-label="Previous story"
                className="w-11 h-11 border border-[#E7E1D7]/20 flex items-center justify-center text-[#F1EDE6] hover:bg-[#E7E1D7] hover:text-[#101110] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next story"
                className="w-11 h-11 border border-[#E7E1D7]/20 flex items-center justify-center text-[#F1EDE6] hover:bg-[#E7E1D7] hover:text-[#101110] transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Story Index Tabs */}
        <div className="flex space-x-6 sm:space-x-12 overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-[#E7E1D7]/10">
          {stories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setSelectedIdx(idx)}
              className={`text-left whitespace-nowrap text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 pb-2 relative ${
                selectedIdx === idx
                  ? 'text-[#F1EDE6] font-medium'
                  : 'text-[#8E8B85] hover:text-[#F1EDE6]/70'
              }`}
            >
              <span>{story.names}</span>
              {selectedIdx === idx && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E7E1D7]" />
              )}
            </button>
          ))}
        </div>

        {/* Magazine Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Magazine Still */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#161716] group">
              <img
                key={current.id}
                src={current.image}
                alt={current.names}
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] brightness-90 animate-fade-in transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/80 via-transparent to-transparent opacity-40" />

              {/* Film Still Editorial Label */}
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#C5A880] uppercase block">
                  {current.year}
                </span>
                <span className="text-xs font-sans tracking-[0.2em] text-[#F1EDE6] uppercase">
                  {current.location}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 space-y-10 lg:pl-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[10px] font-sans tracking-[0.3em] uppercase text-[#8E8B85]">
                <span>ARCHIVAL DOSSIER</span>
                <span>•</span>
                <span>{current.location}</span>
              </div>
              
              <h3 className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl text-[#F1EDE6] tracking-tight leading-none">
                {current.names}
              </h3>
            </div>

            {/* Pull Quote */}
            <div className="border-l-2 border-[#E7E1D7]/30 pl-6 sm:pl-8 py-2">
              <blockquote className="font-editorial-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E7E1D7] leading-snug font-light">
                “{current.quote}”
              </blockquote>
            </div>

            {/* Profile Narrative Description */}
            <p className="text-base sm:text-lg text-[#8E8B85] font-light leading-relaxed font-cormorant">
              {current.detail}
            </p>

            {/* Archival Footnote */}
            <div className="pt-6 border-t border-[#E7E1D7]/10 flex flex-wrap justify-between items-center gap-4 text-[10px] font-sans tracking-[0.25em] text-[#8E8B85] uppercase">
              <span>DISCRETION CHARTER VERIFIED</span>
              <span className="text-[#C5A880]">MATCHED BY ÉLAN PRINCIPALS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
