import { SITE_DATA } from '../data/content';

interface FooterProps {
  onOpenConsultation: () => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  const { footer } = SITE_DATA;

  return (
    <footer className="relative w-full bg-[#101110] text-[#F1EDE6] pt-24 pb-16 px-6 md:px-12 border-t border-[#E7E1D7]/15">
      <div className="max-w-[1800px] w-full mx-auto">
        {/* Massive Brand Wordmark */}
        <div className="border-b border-[#E7E1D7]/15 pb-16 mb-16 overflow-hidden">
          <h2 className="font-editorial-serif italic text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[1.05] tracking-[-0.02em] font-light text-[#F1EDE6] select-none opacity-90 hover:opacity-100 transition-opacity">
            {footer.wordmark}
          </h2>
          <div className="flex justify-between items-center text-[10px] md:text-xs tracking-[0.3em] font-sans text-[#8E8B85] uppercase mt-4">
            <span>{footer.descriptor}</span>
            <span>PARIS · LONDON · NEW YORK · ZURICH</span>
          </div>
        </div>

        {/* Editorial Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#E7E1D7]/10 text-xs">
          
          {/* Column 1: Explore */}
          <div className="space-y-4">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#8E8B85] uppercase block">
              Explore
            </span>
            <ul className="space-y-3 font-light text-[#E7E1D7]/75">
              {footer.exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F1EDE6] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Inquiries & Contact */}
          <div className="space-y-4">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#8E8B85] uppercase block">
              Inquiries
            </span>
            <ul className="space-y-3 font-light text-[#E7E1D7]/75">
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-[#F1EDE6] hover:underline underline-offset-4 transition-colors text-left"
                >
                  Private Consultation
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contactInfo.inquiries}`}
                  className="hover:text-[#F1EDE6] hover:underline underline-offset-4 transition-colors"
                >
                  {footer.contactInfo.inquiries}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contactInfo.press}`}
                  className="hover:text-[#F1EDE6] hover:underline underline-offset-4 transition-colors"
                >
                  {footer.contactInfo.press}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social / Journals */}
          <div className="space-y-4">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#8E8B85] uppercase block">
              Dispatch
            </span>
            <ul className="space-y-3 font-light text-[#E7E1D7]/75">
              {footer.socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="hover:text-[#F1EDE6] hover:underline underline-offset-4 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Discretion & Legal */}
          <div className="space-y-4">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#8E8B85] uppercase block">
              Protocol
            </span>
            <ul className="space-y-3 font-light text-[#E7E1D7]/75">
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-[#F1EDE6] hover:underline underline-offset-4 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Editorial Statement */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#C5A880] uppercase block">
              The Standard
            </span>
            <p className="font-editorial-serif italic text-lg text-[#E7E1D7]/85 font-light leading-snug">
              “{footer.closing}”
            </p>
            <p className="text-[10px] font-sans text-[#8E8B85] tracking-widest uppercase">
              By appointment only.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans tracking-[0.25em] text-[#8E8B85]/60 uppercase space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} ÉLAN MATCH LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <span>NON-INDEXABLE REGISTRY</span>
            <span>ENCRYPTED REPOSITORY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
