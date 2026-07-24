import FadeIn from "@/components/FadeIn";
import happyArtWeekHero from "@/assets/happy-art-week-hero.jpg";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Kurf%C3%BCrstenstra%C3%9Fe+33+10785+Berlin";
const infoUrl = "https://minimalistix.eu/";

const HappyArtWeekSection = () => {
  return (
    <>
      {/* Hero — mirrors STYX hero structure */}
      <section
        id="happy-art-week-2026"
        className="scroll-mt-24 relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col"
      >
        <img
          src={happyArtWeekHero}
          alt="HAPPY ART WEEK Berlin 2026 — architectural black-and-white composition"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />

        {/* Photo Credit - top right inside hero (desktop/tablet only) */}
        <div className="hidden md:block absolute z-20 top-4 right-4 md:top-6 md:right-6">
          <p className="text-xs font-sans text-primary-foreground/40">
            Photo by Olga Tarabukina
          </p>
        </div>

        {/* Title group — upper-left */}
        <div className="relative z-10 page-padding pt-24 md:pt-32 lg:pt-20 w-full">
          <FadeIn>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-2 md:mb-3 text-primary-foreground/60">
              LATEST EXHIBITION
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.04em] text-primary-foreground mb-2 md:mb-4 leading-[0.95]"
              style={{ fontFamily: "'Arial Black', 'Arial', sans-serif" }}
            >
              HAPPY ART
              <br />
              WEEK
            </h1>
            <p
              className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/95"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 200 }}
            >
              Berlin 2026
            </p>

            {/* Desktop: event info stays inline below title */}
            <div className="hidden lg:flex flex-row items-end gap-10 mt-8">
              <div className="space-y-3">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Vernissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">Friday, 24 July 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">from 7 p.m.</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Exhibition</p>
                  <p className="font-sans text-sm text-primary-foreground/90">24 July — 1 August 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">Open daily from 7 p.m.</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Finissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">Saturday, 1 August 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">from 7 p.m.</p>
                </div>
                <div className="pt-1">
                  <p className="font-sans text-lg text-primary-foreground">MINIMALISTIX POP-UP GALLERY</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">Kurfürstenstraße 33, 10785 Berlin</p>
                </div>
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
                  href={infoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-wider uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-colors"
                >
                  More Information
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Event info — lower-left on tablet/mobile */}
        <div className="lg:hidden relative z-10 page-padding mt-auto pb-6 md:pb-10 w-full">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-10">
              <div className="space-y-3">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Vernissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">Friday, 24 July 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">from 7 p.m.</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Exhibition</p>
                  <p className="font-sans text-sm text-primary-foreground/90">24 July — 1 August 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">Open daily from 7 p.m.</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Finissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">Saturday, 1 August 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">from 7 p.m.</p>
                </div>
                <div className="pt-1">
                  <p className="font-sans text-lg text-primary-foreground">MINIMALISTIX POP-UP GALLERY</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">Kurfürstenstraße 33, 10785 Berlin</p>
                </div>
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
                  href={infoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-wider uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-colors"
                >
                  More Information
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Photo Credit - mobile only, below hero */}
      <div className="md:hidden page-padding pt-4 pb-5">
        <p className="text-xs font-sans text-foreground/40">
          Photo by Olga Tarabukina
        </p>
      </div>
    </>
  );
};

export default HappyArtWeekSection;