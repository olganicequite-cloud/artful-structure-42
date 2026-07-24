import palmiraPortrait from "@/assets/palmira-furman.jpg";
import minimalistixLogo from "@/assets/minimalistix-logo.png";
import speakeazyLogo from "@/assets/speakeazy-logo.jpg";

export interface Partner {
  slug: string;
  name: string;
  role: string;
  shortDescription: string;
  bio?: string;
  featuredTitle?: string;
  featuredSubtitle?: string;
  hostedBy?: string;
  professionalLine?: string;
  image?: string;
  isLogo?: boolean;
  logoBg?: "black" | "white";
  externalUrl?: string;
  externalLabel?: string;
  internalUrl?: string;
  internalLabel?: string;
  eventDate?: string;
  cooperation?: string;
}

export const partners: Partner[] = [
  {
    slug: "palmira-furman",
    name: "Palmira Furman",
    role: "Program & Cooperation Partner · 2026",
    image: palmiraPortrait,
    professionalLine: "Vocal Academy · Singer · Songwriter · Vocal Teacher",
    featuredTitle: "Meditative Sound Therapy",
    featuredSubtitle:
      "An immersive journey into the deep, primordial soundscapes of nature.",
    hostedBy: "Hosted by Palmira Furman",
    shortDescription:
      "Vocal Academy · Singer · Songwriter · Vocal Teacher. Featured cooperation: Meditative Sound Therapy — an immersive journey into the deep, primordial soundscapes of nature. Hosted by Palmira Furman.",
    bio: "My name is Palmira Furman, and I am a professional singer, songwriter and vocal teacher based in Berlin. The emotions and needs of my clients are at the centre of my work.\n\nWhether you are a beginner, a professional or simply want to sing for pleasure, my individual approach supports you in expressing your own story through your voice. Empathy and experience are fundamental to my teaching and create an environment that is both accessible and professional.\n\nMy approach draws on more than a decade of teaching international clients as well as my own professional singing career. These areas overlap in a method that combines practical and theoretical work.\n\nMy method is built around three main pillars:\n– Fundamental skills: breathing, articulation and clear vocal production\n– Initial development: vocal range, stage work and artistic presentation\n– Professional performance: vocal techniques, stylistic versatility, multivocal practice and extreme vocals\n\nA balanced and healthy vocal technique gives singers greater freedom. Vocal freedom can remove barriers that often prevent truthful communication. Through freedom of voice and authentic expression, singing has the potential to transform both performers and listeners.",
  },
  {
    slug: "minimalistix-gallery",
    name: "Minimalistix Gallery",
    role: "Exhibition Partner",
    image: minimalistixLogo,
    isLogo: true,
    cooperation: "HAPPY ART WEEK Berlin 2026",
    eventDate: "24 July — 1 August 2026",
    shortDescription:
      "Exhibition cooperation and support for HAPPY ART WEEK Berlin 2026.",
    internalUrl: "/exhibition#happy-art-week-2026",
    internalLabel: "View Exhibition →",
    externalUrl: "https://minimalistix.eu/",
    externalLabel: "Visit Minimalistix ↗",
  },
  {
    slug: "speakeasy-stage-studio",
    name: "SpeakEasy Stage & Studio",
    role: "Venue & Cooperation Partner",
    image: speakeazyLogo,
    isLogo: true,
    logoBg: "white",
    shortDescription: "Exhibition cooperation with SpeakEasy Berlin.",
    eventDate: "29 August 2026",
    externalUrl: "https://www.speakeasyberlin.de/events",
    externalLabel: "SpeakEasy Events ↗",
  },
];

export const getPartnerBySlug = (slug: string) =>
  partners.find((p) => p.slug === slug);