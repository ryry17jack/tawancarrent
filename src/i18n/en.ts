import type { Dict } from './types';

export const en: Dict = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  localeName: 'English',

  legalName: 'Tawan Car Rent Hat Yai Limited Partnership',
  hours: '08:00–20:00 daily',
  location: 'Hat Yai, Songkhla',

  nav: { home: 'Home', cars: 'Our cars', reviews: 'Reviews', about: 'About', contact: 'Contact' },
  navLabel: 'Main menu',
  skipToContent: 'Skip to main content',
  langLabel: 'Choose language',

  meta: {
    home: {
      title: 'Car Rental in Hat Yai from ฿800/day | Tawan Car Rent',
      description:
        'Car rental in Hat Yai, Songkhla. No credit card required, free Hat Yai airport pickup, first-class insurance on every car. From ฿800 a day. Call 091-046-8118.',
    },
    cars: {
      title: 'Our Cars & Daily Rates | Tawan Car Rent Hat Yai',
      description:
        'Cars for rent in Hat Yai: eco cars, sedans, pickups, SUVs and vans from ฿800 to ฿2,500 a day. First-class insurance included, discounts from 3 days.',
    },
    reviews: {
      title: 'Customer Reviews | Tawan Car Rent Hat Yai',
      description:
        'Customer reviews of Tawan Car Rent Hat Yai — 4.9 average from more than 320 reviews. Clean cars, cold air conditioning, on-time airport pickup.',
    },
    about: {
      title: 'About Us | Tawan Car Rent Hat Yai',
      description:
        'Tawan Car Rent has offered affordable car rental across Hat Yai, Songkhla and southern Thailand for more than 5 years. Simple paperwork, no credit card needed.',
    },
    contact: {
      title: 'Contact & Location — LINE @tawan8118 | Tawan Car Rent Hat Yai',
      description:
        'Contact Tawan Car Rent Hat Yai. Add us on LINE @tawan8118 or call 091-046-8118. Open daily 08:00–20:00 with free Hat Yai airport transfer.',
    },
    notFound: {
      title: 'Page Not Found | Tawan Car Rent Hat Yai',
      description: 'We could not find that page. Head back to the home page or reach us on LINE @tawan8118.',
    },
  },
  breadcrumbHome: 'Home',

  common: {
    perDay: 'THB / day',
    seeAll: 'See all →',
    bookToday: 'Book a car today',
    callPrefix: 'Call',
    openPrefix: 'Open',
    freeAirport: 'Free Hat Yai airport transfer',
  },

  home: {
    kicker: 'CAR RENTAL · HAT YAI · SONGKHLA · SOUTHERN THAILAND',
    headingLines: ['Rent a car', 'from ฿800'],
    lede: 'No credit card required · Free airport pickup · First-class insurance on every car',
    ctaLine: 'Add us on LINE @tawan8118',
    ctaCars: 'See all cars',
    heroPhotoNote: 'full-bleed photo — the fleet outside the shop',
    stats: [
      { n: '5+', label: 'Years in business' },
      { n: 'Free', label: 'Airport transfer' },
      { n: 'Class 1', label: 'Insurance on every car' },
      { n: '0', label: 'Credit cards required' },
    ],
    carsHeading: 'Our cars',
    areasHeading: 'Where we deliver',
    areasLines: ['Hat Yai · Songkhla · Phatthalung', 'Satun · Pattani · Yala · Narathiwat'],
    reviewHeading: 'What customers say',
    reviewQuote: '“Picked the car up at the airport right on time. Clean car, ice-cold air con.”',
    reviewBy: 'Khun A · Bangkok',
    readAllReviews: 'Read all reviews →',
  },

  cars: {
    kicker: '02 · OUR CARS',
    headingLines: ['{n} cars', 'for rent'],
    lede: 'Daily rates include first-class insurance · Discounts on rentals of 3 days or more',
    filters: {
      all: 'All',
      eco: 'Eco car',
      sedan: 'Sedan',
      suv: 'SUV',
      pickup: 'Pickup',
      van: 'Van',
    },
    filterGroupLabel: 'Filter by vehicle type',
    emptyState: 'Nothing in this class is free right now · Message us on LINE and we will check.',
    names: {
      'eco-1200': 'Eco car 1.2',
      'sedan-1500': 'Sedan 1.5',
      'pickup-4door': '4-door pickup',
      'suv-7': 'SUV, 7 seats',
      'van-11': 'Van, 11 seats',
      'sedan-1800': 'Sedan 1.8',
    },
    specs: {
      'eco-1200': '4 seats · Automatic · 2 bags',
      'sedan-1500': '5 seats · Automatic · 3 bags',
      'pickup-4door': '5 seats · Automatic · Cargo bed',
      'suv-7': '7 seats · Automatic · Built for long trips',
      'van-11': '11 seats · Driver available',
      'sedan-1800': '5 seats · Automatic',
    },
    featuredSpecs: {
      'eco-1200': '4 seats · Automatic · Fuel-efficient',
      'sedan-1500': '5 seats · Automatic · Cold air con',
      'pickup-4door': '5 seats · Automatic · Cargo bed',
      'suv-7': '7 seats · Automatic · Built for long trips',
      'van-11': '11 seats · Driver available',
      'sedan-1800': '5 seats · Automatic',
    },
    statuses: {
      'eco-1200': 'AVAILABLE',
      'sedan-1500': 'AVAILABLE',
      'pickup-4door': 'AVAILABLE',
      'suv-7': '2 AVAILABLE',
      'van-11': 'AVAILABLE',
      'sedan-1800': 'BOOKED UNTIL 25 AUG',
    },
    ratesHeading: 'Rates',
    rateColumns: ['Vehicle', '1–2 days', '3–6 days', '7 days / monthly'],
    rateOnRequest: 'Ask us',
    notes: [
      { head: 'What you need', body: 'ID or passport · Driving licence<br>No credit card required' },
      { head: 'Included in the price', body: 'First-class insurance · Compulsory motor insurance<br>Free Hat Yai airport transfer' },
      { head: 'Payment', body: 'Cash · Bank transfer<br>Receipts and tax invoices available' },
    ],
  },

  reviews: {
    kicker: '03 · CUSTOMER REVIEWS',
    headingLines: ['Thank you to', 'our customers'],
    scores: [
      { n: '4.9', label: 'Average rating' },
      { n: '320+', label: 'Customer reviews' },
      { n: '5+', label: 'Years in business' },
    ],
    featuredQuote:
      '“Picked the car up at Hat Yai airport right on time. Clean car, ice-cold air con — I will rent here again.”',
    featuredBy: 'Khun A · Bangkok · 4-day rental',
    items: [
      { name: 'Khun B', place: 'Pattani', text: 'The paperwork really is simple, no credit card needed, and cheaper than anywhere else I have rented.' },
      { name: 'Khun C', place: 'Songkhla', text: 'I rent every month. They issue invoices, so claiming it back from the company is easy, and they reply fast on LINE.' },
      { name: 'Khun D', place: 'Yala', text: 'They collected me from the airport for free, which saved a lot on taxis. Newer car and it drove well.' },
      { name: 'Khun E', place: 'Narathiwat', text: 'Took the family on a trip in the 11-seat van. Comfortable, and the air con was cold throughout.' },
      { name: 'Khun F', place: 'Satun', text: 'Clear pricing with nothing added on. Returning the car was easy and the staff were polite.' },
      { name: 'Khun G', place: 'Phatthalung', text: 'Booked over LINE late at night and they replied straight away. Collected the car first thing next morning.' },
    ],
    starsLabel: (stars) => `Rated ${stars} out of 5 stars`,
    galleryHeading: 'Photos from customers',
    galleryNote: 'customer photos — handover shots sent in by renters',
  },

  about: {
    kicker: '04 · ABOUT US',
    headingLines: ['Tawan Car Rent', 'Hat Yai'],
    paragraphs: [
      'Welcome to Tawan Car Rent Hat Yai. We offer affordable car rental across Hat Yai, Songkhla province and the whole of southern Thailand. We keep a wide range of models so there is something that genuinely fits how you plan to use it. Renting is easy and convenient, the paperwork is straightforward, and you do not need a credit card.',
      'We have been trading for more than five years, and customers come back because the service is dependable and safe. Every car is cleaned before it is handed over, and every car is chosen to be economical to run. Easy, comfortable and safe — that is Tawan Car Rent.',
    ],
    photoNote: 'photo — the team / the shopfront',
    promises: [
      'Easy, convenient renting',
      'Ice-cold air conditioning',
      'Thoroughly cleaned cars',
      'Fuel-efficient and easy on your wallet',
    ],
    insuranceHeading: 'Insurance & paperwork',
    insuranceFacts: [
      { k: 'Insurance', v: 'First class, every car' },
      { k: 'Compulsory motor insurance', v: 'Included in the rate' },
      { k: 'Tax invoice', v: 'Available on request' },
      { k: 'Credit card', v: 'Not required' },
    ],
    areasHeading: 'Where we deliver',
    areas: {
      hatyai: 'Hat Yai',
      songkhla: 'Songkhla',
      phatthalung: 'Phatthalung',
      satun: 'Satun',
      pattani: 'Pattani',
      yala: 'Yala',
      narathiwat: 'Narathiwat',
      trang: 'Trang',
    },
  },

  contact: {
    kicker: '05 · CONTACT / LOCATION',
    headingLines: ['Add us on LINE', '@tawan8118'],
    lede: 'We reply every day, 08:00–20:00 · Call 091-046-8118',
    channelLine: 'LINE OFFICIAL',
    channelPhone: 'PHONE',
    channelFacebook: 'FACEBOOK',
    facebookName: 'Tawan Car Rent →',
    shopHeading: 'Shop details',
    shopFacts: [
      { k: 'Location', v: 'Hat Yai, Songkhla' },
      { k: 'Opening hours', v: '08:00–20:00 daily' },
      { k: 'Transfers', v: 'Free — Hat Yai airport<br>and nearby areas' },
      { k: 'Payment', v: 'Cash · Transfer · Invoices available' },
    ],
    qrText: 'Scan the QR code to add us on LINE',
    qrNote: 'qr code placeholder',
    mapNote: 'map — shop location in Hat Yai',
  },

  notFound: {
    kicker: '404 · PAGE NOT FOUND',
    headingLines: ['We could not find', 'that page'],
    lede: 'The link may have moved or been mistyped · Ask us on LINE @tawan8118 about available cars',
    goHome: 'Back to home',
    seeCars: 'See all cars',
  },

  footer: {
    legalLine: 'Tawan Car Rent Hat Yai Limited Partnership · Hat Yai, Songkhla · tawancarrent.com',
  },

  businessDescription:
    'Car rental in Hat Yai, Songkhla province and southern Thailand. No credit card required, free Hat Yai airport transfer, first-class insurance on every car.',
};
