import { useRef, useEffect } from 'react';
import { SITE_DATA } from '../data/content';

export function PhilosophySection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !textRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const offset = (windowHeight - rect.top) * 0.08;
        imageRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        textRef.current.style.transform = `translate3d(0, ${-offset * 0.6}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const p = SITE_DATA.philosophy;

  return (
    <section
      id="philosophy"
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] py-32 md:py-44 px-6 md:px-12 border-t border-[#E7E1D7]/10 overflow-hidden"
    >
      <div className="max-w-[1800px] w-full mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 text-[10px] md:text-xs tracking-[0.3em] font-mono text-[#8E8B85] uppercase mb-16">
          <span>06</span>
          <span>/</span>
          <span>{p.label}</span>
        </div>

        {/* Asymmetrical High-Contrast Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait occupying ~40% with parallax */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              ref={imageRef}
              className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#161716] overflow-hidden transition-transform duration-300 ease-out"
            >
              <img
                src={p.portrait}
                alt="Individual portrait reflecting quiet depth and composure"
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] brightness-90 hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/70 via-transparent to-transparent opacity-50" />
              
              <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-[0.25em] text-[#E7E1D7] uppercase bg-[#101110]/70 px-3 py-1">
                {p.portraitCaption}
              </div>
            </div>
            <div className="flex justify-between text-[10px] tracking-[0.2em] uppercase font-mono text-[#8E8B85] mt-3">
              <span>Human Compatibility</span>
              <span>Geneva · Paris</span>
            </div>
          </div>

          {/* Right Column: Massive Editorial Statement & Philosophy Essays */}
          <div ref={textRef} className="lg:col-span-7 space-y-12 order-1 lg:order-2 lg:pl-8">
            <div className="space-y-2">
              <h2 className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-[-0.03em] font-light uppercase text-[#F1EDE6]">
                {p.headlineLine1}
              </h2>
              <h2 className="font-editorial-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-[-0.03em] font-light uppercase text-[#E7E1D7]/90 pl-0 md:pl-12">
                {p.headlineLine2}
              </h2>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#E7E1D7]/15 max-w-2xl">
              <p className="font-cormorant text-2xl sm:text-3xl text-[#FAF8F5] leading-relaxed font-light">
                {p.p1}
              </p>
              <p className="text-sm md:text-base text-[#8E8B85] font-light leading-relaxed">
                {p.p2}
              </p>
              <p className="text-sm md:text-base text-[#C5A880] font-light leading-relaxed font-serif italic text-lg">
                {p.p3}
              </p>
            </div>

            {/* Editorial signature marker */}
            <div className="pt-4 flex items-center space-x-6 text-[10px] tracking-[0.25em] font-mono text-[#8E8B85] uppercase">
              <span>ÉLAN CURATORIAL BOARD</span>
              <span className="w-12 h-[1px] bg-[#8E8B85]/30 inline-block" />
              <span>EST. 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
