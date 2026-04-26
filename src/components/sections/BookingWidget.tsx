import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { Mail, Phone, MessageCircle, Copy, Check } from 'lucide-react';

const EMAIL = 'hussein@0800limos.com';

export function BookingWidget() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="booking" className="py-10 md:py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            {t('contact.label')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Email button with copy icon */}
              <div className="relative flex rounded-lg overflow-hidden">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex flex-1 items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-white font-semibold py-4 pl-6 pr-3 transition-all duration-300"
                >
                  <Mail size={20} />
                  <span>{t('contact.buttons.email')}</span>
                </a>
                <div className="w-px bg-white/30 self-stretch" />
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center px-4 bg-gold hover:bg-gold-hover text-white transition-all duration-300 cursor-pointer"
                  title={t('contact.buttons.copyEmail')}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <a
                href="tel:6506669333"
                className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
              >
                <Phone size={20} />
                <span>{t('contact.buttons.call')}</span>
              </a>
              <a
                href="https://wa.me/16506669333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
              >
                <MessageCircle size={20} />
                <span>{t('contact.buttons.whatsapp')}</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm text-center mt-6 font-medium">
              {t('contact.response')}
            </p>
          </div>
        </motion.div>
      </Container>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-full shadow-xl"
          >
            <Check size={15} className="text-green-400 flex-shrink-0" />
            {t('contact.emailCopied')}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
