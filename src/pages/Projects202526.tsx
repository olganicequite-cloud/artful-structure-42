import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { projects } from "@/lib/projectData";

const Projects202526 = () => {
  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumb items={[{ label: "Projects" }]} />

          <FadeIn>
            <p className="text-editorial-detail mb-4">Cohort 2025–26</p>
            <h1 className="text-editorial-title mb-12 md:mb-16">Projects</h1>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.05}>
                <Link to={`/projects/${project.slug}`} className="group">
                  <div className="aspect-[4/5] bg-secondary overflow-hidden mb-3">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-light leading-snug mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-editorial-caption">{project.artist}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Projects202526;
