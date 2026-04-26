import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

const getSlides = (t: (key: string) => string) => [
  { id: 1, image: '/images/hero/slide-1-bmw-serie7.jpg', subtitle: t('hero.slides.0.subtitle') },
  { id: 2, image: '/images/hero/slide-2-mercedes-sclass.jpg', subtitle: t('hero.slides.1.subtitle') },
  { id: 3, image: '/images/hero/slide-3-cadillac-cts.jpg', subtitle: t('hero.slides.2.subtitle') },
  { id: 4, image: '/images/hero/slide-4-escalade.jpg', subtitle: t('hero.slides.3.subtitle') },
  { id: 5, image: '/images/hero/slide-5-sprinter.jpg', subtitle: t('hero.slides.4.subtitle') },
  { id: 6, image: '/images/hero/slide-6-sprinters.jpg', subtitle: t('hero.slides.5.subtitle') },
];

export function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const slides = getSlides(t);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', duration: 0.8, ease: 'easeInOut' },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].subtitle}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase tracking-wider mb-2"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider mb-6"
          >
            <span className="text-gradient-gold">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <div className="h-8 sm:h-10 mb-8 md:mb-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light tracking-wide absolute w-full left-0"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://customer.moovs.app/0800-limos-inc/request/new', '_blank')}
            >
              {t('hero.ctaPrimary')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#destinations')}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gold w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
