import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";

interface ArtistEntry {
  name: string;
  bio: string;
}

const artists: ArtistEntry[] = [
  {
    name: "Yana Kaziulia",
    bio: "Belarusian art photographer based in Berlin, working across analog and digital photography. Her practice explores memory, identity, emotional presence, and perception.",
  },
  {
    name: "Anna Kazakova",
    bio: "Berlin-based photographer exploring urban space, nature, suspended time, light, architecture, and subtle human presence.",
  },
  {
    name: "Mariia Zatsepina",
    bio: "Berlin-based photographer working with portraiture, nature, flowers, emotional states, and transformation.",
  },
  {
    name: "Nadya Net",
    bio: "Berlin-based artist working with painting and illustration in a surreal visual language, exploring displacement, relocation, fear, identity, and emotional transformation.",
  },
  {
    name: "Aj Jul",
    bio: "Berlin-based artist exploring emotional states and the relationship between the human body and surrounding space. Drawing is approached as a meditative practice.",
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
                  {/* Portrait placeholder */}
                  <div className="w-40 h-52 md:w-full md:h-72 bg-secondary flex items-center justify-center">
                    <span className="text-editorial-caption text-center px-4">Portrait</span>
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
