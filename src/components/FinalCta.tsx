import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface FinalCtaProps {
  onOpenApply: () => void;
}

export function FinalCta({ onOpenApply }: FinalCtaProps) {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const scale = 1.0 + progress * 0.08;
        imageRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { finalStatement } = SITE_DATA;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] overflow-hidden flex items-center justify-center"
    >
      {/* Cinematic Full-Bleed Atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={finalStatement.image}
          alt="Two people walking together along a coastal cliff at dusk"
          className="w-full h-full object-cover grayscale-[15%] contrast-[1.08] brightness-[0.6] will-change-transform transition-transform duration-300 ease-out"
          loading="lazy"
        />
        {/* Soft Dark Vignette and Transition to Footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101110] via-transparent to-[#101110]/70" />
        <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
      </div>

      {/* Center Statement & Restrained Action */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center py-24">
        <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#C5A880] uppercase font-mono mb-8 block">
          Section 10 · The Horizon
        </span>

        <h2 className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.92] tracking-[-0.03em] font-light uppercase text-[#F1EDE6] max-w-5xl">
          <span className="block">{finalStatement.headlineLine1}</span>
          <span className="block italic text-[#E7E1D7]">{finalStatement.headlineLine2}</span>
        </h2>

        <p className="mt-8 max-w-md text-xs sm:text-sm text-[#8E8B85] tracking-widest uppercase font-light leading-relaxed">
          {finalStatement.subtext}
        </p>

        <div className="mt-12">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center space-x-4 text-xs tracking-[0.25em] uppercase text-[#101110] bg-[#E7E1D7] px-10 py-4 hover:bg-white transition-all duration-300 font-medium group"
          >
            <span>{finalStatement.cta}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-16 w-16 h-[1px] bg-[#E7E1D7]/20" />
      </div>
    </section>
  );
};
