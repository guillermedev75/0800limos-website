import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function FloatingQuoteButton() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
          className={`shadow-lg flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
            isOpen 
              ? 'bg-gray-800 w-12 h-12 hover:bg-gray-700' 
              : 'bg-gold hover:bg-gold-hover hover:scale-105 px-6 py-3'
          }`}
          style={{ 
            backgroundColor: isOpen ? '#1f2937' : '#C9A961',
          }}
          aria-label={isOpen ? 'Fechar' : t('floatingButton.label')}
        >
          {isOpen ? (
            <X size={24} className="text-white" strokeWidth={3} />
          ) : (
            <span className="text-white font-bold text-sm whitespace-nowrap">{t('floatingButton.label')}</span>
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden min-w-[200px]"
            >
              <div className="p-4 border-b border-gray-100">
                <p className="text-gray-900 font-semibold text-center">{t('floatingButton.menuTitle')}</p>
              </div>
              
              <div className="p-2">
                <a
                  href="https://customer.moovs.app/0800-limos-inc/request/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A961' }}>
                    <ExternalLink size={18} className="text-white" />
                  </div>
                  <span className="text-gray-900 font-medium">{t('floatingButton.options.online.title')}</span>
                </a>

                <a
                  href="https://wa.me/16506669333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <span className="text-gray-900 font-medium">{t('floatingButton.options.whatsapp.title')}</span>
                </a>

                <a
                  href="tel:6506669333"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="text-gray-900 font-medium">{t('floatingButton.options.call.title')}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
