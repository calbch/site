import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishingDate: z.date(),
    updateDate: z.date().optional(),
    published: z.boolean(),
  }),
});

export const collections = { blog };
