import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sammler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sammler' }),
  schema: z.object({
    name: z.string(),
    schwerpunkt: z.string().optional(),
    seitJahr: z.number().optional(),
    foto: z.string().optional(),
    veroeffentlicht: z.boolean().default(true),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    titel: z.string(),
    datum: z.coerce.date(),
    zusammenfassung: z.string().optional(),
  }),
});

const projekte = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projekte' }),
  schema: z.object({
    titel: z.string(),
    kurzbeschreibung: z.string(),
    externerLink: z.string().url().optional(),
    reihenfolge: z.number().default(0),
  }),
});

export const collections = { sammler, news, projekte };
