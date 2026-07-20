import FadeIn from "@/components/FadeIn";
import heroAsset from "@/assets/happy-art-week-hero.jpg.asset.json";
import posterAsset from "@/assets/happy-art-week-poster.png.asset.json";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Kurf%C3%BCrstenstra%C3%9Fe+33+10785+Berlin";

const HappyArtWeekSection = () => {
  return (
    <section id="happy-art-week-2026" className="scroll-mt-24">
      {/* Hero */}
      <div className="relative w-full min-h-[85svh] md:min-h-[90svh] flex flex-col">
        <img
          src={heroAsset.url}
          alt="HAPPY ART WEEK Berlin 2026 — architectural black-and-white composition"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/55" />

        <div className="relative z-10 page-padding pt-24 md:pt-32 lg:pt-20 w-full">
          <FadeIn>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-2 md:mb-3 text-primary-foreground/60">
              Latest Exhibition
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.04em] text-primary-foreground mb-2 md:mb-4 leading-[0.95]"
              style={{ fontFamily: "'Arial Black', 'Arial', sans-serif" }}
            >
              HAPPY ART WEEK
              <br />
              BERLIN 2026
            </h1>

            <div className="hidden lg:block mt-8 space-y-1">
              <p className="font-sans text-sm text-primary-foreground/90 tracking-wider uppercase">
                24 July — 1 August 2026
              </p>
              <p className="font-sans text-sm font-light text-primary-foreground/80 tracking-wider uppercase">
                Minimalistix Pop-Up Gallery · Kurfürstenstraße 33, Berlin
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Mobile/tablet key info */}
        <div className="lg:hidden relative z-10 page-padding mt-auto pb-6 md:pb-10 w-full">
          <FadeIn>
            <div className="space-y-1">
              <p className="font-sans text-sm text-primary-foreground/90 tracking-wider uppercase">
                24 July — 1 August 2026
              </p>
              <p className="font-sans text-sm font-light text-primary-foreground/80 tracking-wider uppercase">
                Minimalistix Pop-Up Gallery
              </p>
              <p className="font-sans text-sm font-light text-primary-foreground/70">
                Kurfürstenstraße 33, 10785 Berlin
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Information + Poster */}
      <div className="page-padding pt-12 md:pt-20 pb-10 md:pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: information */}
          <FadeIn>
            <div className="space-y-6">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-foreground/50 mb-1">
                  Vernissage
                </p>
                <p className="font-sans text-sm text-foreground/90">Friday, 24 July 2026</p>
                <p className="font-sans text-sm font-light text-foreground/70">from 7 p.m.</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-foreground/50 mb-1">
                  Finissage
                </p>
                <p className="font-sans text-sm text-foreground/90">Saturday, 1 August 2026</p>
                <p className="font-sans text-sm font-light text-foreground/70">from 7 p.m.</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-foreground/50 mb-1">
                  Open Daily
                </p>
                <p className="font-sans text-sm text-foreground/90">
                  from 7 p.m. until open end
                </p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-foreground/50 mb-1">
                  Organized by
                </p>
                <p className="font-sans text-sm text-foreground/90">Minimalistix.eu</p>
                <p className="font-sans text-sm font-light text-foreground/70">Cengiz Tatar</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-foreground/50 mb-1">
                  Location
                </p>
                <p className="font-sans text-sm text-foreground/90">Minimalistix Pop-Up Gallery</p>
                <p className="font-sans text-sm font-light text-foreground/70">
                  Kurfürstenstraße 33, 10785 Berlin
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://minimalistix.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-wider uppercase text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground/60 pb-0.5 transition-colors min-h-[44px] inline-flex items-center"
                >
                  More Information
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-wider uppercase text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground/60 pb-0.5 transition-colors min-h-[44px] inline-flex items-center"
                >
                  Map
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: poster */}
          <FadeIn delay={0.1}>
            <div className="w-full flex md:justify-end">
              <img
                src={posterAsset.url}
                alt="HAPPY ART WEEK Berlin 2026 exhibition poster"
                className="w-full h-auto object-contain max-w-full md:max-w-[480px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Divider */}
      <div className="page-padding pt-4 md:pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="gallery-divider" />
        </div>
      </div>
    </section>
  );
};

export default HappyArtWeekSection;