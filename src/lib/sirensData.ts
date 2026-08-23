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
    statement:
      "Freedom Island explores personal freedom, creativity and introspection through a meditative fine-art photographic language. The series creates a visual space for reflection, where the movement of water, softened forms and an almost suspended sense of time become metaphors for inner freedom and personal perception.",
    technicalNote:
      "2 works, 40.6 × 50.6 cm · Fine Art Print on Hahnemühle Photo Rag Ultra Smooth 305 gsm, 10 cm passepartout, framed to 50 × 60 cm",
  },
  {
    slug: "palette-of-time",
    title: "Palette of Time",
    artist: "Anna Kazakova",
    artistSlug: "anna-kazakova-2026",
    poster: sirensPaletteOfTime,
    statement:
      "Palette of Time explores the perception of time through colour, long exposure and intentional camera movement. Forms dissolve, space becomes fluid, and each photograph turns a passing moment into a visible trace of duration.",
    technicalNote:
      "5 works — Fleetingness, Acceleration, Flow, Dissolution, Duration · 29.7 × 42 cm (A3) · Photography, photo print · Edition 1/1",
  },
  {
    slug: "creature",
    title: "Creature",
    artist: "Olha Yezikova",
    artistSlug: "olha-yezikova",
    poster: sirensCreature,
    statement:
      "Creature is a symbolic self-portrait reflecting wholeness without choosing between light and darkness. Vibrant colour and glitter express joy and sensitivity, while claws, fangs and dark skin represent strength and protection. Handmade kanekalon dreadlocks extend beyond the canvas, symbolising the refusal to remain within imposed boundaries.",
    technicalNote: "1 work · 50 × 70 cm · Acrylic on canvas",
  },
  {
    slug: "zlata",
    title: "Zlata",
    artist: "Julia Shein",
    artistSlug: "julia-shein",
    poster: sirensZlata,
    statement:
      "Zlata explores the delicate boundary between dreams and reality through the inner world of seven-year-old Zlata. The series moves through three states — Dream, Weightlessness and Grounding — using experimental scanning, grain and blurred imagery to express fragility, movement, growth and the return to reality. Developed under the artistic guidance of Olga Tarabukina within Creative Project NEW.",
    technicalNote: "3 works — Dream, Weightlessness, Grounding · A4 · Print on paper",
  },
  {
    slug: "equestrian-art",
    title: "Equestrian Art",
    artist: "Jeanne Saar",
    artistSlug: "jeanne-saar",
    poster: sirensEquestrianArt,
    statement:
      "Equestrian Art explores the horse as both a sculptural form and an individual character. Using acrylics, dry pigments, natural mohair, handcrafted details and digital 3D techniques, Jeanne Saar combines anatomical realism with artistic interpretation.",
    technicalNote:
      "3 works — Centurion, Magnum, Grechka · Mixed media on collectible horse models and 3D art cast · Traditional scale, 1:8 – 1:9",
  },
  {
    slug: "passing-faces",
    title: "Passing Faces",
    artist: "Oleg Tokar",
    artistSlug: "oleg-tokar",
    poster: sirensPassingFaces,
    statement:
      "Passing Faces explores identity as something fluid and temporary. Faces emerge from the feathers and dissolve again like passing states, masks and fragments of the self. At the centre, a mirror becomes the only element that holds no image of its own — returning the viewer's gaze and turning observation into self-reflection.",
    technicalNote: "3 works · Passing Faces — 35 cm diameter · Mixed media with feathers and mirror",
  },
  {
    slug: "the-concept-behind",
    title: "The Concept Behind",
    artist: "Katina Kuhl",
    artistSlug: "katina-kuhl",
    poster: sirensConceptBehind,
    statement:
      "The Concept Behind explores the tension between control and loss of control within Berlin's nightlife and club culture. The works focus on the female body, its objectification, and the ways this condition can be confronted, played with and reinterpreted through darkness, consumption, sensuality and emotional endurance. Using a black-and-white palette with accents of red and pink, the project moves between fragility and strength, discomfort and pleasure, seriousness and play.",
    technicalNote:
      "3 collages, approx. 70 × 70 cm and 80 × 60 cm, mixed media on canvas · 1 sculptural work, Legs on Chair with Lamp, dimensions variable",
  },
  {
    slug: "dark-art",
    title: "Dark Art",
    artist: "Vika Imago Mortis",
    artistSlug: "vika-imago-mortis",
    poster: sirensDarkArt,
    statement:
      "Dark Art brings together works in which darkness becomes a space for transformation, spiritual tension and reflection on mortality. Through symbolic imagery, ritual elements, bones, shadow and the human figure, Vika creates an atmosphere suspended between the living and the dead, the physical and the hidden.",
    technicalNote: "Selected works — approx. 4 dark photographs, 4 drawings and 6 paintings",
  },
];
