import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { artists, placeholderArtists2025, Artist, getArtistBySlug } from "@/lib/artistData";
import annaK202526Portrait from "@/assets/anna-kazakova-2025-26.jpg";
import { partners as partnerList, Partner } from "@/lib/partnerData";

const excludeFromCohort202526 = new Set([
  "anna-kazakova-2026",
  "julia-shein",
  "vika-imago-mortis",
  "jeanne-saar",
  "olha-yezikova",
  "katina-kuhl",
  "oleg-tokar",
]);

const independentSlugs = [
  "vika-imago-mortis",
  "jeanne-saar",
  "olha-yezikova",
  "katina-kuhl",
  "oleg-tokar",
];

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

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const profileHref = `/partners/${partner.slug}`;
  return (
    <div className="group">
      <Link
        to={profileHref}
        aria-label={`View ${partner.name} partner profile`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div
          className={`aspect-[4/5] overflow-hidden mb-3 ${
            partner.isLogo
              ? `${partner.logoBg === "white" ? "bg-white" : "bg-black"} flex items-center justify-center`
              : "bg-secondary"
          }`}
        >
          {partner.image ? (
            <img
              src={partner.image}
              alt={partner.name}
              className={
                partner.isLogo
                  ? "max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02] group-active:scale-[1.01]"
                  : "w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] group-active:scale-[1.01]"
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
        <h3 className="font-sans text-base md:text-lg font-light leading-snug mb-0.5 transition-colors group-hover:underline underline-offset-4 decoration-foreground/30">
          {partner.name}
        </h3>
        <p className="text-editorial-caption">{partner.role}</p>
      </Link>
    </div>
  );
};

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
  const independentArtists = independentSlugs.map((s) => getArtistBySlug(s)!);

  const palmira = partnerList.find((p) => p.slug === "palmira-furman")!;
  const minimalistix = partnerList.find((p) => p.slug === "minimalistix-gallery")!;
  const speakeasy = partnerList.find((p) => p.slug === "speakeasy-stage-studio")!;

  return (
    <SiteLayout>
      <Seo
        title="Artist Team 2026 & Cooperation Partners — Creative Project NEW"
        description="Meet the 2026 participants Anna Kazakova and Julia Shein, the independent artists Vika Imago Mortis, Jeanne Saar, Olha Yezikova, Katina Kuhl and Oleg Tokar, and the cooperation partners of Creative Project NEW in Berlin."
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            <FadeIn>
              <ArtistCard artist={anna} roleLine="Participant · 2026" />
            </FadeIn>
            <FadeIn delay={0.05}>
              <ArtistCard artist={julia} roleLine="Participant · 2026" />
            </FadeIn>
          </div>

          {/* Independent Artists · 2026 */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Independent Artists &middot; 2026</p>
            <p className="text-editorial-body text-foreground/70 max-w-2xl mb-8 md:mb-10">
              Independent artists collaborate with Creative Project NEW on exhibitions and shared
              projects while maintaining their own artistic practice and full artistic autonomy.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            {independentArtists.map((artist, i) => (
              <FadeIn key={artist.slug} delay={i * 0.05}>
                <ArtistCard artist={artist} roleLine="Independent Participant · 2026" />
              </FadeIn>
            ))}
          </div>

          {/* Partners & Collaborations */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Partners &amp; Collaborations</p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            <FadeIn>
              <PartnerCard partner={palmira} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <PartnerCard partner={minimalistix} />
            </FadeIn>
            <FadeIn delay={0.15}>
              <PartnerCard partner={speakeasy} />
            </FadeIn>
          </div>

          {/* Participation CTA */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Participation</p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
            <FadeIn>
              <CohortCTACard />
            </FadeIn>
          </div>

          {/* Cohort 2025/26 */}
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-6">Cohort 2025/26</p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-20">
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
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
