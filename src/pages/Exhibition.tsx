import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import ImageGallery from "@/components/ImageGallery";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import styxHero from "@/assets/styx-hero.jpg";
import ajWork1 from "@/assets/aj-jul-work-1.jpg";
import ajWork2 from "@/assets/aj-jul-work-2.jpg";
import mariiaWork1 from "@/assets/mariia-flowers-1.jpg";
import mariiaWork2 from "@/assets/mariia-flowers-2.jpg";
import mariiaWork3 from "@/assets/mariia-flowers-3.jpg";
import nadyaWork1 from "@/assets/nadya-fearhere-1.jpg";
import yanaWork1 from "@/assets/yana-work-1.jpg";
import yanaWork2 from "@/assets/yana-work-2.jpg";
import yanaWork3 from "@/assets/yana-work-3.jpg";
import yanaWork4 from "@/assets/yana-work-4.jpg";
import yanaWork5 from "@/assets/yana-work-5.jpg";
import annaWork1 from "@/assets/anna-work-1.jpg";
import annaWork2 from "@/assets/anna-work-2.jpg";
import annaWork3 from "@/assets/anna-work-3.jpg";
import annaWork4 from "@/assets/anna-work-4.jpg";
import annaWork5 from "@/assets/anna-work-5.jpg";

const generateCalendarUrl = () => {
  const event = {
    title: "STYX: Crossing Shadows Within",
    date: "20260426",
    location: "VOID INK, Schwedter Str. 48, 10435 Berlin",
  };
  return `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:${event.date}T180000Z%0ADTEND:${event.date}T220000Z%0ASUMMARY:${encodeURIComponent(event.title)}%0ALOCATION:${encodeURIComponent(event.location)}%0AEND:VEVENT%0AEND:VCALENDAR`;
};

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Schwedter+Str.+48+10435+Berlin";

interface ExhibitionArtistProps {
  name: string;
  works: { src: string; alt: string }[];
  technicalDetails: string[];
}

const ExhibitionArtistBlock = ({ name, works, technicalDetails }: ExhibitionArtistProps) => (
  <FadeIn className="py-8 md:py-12">
    <div className="max-w-2xl mx-auto">
      <h3 className="text-editorial-heading mb-4">{name}</h3>
      <div className="mb-4">
        <ImageGallery images={works} />
      </div>
      <div className="space-y-1">
        {technicalDetails.map((detail, i) => (
          <p key={i} className="text-editorial-caption">{detail}</p>
        ))}
      </div>
    </div>
  </FadeIn>
);

const exhibitionArtists: ExhibitionArtistProps[] = [
  {
    name: "Yana Kaziulia",
    works: [
      { src: yanaWork1, alt: "Yana Kaziulia — Exhibition work 1" },
      { src: yanaWork2, alt: "Yana Kaziulia — Exhibition work 2" },
      { src: yanaWork3, alt: "Yana Kaziulia — Exhibition work 3" },
      { src: yanaWork4, alt: "Yana Kaziulia — Exhibition work 4" },
      { src: yanaWork5, alt: "Yana Kaziulia — Exhibition work 5" },
    ],
    technicalDetails: [
      "5 frames, 52 × 52 cm",
      "4 photographs, 40 × 40 cm",
      "1 photograph, 40 × 30 cm",
      "9 polaroids, 8.5 × 7 cm",
    ],
  },
  {
    name: "Anna Kazakova",
    works: [
      { src: annaWork1, alt: "Anna Kazakova — Exhibition work 1" },
      { src: annaWork2, alt: "Anna Kazakova — Exhibition work 2" },
      { src: annaWork3, alt: "Anna Kazakova — Exhibition work 3" },
      { src: annaWork4, alt: "Anna Kazakova — Exhibition work 4" },
      { src: annaWork5, alt: "Anna Kazakova — Exhibition work 5" },
    ],
    technicalDetails: [
      "2 vertical works, 30 × 45 cm",
      "3 horizontal works, 45 × 30 cm",
      "Print on glass",
    ],
  },
  {
    name: "Nadya Net",
    works: [
      { src: nadyaWork1, alt: "Nadya Net — Exhibition work" },
    ],
    technicalDetails: [
      "Destination Ararat — 100 × 120 cm",
      "In Suspension — 100 × 120 cm",
      "Followed — 140 × 120 cm, diptych",
      "Already Inside — 60 × 60 cm, triptych",
    ],
  },
  {
    name: "Mariia Zatsepina",
    works: [
      { src: mariiaWork1, alt: "Mariia Zatsepina — Exhibition work 1" },
      { src: mariiaWork2, alt: "Mariia Zatsepina — Exhibition work 2" },
      { src: mariiaWork3, alt: "Mariia Zatsepina — Exhibition work 3" },
    ],
    technicalDetails: [
      "3 photographs on canvas — 60 × 90 cm",
    ],
  },
  {
    name: "Aj Jul",
    works: [
      { src: ajWork1, alt: "Aj Jul — Exhibition work 1" },
      { src: ajWork2, alt: "Aj Jul — Exhibition work 2" },
    ],
    technicalDetails: [
      "2 small works, approximately A4 each",
    ],
  },
];

const Exhibition = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] md:min-h-[90vh] flex items-end">
        <img
          src={styxHero}
          alt="STYX exhibition — atmospheric dark waters"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 page-padding pb-6 md:pb-16 w-full">
          <FadeIn>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-3 text-primary-foreground/60">
              Exhibition
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-primary-foreground mb-3">
              STYX
            </h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground/90 mb-1">
              Crossing Shadows Within
            </p>
            <p className="font-sans text-sm md:text-base font-light text-primary-foreground/60 mb-8">
              Transforming Darkness into Resilience
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
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
      <section className="section-spacing page-padding">
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
