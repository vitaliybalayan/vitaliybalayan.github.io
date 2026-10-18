import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Каждый пост — одна запись в ленте.
 * kind задаёт, как запись выглядит в ленте:
 *   release — выпуск/обновление проекта (changelog)
 *   work    — законченная работа / кейс
 *   photo   — фото-пост, медиа на первом плане
 *   video   — видео-пост
 *   note    — короткая заметка без медиа
 */
const media = z.object({
  type: z.enum(['image', 'video']),
  src: z.string(),
  alt: z.string().default(''),
  caption: z.string().optional(),
  poster: z.string().optional(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['release', 'work', 'photo', 'video', 'note']).default('note'),
    summary: z.string().optional(),
    project: z.string().optional(),
    version: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: media.optional(),
    media: z.array(media).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
