import { defineCollection, z } from 'astro:content';

const menu = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    category:    z.string(),
    price:       z.string(),
    description: z.string(),
    image:       z.string(),
    featured:    z.boolean().default(false),
  }),
});

const info = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    tagline: z.string(),
    address: z.string(),
    hours:   z.string(),
    phone:   z.string(),
  }),
});

const specials = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    subtitle:   z.string(),
    description: z.string(),
    image:      z.string(),
    price:      z.string(),
    validUntil: z.string().optional(),
  }),
});

export const collections = { menu, info, specials };
