import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { ambientAudio } from '../utils/audio';

interface NavbarProps {
  onOpenApply: () => void;
}

export function Navbar({ onOpenApply }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Check if current scroll position intersects any light-background section
      const lightSections = document.querySelectorAll('[data-theme="light"]');
      let inLight = false;
      const navCenterY = 40; // top navbar area

      lightSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
          inLight = true;
        }
      });

      setIsLightSection(inLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = ambientAudio.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { label: 'CURATION', href: '#curation' },
    { label: 'METHOD', href: '#method' },
    { label: 'STORIES', href: '#stories' },
    { label: 'DISCRETION', href: '#discretion' },
    { label: 'MEMBERSHIP', href: '#membership' },
  ];

  const textColorClass = isLightSection && !mobileMenuOpen ? 'text-[#171817]' : 'text-[#F1EDE6]';
  const mutedColorClass = isLightSection && !mobileMenuOpen ? 'text-[#171817]/60' : 'text-[#8E8B85]';
  const borderRuleClass = isLightSection && !mobileMenuOpen ? 'border-[#171817]/15' : 'border-[#E7E1D7]/15';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 backdrop-blur-md bg-opacity-80'
            : 'py-6 md:py-8'
        } ${isScrolled && isLightSection ? 'bg-[#E7E1D7]/80' : isScrolled ? 'bg-[#101110]/80' : 'bg-transparent'}`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark (Left) */}
          <a
            href="#"
            className={`font-editorial-serif text-xl md:text-2xl tracking-[0.25em] font-light transition-colors duration-300 ${textColorClass}`}
          >
            ÉLAN MATCH
          </a>

          {/* Desktop Links (Center-Right) */}
          <nav className="hidden lg:flex items-center space-x-10 text-[11px] tracking-[0.25em] uppercase font-sans">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-300 relative group py-1 ${mutedColorClass} hover:${textColorClass}`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isLightSection ? 'bg-[#171817]' : 'bg-[#E7E1D7]'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action & Audio Toggle */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* Ambient Sound Button */}
            <button
              onClick={toggleSound}
              className={`p-2 transition-colors duration-300 text-[10px] tracking-widest uppercase flex items-center space-x-2 ${mutedColorClass} hover:${textColorClass}`}
              title={isPlayingAudio ? 'Mute ambient soundscape' : 'Play subtle atmospheric soundscape'}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline text-[9px] font-mono tracking-wider">Atmosphere ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline text-[9px] font-mono tracking-wider">Atmosphere</span>
                </>
              )}
            </button>

            {/* Apply Button */}
            <button
              onClick={onOpenApply}
              className={`text-[11px] tracking-[0.22em] uppercase transition-all duration-300 flex items-center space-x-1 group py-1.5 px-3 border ${borderRuleClass} ${textColorClass} hover:bg-white hover:text-black`}
            >
              <span>APPLY</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center space-x-4">
            <button
              onClick={onOpenApply}
              className={`text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 border ${borderRuleClass} ${textColorClass}`}
            >
              APPLY
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 ${textColorClass}`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#101110] text-[#F1EDE6] flex flex-col justify-between p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-24 space-y-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8B85] block font-mono">
            Navigation Index
          </span>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial-serif text-3xl sm:text-4xl text-[#F1EDE6] tracking-tight hover:text-[#E7E1D7] transition-colors flex items-baseline justify-between border-b border-[#E7E1D7]/10 pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#8E8B85]">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-6 pt-8 border-t border-[#E7E1D7]/10">
          <div className="flex justify-between items-center">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8E8B85]">Soundscape</span>
            <button
              onClick={toggleSound}
              className="text-xs tracking-[0.2em] uppercase text-[#E7E1D7] flex items-center space-x-2"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'Playing' : 'Muted'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenApply();
            }}
            className="w-full bg-[#E7E1D7] text-[#101110] py-4 text-xs tracking-[0.25em] uppercase font-medium flex items-center justify-center space-x-2"
          >
            <span>Apply for Membership</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
