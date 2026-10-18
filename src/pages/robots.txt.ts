import type { APIRoute } from 'astro';
import { INDEXING } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const body = INDEXING
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
