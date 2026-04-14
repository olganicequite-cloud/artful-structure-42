import cityHero from "@/assets/city-hero.jpg";
import cityNadezhda from "@/assets/city-nadezhda.jpg";
import cityMark from "@/assets/city-mark.jpg";
import cityEvaMaria from "@/assets/city-eva-maria.jpg";
import cityDaria from "@/assets/city-daria.jpg";
import cityAnna from "@/assets/city-anna.jpg";
import cityOxana from "@/assets/city-oxana.jpg";
import cityOlgaT from "@/assets/city-olga-t.jpg";
import cityOlgaI from "@/assets/city-olga-i.jpg";

export interface CityArtwork {
  slug: string;
  title: string;
  artist: string;
  artistSlug: string;
  thumbnail: string;
  description: string[];
}

export const cityHeroImage = cityHero;

export const cityArtworks: CityArtwork[] = [
  {
    slug: "nadezhda-slavinskene-beyond-form",
    title: "Beyond Form",
    artist: "Nadezhda Slavinskene",
    artistSlug: "nadezhda-slavinskene",
    thumbnail: cityNadezhda,
    description: [
      "In Beyond Form, Nadezhda Slavinskene looks past the surface of architectural structures to discover a language of pure shape and light. Windows, walls, and ceilings become abstract compositions — fields of colour, line, and shadow that dissolve the boundary between documentation and imagination.",
      "The work invites a contemplative gaze: to see not the building, but the geometry it conceals; not the function, but the form it holds in silence.",
    ],
  },
  {
    slug: "mark-poriadkov-marzan-90",
    title: "Marzan 90",
    artist: "Mark Poriadkov",
    artistSlug: "mark-poriadkov",
    thumbnail: cityMark,
    description: [
      "Marzan 90 captures the rhythmic pulse of post-Soviet urban architecture — the repetition, symmetry, and quiet grandeur of residential blocks that define so many cityscapes across Eastern Europe.",
      "Mark Poriadkov frames these structures with precision and empathy, revealing an unexpected beauty in their seriality. Each photograph becomes a meditation on dwelling, memory, and the silent poetry of the built environment.",
    ],
  },
  {
    slug: "daria-wagner-city-as-dancing-figure",
    title: "The City as Dancing Figure",
    artist: "Daria Wagner",
    artistSlug: "daria-wagner",
    thumbnail: cityDaria,
    description: [
      "In The City as Dancing Figure, Daria Wagner captures the fleeting grace of movement within urban settings. Figures in motion — dancers, passers-by, reflections — become inseparable from the architecture that frames them.",
      "The city itself begins to move: façades tilt, shadows stretch, glass surfaces ripple. Wagner's photographs dissolve the boundary between body and building, proposing the city as a choreographic space.",
    ],
  },
  {
    slug: "eva-maria-shipova-the-city-is",
    title: "The City Is…",
    artist: "Eva-Maria Shipova",
    artistSlug: "eva-maria-shipova",
    thumbnail: cityEvaMaria,
    description: [
      "The City Is… is an open-ended exploration of urban texture and mood. Eva-Maria Shipova approaches the city as a question rather than a statement — each image offering a fragment of atmosphere, material, and light.",
      "Dark surfaces, metallic reflections, and the patina of use come together in compositions that feel both intimate and monumental. The work asks: what does the city hold when we stop and truly look?",
    ],
  },
  {
    slug: "anna-kazakova-frozen-moments",
    title: "Frozen Moments: Between Time and Eternity",
    artist: "Anna Kazakova",
    artistSlug: "anna-kazakova",
    thumbnail: cityAnna,
    description: [
      "Frozen Moments: Between Time and Eternity turns toward the classical architecture of Berlin and beyond — columns, arches, and porticos framed in stark black and white. Anna Kazakova suspends these monumental forms in a timeless visual register.",
      "Her photographs are neither nostalgic nor documentary; they exist in a space between memory and permanence, where stone and shadow speak of epochs folded into the present moment.",
    ],
  },
  {
    slug: "oxana-grom-city-as-orchestra",
    title: "The City as Orchestra",
    artist: "Oxana Grom",
    artistSlug: "oxana-grom",
    thumbnail: cityOxana,
    description: [
      "The City as Orchestra listens to the visual rhythms of urban space. Oxana Grom composes each frame as if arranging instruments — colour, line, volume, and light each playing their part in a larger harmony.",
      "Bright accents punctuate industrial greys; geometric forms overlap and echo one another. The result is a city that sounds as much as it appears — vibrant, layered, and full of unexpected resonance.",
    ],
  },
  {
    slug: "olga-iavorskaia-geometry-of-the-city",
    title: "Geometry of the City",
    artist: "Olga Iavorskaia",
    artistSlug: "olga-iavorskaia",
    thumbnail: cityOlgaI,
    description: [
      "Geometry of the City distils urban landscapes into their essential lines and planes. Olga Iavorskaia finds order in the apparent chaos of the built environment — rooftops, walls, and pathways becoming studies in angle and proportion.",
      "Shot in deep contrast and muted tones, her images reveal the hidden structure beneath the city's surface, transforming familiar scenes into graphic, almost diagrammatic compositions.",
    ],
  },
  {
    slug: "olga-tarabukina-abstract-city",
    title: "The Abstract City",
    artist: "Olga Tarabukina",
    artistSlug: "olga-tarabukina",
    thumbnail: cityOlgaT,
    description: [
      "The Abstract City pushes architectural photography toward pure abstraction. Olga Tarabukina isolates fragments of façades, glass, and steel into compositions where material and form take precedence over place.",
      "Diamond grids, intersecting diagonals, and reflective surfaces create images that hover between photography and geometric drawing — an invitation to see the city not as it is, but as the shapes it dreams of becoming.",
    ],
  },
];

export const getCityProjectBySlug = (slug: string): CityArtwork | undefined =>
  cityArtworks.find((a) => a.slug === slug);
