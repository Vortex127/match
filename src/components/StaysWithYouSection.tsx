import { usePinProgress } from '../hooks/usePinProgress';

const BG = 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=2400&q=85';
const KEEPSAKE = 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=900&q=85';

// Pinned for ~2.2 screens: the keepsake grows and settles, the two notes fade in beside it.
export function StaysWithYouSection() {
  const { trackRef, stageRef } = usePinProgress<HTMLElement>();

  return (
    <section ref={trackRef} className="relative h-[220vh] w-full bg-[#101110] text-[#F1EDE6]">
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full overflow-hidden select-none"
        style={{ ['--p' as string]: 1 }}
      >
        {/* Backdrop eases in */}
        <div className="absolute inset-0" style={{ transform: 'scale(calc(1.18 - var(--p) * 0.18))' }}>
          <img
            src={BG}
            alt="Green valley and river under low cloud"
            loading="lazy"
            className="h-full w-full object-cover grayscale-[25%] contrast-[1.08] brightness-[0.42]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#101110] via-transparent to-[#101110]" />
        <div className="absolute inset-0 film-grain opacity-35 pointer-events-none" />

        {/* Title */}
        <h2
          className="blur-in absolute left-1/2 top-[11vh] z-10 -translate-x-1/2 text-center font-editorial-serif italic text-4xl sm:text-5xl md:text-6xl leading-[0.98] tracking-[-0.01em] whitespace-nowrap"
        >
          Meet Someone
          <br />
          Who Stays With You
        </h2>

        {/* Left note */}
        <p
          className="absolute left-[7vw] top-[58vh] hidden lg:block max-w-[16rem] text-[11px] leading-[1.9] tracking-[0.2em] uppercase text-[#E7E1D7]/80"
          style={{
            opacity: 'clamp(0, calc((var(--p) - 0.3) * 3), 1)',
            transform: 'translate3d(calc((1 - var(--p)) * -6vw), 0, 0)',
          }}
        >
          We introduce for the conversations you’ll still be having years later.
        </p>

        {/* Right note */}
        <p
          className="absolute right-[7vw] top-[58vh] hidden lg:block max-w-[16rem] text-right text-[11px] leading-[1.9] tracking-[0.2em] uppercase text-[#E7E1D7]/80"
          style={{
            opacity: 'clamp(0, calc((var(--p) - 0.3) * 3), 1)',
            transform: 'translate3d(calc((1 - var(--p)) * 6vw), 0, 0)',
          }}
        >
          The quiet evenings. The unscripted laughter. Introductions that never feel like work.
        </p>

        {/* Taped keepsake photograph */}
        <div
          className="absolute left-1/2 top-[56%] w-56 md:w-72"
          style={{
            transform:
              'translate(-50%, -50%) rotate(calc((1 - var(--p)) * -7deg)) scale(calc(0.62 + var(--p) * 0.42))',
          }}
        >
          <div className="relative bg-[#E7E1D7] p-3 pb-9 shadow-[0_30px_70px_rgba(0,0,0,0.75)]">
            {/* translucent tape */}
            <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] bg-[#C5D2A8]/60 backdrop-blur-[1px]" />
            <div className="aspect-[3/4] overflow-hidden bg-black">
              <img
                src={KEEPSAKE}
                alt="Two people sharing a quiet moment at dusk"
                loading="lazy"
                className="h-full w-full object-cover saturate-[0.85] contrast-[1.05]"
              />
            </div>
            <p className="mt-3 text-center font-editorial-serif italic text-base text-[#171817]">The ones that stay</p>
          </div>
        </div>
      </div>
    </section>
  );
}
