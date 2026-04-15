import thumbNadezhda from "@/assets/projects-thumb-nadezhda-slavinskene.jpg";
import thumbMark from "@/assets/projects-thumb-mark-poriadkov.jpg";
import thumbDaria from "@/assets/projects-thumb-daria-wagner.jpg";
import thumbEvaMaria from "@/assets/projects-thumb-eva-maria-shipova.jpg";
import thumbAnna2025 from "@/assets/projects-thumb-anna-kazakova-2025.jpg";
import thumbOxana from "@/assets/projects-thumb-oxana-grom.jpg";
import thumbOlga from "@/assets/projects-thumb-olga-iavorskaia.jpg";

import annaFrozen1 from "@/assets/anna-frozen-1.jpg";
import annaFrozen2 from "@/assets/anna-frozen-2.jpg";
import annaFrozen3 from "@/assets/anna-frozen-3.jpg";
import annaFrozen4 from "@/assets/anna-frozen-4.jpg";
import dariaDancing1 from "@/assets/daria-dancing-1.jpg";
import dariaDancing2 from "@/assets/daria-dancing-2.jpg";
import evaCity1 from "@/assets/eva-city-1.jpg";
import evaCity2 from "@/assets/eva-city-2.jpg";
import nadezhdaBeyond1 from "@/assets/nadezhda-beyond-1.jpg";

import type { Project } from "@/lib/projectData";

export const projects2025: Project[] = [
  {
    slug: "beyond-form",
    title: "Beyond Form",
    artist: "Nadezhda Slavinskene",
    artistSlug: "nadezhda-slavinskene",
    thumbnail: thumbNadezhda,
    description: [
      "Beyond Form explores the tension between architectural structure and the emotional states it silently contains. The project turns its attention to the spaces we pass through without noticing — corridors, window frames, thresholds — and asks what they hold when we stop to look.",
      "Through careful observation of light, reflection, and geometry, the work transforms familiar urban interiors into sites of contemplation. Each image suspends a moment where built form and inner experience briefly align, revealing a quiet dialogue between the material and the felt.",
      "The project proposes that freedom is not found in open landscapes alone, but also within the frames and boundaries that shape our daily perception. It is an invitation to see confinement and openness as coexisting conditions — and to find beauty in the spaces between.",
    ],
    images: [
      {
        src: nadezhdaBeyond1,
        alt: "Nadezhda Slavinskene — Beyond Form I",
        caption: { title: "Beyond Form I", medium: "Photograph", dimensions: "Various sizes" },
      },
    ],
  },
  {
    slug: "marzahn-90",
    title: "Marzahn 90",
    artist: "Mark Poriadkov",
    artistSlug: "mark-poriadkov",
    thumbnail: thumbMark,
    description: [
      "Marzahn 90 is a visual journey into the rhythms and textures of a Berlin district that carries layers of history within its surfaces. The project examines Marzahn not as a peripheral zone, but as a living archive of collective memory, urban transformation, and quiet resilience.",
      "Through moving image and atmospheric observation, the work captures the district's pulse — its light, its residents, its architecture — as elements of an ongoing, unfinished story. The project treats the city as an organism whose character is shaped by time, habit, and the accumulated presence of those who inhabit it.",
      "Marzahn 90 invites the viewer to reconsider overlooked neighborhoods as sites of depth, beauty, and meaning — places where the ordinary becomes extraordinary when observed with patience and attention.",
    ],
    images: [
      {
        src: thumbMark,
        alt: "Mark Poriadkov — Marzahn 90",
        caption: { title: "Marzahn 90", medium: "Video / Moving image", dimensions: "Various formats" },
      },
    ],
  },
  {
    slug: "the-city-as-dancing-figure",
    title: "The City as Dancing Figure",
    artist: "Daria Wagner",
    artistSlug: "daria-wagner",
    thumbnail: thumbDaria,
    description: [
      "The City as Dancing Figure captures the moment when the human body and urban architecture enter into dialogue — a visual choreography where gesture, space, and structure become inseparable.",
      "The project places dancers within the fabric of the city, not as performers on a stage but as figures responding to the geometry, rhythm, and atmosphere of their surroundings. Each image reveals how movement can transform a street corner, a staircase, or a public square into a space of expression and beauty.",
      "Through this work, the city itself becomes a partner in the dance — its angles and surfaces shaping the body's response, while the body, in turn, reveals the hidden grace within everyday architecture. The project asks: what happens when we stop merely passing through a space and begin to inhabit it fully, with our whole being?",
    ],
    images: [
      {
        src: dariaDancing1,
        alt: "Daria Wagner — The City as Dancing Figure I",
        caption: { title: "The City as Dancing Figure I", medium: "Photograph", dimensions: "Various sizes" },
      },
      {
        src: dariaDancing2,
        alt: "Daria Wagner — The City as Dancing Figure II",
        caption: { title: "The City as Dancing Figure II", medium: "Photograph", dimensions: "Various sizes" },
      },
    ],
  },
  {
    slug: "the-city-is",
    title: "The City Is…",
    artist: "Eva-Maria Shipova",
    artistSlug: "eva-maria-shipova",
    thumbnail: thumbEvaMaria,
    description: [
      "The City Is… is an open-ended exploration of urban identity through intuitive observation. The project resists fixed definitions, instead offering fragments — visual impressions, fleeting encounters, ambient moods — that together form a portrait of the city as it is experienced rather than explained.",
      "Each image functions as a poetic notation: a cat in a window, a shadow on a wall, a texture that catches the eye for reasons not immediately clear. The work trusts the viewer to find their own connections, their own city within these images.",
      "The ellipsis in the title is deliberate — an invitation to complete the sentence, to participate in the act of seeing. The City Is… is not a statement but a question, asked quietly and left open.",
    ],
    images: [
      {
        src: evaCity1,
        alt: "Eva-Maria Shipova — The City Is… I",
        caption: { title: "The City Is… I", medium: "Photograph", dimensions: "Various sizes" },
      },
      {
        src: evaCity2,
        alt: "Eva-Maria Shipova — The City Is… II",
        caption: { title: "The City Is… II", medium: "Photograph", dimensions: "Various sizes" },
      },
    ],
  },
  {
    slug: "frozen-moments",
    title: "Frozen Moments",
    artist: "Anna Kazakova",
    artistSlug: "anna-kazakova-2025",
    thumbnail: thumbAnna2025,
    description: [
      "Frozen Moments captures the transient beauty of suspended time within urban environments. The project explores those instants when movement pauses, light holds still, and the city reveals something honest about itself.",
      "Through architectural frames, glass reflections, and the interplay of interior and exterior space, the work creates images that exist between documentation and meditation. Each photograph is a threshold — a moment caught between what has just happened and what is about to begin.",
      "The project reflects on photography itself as a practice of freezing — of holding onto what is already passing. In this sense, every image is both a preservation and a farewell, a record of presence that acknowledges impermanence.",
    ],
    images: [
      {
        src: annaFrozen1,
        alt: "Anna Kazakova — Frozen Moments I",
        caption: { title: "Frozen Moments I", medium: "Photograph", dimensions: "Various sizes" },
      },
      {
        src: annaFrozen2,
        alt: "Anna Kazakova — Frozen Moments II",
        caption: { title: "Frozen Moments II", medium: "Photograph", dimensions: "Various sizes" },
      },
      {
        src: annaFrozen3,
        alt: "Anna Kazakova — Frozen Moments III",
        caption: { title: "Frozen Moments III", medium: "Photograph", dimensions: "Various sizes" },
      },
      {
        src: annaFrozen4,
        alt: "Anna Kazakova — Frozen Moments IV",
        caption: { title: "Frozen Moments IV", medium: "Photograph", dimensions: "Various sizes" },
      },
    ],
  },
  {
    slug: "the-city-as-orchestra",
    title: "The City as Orchestra",
    artist: "Oxana Grom",
    artistSlug: "oxana-grom",
    thumbnail: thumbOxana,
    description: [
      "The City as Orchestra translates the visual rhythms of urban environments into a photographic language of form, repetition, and variation. The project treats the city as a musical composition — a system of patterns, beats, and counterpoints that together create a complex, living harmony.",
      "Through rigorous attention to architectural surfaces, color contrasts, and geometric relationships, the work reveals the hidden musicality of everyday spaces. A row of shutters becomes a chord; the shadow of a railing, a melody; the juxtaposition of materials, an improvisation.",
      "The project invites the viewer to listen with their eyes — to experience the city not only as a visual field but as a sonic landscape made visible, where order and disruption coexist in creative tension.",
    ],
    images: [
      {
        src: thumbOxana,
        alt: "Oxana Grom — The City as Orchestra",
        caption: { title: "The City as Orchestra", medium: "Photograph", dimensions: "Various sizes" },
      },
    ],
  },
  {
    slug: "geometry-of-the-city",
    title: "Geometry of the City",
    artist: "Olga Iavorskaia",
    artistSlug: "olga-iavorskaia",
    thumbnail: thumbOlga,
    description: [
      "Geometry of the City is a photographic investigation into the formal language of architecture — the lines, angles, and surfaces that define our built environments. The project isolates these elements from their functional context, transforming them into compositions that hover between representation and abstraction.",
      "Through close observation of shadows, edges, and material textures, the work reveals a hidden world of geometric relationships within familiar structures. Each image is a study in visual tension — between light and dark, smooth and rough, intention and erosion.",
      "The project proposes that the city is not merely a practical arrangement of buildings and streets, but a vast, unconscious artwork — a field of formal decisions that shape how we move, see, and feel within urban space.",
    ],
    images: [
      {
        src: thumbOlga,
        alt: "Olga Iavorskaia — Geometry of the City",
        caption: { title: "Geometry of the City", medium: "Photograph", dimensions: "Various sizes" },
      },
    ],
  },
];

export const getProject2025BySlug = (slug: string) =>
  projects2025.find((p) => p.slug === slug);
