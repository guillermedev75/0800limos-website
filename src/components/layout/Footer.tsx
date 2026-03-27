import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from './Container';

const footerLinks = {
  services: [
    { name: 'Airport Transfers', href: '#services' },
    { name: 'Corporate Travel', href: '#services' },
    { name: 'Special Occasions', href: '#services' },
    { name: 'Wine Tours', href: '#services' },
  ],
  fleet: [
    { name: 'Executive Sedan', href: '#fleet' },
    { name: 'Luxury SUV', href: '#fleet' },
    { name: 'Sprinter Van', href: '#fleet' },
    { name: 'Stretch Limo', href: '#fleet' },
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
    <footer id="footer" className="bg-charcoal border-t border-white/10">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-display font-bold tracking-wider mb-4">
              <span className="text-white">0800</span>
              <span className="text-gold">LIMOS</span>
            </div>
            <p className="text-soft-silver mb-6 max-w-sm">
              Professional transportation services in the San Francisco Bay Area. 
              Experience luxury, comfort, and reliability with our premium fleet.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">
              Serviços
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-soft-silver hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">
              Frota
            </h4>
            <ul className="space-y-2">
              {footerLinks.fleet.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-soft-silver hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6506669333"
                  className="flex items-center gap-2 text-soft-silver hover:text-gold transition-colors"
                >
                  <Phone size={16} />
                  650-666-9333
                </a>
              </li>
              <li>
                <a
                  href="mailto:hussein@0800limos.com"
                  className="flex items-center gap-2 text-soft-silver hover:text-gold transition-colors"
                >
                  <Mail size={16} />
                  hussein@0800limos.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-soft-silver">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>San Francisco Bay Area</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026-2027 0800 Limos. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Cavalgada Executiva 2026-2027
          </p>
        </div>
      </Container>
    </footer>
  );
}
