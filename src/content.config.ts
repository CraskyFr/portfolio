import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiences' }),
  schema: ({ image }) =>
    z.object({
      role: z.string(),
      company: z.string(),
      client: z.string().optional(),
      location: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date().optional(),
      summary: z.string(),
      highlights: z.array(z.string()),
      stack: z.array(z.string()),
      /** Logo affiché dans la frise : celui du client chez qui la mission a eu lieu, sinon de l'employeur. */
      logo: image().optional(),
      // Repères de l'étude de cas (bloc « En bref »).
      team: z.string().optional(),
      method: z.string().optional(),
      /** Environnement technique complet ; à défaut, la stack ci-dessus. */
      environment: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { experiences };
