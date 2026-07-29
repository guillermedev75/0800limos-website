/**
 * Thin wrapper over gtag. Every call is a no-op until VITE_GA_ID is set in the
 * Vercel env — see src/components/Analytics.tsx. Keeping the call sites free of
 * `window.gtag &&` guards means we can add tracking anywhere without worrying
 * about whether analytics is live yet.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params ?? {});
}

/** Outbound click to the Moovs booking flow — our only conversion proxy. */
export function trackBookingClick(source: string) {
  trackEvent('booking_click', { source, destination: 'moovs' });
}

/** Appends UTMs so the same Moovs link can be attributed per placement. */
export function moovsUrl(source: string, campaign?: string) {
  const url = new URL('https://customer.moovs.app/0800-limos-inc/request/new');
  url.searchParams.set('utm_source', '0800limos.com');
  url.searchParams.set('utm_medium', source);
  if (campaign) url.searchParams.set('utm_campaign', campaign);
  return url.toString();
}
