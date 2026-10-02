import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroWanderlust } from './components/HeroWanderlust';
import { PolaroidScatteredSection } from './components/PolaroidScatteredSection';
import { StaysWithYouSection } from './components/StaysWithYouSection';
import { HowWeMatchAccordion } from './components/HowWeMatchAccordion';
import { StoriesSection } from './components/StoriesSection';
import { PrivacySection } from './components/PrivacySection';
import { BeginJourneySection } from './components/BeginJourneySection';
import { Footer } from './components/Footer';
import { ApplicationDrawer } from './components/ApplicationDrawer';

export function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState<'membership' | 'consultation'>('membership');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      let animationFrameId: number;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    } catch (e) {
      console.warn('Lenis could not be initialized:', e);
    }
  }, []);

  // Focus-in reveal for headlines (.blur-in → .is-in the first time they enter view)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.25 },
    );
    document.querySelectorAll('.blur-in').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleOpenApply = () => {
    setDrawerType('membership');
    setDrawerOpen(true);
  };

  const handleOpenConsultation = () => {
    setDrawerType('consultation');
    setDrawerOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#101110] text-[#F1EDE6] selection:bg-[#E7E1D7] selection:text-[#101110]">
      {/* Intro Preloader Sequence */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* Luxury Editorial Cursor */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Editorial Content Stream Replicating Wanderlust Inspiration */}
      <main className={`transition-opacity duration-1000 ${preloaderComplete ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* 01. Hero (Matches Video 00:01-00:02): "Beyond Profiles / Into Moments" with interactive draggable center card */}
        <HeroWanderlust onOpenApply={handleOpenApply} />

        {/* 02. Scattered Polaroids (Matches Video 00:03-00:05): "Connections Worth Discovering" with directory index */}
        <PolaroidScatteredSection />

        {/* 03. "Meet Someone That Stays With You" (Matches Video 00:06-00:07): Pinned keepsake polaroid with dual editorial notes */}
        <StaysWithYouSection />

        {/* 04. "How We Match" (Matches Video 00:08-00:10): 4-panel expanding interactive accordion slider */}
        <HowWeMatchAccordion onOpenApply={handleOpenApply} />

        {/* 05. Selected Stories: Archival introductions with quotes & profiles */}
        <StoriesSection />

        {/* 06. Discretion & Trust: "Personal by Design. Private by Default." */}
        <PrivacySection />

        {/* 07. "Begin Your Introduction" (Matches Video 00:11): Warm ivory section with pinned paper note card */}
        <BeginJourneySection
          onOpenApply={handleOpenApply}
          onOpenConsultation={handleOpenConsultation}
        />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Bespoke Application & Consultation Drawer */}
      <ApplicationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        initialType={drawerType}
      />
    </div>
  );
}

export default App;
