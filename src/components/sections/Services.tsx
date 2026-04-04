import { motion } from 'framer-motion';
import { Plane, Briefcase, Sparkles, Grape, Building2 } from 'lucide-react';
import { Container } from '../layout/Container';

const services = [
  {
    id: 1,
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Serviço de transfer para os principais aeroportos da região com monitoramento de voos em tempo real. Atendemos FBOs e aviação privada.',
    features: ['SFO, OAK, SJC, STS', 'FBOs - Aviação Privada', 'Flight tracking', 'Meet & Greet'],
    image: '/images/services/airport.jpg',
  },
  {
    id: 2,
    icon: Building2,
    title: 'FBOs & Private Aviation',
    description: 'Serviço especializado para FBOs (Fixed Base Operators) na Bay Area. Transporte executivo para aviação privada e corporativa.',
    features: ['Bay Area FBOs', 'STS Airport', 'Private terminals', 'Discrete service'],
    image: '/images/services/corporate.jpg',
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Soluções de transporte executivo para reuniões de negócios, road shows e eventos corporativos.',
    features: ['Business meetings', 'Road shows', 'Executive transport'],
    image: '/images/services/corporate.jpg',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Special Occasions',
    description: 'Torne momentos especiais ainda mais memoráveis com nosso serviço de luxo personalizado.',
    features: ['Weddings', 'Anniversaries', 'Nights out'],
    image: '/images/services/wedding.jpg',
  },
  {
    id: 5,
    icon: Grape,
    title: 'Wine Tours',
    description: 'Passeios exclusivos pelas melhores vinícolas da Califórnia com conforto e sofisticação.',
    features: ['Napa Valley', 'Sonoma', 'Custom tours'],
    image: '/images/services/wine-tour.jpg',
  },
];

export function Services() {
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
            Nossos Serviços
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            Experiência Premium
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
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
