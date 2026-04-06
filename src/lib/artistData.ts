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
  longBio: string;
  artistStatement: string;
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
    longBio: "Aj Jul is a Berlin-based artist whose practice centers on drawing as a meditative and introspective discipline. Working primarily with ink and paper, Aj Jul explores the relationship between the human body and the space it inhabits — both physical and emotional.\n\nThe work draws from observations of daily life, moments of stillness, and the tension between interior experience and exterior presence. Each drawing emerges from a slow, deliberate process that treats the act of mark-making as a form of contemplation rather than illustration.\n\nAj Jul has exhibited in group shows across Berlin and continues to develop a visual language that bridges figuration and abstraction, always returning to the body as a site of emotional truth.",
    artistStatement: "Drawing, for me, is a way to slow down and listen. I am interested in how the body carries emotion — how posture, gesture, and spatial tension can reveal states that words cannot reach. My work does not aim to depict reality but to record the atmosphere of being present in a particular moment.",
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
    longBio: "Anna Kazakova is a Berlin-based photographer whose work navigates the intersections of urban space, natural light, architecture, and the quiet presence of the human figure within constructed environments.\n\nOriginally trained in visual communication, Anna turned to photography as a means of exploring how cities hold traces of emotion, memory, and time. Her images often feature minimal compositions — empty streets, reflections in glass, the play of light on concrete — that invite the viewer to pause and observe what is usually overlooked.\n\nHer recent work has moved increasingly toward conceptual projects that use landscape and architecture as metaphors for psychological states. She has participated in exhibitions in Berlin and continues to develop long-term photographic series that examine the invisible weight of everyday spaces.",
    artistStatement: "I photograph what remains after movement has passed — the stillness that follows presence, the light that outlines absence. My work is about finding emotional resonance in architectural and urban forms, about the way a shadow on a wall can carry as much feeling as a portrait. Photography allows me to hold onto moments that exist between visibility and disappearance.",
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
    longBio: "Mariia Zatsepina is a Berlin-based photographer whose artistic practice revolves around nature, transformation, and the emotional resonance of organic forms. Her work often focuses on flowers, botanical subjects, and the human body in relation to natural cycles of growth, decay, and renewal.\n\nMariia's photographic approach is deeply personal and intuitive. She works with both studio and natural light settings, allowing the subject matter to guide the visual tone of each series. Her images carry a sense of intimacy and quiet observation, transforming everyday botanical subjects into contemplative visual studies.\n\nShe has shown work in group exhibitions in Berlin and is currently developing several long-term projects that explore grief, memory, and the persistence of beauty in transient forms.",
    artistStatement: "I am drawn to what is fragile and passing. Flowers, for me, are not decorative — they are emotional archives, holding within their forms the full arc from vitality to stillness. My photography tries to honor this passage, to find beauty not despite transformation but because of it.",
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
    longBio: "Yana Kaziulia is a Belarusian art photographer based in Berlin. She works across analog and digital photography, combining different formats and techniques to explore themes of memory, identity, displacement, and emotional perception.\n\nYana's artistic journey began in Belarus, where political and social upheaval deeply shaped her understanding of color, symbolism, and personal history. After relocating to Berlin, she continued developing a photographic practice that investigates how visual language can process collective trauma and reclaim personal identity.\n\nHer work often engages with the tension between imposed cultural symbols and individual emotional experience. She uses color as both subject and material — exploring how certain hues carry ideological weight and whether they can be liberated from their associations through artistic transformation.\n\nYana has exhibited in Berlin and continues to develop projects that sit at the intersection of documentary impulse and abstract visual experimentation.",
    artistStatement: "I work with photography as a tool for reclaiming what has been taken — colors, symbols, feelings that were once defined by others. My practice asks whether it is possible to transform something that was imposed into something that is chosen. Each project begins with a personal question and moves toward a visual answer that is never complete, always open.",
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
    longBio: "Nadya Net is a Berlin-based artist working across painting and illustration. Her visual language is rooted in surrealism, combining figurative and abstract elements to explore the psychological dimensions of displacement, migration, and the search for belonging.\n\nOriginally from Eastern Europe, Nadya's relocation to Germany became a defining experience in her artistic development. Her work processes the emotional complexity of forced migration — not as a single event, but as a continuous state of being that reshapes identity, perception, and daily experience.\n\nHer paintings often feature fragmented bodies, shifting environments, and symbolic creatures that embody fear, adaptation, and quiet resilience. The visual world she creates is at once unsettling and tender, reflecting the dual nature of life in transit.\n\nNadya has participated in group exhibitions in Berlin and is developing an expanding body of work that examines how art can make the invisible weight of displacement visible.",
    artistStatement: "My work comes from the experience of not belonging — of carrying one place inside you while living in another. I paint the feelings that do not have words yet: the fear that follows you into a new city, the strangeness of becoming someone else, the small acts of courage hidden inside everyday survival. Painting gives these invisible states a form.",
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
  longBio: "",
  artistStatement: "",
  portrait: "",
  cohort: "2025" as const,
  projects: [],
}));

export const getArtistBySlug = (slug: string): Artist | undefined =>
  [...artists, ...placeholderArtists2025].find((a) => a.slug === slug);
