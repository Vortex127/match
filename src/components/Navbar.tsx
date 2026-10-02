import { useState } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { ambientAudio } from '../utils/audio';

interface NavbarProps {
  onOpenApply: () => void;
}

const NAV_LINKS = [
  { label: 'Curation', href: '#curation' },
  { label: 'Method', href: '#method' },
  { label: 'Stories', href: '#stories' },
  { label: 'Discretion', href: '#discretion' },
  { label: 'Membership', href: '#membership' },
];

export function Navbar({ onOpenApply }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSound = () => setIsPlayingAudio(ambientAudio.toggle());

  // The header uses mix-blend-difference, so plain white text stays legible over any photo or light section.
  const text = 'text-white';
  const muted = 'text-white/60 hover:text-white';

  return (
    <>
      {/* No bar, no container — just type floating over the imagery */}
      <header className="fixed top-0 left-0 z-40 w-full pointer-events-none mix-blend-difference text-white">
        <div className="relative px-6 md:px-10 pt-6 md:pt-7 flex items-start justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className={`pointer-events-auto font-editorial-serif italic text-2xl md:text-[1.7rem] leading-none transition-colors duration-500 ${text}`}
          >
            Élan
            <span className="not-italic text-[9px] tracking-[0.3em] uppercase ml-2 align-middle opacity-60">Match</span>
          </a>

          {/* Desktop: stacked index, top right (as in the Wanderlust preview) */}
          <div className="hidden lg:flex items-start gap-16 pointer-events-auto">
            <nav
              aria-label="Primary"
              className={`flex flex-col gap-[3px] text-[10px] leading-[1.35] tracking-[0.18em] uppercase transition-colors duration-500 ${text}`}
            >
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className={`flex flex-col items-end gap-3 transition-colors duration-500 ${text}`}>
              <button
                onClick={onOpenApply}
                className="group inline-flex items-center gap-1.5 border-b border-current/50 pb-0.5 text-[10px] tracking-[0.18em] uppercase hover:border-current transition-colors"
              >
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Apply for membership
              </button>
              <button
                onClick={toggleSound}
                className={`inline-flex items-center gap-1.5 text-[9px] tracking-[0.18em] uppercase transition-colors ${muted}`}
                aria-label={isPlayingAudio ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
              >
                {isPlayingAudio ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
                {isPlayingAudio ? 'Sound on' : 'Sound off'}
              </button>
            </div>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden pointer-events-auto relative z-50 p-1 ${text}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#101110] text-[#F1EDE6] flex flex-col justify-between p-8 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="pt-24 flex flex-col gap-5">
          {NAV_LINKS.map((l, idx) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-editorial-serif italic text-4xl flex items-baseline justify-between border-b border-[#E7E1D7]/10 pb-4"
            >
              <span>{l.label}</span>
              <span className="text-[10px] not-italic tracking-[0.2em] text-[#8E8B85]">0{idx + 1}</span>
            </a>
          ))}
        </nav>
        <div className="space-y-6 pt-8">
          <button onClick={toggleSound} className="text-[10px] tracking-[0.2em] uppercase text-[#E7E1D7] flex items-center gap-2">
            {isPlayingAudio ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            {isPlayingAudio ? 'Sound on' : 'Sound off'}
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenApply();
            }}
            className="w-full border border-[#E7E1D7]/40 py-4 text-[11px] tracking-[0.25em] uppercase flex items-center justify-center gap-2"
          >
            Apply for membership <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
