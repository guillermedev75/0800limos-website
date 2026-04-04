import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

const destinations = [
  {
    id: 1,
    name: 'Mount Shasta',
    location: 'Northern California',
    image: '/images/destinations/mount-shasta.jpg',
    description: 'Vistas deslumbrantes da montanha sagrada, perfeita para day trips e retiros espirituais.',
  },
  {
    id: 2,
    name: 'Parasailing',
    location: 'San Francisco Bay',
    image: '/images/destinations/parasailing.jpg',
    description: 'Aventura sobre as águas da baía com vistas panorâmicas da cidade e Golden Gate.',
  },
  {
    id: 3,
    name: 'Napa Valley Vineyards',
    location: 'Wine Country',
    image: '/images/destinations/vineyard.jpg',
    description: 'Os mais renomados vinhedos da Califórnia. Tours exclusivos e degustações privadas.',
  },
  {
    id: 4,
    name: 'Premium Wineries',
    location: 'Sonoma & Napa',
    image: '/images/destinations/winery.jpg',
    description: 'Adegas históricas com arquitetura única e vinhos premiados.',
  },
  {
    id: 5,
    name: 'Wine Tours',
    location: 'Bay Area',
    image: '/images/destinations/winery-tour.jpg',
    description: 'Roteiros personalizados pelas melhores regiões vinícolas da Califórnia.',
  },
];

export function Destinations() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % destinations.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + destinations.length) % destinations.length);
    }
  };

  return (
    <section id="destinations" className="py-24 bg-charcoal">
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
            Explore
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider mt-4 mb-6">
            Destinos Bay Area
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-soft-silver max-w-2xl mx-auto">
            Descubra os lugares mais incríveis da Califórnia com o conforto e segurança da 0800 Limos.
          </p>
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative ${index === 0 || index === 3 ? 'aspect-[16/9]' : 'aspect-square'}`}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1 text-gold text-xs mb-1">
                    <MapPin size={12} />
                    <span>{dest.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-white uppercase tracking-wider text-sm md:text-base">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-xs mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {dest.description}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-soft-silver text-sm">
            Clique nas fotos para ver em tamanho maior
          </p>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-midnight/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image container */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={destinations[selectedImage].image}
                alt={destinations[selectedImage].name}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="font-display font-bold text-white text-xl uppercase tracking-wider">
                  {destinations[selectedImage].name}
                </h3>
                <p className="text-gold text-sm mt-1">
                  {destinations[selectedImage].location}
                </p>
                <p className="text-soft-silver text-sm mt-2 max-w-xl mx-auto">
                  {destinations[selectedImage].description}
                </p>
              </div>
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedImage + 1} / {destinations.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
