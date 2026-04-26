import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { BookingWidget } from '../components/sections/BookingWidget';
import { Services } from '../components/sections/Services';
import { Destinations } from '../components/sections/Destinations';
import { WhyUs } from '../components/sections/WhyUs';
import { Testimonials } from '../components/sections/Testimonials';
import { Areas } from '../components/sections/Areas';
import { FloatingQuoteButton } from '../components/FloatingQuoteButton';
import { useSeo } from '../hooks/useSeo';

interface Props {
  locale: 'pt-BR' | 'en-US' | 'es';
}

const SEO: Record<Props['locale'], { title: string; description: string; canonical: string; htmlLang: string }> = {
  'pt-BR': {
    title: 'Transporte Executivo Bay Area | SFO, Napa, Sonoma | 0800 Limos',
    description:
      'Serviço de chauffeur de luxo na Bay Area. Transfers SFO/OAK/SJC, FBO/aviação privada, tours em Napa e Sonoma, viagens corporativas e casamentos. Reserva 24/7.',
    canonical: 'https://0800limos.com/',
    htmlLang: 'pt-BR',
  },
  'en-US': {
    title: 'Bay Area Limo Service | SFO Airport Transfer & Napa Wine Tours — 0800 Limos',
    description:
      'Luxury chauffeur service across the SF Bay Area. SFO/OAK/SJC transfers, FBO private aviation, Napa & Sonoma wine tours, corporate roadshows, weddings. 24/7 booking.',
    canonical: 'https://0800limos.com/en',
    htmlLang: 'en-US',
  },
  es: {
    title: 'Servicio de Limusina Bay Area | Traslados SFO y Tours Napa — 0800 Limos',
    description:
      'Servicio de chofer privado de lujo en el Área de la Bahía. Traslados SFO/OAK/SJC, FBO aviación privada, tours en Napa y Sonoma, viajes corporativos y bodas. 24/7.',
    canonical: 'https://0800limos.com/es',
    htmlLang: 'es',
  },
};

export function Landing({ locale }: Props) {
  const { i18n } = useTranslation();
  const { hash } = useLocation();
  const seo = SEO[locale];

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  // Smooth scroll to in-page anchor on landing
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
  }, [hash]);

  useSeo({
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    lang: seo.htmlLang,
    ogType: 'website',
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <WhyUs />
        <Testimonials />
        <Areas />
        <BookingWidget />
      </main>
      <FloatingQuoteButton />
      <Footer />
    </div>
  );
}
