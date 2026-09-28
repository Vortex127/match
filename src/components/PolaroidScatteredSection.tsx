import { useState, useRef } from 'react';

interface PolaroidItem {
  id: string;
  number: string;
  title: string;
  sub: string;
  img: string;
  rot: number;
  x: number; // percentage offset
  y: number; // percentage offset
}

const POLAROIDS: PolaroidItem[] = [
  {
    id: 'p1',
    number: '01',
    title: 'LONDON → COPENHAGEN',
    sub: 'Maya & Daniel · 2025',
    img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=700&q=80',
    rot: -4,
    x: 35,
    y: 18,
  },
  {
    id: 'p2',
    number: '02',
    title: 'NEW YORK (TRIBECA)',
    sub: 'Amelia & Marcus · 2026',
    img: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&w=700&q=80',
    rot: 3.5,
    x: 48,
    y: 12,
  },
  {
    id: 'p3',
    number: '03',
    title: 'PARIS & KYOTO',
    sub: 'Julian & Elena · 2024',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
    rot: -2,
    x: 28,
    y: 36,
  },
  {
    id: 'p4',
    number: '04',
    title: 'LISBON (TAGUS)',
    sub: 'Isabel & Theo · 2025',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80',
    rot: 5,
    x: 42,
    y: 44,
  },
  {
    id: 'p5',
    number: '05',
    title: 'ZURICH & MILAN',
    sub: 'Sofia & Henrik · 2024',
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80',
    rot: -6,
    x: 58,
    y: 32,
  },
  {
    id: 'p6',
    number: '06',
    title: 'STOCKHOLM',
    sub: 'Astrid & Lucas · 2025',
    img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=700&q=80',
    rot: 4,
    x: 64,
    y: 52,
  },
  {
    id: 'p7',
    number: '07',
    title: 'EDINBURGH',
    sub: 'Claire & Alistair · 2024',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
    rot: -3.5,
    x: 32,
    y: 62,
  },
  {
    id: 'p8',
    number: '08',
    title: 'AMSTERDAM',
    sub: 'Tess & Liam · 2025',
    img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=700&q=80',
    rot: 2.5,
    x: 46,
    y: 68,
  },
];

const LEFT_LIST = [
  { num: '01', name: 'LONDON → COPENHAGEN', id: 'p1' },
  { num: '02', name: 'NEW YORK (TRIBECA)', id: 'p2' },
  { num: '03', name: 'PARIS & KYOTO', id: 'p3' },
  { num: '04', name: 'LISBON (TAGUS)', id: 'p4' },
  { num: '05', name: 'ZURICH & MILAN', id: 'p5' },
  { num: '06', name: 'STOCKHOLM', id: 'p6' },
];

const RIGHT_LIST = [
  { num: '07', name: 'EDINBURGH', id: 'p7' },
  { num: '08', name: 'AMSTERDAM', id: 'p8' },
  { num: '09', name: 'BERLIN & VIENNA', id: 'p2' },
  { num: '10', name: 'MONTREAL', id: 'p3' },
  { num: '11', name: 'OSLO', id: 'p5' },
  { num: '12', name: 'BARCELONA', id: 'p4' },
  { num: '13', name: 'TOKYO & LONDON', id: 'p1' },
  { num: '14', name: 'GENEVA', id: 'p6' },
];

export function PolaroidScatteredSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number; z: number }>>({});
  const zCounterRef = useRef(20);

  const bringToFront = (id: string) => {
    setActiveId(id);
    zCounterRef.current += 1;
    setPositions((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] || { x: 0, y: 0 }),
        z: zCounterRef.current,
      },
    }));
  };

  return (
    <section
      id="curation"
      className="relative min-h-[110vh] w-full bg-[#101110] text-[#F1EDE6] py-28 px-6 md:px-12 overflow-hidden flex flex-col justify-between border-t border-[#E7E1D7]/10 select-none"
    >
      {/* Background Film Grain */}
      <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />

      {/* Center Section Title (Matches "Destinations Worth Wandering" in video 00:03-00:05) */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-[#8E8B85] uppercase block mb-3">
          Section 02 · Archival Registry
        </span>
        <h2 className="font-editorial-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F1EDE6] tracking-tight uppercase leading-[0.95]">
          Connections
          <span className="block italic text-[#E7E1D7]">Worth Discovering</span>
        </h2>
        <p className="text-xs font-mono tracking-[0.2em] text-[#8E8B85] uppercase mt-4">
          Hover or interact with photographs to inspect past introductions
        </p>
      </div>

      {/* Main Container: Left Directory, Center Scattered Polaroids, Right Directory */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[600px]">
        
        {/* Left List of Locations (Matches video left list) */}
        <div className="hidden lg:block lg:col-span-2 space-y-3 z-30">
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#8E8B85] uppercase block mb-4 border-b border-[#E7E1D7]/15 pb-2">
            Directory · 01–06
          </span>
          {LEFT_LIST.map((item) => (
            <button
              key={item.num}
              onMouseEnter={() => bringToFront(item.id)}
              className={`w-full text-left font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 py-1 ${
                activeId === item.id
                  ? 'text-[#C5A880] translate-x-1 font-semibold'
                  : 'text-[#8E8B85] hover:text-[#F1EDE6]'
              }`}
            >
              <span className="text-[10px] text-[#C5A880]/80">{item.num}.</span>
              <span className="truncate">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Center Scattered Polaroids Canvas (Matches video 00:03-00:05 central cluster) */}
        <div className="lg:col-span-8 relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center">
          {POLAROIDS.map((p) => {
            const isHovered = activeId === p.id;
            const pos = positions[p.id] || { x: 0, y: 0, z: 10 };

            return (
              <div
                key={p.id}
                onMouseEnter={() => bringToFront(p.id)}
                className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer group"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: `translate(-50%, -50%) rotate(${isHovered ? 0 : p.rot}deg) scale(${
                    isHovered ? 1.18 : 1
                  }) translate3d(${pos.x}px, ${pos.y}px, 0)`,
                  zIndex: isHovered ? 50 : pos.z,
                }}
              >
                {/* Authentic Polaroid Frame (Off-white / stone border) */}
                <div
                  className={`w-44 sm:w-56 md:w-64 bg-[#E7E1D7] p-2.5 sm:p-3 pb-4 shadow-2xl transition-all duration-500 border border-black/10 ${
                    isHovered
                      ? 'shadow-[0_30px_60px_rgba(0,0,0,0.9)] ring-2 ring-[#C5A880]'
                      : 'shadow-lg hover:shadow-2xl'
                  }`}
                >
                  {/* Photo Window */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/90">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-black/70 text-[#E7E1D7] px-1.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                      {p.number}
                    </div>
                  </div>

                  {/* Polaroid White Margin Editorial Text */}
                  <div className="mt-2.5 text-center">
                    <div className="font-editorial-serif text-sm sm:text-base text-[#171817] font-normal tracking-tight uppercase truncate">
                      {p.title}
                    </div>
                    <div className="text-[9px] font-mono text-[#171817]/60 tracking-wider uppercase mt-0.5">
                      {p.sub}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right List of Locations (Matches video right list) */}
        <div className="hidden lg:block lg:col-span-2 space-y-3 z-30 text-right">
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#8E8B85] uppercase block mb-4 border-b border-[#E7E1D7]/15 pb-2">
            Directory · 07–14
          </span>
          {RIGHT_LIST.map((item) => (
            <button
              key={item.num}
              onMouseEnter={() => bringToFront(item.id)}
              className={`w-full text-right font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-end space-x-2 py-1 ${
                activeId === item.id
                  ? 'text-[#C5A880] -translate-x-1 font-semibold'
                  : 'text-[#8E8B85] hover:text-[#F1EDE6]'
              }`}
            >
              <span className="truncate">{item.name}</span>
              <span className="text-[10px] text-[#C5A880]/80">.{item.num}</span>
            </button>
          ))}
        </div>

      </div>

      {/* Bottom Editorial Caption */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto pt-8 border-t border-[#E7E1D7]/10 flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#8E8B85] uppercase">
        <span>Curated Bilateral Dossiers</span>
        <span>100% Confidential Registry</span>
      </div>
    </section>
  );
}
