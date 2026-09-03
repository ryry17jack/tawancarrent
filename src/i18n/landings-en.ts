import type { LandingId } from '../data/site';
import type { LandingCopy } from './types';

/**
 * English copy for the `/en/rent/` landing routes — the counterpart of
 * `landings-th.ts`. Written for how an English-speaking visitor searches
 * ("car rental Hat Yai airport", "monthly car rental Hat Yai"), which is not a
 * translation of the Thai phrasing; the two dictionaries deliberately do not
 * mirror each other sentence for sentence.
 */
export const landingsEn: Record<LandingId, LandingCopy> = {
  airport: {
    meta: {
      title: 'Hat Yai Airport Car Rental — Free Delivery | Tawan Car Rent',
      description:
        'Car rental at Hat Yai International Airport (HDY) with free delivery to the terminal. No credit card required, from ฿800 a day, first-class insurance included. Send your flight number to LINE @tawan8118.',
    },
    navLabel: 'Hat Yai airport car rental',
    kicker: 'Hat Yai Airport · HDY',
    heading: 'Hat Yai Airport car rental with free delivery to the terminal',
    lede: 'Land, collect the keys, drive — no taxi into town. From ฿800 a day.',
    intro: [
      'Tawan Car Rent delivers to Hat Yai International Airport (HDY) free of charge — no airport surcharge and no delivery fee. Send your flight number and arrival time to LINE @tawan8118 and the car is waiting at the arrivals pick-up point when you walk out. If the flight is delayed, message us and we wait.',
      'Handover takes about ten minutes: inspect the car together, sign, and go. All we need is your passport or ID card and a driving licence — no credit card, no large deposit. You can drop the car back at the airport the same way, which makes this the simplest option for a short trip into Hat Yai and Songkhla.',
    ],
    points: [
      'Free delivery and collection at Hat Yai Airport (HDY)',
      'Daily 07:00–22:00; outside those hours by prior arrangement',
      'From ฿800 a day, first-class insurance and compulsory cover included',
      'No credit card — passport or ID card plus a driving licence',
      'We also deliver to Hat Yai hotels and the railway station',
    ],
    faq: [
      {
        q: 'Is there a surcharge for airport pick-up?',
        a: 'No. Delivery and collection at Hat Yai Airport are free — no delivery fee and no airport surcharge. The daily rate you are quoted is the rate you pay.',
      },
      {
        q: 'What happens if my flight is delayed or lands late?',
        a: 'Give us the flight number in advance on LINE @tawan8118. We track the actual arrival time and move the handover to match. Arrivals after 22:00 are fine when arranged beforehand.',
      },
      {
        q: 'Can I return the car at the airport?',
        a: 'Yes. Agree a drop-off time at the terminal; allow about 30 minutes before check-in.',
      },
    ],
    carsHeading: 'Popular cars for airport pick-up',
  },

  monthly: {
    meta: {
      title: 'Monthly Car Rental Hat Yai — Long-Term Rates | Tawan Car Rent',
      description:
        'Monthly and long-term car rental in Hat Yai. Special rates from seven days, first-class insurance on every car, tax invoices for companies, no credit card required. Ask for a quote on LINE @tawan8118.',
    },
    navLabel: 'Monthly car rental',
    kicker: 'Weekly · Monthly',
    heading: 'Monthly car rental in Hat Yai at long-stay rates',
    lede: 'Seven days or a full month costs less per day — invoices and tax receipts available.',
    intro: [
      'If you need a car for weeks rather than days, the daily rate is the wrong deal. Tawan Car Rent prices weekly and monthly hire separately, and the per-day cost falls the longer you book. It suits staff relocating to Hat Yai, contractors working sites around Songkhla, students staying a whole term, and companies that want a car on hand without buying one.',
      'The monthly rate includes first-class insurance and compulsory cover. Every car is serviced on schedule and cleaned before handover, and if something goes wrong mid-contract we deal with it and lend you a replacement. Companies can be invoiced with a proper tax receipt on their own billing cycle. Tell us the model and the dates and a quote comes back the same day.',
    ],
    points: [
      'Reduced rates from seven days, and a separate monthly rate',
      'First-class and compulsory insurance for the whole contract',
      'Receipts, tax invoices and monthly billing for registered companies',
      'No credit card and no complicated paperwork',
      'A replacement car while yours is in for servicing',
    ],
    faq: [
      {
        q: 'How much is monthly car rental in Hat Yai?',
        a: 'It depends on the model and the length of hire. An eco car works out clearly cheaper per day than the daily rate once you book seven days or more. Message LINE @tawan8118 with the model and dates for a quote.',
      },
      {
        q: 'How large is the deposit on a long rental?',
        a: 'The deposit depends on the model and the contract length. It is generally lower than the big rental chains ask, and no credit card is used as security.',
      },
      {
        q: 'Can a company rent in its own name?',
        a: 'Yes. We need the company registration certificate plus the driver’s ID card and licence, and we issue tax invoices and bill on your company’s cycle.',
      },
    ],
    carsHeading: 'Popular cars for long-term hire',
  },

  'no-credit-card': {
    meta: {
      title: 'Car Rental Hat Yai With No Credit Card | Tawan Car Rent',
      description:
        'Rent a car in Hat Yai without a credit card — ID card or passport and a driving licence is enough. Pay cash or by bank transfer, from ฿800 a day with first-class insurance. LINE @tawan8118.',
    },
    navLabel: 'Rent without a credit card',
    kicker: 'Simple paperwork · Cash or transfer',
    heading: 'Rent a car in Hat Yai without a credit card',
    lede: 'ID or passport plus a driving licence — pay in cash or by bank transfer.',
    intro: [
      'The large rental chains hold a credit card as security, which rules out students, freelancers and anyone who simply does not carry one. Tawan Car Rent does not use a credit card at all: an ID card or passport and a car driving licence are enough, and you can pay in cash or by bank transfer.',
      'We are a registered local operator in Hat Yai, so we check the documents ourselves and decide on the spot — there is no approval system to wait for. Sign, inspect the car together, photograph its condition on both sides, and drive away.',
    ],
    points: [
      'No credit card and no pre-authorisation hold',
      'ID card or passport plus a valid car driving licence',
      'Pay cash or by bank transfer; a receipt every time',
      'The price is fixed up front — no surprise charges on return',
      'First-class and compulsory insurance included in the rate',
    ],
    faq: [
      {
        q: 'Can I really rent a car in Hat Yai without a credit card?',
        a: 'Yes. A credit card is not a condition of hire here. We ask for an ID card or passport, a driving licence, and a deposit set by the model.',
      },
      {
        q: 'Can students rent?',
        a: 'Yes — ID card, driving licence and a student card. Drivers should be 20 or older and hold a car licence.',
      },
      {
        q: 'When is the deposit returned?',
        a: 'On the day you return the car, once the condition and fuel level are checked. We transfer it back immediately or hand it over in cash.',
      },
    ],
    carsHeading: 'Available now, no credit card needed',
  },

  'seven-seater': {
    meta: {
      title: '7-Seater Car Rental Hat Yai — Family SUV | Tawan Car Rent',
      description:
        'Rent a 7-seater in Hat Yai. Toyota Veloz at ฿1,500 a day with room for the whole family and the luggage, first-class insurance included and free airport delivery. LINE @tawan8118.',
    },
    navLabel: '7-seater car rental',
    kicker: 'SUV · Family · Groups',
    heading: '7-seater car rental in Hat Yai — the whole family in one car',
    lede: 'Toyota Veloz, seven seats, ฿1,500 a day. Comfortable over distance, room for the bags.',
    intro: [
      'Arriving in Hat Yai as a family or a group, two small cars cost more and split everyone up. A seven-seater like the Toyota Veloz is the better answer: the second and third rows fold to trade seats for luggage, the air conditioning reaches the back row, and it uses far less fuel than a van.',
      'It handles the routes people actually drive from Hat Yai — up Khao Kho Hong, out to Songkhla and Ko Yo, on to Satun for the boat to Koh Lipe, or south to the Sadao border crossing for Penang. Like every car in the fleet it carries first-class insurance and comes with free Hat Yai Airport delivery.',
    ],
    points: [
      'Toyota Veloz 2026, automatic, seven seats, ฿1,500 a day',
      'Fold the third row down for full-size suitcases',
      'Suits families, older passengers and longer up-country drives',
      'First-class and compulsory insurance included',
      'Free Hat Yai Airport delivery; discount from three days',
    ],
    faq: [
      {
        q: 'How much is a 7-seater in Hat Yai?',
        a: 'The Toyota Veloz seven-seater is ฿1,500 a day including first-class and compulsory insurance, with a further discount from three days.',
      },
      {
        q: 'Does it fit seven people and their luggage?',
        a: 'Seven passengers fit, but boot space is then limited. With several large suitcases we suggest five or six people and folding one side of the third row.',
      },
      {
        q: 'Can I drive it to other provinces?',
        a: 'Yes — anywhere in the south, including Satun, Phatthalung, Trang and Nakhon Si Thammarat. Tell us the route beforehand on LINE @tawan8118.',
      },
    ],
    carsHeading: 'The seven-seater and the next best options',
  },

  'eco-car': {
    meta: {
      title: 'Eco Car Rental Hat Yai — ฿800 a Day | Tawan Car Rent',
      description:
        'Cheap eco car rental in Hat Yai. Toyota Vios and Yaris Ativ, automatic, ฿800–900 a day, low fuel use and easy parking in town, first-class insurance included. LINE @tawan8118.',
    },
    navLabel: 'Eco car rental',
    kicker: 'Eco car · Low fuel use',
    heading: 'Cheap eco car rental in Hat Yai from ฿800 a day',
    lede: 'Vios and Yaris Ativ, automatic — light on fuel and easy to park in town.',
    intro: [
      'An eco car is the best value for getting around Hat Yai itself. It is compact, turns in a tight space, parks near Kim Yong market or a shopping centre without a fight, and uses little fuel — so the total cost of a trip lands well below a larger car.',
      'Tawan Car Rent runs Toyota Vios and Yaris Ativ from 2020 to 2024, all automatic, from ฿800 a day. Four people travel comfortably with two medium suitcases, which covers couples, small families and anyone here on their own for work.',
    ],
    points: [
      'Toyota Vios and Yaris Ativ, automatic, ฿800–900 a day',
      'Low fuel use — ideal in town and on medium runs',
      'Four seats plus two medium suitcases',
      'First-class and compulsory insurance included in the rate',
      'Discount from three days, and a separate monthly rate',
    ],
    faq: [
      {
        q: 'What does an eco car cost per day in Hat Yai?',
        a: 'The Toyota Vios 2020 and Yaris Ativ 2021 are ฿800 a day and the Yaris Ativ 2024 is ฿900 a day, first-class insurance included.',
      },
      {
        q: 'How much fuel does an eco car use?',
        a: 'Around 18–20 km per litre in mixed town and highway driving. A return run from Hat Yai to Songkhla costs under ฿100 in fuel.',
      },
      {
        q: 'Do I have to return it with a full tank?',
        a: 'Return it at the level you received it. We photograph the dashboard at handover so both sides have the same record.',
      },
    ],
    carsHeading: 'Eco cars available to rent',
  },

  songkhla: {
    meta: {
      title: 'Car Rental Songkhla — Delivered to You | Tawan Car Rent',
      description:
        'Car rental in Songkhla and Hat Yai with delivery to your hotel in Songkhla town, Ko Yo and nearby. From ฿800 a day, first-class insurance, no credit card required. LINE @tawan8118.',
    },
    navLabel: 'Car rental Songkhla',
    kicker: 'Songkhla · Ko Yo · The south',
    heading: 'Car rental in Songkhla, delivered to your hotel, from ฿800 a day',
    lede: 'We bring the car to Songkhla town and nearby — then drive anywhere in the south.',
    intro: [
      'Tawan Car Rent is based in Ban Phru, Hat Yai, under an hour from Songkhla town, so we deliver to hotels in the town centre, Samila beach, Ko Yo and the surrounding area. Send the time and the address to LINE @tawan8118 and we bring the car and complete the paperwork at the meeting point.',
      'With a car you can do Songkhla in a day: the old town, Samila beach, lunch by the lake on Ko Yo, and back into Hat Yai for the evening. Or keep driving — Satun, Phatthalung, Trang, Pattani, Yala and Narathiwat are all open to you, with no mileage limit within the south.',
    ],
    points: [
      'Delivery to hotels in Songkhla town and the surrounding area',
      'Or collect at our Ban Phru office, or at Hat Yai Airport',
      'Drive anywhere in southern Thailand, no mileage limit',
      'From ฿800 a day including first-class and compulsory insurance',
      'Open daily 07:00–22:00; book ahead any time on LINE',
    ],
    faq: [
      {
        q: 'Do you deliver to Songkhla town, and is there a fee?',
        a: 'We do. Delivery within Hat Yai and to the airport is free; for Songkhla town the fee depends on the address and the length of hire. Send the drop-off point to LINE @tawan8118 and we quote it before you commit.',
      },
      {
        q: 'Can I drive to Satun or take the boat to Koh Lipe?',
        a: 'Yes. You can drive anywhere in the south and leave the car at Pak Bara pier while you are on Koh Lipe. Tell us the plan in advance so the car is prepared for it.',
      },
      {
        q: 'Where exactly is the office?',
        a: '65 Kanchanawanit Road, Ban Phru, Hat Yai, Songkhla 90250, open daily 07:00–22:00.',
      },
    ],
    carsHeading: 'Recommended cars for exploring Songkhla',
  },
};
