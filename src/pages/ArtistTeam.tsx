import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";

import yanaPortrait from "@/assets/yana-kaziulia.jpg";
import annaPortrait from "@/assets/anna-kazakova.jpg";
import mariiaPortrait from "@/assets/mariia-zatsepina.jpg";
import nadyaPortrait from "@/assets/nadya-net.jpg";
import ajPortrait from "@/assets/aj-jul.png";

interface ArtistEntry {
  name: string;
  bio: string;
  portrait: string;
}

const artists: ArtistEntry[] = [
  {
    name: "Yana Kaziulia",
    bio: "Belarusian art photographer based in Berlin, working across analog and digital photography. Her practice explores memory, identity, emotional presence, and perception.",
    portrait: yanaPortrait,
  },
  {
    name: "Anna Kazakova",
    bio: "Berlin-based photographer exploring urban space, nature, suspended time, light, architecture, and subtle human presence.",
    portrait: annaPortrait,
  },
  {
    name: "Mariia Zatsepina",
    bio: "Berlin-based photographer working with portraiture, nature, flowers, emotional states, and transformation.",
    portrait: mariiaPortrait,
  },
  {
    name: "Nadya Net",
    bio: "Berlin-based artist working with painting and illustration in a surreal visual language, exploring displacement, relocation, fear, identity, and emotional transformation.",
    portrait: nadyaPortrait,
  },
  {
    name: "Aj Jul",
    bio: "Berlin-based artist exploring emotional states and the relationship between the human body and surrounding space. Drawing is approached as a meditative practice.",
    portrait: ajPortrait,
  },
];

const ArtistTeam = () => {
  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-editorial-detail mb-4">Artist Team</p>
            <h1 className="text-editorial-title mb-12 md:mb-16">The Artists</h1>
          </FadeIn>

          <div className="space-y-12 md:space-y-16">
            {artists.map((artist, index) => (
              <FadeIn key={artist.name} delay={index * 0.08}>
                <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 items-start">
                  {/* Portrait */}
                  <div className="w-40 h-52 md:w-full md:h-72 bg-secondary overflow-hidden">
                    {artist.portrait ? (
                      <img
                        src={artist.portrait}
                        alt={`${artist.name} — Portrait`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-editorial-caption">Portrait</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center">
                    <h2 className="text-editorial-heading mb-3">{artist.name}</h2>
                    <p className="text-editorial-body">{artist.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ArtistTeam;
