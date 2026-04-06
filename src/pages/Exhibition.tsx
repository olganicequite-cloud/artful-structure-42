import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import styxHero from "@/assets/styx-hero.jpg";
import { featuredArtworks } from "@/lib/exhibitionData";
const Exhibition = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col">
        <img
          src={styxHero}
          alt="STYX exhibition — atmospheric dark waters"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />

        {/* Title group — upper-left */}
        <div className="relative z-10 page-padding pt-24 md:pt-32 lg:pt-40 w-full">
          <FadeIn>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-2 md:mb-3 text-primary-foreground/60">
              Exhibition
            </p>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-primary-foreground mb-2 md:mb-4"
              style={{ fontFamily: "'Arial Black', 'Arial', sans-serif" }}
            >
              STYX
            </h1>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic text-primary-foreground/95">
              Crossing Shadows Within
            </p>
            <p className="hidden lg:block font-sans text-xs tracking-[0.15em] uppercase font-light text-primary-foreground/50 mt-3">
              Transforming Darkness into Resilience
            </p>

            {/* Desktop: event info stays inline below title */}
            <div className="hidden lg:flex flex-row items-end gap-10 mt-8">
              <div className="space-y-1">
                <p className="font-sans text-sm font-light text-primary-foreground/80">26.04.2026</p>
                <p className="font-serif text-lg text-primary-foreground">VOID INK</p>
                <p className="font-sans text-sm font-light text-primary-foreground/70">Schwedter Str. 48, 10435 Berlin</p>
              </div>
              <div className="flex gap-4">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-wider uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-colors"
                >
                  Map
                </a>
                <a
                  href={generateCalendarUrl()}
                  download="styx-exhibition.ics"
                  className="font-sans text-xs tracking-wider uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-colors"
                >
                  Add to Calendar
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Event info — lower-left on tablet/mobile */}
        <div className="lg:hidden relative z-10 page-padding mt-auto pb-6 md:pb-10 w-full">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-10">
              <div className="space-y-1">
                <p className="font-sans text-sm font-light text-primary-foreground/80">26.04.2026</p>
                <p className="font-serif text-lg text-primary-foreground">VOID INK</p>
                <p className="font-sans text-sm font-light text-primary-foreground/70">Schwedter Str. 48, 10435 Berlin</p>
              </div>
              <div className="flex gap-4">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-wider uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-colors"
                >
                  Map
                </a>
                <a
                  href={generateCalendarUrl()}
                  download="styx-exhibition.ics"
                  className="font-sans text-xs tracking-wider uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-colors"
                >
                  Add to Calendar
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Breadcrumb + Description */}
      <section className="pt-8 pb-10 md:section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb items={[{ label: "Exhibition" }]} />
        </div>
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <p className="text-editorial-body leading-relaxed mb-6">
              Named after the river Styx — the mythological boundary between worlds — this exhibition reflects a passage through inner states. Just as Styx symbolized transition, six artists use photography and painting to confront and cross their own inner shadows: fear, loss, and depression.
            </p>
            <p className="text-editorial-body leading-relaxed mb-8">
              Each work embodies a metamorphosis, revealing how darkness can be transformed into strength. Through this process, vulnerability becomes resilience, and personal struggle turns into a source of growth.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {["Fear", "Loss", "Depression", "Transition", "Transformation", "Vulnerability", "Resilience", "Growth"].map((theme) => (
                <span key={theme} className="text-editorial-detail">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Exhibition Works */}
      <section className="page-padding pb-16 md:pb-24">
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-10">
            <div className="gallery-divider mb-6" />
            <h2 className="text-editorial-subtitle">Exhibition Works</h2>
          </div>
        </FadeIn>

        {exhibitionArtists.map((artist) => (
          <ExhibitionArtistBlock key={artist.name} {...artist} />
        ))}
      </section>
    </SiteLayout>
  );
};

export default Exhibition;
