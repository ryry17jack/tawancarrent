import type { Dict } from './types';

export const en: Dict = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  localeName: 'English',

  legalName: 'Tawan Car Rent Hat Yai Limited Partnership',
  hours: '07:00–22:00 daily',
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
        'Customer reviews of Tawan Car Rent Hat Yai — Clean cars, cold air conditioning, on-time airport pickup.',
    },
    about: {
      title: 'About Us | Tawan Car Rent Hat Yai',
      description:
        'Tawan Car Rent has offered affordable car rental across Hat Yai, Songkhla and southern Thailand for more than 5 years. Simple paperwork, no credit card needed.',
    },
    contact: {
      title: 'Contact & Location — LINE @tawan8118 | Tawan Car Rent Hat Yai',
      description:
        'Contact Tawan Car Rent Hat Yai. Add us on LINE @tawan8118 or call 091-046-8118. Open daily 07:00–22:00 with free Hat Yai airport transfer.',
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
    areasLines: ['Hat Yai · Songkhla', 'and all of Southern Thailand'],
    reviewHeading: 'Our customers',
    readAllReviews: 'See all customer photos →',
  },

  cars: {
    kicker: 'OUR CARS',
    headingLines: ['{n} cars', 'for rent'],
    lede: 'Daily rates include first-class insurance · Discounts on rentals of 3 days or more',
    filters: {
      all: 'All',
      eco: 'Eco car',
      suv: 'SUV',
    },
    filterGroupLabel: 'Filter by vehicle type',
    emptyState: 'Nothing in this class is free right now · Message us on LINE and we will check.',
    names: {
      'vios-2020': 'Toyota Vios 2020',
      'ativ-2021': 'Toyota Ativ 2021',
      'ativ-2024': 'Toyota Ativ 2024',
      'veloz-2026': 'Toyota Veloz 2026',
    },
    specs: {
      'vios-2020': '4 seats · Automatic · 2 bags',
      'ativ-2021': '4 seats · Automatic · 2 bags',
      'ativ-2024': '4 seats · Automatic · 2 bags',
      'veloz-2026': '7 seats · Automatic · Built for long trips',
    },
    featuredSpecs: {
      'vios-2020': '4 seats · Automatic · Fuel-efficient',
      'ativ-2021': '4 seats · Automatic · Fuel-efficient',
      'ativ-2024': '4 seats · Automatic · Latest model',
      'veloz-2026': '7 seats · Automatic · Built for long trips',
    },
    statuses: {
      'vios-2020': 'AVAILABLE',
      'ativ-2021': 'AVAILABLE',
      'ativ-2024': 'AVAILABLE',
      'veloz-2026': 'AVAILABLE',
    },
    ratesHeading: 'Rates',
    rateColumns: ['Vehicle', 'THB / day', '7 days / monthly'],
    rateOnRequest: 'Ask us',
    notes: [
      { head: 'What you need', body: 'ID or passport · Driving licence<br>No credit card required' },
      { head: 'Included in the price', body: 'First-class insurance · Compulsory motor insurance<br>Free Hat Yai airport transfer' },
      { head: 'Payment', body: 'Cash · Bank transfer<br>Receipts and tax invoices available' },
    ],
    documentsHeading: 'Documents Required to Rent a Car',
    documentGroups: [
      {
        heading: 'For travelers',
        items: ['ID card / Passport', 'Driving licence', 'Round-trip flight ticket'],
      },
      {
        heading: 'For students / civil servants / employees',
        items: ['ID card', 'Driving licence', 'Student ID / Civil servant ID / Employee ID'],
      },
      {
        heading: 'For business owners / entrepreneurs',
        items: ['ID card', 'Driving licence', 'Commercial registration certificate'],
      },
      {
        heading: 'For those bringing a car in for service',
        items: ['ID card', 'Driving licence', 'Vehicle registration', 'Service receipt from the garage or service center'],
      },
    ],
  },

  reviews: {
    kicker: 'CUSTOMER REVIEWS',
    headingLines: ['Thank you to', 'our customers'],
    scores: [
      { n: '5+', label: 'Years in business' },
    ],
    galleryNote: 'Real handover photos from our customers, updated regularly.',
    loadMore: 'Load more photos',
  },

  about: {
    kicker: 'ABOUT US',
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
      southern: 'All of Southern Thailand',
    },
    registrationHeading: 'Business Registration',
    registrationNote: 'Registered and licensed to operate',
  },

  contact: {
    kicker: 'CONTACT / LOCATION',
    headingLines: ['Add us on LINE', '@tawan8118'],
    lede: 'We reply every day, 07:00–22:00 · Call 091-046-8118',
    channelLine: 'LINE OFFICIAL',
    channelPhone: 'PHONE',
    channelFacebook: 'FACEBOOK',
    facebookName: 'ตะวันรถเช่าหาดใหญ่ราคาถูก →',
    shopHeading: 'Shop details',
    shopFacts: [
      { k: 'Location', v: 'Hat Yai, Songkhla' },
      { k: 'Opening hours', v: '07:00–22:00 daily' },
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
