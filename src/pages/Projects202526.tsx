import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import ImageGallery from "@/components/ImageGallery";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { artists } from "@/lib/artistData";

const Projects202526 = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [hash]);

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb items={[{ label: "Projects" }]} />

          <FadeIn>
            <p className="text-editorial-detail mb-4">Cohort 2025–26</p>
            <h1 className="text-editorial-title mb-12 md:mb-16">Projects</h1>
          </FadeIn>

          <div className="space-y-16 md:space-y-20">
            {artists
              .filter((a) => a.cohort === "2025-26" && a.projects.length > 0)
              .map((artist, index) =>
                artist.projects.map((project) => (
                  <FadeIn key={`${artist.slug}-${project.title}`} delay={index * 0.05}>
                    <article id={artist.slug} className="scroll-mt-24">
                      <div className="mb-4">
                        <ImageGallery images={project.images} />
                      </div>
                      <p className="text-editorial-detail mb-2">{artist.name}</p>
                      <h2 className="text-editorial-heading mb-3">{project.title}</h2>
                      <p className="text-editorial-body">{project.description}</p>
                    </article>
                  </FadeIn>
                ))
              )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Projects202526;
