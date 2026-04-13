import { useParams, Navigate, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { featuredArtworks } from "@/lib/exhibitionData";

const ArtworkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artwork = featuredArtworks.find((a) => a.slug === slug);

  if (!artwork) return <Navigate to="/exhibition" replace />;

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb
            items={[
              { label: "Exhibition", to: "/exhibition" },
              { label: artwork.title },
            ]}
          />

          <FadeIn>
            <div className="aspect-[4/5] bg-secondary overflow-hidden mb-8">
              <img
                src={artwork.thumbnail}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-sans text-2xl md:text-3xl font-light mb-2">
              {artwork.title}
            </h1>
            <p className="text-editorial-detail mb-8">{artwork.artist}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="gallery-divider mb-8" />
            <div className="space-y-4">
              <p className="text-editorial-body leading-relaxed">
                This work explores themes of inner transformation, drawing on personal experience and emotional depth. The artist examines the boundary between vulnerability and strength, creating a visual language that speaks to the tension between concealment and revelation.
              </p>
              <p className="text-editorial-body leading-relaxed">
                Through careful attention to material, light, and composition, the piece invites the viewer into a space of contemplation — where darkness is not avoided but confronted, and where the act of looking becomes an act of understanding.
              </p>
              <p className="text-editorial-caption mt-6">
                {artwork.technicalNote}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ArtworkDetail;
