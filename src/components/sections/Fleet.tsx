import { motion } from 'framer-motion';
import { Users, Luggage, Star } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

const vehicles = [
  {
    id: 1,
    name: 'Executive Sedan',
    image: '/images/fleet/executive-sedan.jpg',
    capacity: 3,
    luggage: 3,
    description: 'O epítome do luxo e conforto. Perfeito para executivos que valorizam discrição e elegância.',
    features: ['Leather interior', 'Climate control', 'Wi-Fi onboard'],
    idealFor: 'Executivos, aeroporto',
  },
  {
    id: 2,
    name: 'Luxury SUV',
    image: '/images/fleet/luxury-suv.jpg',
    capacity: 6,
    luggage: 6,
    description: 'Espaço e sofisticação em um único veículo. Ideal para famílias e grupos pequenos.',
    features: ['Spacious interior', 'Premium sound', 'Panoramic roof'],
    idealFor: 'Família, grupos',
  },
  {
    id: 3,
    name: 'Sprinter Van',
    image: '/images/fleet/sprinter-van.jpg',
    capacity: 14,
    luggage: 14,
    description: 'A solução perfeita para eventos corporativos e grupos maiores sem comprometer o conforto.',
    features: ['Reclining seats', 'Entertainment system', 'Extra legroom'],
    idealFor: 'Eventos, corporativo',
  },
  {
    id: 4,
    name: 'Stretch Limo',
    image: '/images/fleet/stretch-limo.jpg',
    capacity: 10,
    luggage: 4,
    description: 'O máximo em luxo e estilo para ocasiões especiais que merecem uma entrada memorável.',
    features: ['Mini bar', 'LED lighting', 'Privacy partition'],
    idealFor: 'Casamentos, festas',
  },
];

export function Fleet() {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-24 bg-charcoal">
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
            Nossa Frota
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider mt-4 mb-6">
            Veículos de Luxo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-soft-silver max-w-2xl mx-auto">
            Uma frota cuidadosamente selecionada de veículos premium para atender às suas necessidades com excelência.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-midnight rounded-lg overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold text-midnight px-3 py-1 rounded text-sm font-semibold flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Premium
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider mb-2">
                  {vehicle.name}
                </h3>

                <p className="text-soft-silver mb-4">
                  {vehicle.description}
                </p>

                {/* Specs */}
                <div className="flex items-center gap-6 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-white/70">
                    <Users size={16} className="text-gold" />
                    <span>{vehicle.capacity} passageiros</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Luggage size={16} className="text-gold" />
                    <span>{vehicle.luggage} malas</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Ideal for */}
                <div className="text-sm text-gold mb-6">
                  Ideal para: {vehicle.idealFor}
                </div>

                <Button variant="outline" size="sm" onClick={scrollToBooking}>
                  Reservar
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
