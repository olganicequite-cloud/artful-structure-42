import { Link } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import curatorPortrait from "@/assets/olga-tarabukina.jpg";
import heroBerlin from "@/assets/hero-berlin.jpg";

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

const feedbacks = [
  {
    quote: "Working on this project gave me a clearer sense of my strengths and strengthened my desire to continue developing my artistic practice.",
    author: "Oxana Grom, Cohort 2025",
    stars: 5,
  },
  {
    quote: "Presenting my film within the project and encountering the work of others made the experience deeply engaging and rewarding.",
    author: "Mark Poriadkov, Cohort 2025",
    stars: 5,
  },
  {
    quote: "Under Olga's curatorial guidance, I learned to articulate my ideas more clearly and to present my work with greater confidence.",
    author: "Participant, Cohort 2025",
    stars: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-xs ${i < count ? "text-foreground/70" : "text-foreground/15"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const HomePage = () => {
  const [downloadDisabled, setDownloadDisabled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDownload = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (downloadDisabled) {
      e.preventDefault();
      return;
    }
    // Allow the native download to proceed, then disable
    setDownloadDisabled(true);
    timerRef.current = setTimeout(() => setDownloadDisabled(false), 4000);
  }, [downloadDisabled]);

  return (
    <SiteLayout>
      {/* 1. Hero Banner */}
      <section className="relative w-full">
        <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[62vh] lg:h-[78vh] overflow-hidden">
          <img
            src={heroBerlin}
            alt="Berlin skyline at sunset — Fernsehturm and Victory Column"
            className="absolute inset-0 w-full h-full object-cover object-[50%_35%]"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Small label — bottom left */}
          <div className="absolute z-10 bottom-5 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 page-padding">
            <p className="text-xs sm:text-[13px] tracking-[0.22em] uppercase font-sans font-medium text-white/90">
              Creative Project NEW
            </p>
            <p className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-sans font-light text-white/55 mt-1">
              Based in Berlin
            </p>
          </div>

          {/* Participate button — bottom right on all breakpoints */}
          <div className="absolute z-10 bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-8 lg:right-8">
            <Link
              to="/contact?reason=Participation"
              className="px-4 py-2 sm:px-5 sm:py-2 lg:px-6 lg:py-2.5 border border-white/80 text-white/90 text-xs font-light tracking-wider uppercase hover:bg-white hover:text-black transition-colors duration-300 inline-block"
            >
              Participate
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Slogan + Project Intro */}
      <section className="section-spacing page-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-editorial-title mb-4">Creative Project NEW</h1>
            <p className="text-editorial-detail mb-8">Curatorial Collaboration</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-editorial-body mb-5">
              Creative Project NEW is a curatorial collaboration where artists develop their own projects under the guidance of a curator.
            </p>
            <p className="text-editorial-body mb-5">
              It is, first of all, a process of creating art: structured, focused, and intentional.
            </p>
            <p className="text-editorial-body mb-5">
              At the same time, it is a strong support system within a group, where artists grow together, exchange experience, and challenge each other.
            </p>
            <p className="text-editorial-body">
              Through this process, artists expand their artistic field, deepen their practice, and reach new creative horizons.
            </p>
          </FadeIn>

          {/* 3. Download Button */}
          <FadeIn delay={0.15}>
            <div className="mt-10">
              <a
                href="/Creative_Project_NEW_participant_info.pdf"
                download
                onClick={handleDownload}
                className={`inline-block px-6 py-2.5 border border-foreground text-editorial-detail transition-colors duration-300 ${
                  downloadDisabled
                    ? "opacity-40 pointer-events-none text-foreground/50 border-foreground/30"
                    : "text-foreground hover:bg-foreground hover:text-background"
                }`}
                aria-disabled={downloadDisabled}
              >
                Download
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Curator — Olga Tarabukina */}
      <section id="curator" className="page-padding pb-16 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="gallery-divider mb-10" />
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
              <p className="text-editorial-caption italic text-foreground/60 mt-2">
                Photo by Anka Zhuravleva
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-editorial-detail mb-4">Curator</p>
              <h2 className="text-editorial-subtitle mb-6">Olga Tarabukina</h2>
              <p className="text-editorial-body mb-5">
                My name is Olga Tarabukina.
                <br />I am the founder and curator of Creative Project NEW.
              </p>
              <p className="text-editorial-body mb-5">
                This project was created to support artists on their path toward growth, visibility, and professional development.
              </p>
              <p className="text-editorial-body mb-5">
                As a curator, I have extensive experience in the European art field. My background includes working as a creative and art director, filmmaker, writer, fashion designer, street artist, and painter. However, today my primary focus is on art photography.
              </p>
              <p className="text-editorial-body mb-5">
                Creative Project NEW is a space for collaboration, artistic growth, and long-term creative development.
              </p>
              <p className="text-editorial-body mb-5">
                Follow us and support the artists of Creative Project NEW and who knows, in the future, you might become a part of us, too!
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Feedbacks & Reviews */}
      <section className="page-padding pb-16 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-2">What participants say</p>
            <h2 className="text-editorial-subtitle mb-10">Feedbacks & Reviews</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {feedbacks.map((fb, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <blockquote className="border-l border-border pl-5">
                  <StarRating count={fb.stars} />
                  <p className="text-editorial-body italic mb-4">"{fb.quote}"</p>
                  <cite className="text-editorial-caption not-italic">{fb.author}</cite>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Modules */}
      <section className="page-padding pb-16 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="gallery-divider mb-10" />
            <p className="text-editorial-detail mb-2">Supporting Program</p>
            <h2 className="text-editorial-subtitle mb-10">Additional Modules</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
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
