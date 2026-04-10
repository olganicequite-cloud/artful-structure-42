import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

  const stepPatterns = [
    "md:ml-[2%] md:mr-auto",
    "md:ml-auto md:mr-[5%]",
    "md:ml-[12%] md:mr-auto",
    "md:ml-auto md:mr-[2%]",
    "md:ml-[6%] md:mr-auto",
    "md:ml-auto md:mr-[12%]",
  ];
  const stepClass = stepPatterns[index % stepPatterns.length];

  return (
    <div
      ref={ref}
      className={`
        w-full md:max-w-[55%] transition-all duration-700 ease-out
        ${stepClass}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
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

/* ── Lightbox with arrows + swipe ── */
const Lightbox = ({
  images,
  startIndex,
  onClose,
}: {
  images: { src: string; alt: string }[];
  startIndex: number;
  onClose: () => void;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    startIndex,
    dragFree: false,
  });
  const [current, setCurrent] = useState(startIndex);
  const total = images.length;

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const goPrev = useCallback(() => { emblaApi?.scrollPrev(); }, [emblaApi]);
  const goNext = useCallback(() => { emblaApi?.scrollNext(); }, [emblaApi]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Left arrow */}
      {total > 1 && (
        <button
          onClick={goPrev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {total > 1 && (
        <button
          onClick={goNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      )}

      {/* Swipeable image area */}
      <div className="w-full h-full flex items-center justify-center px-12 md:px-20" ref={emblaRef}>
        <div className="flex h-full items-center">
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-none w-full h-full flex items-center justify-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="max-w-[88vw] max-h-[88vh] object-contain select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-1.5 z-[110]">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </SiteLayout>
  );
};

export default ProjectDetail;
