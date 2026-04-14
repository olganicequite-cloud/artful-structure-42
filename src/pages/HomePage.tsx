import { Link } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import curatorPortrait from "@/assets/olga-tarabukina.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

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
    quote: "The process helped me understand my strengths more clearly and gave me confidence to continue developing my work.",
    author: "Oxana Grom, Cohort 2025",
    stars: 5,
  },
  {
    quote: "The process taught me how to present my work more clearly and speak about it with greater confidence.",
    author: "Mark Poriadkov, Cohort 2025",
    stars: 5,
  },
  {
    quote: "The process gave me the chance to share my film, receive thoughtful feedback, and connect with the distinct practices of other participants.",
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
      <section className="w-full bg-white">
        <div className="relative w-full">
          <img
            src={heroBanner}
            alt="Creative Project NEW — banner featuring artwork from participating artists"
            className="w-full h-auto block lg:object-contain object-cover object-center lg:max-h-[70vh]"
            width={1440}
            height={810}
          />
          {/* Desktop: button overlaid on banner */}
          <div className="hidden lg:block absolute bottom-0 right-0 p-8">
            <Link
              to="/contact?reason=Participation"
              className="px-6 py-2.5 border border-foreground text-foreground text-editorial-detail hover:bg-foreground hover:text-background transition-colors duration-300 inline-block"
            >
              Participate
            </Link>
          </div>
        </div>
        {/* Tablet + Mobile: button below banner */}
        <div className="lg:hidden flex justify-end px-4 pt-1 pb-3 sm:pt-4 md:pt-6 md:pr-16">
          <Link
            to="/contact?reason=Participation"
            className="px-4 py-2 border border-foreground text-foreground text-xs hover:bg-foreground hover:text-background transition-colors duration-300 inline-block"
          >
            Participate
          </Link>
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
      <section className="page-padding pb-16 md:pb-28">
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
