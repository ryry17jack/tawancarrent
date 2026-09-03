/**
 * Every photo in `src/assets/customers/`, sorted for a stable build-to-build
 * order.
 *
 * `import.meta.glob` rather than `readdirSync`: the files live in `src/` now so
 * Astro can resize and hash them, and that only happens for images the module
 * graph knows about. Eager so the metadata (width/height) is available while
 * rendering, without an await at every call site.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/customers/*.{webp,jpg,jpeg,png}',
  { eager: true },
);

export const customerPhotos: ImageMetadata[] = Object.keys(modules)
  .sort()
  .map((path) => modules[path]!.default);
