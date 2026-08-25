/**
 * Locale-neutral facts: contact details, fleet structure, numeric rates.
 * Anything that changes wording between Thai and English lives in
 * `src/i18n/th.ts` / `src/i18n/en.ts` and is keyed by the ids below — so a
 * price or a phone number exists in exactly one place and cannot drift
 * between the two languages.
 */

export const business = {
  nameEn: 'TAWAN CAR RENT',
  nameTh: 'ตะวันรถเช่าหาดใหญ่',
  phone: '091-046-8118',
  phoneHref: 'tel:0910468118',
  /** E.164 — the form Google and schema.org expect. */
  phoneE164: '+66910468118',
  lineId: '@tawan8118',
  lineUrl: 'https://line.me/R/ti/p/@tawan8118',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063626855628',
  domain: 'tawancarrent.com',
} as const;

/**
 * Local-SEO fields Google weighs heavily for a "near me" business. Fill these
 * in and they flow into the LocalBusiness JSON-LD automatically; left null,
 * they are omitted rather than guessed. Match them exactly to the Google
 * Business Profile listing — inconsistent NAP data is what suppresses a map
 * pack ranking.
 */
export const placeDetails: {
  streetAddress: string | null;
  postalCode: string | null;
  latitude: number | null;
  longitude: number | null;
  /** Google Business Profile / Maps share link. */
  mapUrl: string | null;
} = {
  streetAddress: null,
  postalCode: null,
  latitude: null,
  longitude: null,
  mapUrl: null,
};

/** Route keys. Thai lives at `/…`, English at `/en/…`. */
export const routes = ['home', 'cars', 'reviews', 'about', 'contact'] as const;
export type RouteKey = (typeof routes)[number];

export const routePaths: Record<RouteKey, string> = {
  home: '/',
  cars: '/cars/',
  reviews: '/reviews/',
  about: '/about/',
  contact: '/contact/',
};

export type CarCategory = 'eco' | 'sedan' | 'suv' | 'pickup' | 'van';
export type CarId =
  | 'eco-1200'
  | 'sedan-1500'
  | 'pickup-4door'
  | 'suv-7'
  | 'van-11'
  | 'sedan-1800';

export interface Car {
  id: CarId;
  category: CarCategory;
  /** Latin in both languages, so it is not translated. */
  categoryLabel: string;
  price: number;
  available: boolean;
  /** Featured cars appear in the four-up grid on the home page. */
  featured: boolean;
  /** Drop a file in public/cars/ and point at it to replace the placeholder. */
  photo?: string;
}

export const cars: Car[] = [
  { id: 'eco-1200', category: 'eco', categoryLabel: 'ECO CAR', price: 800, available: true, featured: true },
  { id: 'sedan-1500', category: 'sedan', categoryLabel: 'SEDAN', price: 1000, available: true, featured: true },
  { id: 'pickup-4door', category: 'pickup', categoryLabel: 'PICKUP', price: 1500, available: true, featured: false },
  { id: 'suv-7', category: 'suv', categoryLabel: 'SUV', price: 1800, available: true, featured: true },
  { id: 'van-11', category: 'van', categoryLabel: 'VAN', price: 2500, available: true, featured: true },
  { id: 'sedan-1800', category: 'sedan', categoryLabel: 'SEDAN', price: 1200, available: false, featured: false },
];

export const carCategoryIds = ['all', 'eco', 'sedan', 'suv', 'pickup', 'van'] as const;
export type CarCategoryFilter = (typeof carCategoryIds)[number];

/** Home page featured grid, in the mockup's order. */
export const featuredCarIds: CarId[] = ['eco-1200', 'sedan-1500', 'suv-7', 'van-11'];

/** Numeric rate table. `long` is quoted on request in both languages. */
export const rates: { id: CarId; short: number; mid: number }[] = [
  { id: 'eco-1200', short: 800, mid: 750 },
  { id: 'sedan-1500', short: 1000, mid: 950 },
  { id: 'pickup-4door', short: 1500, mid: 1400 },
  { id: 'suv-7', short: 1800, mid: 1700 },
  { id: 'van-11', short: 2500, mid: 2400 },
];

/** Review authors: initials and star counts are language-neutral. */
export const reviewMeta: { id: string; stars: number }[] = [
  { id: 'b', stars: 5 },
  { id: 'c', stars: 5 },
  { id: 'd', stars: 5 },
  { id: 'e', stars: 5 },
  { id: 'f', stars: 4 },
  { id: 'g', stars: 5 },
];

export const serviceAreaIds = [
  'hatyai', 'songkhla', 'phatthalung', 'satun', 'pattani', 'yala', 'narathiwat', 'trang',
] as const;
export type ServiceAreaId = (typeof serviceAreaIds)[number];

/** Total cars on the lot; the grid lists the models currently published. */
export const fleetSize = 12;
