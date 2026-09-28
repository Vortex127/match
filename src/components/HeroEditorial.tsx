import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface HeroEditorialProps {
  onOpenApply: () => void;
}

export function HeroEditorial({ onOpenApply }: HeroEditorialProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);
  const panel4Ref = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Parallax on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 1.5) return;

      if (panel1Ref.current) {
        panel1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.18}px, 0)`;
      }
      if (panel2Ref.current) {
        panel2Ref.current.style.transform = `translate3d(0, ${-scrollY * 0.12}px, 0)`;
      }
      if (panel3Ref.current) {
        panel3Ref.current.style.transform = `translate3d(0, ${scrollY * 0.26}px, 0)`;
      }
      if (panel4Ref.current) {
        panel4Ref.current.style.transform = `translate3d(0, ${-scrollY * 0.08}px, 0)`;
      }
      if (text1Ref.current) {
        text1Ref.current.style.transform = `translate3d(${scrollY * -0.06}px, ${scrollY * 0.08}px, 0)`;
      }
      if (text2Ref.current) {
        text2Ref.current.style.transform = `translate3d(${scrollY * 0.08}px, ${scrollY * 0.05}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[110vh] lg:min-h-[120vh] w-full bg-[#101110] text-[#F1EDE6] pt-28 lg:pt-32 pb-24 overflow-hidden flex flex-col justify-between"
    >
      {/* Film grain subtle overlay */}
      <div className="absolute inset-0 pointer-events-none film-grain z-10" />

      {/* Top Editorial Metadata Bar */}
      <div className="relative z-20 max-w-[1800px] w-full mx-auto px-6 md:px-12 flex flex-wrap justify-between items-start text-[10px] md:text-xs tracking-[0.25em] text-[#8E8B85] uppercase border-b border-[#E7E1D7]/10 pb-4 mb-8">
        <div>
          <span>{SITE_DATA.brand.descriptor}</span>
        </div>
        <div className="hidden sm:block">
          <span>FOR PEOPLE WHO ARE READY</span>
        </div>
        <div className="flex space-x-6">
          <span>{SITE_DATA.brand.established}</span>
          <span className="hidden md:inline">{SITE_DATA.brand.cities}</span>
        </div>
      </div>

      {/* Main Asymmetric Layered Canvas */}
      <div className="relative z-20 max-w-[1800px] w-full mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Row 1 Headline: BEYOND PROFILES. (Asymmetrical Left / Top) */}
        <div className="relative z-20 mb-4 sm:mb-8 pointer-events-none select-none">
          <div className="overflow-hidden">
            <h1
              ref={text1Ref}
              className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11.5rem] leading-[0.88] tracking-[-0.03em] font-light text-[#F1EDE6] uppercase"
            >
              BEYOND PROFILES.
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-3 ml-2 text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
            <span className="w-6 h-[1px] bg-[#C5A880]/60 inline-block" />
            <span>01 — HUMAN INTUITION</span>
          </div>
        </div>

        {/* Multi-Panel Wanderlust-Inspired Image Array */}
        <div className="relative w-full my-6 sm:my-10 grid grid-cols-2 md:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Panel 1: Tall Vertical Portrait (Left) */}
          <div
            ref={panel1Ref}
            className="col-span-1 md:col-span-3 lg:col-span-3 relative transition-transform duration-300 ease-out z-10"
          >
            <div className="relative aspect-[3/4] sm:aspect-[9/14] overflow-hidden bg-[#161716] group">
              <img
                src={SITE_DATA.heroImages[0].url}
                alt={SITE_DATA.heroImages[0].alt}
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] brightness-90 transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 text-[9px] font-mono tracking-widest text-[#E7E1D7]/70 uppercase">
                VOL. I · CANDID
              </div>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mt-2 font-mono">
              Quiet eye contact
            </p>
          </div>

          {/* Panel 2: Narrow Central Slice (Center-Left) */}
          <div
            ref={panel2Ref}
            className="col-span-1 md:col-span-2 lg:col-span-2 relative transition-transform duration-300 ease-out z-20 md:-mt-16"
          >
            <div className="relative aspect-[3/5] sm:aspect-[4/7] overflow-hidden bg-[#161716] group border-y border-[#E7E1D7]/15">
              <img
                src={SITE_DATA.heroImages[1].url}
                alt={SITE_DATA.heroImages[1].alt}
                className="w-full h-full object-cover grayscale-[15%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute top-3 right-3 text-[8px] tracking-widest text-[#E7E1D7] bg-[#101110]/80 px-2 py-0.5 uppercase font-mono">
                ARCHIVE
              </div>
            </div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#8E8B85] mt-2 hidden sm:block font-mono">
              Natural Light
            </p>
          </div>

          {/* Center Space: Editorial Microcopy & Callout */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3 px-2 sm:px-6 my-4 md:my-0 z-30">
            <div className="max-w-xs space-y-4">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-mono">
                The Discretion Standard
              </div>
              <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#FAF8F5] leading-snug font-light">
                “Real compatibility cannot be reduced to a swipe. We introduce people who genuinely belong in one another’s lives.”
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenApply}
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#F1EDE6] pb-1 border-b border-[#E7E1D7] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors group"
                >
                  <span>Apply for Membership</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Panel 3: Larger Intimate Scene (Right) */}
          <div
            ref={panel3Ref}
            className="col-span-2 md:col-span-4 lg:col-span-4 relative transition-transform duration-300 ease-out z-10 md:mt-12"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#161716] group">
              <img
                src={SITE_DATA.heroImages[2].url}
                alt={SITE_DATA.heroImages[2].alt}
                className="w-full h-full object-cover contrast-[1.05] grayscale-[10%] transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/80 via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-4 text-[9px] tracking-[0.25em] uppercase text-[#FAF8F5] font-mono">
                Saint-Germain · 21:40
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-[#8E8B85] mt-2 font-mono">
              <span>UNGUARDED MOMENT</span>
              <span>FIGURE 03</span>
            </div>
          </div>

        </div>

        {/* Row 2 Headline: INTO CONNECTION. (Asymmetrical Right / Bottom) */}
        <div className="relative z-20 flex flex-col md:items-end mt-4 sm:mt-8 pointer-events-none select-none">
          <div className="overflow-hidden">
            <h1
              ref={text2Ref}
              className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11.5rem] leading-[0.88] tracking-[-0.03em] font-light text-[#E7E1D7] uppercase text-left md:text-right"
            >
              INTO CONNECTION.
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-3 text-[10px] tracking-[0.3em] uppercase text-[#8E8B85] md:mr-2">
            <span>CURATED FOR ACCOMPLISHED ADULTS</span>
            <span className="w-8 h-[1px] bg-[#8E8B85]/40 inline-block" />
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Cue */}
      <div className="relative z-20 max-w-[1800px] w-full mx-auto px-6 md:px-12 flex justify-between items-end pt-12 text-[10px] tracking-[0.25em] uppercase text-[#8E8B85]">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="font-mono">ACCEPTING Q4 INTRODUCTIONS</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>SCROLL TO EXPLORE</span>
          <span className="inline-block animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
};
