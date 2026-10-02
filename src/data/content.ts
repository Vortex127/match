export interface Story {
  id: string;
  names: string;
  location: string;
  year: string;
  quote: string;
  detail: string;
  image: string;
  aspectRatio: string;
}

export interface MatchStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detailPoints: string[];
}

export interface TrustMarker {
  number: string;
  title: string;
  description: string;
  note: string;
}

export const SITE_DATA = {
  brand: {
    name: "ÉLAN MATCH",
    descriptor: "PRIVATE MATCHMAKING & RELATIONSHIP CONCIERGE",
    established: "EST. 2026",
    cities: "PARIS · NEW YORK · LONDON · COPENHAGEN",
    tagline: "BEYOND PROFILES. INTO CONNECTION.",
    mission: "Real compatibility cannot be reduced to a swipe. Élan combines thoughtful matchmaking, human intuition, and a deeply personal understanding of each member to introduce people who genuinely belong in one another's lives."
  },
  
  heroImages: [
    {
      id: "hero-1",
      url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=85",
      alt: "Quiet portrait in soft natural side-light",
      caption: "PORTRAIT 01 — INTENTIONAL PRESENCE",
      speed: "0.2"
    },
    {
      id: "hero-2",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
      alt: "Subtle eye contact in evening light",
      caption: "FRAGMENT 02 — THE GAZE",
      speed: "0.35"
    },
    {
      id: "hero-3",
      url: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=85",
      alt: "Two people sitting in quiet evening conversation at a restaurant",
      caption: "MOMENT 03 — UNGUARDED CONVERSATION",
      speed: "0.15"
    },
    {
      id: "hero-4",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
      alt: "Natural contemplative portrait",
      caption: "PORTRAIT 04 — DEPTH & CLARITY",
      speed: "0.28"
    }
  ],

  premise: {
    label: "THE HUMAN PREMISE",
    statementPrimary: "THE RIGHT PERSON",
    statementSecondary: "ISN'T AN ALGORITHM.",
    narrative: "Finding them requires curiosity, judgment, instinct, and understanding. Élan gets to know the person behind the profile before making an introduction.",
    footnote: "Every client search is led by experienced matchmakers who listen between the lines."
  },

  fullBleedMoment: {
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=2200&q=85",
    videoPoster: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=2200&q=85",
    statementLine1: "SOMEONE YOU",
    statementLine2: "WOULDN'T HAVE",
    statementLine3: "FOUND BY SWIPING.",
    subtext: "Introductions grounded in emotional maturity, shared values, and unspoken compatibility."
  },

  matchStages: [
    {
      number: "01",
      title: "UNDERSTAND",
      subtitle: "The Foundation",
      description: "We begin with conversation. Values, temperament, lifestyle, ambition, relationships, and the life you actually want to build.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1400&q=85",
      detailPoints: [
        "In-depth 90-minute private consultation",
        "Assessment of emotional architecture & relationship history",
        "Defining core non-negotiables beyond surface criteria"
      ]
    },
    {
      number: "02",
      title: "SEARCH",
      subtitle: "The Discovery",
      description: "Our private network and discreet research process look far beyond databases and surface-level preferences.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85",
      detailPoints: [
        "Access to an exclusive, unlisted international directory",
        "Direct outreach and bespoke scouting across creative & executive spheres",
        "Rigorous personal vetting of every prospective match"
      ]
    },
    {
      number: "03",
      title: "CURATE",
      subtitle: "The Deliberation",
      description: "Every introduction is considered individually. Chemistry matters. So does timing, character, and true emotional compatibility.",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=85",
      detailPoints: [
        "Holistic alignment of pace, communication style, and life horizon",
        "Double-blind discreet presentation of prospective partners",
        "No obligation to proceed until both individuals are genuinely intrigued"
      ]
    },
    {
      number: "04",
      title: "INTRODUCE",
      subtitle: "The Meeting",
      description: "No endless queue of profiles. One thoughtful introduction at a time, curated with grace and unhurried intention.",
      image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1400&q=85",
      detailPoints: [
        "Private reservation arranged at a quiet, atmospheric venue",
        "Thoughtful briefing with no awkward resume comparisons",
        "Constructive debriefing and ongoing relationship concierge support"
      ]
    }
  ] as MatchStage[],

  collageImages: [
    {
      id: "col-1",
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
      caption: "Copenhagen, October — Evening walk along the canals",
      aspect: "aspect-[3/4]",
      rotation: "-2deg"
    },
    {
      id: "col-2",
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      caption: "Details — Hands resting on dark linen",
      aspect: "aspect-[4/5]",
      rotation: "3deg"
    },
    {
      id: "col-3",
      url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
      caption: "Quiet corner in Saint-Germain-des-Prés",
      aspect: "aspect-[16/10]",
      rotation: "-1.5deg"
    },
    {
      id: "col-4",
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      caption: "Dusk light over the Atlantic coast",
      aspect: "aspect-[3/4]",
      rotation: "2.5deg"
    },
    {
      id: "col-5",
      url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80",
      caption: "Waiting at the hotel bar, London",
      aspect: "aspect-[4/5]",
      rotation: "-3deg"
    },
    {
      id: "col-6",
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      caption: "Unrehearsed laughter in Mayfair",
      aspect: "aspect-[1/1]",
      rotation: "1deg"
    }
  ],

  philosophy: {
    label: "OUR PHILOSOPHY",
    headlineLine1: "LESS SEARCHING.",
    headlineLine2: "MORE RECOGNITION.",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
    portraitCaption: "DISCREET CURATION · 01 OF 01",
    p1: "Compatibility begins long before two people meet. Modern platforms optimize for volume, gamifying human attention and turning connection into an endless catalog of interchangeable faces.",
    p2: "We look at the way someone lives, communicates, chooses, dreams, and connects — then consider who might truly complement that life.",
    p3: "The goal is not to give you fifty choices. It is to present one person who makes you grateful you waited."
  },

  stories: [
    {
      id: "story-1",
      names: "Maya & Daniel",
      location: "London → Copenhagen",
      year: "Introduced 2025",
      quote: "Neither of us expected the first introduction to feel this natural.",
      detail: "Maya, a design director in Bloomsbury, and Daniel, an architectural conservationist based in Copenhagen, were introduced after our matchmakers identified a shared aesthetic restraint and mutual desire to build an unhurried life together.",
      image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=85",
      aspectRatio: "aspect-[4/5]"
    },
    {
      id: "story-2",
      names: "Amelia & Marcus",
      location: "New York",
      year: "Introduced 2026",
      quote: "We had both stopped looking. That turned out to be the point.",
      detail: "Marcus runs a biotech research fund in Tribeca; Amelia is a classical concert pianist and writer. After years of swipe exhaustion, Élan introduced them over an intimate private dinner at an understated West Village bistro.",
      image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=85",
      aspectRatio: "aspect-[4/5]"
    },
    {
      id: "story-3",
      names: "Isabel & Theo",
      location: "Lisbon",
      year: "Introduced 2025",
      quote: "From the first evening, conversation never felt like work.",
      detail: "Introduced at a private gallery opening overlooking the Tagus river. Both shared an international childhood, deep affinity for literature, and an unhurried weekend pace that neither had found in conventional dating circles.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85",
      aspectRatio: "aspect-[4/5]"
    },
    {
      id: "story-4",
      names: "Julian & Elena",
      location: "Paris & Kyoto",
      year: "Introduced 2024",
      quote: "Discretion was paramount for our careers. The care Élan took was exceptional.",
      detail: "A dual-residence partnership spanning contemporary art publishing and private equity. Connected through our bespoke confidential scout network without public listing or compromise.",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=85",
      aspectRatio: "aspect-[4/5]"
    }
  ] as Story[],

  trust: {
    label: "CONFIDENTIALITY & ETHICS",
    headlineLine1: "Personal by design.",
    headlineLine2: "Private by default.",
    narrative: "Membership is intentionally limited. Every conversation is confidential, every introduction considered, and every profile handled with absolute discretion.",
    markers: [
      {
        number: "01",
        title: "Private Membership",
        description: "We do not host open public profiles, search engines, or social catalogues. Your membership status and private life remain completely invisible to the outside world.",
        note: "Strictly limited member roster"
      },
      {
        number: "02",
        title: "Human-Led Introductions",
        description: "Every match is curated personally by dedicated matchmakers who cultivate a genuine understanding of character, temperament, and lived values.",
        note: "Zero automated algorithmic dispatch"
      },
      {
        number: "03",
        title: "Confidential Profiles",
        description: "Your background, photographic material, and biographical notes are never released without your explicit prior authorization on a person-by-person basis.",
        note: "Bilateral consent protocols"
      },
      {
        number: "04",
        title: "Personal Matchmaking",
        description: "From venue reservations to personalized post-date reflections, our relationship concierges attend to every nuance with warmth and discretion.",
        note: "Dedicated personal partner"
      }
    ] as TrustMarker[]
  },

  membership: {
    label: "PRIVATE MEMBERSHIP",
    headlineLine1: "THIS ISN'T",
    headlineLine2: "FOR EVERYONE.",
    statement: "That's precisely the point.",
    description: "Élan works with a selective roster of accomplished individuals who value emotional clarity, time, and privacy. We accept fewer than 15% of prospective candidates to ensure every search receives our undivided creative focus.",
    quote: "We don't promise thousands of dates. We curate the one that alters your life trajectory.",
    ctaPrimary: "APPLY FOR MEMBERSHIP",
    ctaSecondary: "BOOK A PRIVATE CONSULTATION"
  },

  finalStatement: {
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=2200&q=85",
    headlineLine1: "MEET SOMEONE",
    headlineLine2: "WHO STAYS WITH YOU.",
    subtext: "Begin your introduction today. Discreet, unhurried, and led entirely by human intuition.",
    cta: "BEGIN YOUR INTRODUCTION"
  },

  footer: {
    wordmark: "Élan Match",
    descriptor: "PRIVATE MATCHMAKING & RELATIONSHIP CONCIERGE",
    exploreLinks: [
      { label: "Curation", href: "#curation" },
      { label: "Method", href: "#method" },
      { label: "Stories", href: "#stories" },
      { label: "Discretion", href: "#discretion" },
      { label: "Membership", href: "#membership" }
    ],
    contactInfo: {
      inquiries: "concierge@elanmatch.com",
      press: "press@elanmatch.com",
      locations: "Paris · London · New York · Zurich"
    },
    socialLinks: [
      { label: "Editorial Journal", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" }
    ],
    legalLinks: [
      { label: "Privacy Protocol", href: "#" },
      { label: "Terms of Membership", href: "#" },
      { label: "Discretion Charter", href: "#" }
    ],
    closing: "Meaningful introductions. Made personally."
  }
};
