/**
 * Golf courses across the 0800 Limos service area.
 *
 * Deliberately NOT ranked, scored or ordered by prestige — client's explicit
 * request: every course is presented on its own merits so no venue reads as
 * "lesser". The only grouping is geographic, which is neutral and also the
 * thing a passenger actually needs to know.
 *
 * Copy lives in the locale files under `areas.golf.courses.<key>` so it stays
 * translatable; the coordinates and links live here.
 */

export type GolfRegion = 'monterey' | 'sf' | 'wine' | 'valley' | 'eastbay' | 'tahoe';

export interface GolfCourse {
  key: string;
  name: string;
  city: string;
  region: GolfRegion;
  architect: string;
  year: number;
  holes: number;
  lat: number;
  lng: number;
  maps: string;
  /** Set when the course is not currently playable — surfaced as a banner. */
  closed?: boolean;
  /** Members-and-guests only. Kept on the map because the guest still needs a ride. */
  privateClub?: boolean;
  /** Client's most-requested courses — rendered as a coloured star instead of a pin. */
  highlight?: 'red' | 'blue';
  /**
   * Course that no longer exists. Distinct from `closed`, which means temporarily
   * shut: this one is gone for good and the land is something else now. Locals
   * still navigate by the old name, so we keep the entry and show both.
   */
  formerName?: string;
  /** Omitted for private clubs that don't publish a public site. */
  website?: string;
}

const maps = (q: string) => `https://maps.google.com/?q=${encodeURIComponent(q)}`;

export const GOLF_COURSES: GolfCourse[] = [
  // ── Monterey Peninsula ──────────────────────────────────────────────────────
  {
    key: 'pebble-beach',
    name: 'Pebble Beach Golf Links',
    city: 'Pebble Beach',
    region: 'monterey',
    architect: 'Jack Neville & Douglas Grant',
    year: 1919,
    holes: 18,
    lat: 36.5681,
    lng: -121.9499,
    website: 'https://www.pebblebeach.com/golf/pebble-beach-golf-links/',
    maps: maps('Pebble Beach Golf Links, Pebble Beach, CA'),
    highlight: 'red',
  },
  {
    key: 'spyglass-hill',
    name: 'Spyglass Hill Golf Course',
    city: 'Pebble Beach',
    region: 'monterey',
    architect: 'Robert Trent Jones Sr.',
    year: 1966,
    holes: 18,
    lat: 36.5814,
    lng: -121.9527,
    website: 'https://www.pebblebeach.com/golf/spyglass-hill-golf-course/',
    maps: maps('Spyglass Hill Golf Course, Pebble Beach, CA'),
  },
  {
    key: 'spanish-bay',
    name: 'The Links at Spanish Bay',
    city: 'Pebble Beach',
    region: 'monterey',
    architect: 'Robert Trent Jones Jr., Tom Watson & Sandy Tatum',
    year: 1987,
    holes: 18,
    lat: 36.6112,
    lng: -121.9430,
    website: 'https://www.pebblebeach.com/golf/the-links-at-spanish-bay/',
    maps: maps('The Links at Spanish Bay, Pebble Beach, CA'),
    closed: true,
  },
  {
    key: 'del-monte',
    name: 'Del Monte Golf Course',
    city: 'Monterey',
    region: 'monterey',
    architect: 'Charles Maud',
    year: 1897,
    holes: 18,
    lat: 36.5924,
    lng: -121.8760,
    website: 'https://www.pebblebeach.com/golf/del-monte-golf-course/',
    maps: maps('Del Monte Golf Course, Monterey, CA'),
  },
  {
    key: 'poppy-hills',
    name: 'Poppy Hills Golf Course',
    city: 'Pebble Beach',
    region: 'monterey',
    architect: 'Robert Trent Jones Jr.',
    year: 1986,
    holes: 18,
    lat: 36.5772,
    lng: -121.9391,
    website: 'https://poppyhillsgolf.com/',
    maps: maps('Poppy Hills Golf Course, Pebble Beach, CA'),
  },

  // ── San Francisco & the coast ───────────────────────────────────────────────
  {
    key: 'harding-park',
    name: 'TPC Harding Park',
    city: 'San Francisco',
    region: 'sf',
    architect: 'Willie Watson & Sam Whiting',
    year: 1925,
    holes: 18,
    lat: 37.7215,
    lng: -122.4934,
    website: 'https://tpc.com/hardingpark/',
    maps: maps('TPC Harding Park, San Francisco, CA'),
  },
  {
    key: 'presidio',
    name: 'Presidio Golf Course',
    city: 'San Francisco',
    region: 'sf',
    architect: 'Robert Johnstone',
    year: 1895,
    holes: 18,
    lat: 37.7906,
    lng: -122.4636,
    website: 'https://www.presidiogolf.com/',
    maps: maps('Presidio Golf Course, San Francisco, CA'),
  },
  {
    key: 'half-moon-bay',
    name: 'Half Moon Bay Golf Links',
    city: 'Half Moon Bay',
    region: 'sf',
    architect: 'Arnold Palmer & Francis Duane (Old), Arthur Hills (Ocean)',
    year: 1973,
    holes: 36,
    lat: 37.4353,
    lng: -122.4432,
    website: 'https://www.halfmoonbaygolf.com/',
    maps: maps('Half Moon Bay Golf Links, Half Moon Bay, CA'),
  },
  {
    key: 'pasatiempo',
    name: 'Pasatiempo Golf Club',
    city: 'Santa Cruz',
    region: 'sf',
    architect: 'Alister MacKenzie',
    year: 1929,
    holes: 18,
    lat: 36.9985,
    lng: -122.0300,
    website: 'https://www.pasatiempo.com/',
    maps: maps('Pasatiempo Golf Club, Santa Cruz, CA'),
  },

  // ── Wine Country ────────────────────────────────────────────────────────────
  {
    key: 'silverado',
    name: 'Silverado Resort — North & South',
    city: 'Napa',
    region: 'wine',
    architect: 'Robert Trent Jones Jr., renovated by Johnny Miller',
    year: 1966,
    holes: 36,
    lat: 38.3290,
    lng: -122.2680,
    website: 'https://www.silveradoresort.com/golf/',
    maps: maps('Silverado Resort and Spa, Napa, CA'),
    highlight: 'blue',
  },
  {
    key: 'chardonnay',
    name: 'Chardonnay Golf Club',
    city: 'American Canyon',
    region: 'wine',
    architect: 'Algie Pulley',
    year: 1987,
    holes: 18,
    lat: 38.1740,
    lng: -122.2250,
    website: 'https://www.chardonnaygolfclub.com/',
    maps: maps('Chardonnay Golf Club, American Canyon, CA'),
  },
  {
    key: 'sonoma-golf-club',
    name: 'Sonoma Golf Club',
    city: 'Sonoma',
    region: 'wine',
    architect: 'Sam Whiting & Willie Watson',
    year: 1928,
    holes: 18,
    lat: 38.2830,
    lng: -122.4490,
    website: 'https://www.sonomagolfclub.com/',
    maps: maps('Sonoma Golf Club, Sonoma, CA'),
  },

  // ── Silicon Valley ──────────────────────────────────────────────────────────
  {
    key: 'cordevalle',
    name: 'CordeValle',
    city: 'San Martin',
    region: 'valley',
    architect: 'Robert Trent Jones Jr.',
    year: 1999,
    holes: 18,
    lat: 37.0820,
    lng: -121.6030,
    website: 'https://www.cordevalle.com/',
    maps: maps('CordeValle, San Martin, CA'),
  },

  // ── Lake Tahoe ──────────────────────────────────────────────────────────────
  {
    key: 'edgewood',
    name: 'Edgewood Tahoe',
    city: 'Stateline, NV',
    region: 'tahoe',
    architect: 'George Fazio, renovated by Tom Fazio',
    year: 1968,
    holes: 18,
    lat: 38.9640,
    lng: -119.9420,
    website: 'https://edgewoodtahoe.com/golf/',
    maps: maps('Edgewood Tahoe Golf Course, Stateline, NV'),
  },
  {
    key: 'coyote-moon',
    name: 'Coyote Moon Golf Course',
    city: 'Truckee',
    region: 'tahoe',
    architect: 'Brad Bell',
    year: 2000,
    holes: 18,
    lat: 39.3390,
    lng: -120.2210,
    website: 'https://coyotemoongolf.com/',
    maps: maps('Coyote Moon Golf Course, Truckee, CA'),
  },
  {
    key: 'old-greenwood',
    name: 'Old Greenwood',
    city: 'Truckee',
    region: 'tahoe',
    architect: 'Jack Nicklaus',
    year: 2004,
    holes: 18,
    lat: 39.3440,
    lng: -120.1540,
    website: 'https://www.oldgreenwood.com/',
    maps: maps('Old Greenwood Golf Course, Truckee, CA'),
  },
  // ── Added 2026-08-01, client approved the full research list ─────────────────
  {
    key: 'bayonet-black-horse', name: 'Bayonet & Black Horse', city: 'Seaside', region: 'monterey',
    architect: 'Gen. Robert McClure', year: 1954, holes: 36, lat: 36.6486, lng: -121.7930,
    website: 'https://www.bayonetblackhorse.com/', maps: maps('Bayonet Black Horse Golf Course, Seaside, CA'),
  },
  {
    key: 'quail-lodge', name: 'Quail Lodge Golf Club', city: 'Carmel Valley', region: 'monterey',
    architect: 'Robert Muir Graves', year: 1964, holes: 18, lat: 36.5232, lng: -121.8557,
    website: 'https://www.quaillodge.com/golf/', maps: maps('Quail Lodge Golf Club, Carmel Valley, CA'),
  },
  {
    key: 'carmel-valley-ranch', name: 'Carmel Valley Ranch', city: 'Carmel Valley', region: 'monterey',
    architect: 'Pete Dye', year: 1981, holes: 18, lat: 36.5148, lng: -121.8712,
    website: 'https://www.carmelvalleyranch.com/', maps: maps('Carmel Valley Ranch, 1 Old Ranch Rd, Carmel, CA 93923'),
  },
  {
    key: 'laguna-seca', name: 'Laguna Seca Golf Ranch', city: 'Monterey', region: 'monterey',
    architect: 'Robert Trent Jones Sr. & Jr.', year: 1970, holes: 18, lat: 36.5920, lng: -121.7830,
    website: 'https://www.lagunasecagolf.com/', maps: maps('Laguna Seca Golf Ranch, Monterey, CA'),
  },
  {
    key: 'cypress-point', name: 'Cypress Point Club', city: 'Pebble Beach', region: 'monterey',
    architect: 'Alister MacKenzie', year: 1928, holes: 18, lat: 36.5776, lng: -121.9689,
    maps: maps('Cypress Point Club, Pebble Beach, CA'), privateClub: true,
  },
  {
    key: 'tehama', name: 'Tehàma Golf Club', city: 'Carmel Valley', region: 'monterey',
    architect: 'Jay Morrish', year: 1999, holes: 18, lat: 36.4998, lng: -121.8593,
    maps: maps('Tehama Golf Club, 25000 Via Malpaso, Carmel, CA 93923'), privateClub: true,
  },
  {
    key: 'the-preserve', name: 'The Preserve Golf Club', city: 'Carmel', region: 'monterey',
    architect: 'Tom Fazio', year: 2000, holes: 18, lat: 36.4530, lng: -121.7830,
    maps: maps('The Preserve Golf Club, Carmel, CA'), privateClub: true,
  },
  {
    key: 'sharp-park', name: 'Sharp Park Golf Course', city: 'Pacifica', region: 'sf',
    architect: 'Alister MacKenzie', year: 1932, holes: 18, lat: 37.6350, lng: -122.4930,
    website: 'https://sfrecpark.org/499/Sharp-Park-Golf-Course', maps: maps('Sharp Park Golf Course, Pacifica, CA'),
  },
  {
    key: 'olympic-club', name: 'The Olympic Club', city: 'San Francisco', region: 'sf',
    architect: 'Willie Watson & Sam Whiting', year: 1924, holes: 36, lat: 37.7089, lng: -122.4936,
    maps: maps('The Olympic Club, San Francisco, CA'), privateClub: true,
  },
  {
    key: 'crystal-springs', name: 'Crystal Springs Golf Course', city: 'Burlingame', region: 'sf',
    architect: 'Herbert Fowler', year: 1924, holes: 18, lat: 37.5560, lng: -122.3800,
    website: 'https://www.playcrystalsprings.com/', maps: maps('Crystal Springs Golf Course, Burlingame, CA'),
  },
  {
    key: 'northwood', name: 'Northwood Golf Club', city: 'Monte Rio', region: 'wine',
    architect: 'Alister MacKenzie', year: 1928, holes: 9, lat: 38.4680, lng: -123.0060,
    website: 'https://northwoodgolf.com/', maps: maps('Northwood Golf Club, Monte Rio, CA'),
  },
  {
    key: 'windsor', name: 'Windsor Golf Club', city: 'Windsor', region: 'wine',
    architect: 'Fred Bliss', year: 1989, holes: 18, lat: 38.5560, lng: -122.8100,
    website: 'https://www.windsorgolf.com/', maps: maps('Windsor Golf Club, Windsor, CA'),
  },
  {
    key: 'bodega-harbour', name: 'The Links at Bodega Harbour', city: 'Bodega Bay', region: 'wine',
    architect: 'Robert Trent Jones Jr.', year: 1977, holes: 18, lat: 38.3200, lng: -123.0480,
    website: 'https://www.bodegaharbourgolf.com/', maps: maps('The Links at Bodega Harbour, Bodega Bay, CA'),
  },
  {
    key: 'sea-ranch', name: 'Sea Ranch Golf Links', city: 'The Sea Ranch', region: 'wine',
    architect: 'Robert Muir Graves', year: 1975, holes: 18, lat: 38.7250, lng: -123.4650,
    website: 'https://www.searanchgolf.com/', maps: maps('Sea Ranch Golf Links, The Sea Ranch, CA'),
  },
  {
    key: 'mayacama', name: 'Mayacama Golf Club', city: 'Santa Rosa', region: 'wine',
    architect: 'Jack Nicklaus', year: 2001, holes: 18, lat: 38.5470, lng: -122.7440,
    maps: maps('Mayacama Golf Club, Santa Rosa, CA'), privateClub: true,
  },
  {
    key: 'wente', name: 'The Course at Wente Vineyards', city: 'Livermore', region: 'eastbay',
    architect: 'Greg Norman', year: 1998, holes: 18, lat: 37.6080, lng: -121.7150,
    website: 'https://wentevineyards.com/golf/', maps: maps('The Course at Wente Vineyards, Livermore, CA'),
  },
  {
    key: 'poppy-ridge', name: 'Poppy Ridge Golf Course', city: 'Livermore', region: 'eastbay',
    architect: 'Rees Jones', year: 1996, holes: 27, lat: 37.6350, lng: -121.6710,
    website: 'https://poppyridgegolf.com/', maps: maps('Poppy Ridge Golf Course, Livermore, CA'),
  },
  {
    key: 'cinnabar-hills', name: 'Cinnabar Hills Golf Club', city: 'San Jose', region: 'valley',
    architect: 'John Harbottle III', year: 1998, holes: 27, lat: 37.2160, lng: -121.7830,
    website: 'https://www.cinnabarhills.com/', maps: maps('Cinnabar Hills Golf Club, San Jose, CA'),
  },
  {
    key: 'grays-crossing', name: "Gray's Crossing", city: 'Truckee', region: 'tahoe',
    architect: 'Peter Jacobsen & Jim Hardy', year: 2007, holes: 18, lat: 39.3520, lng: -120.1930,
    website: 'https://www.grayscrossing.com/', maps: maps("Gray's Crossing Golf Course, Truckee, CA"),
  },
  {
    key: 'palo-corona',
    name: 'Palo Corona Regional Park',
    formerName: 'Rancho Cañada Golf Club',
    city: 'Carmel',
    region: 'monterey',
    architect: 'Robert Dean Putman',
    year: 1970,
    holes: 0,
    lat: 36.5250,
    lng: -121.8900,
    website: 'https://www.mprpd.org/palo-corona-regional-park',
    maps: maps('Palo Corona Regional Park, Carmel, CA'),
    closed: true,
  },
  {
    key: 'martis-camp', name: 'Martis Camp', city: 'Truckee', region: 'tahoe',
    architect: 'Tom Fazio', year: 2007, holes: 18, lat: 39.2830, lng: -120.1440,
    maps: maps('Martis Camp Club, Truckee, CA'), privateClub: true,
  },
];

export const GOLF_REGIONS: GolfRegion[] = ['monterey', 'sf', 'wine', 'valley', 'eastbay', 'tahoe'];
