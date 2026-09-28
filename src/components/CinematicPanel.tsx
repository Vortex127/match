import { useEffect, useRef, useState } from 'react';
import { SITE_DATA } from '../data/content';

export function CinematicPanel() {
  const panelRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scaleVal, setScaleVal] = useState(1.08);

  useEffect(() => {
    const handleScroll = () => {
      if (!panelRef.current) return;
      const rect = panelRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress through this viewport
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      
      // Scale from 1.08 down to 1.00
      const currentScale = 1.08 - progress * 0.08;
      setScaleVal(currentScale);

      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${(1 - progress) * 40}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={panelRef}
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] overflow-hidden flex items-center justify-center"
    >
      {/* Background Full-Bleed Image with Subtle Zoom & Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={SITE_DATA.fullBleedMoment.image}
          alt="Two people walking through an atmospheric city street at dusk"
          className="w-full h-full object-cover object-center filter grayscale-[18%] contrast-[1.08] brightness-[0.75] will-change-transform transition-transform duration-200 ease-out"
          style={{ transform: `scale(${scaleVal})` }}
          loading="lazy"
        />
        {/* Subtle Dark Vignette & Film Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101110] via-[#101110]/40 to-[#101110]/80" />
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      </div>

      {/* Center Overlay Cinematic Typography */}
      <div
        ref={textRef}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center py-20 transition-transform duration-200 ease-out"
      >
        <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#E7E1D7]/70 uppercase font-mono mb-8 block">
          Chapter III · Unscripted Encounter
        </span>

        <h2 className="font-editorial-serif text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-[0.95] tracking-[-0.02em] font-light text-[#F1EDE6] uppercase max-w-5xl">
          <span className="block">{SITE_DATA.fullBleedMoment.statementLine1}</span>
          <span className="block italic text-[#E7E1D7]/90">{SITE_DATA.fullBleedMoment.statementLine2}</span>
          <span className="block">{SITE_DATA.fullBleedMoment.statementLine3}</span>
        </h2>

        <p className="mt-8 max-w-lg text-xs md:text-sm text-[#8E8B85] tracking-widest font-light uppercase text-center leading-relaxed">
          {SITE_DATA.fullBleedMoment.subtext}
        </p>

        <div className="w-12 h-[1px] bg-[#E7E1D7]/30 mt-8" />
      </div>
    </section>
  );
};
