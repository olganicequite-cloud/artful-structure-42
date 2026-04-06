import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import ImageGallery from "@/components/ImageGallery";
import artwork1 from "@/assets/placeholder-artwork-1.jpg";
import artwork2 from "@/assets/placeholder-artwork-2.jpg";
import artwork3 from "@/assets/placeholder-artwork-3.jpg";
import artwork4 from "@/assets/placeholder-artwork-4.jpg";
import artwork5 from "@/assets/placeholder-artwork-5.jpg";
import artwork6 from "@/assets/placeholder-artwork-6.jpg";
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

interface ProjectEntry {
  artist: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

const projects: ProjectEntry[] = [
  {
    artist: "Aj Jul",
    title: "Dynamics of the Seasons",
    description: "A two-part work about Winter & Spring and Summer & Autumn. The seasons are presented as relational forces that exist through the negation of one another. Themes: transition, cyclic tension, relationship, transformation.",
    images: [
      { src: ajWork1, alt: "Aj Jul — Dynamics of the Seasons 1" },
      { src: ajWork2, alt: "Aj Jul — Dynamics of the Seasons 2" },
    ],
  },
  {
    artist: "Anna Kazakova",
    title: "Invisible Weight — A Diary of a Shadow",
    description: "A project about depression, not as a clinical diagnosis but as a phenomenon of inner space. A white landscape becomes a model of silence, disorientation, deceleration, and invisible weight.",
    images: [
      { src: annaWork1, alt: "Anna Kazakova — Invisible Weight 1" },
      { src: annaWork2, alt: "Anna Kazakova — Invisible Weight 2" },
      { src: annaWork3, alt: "Anna Kazakova — Invisible Weight 3" },
      { src: annaWork4, alt: "Anna Kazakova — Invisible Weight 4" },
    ],
  },
  {
    artist: "Mariia Zatsepina",
    title: "Flowers",
    description: "A personal project about dried flowers, transition, grief, memory, fragility, and transformation. The flowers are not symbols of death, but of continuation, presence, and another state of being.",
    images: [
      { src: mariiaWork1, alt: "Mariia Zatsepina — Flowers 1" },
      { src: mariiaWork2, alt: "Mariia Zatsepina — Flowers 2" },
      { src: mariiaWork3, alt: "Mariia Zatsepina — Flowers 3" },
    ],
  },
  {
    artist: "Yana Kaziulia",
    title: "Liberation of Colors",
    description: "A project about red and green as traumatic emotional triggers linked to violence, ideology, and imposed identity. The work asks whether these colors can be reclaimed and transformed into something new.",
    images: [
      { src: yanaWork1, alt: "Yana Kaziulia — Liberation of Colors 1" },
      { src: yanaWork2, alt: "Yana Kaziulia — Liberation of Colors 2" },
      { src: yanaWork3, alt: "Yana Kaziulia — Liberation of Colors 3" },
      { src: yanaWork4, alt: "Yana Kaziulia — Liberation of Colors 4" },
      { src: yanaWork5, alt: "Yana Kaziulia — Liberation of Colors 5" },
    ],
  },
  // TODO: Add "FLOW" project for Yana Kaziulia here later
  {
    artist: "Nadya Net",
    title: "FEAR HERE",
    description: "A mixed-media project about forced migration as an ongoing state without stable belonging. Fear appears as a shifting companion within urban space. The project explores adaptation through coexistence rather than overcoming.",
    images: [
      { src: nadyaWork1, alt: "Nadya Net — FEAR HERE" },
    ],
  },
];

const Projects202526 = () => {
  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-editorial-detail mb-4">Cohort 2025–26</p>
            <h1 className="text-editorial-title mb-12 md:mb-16">Projects</h1>
          </FadeIn>

          <div className="space-y-16 md:space-y-20">
            {projects.map((project, index) => (
              <FadeIn key={`${project.artist}-${project.title}`} delay={index * 0.05}>
                <article>
                  <div className="mb-4">
                    <ImageGallery images={project.images} />
                  </div>
                  <p className="text-editorial-detail mb-2">{project.artist}</p>
                  <h2 className="text-editorial-heading mb-3">{project.title}</h2>
                  <p className="text-editorial-body">{project.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Projects202526;
