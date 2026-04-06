import styxThumbYana from "@/assets/styx-thumb-yana.jpg";
import styxThumbAnna from "@/assets/styx-thumb-anna.jpg";
import styxThumbNadya from "@/assets/styx-thumb-nadya.jpg";
import styxThumbMariia from "@/assets/styx-thumb-mariia.jpg";
import styxThumbAj from "@/assets/styx-thumb-aj.jpg";
import styxThumb6 from "@/assets/styx-thumb-6.jpg";

export interface FeaturedArtwork {
  slug: string;
  title: string;
  artist: string;
  thumbnail: string;
  technicalNote: string;
}

export const featuredArtworks: FeaturedArtwork[] = [
  {
    slug: "yana-kaziulia-liberation-of-colors",
    title: "Liberation of Colors",
    artist: "Yana Kaziulia",
    thumbnail: styxThumbYana,
    technicalNote: "5 frames, 52 × 52 cm · 4 photographs, 40 × 40 cm · 1 photograph, 40 × 30 cm · 9 polaroids, 8.5 × 7 cm",
  },
  {
    slug: "anna-kazakova-series",
    title: "Untitled Series",
    artist: "Anna Kazakova",
    thumbnail: styxThumbAnna,
    technicalNote: "2 vertical works, 30 × 45 cm · 3 horizontal works, 45 × 30 cm · Print on glass",
  },
  {
    slug: "nadya-net-fear-here",
    title: "Fear Here",
    artist: "Nadya Net",
    thumbnail: styxThumbNadya,
    technicalNote: "Destination Ararat — 100 × 120 cm · In Suspension — 100 × 120 cm · Followed — 140 × 120 cm, diptych · Already Inside — 60 × 60 cm, triptych",
  },
  {
    slug: "mariia-zatsepina-flowers",
    title: "Flowers",
    artist: "Mariia Zatsepina",
    thumbnail: styxThumbMariia,
    technicalNote: "3 photographs on canvas — 60 × 90 cm",
  },
  {
    slug: "aj-jul-works",
    title: "Small Works",
    artist: "Aj Jul",
    thumbnail: styxThumbAj,
    technicalNote: "2 small works, approximately A4 each",
  },
];
