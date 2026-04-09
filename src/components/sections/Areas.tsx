import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import 'leaflet/dist/leaflet.css';

const AREAS = [
  { key: 'sf',       lat: 37.7749, lng: -122.4194, image: '/images/areas/sf.jpg' },
  { key: 'napa',     lat: 38.2975, lng: -122.2869, image: '/images/areas/napa.jpg' },
  { key: 'sonoma',   lat: 38.2919, lng: -122.4580, image: '/images/areas/sonoma.jpg' },
  { key: 'monterey', lat: 36.6002, lng: -121.8947, image: '/images/areas/monterey.jpg' },
  { key: 'tahoe',    lat: 38.9399, lng: -120.0324, image: '/images/areas/tahoe.jpg' },
  { key: 'silicon',  lat: 37.3861, lng: -122.0839, image: '/images/areas/silicon-valley.jpg' },
];

type AreaItem = typeof AREAS[number];

export function Areas() {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [selected, setSelected] = useState<AreaItem | null>(null);

  const locations = t('areas.locations', { returnObjects: true }) as Record<string, { name: string; description: string; highlights: string[] }>;

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let isMounted = true;

    (async () => {
      const L = (await import('leaflet')).default;

      if (!isMounted || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [37.7, -121.9],
        zoom: 8,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: false,
      });

      // Grayscale OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(map);

      // Apply grayscale via CSS on the tile layer pane
      const tilePane = map.getPanes().tilePane as HTMLElement;
      tilePane.style.filter = 'grayscale(100%) brightness(1.05)';

      // Gold SVG pin icon
      const pinIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
          <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#C9A961"/>
          <circle cx="14" cy="14" r="5" fill="white"/>
        </svg>`,
        className: '',
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -36],
      });

      AREAS.forEach((area) => {
        const name = (locations as Record<string, { name: string }>)[area.key]?.name ?? area.key;
        const marker = L.marker([area.lat, area.lng], { icon: pinIcon }).addTo(map);
        marker.bindTooltip(name, {
          permanent: false,
          direction: 'top',
          offset: [0, -38],
          className: 'leaflet-gold-tooltip',
        });
        marker.on('click', () => {
          setSelected(area);
        });
      });

      mapInstanceRef.current = map;
    })();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="areas" className="py-12 md:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mb-6"></div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('areas.description')}
            </p>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-display font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {t('areas.customDestination.title')}
              </h4>
              <p className="text-gray-600 mb-4">
                {t('areas.customDestination.description')}
              </p>
              <a
                href="tel:6506669333"
                className="inline-flex items-center gap-2 text-gold hover:text-gray-900 transition-colors font-semibold"
              >
                {t('areas.cta')}
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              ref={mapRef}
              className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
              style={{ height: 460, position: 'relative', zIndex: 0 }}
            />
          </motion.div>
        </div>
      </Container>

      {/* Overlay card */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
              <div className="relative h-52">
                <img
                  src={selected.image}
                  alt={locations[selected.key]?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gold">
                  <MapPin size={14} />
                  <span className="text-xs font-medium uppercase tracking-wider">Bay Area</span>
                </div>
              </div>
              <div className="bg-white p-5">
                <h3 className="font-display font-bold text-xl text-gray-900 uppercase tracking-wider mb-2">
                  {locations[selected.key]?.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {locations[selected.key]?.description}
                </p>
                {locations[selected.key]?.highlights && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {locations[selected.key].highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/20">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href="https://customer.moovs.app/0800-limos-inc/request/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                  onClick={() => setSelected(null)}
                >
                  {t('areas.cta')}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
