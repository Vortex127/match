import { useEffect, useRef, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'enter' | 'reveal' | 'exit' | 'done'>('enter');

  // Keep the latest callback in a ref so a parent re-render (new inline fn) doesn't restart the timers
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Step 1: Wordmark emerges quietly
    const t1 = setTimeout(() => {
      setPhase('reveal');
    }, 400);

    // Step 2: Fade sequence out
    const t2 = setTimeout(() => {
      setPhase('exit');
    }, 1800);

    // Step 3: Complete & unmount
    const t3 = setTimeout(() => {
      setPhase('done');
      onCompleteRef.current();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#101110] text-[#F1EDE6] pointer-events-none transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center px-6">
        {/* Subtle sublabel */}
        <div className="overflow-hidden mb-4">
          <span
            className={`block text-[10px] md:text-xs tracking-[0.35em] text-[#8E8B85] uppercase transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              phase === 'reveal' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Private Matchmaking
          </span>
        </div>

        {/* Central Brand Wordmark */}
        <div className="overflow-hidden">
          <h1
            className={`font-editorial-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] font-light text-[#F1EDE6] transition-all duration-1200 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              phase === 'reveal' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            ÉLAN MATCH
          </h1>
        </div>

        {/* Hairline rule */}
        <div className="w-16 h-[1px] bg-[#E7E1D7]/20 mt-6 overflow-hidden">
          <div
            className={`h-full bg-[#E7E1D7] transition-all duration-1000 delay-300 ease-out ${
              phase === 'reveal' ? 'w-full' : 'w-0'
            }`}
          />
        </div>

        {/* Quiet footnote */}
        <div className="overflow-hidden mt-4">
          <span
            className={`block text-[9px] tracking-[0.25em] text-[#8E8B85]/60 uppercase transition-all duration-1000 delay-500 ${
              phase === 'reveal' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            New York · Paris · London
          </span>
        </div>
      </div>
    </div>
  );
};
