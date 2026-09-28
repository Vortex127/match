import { ArrowUpRight } from 'lucide-react';

interface BeginJourneySectionProps {
  onOpenApply: () => void;
  onOpenConsultation: () => void;
}

export function BeginJourneySection({
  onOpenApply,
  onOpenConsultation,
}: BeginJourneySectionProps) {
  return (
    <section
      id="membership"
      data-theme="light"
      className="relative min-h-[90vh] w-full bg-[#E7E1D7] text-[#171817] py-28 px-6 md:px-12 flex flex-col justify-between items-center transition-colors duration-700 select-none overflow-hidden"
    >
      {/* Subtle Landscape Window at Top (Matches Wanderlust 00:11) */}
      <div className="w-full max-w-4xl h-24 sm:h-32 overflow-hidden mb-8 relative border border-[#171817]/10 opacity-70">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=80"
          alt="Quiet atmospheric architectural horizon"
          className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E7E1D7]" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#171817] tracking-tight uppercase leading-[0.9]">
          Begin Your Introduction
        </h2>
      </div>

      {/* Pinned Paper Note Card (Exact replication of video 00:11 note with red pin) */}
      <div className="relative my-6 max-w-md w-full px-4 group">
        {/* Red Pushpin Accent */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B83A3A] border-2 border-white shadow-md z-30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E06B6B]" />
        </div>

        {/* Paper Note Body */}
        <div className="bg-[#FAF8F5] p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-[#171817]/10 text-center transition-transform duration-500 hover:rotate-[-0.5deg]">
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#171817]/85 uppercase leading-relaxed font-medium">
            TELL US ABOUT THE LIFE YOU HAVE BUILT. WE'LL SHAPE THE INTRODUCTION.
          </p>
          <div className="w-10 h-[1px] bg-[#171817]/20 mx-auto my-6" />
          <p className="text-[11px] font-mono tracking-widest text-[#171817]/60 uppercase">
            Private Matchmaking Dossier · 2026
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <button
          onClick={onOpenApply}
          className="inline-flex items-center space-x-3 text-xs font-mono tracking-[0.25em] uppercase text-[#F1EDE6] bg-[#101110] px-8 py-4 hover:bg-black transition-all duration-300 font-medium group"
        >
          <span>Apply for Membership</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.2em] uppercase text-[#171817]/70 hover:text-[#171817] transition-colors px-6 py-4 border border-[#171817]/20 hover:border-[#171817]"
        >
          <span>Book Consultation</span>
          <span>→</span>
        </button>
      </div>

      {/* Discretion Footnote */}
      <div className="mt-12 text-center text-[10px] font-mono tracking-[0.25em] text-[#171817]/50 uppercase">
        <span>Confidential Inquiries Only · Limited Acceptance</span>
      </div>
    </section>
  );
}
