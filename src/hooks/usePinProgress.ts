import { useEffect, useRef } from 'react';

const clamp = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Scroll progress (0 → 1) through a tall "track" section containing a sticky stage.
 * Writes `--p` onto the stage so children can animate with calc(var(--p) …) and
 * scrolling never triggers a React re-render. `onProgress` is for state-based UI.
 * With reduced motion (or `enabled === false`) progress is pinned to `restingValue`.
 */
export function usePinProgress<T extends HTMLElement = HTMLElement, S extends HTMLElement = HTMLDivElement>(
  opts: { enabled?: boolean; restingValue?: number; onProgress?: (p: number) => void } = {},
) {
  const { enabled = true, restingValue = 1, onProgress } = opts;
  const trackRef = useRef<T>(null);
  const stageRef = useRef<S>(null);
  const cb = useRef(onProgress);
  useEffect(() => {
    cb.current = onProgress;
  });

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const total = track.offsetHeight - window.innerHeight;
      const p = !enabled || reduced || total <= 0 ? restingValue : clamp(-track.getBoundingClientRect().top / total);
      stage.style.setProperty('--p', p.toFixed(4));
      cb.current?.(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled, restingValue]);

  return { trackRef, stageRef };
}
