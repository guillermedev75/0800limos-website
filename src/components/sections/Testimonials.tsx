import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Container } from '../layout/Container';

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'CEO, TechVentures Inc.',
    content: 'A 0800 Limos transformou nossa experiência de transporte corporativo. A pontualidade impecável e o profissionalismo dos chauffeurs são incomparáveis. Recomendo fortemente para executivos que valorizam excelência.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Wedding Planner',
    content: 'Utilizo os serviços da 0800 Limos para todos os casamentos que planejo. A frota de limousines é deslumbrante e o serviço sempre supera as expectativas dos noivos. Um parceiro confiável!',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Rodriguez',
    role: 'Frequent Business Traveler',
    content: 'Viajo constantemente a trabalho e a 0800 Limos é minha escolha número um para transfers de aeroporto. O monitoramento de voos e o serviço Meet & Greet fazem toda a diferença.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Thompson',
    role: 'Event Coordinator',
    content: 'Organizei um tour de vinícolas em Napa para um grupo de 12 pessoas. A 0800 Limos cuidou de todos os detalhes, desde o transporte até as sugestões de vinícolas. Experiência perfeita!',
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
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
            Depoimentos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 relative shadow-lg">
            <Quote className="absolute top-6 left-6 text-gold/20" size={64} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-800 font-light italic mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-display font-bold text-lg text-gray-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gold hover:text-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'bg-gold w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gold hover:text-gold transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
