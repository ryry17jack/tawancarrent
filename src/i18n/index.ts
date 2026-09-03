import { landingSlugs, routePaths, type LandingId, type RouteKey } from '../data/site';
import { en } from './en';
import { th } from './th';
import { locales, type Dict, type Locale } from './types';

export { locales };
export type { Dict, Locale };
export type { PageMeta } from './types';

export const defaultLocale: Locale = 'th';

export const dictionaries: Record<Locale, Dict> = { th, en };

export const t = (locale: Locale): Dict => dictionaries[locale];

/**
 * Turn a route key into the path for a locale. Thai is unprefixed (`/cars/`),
 * English is prefixed (`/en/cars/`).
 */
export function pathFor(route: RouteKey, locale: Locale): string {
  const base = routePaths[route];
  if (locale === defaultLocale) return base;
  return base === '/' ? '/en/' : `/en${base}`;
}

/**
 * Path for a landing route. Same prefixing rule as `pathFor`, so
 * `switchLocalePath` round-trips these URLs without a second lookup table.
 */
export function landingPathFor(id: LandingId, locale: Locale): string {
  const base = `/rent/${landingSlugs[id]}/`;
  return locale === defaultLocale ? base : `/en${base}`;
}

/**
 * The counterpart of a path in the other locale — what the header toggle links
 * to. Derived from the path rather than a lookup table, so the two locales
 * cannot drift out of step when a route is added.
 */
export function switchLocalePath(pathname: string, to: Locale): string {
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const isEnglish = withSlash === '/en/' || withSlash.startsWith('/en/');
  const bare = isEnglish ? withSlash.slice(3) || '/' : withSlash;

  if (to === defaultLocale) return bare;
  return bare === '/' ? '/en/' : `/en${bare}`;
}

/** Locale implied by a URL path. */
export function localeFromPath(pathname: string): Locale {
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return withSlash === '/en/' || withSlash.startsWith('/en/') ? 'en' : 'th';
}

export const otherLocale = (locale: Locale): Locale => (locale === 'th' ? 'en' : 'th');
