import { useParams, Navigate, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ImageGallery from "@/components/ImageGallery";
import { getProjectBySlug } from "@/lib/projectData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb
            items={[
              { label: "Projects", to: "/projects" },
              { label: project.title },
            ]}
          />

          <FadeIn>
            {project.images.length > 0 ? (
              <div className="mb-8">
                <ImageGallery images={project.images} />
              </div>
            ) : (
              <div className="aspect-[4/5] bg-secondary overflow-hidden mb-8">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
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
            <div className="space-y-4">
              {project.description.map((paragraph, i) => (
                <p key={i} className="text-editorial-body leading-relaxed">
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

export default ProjectDetail;
