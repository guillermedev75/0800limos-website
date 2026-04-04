import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ExternalLink, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function BookingWidget() {
  return (
    <section id="booking" className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            Contato
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Solicite um orçamento ou faça sua reserva. Rápido, fácil e seguro.
          </p>
        </motion.div>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://customer.moovs.app/0800-limos-inc/request/new"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 group"
              >
                <ExternalLink size={20} />
                <span>Reservar Online</span>
              </a>
              <a
                href="tel:6506669333"
                className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
              >
                <Phone size={20} />
                <span>Ligar</span>
              </a>
              <a
                href="https://wa.me/16506669333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm text-center mt-6">
              Respostas em até 15 minutos durante o horário comercial
            </p>
          </div>
        </motion.div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gold/50 transition-colors group">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Phone size={24} className="text-gold" />
            </div>
            <h4 className="font-display font-semibold text-gray-900 mb-2">Telefone</h4>
            <a href="tel:6506669333" className="text-gray-600 hover:text-gold transition-colors text-lg">
              650-666-9333
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gold/50 transition-colors group">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <MessageCircle size={24} className="text-green-600" />
            </div>
            <h4 className="font-display font-semibold text-gray-900 mb-2">WhatsApp</h4>
            <a href="https://wa.me/16506669333" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
              650-666-9333
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gold/50 transition-colors group">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Mail size={24} className="text-gold" />
            </div>
            <h4 className="font-display font-semibold text-gray-900 mb-2">Email</h4>
            <a href="mailto:hussein@0800limos.com" className="text-gray-600 hover:text-gold transition-colors text-sm">
              hussein@0800limos.com
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gold/50 transition-colors group">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Clock size={24} className="text-gold" />
            </div>
            <h4 className="font-display font-semibold text-gray-900 mb-2">Disponibilidade</h4>
            <p className="text-gray-600">24/7 - Todos os dias</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
