import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export function BookingWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Moovs widget script
    const script = document.createElement('script');
    script.innerHTML = `
      window["moovsAPI"] = window["moovsAPI"] || [];
      window["moovsAPI"].push(["operator", "437c042c-0f8b-11f1-a424-dbca522aa2ee"]);
      (function(m, oo, v, s) {
        s = m.createElement(oo);
        s.src = v;
        s.async = 1;
        m.head.appendChild(s);
      })(document, "script", "https://static.moovs.app");
    `;
    
    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current && script.parentNode === widgetRef.current) {
        widgetRef.current.removeChild(script);
      }
    };
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
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
            Reserve Sua Viagem
          </h2>
          <p className="text-soft-silver text-lg max-w-2xl mx-auto">
            Solicite um orçamento ou faça sua reserva diretamente através do nosso sistema integrado.
            Rápido, fácil e seguro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-midnight rounded-lg p-8 border border-white/10"
        >
          <div ref={widgetRef} className="moovs-widget-container min-h-[400px]">
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-soft-silver">Carregando sistema de reservas...</p>
              <p className="text-white/40 text-sm mt-2">
                Se o widget não carregar,{' '}
                <a href="https://customer.moovs.app/0800-limos-inc/request/new" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">clique aqui para reservar</a>
                {' '}ou ligue{' '}
                <a href="tel:6506669333" className="text-gold hover:underline">650-666-9333</a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="text-center p-6 bg-midnight/50 rounded-lg border border-white/5">
            <h4 className="font-display font-semibold text-gold mb-2">Telefone</h4>
            <a href="tel:6506669333" className="text-white hover:text-gold transition-colors">
              650-666-9333
            </a>
          </div>
          <div className="text-center p-6 bg-midnight/50 rounded-lg border border-white/5">
            <h4 className="font-display font-semibold text-gold mb-2">Email</h4>
            <a href="mailto:hussein@0800limos.com" className="text-white hover:text-gold transition-colors">
              hussein@0800limos.com
            </a>
          </div>
          <div className="text-center p-6 bg-midnight/50 rounded-lg border border-white/5">
            <h4 className="font-display font-semibold text-gold mb-2">Disponibilidade</h4>
            <p className="text-white">24/7 - Todos os dias</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
