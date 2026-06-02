import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { artists, placeholderArtists2025 } from "@/lib/artistData";

interface Review {
  slug: string;
  name: string;
  paragraphs: string[];
}

const reviews: Review[] = [
  {
    slug: "anna-kazakova",
    name: "Anna Kazakova",
    paragraphs: [
      "The Creative Project NEW became much more than just a learning experience for me. It became a true turning point for my growth. At the beginning of the journey, I set a clear goal for myself: to step out of the shadows, stop hiding my work, and finally present myself as a photographer. Looking back now, I realize that I achieved this goal completely.",
      "What proved most valuable was the combination of theory and practice, as well as the supportive and safe environment where it didn't feel scary to make mistakes or try something new. Here, I learned not only how to present my work, but also how to truly listen to myself.",
      "Olga, your work is on another level. You have a unique ability to see each artist individually, to feel when support is needed, and when gentle guidance can lead in the right direction. During the preparation for the exhibition, your involvement was invaluable: you helped me organize the chaos in my mind, build a cohesive body of work, and simply believe that everything would come together. Thank you for your taste, sensitivity, and patience.",
      "My expectations for the opening were mixed with anxiety. I imagined something small and intimate. But reality exceeded them many times over. So many guests, such genuine interest, and meaningful conversations around the works. I didn't expect such a warm reception and attention to my art. The atmosphere was filled with love for art, you could feel it everywhere. A true celebration.",
      "To all creative people who are considering participating: don't hesitate for a second. Come with an open heart, set your boldest goal, and here you will be supported in achieving it. Take everything the project offers: connection, knowledge, inspiration. And trust Olga — she truly knows how to help you rediscover yourself in a new way.",
    ],
  },
  {
    slug: "mariia-zatsepina",
    name: "Mariia Zatsepina",
    paragraphs: [
      "Creative Project NEW became more than just participation in a photography exhibition for me. It was a true creative experience that helped me open up as an artist and express myself through photography with more confidence.",
      "The project had a very strong team atmosphere: we learned, supported each other, developed our ideas, and gradually came to a more conscious understanding of our own creative work. Thanks to Olga's curatorial guidance, I was able to explore my feelings more deeply, overcome my inner reservedness, and express personal states and meanings through my photographs.",
      "It was especially valuable that throughout the entire process there was constant support, both with organizational questions and with the creative work itself. This gave me a sense of confidence and helped me keep moving forward.",
      "The final stage of the project was the vernissage, where visitors did not simply look at the works, but asked deep questions about their meaning, emotions, and the creative process. For me, this became an important confirmation that sincere creative expression can truly create a response and open a dialogue.",
      "I would recommend Creative Project to anyone who wants to explore photography more deeply, learn how to speak about their work, receive curatorial support, and go through the full journey from idea to participation in a real exhibition.",
    ],
  },
  {
    slug: "yana-kaziulia",
    name: "Yana Kaziulia",
    paragraphs: [
      "One of the main goals I set for myself this year was to focus on creativity. From experience, I know that I am most productive when I am surrounded by like-minded people — people with whom I can share ideas, receive feedback, and, when needed, get a little push to keep moving forward.",
      "I already had experience organizing my own exhibition and curating exhibitions for other artists, so the main obstacle was not a lack of knowledge, experience, or ideas. Rather, it was the challenge of finding time for creativity amidst the constant flow of daily responsibilities and urgent tasks. Having a supportive community and a clear goal with a deadline made it much easier to stay motivated and dedicate time to creative work.",
      "I would like to thank all the women of Creative Project NEW for being part of this journey with me, and a special thanks to Olga for bringing us together and consistently encouraging us to take new steps toward our goals.",
    ],
  },
  {
    slug: "nadya-net",
    name: "Nadya Net",
    paragraphs: [
      "During my time in Creative Project NEW, I went through a significant journey. I already had an idea and a project, but an equally important stage was still ahead — to bring everything to its final point and prepare it for a group exhibition.",
      "I would especially like to highlight the community. It was very valuable for me to be surrounded by participants who were also moving forward in their own practices with their own questions, challenges, discoveries, and solutions. We supported each other, shared feedback, and helped one another stay focused. The feeling that everyone was following their own path, while no one was left alone, became one of the most important parts of this experience.",
      "The main result of the program for me was that I was able to bring the project to its logical completion and present it in an exhibition format. I gained a better understanding of how to work through the final stages, how to preserve the meaning of a project, and how to bring it to a point where it can enter a public space and meet the viewer. For me, this became a truly meaningful result.",
    ],
  },
  {
    slug: "oxana-grom",
    name: "Oxana Grom",
    paragraphs: [
      "Thanks to the project \u201CCity,\u201D I was able to take part in a group exhibition and its preparation. For six months, we met regularly, discussed ideas, gathered material during photo walks, and gradually refined our individual concepts.",
      "Olga accompanied us as a curator and gently guided us in developing our concepts. Together, we selected photographs and prepared for the exhibition opening.",
      "The opening itself was an important experience for me, as I was able not only to show my works, but also to present my concept. Participating in this group project gave me a better understanding of my strengths and awakened a desire to continue.",
    ],
  },
  {
    slug: "nadezhda-slavinskene",
    name: "Nadezhda Slavinskene",
    paragraphs: [
      "The most amazing part of this project for me was the guidance from the initial idea all the way to the final presentation of the work at the exhibition. At first, I could hardly believe it was possible.",
      "Olga guided and supported us at every stage. Many aspects were completely new to me — for example, preparing a photograph with a mat and frame. Usually, the process does not even reach the printing stage, but here it was: my work, framed and hanging on the wall in front of the viewers.",
      "This kind of project definitely expands your vision and helps you bring your work to a real result. I am very grateful to Olga and to all the participants. Thank you. I definitely recommend taking part.",
    ],
  },
  {
    slug: "mark-poriadkov",
    name: "Mark Poriadkov",
    paragraphs: [
      "During my work on Creative Project under your curatorial guidance, I gained very valuable experience. I learned how to write texts beautifully and present my work with confidence. It was an inspiring and useful stage for me.",
    ],
  },
  {
    slug: "olga-iavorskaia",
    name: "Olga Iavorskaia",
    paragraphs: [
      "Working on this project was a truly rewarding experience. What I appreciated most was the sense of support, open dialogue, and the genuine care given to each participant. I'm very grateful to the course and to Olga for the inspiration, guidance, and support in helping turn an idea into a finished and meaningful piece.",
    ],
  },
  {
    slug: "daria-wagner",
    name: "Daria Wagner",
    paragraphs: [
      "Taking part in Creative Project was a valuable experience for me. Olga is a very sensitive curator who knows how to gently guide and inspire.",
      "Under her guidance, we immersed ourselves in the very essence of conceptual photography: we learned not just to create aesthetically pleasing images, but to put an idea into them and tell stories through them. As a result, we were able to create truly wonderful and meaningful works that we can be proud of.",
      "I was also especially impressed by the variety of workshops organized within the project. They broaden your perspective, provide new practical skills, and give a powerful boost of creative energy.",
      "Thank you so much for this project.",
    ],
  },
];

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
                      <div className="aspect-[4/5] bg-secondary overflow-hidden max-w-[220px] md:max-w-none">
                        {portrait ? (
                          <img
                            src={portrait}
                            alt={review.name}
                            className="w-full h-full object-cover"
                            style={{ objectPosition }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-editorial-caption text-foreground/30">Portrait</span>
                          </div>
                        )}
                      </div>
                      <h2 className="font-sans text-base md:text-lg font-light leading-snug mt-4 mb-1">
                        {review.name}
                      </h2>
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