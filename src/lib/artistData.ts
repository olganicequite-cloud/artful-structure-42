import yanaPortrait from "@/assets/yana-kaziulia.jpg";
import annaPortrait from "@/assets/anna-kazakova.jpg";
import mariiaPortrait from "@/assets/mariia-zatsepina.jpg";
import nadyaPortrait from "@/assets/nadya-net.jpg";
import ajPortrait from "@/assets/aj-jul.png";

import ajWork1 from "@/assets/aj-jul-work-1.jpg";
import ajWork2 from "@/assets/aj-jul-work-2.jpg";
import annaWork1 from "@/assets/anna-work-1.jpg";
import annaWork2 from "@/assets/anna-work-2.jpg";
import annaWork3 from "@/assets/anna-work-3.jpg";
import annaWork4 from "@/assets/anna-work-4.jpg";
import annaWork5 from "@/assets/anna-work-5.jpg";
import mariiaWork1 from "@/assets/mariia-flowers-1.jpg";
import mariiaWork2 from "@/assets/mariia-flowers-2.jpg";
import mariiaWork3 from "@/assets/mariia-flowers-3.jpg";
import nadyaWork1 from "@/assets/nadya-fearhere-1.jpg";
import yanaWork1 from "@/assets/yana-work-1.jpg";
import yanaWork2 from "@/assets/yana-work-2.jpg";
import yanaWork3 from "@/assets/yana-work-3.jpg";
import yanaWork4 from "@/assets/yana-work-4.jpg";
import yanaWork5 from "@/assets/yana-work-5.jpg";

export interface ArtistProject {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export interface Artist {
  slug: string;
  name: string;
  shortLine: string;
  bio: string;
  portrait: string;
  cohort: "2025-26" | "2025";
  projects: ArtistProject[];
}

export const artists: Artist[] = [
  {
    slug: "aj-jul",
    name: "Aj Jul",
    shortLine: "Drawing · Emotional States · Space",
    bio: "Berlin-based artist exploring emotional states and the relationship between the human body and surrounding space. Drawing is approached as a meditative practice.",
    portrait: ajPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "Dynamics of the Seasons",
        description: "A two-part work about Winter & Spring and Summer & Autumn. The seasons are presented as relational forces that exist through the negation of one another. Themes: transition, cyclic tension, relationship, transformation.",
        images: [
          { src: ajWork1, alt: "Aj Jul — Dynamics of the Seasons 1" },
          { src: ajWork2, alt: "Aj Jul — Dynamics of the Seasons 2" },
        ],
      },
    ],
  },
  {
    slug: "anna-kazakova",
    name: "Anna Kazakova",
    shortLine: "Photography · Urban Space · Light",
    bio: "Berlin-based photographer exploring urban space, nature, suspended time, light, architecture, and subtle human presence.",
    portrait: annaPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "Invisible Weight — A Diary of a Shadow",
        description: "A project about depression, not as a clinical diagnosis but as a phenomenon of inner space. A white landscape becomes a model of silence, disorientation, deceleration, and invisible weight.",
        images: [
          { src: annaWork1, alt: "Anna Kazakova — Invisible Weight 1" },
          { src: annaWork2, alt: "Anna Kazakova — Invisible Weight 2" },
          { src: annaWork3, alt: "Anna Kazakova — Invisible Weight 3" },
          { src: annaWork4, alt: "Anna Kazakova — Invisible Weight 4" },
          { src: annaWork5, alt: "Anna Kazakova — Invisible Weight 5" },
        ],
      },
    ],
  },
  {
    slug: "mariia-zatsepina",
    name: "Mariia Zatsepina",
    shortLine: "Photography · Nature · Transformation",
    bio: "Berlin-based photographer working with portraiture, nature, flowers, emotional states, and transformation.",
    portrait: mariiaPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "Flowers",
        description: "A personal project about dried flowers, transition, grief, memory, fragility, and transformation. The flowers are not symbols of death, but of continuation, presence, and another state of being.",
        images: [
          { src: mariiaWork1, alt: "Mariia Zatsepina — Flowers 1" },
          { src: mariiaWork2, alt: "Mariia Zatsepina — Flowers 2" },
          { src: mariiaWork3, alt: "Mariia Zatsepina — Flowers 3" },
        ],
      },
    ],
  },
  {
    slug: "yana-kaziulia",
    name: "Yana Kaziulia",
    shortLine: "Photography · Memory · Identity",
    bio: "Belarusian art photographer based in Berlin, working across analog and digital photography. Her practice explores memory, identity, emotional presence, and perception.",
    portrait: yanaPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "Liberation of Colors",
        description: "A project about red and green as traumatic emotional triggers linked to violence, ideology, and imposed identity. The work asks whether these colors can be reclaimed and transformed into something new.",
        images: [
          { src: yanaWork1, alt: "Yana Kaziulia — Liberation of Colors 1" },
          { src: yanaWork2, alt: "Yana Kaziulia — Liberation of Colors 2" },
          { src: yanaWork3, alt: "Yana Kaziulia — Liberation of Colors 3" },
          { src: yanaWork4, alt: "Yana Kaziulia — Liberation of Colors 4" },
          { src: yanaWork5, alt: "Yana Kaziulia — Liberation of Colors 5" },
        ],
      },
    ],
  },
  {
    slug: "nadya-net",
    name: "Nadya Net",
    shortLine: "Painting · Illustration · Displacement",
    bio: "Berlin-based artist working with painting and illustration in a surreal visual language, exploring displacement, relocation, fear, identity, and emotional transformation.",
    portrait: nadyaPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "FEAR HERE",
        description: "A mixed-media project about forced migration as an ongoing state without stable belonging. Fear appears as a shifting companion within urban space. The project explores adaptation through coexistence rather than overcoming.",
        images: [
          { src: nadyaWork1, alt: "Nadya Net — FEAR HERE" },
        ],
      },
    ],
  },
];

export const placeholderArtists2025: Artist[] = Array.from({ length: 7 }, (_, i) => ({
  slug: `artist-2025-${i + 1}`,
  name: `Artist ${i + 1}`,
  shortLine: "Coming soon",
  bio: "Biography will be available soon.",
  portrait: "",
  cohort: "2025" as const,
  projects: [],
}));

export const getArtistBySlug = (slug: string): Artist | undefined =>
  [...artists, ...placeholderArtists2025].find((a) => a.slug === slug);
