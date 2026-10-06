import { useEffect, useRef, useState } from 'react';
import { SITE_DATA } from '../data/content';
import { Plus, Minus } from 'lucide-react';

const readMs = (name: string, fallback: number) => {
  const n = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(n) ? n : fallback;
};

// Transitions.dev "Text states swap": exit old -> swap -> enter new.
// `italic` is the target state; `shown` lags behind it by one swap.
function SwapTitle({ title, italic }: { title: string; italic: boolean }) {
  const [shown, setShown] = useState(italic);
  const ref = useRef<HTMLSpanElement>(null);
  const busy = useRef(false);
  const timer = useRef<number>();

  useEffect(() => {
    const el = ref.current;
    if (!el || busy.current || italic === shown) return;
    busy.current = true;
    el.classList.add('is-exit');
    timer.current = window.setTimeout(() => {
      setShown(italic);
      el.classList.remove('is-exit');
      el.classList.add('is-enter-start');
      void el.offsetWidth; // force reflow so the enter animates
      el.classList.remove('is-enter-start');
      busy.current = false;
    }, readMs('--text-swap-dur', 150));
  }, [italic, shown]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <span ref={ref} className={`t-text-swap ${shown ? 'italic' : ''}`}>
      {title}
    </span>
  );
}

export function PrivacySection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { trust } = SITE_DATA;

  const toggleRow = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="discretion"
      data-theme="light"
      className="relative min-h-screen w-full bg-[#E7E1D7] text-[#171817] py-32 md:py-44 px-6 md:px-12 transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-[1600px] w-full mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-3 text-[10px] md:text-xs tracking-[0.3em] font-sans text-[#171817]/60 uppercase mb-16 border-b border-[#171817]/15 pb-6">
          <span>08</span>
          <span>/</span>
          <span>{trust.label}</span>
        </div>

        {/* Headline & Editorial Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-8 space-y-2">
            <h2 className="blur-in font-editorial-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] font-light text-[#171817]">
              {trust.headlineLine1}
            </h2>
            <h2 className="blur-in font-editorial-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] font-light text-[#171817]/85">
              {trust.headlineLine2}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-8 space-y-4">
            <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-[#171817]/50 block">
              The Confidentiality Standard
            </span>
            <p className="font-cormorant text-xl sm:text-2xl text-[#171817]/80 leading-relaxed font-light">
              {trust.narrative}
            </p>
          </div>
        </div>

        {/* Quiet Editorial Index Rows with Thin Rules (NO icon cards!) */}
        <div className="border-t border-[#171817]/20">
          {trust.markers.map((marker, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={marker.number}
                className="border-b border-[#171817]/15 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <button
                  type="button"
                  onClick={() => toggleRow(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={(e) => e.currentTarget.matches(':focus-visible') && setActiveIndex(idx)}
                  onBlur={() => setActiveIndex(null)}
                  aria-expanded={isOpen}
                  aria-controls={`privacy-marker-details-${idx}`}
                  className="w-full py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between text-left group"
                >
                  <div className="flex items-baseline space-x-6 md:space-x-12">
                    <span className="font-sans text-xs md:text-sm tracking-widest text-[#171817]/40">
                      {marker.number}
                    </span>
                    <h3 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#171817] tracking-tight">
                      <SwapTitle title={marker.title} italic={activeIndex === idx} />
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end space-x-8">
                    <span className="text-xs font-sans tracking-widest uppercase text-[#171817]/50">
                      {marker.note}
                    </span>
                    <div className="relative w-8 h-8 rounded-full border border-[#171817]/20 flex items-center justify-center text-[#171817]/60 group-hover:border-[#171817] group-hover:text-[#171817] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none">
                      <Plus className={`absolute w-3.5 h-3.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                      <Minus className={`absolute w-3.5 h-3.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                <div
                  id={`privacy-marker-details-${idx}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-10 pl-12 md:pl-24 max-w-3xl">
                      <p className="text-base sm:text-lg text-[#171817]/75 font-light leading-relaxed font-cormorant">
                        {marker.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-16 flex flex-wrap justify-between items-center text-[10px] font-sans tracking-[0.25em] text-[#171817]/50 uppercase">
          <span>GDPR & SWISS PRIVACY COMPLIANT PROTOCOL</span>
          <span>STRICT BILATERAL DISCLOSURE ONLY</span>
        </div>
      </div>
    </section>
  );
};
