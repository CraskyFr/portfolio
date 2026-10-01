import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiences' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    client: z.string().optional(),
    location: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    summary: z.string(),
    highlights: z.array(z.string()),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { experiences };
