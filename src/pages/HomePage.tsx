import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import curatorPortrait from "@/assets/olga-tarabukina.jpg";

const modules = [
  "15 Minutes Creativity",
  "Photowalk",
  "Masterclass",
  "Workshop",
  "Practice",
  "Artists Meets",
  "Exhibitions",
  "Support",
];

const HomePage = () => {
  return (
    <SiteLayout>
      {/* Curator Section */}
      <section className="section-spacing page-padding">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-editorial-detail mb-6">Curatorial Project</p>
            <h1 className="text-editorial-title mb-8">Creative Project NEW</h1>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <FadeIn delay={0.1}>
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={curatorPortrait}
                  alt="Olga Tarabukina — Curator"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <p className="text-editorial-heading mt-4">Olga Tarabukina</p>
              <p className="text-editorial-caption mt-1">Curator</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-editorial-body mb-6">
                Creative Project NEW is a curatorial collaboration where artists develop their own projects under the guidance of a curator.
              </p>
              <p className="text-editorial-body mb-6">
                It is, first of all, a process of creating art: structured, focused, and intentional.
              </p>
              <p className="text-editorial-body mb-6">
                At the same time, it is a strong support system within a group, where artists grow together, exchange experience, and challenge each other.
              </p>
              <p className="text-editorial-body">
                Through this process, artists expand their artistic field, deepen their practice, and reach new creative horizons.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cohorts */}
      <section className="page-padding pb-12 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="gallery-divider mb-8" />
            <h2 className="text-editorial-subtitle mb-8">Cohorts</h2>
            <div className="flex gap-6">
              <Link
                to="/projects-2025"
                className="text-editorial-heading hover:opacity-60 transition-opacity"
              >
                2025
              </Link>
              <Link
                to="/projects-2025-26"
                className="text-editorial-heading hover:opacity-60 transition-opacity"
              >
                2025–26
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Modules */}
      <section className="page-padding pb-16 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="gallery-divider mb-8" />
            <h2 className="text-editorial-subtitle mb-8">Modules</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
              {modules.map((mod) => (
                <p key={mod} className="text-editorial-body">{mod}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default HomePage;
