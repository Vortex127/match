import { useEffect, useRef, useState } from 'react';

interface PolaroidItem {
  name: string;
  img: string;
  /** centre of the polaroid, in % of the section (top clusters bleed off-screen on purpose) */
  x: number;
  /** optional override of x below md, so the phone layout can be re-centred */
  xm?: number;
  y: number;
  rot: number;
  /** hidden below md so the loose band doesn't turn into a pile on phones */
  desktopOnly?: boolean;
}

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=75`;

// Layout follows the Wanderlust preview: two clusters in the top corners, a loose band across the
// middle, and a lot of empty space underneath. Names double as the numbered index either side.
const POLAROIDS: PolaroidItem[] = [
  // top-left pair
  { name: 'Copenhagen', img: u('1494774157365-9e04c6720e47'), x: 10, xm: 16, y: 22, rot: -14 },
  { name: 'Tribeca', img: u('1474552226712-ac0f0961a954'), x: 20, xm: 34, y: 27, rot: 8 },
  // top-right cluster, last one bleeds off the edge
  { name: 'Lahore', img: u('1587474260584-136574528ed5'), x: 77, y: 25, rot: -8, desktopOnly: true },
  { name: 'Lisbon', img: u('1511895426328-dc8714191300'), x: 86, y: 21, rot: 11, desktopOnly: true },
  { name: 'Islamabad', img: u('1560986752-2e31d9507413'), x: 96, y: 29, rot: -7 },
  // central band
  { name: 'Stockholm', img: u('1414235077428-338989a2e8c0'), x: 24, xm: 30, y: 56, rot: -10 },
  { name: 'Edinburgh', img: u('1551632811-561732d1e306'), x: 31, xm: 42, y: 65, rot: 6 },
  { name: 'Amsterdam', img: u('1544148103-0773bf10d330'), x: 38, xm: 55, y: 52, rot: -4 },
  { name: 'Oslo', img: u('1506905925346-21bda4d32df4'), x: 45, xm: 67, y: 68, rot: 12 },
  { name: 'Bergen', img: u('1476610182048-b716b8518aae'), x: 51, y: 55, rot: -2, desktopOnly: true },
  { name: 'Zurich', img: u('1501785888041-af3ef285b470'), x: 57, y: 66, rot: -9, desktopOnly: true },
  { name: 'Geneva', img: u('1469474968028-56623f02e42e'), x: 64, y: 52, rot: 8, desktopOnly: true },
  { name: 'Vienna', img: u('1486870591958-9b9d0d1dda99'), x: 70, y: 63, rot: -12, desktopOnly: true },
  { name: 'Porto', img: u('1519681393784-d120267933ba'), x: 76, y: 57, rot: 5, desktopOnly: true },
];

const LEFT_COUNT = 7;

export function PolaroidScatteredSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [seen, setSeen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Polaroids drift in once, staggered, the first time the section is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const listItem = (idx: number, align: 'left' | 'right') => {
    const p = POLAROIDS[idx];
    const num = String(idx + 1).padStart(2, '0');
    return (
      <li key={p.name}>
        <button
          onMouseEnter={() => setActiveIdx(idx)}
          onMouseLeave={() => setActiveIdx(null)}
          onFocus={() => setActiveIdx(idx)}
          onBlur={() => setActiveIdx(null)}
          className={`transition-colors duration-300 ${
            activeIdx === idx ? 'text-[#F1EDE6]' : 'text-[#F1EDE6]/40 hover:text-[#F1EDE6]'
          }`}
        >
          {align === 'left' ? `${num}. ${p.name}` : `${p.name} ${num}.`}
        </button>
      </li>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="curation"
      className="relative z-10 -mt-[100vh] h-screen min-h-[620px] w-full overflow-hidden bg-[#101110] shadow-[0_-40px_80px_rgba(0,0,0,0.55)] text-[#F1EDE6] select-none"
    >
      <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />

      {/* Title — high and small, like the reference */}
      <div className="pointer-events-none absolute left-1/2 top-[38%] md:top-[24%] z-30 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="blur-in font-editorial-serif italic text-3xl sm:text-4xl md:text-5xl leading-[0.98] tracking-[-0.01em] whitespace-nowrap">
          Connections
          <br />
          Worth Discovering
        </h2>
      </div>

      {POLAROIDS.map((p, i) => {
        const on = activeIdx === i;
        return (
          <figure
            key={p.name}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
            className={`absolute left-[var(--xm)] md:left-[var(--x)] w-[clamp(76px,9vw,150px)] cursor-pointer ${p.desktopOnly ? 'hidden md:block' : ''}`}
            style={{
              ['--x' as string]: `${p.x}%`,
              ['--xm' as string]: `${p.xm ?? p.x}%`,
              top: `${p.y}%`,
              zIndex: on ? 40 : 10 + i,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* entrance layer */}
            <div
              style={{
                opacity: seen ? 1 : 0,
                transform: seen ? 'none' : `translate3d(0, 60px, 0) scale(0.85)`,
                transition: 'opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.4s cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* hover layer: straighten and lift, as in the reference */}
              <div
                className="bg-[#E7E1D7] p-[5%] pb-[14%] shadow-[0_14px_30px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `rotate(${on ? 0 : p.rot}deg) scale(${on ? 1.3 : 1})` }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover saturate-[0.8] contrast-[1.05]"
                  />
                </div>
                <figcaption className="mt-[6%] text-center font-editorial-serif italic text-[9px] md:text-[10px] leading-none text-[#171817]">
                  {p.name}
                </figcaption>
              </div>
            </div>
          </figure>
        );
      })}

      {/* Index lists, aligned with the band */}
      <ul className="absolute left-6 md:left-10 top-[50%] z-30 hidden md:block text-[9px] leading-[1.75] tracking-[0.16em] uppercase">
        {POLAROIDS.slice(0, LEFT_COUNT).map((_, i) => listItem(i, 'left'))}
      </ul>
      <ul className="absolute right-6 md:right-10 top-[50%] z-30 hidden md:block text-right text-[9px] leading-[1.75] tracking-[0.16em] uppercase">
        {POLAROIDS.slice(LEFT_COUNT).map((_, i) => listItem(i + LEFT_COUNT, 'right'))}
      </ul>
    </section>
  );
}
