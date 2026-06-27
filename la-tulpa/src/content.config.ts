import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const obras = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/obras' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    slug: z.string(),
    year: z.number(),
    type: z.string(),
    typeEn: z.string(),
    choreography: z.string(),
    performers: z.array(z.string()),
    music: z.string().optional(),
    production: z.string().optional(),
    premiereDate: z.string().optional(),
    premiereVenue: z.string().optional(),
    premiereCity: z.string().optional(),
    synopsis: z.string(),
    synopsisEn: z.string(),
    themes: z.array(z.string()).optional(),
    themesEn: z.array(z.string()).optional(),
    video: z.string().optional(),
    videoSubtitles: z.boolean().default(false),
    videoTranscription: z.string().optional(),
    videoTranscriptionEn: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageAltEn: z.string().optional(),
    tourDates: z.array(z.object({
      venue: z.string(),
      city: z.string(),
      country: z.string(),
      year: z.number(),
      festival: z.string().optional(),
      notes: z.string().optional(),
      notesEn: z.string().optional(),
    })).optional(),
    onTour: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const media = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/media' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    type: z.enum(['video', 'audio', 'image', 'text', 'banner']),
    description: z.string().optional(),
    descriptionEn: z.string().optional(),
    url: z.string().optional(),
    file: z.string().optional(),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    thumbnailAltEn: z.string().optional(),
    relatedWork: z.string().optional(),
    date: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { obras, media };
