import { getCollection } from 'astro:content';

/** Published articles, newest first. Drafts show in `npm run dev` only. */
export async function getArticles() {
  const all = await getCollection('articles', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
