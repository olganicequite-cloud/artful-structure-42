import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { cityHeroImage, cityArtworks } from "@/lib/cityExhibitionData";

const CityExhibitionSection = () => {
  return (
    <>
      {/* Divider */}
      <section className="page-padding pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="gallery-divider" />
        </div>
      </section>

      {/* CITY Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col mt-16 md:mt-24">
        <img
          src={cityHeroImage}
          alt="CITY exhibition — urban geometry and light"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/45" />

        <div className="relative z-10 page-padding pt-20 md:pt-28 lg:pt-24 w-full">
          <FadeIn>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-2 md:mb-3 text-primary-foreground/60">
              PAST EXHIBITION
            </p>
            <h2
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-[0.04em] text-primary-foreground mb-2 md:mb-4"
              style={{ fontFamily: "'Arial Black', 'Arial', sans-serif" }}
            >
              CITY
            </h2>
            <p
              className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/95"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 200 }}
            >
              Reading the Urban Script
            </p>

            {/* Desktop event info */}
            <div className="hidden lg:flex flex-row items-end gap-10 mt-8">
              <div className="space-y-3">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">VERNISSAGE</p>
                  <p className="font-sans text-sm text-primary-foreground/90">7. June 2025</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">5 p.m. – 8 p.m.</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">EXHIBITION</p>
                  <p className="font-sans text-sm text-primary-foreground/90">7.06.2025 – 2.09.2025</p>
                </div>
                <div className="pt-1">
                  <p className="font-sans text-lg text-primary-foreground">BOX66</p>
                  <p className="font-sans text-sm font-light text-primary-foreground/70">Dolziger Str. 16, 10247 Berlin</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Mobile event info */}
        <div className="lg:hidden relative z-10 page-padding mt-auto pb-6 md:pb-10 w-full">
          <FadeIn>
            <div className="space-y-3">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">VERNISSAGE</p>
                <p className="font-sans text-sm text-primary-foreground/90">7. June 2025</p>
                <p className="font-sans text-sm font-light text-primary-foreground/70">5 p.m. – 8 p.m.</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 mb-0.5">EXHIBITION</p>
                <p className="font-sans text-sm text-primary-foreground/90">7.06.2025 – 2.09.2025</p>
              </div>
              <div className="pt-1">
                <p className="font-sans text-lg text-primary-foreground">BOX66</p>
                <p className="font-sans text-sm font-light text-primary-foreground/70">Dolziger Str. 16, 10247 Berlin</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Photo Credit */}
      <section className="page-padding pb-4 md:pb-6">
        <FadeIn>
          <p className="text-editorial-caption text-muted-foreground text-right">
            CITY banner image: Photo by Oxana Grom
          </p>
        </FadeIn>
      </section>

      {/* CITY Description */}
      <section className="pt-8 pb-10 md:section-spacing page-padding">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <p className="text-editorial-body leading-relaxed mb-6">
              CITY examines the urban environment as a living, speaking presence. Seven photographers turn their attention to the architecture, rhythm, and emotional texture of city spaces — finding abstraction in concrete, poetry in geometry, and intimate dialogue in the structures that surround us.
            </p>
            <p className="text-editorial-body leading-relaxed mb-6">
              From façades and reflections to shadows and silhouettes, each artist reveals a distinct reading of urban form. The city becomes orchestra, dancer, interlocutor — a landscape that shifts between stillness and movement, between the monumental and the fleeting.
            </p>
            <p className="text-editorial-body leading-relaxed mb-8">
              Together, these works compose a visual essay on how we inhabit, perceive, and are shaped by the cities we move through.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {["Architecture", "Geometry", "Rhythm", "Abstraction", "Urban Space", "Light", "Reflection"].map((theme) => (
                <span key={theme} className="text-editorial-detail">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CITY Featured Projects */}
      <section className="page-padding pb-16 md:pb-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-10">
            <div className="gallery-divider mb-6" />
            <h2 className="text-editorial-subtitle">Featured Projects</h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-12">
          {cityArtworks.map((artwork, i) => (
            <FadeIn key={artwork.slug} delay={i * 0.05}>
              <div>
                <div className="group">
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
                </div>
                <p className="text-editorial-caption">
                  {artwork.artist}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
};

export default CityExhibitionSection;
