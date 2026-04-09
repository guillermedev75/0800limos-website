import { motion } from 'framer-motion';
import { Shield, Car, Clock, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';

const getItems = () => [
  { id: 1, icon: Shield, key: 'chauffeurs' },
  { id: 2, icon: Car, key: 'fleet' },
  { id: 3, icon: Clock, key: 'punctuality' },
  { id: 4, icon: Headphones, key: 'support' },
];

export function WhyUs() {
  const { t } = useTranslation();
  const items = getItems();

  return (
    <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A961 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            {t('whyUs.label')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            {t('whyUs.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-4 md:p-6 rounded-lg border border-gray-200 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg
                  flex flex-row items-start gap-4
                  md:flex-col md:text-center md:items-center"
              >
                {/* Icon + badge (desktop: overlapping bottom of icon, mobile: inline row) */}
                <div className="flex-shrink-0 relative flex flex-col items-center mb-0 md:mb-5">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                    <Icon className="text-gold" size={22} />
                  </div>
                  {/* Badge overlapping inside bottom of icon on desktop */}
                  <div className="hidden md:flex absolute bottom-1 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                    {t(`whyUs.items.${item.key}.stat`)}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  {/* Badge inline on mobile */}
                  <div className="inline-flex md:hidden bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
                    {t(`whyUs.items.${item.key}.stat`)}
                  </div>
                  <h3 className="font-display font-bold text-sm md:text-xl text-gray-900 uppercase tracking-wider mb-1 md:mb-3 leading-tight">
                    {t(`whyUs.items.${item.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-base leading-relaxed">
                    {t(`whyUs.items.${item.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
