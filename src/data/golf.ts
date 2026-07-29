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

export type GolfRegion = 'monterey' | 'sf' | 'wine' | 'valley' | 'tahoe';

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
  website: string;
  maps: string;
  /** Set when the course is not currently playable — surfaced as a banner. */
  closed?: boolean;
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
];

export const GOLF_REGIONS: GolfRegion[] = ['monterey', 'sf', 'wine', 'valley', 'tahoe'];
