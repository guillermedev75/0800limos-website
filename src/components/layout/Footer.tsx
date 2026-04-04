import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Container } from './Container';

const footerLinks = {
  services: [
    { name: 'Airport Transfers', href: '#services' },
    { name: 'Corporate Travel', href: '#services' },
    { name: 'Special Occasions', href: '#services' },
    { name: 'Wine Tours', href: '#services' },
  ],
  destinations: [
    { name: 'Mount Shasta', href: '#destinations' },
    { name: 'Napa Valley', href: '#destinations' },
    { name: 'Sonoma', href: '#destinations' },
    { name: 'San Francisco', href: '#destinations' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 border-t border-gray-200">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-display font-bold tracking-wider mb-4">
              <span className="text-gray-900">0800</span>
              <span className="text-gold">LIMOS</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Professional transportation services in the San Francisco Bay Area. 
              Experience luxury, comfort, and reliability with our premium fleet.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Serviços
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Destinos
            </h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/16506669333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:6506669333"
                  className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors"
                >
                  <Phone size={16} />
                  650-666-9333
                </a>
              </li>
              <li>
                <a
                  href="mailto:hussein@0800limos.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors"
                >
                  <Mail size={16} />
                  hussein@0800limos.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>San Francisco Bay Area</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 0800 Limos. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Transporte Executivo Premium
          </p>
        </div>
      </Container>
    </footer>
  );
}
