import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { artists, placeholderArtists2025, Artist } from "@/lib/artistData";

const ArtistCard = ({ artist }: { artist: Artist }) => {
  const hasDetail = artist.cohort === "2025-26";

  const content = (
    <div className="group cursor-pointer">
      <div className="aspect-[4/5] bg-secondary overflow-hidden mb-3">
        {artist.portrait ? (
          <img
            src={artist.portrait}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-editorial-caption text-foreground/30">Portrait</span>
          </div>
        )}
      </div>
      <h3 className="font-sans text-base md:text-lg font-light leading-snug mb-0.5">
        {artist.name}
      </h3>
      <p className="text-editorial-caption">{artist.shortLine}</p>
    </div>
  );

  if (hasDetail) {
    return <Link to={`/artists/${artist.slug}`}>{content}</Link>;
  }

  return content;
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
  const cohort202526 = artists.filter((a) => a.cohort === "2025-26");

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumb items={[{ label: "Artist Team" }]} />

          <FadeIn>
            <p className="text-editorial-detail mb-4">Artist Team</p>
            <h1 className="text-editorial-title mb-12 md:mb-16">The Artists</h1>
          </FadeIn>

          {/* Cohort 2025–26 */}
          <FadeIn delay={0.05}>
            <p className="text-editorial-detail mb-6">Cohort 2025–26</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-24">
            {cohort202526.map((artist, i) => (
              <FadeIn key={artist.slug} delay={i * 0.05}>
                <ArtistCard artist={artist} />
              </FadeIn>
            ))}
            <FadeIn delay={cohort202526.length * 0.05}>
              <CohortCTACard />
            </FadeIn>
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
