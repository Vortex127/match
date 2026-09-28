import { useState, useRef, useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroWanderlustProps {
  onOpenApply: () => void;
}

export function HeroWanderlust({ onOpenApply }: HeroWanderlustProps) {
  // Interactive floating card in the center (matches Wanderlust 00:01-00:02)
  const [cardOffset, setCardOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, initialX: 0, initialY: 0 });
  const containerRef = useRef<HTMLElement>(null);

  // Parallax on mouse move
  const handleMouseMove = (e: ReactMouseEvent) => {
    if (isDragging) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const normX = (clientX / innerWidth - 0.5) * 20;
    const normY = (clientY / innerHeight - 0.5) * 15;
    setCardOffset({ x: normX, y: normY });
  };

  const handleMouseDown = (e: ReactMouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      initialX: cardOffset.x,
      initialY: cardOffset.y,
    };
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      setCardOffset({
        x: dragStartRef.current.initialX + dx,
        y: dragStartRef.current.initialY + dy,
      });
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] overflow-hidden flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 select-none"
    >
      {/* Cinematic Full-Bleed Background Image (Mist, River & Silhouette) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85"
          alt="Contemplative landscape with atmospheric dusk mist"
          className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-[1.08] brightness-[0.45] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Silhouette overlay from left/bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101110]/95 via-transparent to-[#101110]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101110] via-transparent to-[#101110]/80" />
        <div className="absolute inset-0 film-grain opacity-35 pointer-events-none" />
      </div>

      {/* Top Editorial Sub-bar */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto flex justify-between items-center text-[10px] md:text-xs tracking-[0.3em] font-mono text-[#8E8B85] uppercase border-b border-[#E7E1D7]/15 pb-4">
        <div className="flex items-center space-x-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          <span>PRIVATE MATCHMAKING</span>
        </div>
        <div className="hidden sm:block">
          <span>CURATED INTENTIONS</span>
        </div>
        <div className="flex space-x-6">
          <span>PARIS · NEW YORK · LONDON</span>
          <span>EST. 2026</span>
        </div>
      </div>

      {/* Main Split-Screen Typography & Floating Interactive Centerpiece */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto flex-1 flex items-center justify-between py-12">
        
        {/* Left Headline: "Beyond Profiles" */}
        <div className="flex-1 text-left z-10">
          <h1 className="font-editorial-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] leading-[0.88] tracking-[-0.03em] font-light uppercase text-[#F1EDE6]">
            Beyond
            <span className="block italic text-[#E7E1D7] font-normal">Profiles</span>
          </h1>
          <p className="mt-6 text-xs md:text-sm font-mono tracking-[0.25em] text-[#8E8B85] uppercase max-w-xs">
            01 / Curated by human intuition, not predictive algorithms.
          </p>
        </div>

        {/* Center: Interactive Draggable Polaroid / Film Window (Exact Wanderlust Recreation) */}
        <div
          className="relative z-20 mx-4 cursor-grab active:cursor-grabbing hidden lg:block"
          style={{
            transform: `translate3d(${cardOffset.x}px, ${cardOffset.y}px, 0)`,
            transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="w-72 xl:w-84 bg-[#1C1D1B] p-3 border border-[#E7E1D7]/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md group">
            {/* Inner Photo Window */}
            <div className="relative aspect-[16/11] overflow-hidden bg-black">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85"
                alt="Two people sitting together in unguarded conversation"
                className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
              <div className="absolute top-2 left-2 text-[8px] font-mono tracking-widest text-[#E7E1D7] bg-black/60 px-1.5 py-0.5 uppercase">
                REAL MOMENTS
              </div>
            </div>

            {/* Polaroid Bottom Notes */}
            <div className="mt-3 flex justify-between items-center text-[9px] font-mono tracking-[0.2em] uppercase text-[#8E8B85]">
              <span>UNGUARDED CONNECTION</span>
              <span className="text-[#C5A880]">DRAG TO EXPLORE</span>
            </div>
          </div>
        </div>

        {/* Right Headline: "Into Moments" */}
        <div className="flex-1 text-right z-10">
          <h1 className="font-editorial-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] leading-[0.88] tracking-[-0.03em] font-light uppercase text-[#F1EDE6]">
            Into
            <span className="block italic text-[#E7E1D7] font-normal">Moments</span>
          </h1>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] uppercase text-[#F1EDE6] pb-1 border-b border-[#E7E1D7] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors group"
            >
              <span>Apply for Membership</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Editorial Meta Bar (Matches 00:01-00:02) */}
      <div className="relative z-10 max-w-[1800px] w-full mx-auto pt-6 border-t border-[#E7E1D7]/15 flex flex-wrap justify-between items-end text-[10px] md:text-xs font-mono tracking-[0.25em] text-[#8E8B85] uppercase">
        <div>
          <span>GLOBAL / 2026</span>
        </div>
        <div className="flex items-center space-x-2 text-[#E7E1D7]">
          <span>SCROLL FOR INTRODUCTIONS</span>
          <span className="animate-bounce">↓</span>
        </div>
        <div>
          <button
            onClick={onOpenApply}
            className="hover:text-[#F1EDE6] transition-colors"
          >
            ALL INTRODUCTIONS ↗
          </button>
        </div>
      </div>
    </section>
  );
}
