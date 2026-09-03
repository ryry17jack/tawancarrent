// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output — Cloudflare Workers Static Assets serves `dist/` off the edge.
// No adapter is needed while every route is prerendered; add
// @astrojs/cloudflare only if a route later needs server rendering.
export default defineConfig({
  site: 'https://tawancarrent.com',
  output: 'static',
  // Thai is the default locale and stays unprefixed at `/`; English lives
  // under `/en/`. Both are prerendered.
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
  // Every <Image> is emitted as a hashed, compressed derivative under
  // /_astro/ with a width/height baked in, so images cannot shift the layout
  // and are served immutable-cached. `constrained` is the right default for a
  // photo that fills its slot but never upscales past its intrinsic size.
  image: {
    layout: 'constrained',
    responsiveStyles: true,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      // 404 is noindex; keeping it out of the sitemap avoids sending Google a
      // contradictory signal.
      filter: (page) => !page.includes('/404'),
      // Emits xhtml:link alternates so Google sees the two locales as one page
      // in two languages rather than duplicate content.
      i18n: {
        defaultLocale: 'th',
        locales: { th: 'th-TH', en: 'en' },
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.lastmod = new Date().toISOString();
        item.changefreq = path === '/' || path === '/cars/' ? 'weekly' : 'monthly';
        // Landing routes sit above the brochure pages (/about/, /contact/) and
        // below /cars/: they are the pages built to win a specific query.
        item.priority =
          path === '/' ? 1.0
          : path === '/cars/' ? 0.9
          : /^\/(en\/)?rent\//.test(path) ? 0.8
          : 0.7;
        return item;
      },
    }),
  ],
  vite: {
    build: {
      // Without an explicit target, Lightning CSS emits media-query range
      // syntax (`@media (width<=700px)`), which Safari/iOS below 16.4 ignore
      // outright — every responsive breakpoint would silently fail there and
      // phones would get the desktop layout.
      cssTarget: ['safari15', 'ios15', 'chrome90', 'edge90', 'firefox90'],
    },
    server: {
      // Bind mounts on Windows/macOS do not forward inotify events into a
      // container, so the dev server polls instead. Set by compose.yaml.
      watch: process.env.DOCKER_POLLING ? { usePolling: true, interval: 400 } : undefined,
    },
  },
});
