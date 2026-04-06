import yanaPortrait from "@/assets/yana-kaziulia.jpg";
import annaPortrait from "@/assets/anna-kazakova.jpg";
import mariiaPortrait from "@/assets/mariia-zatsepina.jpg";
import nadyaPortrait from "@/assets/nadya-net.jpg";
import ajPortrait from "@/assets/aj-jul.png";

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
import yanaWork1 from "@/assets/yana-work-1.jpg";
import yanaWork2 from "@/assets/yana-work-2.jpg";
import yanaWork3 from "@/assets/yana-work-3.jpg";
import yanaWork4 from "@/assets/yana-work-4.jpg";
import yanaWork5 from "@/assets/yana-work-5.jpg";

export interface ArtistProject {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export interface Artist {
  slug: string;
  name: string;
  shortLine: string;
  bio: string;
  longBio: string;
  artistStatement: string;
  portrait: string;
  cohort: "2025-26" | "2025";
  projects: ArtistProject[];
}

export const artists: Artist[] = [
  {
    slug: "aj-jul",
    name: "Aj Jul",
    shortLine: "Drawing · Emotional States · Space",
    bio: "Berlin-based artist exploring emotional states and the interplay between the human body and the surrounding space. Drawing is approached as a meditative practice.",
    longBio: "Aj Jul is a Berlin-based artist exploring emotional states and the interplay between the human body and the surrounding space. From 2023 to 2024, Aj Jul attended the Experimental Figure Drawing Workshop (by Salvatore Siciliano). In 2024, Aj Jul participated in a group exhibition as part of the 48 Stunden Neukölln festival. In 2025, a private joint exhibition was co-organized together with a fellow artist. From 2025 to 2026, Aj Jul has been involved in the group initiative Creative Project New.\n\nToday, for Aj Jul, drawing is a meditative practice — a space to explore the self and give shape to emotions and thoughts.",
    artistStatement: "My work centers on the human figure — faces, hands, bodies — as it dissolves into and re-forms from its surroundings. I am exploring the boundary between person and environment: how figures blend into space through lines, dots, and fields of color, while simultaneously shaping that space. In this way, the work reflects a mutual influence — people are continuously affecting and being affected by other people and the context around them.\n\nFrom Schiele, I draw a tension in line and proportion; from Toulouse-Lautrec, a fluid mixing of media; from Chagall, poetic treatment of love and human connection.\n\nMy recent works are made primarily with color pastels and pencils on paper, occasionally incorporating watercolor. These materials let me shift between line and color, reinforcing the sense of figures fragmenting into space. The process itself plays a decisive role. Light, mood, and intuition often shift the direction of a piece, so that the image begins to guide me as much as I guide it.\n\nRather than prescribing a single meaning, my works suggest a direction, inviting viewers to look closer, to recognize something that resonates uniquely with them.",
    portrait: ajPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "Dynamics of the Seasons",
        description: "A two-part work about Winter & Spring and Summer & Autumn. The seasons are presented as relational forces that exist through the negation of one another. Themes: transition, cyclic tension, relationship, transformation.",
        images: [
          { src: ajWork1, alt: "Aj Jul — Dynamics of the Seasons 1" },
          { src: ajWork2, alt: "Aj Jul — Dynamics of the Seasons 2" },
        ],
      },
    ],
  },
  {
    slug: "anna-kazakova",
    name: "Anna Kazakova",
    shortLine: "Photography · Urban Space · Light",
    bio: "Berlin-based photographer exploring urban space, nature, suspended time, light, architecture, and subtle human presence.",
    longBio: "Anna Kazakova was born in Bratsk, Russia. Her early experience of observing nature shaped a sensitive attention to light, space, and silence. She began photographing with a film camera, using it as a way to capture emotional states rather than events.\n\nIn 2003, she moved to Moscow, where she studied at MSTU and worked in the financial sector. Despite the structure and precision of that environment, photography remained an essential part of her inner life.\n\nSince 2017, Kazakova has been living and working in Berlin. In 2019, she completed a course in fine art photography. In 2020, she presented her work publicly for the first time in an exhibition at OstPost space after graduating from the school of photographer Dmitry Bulkin.\n\nBetween 2021 and 2023, she continued developing her artistic practice through studies with Russian photographers. In 2024–2025, she participated in the Creative Project. In the summer of 2025, she took part in the group exhibition City in Berlin (June–August) as part of the Creative Project.\n\nHer artistic practice focuses on the relationship between urban space and nature. Through her photographs, Kazakova explores suspended time, the dialogue between light and architecture, and the subtle presence of the human within the environment. For her, photography is a way to capture the moment when space becomes honest and revealed.",
    artistStatement: "My photographic practice engages with states that resist direct articulation. At its core lies the fragility of presence, shifts in perception, and an inner tension that exists at the threshold of the visible.\n\nStylistically, I draw on the language of Impressionism, particularly its luminous and sensorial dimension, where impression takes precedence over form. The influence of artists such as Claude Monet, Pierre-Auguste Renoir, and Berthe Morisot is reflected in my use of light, softened focus, and the dissolution of boundaries as a way to convey psychological states.\n\nI am not interested in documenting events, but in capturing internal shifts — moments of dislocation, where the sense of self begins to destabilize. Within the frame, space operates as an extension of the psyche: it compresses, dissolves, or isolates the figure.\n\nMy practice merges the roles of photographer and multimedia artist. I work with my own images, positioning myself as both author and subject. This gesture removes the distance between experience and its representation. The use of artificial intelligence becomes a tool for transformation — a movement from documentation toward an internal, subjective image.\n\nThe work is built on minimal visual shifts: gesture, breath, light. Through these elements, a field emerges in which the otherwise invisible can surface.\n\nFor me, photography is a space where solitude becomes visible.",
    portrait: annaPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "Invisible Weight — A Diary of a Shadow",
        description: "A project about depression, not as a clinical diagnosis but as a phenomenon of inner space. A white landscape becomes a model of silence, disorientation, deceleration, and invisible weight.",
        images: [
          { src: annaWork1, alt: "Anna Kazakova — Invisible Weight 1" },
          { src: annaWork2, alt: "Anna Kazakova — Invisible Weight 2" },
          { src: annaWork3, alt: "Anna Kazakova — Invisible Weight 3" },
          { src: annaWork4, alt: "Anna Kazakova — Invisible Weight 4" },
          { src: annaWork5, alt: "Anna Kazakova — Invisible Weight 5" },
        ],
      },
    ],
  },
  {
    slug: "mariia-zatsepina",
    name: "Mariia Zatsepina",
    shortLine: "Photography · Nature · Transformation",
    bio: "Berlin-based photographer working with portraiture, nature, flowers, emotional states, and transformation.",
    longBio: "Mariia Zatsepina is a photographer based in Berlin whose work focuses on portraiture and artistic photography of nature and flowers. Her practice explores emotions, inner states, and the subtle relationship between people and the natural world.\n\nOriginally trained in law, she spent many years working as an investigator before turning to photography later in life. After the birth of her children, photography gradually became an important part of her life. She began as a self-taught photographer and later continued her studies in Berlin. In 2018 she completed a course in creative and artistic photography with Dmitry Bulkin and presented a series dedicated to nature at the graduation exhibition of the course at Ostpost Berlin.\n\nHer current project Flowers in People's Lives explores flowers as a language of emotion and memory. Using images of dried flowers, she reflects on time, transformation, and the quiet beauty of fading forms, where withering appears not as disappearance but as another state of presence.",
    artistStatement: "My artistic practice explores states of transition, where beauty does not disappear but transforms. I am drawn to the fragile moment between vitality and stillness — a space where form changes, yet presence remains.\n\nIn my recent work, I focus on dried flowers as carriers of this transformation. Rather than symbols of decay, I see them as evidence of continuation: a quieter, more introspective state of being, where time becomes visible and beauty reveals a different depth.\n\nWorking primarily with macro photography, I shift the viewer's perception by bringing attention to details that often remain unnoticed. By isolating fragments and enlarging them, I create a visual language that invites a slower, more attentive way of seeing — one that reveals hidden structures, textures, and inner landscapes.\n\nMy approach is shaped by my background as a criminal investigator in the police. This experience formed my way of seeing — looking beyond the surface, uncovering what is hidden, and bringing it into visibility. Today, this investigative gaze remains, but it has transformed: instead of evidence, I reveal fragile traces of beauty, change, and presence.\n\nMoving between observation and interpretation, my work uncovers what exists beneath the visible. I am interested not in endings, but in continuations — in the quiet persistence of form, and in the idea that transformation itself holds its own kind of beauty.",
    portrait: mariiaPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "Flowers",
        description: "A personal project about dried flowers, transition, grief, memory, fragility, and transformation. The flowers are not symbols of death, but of continuation, presence, and another state of being.",
        images: [
          { src: mariiaWork1, alt: "Mariia Zatsepina — Flowers 1" },
          { src: mariiaWork2, alt: "Mariia Zatsepina — Flowers 2" },
          { src: mariiaWork3, alt: "Mariia Zatsepina — Flowers 3" },
        ],
      },
    ],
  },
  {
    slug: "yana-kaziulia",
    name: "Yana Kaziulia",
    shortLine: "Photography · Memory · Identity",
    bio: "Belarusian art photographer based in Berlin, working across analog and digital formats. Her practice explores memory, identity, emotional presence, and personal perception.",
    longBio: "Yana Kaziulia is a Belarusian art photographer based in Berlin.\n\nBorn in Minsk in 1990, she grew up surrounded by photography. Her grandfather, Yauhen Kaziulia, was a photographer and chairman of the Minsk Photo Club — the oldest photographic collective in Belarus. His work and involvement in the photographic community shaped her early sense of aesthetics.\n\nYana Kaziulia began her independent practice after relocating to Germany in 2015. Between 2018 and 2024, she pursued training in artistic and analog photography in Berlin and Riga. She studied at the School of Creative Art Photography, founded by Latvian fine art photographer Dmitri Bulkin (2018–2019), and later completed an extended program of thematic courses at Ankagrafia Photography School (2020–2023), led and supervised by fine art photographer Anka Zhuravleva. In 2024, she completed a course in analog black-and-white photography with darkroom practice at LichtMal – Center for Black-and-White Photography in Berlin. She now works across both analog and digital formats.\n\nHer practice centers on long-term projects exploring memory, identity, the emotional presence of place, and personal perception.\n\nYana Kaziulia has participated in several group exhibitions in Germany and presented her first solo exhibition, ORIGINS, in Berlin in 2025. In 2026, she was selected for publication in a special edition of the independent photography magazine DOCU, and her project FLOW was selected for the art festival 48 Stunden Neukölln in Berlin.\n\nAlongside her artistic work, she has contributed photography to the print magazine Exberliner and various Belarusian online publications.\n\nShe also works as a cultural guide in Berlin and brings experience in storytelling, exhibition production, and curatorial projects — an interdisciplinary background that shapes her visual approach and research-driven practice.",
    artistStatement: "My work explores memory, identity, and emotional presence. I'm interested in how spaces carry traces of human experience and how inner feelings become visible.\n\nFor me, photography is a way to slow down and resist anxiety caused by everyday stress and information overload. It is a practice of being present — of paying attention to details that often remain unnoticed.\n\nI believe a photograph should evoke an emotional response without needing explanation. A concept can offer context, but it should never overshadow the image itself. Emotional impact matters more to me than technical perfection. I am drawn to images that breathe — even if they are blurred, slightly out of focus, or marked by movement. What matters is whether the photograph carries emotion and tells a story.\n\nMy visual language is shaped by black-and-white analog photography, with its attention to atmosphere, human presence, and quiet psychological tension. It is also informed by the work of contemporary artists such as Elizaveta Porodina, Anton Corbijn, Joakim Möller, Sarah Moon, and Xenie Zasetskaya. Corbijn's raw, living portraits, Zasetskaya's use of light through prisms, Möller's visual rhymes, and the painterly use of color and abstraction in the works of Moon and Porodina resonate strongly with my approach.\n\nIn my practice, I use experimental and intuitive techniques, including creative filters, long exposure, and double exposure. These methods help preserve a sense of emotion and atmosphere, rather than merely documenting reality.",
    portrait: yanaPortrait,
    cohort: "2025-26",
    projects: [
      {
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
    ],
  },
  {
    slug: "nadya-net",
    name: "Nadya Net",
    shortLine: "Painting · Illustration · Displacement",
    bio: "Berlin-based artist working with painting and illustration in a surreal visual language, exploring displacement, relocation, fear, identity, and emotional transformation.",
    longBio: "Nadezhda Netsvetaeva (Nadya Net) is a Berlin-based artist working with painting and illustration through a surrealist visual language. Born and raised in Perm, in the Ural region of Russia, she received her early training in academic drawing and painting before studying graphic design at Perm State Polytechnic University.\n\nBefore turning to independent artistic practice, she worked for many years as a designer, illustrator, and art director in media, advertising, and the technology sector, developing visual systems, branding projects, and narrative visual communication. This background shaped her systematic visual thinking and sensitivity to form, structure, and storytelling.\n\nIn 2022 she was forced to leave Russia and relocate to Yerevan. This experience became a turning point in her practice, leading her to return to painting as a way of processing personal transformation and displacement.\n\nWorking with photographs from her personal archive, Nadya Net reinterprets documentary imagery through painting and illustration, often combining it with fictional characters. Her works form narrative compositions where fragments of lived reality intersect with an inner symbolic space.\n\nHer practice explores themes of relocation, fear, identity, and emotional transformation in conditions of instability. Since moving to Berlin in 2023, she has continued developing her painting practice, reflecting on displacement as an ongoing process of reconstructing inner stability.",
    artistStatement: "My artistic practice explores what it means to live between worlds — shaped by forced migration, inherited histories of displacement, and the instability of belonging within a changing social and political reality. I am interested in the space between past and future, old and new identities, where memory, fear, and adaptation coexist.\n\nMy practice is also informed by the broader social and political realities that shape contemporary experiences of migration, displacement, and fractured belonging. I am interested in how these conditions affect not only individual lives, but collective and intergenerational experiences of loss, adaptation, and the search for home.\n\nI work between painting, digital photography, and illustration. Many of my works begin as digital compositions in which I combine photographs from my personal archive with drawn interventions and fictional elements. These images later develop into physical paintings, where I use acrylic and oil pastel on canvas to build texture, density, and a tactile emotional surface.\n\nMy visual language is informed by artists whose work transforms memory, displacement, and unstable belonging into symbolic form. I feel close to Marc Chagall's dreamlike imagery and his use of floating, imagined figures as carriers of memory and emotional experience. Alva Skog's hybrid approach to combining illustrated bodies with urban and photographic space influenced my early digital experiments, where I first began merging photography and illustration. I am also drawn to Szilveszter Makó's theatrical, painterly use of photography, in which staged characters and carefully constructed atmospheres create a reality that feels both historical and unreal.\n\nMoving between digital and physical processes, documentary fragments and imagined forms, real and surreal dimensions, I create narrative spaces in which everyday reality gradually shifts into an inner symbolic world. Rooted in my own experience, my work speaks to collective and intergenerational stories of migration, loss, and the search for home. I understand adaptation not as overcoming, but as learning to exist within change while gradually constructing a new sense of balance.",
    portrait: nadyaPortrait,
    cohort: "2025-26",
    projects: [
      {
        title: "FEAR HERE",
        description: "A mixed-media project about forced migration as an ongoing state without stable belonging. Fear appears as a shifting companion within urban space. The project explores adaptation through coexistence rather than overcoming.",
        images: [
          { src: nadyaWork1, alt: "Nadya Net — FEAR HERE" },
        ],
      },
    ],
  },
];

export const placeholderArtists2025: Artist[] = Array.from({ length: 7 }, (_, i) => ({
  slug: `artist-2025-${i + 1}`,
  name: `Artist ${i + 1}`,
  shortLine: "Coming soon",
  bio: "Biography will be available soon.",
  longBio: "",
  artistStatement: "",
  portrait: "",
  cohort: "2025" as const,
  projects: [],
}));

export const getArtistBySlug = (slug: string): Artist | undefined =>
  [...artists, ...placeholderArtists2025].find((a) => a.slug === slug);
