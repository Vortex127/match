import { useEffect, useRef, useState } from 'react';
import { SITE_DATA } from '../data/content';

export function HumanPremise() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through this section (0 to 1)
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="premise"
      data-theme="light"
      className="relative min-h-[90vh] lg:min-h-screen w-full bg-[#E7E1D7] text-[#171817] py-28 md:py-40 px-6 md:px-12 flex flex-col justify-center transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-[1600px] w-full mx-auto">
        {/* Editorial Sub-header */}
        <div className="flex items-center justify-between border-b border-[#171817]/15 pb-6 mb-16 md:mb-24">
          <div className="flex items-center space-x-3 text-[10px] md:text-xs tracking-[0.3em] uppercase font-mono text-[#171817]/70">
            <span>02</span>
            <span>/</span>
            <span>{SITE_DATA.premise.label}</span>
          </div>
          <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-mono text-[#171817]/50 hidden sm:block">
            HUMAN COGNITION OVER DATA
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="space-y-2 md:space-y-4 max-w-6xl">
          <div className="overflow-hidden">
            <h2
              className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-[-0.03em] font-light uppercase text-[#171817]"
              style={{
                opacity: 0.2 + Math.min(0.8, scrollProgress * 1.5),
                transform: `translateY(${(1 - Math.min(1, scrollProgress * 1.3)) * 25}px)`,
                transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              }}
            >
              {SITE_DATA.premise.statementPrimary}
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              className="font-editorial-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-[-0.03em] font-light uppercase text-[#171817]/90 pl-0 md:pl-24"
              style={{
                opacity: 0.15 + Math.min(0.85, scrollProgress * 1.6),
                transform: `translateY(${(1 - Math.min(1, scrollProgress * 1.4)) * 35}px)`,
                transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              }}
            >
              {SITE_DATA.premise.statementSecondary}
            </h2>
          </div>
        </div>

        {/* Restrained Supporting Copy with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 md:mt-24 pt-12 border-t border-[#171817]/10 items-start">
          <div className="md:col-span-4 text-xs tracking-[0.25em] uppercase font-mono text-[#171817]/50">
            A Return to Discernment
          </div>
          <div className="md:col-span-8 lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#171817]/85 font-cormorant">
              {SITE_DATA.premise.narrative}
            </p>
            <p className="text-xs md:text-sm text-[#171817]/60 tracking-wider font-light leading-relaxed max-w-xl">
              {SITE_DATA.premise.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
