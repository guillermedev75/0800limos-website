import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trackEvent } from '../lib/analytics';

/**
 * Mobile-only contact bar, pinned to the bottom of the viewport so phone and
 * WhatsApp are reachable on the first screen without scrolling.
 *
 * SHOW_LABELS toggles the two variants the client asked to compare:
 *   false → icons only
 *   true  → icons + "CALL US NOW" / "WHATSAPP"
 * Flip the constant and redeploy; there is no A/B infrastructure here on purpose.
 */
const SHOW_LABELS = true;

export function MobileContactBar() {
  const { t } = useTranslation();

  return (
    <>
      {/* Reserves the bar's own height at the end of the document. Without it the
          fixed bar sits on top of whatever renders last — and since the footer is
          outside <main>, padding on <main> doesn't protect it. */}
      <div
        className="md:hidden"
        style={{ height: 'calc(3.25rem + env(safe-area-inset-bottom))' }}
        aria-hidden="true"
      />
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-stretch border-t border-black/10 bg-white/95 backdrop-blur-sm"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a
          href="tel:+16506669333"
          onClick={() => trackEvent('contact_click', { method: 'phone', source: 'mobile_bar' })}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-white font-display font-bold text-sm uppercase tracking-wider active:bg-gold-hover transition-colors"
          aria-label={t('mobileBar.callAria')}
        >
          <Phone size={20} strokeWidth={2.5} />
          {SHOW_LABELS && <span>{t('mobileBar.call')}</span>}
        </a>

        <a
          href="https://wa.me/16506669333"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('contact_click', { method: 'whatsapp', source: 'mobile_bar' })}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-display font-bold text-sm uppercase tracking-wider active:brightness-95 transition-all"
          aria-label={t('mobileBar.whatsappAria')}
        >
          <MessageCircle size={20} strokeWidth={2.5} />
          {SHOW_LABELS && <span>{t('mobileBar.whatsapp')}</span>}
        </a>
      </div>
    </>
  );
}
