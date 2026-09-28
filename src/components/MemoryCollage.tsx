import { useEffect, useRef } from 'react';
import { SITE_DATA } from '../data/content';

export function MemoryCollage() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if visible
      if (rect.top > windowHeight || rect.bottom < 0) return;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const factor = (progress - 0.5) * 2; // -1 to 1

      // Parallax drifting & settling
      itemsRef.current.forEach((el, index) => {
        if (!el) return;
        const speed = (index % 3 + 1) * 18;
        const rotBase = index % 2 === 0 ? -1.5 : 1.5;
        const currentRot = rotBase * (1 - Math.abs(factor) * 0.3);
        const yOffset = factor * speed;
        el.style.transform = `translate3d(0, ${yOffset}px, 0) rotate(${currentRot}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collage = SITE_DATA.collageImages;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] w-full bg-[#101110] text-[#F1EDE6] py-32 px-6 md:px-12 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-[1800px] w-full mx-auto">
        {/* Section Headline / Fragment Statement */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#8E8B85] uppercase font-mono block mb-3">
            Section 05 · The Fragments
          </span>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#F1EDE6] font-light tracking-tight leading-tight">
            MEMORIES BEFORE THEY ARE WRITTEN.
          </h2>
          <p className="text-xs text-[#8E8B85] tracking-widest uppercase font-mono mt-4">
            The quiet texture of shared lives in Copenhagen, London, Paris & New York
          </p>
        </div>

        {/* Scattered Layered Editorial Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Item 0 */}
          <div
            ref={(el) => { itemsRef.current[0] = el; }}
            className="transition-transform duration-300 ease-out sm:-translate-y-8"
          >
            <div className="p-2 sm:p-3 bg-[#1A1B1A] border border-[#E7E1D7]/20 shadow-2xl group">
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={collage[0].url}
                  alt={collage[0].caption}
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex justify-between text-[9px] font-mono text-[#8E8B85] tracking-wider uppercase">
                <span>{collage[0].caption}</span>
                <span>FIG. 01</span>
              </div>
            </div>
          </div>

          {/* Item 1 (Hands / linen) */}
          <div
            ref={(el) => { itemsRef.current[1] = el; }}
            className="transition-transform duration-300 ease-out sm:translate-y-12 lg:-translate-y-16"
          >
            <div className="p-2 sm:p-3 bg-[#1A1B1A] border border-[#E7E1D7]/20 shadow-2xl group">
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={collage[1].url}
                  alt={collage[1].caption}
                  className="w-full h-full object-cover grayscale-[20%] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex justify-between text-[9px] font-mono text-[#8E8B85] tracking-wider uppercase">
                <span>{collage[1].caption}</span>
                <span>FIG. 02</span>
              </div>
            </div>
          </div>

          {/* Item 2 (Saint-Germain) */}
          <div
            ref={(el) => { itemsRef.current[2] = el; }}
            className="transition-transform duration-300 ease-out sm:-translate-y-4 lg:translate-y-6"
          >
            <div className="p-2 sm:p-3 bg-[#1A1B1A] border border-[#E7E1D7]/20 shadow-2xl group">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={collage[2].url}
                  alt={collage[2].caption}
                  className="w-full h-full object-cover grayscale-[12%] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex justify-between text-[9px] font-mono text-[#8E8B85] tracking-wider uppercase">
                <span>{collage[2].caption}</span>
                <span>FIG. 03</span>
              </div>
            </div>
          </div>

          {/* Item 3 (Atlantic dusk) */}
          <div
            ref={(el) => { itemsRef.current[3] = el; }}
            className="transition-transform duration-300 ease-out sm:translate-y-6 lg:-translate-y-6"
          >
            <div className="p-2 sm:p-3 bg-[#1A1B1A] border border-[#E7E1D7]/20 shadow-2xl group">
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={collage[3].url}
                  alt={collage[3].caption}
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex justify-between text-[9px] font-mono text-[#8E8B85] tracking-wider uppercase">
                <span>{collage[3].caption}</span>
                <span>FIG. 04</span>
              </div>
            </div>
          </div>

          {/* Item 4 (Hotel bar) */}
          <div
            ref={(el) => { itemsRef.current[4] = el; }}
            className="transition-transform duration-300 ease-out sm:-translate-y-10 lg:translate-y-14"
          >
            <div className="p-2 sm:p-3 bg-[#1A1B1A] border border-[#E7E1D7]/20 shadow-2xl group">
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={collage[4].url}
                  alt={collage[4].caption}
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex justify-between text-[9px] font-mono text-[#8E8B85] tracking-wider uppercase">
                <span>{collage[4].caption}</span>
                <span>FIG. 05</span>
              </div>
            </div>
          </div>

          {/* Item 5 (Laughter Mayfair) */}
          <div
            ref={(el) => { itemsRef.current[5] = el; }}
            className="transition-transform duration-300 ease-out sm:translate-y-2 lg:-translate-y-10"
          >
            <div className="p-2 sm:p-3 bg-[#1A1B1A] border border-[#E7E1D7]/20 shadow-2xl group">
              <div className="relative aspect-[1/1] overflow-hidden bg-black">
                <img
                  src={collage[5].url}
                  alt={collage[5].caption}
                  className="w-full h-full object-cover grayscale-[18%] contrast-[1.06] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex justify-between text-[9px] font-mono text-[#8E8B85] tracking-wider uppercase">
                <span>{collage[5].caption}</span>
                <span>FIG. 06</span>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Restrained Note */}
        <div className="mt-24 text-center">
          <p className="font-cormorant italic text-xl md:text-2xl text-[#E7E1D7]/75 font-light">
            “No algorithms. No catalogues. Simply two people ready for the same future.”
          </p>
        </div>
      </div>
    </section>
  );
};
