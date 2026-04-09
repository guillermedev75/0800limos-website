import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const getDestinations = () => [
  { id: 1, key: 'shasta', image: '/images/destinations/mount-shasta.jpg' },
  { id: 2, key: 'parasailing', image: '/images/destinations/parasailing.jpg' },
  { id: 3, key: 'winery', image: '/images/destinations/winery.jpg' },
  { id: 4, key: 'tours', image: '/images/destinations/winery-tour.jpg' },
];

export function Destinations() {
  const { t } = useTranslation();
  const destinations = getDestinations();
  const total = destinations.length;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const mod = (n: number, m: number) => ((n % m) + m) % m;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((c) => mod(c + dir, total));
  }, [total]);

  const getCard = (offset: number) => destinations[mod(current + offset, total)];

  return (
    <section id="destinations" className="bg-white py-12 md:py-20">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            {t('destinations.label')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            {t('destinations.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 text-base">
            {t('destinations.description')}
          </p>
        </motion.div>
      </div>

      {/* Coverflow Carousel */}
      <div className="relative overflow-hidden select-none">
        <div className="flex items-center justify-center gap-3 md:gap-5 px-2">

          {/* Prev card */}
          <motion.div
            key={`prev-${mod(current - 1, total)}`}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
            style={{ width: '28%', maxWidth: 260 }}
            animate={{ scale: 0.82, filter: 'blur(2px)', opacity: 0.6 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => go(-1)}
          >
            <div className="aspect-[2/3]">
              <img
                src={getCard(-1).image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>

          {/* Center card */}
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.85 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl z-10 cursor-pointer"
              style={{ width: '62%', maxWidth: 520 }}
              onClick={() => go(1)}
            >
              <div className="aspect-[2/3] md:aspect-[16/9]">
                <img
                  src={getCard(0).image}
                  alt={t(`destinations.items.${getCard(0).key}.name`)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <div className="flex items-center gap-2 text-gold mb-2">
                  <MapPin size={14} />
                  <span className="text-xs font-medium uppercase tracking-widest">
                    {t(`destinations.items.${getCard(0).key}.location`)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl md:text-3xl text-white uppercase tracking-wider mb-2">
                  {t(`destinations.items.${getCard(0).key}.name`)}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed hidden md:block">
                  {t(`destinations.items.${getCard(0).key}.description`)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next card */}
          <motion.div
            key={`next-${mod(current + 1, total)}`}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
            style={{ width: '28%', maxWidth: 260 }}
            animate={{ scale: 0.82, filter: 'blur(2px)', opacity: 0.6 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => go(1)}
          >
            <div className="aspect-[2/3]">
              <img
                src={getCard(1).image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {destinations.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Arrow buttons */}
        <button
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
