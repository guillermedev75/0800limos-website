import { motion } from 'framer-motion';
import { Plane, Briefcase, Sparkles, Grape, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';

const getServices = () => [
  {
    id: 1,
    icon: Plane,
    key: 'airport',
    image: '/images/services/airport.jpg',
  },
  {
    id: 2,
    icon: Building2,
    key: 'fbo',
    image: '/images/services/corporate.jpg',
  },
  {
    id: 3,
    icon: Briefcase,
    key: 'corporate',
    image: '/images/services/corporate.jpg',
  },
  {
    id: 4,
    icon: Sparkles,
    key: 'special',
    image: '/images/services/wedding.jpg',
  },
  {
    id: 5,
    icon: Grape,
    key: 'wine',
    image: '/images/services/wine-tour.jpg',
  },
];

export function Services() {
  const { t } = useTranslation();
  const services = getServices();

  return (
    <section id="services" className="py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            {t('services.label')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const features = t(`services.items.${service.key}.features`, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="text-gold" size={28} />
                </div>

                <h3 className="font-display font-bold text-xl text-gray-900 uppercase tracking-wider mb-4">
                  {t(`services.items.${service.key}.title`)}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`services.items.${service.key}.description`)}
                </p>

                <ul className="space-y-2">
                  {features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
