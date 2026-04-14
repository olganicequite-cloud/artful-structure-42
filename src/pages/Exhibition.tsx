import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import styxHero from "@/assets/styx-hero.jpg";
import { featuredArtworks } from "@/lib/exhibitionData";
import CityExhibitionSection from "@/components/CityExhibitionSection";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Schwedter+Str.+48+10435+Berlin";

const generateCalendarUrl = () => {
  const event = {
    title: "STYX: Crossing Darkness Within",
    date: "20260426",
    location: "VOID INK, Schwedter Str. 48, 10435 Berlin",
  };
  return `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:${event.date}T180000Z%0ADTEND:${event.date}T220000Z%0ASUMMARY:${encodeURIComponent(event.title)}%0ALOCATION:${encodeURIComponent(event.location)}%0AEND:VEVENT%0AEND:VCALENDAR`;
};

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
        <div className="relative z-10 page-padding pt-24 md:pt-32 lg:pt-20 w-full">
          <FadeIn>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-2 md:mb-3 text-primary-foreground/60">
              Exhibition
            </p>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-[0.04em] text-primary-foreground mb-2 md:mb-4"
              style={{ fontFamily: "'Arial Black', 'Arial', sans-serif" }}
            >
              STYX
            </h1>
            <p
              className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/95"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 200 }}
            >
              Crossing Darkness Within
            </p>

            {/* Desktop: event info stays inline below title */}
            <div className="hidden lg:flex flex-row items-end gap-10 mt-8">
              <div className="space-y-3">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Vernissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">26. April 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">3 p.m. – 10 p.m.</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Exhibition</p>
                  <p className="font-sans text-sm text-primary-foreground/90">26.04.2026 – 31.05.2026</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Finissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">31. Mai 2026</p>
                </div>
                <div className="pt-1">
                  <p className="font-sans text-lg text-primary-foreground">VOID INK</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">Schwedter Str. 48, 10435 Berlin</p>
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
              <div className="space-y-3">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Vernissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">26. April 2026</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">3 p.m. – 10 p.m.</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Exhibition</p>
                  <p className="font-sans text-sm text-primary-foreground/90">26.04.2026 – 31.05.2026</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">Finissage</p>
                  <p className="font-sans text-sm text-primary-foreground/90">31. Mai 2026</p>
                </div>
                <div className="pt-1">
                  <p className="font-sans text-lg text-primary-foreground">VOID INK</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">Schwedter Str. 48, 10435 Berlin</p>
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
              Named after the river Styx — the mythological boundary between worlds — this exhibition explores moments of transition. Through photography, painting, and mixed media, six artists reflect on personal experiences of fear, loss, presence, and change.
            </p>
            <p className="text-editorial-body leading-relaxed mb-6">
              Each work approaches transformation from a different perspective: from learning to exist within uncertainty, to confronting inner states, to observing natural cycles, where each state gives way to another, emphasizing the continuity and inevitability of transformation.
            </p>
            <p className="text-editorial-body leading-relaxed mb-8">
              Together, the works present a series of crossings — from darkness toward clarity, from vulnerability toward strength — where change becomes a necessary condition for growth.
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

      {/* Featured Projects */}
      <section className="page-padding pb-16 md:pb-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-10">
            <div className="gallery-divider mb-6" />
            <h2 className="text-editorial-subtitle">Featured Projects</h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12">
          {featuredArtworks.map((artwork, i) => (
            <FadeIn key={artwork.slug} delay={i * 0.05}>
              <div>
                <Link to={`/exhibition/${artwork.slug}`} className="group">
                  <div className="aspect-[4/5] bg-secondary overflow-hidden mb-3">
                    <img
                      src={artwork.thumbnail}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-light leading-snug mb-0.5">
                    {artwork.title}
                  </h3>
                </Link>
                <Link
                  to={`/artists/${artwork.artistSlug}`}
                  className="text-editorial-caption hover:text-foreground transition-colors"
                >
                  {artwork.artist}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Past Exhibition: CITY */}
      <CityExhibitionSection />
    </SiteLayout>
  );
};

export default Exhibition;
