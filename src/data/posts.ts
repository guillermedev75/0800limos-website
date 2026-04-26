/**
 * Blog content registry. Each post is fully typed and self-contained.
 * Body is markdown — rendered by src/lib/markdown.tsx (zero deps).
 *
 * To add a post: append a new entry to POSTS, ensure unique `slug`, set
 * `published: true` when ready. Drafts (published=false) are excluded from
 * listings and sitemap.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readMinutes: number;
  category: string;
  tags: string[];
  primaryKeyword: string;
  body: string; // markdown
  faqs?: FaqItem[];
  published: boolean;
}

export const POSTS: BlogPost[] = [
  {
    slug: 'best-napa-valley-wineries-by-limo',
    title: 'Best Wineries to Visit in Napa Valley by Limo',
    metaTitle: 'Best Wineries to Visit in Napa Valley by Limo (2026 Guide)',
    metaDescription:
      "A chauffeur's guide to the best Napa Valley wineries by limo: legendary estates, hidden gems, route planning, and tasting reservations. Plan the perfect day.",
    excerpt:
      'Napa packs more than 400 wineries into a 30-mile corridor. Choosing the right four — and getting between them without losing the day to logistics — is the difference between a great trip and an unforgettable one.',
    heroImage: '/images/destinations/winery.jpg',
    heroImageAlt:
      'Luxury limo at a Napa Valley winery during a private wine tour.',
    publishedAt: '2026-04-26',
    readMinutes: 7,
    category: 'Wine Country',
    tags: ['Napa Valley', 'wine tour', 'limousine', 'itinerary'],
    primaryKeyword: 'Napa Valley wineries by limo',
    published: true,
    body: `Napa Valley packs more than 400 wineries into a 30-mile corridor between Napa and Calistoga. Choosing the right four or five — and getting between them without losing the day to logistics or designated-driver duty — is the difference between a great trip and an unforgettable one. After thousands of chauffeured tours through the valley, here is the itinerary we build for clients who want depth, not a checklist.

## How to Plan a Napa Valley Wine Tour by Limo

Most Napa wineries are appointment-only under the Napa County Winery Definition Ordinance, so reservations are non-negotiable. We recommend four tastings per day, spaced 90 minutes apart, with lunch built into the middle. Start at 10:30 a.m. — the valley is quieter, light is better for vineyard photos, and palates are sharpest before noon.

A Highway 29 / Silverado Trail loop minimizes drive time. Highway 29 runs through the towns (Yountville, Oakville, Rutherford, St. Helena); Silverado Trail runs parallel to the east, faster and more scenic. Going up one and down the other is the chauffeur's classic.

## Legendary Estates Worth the Reservation

### Inglenook (Rutherford)
Francis Ford Coppola's restored 19th-century estate — originally founded by Gustave Niebaum in 1879 — is the valley's most cinematic property. The Heritage Tasting in the Chateau pairs Rubicon, their Cabernet flagship, with library vintages. Reserve two weeks ahead.

### Opus One (Oakville)
The Mondavi-Rothschild collaboration is a single-wine estate: one Bordeaux blend, one tasting, one of the most architecturally striking buildings in California wine country. The rooftop terrace overlooking the To Kalon vineyard is the photo every client wants.

### Stag's Leap Wine Cellars (Napa)
The winery whose 1973 S.L.V. Cabernet beat the French at the 1976 Judgment of Paris. The Estate Collection Tasting is the right call — three single-vineyard Cabs in the Fay Outlook room.

### Domaine Carneros (Napa)
For sparkling, this Taittinger-owned chateau in the cool Carneros AVA is the benchmark. Tastings are on the terrace overlooking the estate vineyards. Ideal as a first or last stop.

## Hidden Gems Our Chauffeurs Recommend

### Ashes & Diamonds (Napa)
Mid-century modern architecture, lower-alcohol Cabernet Franc and Cabernet Sauvignon in a Bordeaux idiom. The crowd is younger, the music better, and the bocce courts are open.

### Frog's Leap (Rutherford)
Organically farmed since 1988, dry-farmed Sauvignon Blanc, and one of the warmest welcomes in the valley. The Frog Pond picnic site is bookable for groups.

### Larkmead (Calistoga)
A 130-year-old estate at the valley's warm northern end, quietly producing some of the best Cabernet in California. Tastings are intimate and seated.

### Cade Estate (Angwin)
Worth the climb up Howell Mountain — 1,800 feet above the valley floor, panoramic views, mountain-fruit Cabernet with serious structure.

## Lunch Stops That Fit a Tasting Day

The French Laundry in Yountville is a separate event, not a tour stop. For a wine-day lunch, our top three:

- **Bouchon Bistro (Yountville)** — Keller's bistro, walk-in friendly at the bar, classic steak frites.
- **Press (St. Helena)** — Steakhouse with one of the deepest Napa Cabernet lists in the world.
- **Auberge du Soleil (Rutherford)** — Hillside terrace, Michelin-starred, the valley view that ends up framed at home.

## Why a Limo Beats Driving Yourself

California's BAC limit is 0.08, and Napa County Sheriff patrols Highway 29 and the Silverado Trail aggressively during harvest (August through October). Beyond the obvious safety case: a chauffeur handles tasting check-ins, holds your purchases in a climate-controlled vehicle, and adjusts the schedule when one tasting runs long. SUVs (Escalade, Suburban) seat up to six comfortably; Sprinters seat 11–14 with luggage room for cases.

Round-trip from San Francisco is about 90 minutes each way via the Golden Gate Bridge or Bay Bridge — productive time on Wi-Fi or a head start on the Sauvignon Blanc.

## Sample Full-Day Itinerary from San Francisco

1. 9:00 a.m. — Pickup in San Francisco
2. 10:45 a.m. — Domaine Carneros (sparkling)
3. 12:30 p.m. — Lunch at Bouchon, Yountville
4. 2:30 p.m. — Inglenook
5. 4:15 p.m. — Frog's Leap
6. 6:00 p.m. — Return to SF, arrive ~7:30 p.m.`,
    faqs: [
      {
        q: 'How many wineries can we visit in one day by limo?',
        a: 'Four is the sweet spot. Five is possible if tastings are short and tightly clustered, but the day becomes rushed and palate fatigue sets in by the fourth.',
      },
      {
        q: 'Do we need reservations at every Napa winery?',
        a: "Almost always, yes. Under Napa County's Winery Definition Ordinance, the vast majority of wineries are appointment-only. Walk-ins are rare and usually limited to downtown Napa tasting rooms.",
      },
      {
        q: 'What does a Napa limo tour from San Francisco cost?',
        a: 'Full-day private chauffeur service from SF typically runs $1,200–$2,200 depending on vehicle (sedan, SUV, or Sprinter), with tasting fees ($75–$150 per person per winery) billed separately.',
      },
      {
        q: 'Is the limo allowed to wait at each winery?',
        a: 'Yes. Wineries have dedicated chauffeur parking, and our drivers wait on-site so you never have to coordinate pickups.',
      },
      {
        q: 'Can we ship wine home from the tour?',
        a: 'Yes. Wineries handle shipping directly to the 40+ states that permit it. Your chauffeur will also transport same-day purchases in the vehicle.',
      },
      {
        q: 'Highway 29 or Silverado Trail — which is better?',
        a: 'Both. Most well-planned tours use Highway 29 northbound (towns and lunch) and Silverado Trail southbound (faster, scenic). Your chauffeur will route around traffic.',
      },
      {
        q: 'When is the best time of year to visit Napa?',
        a: 'May–June (mustard flowers fading, weather mild) and September–October (harvest, crush activity at wineries) are peak. August can hit triple digits; January–February are quietest with the best appointment availability.',
      },
    ],
  },
  {
    slug: 'sfo-limo-fbo-vs-terminal-guide',
    title: 'SFO Limo Service: FBO vs Terminal — The Complete Guide',
    metaTitle: 'SFO Limo Service: FBO vs Terminal Pickup Guide',
    metaDescription:
      'SFO limo service explained: FBO vs terminal pickup, private aviation transfers, meet-and-greet, and how to choose. A complete guide for travelers and assistants.',
    excerpt:
      'SFO handles ~50 million passengers a year, plus a separate world of private aviation operating from Fixed-Base Operators on the west side. Knowing which side you are on changes everything.',
    heroImage: '/images/services/airport.jpg',
    heroImageAlt:
      'Luxury chauffeur transfer at a San Francisco SFO FBO.',
    publishedAt: '2026-04-26',
    readMinutes: 6,
    category: 'Airport & Aviation',
    tags: ['SFO', 'FBO', 'private aviation', 'airport transfer'],
    primaryKeyword: 'SFO limo service FBO',
    published: true,
    body: `San Francisco International handles roughly 50 million passengers a year through four terminals, plus a separate world of private aviation operating from Fixed-Base Operators on the west side of the field. If you book limo service to or from SFO, knowing which side you are on determines pickup location, timing, security, and cost. Here is what travelers and executive assistants need to know.

## What Is an FBO?

A Fixed-Base Operator is a private terminal that services general aviation — private jets, fractional aircraft (NetJets, Flexjet, VistaJet), and corporate flight departments. Passengers bypass commercial check-in, TSA lines, and baggage claim. You drive directly to the aircraft, or from the aircraft to your vehicle, on the ramp.

SFO has two primary FBOs:

- **Signature Aviation SFO** — Located on the west side of the airport, accessed via N. McDonnell Road. The largest FBO at SFO, handles most heavy-jet traffic.
- **Signature Elite (formerly Million Air SFO)** — Co-located on the same west-side ramp following Signature's 2022 acquisition of Million Air SFO.

Nearby alternatives many Bay Area private travelers use instead of SFO:

- **San Carlos (KSQL)** — Smaller jets, 20 minutes from SF, FBOs include Surf Air and Rabbit Aviation.
- **Hayward Executive (KHWD)** — APP Jet Center, popular for East Bay clients.
- **San Jose Mineta (KSJC)** — Signature and Atlantic Aviation, the Silicon Valley default.
- **Oakland (KOAK)** — Kaiser Air and Signature on the north field.

## Terminal Pickup at SFO: How It Actually Works

For commercial flights, SFO has four terminals (1, 2, 3, International) connected by AirTrain. Limo and chauffeur protocol:

- **Domestic arrivals:** Standard pickup is curbside at the Arrivals (lower) level. SFO does not allow private vehicles to wait curbside; chauffeurs stage at the SFO Cell Phone Lot off N. McDonnell Road and pull up when the client is at the curb.
- **International arrivals (Terminal G/A):** Add 45–75 minutes from wheels-down for U.S. Customs and Border Protection clearance. Global Entry cuts this in half.
- **Meet-and-greet:** A chauffeur parks in the SFO Domestic or International Garage and meets you at baggage claim with a name placard. This is the standard for first-time SF visitors, VIPs, and unaccompanied minors. Expect a parking surcharge.

## FBO Pickup: A Different Experience

At Signature SFO, the chauffeur drives onto the secured ramp and meets the aircraft as it parks. Bags transfer from cabin to trunk in under two minutes. Total time from wheels-down to leaving the airport: typically 5–10 minutes versus 30–60 at the terminal.

Requirements:

- Tail number and ETA shared with the FBO and chauffeur in advance
- Driver must be on the FBO's approved transportation list (most reputable Bay Area operators are pre-cleared at Signature)
- Government-issued ID at the FBO gate

## Vehicle Choices for SFO Transfers

- **Mercedes S-Class / BMW 7 Series** — Two passengers, two roller bags. The default for executive solo travel.
- **Cadillac Escalade / Suburban** — Up to six passengers, six bags. The Bay Area's de facto FBO vehicle.
- **Mercedes Sprinter Executive** — 11–14 passengers, conference-style seating, the right call for an arriving board or wedding party.

## Timing: How Early Should the Chauffeur Arrive?

- **Departure to terminal:** Chauffeur arrives 15 minutes before scheduled pickup. Allow 90 minutes terminal arrival for domestic, 2.5 hours for international.
- **Departure to FBO:** Chauffeur arrives 10 minutes before scheduled pickup. FBO arrival is typically 20–30 minutes before wheels-up — the FBO will confirm with the flight crew.
- **Arrival pickup:** Chauffeur tracks the flight and stages automatically. You should not need to call.

## What This Costs

Bay Area FBO transfers run roughly:

- SF to SFO Signature: $150–$220 (sedan), $200–$300 (SUV)
- SF to SJC Signature: $250–$380 (SUV) — 45-minute drive
- SF to Hayward APP Jet Center: $200–$280 (SUV)

Terminal pickups are typically 10–15% less; meet-and-greet adds $50–$100 for parking and waiting time.`,
    faqs: [
      {
        q: 'Can my chauffeur meet me on the tarmac at SFO?',
        a: 'Only at an FBO (Signature SFO or Signature Elite). Commercial terminal arrivals require curbside or baggage-claim meet-and-greet pickup.',
      },
      {
        q: 'What FBOs are at SFO?',
        a: 'Signature Aviation SFO and Signature Elite (formerly Million Air SFO), both on the west side of the field.',
      },
      {
        q: 'How early should a chauffeur arrive for an FBO departure?',
        a: 'Plan to arrive at the FBO 20–30 minutes before wheels-up. Your chauffeur should be at pickup 10 minutes before scheduled departure.',
      },
      {
        q: 'Do I need to give my tail number to the limo company?',
        a: 'Yes — it lets the chauffeur and FBO coordinate ramp access and track wheels-down accurately.',
      },
      {
        q: "What's the closest private aviation airport to downtown San Francisco?",
        a: 'San Carlos (KSQL) at about 20 minutes, though it limits aircraft size. SFO FBOs are 25–30 minutes from downtown.',
      },
      {
        q: 'Can the chauffeur wait if my private flight is delayed?',
        a: 'Yes. Most Bay Area chauffeur services include flight tracking and automatically adjust without additional notice; standard wait time is included.',
      },
    ],
  },
  {
    slug: 'bay-area-wedding-transportation-checklist',
    title: 'The Bay Area Wedding Transportation Checklist',
    metaTitle: 'Bay Area Wedding Transportation Checklist (2026)',
    metaDescription:
      "A planner's checklist for Bay Area wedding transportation: vehicle counts, timing, Napa and Sonoma logistics, guest shuttles, and the questions to ask any operator.",
    excerpt:
      "Wedding transportation is the part planners say goes wrong most often — and the part couples think about last. This is the checklist we walk through with every couple.",
    heroImage: '/images/services/wedding.jpg',
    heroImageAlt:
      'Wedding transportation lineup at a Sonoma wine country venue.',
    publishedAt: '2026-04-26',
    readMinutes: 7,
    category: 'Weddings',
    tags: ['wedding', 'Napa', 'Sonoma', 'guest shuttle', 'planning'],
    primaryKeyword: 'Bay Area wedding transportation',
    published: true,
    body: `Wedding transportation is the part planners say goes wrong most often — and the part couples think about last. With venues spread across San Francisco, Napa, Sonoma, Half Moon Bay, and Carmel, plus guests arriving at SFO, OAK, and SJC, it is the logistics layer that holds the day together. This is the checklist we walk through with every couple.

## 6+ Months Out: Lock the Vehicle Count

Before pricing, define the moves:

1. **Getting-ready transport** — Couple and wedding party from hotel to venue or salon
2. **Ceremony arrival** — Couple's vehicle (often a statement car: Rolls-Royce, vintage Bentley, classic Mercedes)
3. **Wedding party transport** — Sprinter or stretch SUV
4. **Guest shuttles** — The largest line item, usually 2–6 vehicles depending on count
5. **Couple's getaway** — End-of-night exit
6. **Morning-after transport** — Guests to airports

For a 120-guest wine country wedding with most guests at hotels in Yountville or Healdsburg, a typical fleet:

- 1 Rolls-Royce or vintage car (couple)
- 1 Mercedes Sprinter (wedding party, 14 passengers)
- 3 motor coaches (35–55 passengers each, guest shuttles)
- 1 SUV (parents / VIP)

## Wine Country Logistics: What Couples Underestimate

### Napa and Sonoma Are Not the Same Drive
San Francisco to Yountville: 70 minutes without traffic, 100+ on a Friday afternoon. SF to Healdsburg: 80 minutes. Napa to Sonoma: 45 minutes between core towns. Build buffers.

### Venue Road Restrictions
Many Napa and Sonoma estates have private gravel drives, low overhanging oaks, or weight limits. A 56-passenger motor coach may not physically fit. Ask the venue for a transportation diagram or have the operator do a site walk.

### Sound Ordinance and Curfews
Napa County enforces a 10 p.m. amplified-music cutoff at most outdoor venues. Final shuttles typically depart 10:30–11:00 p.m. — confirm with the venue and build the schedule backward.

## Bay Area Venue-Specific Notes

- **Half Moon Bay (Ritz-Carlton, Oceano):** Highway 92 over the hill is the bottleneck. Allow 60 minutes from SFO, 90 from East Bay.
- **Carmel / Pebble Beach:** 2 hours from SF. Most weddings shuttle guests from Monterey-area hotels (Inn at Spanish Bay, Lodge at Pebble Beach, Hyatt Carmel Highlands) — short hops, but multiple loops.
- **San Francisco city venues (City Hall, Presidio, Cavallo Point):** Parking is the issue. Confirm loading-zone access and police-detail requirements for street closures.
- **Sonoma (Healdsburg, Kenwood, Glen Ellen):** Spread out. Plan shuttle loops, not single pickups.

## 90 Days Out: The Timing Document

Build a single transportation timeline shared with operator, planner, and venue. For each vehicle: pickup time, pickup address, passenger count, drop-off, return time. The most common mistake is forgetting the return — couples plan the arrival schedule but not the exit.

## Statement Cars: What's Actually Available

Bay Area couples increasingly book a single statement vehicle for ceremony arrival or getaway photos:

- **Rolls-Royce Phantom or Ghost** — The classic. Black or white.
- **Vintage Bentley S1 / S2** — For black-tie weddings and timeless photos.
- **1960s Mercedes 280SE Cabriolet** — Open-top, ideal for warm wine-country afternoons.
- **Tesla Model S Plaid** — A growing pick for tech-couple weddings.

Reserve 6+ months out — Bay Area inventory is thin and Saturdays in May, June, September, and October book first.

## Guest Shuttle Math

The rule of thumb: assume 70% of guests will use the shuttle when offered, 90% when it's the only option (no parking, remote venue). Add 10% capacity buffer for last-minute riders.

For 120 guests, 90% adoption = 108 riders. Two 56-passenger coaches handle it; three give you breathing room and faster loops.

## Questions to Ask Any Operator

1. Are you licensed by the California Public Utilities Commission (TCP number)?
2. What's your insurance limit? ($1.5M minimum, $5M for motor coaches is standard.)
3. Have you worked at our venue before?
4. What happens if a vehicle breaks down day-of?
5. Are gratuity and overtime in the quoted price?
6. What's the cancellation and weather policy?`,
    faqs: [
      {
        q: 'How far in advance should we book wedding transportation?',
        a: '6–9 months for peak season (May–October). Statement cars and Sprinters in wine country book first.',
      },
      {
        q: 'How many guests fit on a wedding shuttle?',
        a: 'Mercedes Sprinters seat 11–14, mini-coaches 24–30, motor coaches 35–56. Most wine country weddings use a mix.',
      },
      {
        q: 'Do shuttles wait at the venue all night?',
        a: 'Either approach works. Continuous loops keep guests moving but require more vehicles; "park and wait" is simpler but less flexible. Most wine country weddings use park-and-wait given the 10 p.m. curfew.',
      },
      {
        q: "What's a realistic budget for Bay Area wedding transportation?",
        a: 'For a 120-guest wine country wedding: $8,000–$15,000 typical, including statement car, wedding party Sprinter, and 2–3 guest motor coaches.',
      },
      {
        q: 'Are limos allowed at all Napa wineries?',
        a: 'Most wineries that host weddings have approved chauffeur drop-off zones. Confirm vehicle size limits — some private drives can\'t accommodate full motor coaches.',
      },
      {
        q: 'Who tips the chauffeurs?',
        a: 'Typically the couple or planner, not guests. Most contracts include 18–22% gratuity automatically — verify before adding more.',
      },
    ],
  },
  {
    slug: 'pebble-beach-golf-trip-chauffeur-itinerary',
    title: 'Pebble Beach Golf Trip: A Premium Chauffeur Itinerary',
    metaTitle: 'Pebble Beach Golf Trip: Premium Chauffeur Itinerary',
    metaDescription:
      "A chauffeur's itinerary for a Pebble Beach golf trip from San Francisco: tee-time logistics, the Monterey Peninsula's four iconic courses, and where to stay.",
    excerpt:
      "Two hours each way, four world-ranked courses, and a logistics puzzle if you handle it yourself. The right chauffeured plan turns a foursome's golf weekend into a frictionless one.",
    heroImage: '/images/areas/monterey.jpg',
    heroImageAlt:
      'Chauffeur SUV at Pebble Beach Golf Links on a luxury golf trip.',
    publishedAt: '2026-04-26',
    readMinutes: 6,
    category: 'Golf & Leisure',
    tags: ['Pebble Beach', 'golf', 'Monterey', 'Carmel', 'itinerary'],
    primaryKeyword: 'Pebble Beach golf trip chauffeur',
    published: true,
    body: `A Pebble Beach golf trip from San Francisco is two hours of driving each way, four world-ranked courses, and a logistics puzzle if you handle it yourself. The right chauffeured plan turns a foursome's golf weekend into a frictionless one — clubs handled, tee times stacked, dinner reservations on time. Here is the itinerary we build for clients headed to the Monterey Peninsula.

## The Four Courses

The Pebble Beach Resorts complex includes three of California's top public courses, with a fourth (Cypress Point) sitting next door as one of the most exclusive private clubs in the world.

### Pebble Beach Golf Links
Host of six U.S. Opens (1972, 1982, 1992, 2000, 2010, 2019) and the AT&T Pebble Beach Pro-Am every February. Public access via resort guest privileges; greens fees in 2026 run roughly $695 per round. Guests at the Lodge, Inn at Spanish Bay, or Casa Palmero get reservation priority 18 months out.

### Spyglass Hill Golf Course
Robert Trent Jones Sr. design. The first five holes play through dunes toward the Pacific; the back nine cuts inland through Del Monte Forest. Routinely ranked one of the toughest public courses in America.

### The Links at Spanish Bay
Designed by Tom Watson, Robert Trent Jones Jr., and Sandy Tatum. Links-style on the dunes north of Pebble. Bagpiper plays at sunset on the 18th — the trip's signature ritual.

### Cypress Point Club
Alister MacKenzie's masterpiece. Private, no public access. If you have a member host, this is the round that will define the trip.

## The Drive: SF to Pebble Beach

Two hours via Highway 101 to Highway 156 to Highway 1, then into Pacific Grove and the 17-Mile Drive. The 17-Mile Drive entrance fee ($12.25 per car) is waived for resort guests — your chauffeur will have the credentials.

Friday afternoon out of SF can stretch the drive to 2.5–3 hours. Plan a 9 a.m. departure to arrive in time for an afternoon practice round; or fly into Monterey Regional Airport (MRY) and chauffeur the final 15 minutes.

## A Three-Day Itinerary

### Day 1: Arrival and Practice
- 9:00 a.m. — Pickup in San Francisco (sedan or Escalade, clubs in cargo)
- 11:30 a.m. — Lunch at Stillwater Bar & Grill at the Lodge
- 1:30 p.m. — Practice round at Del Monte Golf Course
- 7:00 p.m. — Dinner at Roy's at Spanish Bay

### Day 2: Spyglass Hill
- 6:30 a.m. — Breakfast at the Lodge
- 7:50 a.m. — Tee time at Spyglass Hill
- 1:00 p.m. — Lunch at the Bench, terrace overlooking the 18th at Pebble
- 3:00 p.m. — Optional 9 holes at the Hay (par-3 course redesigned by Tiger Woods in 2021)
- 7:30 p.m. — Dinner at Aubergine in Carmel-by-the-Sea (Michelin-starred)

### Day 3: Pebble Beach Golf Links
- 6:30 a.m. — Breakfast
- 8:00 a.m. — Tee time at Pebble Beach Golf Links
- 1:30 p.m. — Lunch and trophy photos on the 18th green
- 3:00 p.m. — Depart Monterey
- 5:30 p.m. — Arrive San Francisco

## Where to Stay

- **The Lodge at Pebble Beach** — On the 18th fairway. The closest you can sleep to the action.
- **Inn at Spanish Bay** — North end of the property, easy access to the Links and Spyglass.
- **Casa Palmero** — 24-room boutique hotel, the resort's most private option.
- **Carmel Valley Ranch** — 15 minutes inland, lower price point, full resort.
- **L'Auberge Carmel** — Relais & Châteaux property in Carmel-by-the-Sea, Aubergine on-site.

## Chauffeur Logistics That Matter

- **Club transport:** A standard Escalade fits four sets of clubs and four overnight bags. Five players or a week's worth of luggage, step up to a Suburban or Sprinter.
- **Course-to-course shuttles:** Spyglass and Pebble are 5 minutes apart; Spanish Bay is 8 minutes from Pebble.
- **Caddie tips:** Cash, $100–$150 per bag for a single round at Pebble.
- **Late-night dinner returns:** Aubergine and Chez Noir in Carmel run late seatings. A pre-arranged 10 p.m. pickup avoids the rideshare gap that's common on the peninsula.

## Why Fly Private to MRY

Monterey Regional (KMRY) sits 15 minutes from Pebble. Del Monte Aviation is the FBO. For groups already chartering, MRY skips the four-hour round-trip drive entirely and lets a Friday-Sunday trip include three rounds instead of two.`,
    faqs: [
      {
        q: 'How far is Pebble Beach from San Francisco?',
        a: 'About 120 miles, two hours without traffic. Plan 2.5 hours on Friday afternoons.',
      },
      {
        q: 'Can I get a Pebble Beach tee time without staying at the resort?',
        a: 'Limited and difficult. Resort guests get reservation priority up to 18 months ahead; non-guests can book only within a short window and subject to availability.',
      },
      {
        q: 'What does Pebble Beach Golf Links cost in 2026?',
        a: 'Greens fees for resort guests are approximately $695 per round, plus caddie fees and gratuity. Non-guest rates, when available, are higher.',
      },
      {
        q: 'How many sets of clubs fit in a chauffeured SUV?',
        a: 'An Escalade or Suburban fits four sets of clubs plus four overnight bags. Larger groups or longer stays warrant a Sprinter.',
      },
      {
        q: "What's the closest airport to Pebble Beach?",
        a: 'Monterey Regional (KMRY), 15 minutes away. Del Monte Aviation handles private aviation. SJC is the closest major commercial airport, about 75 minutes north.',
      },
      {
        q: 'Should I rent a car or hire a chauffeur for a Pebble Beach trip?',
        a: 'For a golf trip, a chauffeur is usually the right call — no parking at courses, no designated driver at dinner, and clubs stay secure. A rental car makes more sense only for trips longer than 4–5 days.',
      },
    ],
  },
  {
    slug: 'silicon-valley-corporate-roadshow-transportation',
    title: 'Corporate Roadshow Transportation in Silicon Valley',
    metaTitle: 'Silicon Valley Corporate Roadshow Transportation Guide',
    metaDescription:
      'A guide to corporate roadshow transportation in Silicon Valley: VC office logistics, multi-stop chauffeur planning, vehicle choice, and what executive assistants need.',
    excerpt:
      'Eight to twelve meetings in two days, scattered across SF, Sand Hill Road, Palo Alto, Mountain View, and South San Jose. This is what executive assistants and chiefs of staff need to know.',
    heroImage: '/images/areas/silicon-valley.jpg',
    heroImageAlt:
      'Executive chauffeur on Sand Hill Road during a Silicon Valley roadshow.',
    publishedAt: '2026-04-26',
    readMinutes: 6,
    category: 'Corporate',
    tags: ['Silicon Valley', 'roadshow', 'corporate', 'Sand Hill Road', 'IPO'],
    primaryKeyword: 'Silicon Valley corporate roadshow transportation',
    published: true,
    body: `A Silicon Valley roadshow — IPO, Series B, M&A, customer tour — is a logistics test. Eight to twelve meetings in two days, geographically scattered between San Francisco, Sand Hill Road, Palo Alto, Mountain View, and South San Jose, with hard stops measured in minutes. This is what executive assistants and chiefs of staff need to know about getting it right.

## The Geography Problem

Silicon Valley is not a city. It's a 50-mile corridor with three distinct meeting clusters:

- **San Francisco (SoMa, Financial District, Mission Bay)** — Most fintech, B2B SaaS, and East Coast satellite offices
- **Sand Hill Road / Menlo Park / Palo Alto** — VC firms (Sequoia, Andreessen Horowitz, Kleiner Perkins, Greylock, Benchmark, Accel)
- **Mountain View / Sunnyvale / Cupertino / San Jose** — Google, LinkedIn, Apple, Nvidia, Cisco, customer/partner meetings

A typical IPO roadshow day pings between all three. The difference between a 9-meeting day and a 7-meeting day is route discipline.

## Realistic Drive Times (Without Traffic)

- SF Financial District → Sand Hill Road: 45 minutes
- Sand Hill Road → Mountain View: 15 minutes
- Mountain View → Cupertino: 15 minutes
- Cupertino → San Jose: 20 minutes
- San Jose → SF: 60 minutes

Add 30–60% during peak windows (7:30–9:30 a.m. northbound on 101; 4:00–7:00 p.m. southbound). 280 is the chauffeur's preferred alternate — slower speed limits, far more reliable.

## Cluster, Don't Crisscross

The single highest-leverage move: cluster meetings geographically. A poorly built schedule sends a CEO from Palo Alto to SF to Mountain View and back to Menlo Park — three hours of windshield time that should have been one. A good schedule starts north and works south, or vice versa, with the team's office positioned as the pivot.

A clean roadshow day:

- 8:00 a.m. — Breakfast meeting, SF (Battery, Quince)
- 10:00 a.m. — Sand Hill Road #1
- 11:30 a.m. — Sand Hill Road #2
- 1:00 p.m. — Lunch meeting, Palo Alto (Evvia, Bird Dog)
- 3:00 p.m. — Mountain View
- 4:30 p.m. — Cupertino or San Jose
- 7:00 p.m. — Dinner, Menlo Park (Selby's, Flea St. Café)

## Vehicle Choice

- **Mercedes S-Class or BMW 7 Series** — One or two principals. The default for solo CEO + CFO. Wi-Fi, privacy partition, USB-C.
- **Cadillac Escalade** — Three to six. The Bay Area corporate standard. Bench seat for laptop work.
- **Mercedes Sprinter Executive** — Six to fourteen. Conference seating, table, monitor. The right vehicle when the team is rehearsing the deck between meetings.

For a roadshow, the Sprinter is often the unsung hero — it converts dead drive time into prep time. Bankers brief, the CEO rehearses, the team revises slides on the way to the next pitch.

## The Executive Assistant's Checklist

1. **Single point of contact** — One operator, one dispatcher, one phone number across all vehicles.
2. **Live tracking shared with the EA** — Every reputable Bay Area operator offers it.
3. **Buffer time** — 15 minutes minimum between meetings; 25 minutes when crossing clusters.
4. **Driver continuity** — Same chauffeur across the multi-day trip.
5. **Backup vehicle protocol** — A serious operator dispatches a replacement within 15 minutes anywhere on the peninsula.
6. **FBO coordination** — If the principal flies private into SJC or SFO, the chauffeur should be on the FBO's approved list and tracking the tail.
7. **Quiet hours** — Brief the chauffeur on no-conversation policy if the principal works in the back.

## Compliance and Insurance

For corporate roadshows, confirm the operator holds:

- California PUC TCP license (look up the number)
- $5M+ commercial auto liability
- Workers' comp and chauffeur-employed (not 1099) drivers — both reduce the principal's exposure

This is non-negotiable for IPO and M&A roadshows where the legal team will request certificates.

## Cost Anchors

- Single S-Class for a 10-hour roadshow day: $1,400–$1,800
- Escalade for 10 hours: $1,600–$2,000
- Sprinter Executive for 10 hours: $2,200–$2,800
- Multi-vehicle, multi-day roadshow (3 vehicles, 3 days): $25,000–$45,000`,
    faqs: [
      {
        q: 'How many meetings can fit in a Silicon Valley roadshow day?',
        a: 'Six to eight is realistic with strong clustering and 30-minute meeting blocks. Nine is achievable when geography cooperates; ten is heroic and usually a sign someone overpromised.',
      },
      {
        q: 'Should we use a Sprinter or multiple sedans for a roadshow team?',
        a: 'A Sprinter for the core team (CEO, CFO, bankers, IR) and a sedan for any principal who needs solo prep time is the most common configuration.',
      },
      {
        q: 'How early should the chauffeur arrive for the first meeting?',
        a: 'Vehicle on-site 15 minutes before scheduled pickup; 30 minutes for the first move of a multi-day trip in case of route or building access surprises.',
      },
      {
        q: 'Do VC firms on Sand Hill Road have visitor parking?',
        a: 'Yes. Every major firm has dedicated visitor parking; chauffeurs wait on-site between meetings.',
      },
      {
        q: "What's the fastest route between San Francisco and Sand Hill Road?",
        a: '280 South to Sand Hill Road exit. 101 is shorter in miles but unreliable during commute hours.',
      },
      {
        q: 'How do we handle private aviation arrivals during a roadshow?',
        a: 'Brief the chauffeur with the tail number and FBO (Signature SJC, Signature SFO, Atlantic SJC). The driver will track the flight, meet the aircraft on the ramp, and integrate the arrival into the roadshow schedule with no separate handoff.',
      },
    ],
  },
];

export const PUBLISHED_POSTS = () =>
  POSTS.filter((p) => p.published).sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );

export const findPost = (slug: string) =>
  POSTS.find((p) => p.slug === slug && p.published);
