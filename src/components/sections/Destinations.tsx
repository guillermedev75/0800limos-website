import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const getDestinations = () => [
  { id: 1, key: 'shasta', image: '/images/destinations/mount-shasta.jpg' },
  { id: 2, key: 'parasailing', image: '/images/destinations/parasailing.jpg' },
  { id: 3, key: 'vineyard', image: '/images/destinations/vineyard.jpg' },
  { id: 4, key: 'winery', image: '/images/destinations/winery.jpg' },
  { id: 5, key: 'tours', image: '/images/destinations/winery-tour.jpg' },
];

export function Destinations() {
  const { t } = useTranslation();
  const destinations = getDestinations();

  return (
    <section id="destinations" className="bg-white">
      {/* Header */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
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
          <p className="text-gray-600 text-lg">
            {t('destinations.description')}
          </p>
        </motion.div>
      </div>

      {/* Destinations - Layout Scroll */}
      <div className="space-y-0">
        {destinations.map((dest, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[70vh] md:min-h-[80vh] flex items-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={dest.image}
                  alt={t(`destinations.items.${dest.key}.name`)}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  isEven 
                    ? 'bg-gradient-to-r from-black/60 via-black/30 to-transparent' 
                    : 'bg-gradient-to-l from-black/60 via-black/30 to-transparent'
                }`} />
              </div>

              {/* Content Card */}
              <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
                <div className={`max-w-xl ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-2xl">
                    <div className="flex items-center gap-2 text-gold mb-4">
                      <MapPin size={18} />
                      <span className="text-sm font-medium uppercase tracking-wider">
                        {t(`destinations.items.${dest.key}.location`)}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 uppercase tracking-wider mb-4">
                      {t(`destinations.items.${dest.key}.name`)}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {t(`destinations.items.${dest.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
