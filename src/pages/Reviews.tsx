import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { artists, placeholderArtists2025 } from "@/lib/artistData";
import { reviews } from "@/lib/reviewData";

const portraitCropMap: Record<string, string> = {
  "olga-iavorskaia": "50% 30%",
  "daria-wagner": "50% 32%",
  "anna-kazakova-2025": "50% 40%",
  "eva-maria-shipova": "50% 33%",
  "oxana-grom": "50% 28%",
};

const allArtists = [...artists, ...placeholderArtists2025];
const getPortrait = (slug: string) => allArtists.find((a) => a.slug === slug)?.portrait;

const Reviews = () => {
  return (
    <SiteLayout>
      <Seo
        title="Feedbacks and Reviews — Creative Project NEW, Berlin"
        description="Reflections from artists who participated in Creative Project NEW on the curatorial process, community, and journey from idea to exhibition."
        path="/reviews"
      />
      <section className="section-spacing page-padding">
        <div className="max-w-3xl mx-auto">
          <PageBreadcrumb items={[{ label: "Feedbacks and Reviews" }]} />

          <FadeIn>
            <p className="text-editorial-detail mb-4">Voices</p>
            <h1 className="text-editorial-title mb-6">Feedbacks and Reviews</h1>
            <p className="text-editorial-body text-foreground/70 max-w-xl mb-16 md:mb-24">
              Reflections from the artists who have participated in Creative Project NEW — on the process, the community, and the path from an idea to an exhibition.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-20 md:gap-28">
            {reviews.map((review, i) => {
              const portrait = getPortrait(review.slug);
              const objectPosition = portraitCropMap[review.slug] || "center";
              return (
                <FadeIn key={review.slug} delay={i * 0.04}>
                  <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-4">
                      <Link to={`/artists/${review.slug}`} className="group block">
                        <div className="aspect-[4/5] bg-secondary overflow-hidden max-w-[220px] md:max-w-none">
                          {portrait ? (
                            <img
                              src={portrait}
                              alt={review.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                              style={{ objectPosition }}
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-editorial-caption text-foreground/30">Portrait</span>
                            </div>
                          )}
                        </div>
                        <h2 className="font-sans text-base md:text-lg font-light leading-snug mt-4 mb-1 group-hover:text-foreground/70 transition-colors duration-300">
                          {review.name}
                        </h2>
                      </Link>
                      <p className="text-editorial-caption text-foreground/50">Artist · Creative Project NEW</p>
                    </div>

                    <div className="md:col-span-8 md:pt-2">
                      <div className="flex flex-col gap-5 md:gap-6">
                        {review.paragraphs.map((p, idx) => (
                          <p
                            key={idx}
                            className="text-editorial-body text-foreground/80 leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Reviews;