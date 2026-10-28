import { getCollection, type CollectionEntry } from 'astro:content';
import { dateLocale, localePath, t, type Lang } from './i18n';

export type Post = CollectionEntry<'posts'>;

export const kindLabels = (lang: Lang) => t(lang).kinds;

export const PAGE_SIZE = 20;
export const HOME_LIMIT = 20;
export const TOP_TAGS = 24;

/** Типы, у которых есть своя страница-фильтр. */
export const kindRoutes = {
  work: { slug: 'works' },
  release: { slug: 'releases' },
  note: { slug: 'notes' },
} as const;
export type RoutedKind = keyof typeof kindRoutes;

/** Английские переводы лежат в content/posts/en/ с тем же именем файла. */
const EN_PREFIX = 'en/';
export const postLang = (post: Post): Lang => (post.id.startsWith(EN_PREFIX) ? 'en' : 'ru');
export const postSlug = (post: Post) => post.id.replace(EN_PREFIX, '');
export const postHref = (post: Post) => localePath(postLang(post), `/posts/${postSlug(post)}/`);

export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('posts', (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Группирует посты по месяцам — основа changelog-ленты. */
export function groupByMonth(posts: Post[], lang: Lang) {
  const groups = new Map<string, Post[]>();
  for (const post of posts) {
    const key = post.data.date.toLocaleDateString(dateLocale[lang], { month: 'long', year: 'numeric' }).replace(' г.', '');
    groups.set(key, [...(groups.get(key) ?? []), post]);
  }
  return [...groups].map(([label, items]) => ({ label, items }));
}

export function getTags(posts: Post[]) {
  const counts = new Map<string, number>();
  for (const tag of posts.flatMap((p) => p.data.tags)) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1]);
}

export function groupByYear(posts: Post[]) {
  const years = new Map<number, Post[]>();
  for (const post of posts) {
    const y = post.data.date.getFullYear();
    years.set(y, [...(years.get(y) ?? []), post]);
  }
  return [...years].sort((a, b) => b[0] - a[0]);
}

export const tagSlug = (tag: string) => tag.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
export const tagHref = (lang: Lang, tag: string) => localePath(lang, `/tags/${tagSlug(tag)}/`);

export const formatDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(dateLocale[lang], { day: 'numeric', month: 'long', year: 'numeric' }).replace(' г.', '');

export const shortDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(dateLocale[lang], { day: '2-digit', month: 'short' }).replace('.', '');
