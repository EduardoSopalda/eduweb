import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const obras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    choreography: z.string(),
    performers: z.string(),
    music: z.string(),
    production: z.string(),
    premiere: z.string(),
    type: z.string(),
    image: z.string().optional(),
    videoUrl: z.string().optional(),
    touring: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { obras };
