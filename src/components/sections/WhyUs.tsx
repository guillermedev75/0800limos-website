import { motion } from 'framer-motion';
import { Shield, Car, Clock, Headphones } from 'lucide-react';
import { Container } from '../layout/Container';

const differentials = [
  {
    id: 1,
    icon: Shield,
    title: 'Chauffeurs Profissionais',
    description: 'Nossos motoristas passam por rigorosa verificação de antecedentes e treinamento contínuo para garantir sua segurança e conforto.',
    stats: '100% Verificados',
  },
  {
    id: 2,
    icon: Car,
    title: 'Frota de Luxo',
    description: 'Veículos modelos recentes, meticulosamente mantidos e equipados com as mais recentes tecnologias de conforto e segurança.',
    stats: 'Modelos 2024-2026',
  },
  {
    id: 3,
    icon: Clock,
    title: 'Pontualidade Garantida',
    description: 'Comprometimento com a pontualidade. Monitoramento de voos em tempo real para ajustes automáticos de pickups.',
    stats: '99% On-time',
  },
  {
    id: 4,
    icon: Headphones,
    title: 'Suporte 24/7',
    description: 'Equipe de suporte disponível a qualquer momento para atender suas necessidades e resolver qualquer imprevisto.',
    stats: 'Sempre Online',
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A961 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            Por Que Escolher
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            0800 Limos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
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
                    {item.stats}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-gray-900 uppercase tracking-wider mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
