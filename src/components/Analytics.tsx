import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Analytics scaffolding — DISABLED by default.
 *
 * To activate:
 *   1. Create a Google Analytics 4 property and grab the Measurement ID (G-XXXXXXX).
 *   2. Set VITE_GA_ID=G-XXXXXXX in your Vercel env (Production + Preview).
 *   3. Redeploy. The script auto-injects and tracks SPA route changes.
 *
 * Optional: VITE_GTM_ID for Google Tag Manager.
 */

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;

let gaInjected = false;
let gtmInjected = false;

function injectGA() {
  if (gaInjected || !GA_ID) return;
  gaInjected = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  const inline = document.createElement('script');
  inline.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { send_page_view: false });
  `;
  document.head.appendChild(inline);
}

function injectGTM() {
  if (gtmInjected || !GTM_ID) return;
  gtmInjected = true;
  const inline = document.createElement('script');
  inline.text = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `;
  document.head.appendChild(inline);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    injectGA();
    injectGTM();
  }, []);

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
