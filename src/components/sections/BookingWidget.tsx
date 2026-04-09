import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '../layout/Container';
import { ExternalLink, Phone, MessageCircle } from 'lucide-react';

export function BookingWidget() {
  const { t } = useTranslation();

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
              <a
                href="https://customer.moovs.app/0800-limos-inc/request/new"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 group"
              >
                <ExternalLink size={20} />
                <span>{t('contact.buttons.online')}</span>
              </a>
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
    </section>
  );
}
