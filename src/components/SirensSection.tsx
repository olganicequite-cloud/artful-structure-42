import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import sirensHero from "@/assets/sirens-hero.jpg";
import { sirensProjects } from "@/lib/sirensData";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Kulmerstra%C3%9Fe+20A+10783+Berlin";

const calendarUrl = `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260829T113000Z%0ADTEND:20260829T180000Z%0ASUMMARY:${encodeURIComponent(
  "SIRENS — The Call of Silence",
)}%0ALOCATION:${encodeURIComponent(
  "Speakeazy Stage & Studio, Kulmerstraße 20A, 10783 Berlin",
)}%0AEND:VEVENT%0AEND:VCALENDAR`;

const themes = [
  "Sound",
  "Silence",
  "Signal",
  "Attraction",
  "Perception",
  "Autonomy",
  "Contrast",
  "Resonance",
];

const InfoBlock = () => (
  <div className="space-y-3">
    <div>
      <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Exhibition</p>
      <p className="font-sans text-sm text-primary-foreground/90">Saturday, 29 August 2026</p>
      <p className="font-sans text-sm font-light text-primary-foreground/70">13:30 – 20:00</p>
    </div>
    <div className="pt-1">
      <p className="font-sans text-lg text-primary-foreground">SPEAKEAZY STAGE &amp; STUDIO</p>
      <p className="font-sans text-sm font-light text-primary-foreground/70">Kulmerstraße 20A, 10783 Berlin</p>
    </div>
  </div>
);

const HeroLinks = () => (
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
      href={calendarUrl}
      download="sirens-exhibition.ics"
      className="font-sans text-xs tracking-wider uppercase text-primary-foreground/60 hover:text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground/60 pb-0.5 transition-colors"
    >
      Add to Calendar
    </a>
  </div>
);

const SirensSection = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="sirens-2026"
        className="scroll-mt-24 relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col bg-foreground"
      >
        <img
          src={sirensHero}
          alt="SIRENS — The Call of Silence, long exposure of sea and sky at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 35%" }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />

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
              SIRENS
            </h1>
            <p
              className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/95"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 200 }}
            >
              The Call of Silence
            </p>

            {/* Desktop: event info inline below title */}
            <div className="hidden lg:flex flex-row items-end gap-10 mt-8">
              <InfoBlock />
              <HeroLinks />
            </div>
          </FadeIn>
        </div>

        {/* Event info — lower-left on tablet/mobile */}
        <div className="lg:hidden relative z-10 page-padding mt-auto pb-6 md:pb-10 w-full">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-10">
              <InfoBlock />
              <HeroLinks />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Description */}
      <section className="pt-8 pb-10 md:section-spacing page-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <p className="text-editorial-body leading-relaxed mb-6">
              SIRENS — The Call of Silence is a group exhibition presented by Creative Project NEW and curated by Olga Tarabukina, shown as part of Summer Acoustic Festival 2026 at Speakeazy Stage &amp; Studio in Berlin. The festival is organised by{" "}
              <Link to="/partners/palmira-furman" className="hover:text-foreground transition-colors">
                Palmira Furman
              </Link>
              .
            </p>
            <p className="text-editorial-body leading-relaxed mb-6">
              The exhibition brings together eight international artists based across Europe. Each presents an independent artistic project with its own visual language, medium and approach. Rather than illustrating a single common subject, the projects remain autonomous and are brought together through the curatorial framework of SIRENS.
            </p>
            <p className="text-editorial-body leading-relaxed mb-8">
              While the festival itself takes place in the open-air backyard, SIRENS is presented inside the building — a distinct visual space within a music-focused environment, where sound, silence, signal, attraction and visual perception become interconnected parts of the same experience.
            </p>
            <div className="mb-8">
              <p className="text-editorial-detail mb-3">Festival Context</p>
              <p className="text-editorial-body leading-relaxed mb-5">
                SIRENS is presented as part of Summer Acoustic Festival 2026, organised by{" "}
                <Link to="/partners/palmira-furman" className="hover:text-foreground transition-colors underline underline-offset-4">
                  Palmira Furman
                </Link>{" "}
                at{" "}
                <Link to="/partners/speakeasy-stage-studio" className="hover:text-foreground transition-colors underline underline-offset-4">
                  Speakeazy Stage &amp; Studio
                </Link>
                . The festival brings together acoustic live music, visual art, handmade culture and food in a shared summer environment, with a Live Rock Night as part of the programme. While the festival takes place in the open-air backyard, SIRENS is shown inside the building — a distinct visual space within the wider acoustic festival.
              </p>
              <div className="text-editorial-caption text-foreground/60 space-y-1">
                <p>Festival · Summer Acoustic Festival 2026 · 29 August 2026</p>
                <p>Programme · Acoustic live music · Visual art exhibition · Handmade market · BBQ</p>
                <p>Format · Open Air Festival with an indoor visual art exhibition</p>
                <p>
                  Open Air · Backyard of{" "}
                  <Link to="/partners/speakeasy-stage-studio" className="hover:text-foreground transition-colors">
                    Speakeazy Stage &amp; Studio
                  </Link>
                  , Kulmerstraße 20A, 10783 Berlin
                </p>
                <p>
                  Organiser ·{" "}
                  <Link to="/partners/palmira-furman" className="hover:text-foreground transition-colors">
                    Palmira Furman
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {themes.map((theme) => (
                <span key={theme} className="text-editorial-detail">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Projects */}
      <section className="page-padding pb-16 md:pb-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-10">
            <div className="gallery-divider mb-6" />
            <h2 className="text-editorial-subtitle">Featured Projects</h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12">
          {sirensProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <div>
                <Link to={`/exhibition/sirens/${project.slug}`} className="group">
                  <div className="aspect-[4/5] bg-secondary overflow-hidden mb-3">
                    <img
                      src={project.poster}
                      alt={`${project.title} — ${project.artist}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-light leading-snug mb-0.5">
                    {project.title}
                  </h3>
                </Link>
                <Link
                  to={project.artistSlug ? `/artists/${project.artistSlug}` : "/#curator"}
                  className="text-editorial-caption hover:text-foreground transition-colors"
                >
                  {project.artist}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </>
  );
};

export default SirensSection;
