// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vitaliybalayan.github.io',
  integrations: [react(), sitemap({ i18n: { defaultLocale: 'ru', locales: { ru: 'ru-RU', en: 'en-US' } } })],
  output: 'static',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
