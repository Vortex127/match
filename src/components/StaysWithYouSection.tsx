export function StaysWithYouSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#101110] text-[#F1EDE6] overflow-hidden flex flex-col justify-between py-24 px-6 md:px-12 select-none border-t border-[#E7E1D7]/10">
      {/* Background Panorama (Landscape with river valley & dusk mist) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=85"
          alt="Panoramic valley at dusk"
          className="w-full h-full object-cover filter grayscale-[25%] contrast-[1.08] brightness-[0.4] scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101110] via-transparent to-[#101110]/80" />
        <div className="absolute inset-0 film-grain opacity-35 pointer-events-none" />
      </div>

      {/* Top Headline: "Meet Someone That Stays With You" */}
      <div className="relative z-10 text-center max-w-3xl mx-auto pt-6">
        <h2 className="font-editorial-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F1EDE6] tracking-tight uppercase leading-[0.95]">
          Meet Someone
          <span className="block italic text-[#E7E1D7]">That Stays With You</span>
        </h2>
      </div>

      {/* Center Layout: Left Note + Central Polaroid with Pin + Right Note */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto my-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Editorial Copy Block */}
        <div className="lg:w-1/3 text-center lg:text-right order-2 lg:order-1">
          <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#E7E1D7]/80 uppercase leading-relaxed max-w-sm mx-auto lg:ml-auto lg:mr-0">
            WE INTRODUCE FOR THE CONVERSATIONS YOU’LL STILL BE HAVING YEARS LATER.
          </p>
          <span className="text-[10px] font-mono tracking-widest text-[#8E8B85] uppercase mt-3 block">
            01 / DEEP COMPATIBILITY
          </span>
        </div>

        {/* Center Polaroid Keepsake (Replicating exact scrapbook style from video 00:06-00:07) */}
        <div className="order-1 lg:order-2 relative group">
          {/* Subtle paper sheet behind */}
          <div className="absolute -inset-2 bg-[#FAF8F5]/10 rotate-[-3deg] shadow-lg pointer-events-none" />
          
          {/* Main Polaroid */}
          <div className="relative w-64 sm:w-72 md:w-80 bg-[#E7E1D7] p-3.5 pb-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-black/10 transition-transform duration-500 hover:scale-105 hover:rotate-1">
            
            {/* Red Pushpin Accent at top (matches Wanderlust) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B83A3A] border-2 border-white shadow-md z-30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E06B6B]" />
            </div>

            {/* Photo Window */}
            <div className="relative aspect-[3/4] overflow-hidden bg-black mt-1">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                alt="Two people together in quiet connection"
                className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-30" />
            </div>

            {/* Bottom Polaroid Text */}
            <div className="mt-4 text-center">
              <span className="font-editorial-serif text-lg sm:text-xl text-[#171817] font-normal tracking-tight uppercase block">
                THE ONES THAT STAY
              </span>
              <span className="text-[9px] font-mono text-[#171817]/60 tracking-wider uppercase block mt-1">
                A feeling that doesn’t fade with time
              </span>
            </div>
          </div>
        </div>

        {/* Right Editorial Copy Block */}
        <div className="lg:w-1/3 text-center lg:text-left order-3">
          <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#E7E1D7]/80 uppercase leading-relaxed max-w-sm mx-auto lg:mr-auto lg:ml-0">
            THE QUIET EVENINGS. THE UNSCRIPTED LAUGHTER. THE INTRODUCTIONS THAT NEVER FEEL LIKE WORK.
          </p>
          <span className="text-[10px] font-mono tracking-widest text-[#8E8B85] uppercase mt-3 block">
            02 / UNHURRIED ATTRACTION
          </span>
        </div>

      </div>

      {/* Bottom Subtle Bar */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto pt-6 border-t border-[#E7E1D7]/15 flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#8E8B85] uppercase">
        <span>ARCHIVAL DOSSIER · REF. 2026</span>
        <span>A PRIVATE CONVERSATION</span>
      </div>
    </section>
  );
}
