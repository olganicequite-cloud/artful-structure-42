import { useParams, Navigate, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { getCityProjectBySlug } from "@/lib/cityExhibitionData";

const CityProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getCityProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/exhibition" replace />;

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb
            items={[
              { label: "Exhibition", to: "/exhibition" },
              { label: project.title },
            ]}
          />

          <FadeIn>
            <div className="mb-8">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-sans text-2xl md:text-3xl font-light mb-2">
              {project.title}
            </h1>
            <Link
              to={`/artists/${project.artistSlug}`}
              className="text-editorial-detail hover:text-foreground transition-colors"
            >
              {project.artist}
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="gallery-divider my-8" />
            <div className="space-y-4 mb-14 md:mb-20">
              {project.description.map((paragraph, i) => (
                <p key={i} className="text-editorial-body leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CityProjectDetail;
