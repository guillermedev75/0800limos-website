import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import 'leaflet/dist/leaflet.css';

// ── Service Areas ─────────────────────────────────────────────────────────────
const AREAS = [
  { key: 'sf',         lat: 37.7749, lng: -122.4194, image: '/images/areas/sf.jpg' },
  { key: 'napa',       lat: 38.2975, lng: -122.2869, image: '/images/areas/napa.jpg' },
  { key: 'sonoma',     lat: 38.2919, lng: -122.4580, image: '/images/areas/sonoma.jpg' },
  { key: 'monterey',   lat: 36.6002, lng: -121.8947, image: '/images/areas/monterey.jpg' },
  { key: 'tahoe',      lat: 38.9399, lng: -120.0324, image: '/images/areas/tahoe.jpg' },
  { key: 'silicon',    lat: 37.3861, lng: -122.0839, image: '/images/areas/silicon-valley.jpg' },
  { key: 'carmel',     lat: 36.5552, lng: -121.9233, image: '/images/areas/monterey.jpg' },
  { key: 'sacramento', lat: 38.5816, lng: -121.4944, image: '/images/areas/sf.jpg' },
  { key: 'pebble',     lat: 36.5713, lng: -121.9470, image: '/images/areas/monterey.jpg' },
  { key: 'santacruz',  lat: 36.9741, lng: -122.0308, image: '/images/areas/monterey.jpg' },
  { key: 'calistoga',  lat: 38.5788, lng: -122.5797, image: '/images/areas/napa.jpg' },
  { key: 'yountville', lat: 38.4024, lng: -122.3614, image: '/images/areas/napa.jpg' },
  { key: 'halfmoon',   lat: 37.4636, lng: -122.4286, image: '/images/areas/sf.jpg' },
];

// ── Michelin Restaurants ──────────────────────────────────────────────────────
const MICHELIN = [
  // ★★★
  { key: 'french-laundry',  stars: 3, name: 'The French Laundry',  chef: 'Thomas Keller',          cuisine: 'Contemporary French-American', city: 'Yountville',      lat: 38.4039, lng: -122.3650, reservation: 'https://exploretock.com/thefrenchlaundry',      maps: 'https://maps.google.com/?q=The+French+Laundry,+Yountville,+CA' },
  { key: 'atelier-crenn',   stars: 3, name: 'Atelier Crenn',       chef: 'Dominique Crenn',        cuisine: 'Poetic Contemporary',         city: 'San Francisco',   lat: 37.7983, lng: -122.4358, reservation: 'https://www.opentable.com/r/atelier-crenn',       maps: 'https://maps.google.com/?q=Atelier+Crenn,+San+Francisco,+CA' },
  { key: 'benu',            stars: 3, name: 'Benu',                 chef: 'Corey Lee',              cuisine: 'Asian-influenced Contemporary', city: 'San Francisco', lat: 37.7845, lng: -122.4007, reservation: 'https://exploretock.com/benu',                     maps: 'https://maps.google.com/?q=Benu+Restaurant,+San+Francisco,+CA' },
  { key: 'quince',          stars: 3, name: 'Quince',               chef: 'Michael Tusk',           cuisine: 'Italian-Californian',         city: 'San Francisco',   lat: 37.7971, lng: -122.4038, reservation: 'https://www.quincerestaurant.com/reservations',   maps: 'https://maps.google.com/?q=Quince+Restaurant,+San+Francisco,+CA' },
  { key: 'singlethread',    stars: 3, name: 'SingleThread',         chef: 'Kyle Connaughton',       cuisine: 'Japanese-Californian',        city: 'Healdsburg',      lat: 38.6115, lng: -122.8688, reservation: 'https://www.opentable.com/r/singlethread-healdsburg', maps: 'https://maps.google.com/?q=SingleThread+Farms+Restaurant,+Healdsburg,+CA' },
  // ★★
  { key: 'acquerello',      stars: 2, name: 'Acquerello',           chef: 'Suzette Gresham',        cuisine: 'Northern Italian',            city: 'San Francisco',   lat: 37.7933, lng: -122.4208, reservation: 'https://www.opentable.com/r/acquerello-san-francisco', maps: 'https://maps.google.com/?q=Acquerello,+San+Francisco,+CA' },
  { key: 'aubergine',       stars: 2, name: 'Aubergine',            chef: 'Justin Cogley',          cuisine: 'Contemporary Californian',    city: 'Carmel-by-the-Sea', lat: 36.5548, lng: -121.9233, reservation: 'https://www.opentable.com/r/aubergine-carmel-by-the-sea', maps: 'https://maps.google.com/?q=Aubergine,+Carmel-by-the-Sea,+CA' },
  { key: 'birdsong',        stars: 2, name: 'Birdsong',             chef: 'Chris Bleidorn',         cuisine: 'Wood-fired Californian',      city: 'San Francisco',   lat: 37.7798, lng: -122.4068, reservation: 'https://exploretock.com/birdsong-sf',              maps: 'https://maps.google.com/?q=Birdsong,+San+Francisco,+CA' },
  { key: 'californios',     stars: 2, name: 'Californios',          chef: 'Val M. Cantú',           cuisine: 'Modern Mexican',              city: 'San Francisco',   lat: 37.7605, lng: -122.4177, reservation: 'https://exploretock.com/californios',              maps: 'https://maps.google.com/?q=Californios,+San+Francisco,+CA' },
  { key: 'commis',          stars: 2, name: 'Commis',               chef: 'James Syhabout',         cuisine: 'Contemporary Californian',    city: 'Oakland',         lat: 37.8346, lng: -122.2557, reservation: 'https://exploretock.com/commis',                  maps: 'https://maps.google.com/?q=Commis,+Oakland,+CA' },
  { key: 'enclos',          stars: 2, name: 'Enclos',               chef: 'Brandon Sharp',          cuisine: 'Farm-to-table Californian',   city: 'Sonoma',          lat: 38.2912, lng: -122.4572, reservation: 'https://www.opentable.com/r/enclos-sonoma',        maps: 'https://maps.google.com/?q=Enclos,+Sonoma,+CA' },
  { key: 'kiln',            stars: 2, name: 'Kiln',                 chef: 'Sang Yoon',              cuisine: 'Contemporary',                city: 'San Francisco',   lat: 37.7764, lng: -122.4240, reservation: 'https://resy.com/cities/sf/kiln',                  maps: 'https://maps.google.com/?q=Kiln,+San+Francisco,+CA' },
  { key: 'lazybear',        stars: 2, name: 'Lazy Bear',            chef: 'David Barzelay',         cuisine: 'Contemporary American',       city: 'San Francisco',   lat: 37.7604, lng: -122.4143, reservation: 'https://exploretock.com/lazybear',                maps: 'https://maps.google.com/?q=Lazy+Bear,+San+Francisco,+CA' },
  { key: 'saison',          stars: 2, name: 'Saison',               chef: 'Richard Lee',            cuisine: 'Wood-fire Californian',       city: 'San Francisco',   lat: 37.7810, lng: -122.3973, reservation: 'https://exploretock.com/saison',                  maps: 'https://maps.google.com/?q=Saison,+San+Francisco,+CA' },
  { key: 'sons-daughters',  stars: 2, name: "Son's & Daughters",    chef: 'Teague Moriarty',        cuisine: 'Contemporary Californian',    city: 'San Francisco',   lat: 37.7926, lng: -122.4133, reservation: 'https://resy.com/cities/sf/sons-and-daughters',   maps: 'https://maps.google.com/?q=Sons+and+Daughters,+San+Francisco,+CA' },
  // ★
  { key: 'angler',          stars: 1, name: 'Angler',               chef: 'Joshua Skenes',          cuisine: 'Contemporary Seafood',        city: 'San Francisco',   lat: 37.7952, lng: -122.3946, reservation: 'https://resy.com/cities/sf/angler-san-francisco',  maps: 'https://maps.google.com/?q=Angler,+San+Francisco,+CA' },
  { key: 'auro',            stars: 1, name: 'Auro',                 chef: 'Rogelio Garcia',         cuisine: 'French-Californian',          city: 'Calistoga',       lat: 38.5788, lng: -122.5797, reservation: 'https://www.opentable.com/r/auro-calistoga',       maps: 'https://maps.google.com/?q=Auro+Four+Seasons,+Calistoga,+CA' },
  { key: 'auberge-soleil',  stars: 1, name: 'Auberge du Soleil',    chef: 'Robert Curry',           cuisine: 'Californian-French',          city: 'Rutherford',      lat: 38.4469, lng: -122.3845, reservation: 'https://www.opentable.com/r/auberge-du-soleil-rutherford', maps: 'https://maps.google.com/?q=Auberge+du+Soleil,+Rutherford,+CA' },
  { key: 'bar-crenn',       stars: 1, name: 'Bar Crenn',            chef: 'Dominique Crenn',        cuisine: 'Contemporary Wine Bar',       city: 'San Francisco',   lat: 37.7981, lng: -122.4356, reservation: 'https://www.opentable.com/r/bar-crenn-san-francisco', maps: 'https://maps.google.com/?q=Bar+Crenn,+San+Francisco,+CA' },
  { key: 'chez-noir',       stars: 1, name: 'Chez Noir',            chef: 'Jonny Black',            cuisine: 'European-Californian',        city: 'Carmel-by-the-Sea', lat: 36.5548, lng: -121.9228, reservation: 'https://www.opentable.com/r/chez-noir-carmel-by-the-sea', maps: 'https://maps.google.com/?q=Chez+Noir,+Carmel-by-the-Sea,+CA' },
  { key: 'cyrus',           stars: 1, name: 'Cyrus',                chef: 'Douglas Keane',          cuisine: 'Contemporary Californian',    city: 'Geyserville',     lat: 38.7221, lng: -122.8837, reservation: 'https://exploretock.com/cyrus',                   maps: 'https://maps.google.com/?q=Cyrus,+Geyserville,+CA' },
  { key: 'hilda-jesse',     stars: 1, name: 'Hilda and Jesse',      chef: 'Rachel Sillcocks',       cuisine: 'American All-day',            city: 'San Francisco',   lat: 37.8002, lng: -122.4100, reservation: 'https://resy.com/cities/sf/hilda-and-jesse',       maps: 'https://maps.google.com/?q=Hilda+and+Jesse,+San+Francisco,+CA' },
  { key: 'kenzo',           stars: 1, name: 'Kenzo',                chef: 'Hiroyuki Kanda',         cuisine: 'Japanese Kaiseki',            city: 'Napa',            lat: 38.2975, lng: -122.2850, reservation: 'https://exploretock.com/kenzo',                   maps: 'https://maps.google.com/?q=Kenzo+Restaurant,+Napa,+CA' },
  { key: 'kin-khao',        stars: 1, name: 'Kin Khao',             chef: 'Pim Techamuanvivit',     cuisine: 'Thai',                        city: 'San Francisco',   lat: 37.7849, lng: -122.4094, reservation: 'https://resy.com/cities/sf/kin-khao',               maps: 'https://maps.google.com/?q=Kin+Khao,+San+Francisco,+CA' },
  { key: 'localis',         stars: 1, name: 'Localis',              chef: 'Chris Barnum-Dann',      cuisine: 'Farm-to-table Californian',   city: 'Sacramento',      lat: 38.5748, lng: -121.4854, reservation: 'https://exploretock.com/localis',                 maps: 'https://maps.google.com/?q=Localis,+Sacramento,+CA' },
  { key: 'mister-jius',     stars: 1, name: "Mister Jiu's",         chef: 'Brandon Jew',            cuisine: 'Chinese-American',            city: 'San Francisco',   lat: 37.7956, lng: -122.4075, reservation: 'https://resy.com/cities/sf/mister-jius',            maps: 'https://maps.google.com/?q=Mister+Jiu%27s,+San+Francisco,+CA' },
  { key: 'nari',            stars: 1, name: 'Nari',                 chef: 'Pim Techamuanvivit',     cuisine: 'Thai',                        city: 'San Francisco',   lat: 37.7857, lng: -122.4317, reservation: 'https://www.opentable.com/r/nari-san-francisco',    maps: 'https://maps.google.com/?q=Nari,+San+Francisco,+CA' },
  { key: 'niku',            stars: 1, name: 'Niku Steakhouse',      chef: 'Dustin Falcon',          cuisine: 'Japanese Wagyu',              city: 'San Francisco',   lat: 37.7798, lng: -122.4022, reservation: 'https://exploretock.com/niku-steakhouse-san-francisco', maps: 'https://maps.google.com/?q=Niku+Steakhouse,+San+Francisco,+CA' },
  { key: 'nisei',           stars: 1, name: 'Nisei',                chef: 'David Yoshimura',        cuisine: 'Japanese-American (Nikkei)',  city: 'San Francisco',   lat: 37.7997, lng: -122.4177, reservation: 'https://resy.com/cities/sf/nisei',                  maps: 'https://maps.google.com/?q=Nisei,+San+Francisco,+CA' },
  { key: 'o-claude',        stars: 1, name: "O' by Claude Le Tohic", chef: 'Claude Le Tohic',      cuisine: 'French Fine Dining',          city: 'San Francisco',   lat: 37.7881, lng: -122.4006, reservation: 'https://resy.com/cities/sf/o-by-claude-le-tohic',   maps: 'https://maps.google.com/?q=O+by+Claude+Le+Tohic,+San+Francisco,+CA' },
  { key: 'plumed-horse',    stars: 1, name: 'Plumed Horse',         chef: 'Peter Armellino',        cuisine: 'Contemporary American',       city: 'Saratoga',        lat: 37.2638, lng: -122.0233, reservation: 'https://www.opentable.com/r/plumed-horse-saratoga',  maps: 'https://maps.google.com/?q=Plumed+Horse,+Saratoga,+CA' },
  { key: 'press',           stars: 1, name: 'Press',                chef: 'Philip Tessier',         cuisine: 'American Contemporary',       city: 'St. Helena',      lat: 38.5049, lng: -122.4700, reservation: 'https://www.opentable.com/r/press-st-helena',       maps: 'https://maps.google.com/?q=Press,+St.+Helena,+CA' },
  { key: 'protege',         stars: 1, name: 'Protégé',              chef: 'Dennis Martin',          cuisine: 'French-American',             city: 'Palo Alto',       lat: 37.4419, lng: -122.1430, reservation: 'https://www.opentable.com/r/protege-palo-alto',      maps: 'https://maps.google.com/?q=Protege,+Palo+Alto,+CA' },
  { key: 'san-ho-won',      stars: 1, name: 'San Ho Won',           chef: 'Corey Lee',              cuisine: 'Korean BBQ Elevated',         city: 'San Francisco',   lat: 37.7625, lng: -122.4215, reservation: 'https://resy.com/cities/sf/san-ho-won',             maps: 'https://maps.google.com/?q=San+Ho+Won,+San+Francisco,+CA' },
  { key: 'the-shota',       stars: 1, name: 'The Shota',            chef: 'Shota Nakajima',         cuisine: 'Japanese Omakase',            city: 'San Francisco',   lat: 37.7928, lng: -122.3990, reservation: 'https://exploretock.com/the-shota',                maps: 'https://maps.google.com/?q=The+Shota,+San+Francisco,+CA' },
  { key: 'sorrel',          stars: 1, name: 'Sorrel',               chef: 'Alexander Hong',         cuisine: 'Californian-Italian',         city: 'San Francisco',   lat: 37.7877, lng: -122.4279, reservation: 'https://resy.com/cities/sf/sorrel',                  maps: 'https://maps.google.com/?q=Sorrel,+San+Francisco,+CA' },
  { key: 'state-bird',      stars: 1, name: 'State Bird Provisions', chef: 'Stuart Brioza',         cuisine: 'Californian Dim Sum-style',   city: 'San Francisco',   lat: 37.7840, lng: -122.4321, reservation: 'https://exploretock.com/statebird',               maps: 'https://maps.google.com/?q=State+Bird+Provisions,+San+Francisco,+CA' },
  { key: 'the-kitchen',     stars: 1, name: 'The Kitchen',          chef: 'Kelly McCown',           cuisine: 'Interactive Californian',     city: 'Sacramento',      lat: 38.5816, lng: -121.4480, reservation: 'https://exploretock.com/thekitchenrestaurant',      maps: 'https://maps.google.com/?q=The+Kitchen+Restaurant,+Sacramento,+CA' },
  { key: 'village-pub',     stars: 1, name: 'The Village Pub',      chef: 'Mark Sullivan',          cuisine: 'Contemporary American',       city: 'Woodside',        lat: 37.4300, lng: -122.2540, reservation: 'https://www.opentable.com/r/the-village-pub-woodside', maps: 'https://maps.google.com/?q=The+Village+Pub,+Woodside,+CA' },
  { key: 'wakuriya',        stars: 1, name: 'Wakuriya',             chef: 'Katsuhiro Yamasaki',     cuisine: 'Japanese Kaiseki',            city: 'San Mateo',       lat: 37.5677, lng: -122.3227, reservation: 'https://www.yelp.com/biz/wakuriya-san-mateo',        maps: 'https://maps.google.com/?q=Wakuriya,+San+Mateo,+CA' },
];

type MapMode = 'areas' | 'michelin';
type StarsFilter = 0 | 1 | 2 | 3;
type AreaItem = typeof AREAS[number];
type MichelinItem = typeof MICHELIN[number];
type Selected =
  | { type: 'area'; data: AreaItem }
  | { type: 'michelin'; data: MichelinItem }
  | null;

const STAR_COLORS: Record<number, string> = { 3: '#9B2335', 2: '#C0392B', 1: '#C9A961' };
const STAR_LABEL = (n: number) => '★'.repeat(n);

function michelinIcon(stars: number) {
  const color = STAR_COLORS[stars];
  return `
    <div style="
      background:${color};
      color:white;
      border-radius:50%;
      width:${stars === 3 ? 34 : stars === 2 ? 30 : 26}px;
      height:${stars === 3 ? 34 : stars === 2 ? 30 : 26}px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:${stars === 3 ? 10 : 9}px;
      font-weight:700;
      border:2px solid white;
      box-shadow:0 2px 6px rgba(0,0,0,0.35);
      cursor:pointer;
      letter-spacing:-0.5px;
    ">${STAR_LABEL(stars)}</div>`;
}

const goldPinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
  <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#C9A961"/>
  <circle cx="14" cy="14" r="5" fill="white"/>
</svg>`;

export function Areas() {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const layersRef = useRef<{ areas: any; michelin: any }>({ areas: null, michelin: null });
  const [mapReady, setMapReady] = useState(false);
  const [mode, setMode] = useState<MapMode>('areas');
  const [starsFilter, setStarsFilter] = useState<StarsFilter>(0);
  const [selected, setSelected] = useState<Selected>(null);

  const locations = t('areas.locations', { returnObjects: true }) as Record<
    string, { name: string; description: string; highlights: string[] }
  >;

  // Init map once
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;
    let isMounted = true;

    (async () => {
      const L = (await import('leaflet')).default;
      if (!isMounted || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [37.8, -122.1],
        zoom: 7,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);
      (map.getPanes().tilePane as HTMLElement).style.filter = 'grayscale(100%) brightness(1.05)';

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      layersRef.current.areas = L.layerGroup();
      layersRef.current.michelin = L.layerGroup();

      mapInstanceRef.current = map;
      setMapReady(true);
    })();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Rebuild layers when mode / filter / locations changes
  useEffect(() => {
    if (!mapReady || !mapInstanceRef.current) return;

    (async () => {
      const L = (await import('leaflet')).default;
      const map = mapInstanceRef.current;

      // Clear both layer groups
      layersRef.current.areas.clearLayers();
      layersRef.current.michelin.clearLayers();
      layersRef.current.areas.remove();
      layersRef.current.michelin.remove();

      if (mode === 'areas') {
        const pinIcon = L.divIcon({ html: goldPinSvg, className: '', iconSize: [28, 36], iconAnchor: [14, 36] });
        AREAS.forEach((area) => {
          const name = locations[area.key]?.name ?? area.key;
          const marker = L.marker([area.lat, area.lng], { icon: pinIcon });
          marker.bindTooltip(name, { permanent: false, direction: 'top', offset: [0, -38], className: 'leaflet-gold-tooltip' });
          marker.on('click', () => setSelected({ type: 'area', data: area }));
          layersRef.current.areas.addLayer(marker);
        });
        layersRef.current.areas.addTo(map);
      } else {
        const filtered = starsFilter === 0 ? MICHELIN : MICHELIN.filter(r => r.stars === starsFilter);
        filtered.forEach((r) => {
          const icon = L.divIcon({ html: michelinIcon(r.stars), className: '', iconSize: [34, 34], iconAnchor: [17, 17] });
          const marker = L.marker([r.lat, r.lng], { icon });
          marker.bindTooltip(`<strong>${r.name}</strong><br/>${STAR_LABEL(r.stars)} · ${r.city}`, {
            permanent: false, direction: 'top', offset: [0, -20], className: 'leaflet-gold-tooltip',
          });
          marker.on('click', () => setSelected({ type: 'michelin', data: r }));
          layersRef.current.michelin.addLayer(marker);
        });
        layersRef.current.michelin.addTo(map);
      }
    })();
  }, [mapReady, mode, starsFilter, locations]);

  return (
    <section id="areas" className="py-12 md:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              {t('areas.label')}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
              {t('areas.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mb-6" />
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('areas.description')}
            </p>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-display font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {t('areas.customDestination.title')}
              </h4>
              <p className="text-gray-600 mb-4">{t('areas.customDestination.description')}</p>
              <a href="tel:6506669333" className="inline-flex items-center gap-2 text-gold hover:text-gray-900 transition-colors font-semibold">
                {t('areas.cta')} <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: map + controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mode toggle */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                <button
                  onClick={() => setMode('areas')}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    mode === 'areas' ? 'bg-gold text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <MapPin size={12} /> Service Areas
                </button>
                <button
                  onClick={() => setMode('michelin')}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    mode === 'michelin' ? 'bg-[#9B2335] text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  ★ Michelin Stars
                </button>
              </div>

              {/* Stars filter — only in michelin mode */}
              <AnimatePresence>
                {mode === 'michelin' && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    className="flex bg-white border border-gray-200 rounded-full p-1 shadow-sm gap-0.5"
                  >
                    {([0, 1, 2, 3] as StarsFilter[]).map((n) => (
                      <button
                        key={n}
                        onClick={() => setStarsFilter(n)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                          starsFilter === n
                            ? n === 0 ? 'bg-gray-800 text-white' : `text-white shadow-sm`
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                        style={starsFilter === n && n > 0 ? { backgroundColor: STAR_COLORS[n] } : {}}
                      >
                        {n === 0 ? 'All' : '★'.repeat(n)}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Map */}
            <div
              ref={mapRef}
              className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
              style={{ height: 480, position: 'relative', zIndex: 0 }}
            />

            {/* Legend */}
            {mode === 'michelin' && (
              <div className="flex items-center gap-4 mt-3 px-1">
                {[3, 2, 1].map(n => (
                  <div key={n} className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: STAR_COLORS[n] }} />
                    <span className="text-xs text-gray-500 font-medium">{'★'.repeat(n)}</span>
                  </div>
                ))}
                <span className="text-xs text-gray-400 ml-auto">Click a pin for details</span>
              </div>
            )}
          </motion.div>
        </div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[480px] top-1/2 -translate-y-1/2 z-[9999] rounded-2xl overflow-hidden shadow-2xl"
            >
              {selected.type === 'area' ? (
                /* ── Area modal ── */
                <>
                  <div className="relative h-52">
                    <img src={selected.data.image} alt={locations[selected.data.key]?.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors cursor-pointer">
                      <X size={16} />
                    </button>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gold">
                      <MapPin size={14} /><span className="text-xs font-medium uppercase tracking-wider">Bay Area</span>
                    </div>
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="font-display font-bold text-xl text-gray-900 uppercase tracking-wider mb-2">{locations[selected.data.key]?.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{locations[selected.data.key]?.description}</p>
                    {locations[selected.data.key]?.highlights && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {locations[selected.data.key].highlights.map((h, i) => (
                          <span key={i} className="inline-flex items-center gap-1 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/20">{h}</span>
                        ))}
                      </div>
                    )}
                    <a href="https://customer.moovs.app/0800-limos-inc/request/new" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors" onClick={() => setSelected(null)}>
                      {t('areas.cta')} <ArrowRight size={16} />
                    </a>
                  </div>
                </>
              ) : (
                /* ── Michelin modal ── */
                <>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 pb-5">
                    <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                      <X size={16} />
                    </button>
                    {/* Stars */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full text-white text-sm font-bold" style={{ backgroundColor: STAR_COLORS[selected.data.stars] }}>
                        {'★'.repeat(selected.data.stars)}
                      </div>
                      <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                        {selected.data.stars === 3 ? 'Exceptional' : selected.data.stars === 2 ? 'Excellent' : 'High Quality'}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white tracking-wide mb-1">{selected.data.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <span>{selected.data.chef}</span>
                      <span className="text-gray-600">·</span>
                      <span>{selected.data.city}</span>
                    </div>
                  </div>
                  <div className="bg-white p-5">
                    <div className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                      {selected.data.cuisine}
                    </div>
                    <div className="flex gap-3">
                      <a href={selected.data.maps} target="_blank" rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors">
                        <Navigation size={14} /> Google Maps
                      </a>
                      <a href={selected.data.reservation} target="_blank" rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
                        style={{ backgroundColor: STAR_COLORS[selected.data.stars] }}>
                        <ExternalLink size={14} /> Reserve
                      </a>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-3">
                      Need a ride? <a href="tel:6506669333" className="text-gold hover:underline font-medium">Call 0800 Limos</a>
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
