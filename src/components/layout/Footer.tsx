import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from './Container';

export function Footer() {
  const { t } = useTranslation();

  const serviceLinks = [
    { name: t('services.items.airport.title'), href: '#services' },
    { name: t('services.items.corporate.title'), href: '#services' },
    { name: t('services.items.special.title'), href: '#services' },
    { name: t('services.items.wine.title'), href: '#services' },
  ];

  const destinationLinks = [
    { name: t('destinations.items.shasta.name'), href: '#destinations' },
    { name: t('destinations.items.parasailing.name'), href: '#destinations' },
    { name: t('destinations.items.winery.name'), href: '#destinations' },
    { name: 'San Francisco', href: '#destinations' },
  ];

  return (
    <footer id="footer" className="bg-gray-100 border-t border-gray-200">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-display font-bold tracking-wider mb-4">
              <span className="text-gray-900">0800</span>
              <span className="text-gold">LIMOS</span>
            </div>
            <p className="text-gray-600 mb-6">
              {t('footer.brand')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t('footer.links.services')}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
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
              {t('footer.links.destinations')}
            </h4>
            <ul className="space-y-2">
              {destinationLinks.map((link) => (
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
              {t('footer.links.contact')}
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
            {t('footer.copyright')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('footer.tagline')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
