import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Copy, Phone } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileContactBar } from '../components/MobileContactBar';
import { Container } from '../components/layout/Container';
import { useSeo } from '../hooks/useSeo';
import { moovsUrl, trackBookingClick, trackEvent } from '../lib/analytics';

const PROMO_CODE = 'FIRST20';
const SITE_URL = 'https://0800limos.com';

/**
 * Where the lead form posts. Any endpoint that accepts a JSON POST works —
 * a Google Apps Script web app, Formspree, or a Vercel function. When the var
 * is unset the form is not rendered at all, so we never show a dead input.
 */
const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

type FormState = 'idle' | 'sending' | 'success' | 'error';

export function Offer() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');

  useSeo({
    title: t('offer.seoTitle'),
    description: t('offer.seoDescription'),
    canonical: `${SITE_URL}/offer`,
    lang: i18n.language,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: t('offer.title'),
      description: t('offer.seoDescription'),
      url: `${SITE_URL}/offer`,
      category: 'New client discount',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceType: 'https://schema.org/ListPrice',
        priceCurrency: 'USD',
      },
      seller: {
        '@type': 'LimousineService',
        name: '0800 Limos',
        telephone: '+1-650-666-9333',
        url: SITE_URL,
      },
    },
  });

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      trackEvent('promo_code_copy', { code: PROMO_CODE });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context, old browser) — the code is on
      // screen anyway, so there is nothing to recover from.
    }
  };

  const submitLead = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!LEAD_ENDPOINT) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setFormState('sending');

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        // text/plain keeps this a CORS "simple request" so the browser skips the
        // preflight. Google Apps Script web apps don't answer OPTIONS, so sending
        // application/json here makes the POST fail before it ever leaves.
        // The body is still JSON — the script parses it the same way.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          promo: PROMO_CODE,
          locale: i18n.language,
          page: '/offer',
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setFormState('success');
      trackEvent('lead_submit', { source: 'offer_page' });
      form.reset();
    } catch {
      setFormState('error');
    }
  };

  const terms = t('offer.terms.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-midnight via-charcoal to-midnight pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #C9A961 0%, transparent 45%)' }} />
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative max-w-2xl"
            >
              <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
                {t('offer.eyebrow')}
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider mt-4 mb-6 leading-tight">
                {t('offer.title')}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {t('offer.subtitle')}
              </p>

              {/* Promo code */}
              <div className="bg-white/5 border border-gold/30 rounded-xl p-5 backdrop-blur-sm mb-8">
                <span className="block text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  {t('offer.codeLabel')}
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  <code className="font-display font-bold text-3xl text-white tracking-[0.2em]">{PROMO_CODE}</code>
                  <button
                    onClick={copyCode}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? t('offer.copied') : t('offer.copy')}
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">{t('offer.codeHint')}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={moovsUrl('offer_page', 'first20')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookingClick('offer_hero')}
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  {t('offer.cta')} <ArrowRight size={18} />
                </a>
                <a
                  href="tel:+16506669333"
                  onClick={() => trackEvent('contact_click', { method: 'phone', source: 'offer_page' })}
                  className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-gold font-semibold px-4 py-4 transition-colors"
                >
                  <Phone size={16} /> {t('offer.callCta')}
                </a>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Terms + form */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 uppercase tracking-wider mb-6">
                  {t('offer.terms.title')}
                </h2>
                <ol className="space-y-4">
                  {terms.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/10 text-gold font-bold text-sm flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-gray-600 leading-relaxed pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {LEAD_ENDPOINT && (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 self-start">
                  <h3 className="font-display font-bold text-xl text-gray-900 uppercase tracking-wider mb-2">
                    {t('offer.form.title')}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{t('offer.form.subtitle')}</p>

                  {formState === 'success' ? (
                    <div className="flex items-center gap-3 bg-white border border-gold/30 rounded-lg p-4">
                      <Check size={20} className="text-gold flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{t('offer.form.success')}</span>
                    </div>
                  ) : (
                    <form onSubmit={submitLead} className="space-y-4">
                      <input
                        type="text" name="name" required autoComplete="name"
                        placeholder={t('offer.form.name')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      />
                      <input
                        type="email" name="email" required autoComplete="email"
                        placeholder={t('offer.form.email')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={formState === 'sending'}
                        className="w-full bg-gold hover:bg-gold-hover disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
                      >
                        {formState === 'sending' ? t('offer.form.sending') : t('offer.form.submit')}
                      </button>
                      {formState === 'error' && (
                        <p className="text-sm text-red-600">{t('offer.form.error')}</p>
                      )}
                      <p className="text-xs text-gray-400 leading-relaxed">{t('offer.form.privacy')}</p>
                    </form>
                  )}
                </div>
              )}
            </div>

            <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gray-900 font-semibold mt-16 transition-colors">
              <ArrowLeft size={18} /> {t('offer.back')}
            </Link>
          </Container>
        </section>
      </main>

      <MobileContactBar />
      <Footer />
    </div>
  );
}
