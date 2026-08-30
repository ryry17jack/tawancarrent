import { readdirSync } from 'node:fs';
import { join } from 'node:path';

// `import.meta.url`-relative resolution breaks once Astro bundles this module
// into dist/.prerender/chunks/, so resolve from the project root instead —
// astro dev and astro build both run with that as the working directory.
const dir = join(process.cwd(), 'public', 'customers');

/** Every photo in `public/customers/`, sorted for a stable build-to-build order. */
export const customerPhotos: string[] = readdirSync(dir)
  .filter((f) => /\.(webp|jpe?g|png)$/i.test(f))
  .sort()
  .map((f) => `/customers/${f}`);
