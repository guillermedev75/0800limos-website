import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Briefcase, Sparkles, Grape, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';

const getServices = () => [
  { id: 1, icon: Plane, key: 'airport' },
  { id: 2, icon: Building2, key: 'fbo' },
  { id: 3, icon: Briefcase, key: 'corporate' },
  { id: 4, icon: Sparkles, key: 'special' },
  { id: 5, icon: Grape, key: 'wine' },
];

export function Services() {
  const { t } = useTranslation();
  const services = getServices();
  const [activeKey, setActiveKey] = useState<string>(services[0].key);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isUserInteracting = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isUserInteracting.current) return;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        const viewportCenter = window.innerHeight / 2;
        let closest: { key: string; dist: number } | null = null;

        cardRefs.current.forEach((el, key) => {
          const rect = el.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - viewportCenter);
          if (!closest || dist < closest.dist) {
            closest = { key, dist };
          }
        });

        if (closest) {
          setActiveKey(closest.key);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleCardClick = (key: string) => {
    isUserInteracting.current = true;
    setActiveKey(key);
    setTimeout(() => { isUserInteracting.current = false; }, 500);
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            {t('services.label')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeKey === service.key;
            const features = t(`services.items.${service.key}.features`, { returnObjects: true }) as string[];

            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(service.key, el);
                  else cardRefs.current.delete(service.key);
                }}
                onClick={() => handleCardClick(service.key)}
                className={`cursor-pointer rounded-xl border transition-all duration-500 overflow-hidden shadow-sm
                  bg-white
                  md:border-gold/30 md:shadow-sm
                  ${isActive
                    ? 'border-gold/60 shadow-lg shadow-gold/10 -translate-y-1'
                    : 'border-gray-200 hover:border-gold/30'
                  }
                  md:hover:border-gold/60 md:hover:shadow-md md:-translate-y-0`}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 p-4 md:p-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-sm md:text-base uppercase tracking-wider text-gray-900">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                </div>

                {/* Mobile: accordion */}
                <div className="md:hidden">
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <div className="px-4 pb-4 border-t border-gold/20">
                          <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-3">
                            {t(`services.items.${service.key}.description`)}
                          </p>
                          <ul className="space-y-1.5">
                            {features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop: always visible */}
                <div className="hidden md:block px-5 pb-5 border-t border-gold/20">
                  <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-3">
                    {t(`services.items.${service.key}.description`)}
                  </p>
                  <ul className="space-y-1.5">
                    {features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
