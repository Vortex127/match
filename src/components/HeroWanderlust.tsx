import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroWanderlustProps {
  onOpenApply: () => void;
}

const BG = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2800&q=85';

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
const SLIDES = [
  { src: unsplash('1516589178581-6cd7833ae3b2'), alt: 'Two pairs of hands forming a heart against the sunset' },
  { src: unsplash('1414235077428-338989a2e8c0'), alt: 'A candlelit dinner table set for two' },
  { src: unsplash('1543007630-9710e4a00a20'), alt: 'A warmly lit bar with hanging bulbs' },
  { src: unsplash('1470337458703-46ad1756a187'), alt: 'Cocktails being poured at a quiet bar' },
  { src: unsplash('1474552226712-ac0f0961a954'), alt: 'Two silhouettes sharing a quiet moment at dusk' },
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const wrap = (i: number) => (i + SLIDES.length) % SLIDES.length;

// Every slide stays mounted and cross-fades, so swapping never flashes.
function SlideStack({ active, className = '', objectPosition }: { active: number; className?: string; objectPosition?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === active ? s.alt : ''}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ opacity: i === active ? 1 : 0, transform: i === active ? 'scale(1)' : 'scale(1.12)', objectPosition }}
        />
      ))}
    </div>
  );
}

export function HeroWanderlust({ onOpenApply }: HeroWanderlustProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scrolledRef = useRef(false);
  const [active, setActive] = useState(0);

  // Scroll-driven expansion of the centre window + pointer parallax on the backdrop.
  // Writes CSS variables directly so scrolling never triggers React re-renders.
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      // The last viewport of pinned scroll is the curtain: the next section slides up over the open photo.
      const total = section.offsetHeight - window.innerHeight * 2;
      const p = reduced ? 0 : clamp(-rect.top / total);
      const c = clamp((-rect.top - total) / window.innerHeight);
      scrolledRef.current = p > 0.02;
      stage.style.setProperty('--p', p.toFixed(4));
      stage.style.setProperty('--e', p.toFixed(4));
      stage.style.setProperty('--c', c.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMove = (e: MouseEvent) => {
      if (reduced) return;
      stage.style.setProperty('--mx', ((e.clientX / window.innerWidth - 0.5) * -14).toFixed(2) + 'px');
      stage.style.setProperty('--my', ((e.clientY / window.innerHeight - 0.5) * -10).toFixed(2) + 'px');
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('mousemove', onMove, { passive: true });

    // Slider autoplay — holds still once the window starts opening up.
    const timer = reduced
      ? 0
      : window.setInterval(() => {
          if (!scrolledRef.current) setActive((a) => wrap(a + 1));
        }, 3600);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  // Window footprint at rest (vw/vh) — the flanking statements hug its edges.
  const W = 'var(--ww)';
  const H = 'var(--wh)';

  return (
    <section ref={sectionRef} className="relative w-full bg-[#101110] text-[#F1EDE6] h-[340vh]">
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full overflow-hidden [--ww:58vw] [--wh:30vh] lg:[--ww:35vw] lg:[--wh:31vh]"
        style={{ ['--p' as string]: 0, ['--e' as string]: 0, ['--c' as string]: 0, ['--mx' as string]: '0px', ['--my' as string]: '0px' }}
      >
        {/* Full-bleed moody backdrop — a lone figure facing the valley, pushed to the left */}
        <div
          className="absolute inset-[-3%] will-change-transform"
          style={{
            transform: 'translate3d(var(--mx), var(--my), 0) scale(calc(1.04 - var(--e) * 0.04))',
            transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <img
            src={BG}
            alt="Friends looking out over the hills at sunset"
            className="h-full w-full object-cover grayscale-[60%] contrast-[1.1] brightness-[0.42] lg:[transform:translateX(-19%)_scale(1.4)]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#101110]/60 via-transparent to-[#101110]/75" />
        <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

        {/* Neighbouring slides peeking above and below the window */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 hidden lg:block h-[13vh] w-[16vw] min-w-[110px] -translate-x-1/2 overflow-hidden"
          style={{ opacity: 'calc(1 - var(--e) * 5)' }}
        >
          <SlideStack active={wrap(active - 1)} objectPosition="50% 100%" className="brightness-[0.8]" />
        </div>
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 hidden lg:block h-[13vh] w-[16vw] min-w-[110px] -translate-x-1/2 overflow-hidden"
          style={{ opacity: 'calc(1 - var(--e) * 5)' }}
        >
          <SlideStack active={wrap(active + 1)} objectPosition="50% 0%" className="brightness-[0.8]" />
        </div>

        {/* Centre window that opens to full-bleed on scroll */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: `calc(${W} + (100vw - ${W}) * var(--e))`,
            height: `calc(${H} + (100vh - ${H}) * var(--e))`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="absolute inset-x-0 -top-7 flex justify-between text-[10px] tracking-[0.1em] uppercase text-[#F1EDE6]"
            style={{ opacity: 'calc(1 - var(--e) * 4)' }}
          >
            <span>Private stories</span>
            <span>Journal</span>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <SlideStack active={active} className="contrast-[1.05] brightness-[0.9] saturate-[0.85]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
            <span
              className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-[#ff2d55]"
              style={{ opacity: 'calc(1 - var(--e) * 4)' }}
            />
          </div>

          <div
            className="absolute inset-x-0 -bottom-7 grid grid-cols-3 text-[10px] tracking-[0.1em] uppercase text-[#F1EDE6]"
            style={{ opacity: 'calc(1 - var(--e) * 4)' }}
          >
            <span>{String(active + 1).padStart(2, '0')}.</span>
            <span className="text-center whitespace-nowrap">Real introductions</span>
            <span className="text-right">42.</span>
          </div>
        </div>

        {/* Curtain: the pinned photo recedes as the next section covers it */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[#101110] pointer-events-none"
          style={{ opacity: 'calc(var(--c) * 0.7)' }}
        />

        {/* Left & right statements — hug the window on desktop, bracket it on mobile */}
        <h1 className="sr-only">Beyond Profiles. Into Connection.</h1>
        <div
          aria-hidden
          className="absolute inset-x-0 top-[13vh] text-center font-editorial-serif italic text-[clamp(2.2rem,9vw,3.4rem)] leading-[0.95] text-[#F6E9C8] lg:inset-x-auto lg:top-1/2 lg:text-right lg:text-[clamp(2.4rem,5vw,6rem)] lg:[right:calc(50%+var(--ww)/2+1.6vw)] lg:[transform:translate3d(calc(var(--e)*-14vw),-50%,0)]"
          style={{ opacity: 'calc(1 - var(--e) * 2.2)' }}
        >
          Beyond<br className="hidden lg:block" /> Profiles
        </div>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-[13vh] text-center font-editorial-serif italic text-[clamp(2.2rem,9vw,3.4rem)] leading-[0.95] text-[#F6E9C8] lg:inset-x-auto lg:bottom-auto lg:top-1/2 lg:text-left lg:text-[clamp(2.4rem,5vw,6rem)] lg:[left:calc(50%+var(--ww)/2+1.6vw)] lg:[transform:translate3d(calc(var(--e)*14vw),-50%,0)]"
          style={{ opacity: 'calc(1 - var(--e) * 2.2)' }}
        >
          Into<br className="hidden lg:block" /> Connection
        </div>

        {/* Index of cities — bottom, aligned under the nav column as in the reference */}
        <ul
          className="absolute left-[66vw] bottom-[6vh] hidden lg:block text-[11px] leading-[1.6] tracking-[0.1em] uppercase text-[#F1EDE6]/45"
          style={{ opacity: 'calc(1 - var(--e) * 4)' }}
        >
          <li className="text-[#F1EDE6]">• All introductions</li>
          <li>London</li>
          <li>New York</li>
          <li>Copenhagen</li>
          <li>Lisbon</li>
        </ul>

        {/* Edge metadata */}
        <div
          className="absolute left-6 md:left-12 bottom-8 text-[10px] tracking-[0.28em] uppercase text-[#E7E1D7]/70"
          style={{ opacity: 'calc(1 - var(--e) * 3)' }}
        >
          Private matchmaking
          <span className="block mt-1 text-[#E7E1D7]/45">Est. 2026</span>
        </div>
        <div
          className="absolute right-6 md:right-12 bottom-8 text-right"
          style={{ opacity: 'calc(1 - var(--e) * 3)' }}
        >
          <button
            onClick={onOpenApply}
            className="group inline-flex items-center gap-2 border-b border-[#E7E1D7]/50 pb-1 text-[10px] tracking-[0.28em] uppercase text-[#F1EDE6] transition-colors hover:border-[#F1EDE6]"
          >
            Apply for membership
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
