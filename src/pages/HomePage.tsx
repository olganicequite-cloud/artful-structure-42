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

const feedbacks = [
  {
    quote: "The process changed how I see my own practice — structured guidance without losing creative freedom.",
    author: "Participant, Cohort 2025",
  },
  {
    quote: "A rare space where artists genuinely support each other while being challenged to grow.",
    author: "Participant, Cohort 2025",
  },
  {
    quote: "I found clarity in my artistic direction that I had been searching for years.",
    author: "Participant, Cohort 2025–26",
  },
];

const HomePage = () => {
  return (
    <SiteLayout>
      {/* 1. Hero Banner */}
      <section className="relative w-full">
        <div className="w-full aspect-[21/9] md:aspect-[21/7] bg-secondary flex items-center justify-center">
          <p className="text-editorial-caption">Banner Image</p>
        </div>
        <div className="absolute bottom-0 right-0 p-5 md:p-8">
          <button className="px-6 py-2.5 border border-foreground text-foreground text-editorial-detail hover:bg-foreground hover:text-background transition-colors duration-300">
            Participate
          </button>
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
              <button className="px-6 py-2.5 border border-foreground text-foreground text-editorial-detail hover:bg-foreground hover:text-background transition-colors duration-300">
                Download
              </button>
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
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-editorial-detail mb-4">Curator</p>
              <h2 className="text-editorial-subtitle mb-6">Olga Tarabukina</h2>
              <p className="text-editorial-body mb-5">
                Creative Project NEW is a curatorial collaboration where artists develop their own projects under the guidance of a curator.
              </p>
              <p className="text-editorial-body mb-5">
                It is, first of all, a process of creating art: structured, focused, and intentional.
              </p>
              <p className="text-editorial-body">
                Through this process, artists expand their artistic field, deepen their practice, and reach new creative horizons.
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
            <p className="text-editorial-detail mb-2">Program Structure</p>
            <h2 className="text-editorial-subtitle mb-10">Modules</h2>
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
