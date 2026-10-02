import { useState } from 'react';

interface AccordionPanel {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  image: string;
}

const ACCORDION_PANELS: AccordionPanel[] = [
  {
    id: 'panel-1',
    number: '01',
    title: 'Private Consultation',
    subtitle: 'THE FOUNDATION',
    description: 'We begin with an in-depth conversation. Values, temperament, ambition, emotional architecture, and the life you actually want to build.',
    tagline: 'One conversation, the whole picture.',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'panel-2',
    number: '02',
    title: 'Discreet Scouting',
    subtitle: 'BEYOND DATABASES',
    description: 'Our private network and research team look beyond standard circles. Direct outreach and confidential scouting across creative and executive spheres.',
    tagline: 'Found, never filtered.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'panel-3',
    number: '03',
    title: 'Bilateral Curation',
    subtitle: 'INDIVIDUAL CHEMISTRY',
    description: 'Every introduction is considered individually. Chemistry matters. So does timing, communication cadence, and true life compatibility.',
    tagline: 'Chemistry, considered.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'panel-4',
    number: '04',
    title: 'Thoughtful Introduction',
    subtitle: 'ONE AT A TIME',
    description: 'No endless swipe queue. A single thoughtful meeting curated at an intimate, quiet venue with ongoing concierge follow-up.',
    tagline: 'Slow, on purpose.',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=85',
  },
];

interface HowWeMatchAccordionProps {
  onOpenApply?: () => void;
}

export function HowWeMatchAccordion(_props: HowWeMatchAccordionProps) {
  // Hover (or tap on touch) picks the active column; the last one stays open.
  const [activePanel, setActivePanel] = useState(0);

  return (
    <section id="method" className="relative w-full h-[100svh] min-h-[640px] bg-[#101110] text-[#F1EDE6] overflow-hidden select-none">
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {ACCORDION_PANELS.map((panel, idx) => {
          const isActive = activePanel === idx;
          return (
            <div
              key={panel.id}
              onMouseEnter={() => setActivePanel(idx)}
              onClick={() => setActivePanel(idx)}
              className={`relative min-w-0 min-h-0 overflow-hidden cursor-pointer transition-[flex-grow] duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
                isActive ? 'flex-[2.5]' : 'flex-[1]'
              }`}
            >
              <img
                src={panel.image}
                alt={panel.title}
                draggable={false}
                className={`absolute inset-0 w-full h-full object-cover transition-[filter] duration-[800ms] ease-out ${
                  isActive ? 'brightness-[0.62]' : 'brightness-[0.22] saturate-[0.6]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

              <div className="absolute inset-x-0 bottom-0 z-10 px-2 pb-10 lg:pb-12 text-center">
                <h3
                  className={`font-editorial-serif font-normal leading-none whitespace-nowrap text-2xl lg:text-[1.55rem] transition-colors duration-700 ${
                    isActive ? 'text-[#F6E9C8]' : 'text-[#F6E9C8]/55'
                  }`}
                >
                  {panel.title}
                </h3>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mx-auto mt-5 max-w-[22rem] font-sans text-[13px] uppercase leading-[1.35] tracking-[0.01em] text-[#F1EDE6]/70">
                      {panel.description}
                    </p>
                    <p className="mt-10 pb-1 font-editorial-serif italic text-base text-[#F1EDE6]/90">{panel.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[72px] lg:top-[8vh] z-20 px-6 text-center">
        <h2 className="font-editorial-serif text-[clamp(2.6rem,4.4vw,6.5rem)] font-normal leading-none text-[#F6E9C8]">
          How We Match
        </h2>
        <p className="mt-[1.2vw] font-editorial-serif italic text-[clamp(1rem,1.4vw,2rem)] text-[#F1EDE6]/60">Four steps, one intention.</p>
      </div>
    </section>
  );
}
