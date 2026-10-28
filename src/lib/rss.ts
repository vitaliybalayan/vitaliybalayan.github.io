import type { APIRoute } from 'astro';
import { getPosts, kindLabels, postHref } from './posts';
import { t, type Lang } from './i18n';

const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => `&#${c.charCodeAt(0)};`);

/** RSS-лента для языка: /rss.xml и /en/rss.xml. */
export const rss = (lang: Lang): APIRoute => async ({ site, url }) => {
  const base = site ?? url;
  const tr = t(lang);
  const posts = await getPosts(lang);
  const items = posts
    .map((p) => {
      const link = new URL(postHref(p), base).href;
      return `<item><title>${esc(`[${kindLabels(lang)[p.data.kind]}] ${p.data.title}`)}</title><link>${link}</link><guid>${link}</guid><pubDate>${p.data.date.toUTCString()}</pubDate>${p.data.summary ? `<description>${esc(p.data.summary)}</description>` : ''}</item>`;
    })
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${tr.rss.title}</title><link>${new URL(lang === 'ru' ? '/' : `/${lang}/`, base).href}</link><description>${tr.rss.description}</description><language>${lang}</language>${items}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
};
