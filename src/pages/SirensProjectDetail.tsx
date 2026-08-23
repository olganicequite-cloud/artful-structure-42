import { useParams, Navigate, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { sirensProjects } from "@/lib/sirensData";

const SirensProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = sirensProjects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/exhibition" replace />;

  const artistLink = project.artistSlug ? `/artists/${project.artistSlug}` : "/#curator";

  return (
    <SiteLayout>
      <Seo
        title={`${project.title} — ${project.artist} | SIRENS Exhibition`}
        description={`${project.title} by ${project.artist}. Featured project in SIRENS — The Call of Silence, Berlin, 29 August 2026.`}
        path={`/exhibition/sirens/${project.slug}`}
        type="article"
      />
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb
            items={[
              { label: "Exhibition", to: "/exhibition" },
              { label: project.title },
            ]}
          />

          <FadeIn>
            <div className="aspect-[4/5] bg-secondary overflow-hidden mb-8">
              {project.poster ? (
                <img
                  src={project.poster}
                  alt={`${project.title} — ${project.artist}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-sans text-2xl md:text-3xl font-light mb-2">
              {project.title}
            </h1>
            <Link
              to={artistLink}
              className="text-editorial-detail hover:text-foreground transition-colors"
            >
              {project.artist}
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="gallery-divider mb-8" />
            <div className="space-y-4">
              <p className="text-editorial-body leading-relaxed">{project.statement}</p>
              <p className="text-editorial-caption text-foreground/50">{project.technicalNote}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default SirensProjectDetail;
