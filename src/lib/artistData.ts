import yanaPortrait from "@/assets/yana-kaziulia.jpg";
import annaPortrait from "@/assets/anna-kazakova.jpg";
import mariiaPortrait from "@/assets/mariia-zatsepina.jpg";
import nadyaPortrait from "@/assets/nadya-net.jpg";
import ajPortrait from "@/assets/aj-jul.png";

import nadezhdaPortrait from "@/assets/nadezhda-slavinskene.jpg";
import markPortrait from "@/assets/mark-poriadkov.jpg";
import olgaPortrait from "@/assets/olga-iavorskaia.jpg";
import dariaPortrait from "@/assets/daria-wagner.jpg";
import annaK2025Portrait from "@/assets/anna-kazakova-2025.jpg";
import evaMariaPortrait from "@/assets/eva-maria-shipova.jpg";
import oxanaPortrait from "@/assets/oxana-grom.jpg";

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
  portraitPosition?: string;
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

export const placeholderArtists2025: Artist[] = [
  {
    slug: "nadezhda-slavinskene",
    name: "Nadezhda Slavinskene",
    shortLine: "Photography · Urban reflection · Freedom",
    bio: "Berlin-based artist working with photography, focusing on urban reflection, transitional states, and the relationship between solitude and freedom.",
    longBio: "Nadezhda Slavinskene is a Berlin-based photographer whose work investigates the interplay between urban environments and human interiority. Her practice centers on moments of stillness within the city — pauses, reflections, and fleeting encounters with solitude that reveal deeper emotional landscapes.\n\nDrawing on her background in documentary observation, she approaches each image as a quiet negotiation between structure and openness, seeking out spaces where architecture meets the sky and where silence becomes a form of freedom.",
    artistStatement: "My work begins where noise ends. I am drawn to the overlooked spaces within cities — transitional zones, reflections in glass, corridors of light between buildings — where solitude is not absence but presence. Photography, for me, is a practice of attention: slowing down enough to notice how urban space holds and releases us. I am interested in the tension between confinement and openness, between the built environment and the vastness it occasionally reveals. Each image is an attempt to make visible the quiet freedom that exists within the everyday.",
    portrait: nadezhdaPortrait,
    cohort: "2025",
    projects: [],
  },
  {
    slug: "mark-poriadkov",
    name: "Mark Poriadkov",
    shortLine: "Video · City as organism · Atmosphere",
    bio: "Artist working with video and moving image, exploring the city as an organism shaped by rhythm, atmosphere, and human presence.",
    longBio: "Mark Poriadkov is an artist based in Berlin working primarily with video and moving image. His practice explores the city as a living organism — a system of rhythms, sounds, and atmospheric shifts shaped by the presence and movement of its inhabitants.\n\nHis approach combines observational filmmaking with a sensitivity to ambient texture, treating urban environments not as backdrops but as active, breathing subjects. He is interested in the points where documentation meets abstraction, and where the ordinary pulse of city life becomes something contemplative.",
    artistStatement: "I see the city as a body — breathing, expanding, contracting. My video work attempts to capture this respiration: the way light shifts across a facade over minutes, the rhythm of footsteps in an underpass, the almost musical quality of traffic seen from a distance. I am not interested in narrative in the traditional sense, but in atmosphere as content. Each piece is an invitation to experience urban space as something felt rather than merely seen, to recognize the city not as a fixed structure but as an ongoing, collective performance.",
    portrait: markPortrait,
    cohort: "2025",
    projects: [],
  },
  {
    slug: "olga-iavorskaia",
    name: "Olga Iavorskaia",
    shortLine: "Photography · Architectural details · Shadow zones",
    bio: "Artist working with photography, observing architectural fragments, shadow zones, and subtle spatial tension.",
    longBio: "Olga Iavorskaia is a Berlin-based photographer whose practice is rooted in close observation of architectural surfaces, fragments, and the interplay of light and shadow within built environments. Her images isolate details that are typically overlooked — edges, joints, cast shadows, material textures — transforming them into compositions that hover between documentation and abstraction.\n\nHer work reflects a sustained interest in how buildings carry time, weather, and use within their surfaces. She approaches architecture not as a subject of grandeur but as a field of subtle tensions, where form meets erosion and intention meets accident.",
    artistStatement: "I photograph what buildings do not intend to show. My attention is drawn to shadow zones — the spaces where light fails to reach evenly, where surfaces crack or discolor, where architectural intention gives way to material reality. These are the moments where a structure reveals something unguarded. I work slowly, often returning to the same site under different conditions, watching how a wall or a corner transforms with the movement of the sun. For me, photography is a way of listening to space — recording not what is said, but what is whispered.",
    portrait: olgaPortrait,
    portraitPosition: "50% 42%",
    cohort: "2025",
    projects: [],
  },
  {
    slug: "daria-wagner",
    name: "Daria Wagner",
    shortLine: "Photography · Movement · Visual choreography",
    bio: "Photographic practice centered on movement, gesture, and visual choreography between body, space, and atmosphere.",
    longBio: "Daria Wagner is a Berlin-based photographer whose work explores the relationship between the human body and its surrounding space through the lens of movement and gesture. Her images capture moments of physical expression — a turning head, an outstretched hand, a figure mid-step — transforming them into compositions that feel both spontaneous and precisely orchestrated.\n\nHer practice draws on an interest in dance, performance, and the choreographic potential of everyday motion. She is attentive to the way bodies negotiate space, creating visual rhythms that echo the tension and release found in contemporary dance.",
    artistStatement: "I am interested in the choreography of the unscripted moment — the way a person moves through a doorway, shifts their weight on a train platform, or turns toward a sound. These gestures, fleeting and often unconscious, contain a visual music that I try to preserve through photography. My work sits at the intersection of portraiture and movement study, seeking not to freeze motion but to hold it in suspension. I want the viewer to feel the continuation — the breath before and after the frame — and to recognize in these ordinary movements something deeply, quietly expressive.",
    portrait: dariaPortrait,
    portraitPosition: "50% 44%",
    cohort: "2025",
    projects: [],
  },
  {
    slug: "anna-kazakova-2025",
    name: "Anna Kazakova",
    shortLine: "Photography · Transition · Transformation",
    bio: "Artist working with photography and staged imagery, focusing on transformation, psychological transition, and suspended emotional states.",
    longBio: "Anna Kazakova is a photographer based in Berlin whose practice explores psychological transition and the visual language of transformation. Working with both staged and observational approaches, she creates images that suspend their subjects between states — between stillness and movement, presence and absence, clarity and dissolution.\n\nHer work is informed by an interest in the interior life of her subjects, using light, color, and composition to externalize emotional currents that typically remain invisible. She approaches each project as an extended meditation on change as a continuous, non-linear process.",
    artistStatement: "Transformation is not a single event but a constant undercurrent. My photographs attempt to make this visible — to capture the moment when something is no longer what it was but has not yet become what it will be. I am drawn to thresholds: physical, emotional, psychological. Whether working with a model in a controlled setting or observing a stranger in passing light, I look for the instant when the surface cracks slightly and something authentic emerges. My practice is driven by the belief that photography can hold complexity — that a single frame can contain both vulnerability and strength, stillness and motion, ending and beginning.",
    portrait: annaK2025Portrait,
    portraitPosition: "50% 46%",
    cohort: "2025",
    projects: [],
  },
  {
    slug: "eva-maria-shipova",
    name: "Eva-Maria Shipova",
    shortLine: "Photography · Memory · Intuitive observation",
    bio: "Artist exploring memory, intuitive observation, and poetic fragments of everyday perception through photography.",
    longBio: "Eva-Maria Shipova is a Berlin-based photographer whose work moves between memory and present perception. Her practice is guided by intuition — an attentiveness to fleeting impressions, ambient moods, and the quiet poetry of ordinary moments that might otherwise pass unnoticed.\n\nHer images often carry a sense of gentle dislocation, as though the viewer is encountering a memory rather than a document. She works with natural light and found compositions, preferring to discover rather than construct her subjects, and allowing chance and atmosphere to shape each frame.",
    artistStatement: "I photograph what I remember before I forget it. My practice is rooted in the belief that perception is already a form of memory — that the moment we see something, it has already begun to transform in our minds. I am drawn to soft transitions, ambient light, and the edges of attention, where the world reveals itself most honestly. My work is not about capturing decisive moments but about preserving the texture of experience — the quality of light in a room, the weight of silence in a corridor, the way a face looks just after a thought has passed. Photography, for me, is a form of intuitive notation.",
    portrait: evaMariaPortrait,
    cohort: "2025",
    projects: [],
  },
  {
    slug: "oxana-grom",
    name: "Oxana Grom",
    shortLine: "Photography · Form · Urban rhythm",
    bio: "Artist focusing on form, visual structure, and urban rhythm through a photographic practice attentive to detail and atmosphere.",
    longBio: "Oxana Grom is a Berlin-based photographer whose work investigates the visual rhythms embedded in urban environments. Her practice is characterized by a rigorous attention to form — repeating patterns, geometric relationships, and the interplay of volumes and voids within the built landscape.\n\nWhile her compositions are formally precise, they are also deeply atmospheric, capturing the way cities generate their own visual music through the repetition and variation of architectural elements. She is interested in the boundary between order and improvisation, finding poetry in the structural logic of everyday spaces.",
    artistStatement: "I look for rhythm in the city the way a musician listens for a beat. My photographs isolate the visual patterns that urban environments produce — the repetition of windows, the syncopation of shadows on a wall, the counterpoint between a smooth surface and a textured one. I am interested in form not as an abstract exercise but as something deeply connected to how we experience space. Rhythm creates expectation, and breaks in rhythm create surprise. My work moves between these two poles, seeking compositions where order and disruption coexist, and where the city reveals itself as both system and improvisation.",
    portrait: oxanaPortrait,
    portraitPosition: "50% 38%",
    cohort: "2025",
    projects: [],
  },
];

export const getArtistBySlug = (slug: string): Artist | undefined =>
  [...artists, ...placeholderArtists2025].find((a) => a.slug === slug);
