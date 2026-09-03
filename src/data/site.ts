import ativ2021 from '../assets/cars/ativ-2021.jpg';
import ativ2024 from '../assets/cars/ativ-2024.jpg';
import veloz2026 from '../assets/cars/veloz-2026.jpg';
import vios2020 from '../assets/cars/vios-2020.jpg';

/**
 * Locale-neutral facts: contact details, fleet structure, numeric rates.
 * Anything that changes wording between Thai and English lives in
 * `src/i18n/th.ts` / `src/i18n/en.ts` and is keyed by the ids below — so a
 * price or a phone number exists in exactly one place and cannot drift
 * between the two languages.
 */

export const business = {
  nameEn: 'TAWAN CAR RENT',
  nameTh: 'ตะวันเช่ารถหาดใหญ่',
  phone: '091-046-8118',
  phoneHref: 'tel:0910468118',
  /** E.164 — the form Google and schema.org expect. */
  phoneE164: '+66910468118',
  lineId: '@tawan8118',
  lineUrl: 'https://line.me/R/ti/p/@tawan8118',
  facebookUrl:
    'https://www.facebook.com/people/%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%96%E0%B8%B9%E0%B8%81/100063626855628/',
  domain: 'tawancarrent.com',
} as const;

/**
 * The name variants people actually search for and that the shop is referred
 * to by elsewhere — the Facebook page is "ตะวันรถเช่าหาดใหญ่ราคาถูก" while the
 * registration reads "ตะวันเช่ารถหาดใหญ่", and both word orders get typed.
 * Emitted as `alternateName` so Google resolves every variant to one entity
 * instead of treating them as unrelated businesses.
 */
export const searchNames = [
  'ตะวันเช่ารถหาดใหญ่',
  'ตะวันเช่ารถหาดใหญ่ราคาถูก',
  'ตะวันรถเช่าหาดใหญ่',
  'ตะวันรถเช่าหาดใหญ่ราคาถูก',
  'รถเช่าหาดใหญ่ราคาถูก',
  'Tawan Car Rent',
  'Tawan Car Rent Hat Yai',
] as const;

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
  streetAddress: '65 ถ. กาญจนวนิช ตำบลบ้านพรุ อำเภอหาดใหญ่ สงขลา',
  postalCode: '90250',
  latitude: 6.96820192547131,
  longitude: 100.47673658523811,
  mapUrl: 'https://maps.app.goo.gl/UxzDascrUVEbbsSp9',
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

export type CarCategory = 'eco' | 'suv';
export type CarId =
  | 'vios-2020'
  | 'ativ-2021'
  | 'ativ-2024'
  | 'veloz-2026';

export interface Car {
  id: CarId;
  category: CarCategory;
  /** Latin in both languages, so it is not translated. */
  categoryLabel: string;
  price: number;
  available: boolean;
  /** Featured cars appear in the four-up grid on the home page. */
  featured: boolean;
  /**
   * Imported from `src/assets/cars/` rather than referenced by URL, so Astro
   * emits hashed, resized derivatives and the intrinsic size is known at build
   * time (no layout shift). Drop a file there and import it above.
   */
  photo?: ImageMetadata;
}

export const cars: Car[] = [
  { id: 'vios-2020', category: 'eco', categoryLabel: 'ECO CAR', price: 800, available: true, featured: true, photo: vios2020 },
  { id: 'ativ-2021', category: 'eco', categoryLabel: 'ECO CAR', price: 800, available: true, featured: true, photo: ativ2021 },
  { id: 'ativ-2024', category: 'eco', categoryLabel: 'ECO CAR', price: 900, available: true, featured: true, photo: ativ2024 },
  { id: 'veloz-2026', category: 'suv', categoryLabel: 'SUV', price: 1500, available: true, featured: true, photo: veloz2026 },
];

export const carCategoryIds = ['all', 'eco', 'suv'] as const;
export type CarCategoryFilter = (typeof carCategoryIds)[number];

/** Home page featured grid, in the mockup's order. */
export const featuredCarIds: CarId[] = ['vios-2020', 'ativ-2021', 'ativ-2024', 'veloz-2026'];

/** Numeric rate table. `long` is quoted on request in both languages. */
export const rates: { id: CarId; short: number; }[] = [
  { id: 'vios-2020', short: 800 },
  { id: 'ativ-2021', short: 800 },
  { id: 'ativ-2024', short: 900 },
  { id: 'veloz-2026', short: 1500 },
];

export const serviceAreaIds = [
  'hatyai', 'songkhla', 'southern'
] as const;
export type ServiceAreaId = (typeof serviceAreaIds)[number];

/** Total cars on the lot; the grid lists the models currently published. */
export const fleetSize = 4;

/**
 * Query-specific landing routes. Each one exists because people type that
 * exact phrase into Google and the five brochure pages answer it only in
 * passing — `/cars/` is about the fleet, not about "เช่ารถสนามบินหาดใหญ่".
 * The slugs stay ASCII so the URL survives being pasted into LINE or a
 * Facebook post without percent-encoding swallowing it.
 */
export const landingIds = [
  'airport',
  'monthly',
  'no-credit-card',
  'seven-seater',
  'eco-car',
  'songkhla',
] as const;
export type LandingId = (typeof landingIds)[number];

/** Path segment under `/rent/`, keyed by landing id. */
export const landingSlugs: Record<LandingId, string> = {
  airport: 'hatyai-airport',
  monthly: 'monthly',
  'no-credit-card': 'no-credit-card',
  'seven-seater': '7-seater',
  'eco-car': 'eco-car',
  songkhla: 'songkhla',
};

/** Which cars each landing page leads with. */
export const landingCarIds: Record<LandingId, CarId[]> = {
  airport: ['vios-2020', 'ativ-2024', 'veloz-2026'],
  monthly: ['vios-2020', 'ativ-2021', 'ativ-2024'],
  'no-credit-card': ['vios-2020', 'ativ-2021', 'ativ-2024'],
  'seven-seater': ['veloz-2026', 'ativ-2024', 'vios-2020'],
  'eco-car': ['vios-2020', 'ativ-2021', 'ativ-2024'],
  songkhla: ['ativ-2024', 'veloz-2026', 'vios-2020'],
};
