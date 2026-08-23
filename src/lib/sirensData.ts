import sirensEquestrianArt from "@/assets/sirens-equestrian-art.jpg";
import sirensPassingFaces from "@/assets/sirens-passing-faces.jpg";
import sirensFreedomIsland from "@/assets/sirens-freedom-island.jpg";
import sirensPaletteOfTime from "@/assets/sirens-palette-of-time.jpg";
import sirensCreature from "@/assets/sirens-creature.jpg";
import sirensZlata from "@/assets/sirens-zlata.jpg";
import sirensConceptBehind from "@/assets/sirens-the-concept-behind.jpg";
import sirensDarkArt from "@/assets/sirens-dark-art.jpg";

export interface SirensProject {
  slug: string;
  title: string;
  artist: string;
  artistSlug: string; // "" if the artist has no profile page
  poster: string;
  statement: string;
  technicalNote: string;
}

export const sirensProjects: SirensProject[] = [
  {
    slug: "freedom-island",
    title: "Freedom Island",
    artist: "Olga Tarabukina",
    artistSlug: "",
    poster: sirensFreedomIsland,
    statement: "Meditative fine-art photography on personal freedom and introspection.",
    technicalNote:
      "2 works, 40.6 × 50.6 cm · Fine Art Print on Hahnemühle Photo Rag Ultra Smooth 305 gsm, 10 cm passepartout, framed to 50 × 60 cm",
  },
  {
    slug: "palette-of-time",
    title: "Palette of Time",
    artist: "Anna Kazakova",
    artistSlug: "anna-kazakova-2026",
    poster: sirensPaletteOfTime,
    statement: "Colour, long exposure and camera movement turn a passing moment into visible duration.",
    technicalNote:
      "5 works — Fleetingness, Acceleration, Flow, Dissolution, Duration · 29.7 × 42 cm (A3) · Photography, photo print · Edition 1/1",
  },
  {
    slug: "creature",
    title: "Creature",
    artist: "Olha Yezikova",
    artistSlug: "olha-yezikova",
    poster: sirensCreature,
    statement: "A symbolic self-portrait of wholeness, refusing to choose between light and darkness.",
    technicalNote: "1 work · 50 × 70 cm · Acrylic on canvas",
  },
  {
    slug: "zlata",
    title: "Zlata",
    artist: "Julia Shein",
    artistSlug: "julia-shein",
    poster: sirensZlata,
    statement: "The boundary between dream and reality, seen through a child's inner world.",
    technicalNote: "3 works — Dream, Weightlessness, Grounding · A4 · Print on paper",
  },
  {
    slug: "equestrian-art",
    title: "Equestrian Art",
    artist: "Jeanne Saar",
    artistSlug: "jeanne-saar",
    poster: sirensEquestrianArt,
    statement: "The horse as both sculptural form and individual character.",
    technicalNote:
      "3 works — Centurion, Magnum, Grechka · Mixed media on collectible horse models and 3D art cast · Traditional scale, 1:8 – 1:9",
  },
  {
    slug: "passing-faces",
    title: "Passing Faces",
    artist: "Oleg Tokar",
    artistSlug: "oleg-tokar",
    poster: sirensPassingFaces,
    statement: "Identity as something fluid — at the centre, a mirror returns the viewer's gaze.",
    technicalNote: "3 works · Passing Faces — 35 cm diameter · Mixed media with feathers and mirror",
  },
  {
    slug: "the-concept-behind",
    title: "The Concept Behind",
    artist: "Katina Kuhl",
    artistSlug: "katina-kuhl",
    poster: sirensConceptBehind,
    statement: "Control and loss of control in Berlin's nightlife, and the female body within it.",
    technicalNote:
      "3 collages, approx. 70 × 70 cm and 80 × 60 cm, mixed media on canvas · 1 sculptural work, Legs on Chair with Lamp, dimensions variable",
  },
  {
    slug: "dark-art",
    title: "Dark Art",
    artist: "Vika Imago Mortis",
    artistSlug: "vika-imago-mortis",
    poster: sirensDarkArt,
    statement: "Darkness as a space for transformation, ritual and reflection on mortality.",
    technicalNote: "Selected works — approx. 4 dark photographs, 4 drawings and 6 paintings",
  },
];
