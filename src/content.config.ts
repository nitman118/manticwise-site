import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(155),
      date: z.coerce.date(),
      cover: image().optional(),
      slides: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articles };
