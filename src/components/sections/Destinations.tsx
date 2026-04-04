import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Mount Shasta',
    location: 'Northern California',
    image: '/images/destinations/mount-shasta.jpg',
    description: 'Vistas deslumbrantes da montanha sagrada, perfeita para day trips e retiros espirituais. Explore trilhas, cachoeiras e a energia única deste destino icônico.',
  },
  {
    id: 2,
    name: 'Parasailing',
    location: 'San Francisco Bay',
    image: '/images/destinations/parasailing.jpg',
    description: 'Aventura sobre as águas da baía com vistas panorâmicas da cidade e Golden Gate. Uma experiência única de adrenalina e paisagens deslumbrantes.',
  },
  {
    id: 3,
    name: 'Napa Valley Vineyards',
    location: 'Wine Country',
    image: '/images/destinations/vineyard.jpg',
    description: 'Os mais renomados vinhedos da Califórnia. Tours exclusivos e degustações privadas nas melhores adegas da região.',
  },
  {
    id: 4,
    name: 'Premium Wineries',
    location: 'Sonoma \u0026 Napa',
    image: '/images/destinations/winery.jpg',
    description: 'Adegas históricas com arquitetura única e vinhos premiados. Experiências gourmet e passeios exclusivos pelo mundo do vinho.',
  },
  {
    id: 5,
    name: 'Wine Tours',
    location: 'Bay Area',
    image: '/images/destinations/winery-tour.jpg',
    description: 'Roteiros personalizados pelas melhores regiões vinícolas da Califórnia. Transporte luxuoso entre vinícolas selecionadas.',
  },
];

export function Destinations() {
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
            Explore
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            Destinos Bay Area
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Descubra os lugares mais incríveis da Califórnia com o conforto e segurança da 0800 Limos.
          </p>
        </motion.div>
      </div>

      {/* Destinos - Layout Scroll */}
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
              {/* Background Image - Full Width */}
              <div className="absolute inset-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradiente sutil */}
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
                    {/* Location tag */}
                    <div className="flex items-center gap-2 text-gold mb-4">
                      <MapPin size={18} />
                      <span className="text-sm font-medium uppercase tracking-wider">{dest.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 uppercase tracking-wider mb-4">
                      {dest.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {dest.description}
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
