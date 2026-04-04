import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ExternalLink, Phone, Mail, Clock } from 'lucide-react';

export function BookingWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    // Tentar carregar o widget da Moovs com timeout
    const loadWidget = () => {
      try {
        // Criar o script da Moovs
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          (function() {
            window.moovsAPI = window.moovsAPI || [];
            window.moovsAPI.push(["operator", "437c042c-0f8b-11f1-a424-dbca522aa2ee"]);
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://static.moovs.app/v1/widget.js';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          })();
        `;
        
        if (widgetRef.current) {
          widgetRef.current.appendChild(script);
        }

        // Timeout para verificar se o widget carregou
        setTimeout(() => {
          const moovsWidget = document.querySelector('#moovs-booking-widget, .moovs-widget, [data-moovs-widget]');
          if (!moovsWidget) {
            setWidgetError(true);
          }
        }, 8000);

        return () => {
          if (widgetRef.current && script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      } catch (error) {
        console.error('Error loading Moovs widget:', error);
        setWidgetError(true);
      }
    };

    loadWidget();
  }, []);

  return (
    <section id="booking" className="py-20 bg-charcoal">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            Reservas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider mt-4 mb-6">
            Reserve Sua Viagem
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-soft-silver text-lg max-w-2xl mx-auto">
            Solicite um orçamento ou faça sua reserva diretamente através do nosso sistema integrado.
            Rápido, fácil e seguro.
          </p>
        </motion.div>

        {/* Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-midnight rounded-lg p-8 border border-white/10">
            {/* Área do Widget */}
            <div ref={widgetRef} className="min-h-[500px]">
              {!widgetError ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-soft-silver">Carregando sistema de reservas...</p>
                </div>
              ) : null}
            </div>

            {/* Fallback - Sempre visível se o widget falhar ou como opção alternativa */}
            <div className={`border-t border-white/10 pt-8 ${!widgetError ? 'mt-8' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://customer.moovs.app/0800-limos-inc/request/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-midnight font-semibold py-4 px-6 rounded-lg transition-all duration-300 group"
                >
                  <ExternalLink size={20} />
                  <span>Reservar Online</span>
                </a>
                <a
                  href="tel:6506669333"
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 border border-white/20"
                >
                  <Phone size={20} />
                  <span>Ligar: 650-666-9333</span>
                </a>
              </div>
              <p className="text-white/40 text-sm text-center mt-4">
                Respostas em até 15 minutos durante o horário comercial
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-midnight/50 rounded-lg border border-white/5 hover:border-gold/30 transition-colors group">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Phone size={24} className="text-gold" />
            </div>
            <h4 className="font-display font-semibold text-gold mb-2">Telefone</h4>
            <a href="tel:6506669333" className="text-white hover:text-gold transition-colors text-lg">
              650-666-9333
            </a>
          </div>

          <div className="text-center p-6 bg-midnight/50 rounded-lg border border-white/5 hover:border-gold/30 transition-colors group">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Mail size={24} className="text-gold" />
            </div>
            <h4 className="font-display font-semibold text-gold mb-2">Email</h4>
            <a href="mailto:hussein@0800limos.com" className="text-white hover:text-gold transition-colors">
              hussein@0800limos.com
            </a>
          </div>

          <div className="text-center p-6 bg-midnight/50 rounded-lg border border-white/5 hover:border-gold/30 transition-colors group">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Clock size={24} className="text-gold" />
            </div>
            <h4 className="font-display font-semibold text-gold mb-2">Disponibilidade</h4>
            <p className="text-white">24/7 - Todos os dias</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
