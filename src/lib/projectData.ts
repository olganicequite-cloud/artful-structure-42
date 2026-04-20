import projectsThumbAnna from "@/assets/projects-thumb-anna.jpg";
import projectsThumbAj from "@/assets/projects-thumb-aj.jpg";
import projectsThumbMariia from "@/assets/projects-thumb-mariia.jpg";
import projectsThumbNadya from "@/assets/projects-thumb-nadya.jpg";
import projectsThumbYana from "@/assets/projects-thumb-yana.jpg";
import projectsThumbYanaFlow from "@/assets/projects-thumb-yana-flow.jpg";

import ajWork1 from "@/assets/aj-jul-work-1.jpg";
import ajWork2 from "@/assets/aj-jul-work-2.jpg";
import annaWork1 from "@/assets/anna-work-1.jpg";
import annaWork2 from "@/assets/anna-work-2.jpg";
import annaWork3 from "@/assets/anna-work-3.jpg";
import annaWork4 from "@/assets/anna-work-4.jpg";
import annaWork5 from "@/assets/anna-work-5.jpg";
import mariiaWork1 from "@/assets/mariia-flowers-1.jpg";
import mariiaWork2 from "@/assets/mariia-flowers-2.jpg";
import mariiaWork3 from "@/assets/mariia-flowers-3.jpg";
import nadyaWork1 from "@/assets/nadya-fearhere-1.jpg";
import nadyaWork2 from "@/assets/fear-here-ii.jpg";
import nadyaWork3 from "@/assets/fear-here-iii.jpg";
import nadyaWork4 from "@/assets/fear-here-iv.jpg";
import nadyaWork5 from "@/assets/fear-here-v.jpg";
import nadyaWork6 from "@/assets/fear-here-vi.jpg";
import yanaWork1 from "@/assets/yana-work-1.jpg";
import yanaWork2 from "@/assets/yana-work-2.jpg";
import yanaFlow1 from "@/assets/yana-flow-1.jpg";
import yanaFlow2 from "@/assets/yana-flow-2.jpg";
import yanaFlow3 from "@/assets/yana-flow-3.jpg";
import yanaFlow4 from "@/assets/yana-flow-4.jpg";
import yanaFlow5 from "@/assets/yana-flow-5.jpg";
import yanaFlow6 from "@/assets/yana-flow-6.jpg";
import yanaWork3 from "@/assets/yana-work-3.jpg";
import yanaWork4 from "@/assets/yana-work-4.jpg";
import yanaWork5 from "@/assets/yana-work-5.jpg";

export interface ProjectImage {
  src: string;
  alt: string;
  caption: {
    title: string;
    medium: string;
    dimensions: string;
    note?: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  artist: string;
  artistSlug: string;
  thumbnail: string;
  description: string[];
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "invisible-weight",
    title: "Invisible Weight — A Diary of a Shadow",
    artist: "Anna Kazakova",
    artistSlug: "anna-kazakova",
    thumbnail: projectsThumbAnna,
    description: [
      "This project approaches depression not as a clinical diagnosis, but as a phenomenon of inner space. A white landscape becomes a visual model of this condition — sterile, endless, and devoid of orientation.",
      "The human figure is placed within an environment where familiar structures — sleep, rest, movement — are displaced from their usual context. A bed stands in the open air. A staircase leads nowhere. The space offers no direction.",
      "Snow performs a dual function: it both conceals and suppresses. It protects from external noise, yet amplifies the internal silence.",
      "The project avoids visual dramatization. Instead, it invites the viewer into a state of deceleration, allowing them to sense what usually remains unseen — the invisible weight of everyday existence.",
    ],
    images: [
      {
        src: annaWork4,
        alt: "Anna Kazakova — Invisible Weight 4",
        caption: { title: "Invisible Weight IV", medium: "Print on glass", dimensions: "45 × 30 cm", note: "Horizontal" },
      },
      {
        src: annaWork2,
        alt: "Anna Kazakova — Invisible Weight 2",
        caption: { title: "Invisible Weight II", medium: "Print on glass", dimensions: "30 × 45 cm", note: "Vertical" },
      },
      {
        src: annaWork3,
        alt: "Anna Kazakova — Invisible Weight 3",
        caption: { title: "Invisible Weight III", medium: "Print on glass", dimensions: "45 × 30 cm", note: "Horizontal" },
      },
      {
        src: annaWork1,
        alt: "Anna Kazakova — Invisible Weight 1",
        caption: { title: "Invisible Weight I", medium: "Print on glass", dimensions: "30 × 45 cm", note: "Vertical" },
      },
      {
        src: annaWork5,
        alt: "Anna Kazakova — Invisible Weight 5",
        caption: { title: "Invisible Weight V", medium: "Print on glass", dimensions: "45 × 30 cm", note: "Horizontal" },
      },
    ],
  },
  {
    slug: "dynamics-of-the-seasons",
    title: "Dynamics of the Seasons",
    artist: "Aj Jul",
    artistSlug: "aj-jul",
    thumbnail: projectsThumbAj,
    description: [
      "The year keeps turning. The seasons are in love, but they can only exist through the negation of the other.",
    ],
    images: [
      {
        src: ajWork1,
        alt: "Aj Jul — Dynamics of the Seasons 1",
        caption: { title: "Summer & Autumn", medium: "Color pastels and pencils on paper", dimensions: "Approx. A4" },
      },
      {
        src: ajWork2,
        alt: "Aj Jul — Dynamics of the Seasons 2",
        caption: { title: "Winter & Spring", medium: "Color pastels and pencils on paper", dimensions: "Approx. A4" },
      },
    ],
  },
  {
    slug: "flowers",
    title: "Flowers",
    artist: "Mariia Zatsepina",
    artistSlug: "mariia-zatsepina",
    thumbnail: projectsThumbMariia,
    description: [
      "My project was born intuitively — even before I could put it into words. When I learned about the photography exhibition, I immediately felt that I wanted to work with flowers. But not with living ones — I was drawn to those that had already passed their peak. Flowers in transition: from life into another state. I was captivated by their fragility, their stillness, their transformed beauty. There was no loss in them — there was continuation.",
      "At first, I tried to explain this choice through my professional background. In the past, I worked as an investigator, and it was important for me to see details, to notice the unnoticed, to reveal what is hidden. Through macro photography of dried flowers, I sought to show exactly that — the structure, the texture, the inner life of something that at first glance seems already finished.",
      "But over time, I felt that this project was much deeper than any rational explanation. While working, I experienced strong, heavy emotions — coldness, inner silence, a sense of grief. I wanted to shoot against a dark background, as if holding onto this depth and not allowing it to dissipate.",
      "I continued to shoot, relying more on intuition than on understanding. From my personal experience, I have come to realize that sometimes, long before events unfold, we begin to feel what we cannot yet explain. It can manifest as a mood, as an inner heaviness, as an inexplicable pain or silence.",
      "At the end of working on the project, my father passed away. And then, looking back at my photographs, I saw clearly for the first time: everything I had been creating for months already contained this farewell.",
      "The flowers in my work are not a symbol of death. They are a symbol of transition. From one state to another. They do not disappear — they transform, preserving their form, their beauty, their presence. Like memory.",
      "My father loved flowers very much. And now I understand why this theme came to me long before his passing.",
      "I want to say to those who will view my work: trust your feelings. Express not what seems right or logical, but what you truly experience inside. Through photography, drawing, or any form of creativity. With time, much becomes clear — and the states that once felt inexplicable find their meaning.",
      "This project will remain with me as a personal experience, as a dialogue with something greater than we can explain. And as a reminder that even in change and loss, beauty and presence remain.",
    ],
    images: [
      {
        src: mariiaWork1,
        alt: "Mariia Zatsepina — Flowers 1",
        caption: { title: "Flowers I", medium: "Photograph on canvas", dimensions: "60 × 90 cm" },
      },
      {
        src: mariiaWork2,
        alt: "Mariia Zatsepina — Flowers 2",
        caption: { title: "Flowers II", medium: "Photograph on canvas", dimensions: "60 × 90 cm" },
      },
      {
        src: mariiaWork3,
        alt: "Mariia Zatsepina — Flowers 3",
        caption: { title: "Flowers III", medium: "Photograph on canvas", dimensions: "60 × 90 cm" },
      },
    ],
  },
  {
    slug: "fear-here",
    title: "FEAR HERE",
    artist: "Nadya Net",
    artistSlug: "nadya-net",
    thumbnail: projectsThumbNadya,
    description: [
      "Fear Here emerges from the experience of forced migration — not as a single event, but as a prolonged state with no clear endpoint. It reflects a condition of living without stable ground, where home ceases to be a place and belonging is no longer guaranteed. Within this state, fear stops functioning as a reaction to a specific threat and becomes a constant background of everyday life.",
      "Rather than addressing external circumstances, the project focuses on the internal experience of displacement as trauma. It is based on a personal photographic archive collected over a year and a half of living in Yerevan. These images do not operate as documentary evidence; instead, they function as carriers of memory and fragments of daily presence. The works are created using mixed media, combining archival photographs with illustration.",
      "At the center of the series is a recurring figure — a girl and her fear. Fear is presented not as an abstract emotion, but as a character whose scale and presence continuously shift. It intervenes in the urban environment, follows the protagonist, and gradually becomes embedded in her everyday reality. Fear does not disappear; it redefines its own function. The city in Fear Here is not a specific geographic location, but a space of adaptation — a temporary \"here,\" where identity loses its stability and becomes a process.",
      "Fear Here is an inner archive of trauma, composed not of facts, but of lived states. The project proposes a model of adaptation not through overcoming, but through coexistence.",
    ],
    images: [
      {
        src: nadyaWork4,
        alt: "Nadya Net — Already Inside I",
        caption: {
          title: "Already Inside I",
          medium: "Mixed media — archival photographs with illustration",
          dimensions: "Various sizes",
        },
      },
      {
        src: nadyaWork3,
        alt: "Nadya Net — Already Inside  II",
        caption: {
          title: "Already Inside  II",
          medium: "Mixed media — archival photographs with illustration",
          dimensions: "Various sizes",
        },
      },
      {
        src: nadyaWork2,
        alt: "Nadya Net — Already Inside  III",
        caption: {
          title: "Already Inside  III",
          medium: "Mixed media — archival photographs with illustration",
          dimensions: "Various sizes",
        },
      },
      {
        src: nadyaWork5,
        alt: "Nadya Net — Destination Ararat",
        caption: {
          title: "Destination Ararat",
          medium: "Mixed media — archival photographs with illustration",
          dimensions: "Various sizes",
        },
      },
      {
        src: nadyaWork6,
        alt: "Nadya Net — In Suspension",
        caption: {
          title: "In Suspension",
          medium: "Mixed media — archival photographs with illustration",
          dimensions: "Various sizes",
        },
      },
    ],
  },
  {
    slug: "liberation-of-colors",
    title: "Liberation of Colors",
    artist: "Yana Kaziulia",
    artistSlug: "yana-kaziulia",
    thumbnail: projectsThumbYana,
    description: [
      "The world around us is filled with colors. Across different cultures, the same color can carry different meanings, shaped by history, religion, traditions and collective memory. Black often stands for grief. White for purity. Green for calm. Red for love and desire. Yellow for joy. When colors appear together, their meaning can change.",
      "In visual culture and branding, colors receive special attention. Colors make us feel a certain way and help to create a first emotional impression about a product. Banks and insurance companies often choose blue to evoke a feeling of trust and stability. Pharmacies and organic brands use green because people associate it with health and nature. Luxury brands rely on black and gold to create a sense of exclusivity.",
      "Red and green is one of the most common color combinations, appearing constantly in nature, clothing, shop windows, billboards, and street signs. In many cultures, this combination symbolizes life, energy, and harmony. For the artist, however, these colors provoke a very different reaction: they act as a traumatic emotional trigger, tied to violence, control, suffering, blood, and hopelessness. In her home country, these colors are used by a dictatorship as a state symbol to dominate public space, enforce ideology, and impose national identity.",
      "With this project, she wants to find out if the perception of these colors can be changed and if red and green can gain a new, positive meaning instead of provoking deep inner disgust and rejection. The project begins with observation and emotional tracking at the moment of encountering these colors, but this alone is not enough to change perception. Reclaiming them requires an active gesture: the artist begins to deliberately work with these colors — seeking them out, creating an aesthetic with them, and composing images in which red and green become conscious visual choices rather than accidental appearances.",
      "This project is an act of resistance — a way to face these colors and try to change their meaning. Can they become part of life rather than symbols of pain? The answer is still open.",
    ],
    images: [
      {
        src: yanaWork1,
        alt: "Yana Kaziulia — Liberation of Colors 1",
        caption: { title: "Liberation of Colors I", medium: "Photograph", dimensions: "40 × 40 cm", note: "Frame 52 × 52 cm" },
      },
      {
        src: yanaWork2,
        alt: "Yana Kaziulia — Liberation of Colors 2",
        caption: { title: "Liberation of Colors II", medium: "Photograph", dimensions: "40 × 40 cm", note: "Frame 52 × 52 cm" },
      },
      {
        src: yanaWork3,
        alt: "Yana Kaziulia — Liberation of Colors 3",
        caption: { title: "Liberation of Colors III", medium: "Photograph", dimensions: "40 × 40 cm", note: "Frame 52 × 52 cm" },
      },
      {
        src: yanaWork4,
        alt: "Yana Kaziulia — Liberation of Colors 4",
        caption: { title: "Liberation of Colors IV", medium: "Photograph", dimensions: "40 × 40 cm", note: "Frame 52 × 52 cm" },
      },
      {
        src: yanaWork5,
        alt: "Yana Kaziulia — Liberation of Colors 5",
        caption: { title: "Liberation of Colors V", medium: "Photograph", dimensions: "40 × 30 cm", note: "Frame 52 × 52 cm · 9 polaroids 8.5 × 7 cm" },
      },
    ],
  },
  {
    slug: "flow",
    title: "Flow",
    artist: "Yana Kaziulia",
    artistSlug: "yana-kaziulia",
    thumbnail: projectsThumbYanaFlow,
    description: [
      "Life is made of moments.\nWaking up to the warmth of sunlight on your face.\nThe smell of freshly brewed coffee.\nWater running over your skin in the shower.\nGoosebumps from a touching piece of music.",
      "But how often do we really live these moments?",
      "Modern life is full of stress — at work, at home, through an overwhelming flow of information.\nThe pace is so fast that we are almost always one step ahead of ourselves.\nWe worry about the future during the day and lie awake at night, replaying the past in our minds.\nMany people begin to notice that life is passing by without being fully lived.\nWhile they search for ways to ground themselves and bring their wandering mind back to the present, some have already found their path — through art.\nThey enter the process and slow down.",
      "These moments are fragile.\nThey cannot be held or repeated.\nThey exist only briefly — and then they disappear.",
      "The photography project \"Flow\" is an attempt to capture these intimate moments of presence — moments of full concentration, when something shaped from the inside becomes visible: a movement, a sound, a gesture.\nPhotography freezes what is already passing.\nWhat once existed only in the body remains as a trace —\na memory of a moment that is already gone.",
    ],
    images: [
      {
        src: yanaFlow1,
        alt: "Yana Kaziulia — Flow I",
        caption: { title: "Flow I", medium: "In Progress", dimensions: "" },
      },
      {
        src: yanaFlow2,
        alt: "Yana Kaziulia — Flow II",
        caption: { title: "Flow II", medium: "In Progress", dimensions: "" },
      },
      {
        src: yanaFlow6,
        alt: "Yana Kaziulia — Flow III",
        caption: { title: "Flow III", medium: "In Progress", dimensions: "" },
      },
      {
        src: yanaFlow4,
        alt: "Yana Kaziulia — Flow IV",
        caption: { title: "Flow IV", medium: "In Progress", dimensions: "" },
      },
      {
        src: yanaFlow5,
        alt: "Yana Kaziulia — Flow V",
        caption: { title: "Flow V", medium: "In Progress", dimensions: "" },
      },
      {
        src: yanaFlow3,
        alt: "Yana Kaziulia — Flow VI",
        caption: { title: "Flow VI", medium: "In Progress", dimensions: "" },
      },
    ],
  },
];

import { projects2025 } from "@/lib/projectData2025";

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug) || projects2025.find((p) => p.slug === slug);
