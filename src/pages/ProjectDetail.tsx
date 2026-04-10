import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { getProjectBySlug } from "@/lib/projectData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null || !project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex < project.images.length - 1)
        setLightboxIndex(lightboxIndex + 1);
      if (e.key === "ArrowLeft" && lightboxIndex > 0)
        setLightboxIndex(lightboxIndex - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, project]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <PageBreadcrumb
            items={[
              { label: "Projects", to: "/projects" },
              { label: project.title },
            ]}
          />

          {/* Title + Artist */}
          <FadeIn>
            <h1 className="font-serif text-2xl md:text-3xl font-light mb-2">
              {project.title}
            </h1>
            <Link
              to={`/artists/${project.artistSlug}`}
              className="text-editorial-detail hover:text-foreground transition-colors"
            >
              {project.artist}
            </Link>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.05}>
            <div className="gallery-divider my-8" />
            <div className="space-y-4 mb-12">
              {project.description.map((paragraph, i) => (
                <p key={i} className="text-editorial-body leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Artwork Presentation */}
          <FadeIn delay={0.1}>
            <div className="space-y-6 md:space-y-8">
              {project.images.map((img, i) => (
                <div key={i}>
                  <div
                    className="overflow-hidden cursor-pointer group"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Technical Information */}
          {project.technicalInfo.length > 0 && (
            <FadeIn delay={0.15}>
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <p className="text-editorial-detail mb-2 uppercase tracking-wider text-[11px]">
                  Technical Details
                </p>
                <div className="space-y-0.5">
                  {project.technicalInfo.map((line, i) => (
                    <p
                      key={i}
                      className="text-[13px] text-foreground/50 font-sans leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>

          <img
            src={project.images[lightboxIndex].src}
            alt={project.images[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === lightboxIndex ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </SiteLayout>
  );
};

export default ProjectDetail;
