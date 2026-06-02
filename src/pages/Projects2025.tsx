import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import Seo from "@/components/Seo";

const Projects2025 = () => {
  return (
    <SiteLayout>
      <Seo
        title="Projects 2025 — Creative Project NEW, Berlin"
        description="Projects from the 2025 cohort of Creative Project NEW, the Berlin-based curatorial collaboration for contemporary artists."
        path="/projects-2025"
      />
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-editorial-detail mb-4">Cohort 2025</p>
            <h1 className="text-editorial-title mb-12 md:mb-16">Projects</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="py-16 md:py-24 text-center">
              <p className="text-editorial-caption">
                Projects from the 2025 cohort will be announced soon.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Projects2025;
