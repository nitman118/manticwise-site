import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getArticles } from '../articles';
import { site, siteName } from '../site.config';

export const GET: APIRoute = async () => {
  const articles = await getArticles();
  return rss({
    title: siteName,
    description: 'First steps with data and AI, for people and companies.',
    site: site.url,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: `/articles/${article.id}/`,
    })),
    customData: '<language>en-GB</language>',
  });
};
