import type { APIRoute } from 'astro';
import { site } from '../site.config';

export const GET: APIRoute = () => {
  const body = site.launched
    ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
