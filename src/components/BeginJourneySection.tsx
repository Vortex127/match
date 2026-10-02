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
      className="relative min-h-[90vh] w-full bg-[#E7E1D7] text-[#171817] pt-24 pb-28 px-6 md:px-12 flex flex-col items-center transition-colors duration-700 select-none overflow-hidden"
    >
      {/* Full-bleed dusk horizon that dissolves into the ivory page — echoes the hero photography */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46vh]" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2200&q=80"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover grayscale-[30%] contrast-[1.05] brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E7E1D7]/10 via-[#E7E1D7]/50 to-[#E7E1D7]" />
        <div className="absolute inset-x-0 -bottom-px h-1 bg-[#E7E1D7]" />
      </div>
      <div className="h-[26vh] sm:h-[30vh]" aria-hidden />

      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="blur-in font-editorial-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#171817] tracking-tight leading-[0.9]">
          Begin Your Introduction
        </h2>
      </div>

      {/* Pinned Paper Note Card (Exact replication of video 00:11 note with red pin) */}
      <div className="relative my-6 max-w-md w-full px-4 group">
        {/* Translucent tape, matching the keepsake photograph above */}
        <span className="absolute -top-3 left-1/2 z-30 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-[#C5D2A8]/70" />

        {/* Paper Note Body */}
        <div className="bg-[#FAF8F5] p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-[#171817]/10 text-center transition-transform duration-500 hover:rotate-[-0.5deg]">
          <p className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#171817]/85 uppercase leading-relaxed font-medium">
            TELL US ABOUT THE LIFE YOU HAVE BUILT. WE'LL SHAPE THE INTRODUCTION.
          </p>
          <div className="w-10 h-[1px] bg-[#171817]/20 mx-auto my-6" />
          <p className="text-[11px] font-sans tracking-widest text-[#171817]/60 uppercase">
            Private Matchmaking Dossier · 2026
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-8 mt-10">
        <button
          onClick={onOpenApply}
          className="inline-flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] uppercase text-[#171817] border-b border-[#171817] pb-1.5 hover:opacity-60 transition-opacity duration-300 group"
        >
          <span>Apply for Membership</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] uppercase text-[#171817]/60 border-b border-[#171817]/25 pb-1.5 hover:text-[#171817] hover:border-[#171817] transition-colors"
        >
          <span>Book Consultation</span>
          <span>→</span>
        </button>
      </div>

      {/* Discretion Footnote */}
      <div className="mt-12 text-center text-[10px] font-sans tracking-[0.25em] text-[#171817]/50 uppercase">
        <span>Confidential Inquiries Only · Limited Acceptance</span>
      </div>
    </section>
  );
}
