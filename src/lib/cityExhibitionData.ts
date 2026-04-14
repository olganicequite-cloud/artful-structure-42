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
}

export const cityHeroImage = cityHero;

export const cityArtworks: CityArtwork[] = [
  {
    slug: "nadezhda-slavinskene-beyond-form",
    title: "Beyond Form",
    artist: "Nadezhda Slavinskene",
    artistSlug: "nadezhda-slavinskene",
    thumbnail: cityNadezhda,
  },
  {
    slug: "mark-poriadkov-marzan-90",
    title: "Marzan 90",
    artist: "Mark Poriadkov",
    artistSlug: "mark-poriadkov",
    thumbnail: cityMark,
  },
  {
    slug: "daria-wagner-city-as-dancing-figure",
    title: "The City as Dancing Figure",
    artist: "Daria Wagner",
    artistSlug: "daria-wagner",
    thumbnail: cityDaria,
  },
  {
    slug: "eva-maria-shipova-the-city-is",
    title: "The City Is…",
    artist: "Eva-Maria Shipova",
    artistSlug: "eva-maria-shipova",
    thumbnail: cityEvaMaria,
  },
  {
    slug: "anna-kazakova-frozen-moments",
    title: "Frozen Moments: Between Time and Eternity",
    artist: "Anna Kazakova",
    artistSlug: "anna-kazakova",
    thumbnail: cityAnna,
  },
  {
    slug: "oxana-grom-city-as-orchestra",
    title: "The City as Orchestra",
    artist: "Oxana Grom",
    artistSlug: "oxana-grom",
    thumbnail: cityOxana,
  },
  {
    slug: "olga-iavorskaia-geometry-of-the-city",
    title: "Geometry of the City",
    artist: "Olga Iavorskaia",
    artistSlug: "olga-iavorskaia",
    thumbnail: cityOlgaI,
  },
  {
    slug: "olga-tarabukina-abstract-city",
    title: "The Abstract City",
    artist: "Olga Tarabukina",
    artistSlug: "olga-tarabukina",
    thumbnail: cityOlgaT,
  },
];
