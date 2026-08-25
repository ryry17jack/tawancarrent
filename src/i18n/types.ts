import type { CarCategoryFilter, CarId, ServiceAreaId } from '../data/site';

export const locales = ['th', 'en'] as const;
export type Locale = (typeof locales)[number];

export interface PageMeta {
  title: string;
  description: string;
}

/**
 * Every string the site renders. Both dictionaries are typed against this, so
 * a missing or misspelled key fails `astro check` instead of silently
 * rendering `undefined`.
 */
export interface Dict {
  /** BCP-47 tag for <html lang> and og:locale. */
  htmlLang: string;
  ogLocale: string;
  /** Label for the *other* language in the header toggle. */
  localeName: string;

  legalName: string;
  hours: string;
  location: string;

  nav: { home: string; cars: string; reviews: string; about: string; contact: string };
  navLabel: string;
  skipToContent: string;
  langLabel: string;

  meta: { home: PageMeta; cars: PageMeta; reviews: PageMeta; about: PageMeta; contact: PageMeta; notFound: PageMeta };
  breadcrumbHome: string;

  common: {
    perDay: string;
    seeAll: string;
    bookToday: string;
    callPrefix: string;
    openPrefix: string;
    freeAirport: string;
  };

  home: {
    kicker: string;
    headingLines: [string, string];
    lede: string;
    ctaLine: string;
    ctaCars: string;
    heroPhotoNote: string;
    stats: { n: string; label: string }[];
    carsHeading: string;
    areasHeading: string;
    areasLines: [string, string];
    reviewHeading: string;
    reviewQuote: string;
    reviewBy: string;
    readAllReviews: string;
  };

  cars: {
    kicker: string;
    headingLines: [string, string];
    lede: string;
    filters: Record<CarCategoryFilter, string>;
    filterGroupLabel: string;
    emptyState: string;
    names: Record<CarId, string>;
    specs: Record<CarId, string>;
    /** Home page uses slightly shorter spec lines, as in the design. */
    featuredSpecs: Record<CarId, string>;
    statuses: Record<CarId, string>;
    ratesHeading: string;
    rateColumns: [string, string, string, string];
    rateOnRequest: string;
    notes: { head: string; body: string }[];
  };

  reviews: {
    kicker: string;
    headingLines: [string, string];
    scores: { n: string; label: string }[];
    featuredQuote: string;
    featuredBy: string;
    items: { name: string; place: string; text: string }[];
    starsLabel: (stars: number) => string;
    galleryHeading: string;
    galleryNote: string;
  };

  about: {
    kicker: string;
    headingLines: [string, string];
    paragraphs: [string, string];
    photoNote: string;
    promises: [string, string, string, string];
    insuranceHeading: string;
    insuranceFacts: { k: string; v: string }[];
    areasHeading: string;
    areas: Record<ServiceAreaId, string>;
  };

  contact: {
    kicker: string;
    headingLines: [string, string];
    lede: string;
    channelLine: string;
    channelPhone: string;
    channelFacebook: string;
    facebookName: string;
    shopHeading: string;
    shopFacts: { k: string; v: string }[];
    qrText: string;
    qrNote: string;
    mapNote: string;
  };

  notFound: {
    kicker: string;
    headingLines: [string, string];
    lede: string;
    goHome: string;
    seeCars: string;
  };

  footer: { legalLine: string };

  /** Description used in the LocalBusiness JSON-LD. */
  businessDescription: string;
}
