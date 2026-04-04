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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group bg-white p-6 rounded-lg border border-gray-200 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-gold" size={32} />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t(`whyUs.items.${item.key}.stat`)}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-gray-900 uppercase tracking-wider mb-3">
                  {t(`whyUs.items.${item.key}.title`)}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {t(`whyUs.items.${item.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
