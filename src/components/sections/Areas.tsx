import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';

const getAreas = () => [
  { id: 1, key: 'sf', image: '/images/areas/sf.jpg' },
  { id: 2, key: 'napa', image: '/images/areas/napa.jpg' },
  { id: 3, key: 'sonoma', image: '/images/areas/sonoma.jpg' },
  { id: 4, key: 'monterey', image: '/images/areas/monterey.jpg' },
  { id: 5, key: 'tahoe', image: '/images/areas/tahoe.jpg' },
  { id: 6, key: 'silicon', image: '/images/areas/silicon-valley.jpg' },
];

export function Areas() {
  const { t } = useTranslation();
  const areas = getAreas();
  const locations = t('areas.locations', { returnObjects: true }) as Record<string, { name: string; description: string }>;

  return (
    <section id="areas" className="py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gold/50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="absolute inset-0">
                  <img
                    src={area.image}
                    alt={locations[area.key]?.name}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
                </div>
                
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white uppercase tracking-wider mb-1">
                        {locations[area.key]?.name}
                      </h4>
                      <p className="text-white/80 text-sm">
                        {locations[area.key]?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
