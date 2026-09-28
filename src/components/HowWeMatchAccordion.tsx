import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AccordionPanel {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const ACCORDION_PANELS: AccordionPanel[] = [
  {
    id: 'panel-1',
    number: '01',
    title: 'Private Consultation',
    subtitle: 'THE FOUNDATION',
    description: 'We begin with an in-depth conversation. Values, temperament, ambition, emotional architecture, and the life you actually want to build.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'panel-2',
    number: '02',
    title: 'Discreet Scouting',
    subtitle: 'BEYOND DATABASES',
    description: 'Our private network and research team look beyond standard circles. Direct outreach and confidential scouting across creative and executive spheres.',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'panel-3',
    number: '03',
    title: 'Bilateral Curation',
    subtitle: 'INDIVIDUAL CHEMISTRY',
    description: 'Every introduction is considered individually. Chemistry matters. So does timing, communication cadence, and true life compatibility.',
    image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'panel-4',
    number: '04',
    title: 'Thoughtful Introduction',
    subtitle: 'ONE AT A TIME',
    description: 'No endless swipe queue. A single thoughtful meeting curated at an intimate, quiet venue with ongoing concierge follow-up.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
  },
];

interface HowWeMatchAccordionProps {
  onOpenApply: () => void;
}

export function HowWeMatchAccordion({ onOpenApply }: HowWeMatchAccordionProps) {
  const [activePanel, setActivePanel] = useState<number>(3); // Default open panel 4 (matches video)

  return (
    <section
      id="method"
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] py-28 px-6 md:px-12 flex flex-col justify-between border-t border-[#E7E1D7]/10 select-none"
    >
      {/* Top Header (Matches "How We Travel" in video 00:08) */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-[#E7E1D7]/15">
        <div>
          <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-[#8E8B85] uppercase block mb-2">
            Section 04 · Methodology
          </span>
          <h2 className="font-editorial-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F1EDE6] tracking-tight uppercase leading-none">
            How We Match
          </h2>
        </div>
        <p className="font-editorial-serif italic text-xl sm:text-2xl text-[#E7E1D7]/80 font-light mt-4 md:mt-0 max-w-md">
          “Four intentional steps toward an unhurried, meaningful connection.”
        </p>
      </div>

      {/* Main 4-Column Expanding Interactive Accordion (Exact replication of video 00:08-00:10) */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto flex-1 flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[650px] w-full">
        {ACCORDION_PANELS.map((panel, idx) => {
          const isActive = activePanel === idx;

          return (
            <div
              key={panel.id}
              onClick={() => setActivePanel(idx)}
              onMouseEnter={() => setActivePanel(idx)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between p-6 sm:p-8 bg-[#161716] group ${
                isActive
                  ? 'lg:flex-[3.5] flex-[2.5]'
                  : 'lg:flex-[1.2] flex-[1] hover:lg:flex-[1.5]'
              }`}
            >
              {/* Background Full-Height Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? 'scale-105 filter grayscale-[10%] contrast-[1.05] brightness-90'
                      : 'scale-100 filter grayscale-[40%] contrast-[1.1] brightness-[0.55] group-hover:brightness-75'
                  }`}
                />
                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101110] via-black/40 to-[#101110]/50" />
                <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />
              </div>

              {/* Panel Top Marker */}
              <div className="relative z-10 flex justify-between items-center text-xs font-mono text-[#E7E1D7] tracking-widest uppercase">
                <span className="text-[#C5A880] font-bold">{panel.number}</span>
                <span className="text-[10px] text-[#8E8B85] tracking-[0.2em]">
                  {panel.subtitle}
                </span>
              </div>

              {/* Panel Bottom Content (Rises and expands when active) */}
              <div className="relative z-10 transition-all duration-500">
                <h3 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#F1EDE6] tracking-tight leading-tight uppercase mb-3">
                  {panel.title}
                </h3>

                {/* Expanded Description (Reveals with smooth transition) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-[#E7E1D7]/85 font-light leading-relaxed font-cormorant max-w-md">
                    {panel.description}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenApply();
                      }}
                      className="inline-flex items-center space-x-1.5 text-[10px] font-mono tracking-widest uppercase text-[#F1EDE6] hover:text-[#C5A880] transition-colors border-b border-[#E7E1D7]/40 pb-0.5"
                    >
                      <span>Inquire regarding this phase</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Sub-bar */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto pt-8 border-t border-[#E7E1D7]/15 flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#8E8B85] uppercase">
        <span>Curated In-House Protocol</span>
        <span>Zero Algorithmic Matching</span>
      </div>
    </section>
  );
}
