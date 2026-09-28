import { ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface MembershipSectionProps {
  onOpenApply: () => void;
  onOpenConsultation: () => void;
}

export function MembershipSection({
  onOpenApply,
  onOpenConsultation,
}: MembershipSectionProps) {
  const { membership } = SITE_DATA;

  return (
    <section
      id="membership"
      className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] py-36 md:py-48 px-6 md:px-12 border-t border-[#E7E1D7]/10 flex flex-col justify-center"
    >
      <div className="max-w-[1600px] w-full mx-auto">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 text-[10px] md:text-xs tracking-[0.3em] font-mono text-[#8E8B85] uppercase mb-16">
          <span>09</span>
          <span>/</span>
          <span>{membership.label}</span>
        </div>

        {/* Dramatic Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h2 className="font-editorial-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.88] tracking-[-0.03em] font-light uppercase text-[#F1EDE6]">
              {membership.headlineLine1}
            </h2>
            <h2 className="font-editorial-serif italic text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.88] tracking-[-0.03em] font-light uppercase text-[#E7E1D7]/85 pl-0 md:pl-16">
              {membership.headlineLine2}
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-[#E7E1D7]/15 lg:pl-12">
            <div>
              <span className="font-editorial-serif italic text-3xl sm:text-4xl text-[#E7E1D7] block mb-4">
                {membership.statement}
              </span>
              <p className="text-base sm:text-lg text-[#8E8B85] font-light leading-relaxed font-cormorant">
                {membership.description}
              </p>
            </div>

            <div className="pt-2 border-t border-[#E7E1D7]/10">
              <blockquote className="font-editorial-serif italic text-xl text-[#C5A880]/90">
                “{membership.quote}”
              </blockquote>
            </div>

            {/* Restrained Editorial Action Links (No giant rounded buttons!) */}
            <div className="space-y-4 pt-4">
              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto inline-flex items-center justify-between space-x-6 text-xs tracking-[0.25em] uppercase text-[#101110] bg-[#E7E1D7] px-8 py-4 hover:bg-white transition-all duration-300 font-medium group"
              >
                <span>{membership.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.22em] uppercase text-[#8E8B85] hover:text-[#F1EDE6] transition-colors py-2 border-b border-transparent hover:border-[#F1EDE6] font-mono"
                >
                  <span>{membership.ctaSecondary}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote Discretion Notice */}
        <div className="mt-24 pt-8 border-t border-[#E7E1D7]/10 flex flex-wrap justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#8E8B85] uppercase">
          <span>NO PUBLIC ROSTER · NO CATALOGUE BROWSING</span>
          <span>ANONYMIZED UNTIL MUTUAL ACCORD</span>
        </div>
      </div>
    </section>
  );
};
