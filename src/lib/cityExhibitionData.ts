import cityHero from "@/assets/city-hero.jpg";

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
    thumbnail: cityHero,
  },
  {
    slug: "daria-wagner-city-as-dancing-figure",
    title: "The City as Dancing Figure",
    artist: "Daria Wagner",
    artistSlug: "daria-wagner",
    thumbnail: cityHero,
  },
  {
    slug: "eva-maria-shipova-the-city-is",
    title: "The City Is…",
    artist: "Eva-Maria Shipova",
    artistSlug: "eva-maria-shipova",
    thumbnail: cityHero,
  },
  {
    slug: "anna-kazakova-frozen-moments",
    title: "Frozen Moments: Between Time and Eternity",
    artist: "Anna Kazakova",
    artistSlug: "anna-kazakova",
    thumbnail: cityHero,
  },
  {
    slug: "oxana-grom-city-as-orchestra",
    title: "The City as Orchestra",
    artist: "Oxana Grom",
    artistSlug: "oxana-grom",
    thumbnail: cityHero,
  },
  {
    slug: "olga-iavorskaia-geometry-of-the-city",
    title: "Geometry of the City",
    artist: "Olga Iavorskaia",
    artistSlug: "olga-iavorskaia",
    thumbnail: cityHero,
  },
  {
    slug: "olga-tarabukina-abstract-city",
    title: "The Abstract City",
    artist: "Olga Tarabukina",
    artistSlug: "olga-tarabukina",
    thumbnail: cityHero,
  },
];
