import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { Container } from './Container';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Serviços', href: '#services' },
  { name: 'Frota', href: '#fleet' },
  { name: 'Áreas', href: '#areas' },
  { name: 'Contato', href: '#footer' },
];

export function Header() {
  const { isScrolled } = useScrollPosition();
  const { isOpen, toggle, close } = useMobileMenu();

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
          isScrolled ? 'glass-header py-3' : 'bg-transparent py-5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="text-2xl font-display font-bold tracking-wider">
                <span className="text-white group-hover:text-gold transition-colors">0800</span>
                <span className="text-gold">LIMOS</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-white/80 hover:text-gold transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:6506669333"
                className="flex items-center gap-2 text-white hover:text-gold transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">650-666-9333</span>
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('#booking')}
              >
                Reserve Já
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="lg:hidden text-white p-2"
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
            className="fixed inset-0 z-40 bg-midnight lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
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
                  className="text-2xl font-display font-semibold text-white hover:text-gold transition-colors uppercase tracking-wider"
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
                  href="tel:6506669333"
                  className="flex items-center gap-2 text-gold"
                >
                  <Phone size={20} />
                  <span className="font-medium">650-666-9333</span>
                </a>
                <Button variant="primary" onClick={() => scrollToSection('#booking')}>
                  Reserve Já
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
