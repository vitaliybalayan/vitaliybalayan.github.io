import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const kindLabels: Record<Post['data']['kind'], string> = {
  release: 'Релиз',
  work: 'Работа',
  photo: 'Фото',
  video: 'Видео',
  note: 'Заметка',
};

export const PAGE_SIZE = 20;
export const HOME_LIMIT = 20;
export const TOP_TAGS = 24;

/** Типы, у которых есть своя страница-фильтр. */
export const kindRoutes = {
  work: { slug: 'works', label: 'Работы' },
  release: { slug: 'releases', label: 'Релизы' },
  note: { slug: 'notes', label: 'Заметки' },
} as const;
export type RoutedKind = keyof typeof kindRoutes;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Группирует посты по месяцам — основа changelog-ленты. */
export function groupByMonth(posts: Post[]) {
  const groups = new Map<string, Post[]>();
  for (const post of posts) {
    const key = post.data.date.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' }).replace(' г.', '');
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

export const formatDate = (date: Date) =>
  date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).replace(' г.', '');

export const shortDate = (date: Date) =>
  date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' }).replace('.', '');
