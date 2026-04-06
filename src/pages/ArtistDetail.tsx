import { useParams, Navigate } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import ImageGallery from "@/components/ImageGallery";
import { getArtistBySlug } from "@/lib/artistData";

const ArtistDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artist = slug ? getArtistBySlug(slug) : undefined;

  if (!artist) return <Navigate to="/artists" replace />;

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-3xl mx-auto">
          {/* Artist intro */}
          <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 items-start mb-12 md:mb-16">
            <FadeIn>
              <div className="w-40 h-52 md:w-full md:h-72 bg-secondary overflow-hidden">
                {artist.portrait ? (
                  <img
                    src={artist.portrait}
                    alt={`${artist.name}`}
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

          {/* Projects */}
          {artist.projects.length > 0 && (
            <>
              <FadeIn>
                <div className="gallery-divider mb-10" />
                <p className="text-editorial-detail mb-2">Works</p>
                <h2 className="text-editorial-subtitle mb-10">Projects</h2>
              </FadeIn>

              <div className="space-y-16 md:space-y-20">
                {artist.projects.map((project, i) => (
                  <FadeIn key={project.title} delay={i * 0.05}>
                    <article>
                      <div className="mb-4">
                        <ImageGallery images={project.images} />
                      </div>
                      <h3 className="text-editorial-heading mb-3">{project.title}</h3>
                      <p className="text-editorial-body">{project.description}</p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default ArtistDetail;
