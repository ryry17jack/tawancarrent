import type { CarCategoryFilter, CarId, LandingId, ServiceAreaId } from '../data/site';

export const locales = ['th', 'en'] as const;
export type Locale = (typeof locales)[number];

export interface PageMeta {
  title: string;
  description: string;
}

/**
 * One query-specific landing page. `navLabel` is the short form used in the
 * footer link list and the breadcrumb; `heading` is the H1 and carries the
 * full search phrase.
 */
export interface LandingCopy {
  meta: PageMeta;
  navLabel: string;
  kicker: string;
  heading: string;
  lede: string;
  /** Body copy, one <p> each. */
  intro: string[];
  /** The reasons-to-book list. */
  points: string[];
  /** Page-specific Q&A, mirrored into FAQPage JSON-LD. */
  faq: { q: string; a: string }[];
  /** Heading above the three cars this page leads with. */
  carsHeading: string;
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

  /**
   * Real alt text for the photos. Kept apart from the design's placeholder
   * captions (`heroPhotoNote`, `photoNote`, …) — those describe the *slot* for
   * a human reading the mockup and are useless to a screen reader or to image
   * search.
   */
  alt: {
    heroBanner: string;
    /** `{n}` is replaced with the photo's 1-based index. */
    customerPhoto: string;
    registration: string;
  };

  /**
   * Long-tail question/answer pairs. Rendered on the home page and mirrored
   * into FAQPage JSON-LD, so the phrasing here should match how people
   * actually type the question into Google.
   */
  faq: {
    heading: string;
    lede: string;
    items: { q: string; a: string }[];
  };

  /** The always-visible LINE / call buttons. */
  floatingCta: { groupLabel: string; line: string; call: string };

  /** Footer heading above the landing-page link list. */
  landingsHeading: string;
  landings: Record<LandingId, LandingCopy>;

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
    rateColumns: [string, string, string];
    rateOnRequest: string;
    notes: { head: string; body: string }[];
    documentsHeading: string;
    documentGroups: { heading: string; items: string[] }[];
  };

  reviews: {
    kicker: string;
    headingLines: [string, string];
    scores: { n: string; label: string }[];
    galleryNote: string;
    loadMore: string;
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
    registrationHeading: string;
    registrationNote: string;
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
