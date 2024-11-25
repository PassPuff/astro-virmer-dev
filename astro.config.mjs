import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

export default defineConfig({
  output: "server",

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  adapter: node({
    mode: 'standalone'
  })
});