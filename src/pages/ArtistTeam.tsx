import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { artists, placeholderArtists2025, Artist, getArtistBySlug } from "@/lib/artistData";
import palmiraPortrait from "@/assets/palmira-furman.jpg";
import annaK202526Portrait from "@/assets/anna-kazakova-2025-26.jpg";
import minimalistixLogo from "@/assets/minimalistix-logo.png";
import speakeazyLogo from "@/assets/speakeazy-logo.jpg";

const excludeFromCohort202526 = new Set([
  "anna-kazakova-2026",
  "julia-shein",
  "vika-imago-mortis",
]);

const portraitCropMap: Record<string, string> = {
  "olga-iavorskaia": "50% 30%",
  "daria-wagner": "50% 32%",
  "anna-kazakova-2025": "50% 40%",
  "eva-maria-shipova": "50% 33%",
  "oxana-grom": "50% 28%",
};

const ArtistCard = ({ artist, roleLine }: { artist: Artist; roleLine?: string }) => {
  const hasDetail = artist.cohort === "2025-26" || artist.cohort === "2025";
  const objectPosition = portraitCropMap[artist.slug] || "center";

  const content = (
    <div className="group cursor-pointer">
      <div className="aspect-[4/5] bg-secondary overflow-hidden mb-3">
        {artist.portrait ? (
          <img
            src={artist.portrait}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ objectPosition }}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6">
            <span className="font-sans text-2xl md:text-3xl font-light tracking-tight text-foreground/40 text-center leading-tight">
              {artist.name}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-sans text-base md:text-lg font-light leading-snug mb-0.5">
        {artist.name}
      </h3>
      <p className="text-editorial-caption">{artist.shortLine}</p>
      {roleLine && (
        <p className="text-editorial-caption text-foreground/50 mt-0.5">{roleLine}</p>
      )}
    </div>
  );

  if (hasDetail) {
    return <Link to={`/artists/${artist.slug}`}>{content}</Link>;
  }

  return content;
};

interface Partner {
  slug: string;
  name: string;
  role: string;
  shortDescription: string;
  bio?: string;
  image?: string;
  isLogo?: boolean;
  externalUrl?: string;
  externalLabel?: string;
  internalUrl?: string;
  internalLabel?: string;
  eventDate?: string;
}

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <div>
    <div
      className={`aspect-[4/5] overflow-hidden mb-3 ${
        partner.isLogo ? "bg-black flex items-center justify-center" : "bg-secondary"
      }`}
    >
      {partner.image ? (
        <img
          src={partner.image}
          alt={partner.name}
          className={
            partner.isLogo
              ? "w-full h-full object-cover scale-[1.35]"
              : "w-full h-full object-cover"
          }
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center p-6">
          <span className="font-sans text-xl md:text-2xl font-light tracking-tight text-foreground/50 text-center leading-tight">
            {partner.name}
          </span>
        </div>
      )}
    </div>
    <h3 className="font-sans text-base md:text-lg font-light leading-snug mb-0.5">
      {partner.name}
    </h3>
    <p className="text-editorial-caption">{partner.role}</p>
    <p className="text-editorial-caption text-foreground/60 mt-2 leading-relaxed">
      {partner.shortDescription}
    </p>
    {partner.eventDate && (
      <p className="text-editorial-caption text-foreground/50 mt-1">{partner.eventDate}</p>
    )}
    {partner.bio && (
      <details className="mt-3 group">
        <summary className="text-editorial-caption cursor-pointer hover:text-foreground transition-colors list-none">
          <span className="group-open:hidden">Read more →</span>
          <span className="hidden group-open:inline">Close ↑</span>
        </summary>
        <div className="mt-3 space-y-3">
          {partner.bio.split("\n\n").map((p, i) => (
            <p key={i} className="text-editorial-body leading-relaxed whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      </details>
    )}
    {(partner.internalUrl || partner.externalUrl) && (
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {partner.internalUrl && (
          <Link
            to={partner.internalUrl}
            className="text-editorial-caption hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            {partner.internalLabel || "View →"}
          </Link>
        )}
        {partner.externalUrl && (
          <a
            href={partner.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-editorial-caption hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            {partner.externalLabel || "Visit ↗"}
          </a>
        )}
      </div>
    )}
  </div>
);

const CohortCTACard = () => (
  <Link to="/contact?reason=Participation" className="group">
    <div className="aspect-[4/5] border border-foreground/10 bg-secondary/30 overflow-hidden mb-3 flex flex-col items-center justify-center transition-colors group-hover:border-foreground/25">
      <div className="text-center px-4">
        <span className="block font-sans text-xs tracking-[0.2em] uppercase text-foreground/30 mb-2">+</span>
        <span className="block font-sans text-base md:text-lg font-light text-foreground/60 group-hover:text-foreground/80 transition-colors leading-snug">
          Become Part of<br />the Next Cohort
        </span>
      </div>
    </div>
    <p className="text-editorial-caption text-foreground/40 group-hover:text-foreground/60 transition-colors">
      Applications · Contact · Participation
    </p>
  </Link>
);

const ArtistTeam = () => {
  const anna = getArtistBySlug("anna-kazakova-2026")!;
  const julia = getArtistBySlug("julia-shein")!;
  const vika = getArtistBySlug("vika-imago-mortis")!;

  const palmira: Partner = {
    slug: "palmira-furman",
    name: "Palmira Furman",
    role: "Program & Cooperation Partner · 2026",
    image: palmiraPortrait,
    shortDescription:
      "Vocal Academy · Singer · Songwriter · Vocal Teacher. Featured cooperation: Meditative Sound Therapy — an immersive journey into the deep, primordial soundscapes of nature. Hosted by Palmira Furman.",
    bio: "My name is Palmira Furman, and I am a professional singer, songwriter and vocal teacher based in Berlin. The emotions and needs of my clients are at the centre of my work.\n\nWhether you are a beginner, a professional or simply want to sing for pleasure, my individual approach supports you in expressing your own story through your voice. Empathy and experience are fundamental to my teaching and create an environment that is both accessible and professional.\n\nMy approach draws on more than a decade of teaching international clients as well as my own professional singing career. These areas overlap in a method that combines practical and theoretical work.\n\nMy method is built around three main pillars:\n– Fundamental skills: breathing, articulation and clear vocal production\n– Initial development: vocal range, stage work and artistic presentation\n– Professional performance: vocal techniques, stylistic versatility, multivocal practice and extreme vocals\n\nA balanced and healthy vocal technique gives singers greater freedom. Vocal freedom can remove barriers that often prevent truthful communication. Through freedom of voice and authentic expression, singing has the potential to transform both performers and listeners.",
  };

  const minimalistix: Partner = {
    slug: "minimalistix-gallery",
    name: "Minimalistix Gallery",
    role: "Exhibition Partner",
    image: minimalistixLogo,
    isLogo: true,
    shortDescription:
      "HAPPY ART WEEK Berlin 2026 — exhibition partner.",
    eventDate: "HAPPY ART WEEK Berlin 2026 · 24 July — 1 August 2026",
    internalUrl: "/exhibition#happy-art-week-2026",
    internalLabel: "View Exhibition →",
    externalUrl: "https://minimalistix.eu/",
    externalLabel: "Visit Minimalistix ↗",
  };

  const speakeasy: Partner = {
    slug: "speakeasy",
    name: "SpeakEasy Stage & Studio",
    role: "Venue & Cooperation Partner",
    image: speakeazyLogo,
    isLogo: true,
    shortDescription: "Exhibition cooperation with SpeakEasy Berlin.",
    eventDate: "29 August 2026",
    externalUrl: "https://www.speakeasyberlin.de/events",
    externalLabel: "SpeakEasy Events ↗",
  };

  return (
    <SiteLayout>
      <Seo
        title="Artist Team 2026 & Cooperation Partners — Creative Project NEW"
        description="Meet the 2026 participants Anna Kazakova and Julia Shein, independent participant Vika Imago Mortis, and the cooperation partners of Creative Project NEW in Berlin."
        path="/artists"
      />
      <section className="section-spacing page-padding">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumb items={[{ label: "Artist Team" }]} />

          <FadeIn>
            <p className="text-editorial-detail mb-4">Artist Team</p>
            <h1 className="text-editorial-title mb-6">The Artists &amp; Partners</h1>
            <p className="text-editorial-body text-foreground/70 max-w-2xl mb-12 md:mb-16">
              Creative Project NEW brings together participating artists, independent artistic
              voices and cooperation partners whose practices contribute to the project's
              exhibitions, workshops and interdisciplinary program.
            </p>
          </FadeIn>

          {/* Artists · 2026 */}
          <FadeIn delay={0.05}>
            <p className="text-editorial-detail mb-6">Artists · 2026</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            <FadeIn>
              <ArtistCard artist={julia} roleLine="Participant · 2026" />
            </FadeIn>
            <FadeIn delay={0.05}>
              <ArtistCard artist={vika} roleLine="Independent Participant · 2026" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ArtistCard artist={anna} roleLine="Participant · 2026" />
            </FadeIn>
          </div>

          {/* Partners & Collaborations */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Partners &amp; Collaborations</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            <FadeIn>
              <PartnerCard partner={palmira} />
            </FadeIn>
            <FadeIn delay={0.05}>
              <PartnerCard partner={minimalistix} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <PartnerCard partner={speakeasy} />
            </FadeIn>
          </div>

          {/* Participation CTA */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Participation</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            <FadeIn>
              <CohortCTACard />
            </FadeIn>
          </div>

          {/* Cohort 2025/26 */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Cohort 2025/26</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            {artists
              .filter((a) => !excludeFromCohort202526.has(a.slug))
              .map((artist, i) => {
                const displayArtist =
                  artist.slug === "anna-kazakova"
                    ? { ...artist, portrait: annaK202526Portrait }
                    : artist;
                return (
                  <FadeIn key={artist.slug} delay={i * 0.04}>
                    <ArtistCard artist={displayArtist} />
                  </FadeIn>
                );
              })}
          </div>

          {/* Cohort 2025 */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Cohort 2025</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12">
            {placeholderArtists2025.map((artist, i) => (
              <FadeIn key={artist.slug} delay={i * 0.04}>
                <ArtistCard artist={artist} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ArtistTeam;
