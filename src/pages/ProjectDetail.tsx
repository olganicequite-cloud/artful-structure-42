import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { getProjectBySlug, type ProjectImage } from "@/lib/projectData";

/** Subtle scroll-reveal for each artwork block on desktop */
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const ArtworkBlock = ({
  image,
  artist,
  index,
  onOpen,
}: {
  image: ProjectImage;
  artist: string;
  index: number;
  onOpen: () => void;
}) => {
  const { ref, visible } = useScrollReveal();

  // Desktop stepped offset pattern: alternate left/right with subtle indentation
  const stepPatterns = [
    "md:ml-0 md:mr-auto",        // left
    "md:ml-auto md:mr-0",        // right
    "md:ml-[8%] md:mr-auto",     // slightly indented left
    "md:ml-auto md:mr-[8%]",     // slightly indented right
    "md:ml-[4%] md:mr-auto",     // barely indented left
  ];
  const stepClass = stepPatterns[index % stepPatterns.length];

  return (
    <div
      ref={ref}
      className={`
        w-full md:max-w-[72%] transition-all duration-700 ease-out
        ${stepClass}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Image */}
      <div
        className="overflow-hidden cursor-pointer group"
        onClick={onOpen}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
          loading="lazy"
        />
      </div>

      {/* Per-image technical caption */}
      <div className="mt-2.5 mb-0 space-y-0">
        <p className="text-[12px] font-sans text-foreground/40 leading-snug">
          {artist}
        </p>
        <p className="text-[12px] font-sans text-foreground/60 leading-snug italic">
          {image.caption.title}
        </p>
        <p className="text-[11px] font-sans text-foreground/35 leading-snug">
          {image.caption.medium} — {image.caption.dimensions}
        </p>
        {image.caption.note && (
          <p className="text-[11px] font-sans text-foreground/30 leading-snug">
            {image.caption.note}
          </p>
        )}
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
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
            <div className="space-y-4 mb-14 md:mb-20">
              {project.description.map((paragraph, i) => (
                <p key={i} className="text-editorial-body leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Artwork Presentation — wider container for stepped desktop layout */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 md:space-y-16">
            {project.images.map((img, i) => (
              <ArtworkBlock
                key={i}
                image={img}
                artist={project.artist}
                index={i}
                onOpen={() => setLightboxIndex(i)}
              />
            ))}
          </div>
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
