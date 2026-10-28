import type { PaginateFunction } from 'astro';
import type { Lang } from './i18n';
import { getPosts, getTags, groupByYear, kindRoutes, PAGE_SIZE, postSlug, tagSlug, type RoutedKind } from './posts';

/** getStaticPaths для обеих языковых версий страниц: src/pages/** и src/pages/en/**. */

export async function kindPaths(lang: Lang, paginate: PaginateFunction) {
  const posts = await getPosts(lang);
  return (Object.keys(kindRoutes) as RoutedKind[]).flatMap((kind) =>
    paginate(posts.filter((p) => p.data.kind === kind), {
      pageSize: PAGE_SIZE,
      params: { kind: kindRoutes[kind].slug },
      props: { kind, all: posts },
    }),
  );
}

export async function tagPaths(lang: Lang, paginate: PaginateFunction) {
  const posts = await getPosts(lang);
  return getTags(posts).flatMap(([tag]) =>
    paginate(posts.filter((p) => p.data.tags.includes(tag)), {
      pageSize: PAGE_SIZE,
      params: { tag: tagSlug(tag) },
      props: { tag, all: posts },
    }),
  );
}

export async function yearPaths(lang: Lang) {
  const years = groupByYear(await getPosts(lang));
  return years.map(([year, posts], i) => ({
    params: { year: String(year) },
    props: { year, posts, newer: years[i - 1]?.[0], older: years[i + 1]?.[0] },
  }));
}

export async function postPaths(lang: Lang) {
  const posts = await getPosts(lang);
  return posts.map((post, i) => ({
    params: { slug: postSlug(post) },
    props: { post, newer: posts[i - 1], older: posts[i + 1] },
  }));
}
