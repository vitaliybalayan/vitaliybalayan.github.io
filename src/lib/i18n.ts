/**
 * Два языка: русский в корне, английский под /en/.
 * Язык страницы берётся из Astro.currentLocale (настроено в astro.config.mjs).
 */
export const LANGS = ['ru', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ru';

export const toLang = (locale: string | undefined): Lang => (locale === 'en' ? 'en' : 'ru');

/** Путь внутри сайта с учётом языка: localePath('en', '/works/') → '/en/works/'. */
export const localePath = (lang: Lang, path: string) => (lang === DEFAULT_LANG ? path : `/${lang}${path}`);

/** Убирает языковой префикс: '/en/works/' → '/works/'. */
export const stripLang = (path: string) => path.replace(/^\/en(\/|$)/, '/');

export const dateLocale: Record<Lang, string> = { ru: 'ru-RU', en: 'en-US' };

const dict = {
  ru: {
    name: 'Виталий Балаян',
    tagline: 'лог работ',
    ogLocale: 'ru_RU',
    switchTo: 'English',
    switchShort: 'EN',
    telegram: 'Связаться',
    telegramAria: 'Написать мне в Telegram',
    nav: { feed: 'Лента', works: 'Работы', archive: 'Архив', about: 'Обо мне' },
    navAria: 'Основная навигация',
    searchAria: 'Поиск',
    themeAria: 'Переключить тему',
    kinds: { release: 'Релиз', work: 'Работа', photo: 'Фото', video: 'Видео', note: 'Заметка' },
    kindRoutes: { work: 'Работы', release: 'Релизы', note: 'Заметки' },
    entries: 'записей',
    empty: 'Пока пусто — первая запись скоро.',
    filter: { aria: 'Фильтр ленты', all: 'Всё', tags: 'Теги', allTags: 'все теги →', reset: '× сбросить' },
    pager: { aria: 'Страницы', newer: '← новее', older: 'старее →', page: 'стр.' },
    home: {
      title: 'Виталий Балаян — лог работ',
      description: 'Хронология моих работ, релизов и заметок.',
      h1: 'Лог работ',
      intro: 'Лента работ, релизов и заметок — между блогом и changelog. Новое сверху.',
      updated: 'обновлено',
      fullArchive: 'Весь архив',
    },
    about: {
      title: 'Обо мне',
      description: 'Software Engineer: веб, мобильная разработка, backend и ИИ.',
      paragraphs: [
        'Я Виталий — software engineer. Делаю веб- и мобильные приложения, backend-системы и инструменты.',
        'Здесь я веду лог: что сделал, что выпустил, что снял',
      ],
      contact: 'Связаться',
      topics: 'Темы',
    },
    search: {
      title: 'Поиск',
      description: 'Поиск по записям',
      placeholder: 'Что ищем?',
      aria: 'Поиск по записям',
      devOnly: 'Поиск работает в собранной версии сайта (npm run build && npm run preview).',
      found: 'Найдено:',
      nothing: 'Ничего не найдено',
    },
    archive: { title: 'Архив', description: 'Все записи по годам', back: '← Архив', year: (y: number) => `Записи за ${y} год`, yearsAria: 'Годы' },
    post: { back: '← Лента', adjacentAria: 'Соседние записи', older: '← раньше', newer: 'позже →' },
    tags: { title: 'Теги', description: 'Все темы записей', count: 'тегов', withTag: (t: string) => `Записи с тегом ${t}` },
    rss: { title: 'Виталий Балаян — лог работ', description: 'Работы, релизы, фото и видео' },
  },
  en: {
    name: 'Vitaliy Balayan',
    tagline: 'work log',
    ogLocale: 'en_US',
    switchTo: 'Русский',
    switchShort: 'RU',
    telegram: 'Contact me',
    telegramAria: 'Message me on Telegram',
    nav: { feed: 'Feed', works: 'Works', archive: 'Archive', about: 'About' },
    navAria: 'Main navigation',
    searchAria: 'Search',
    themeAria: 'Toggle theme',
    kinds: { release: 'Release', work: 'Work', photo: 'Photo', video: 'Video', note: 'Note' },
    kindRoutes: { work: 'Works', release: 'Releases', note: 'Notes' },
    entries: 'entries',
    empty: 'Nothing here yet — the first entry is coming soon.',
    filter: { aria: 'Feed filter', all: 'All', tags: 'Tags', allTags: 'all tags →', reset: '× reset' },
    pager: { aria: 'Pages', newer: '← newer', older: 'older →', page: 'p.' },
    home: {
      title: 'Vitaliy Balayan — work log',
      description: 'A timeline of my work, releases and notes.',
      h1: 'Work log',
      intro: 'A feed of work, releases and notes — somewhere between a blog and a changelog. Newest first.',
      updated: 'updated',
      fullArchive: 'Full archive',
    },
    about: {
      title: 'About',
      description: 'Software Engineer: web, mobile, backend and AI.',
      paragraphs: [
        'I’m Vitaliy, a software engineer. I build web and mobile apps, backend systems and tools.',
        'This is my log: what I’ve built, shipped and filmed.',
      ],
      contact: 'Contact',
      topics: 'Topics',
    },
    search: {
      title: 'Search',
      description: 'Search all entries',
      placeholder: 'What are you looking for?',
      aria: 'Search entries',
      devOnly: 'Search works in the built site (npm run build && npm run preview).',
      found: 'Found:',
      nothing: 'Nothing found',
    },
    archive: { title: 'Archive', description: 'All entries by year', back: '← Archive', year: (y: number) => `Entries from ${y}`, yearsAria: 'Years' },
    post: { back: '← Feed', adjacentAria: 'Adjacent entries', older: '← earlier', newer: 'later →' },
    tags: { title: 'Tags', description: 'All entry topics', count: 'tags', withTag: (t: string) => `Entries tagged ${t}` },
    rss: { title: 'Vitaliy Balayan — work log', description: 'Work, releases, photos and videos' },
  },
} satisfies Record<Lang, unknown>;

export const t = (lang: Lang) => dict[lang];
