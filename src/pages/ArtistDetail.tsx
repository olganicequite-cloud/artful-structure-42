import { useParams, Navigate, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { getArtistBySlug } from "@/lib/artistData";

const ArtistDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artist = slug ? getArtistBySlug(slug) : undefined;

  if (!artist) return <Navigate to="/artists" replace />;

  const projectAnchor = artist.slug;

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-3xl mx-auto">
          <PageBreadcrumb
            items={[
              { label: "Artist Team", to: "/artists" },
              { label: artist.name },
            ]}
          />

          {/* Artist intro */}
          <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 items-start mb-12 md:mb-16">
            <FadeIn>
              <div className="w-40 h-52 md:w-full md:h-72 bg-secondary overflow-hidden">
                {artist.portrait ? (
                  <img
                    src={artist.portrait}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-editorial-caption text-foreground/30">Portrait</span>
                  </div>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-editorial-detail mb-2">{artist.shortLine}</p>
              <h1 className="text-editorial-title mb-4">{artist.name}</h1>
              <p className="text-editorial-body">{artist.bio}</p>
            </FadeIn>
          </div>

          {/* Biography */}
          {artist.longBio && (
            <FadeIn>
              <div className="gallery-divider mb-10" />
              <p className="text-editorial-detail mb-2">Biography</p>
              <div className="mb-12 md:mb-16 space-y-4">
                {artist.longBio.split("\n\n").map((p, i) => (
                  <p key={i} className="text-editorial-body leading-relaxed">{p}</p>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Artist Statement */}
          {artist.artistStatement && (
            <FadeIn>
              <div className="gallery-divider mb-10" />
              <p className="text-editorial-detail mb-2">Artist Statement</p>
              <div className="mb-12 md:mb-16">
                <blockquote className="text-editorial-body leading-relaxed italic text-foreground/80">
                  {artist.artistStatement}
                </blockquote>
              </div>
            </FadeIn>
          )}

          {/* Project button */}
          {artist.projects.length > 0 && (
            <FadeIn>
              <div className="gallery-divider mb-10" />
              <p className="text-editorial-detail mb-3">Works</p>
              <Link
                to={`/projects#${projectAnchor}`}
                className="inline-block font-sans text-sm tracking-wider uppercase border border-foreground/20 hover:border-foreground/50 px-6 py-3 transition-colors hover:bg-foreground/5"
              >
                View Project →
              </Link>
            </FadeIn>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default ArtistDetail;
