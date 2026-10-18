import type { APIRoute } from 'astro';
import { getPosts, kindLabels } from '../lib/posts';

const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => `&#${c.charCodeAt(0)};`);

export const GET: APIRoute = async ({ site, url }) => {
  const base = site ?? url;
  const posts = await getPosts();
  const items = posts
    .map((p) => {
      const link = new URL(`/posts/${p.id}/`, base).href;
      return `<item><title>${esc(`[${kindLabels[p.data.kind]}] ${p.data.title}`)}</title><link>${link}</link><guid>${link}</guid><pubDate>${p.data.date.toUTCString()}</pubDate>${p.data.summary ? `<description>${esc(p.data.summary)}</description>` : ''}</item>`;
    })
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Виталий Балаян — лог работ</title><link>${new URL('/', base).href}</link><description>Работы, релизы, фото и видео</description><language>ru</language>${items}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
};
