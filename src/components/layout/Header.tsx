import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const { isScrolled } = useScrollPosition();
  const { isOpen, toggle, close } = useMobileMenu();

  const navLinks = [
    { name: t('header.nav.home'), href: '#hero' },
    { name: t('header.nav.services'), href: '#services' },
    { name: t('header.nav.destinations'), href: '#destinations' },
    { name: t('header.nav.areas'), href: '#areas' },
    { name: t('header.nav.contact'), href: '#booking' },
  ];

  const scrollToSection = (href: string) => {
    close();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <Container>
          <div className="grid grid-cols-3 items-center">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group justify-self-start"
            >
              <div className="text-2xl font-display font-bold tracking-wider">
                <span className="text-gray-900 group-hover:text-gold transition-colors">0800</span>
                <span className="text-gold">LIMOS</span>
              </div>
            </a>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gold transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 justify-self-end">
              <LanguageSwitcher />
              <a
                href="https://wa.me/16506669333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="tel:6506669333"
                className="flex items-center gap-2 text-gray-900 hover:text-gold transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">650-666-9333</span>
              </a>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open('https://customer.moovs.app/0800-limos-inc/request/new', '_blank')}
              >
                {t('header.instantQuote')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('#booking')}
              >
                {t('header.cta')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="lg:hidden text-gray-900 p-2 justify-self-end"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <div className="mb-4">
                <LanguageSwitcher />
              </div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-2xl font-display font-semibold text-gray-900 hover:text-gold transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <a
                  href="https://wa.me/16506669333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600"
                >
                  <MessageCircle size={24} />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="tel:6506669333"
                  className="flex items-center gap-2 text-gold"
                >
                  <Phone size={20} />
                  <span className="font-medium">650-666-9333</span>
                </a>
                <Button variant="primary" onClick={() => scrollToSection('#booking')}>
                  {t('header.cta')}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
