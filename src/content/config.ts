import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const itineraries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    kidAges: z.string(),
    regions: z.array(z.string()),
    heroImage: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const destinations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    region: z.enum(['Northland', 'Auckland', 'Coromandel', 'Waikato', 'Bay of Plenty', 'Rotorua', 'Hawke\'s Bay', 'Wellington', 'Nelson', 'Marlborough', 'West Coast', 'Canterbury', 'Mackenzie', 'Queenstown', 'Otago', 'Southland', 'Fiordland']),
    heroImage: z.string().optional(),
    kidRating: z.number().min(1).max(5),
    highlights: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, itineraries, destinations };
