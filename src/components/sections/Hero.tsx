import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

const slides = [
  {
    id: 1,
    image: '/images/hero/slide-1-bmw-serie7.jpg',
    subtitle: 'BMW Série 7 - Elegância alemã em cada detalhe',
  },
  {
    id: 2,
    image: '/images/hero/slide-2-mercedes-sclass.webp',
    subtitle: 'Mercedes S-Class - O padrão do luxo',
  },
  {
    id: 3,
    image: '/images/hero/slide-3-cadillac-cts.jpg',
    subtitle: 'Cadillac CTS - Sofisticação americana',
  },
  {
    id: 4,
    image: '/images/hero/slide-4-escalade.jpg',
    subtitle: 'Cadillac Escalade - Presença imponente',
  },
  {
    id: 5,
    image: '/images/hero/slide-5-sprinter.jpg',
    subtitle: 'Mercedes Sprinter - Conforto para grupos',
  },
  {
    id: 6,
    image: '/images/hero/slide-6-sprinters.jpg',
    subtitle: 'Frota completa para eventos corporativos',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

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

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Slides - Changes every 6s with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 6, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/40 to-midnight/90" />

      {/* Content - Animates only once on page load */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          {/* Main Title - Fixed content, animates only on initial load */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-wider mb-2"
          >
            Transporte
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wider mb-6"
          >
            <span className="text-gradient-gold">Executivo</span>
          </motion.h1>

          {/* Subtitle - Changes with slide but without full re-animation */}
          <div className="h-8 sm:h-10 mb-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wide"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTAs - Fixed, animates only on initial load */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#booking')}
            >
              Reserve Agora
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#destinations')}
            >
              Explore a Bay Area
            </Button>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gold w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#booking')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60 hover:text-gold transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
