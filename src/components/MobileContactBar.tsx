import { Phone, MessageSquare, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trackEvent } from '../lib/analytics';

/**
 * Mobile-only contact bar, pinned to the bottom of the viewport so calling,
 * texting and WhatsApp are all reachable on the first screen without scrolling.
 *
 * SMS sits alongside WhatsApp on purpose: WhatsApp adoption is low in the US
 * market this site sells to, where texting means SMS. The client's read is that
 * customers here rarely call but will happily text.
 *
 * SHOW_LABELS toggles icons-only vs icons + short labels. Labels have to stay
 * short — three of them share a 320px viewport.
 */
const SHOW_LABELS = true;

const ACTIONS = [
  {
    key: 'call',
    href: 'tel:+16506669333',
    method: 'phone',
    Icon: Phone,
    className: 'bg-gold active:bg-gold-hover',
    external: false,
  },
  {
    key: 'text',
    href: 'sms:+16506669333',
    method: 'sms',
    Icon: MessageSquare,
    className: 'bg-charcoal active:brightness-125',
    external: false,
  },
  {
    key: 'whatsapp',
    href: 'https://wa.me/16506669333',
    method: 'whatsapp',
    Icon: MessageCircle,
    className: 'bg-[#25D366] active:brightness-95',
    external: true,
  },
] as const;

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
        {ACTIONS.map(({ key, href, method, Icon, className, external }) => (
          <a
            key={key}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            onClick={() => trackEvent('contact_click', { method, source: 'mobile_bar' })}
            className={`flex-1 min-w-0 flex items-center justify-center gap-1.5 py-4 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wide transition-all ${className}`}
            aria-label={t(`mobileBar.${key}Aria`)}
          >
            <Icon size={18} strokeWidth={2.5} className="shrink-0" />
            {SHOW_LABELS && <span className="truncate">{t(`mobileBar.${key}`)}</span>}
          </a>
        ))}
      </div>
    </>
  );
}
