import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description?: string;
  canonical?: string;
  lang?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  jsonLd?: object | object[];
  publishedTime?: string;
  modifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
}

const SITE_URL = 'https://0800limos.com';

function setMeta(attr: 'name' | 'property', key: string, content: string | undefined) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (content === undefined || content === null) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo(opts: SeoOptions) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = opts.title;

    if (opts.lang) {
      document.documentElement.setAttribute('lang', opts.lang);
    }

    setMeta('name', 'description', opts.description);
    setMeta('property', 'og:title', opts.title);
    setMeta('property', 'og:description', opts.description);
    setMeta('property', 'og:type', opts.ogType ?? 'website');
    setMeta('property', 'og:url', opts.canonical ?? SITE_URL);
    setMeta('property', 'og:image', opts.ogImage ?? `${SITE_URL}/og-image.jpg`);
    setMeta('name', 'twitter:title', opts.title);
    setMeta('name', 'twitter:description', opts.description);
    setMeta('name', 'twitter:image', opts.ogImage ?? `${SITE_URL}/og-image.jpg`);

    setMeta(
      'name',
      'robots',
      opts.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'
    );

    if (opts.canonical) {
      setLink('canonical', opts.canonical);
    }

    // Article-specific OG
    if (opts.ogType === 'article') {
      setMeta('property', 'article:published_time', opts.publishedTime);
      setMeta('property', 'article:modified_time', opts.modifiedTime);
      setMeta('property', 'article:author', opts.articleAuthor);
      setMeta('property', 'article:section', opts.articleSection);
      // Remove old tags then add new
      document.head
        .querySelectorAll('meta[property="article:tag"]')
        .forEach((n) => n.remove());
      (opts.articleTags ?? []).forEach((tag) => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'article:tag');
        m.setAttribute('content', tag);
        document.head.appendChild(m);
      });
    }

    // JSON-LD per page (id="page-jsonld" so we can replace it on each route)
    const oldLd = document.head.querySelector('script[data-page-jsonld]');
    if (oldLd) oldLd.remove();
    if (opts.jsonLd) {
      const s = document.createElement('script');
      s.setAttribute('type', 'application/ld+json');
      s.setAttribute('data-page-jsonld', 'true');
      s.text = JSON.stringify(opts.jsonLd);
      document.head.appendChild(s);
    }
  }, [
    opts.title,
    opts.description,
    opts.canonical,
    opts.lang,
    opts.ogImage,
    opts.ogType,
    opts.noIndex,
    opts.publishedTime,
    opts.modifiedTime,
    opts.articleAuthor,
    opts.articleSection,
    JSON.stringify(opts.articleTags ?? []),
    JSON.stringify(opts.jsonLd ?? null),
  ]);
}
