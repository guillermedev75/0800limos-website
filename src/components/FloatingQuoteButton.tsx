import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingQuoteButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Só mostrar o botão após scrollar um pouco
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Botão Principal Flutuante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8,
          y: isVisible ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? 'bg-gray-800 rotate-45' 
              : 'bg-gold hover:bg-gold-hover hover:scale-110'
          }`}
          style={{ 
            backgroundColor: isOpen ? '#1f2937' : '#C9A961',
          }}
          aria-label={isOpen ? 'Fechar' : 'Get a quote'}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <span className="text-white font-bold text-sm">Get a Quote</span>
          )}
        </button>

        {/* Menu de Opções */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden min-w-[240px]"
            >
              <div className="p-4 border-b border-gray-100">
                <p className="text-gray-900 font-semibold text-center">Como podemos ajudar?</p>
              </div>
              
              <div className="p-2">
                <a
                  href="https://customer.moovs.app/0800-limos-inc/request/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A961' }}>
                    <ExternalLink size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Reservar Online</p>
                    <p className="text-gray-500 text-xs">Sistema Moovs</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/16506669333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">WhatsApp</p>
                    <p className="text-gray-500 text-xs">Resposta rápida</p>
                  </div>
                </a>

                <a
                  href="tel:6506669333"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Ligar Agora</p>
                    <p className="text-gray-500 text-xs">650-666-9333</p>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
