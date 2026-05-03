import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { useSeo } from '../hooks/useSeo';
import { PUBLISHED_POSTS } from '../data/posts';
import { ArrowRight, Clock } from 'lucide-react';

export function BlogIndex() {
  const posts = PUBLISHED_POSTS();

  useSeo({
    title: 'Blog | 0800 Limos — Bay Area Luxury Travel Insights',
    description:
      'Insider guides on Napa wine tours, SFO airport transfers, Pebble Beach golf trips, Bay Area weddings and corporate travel. Curated by 0800 Limos chauffeurs.',
    canonical: 'https://0800limos.com/blog',
    lang: 'en-US',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: '0800 Limos Blog',
      url: 'https://0800limos.com/blog',
      publisher: { '@id': 'https://0800limos.com/#business' },
      blogPost: posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `https://0800limos.com/blog/${p.slug}`,
        datePublished: p.publishedAt,
        dateModified: p.updatedAt ?? p.publishedAt,
      })),
    },
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <Container>
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              The 0800 Journal
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 uppercase tracking-wider mt-4 mb-6">
              Bay Area, <span className="text-gradient-gold">Refined</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-gray-600 text-lg">
              Curated guides to wine country, airport logistics, golf weekends, weddings,
              and corporate travel — written by the people who chauffeur it.
            </p>
          </div>

          {/* Posts */}
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">New stories coming soon.</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-6 text-gold font-medium hover:gap-3 transition-all"
              >
                Back to home <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post, idx) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`group block ${
                    idx === 0 ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <article
                    className={`overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-gold/40 hover:shadow-xl transition-all duration-300 h-full flex ${
                      idx === 0 ? 'flex-col md:flex-row' : 'flex-col'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-gray-100 ${
                        idx === 0 ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'
                      }`}
                    >
                      <img
                        src={post.heroImage}
                        alt={post.heroImageAlt}
                        loading={idx > 1 ? 'lazy' : 'eager'}
                        decoding="async"
                        fetchPriority={idx === 0 ? 'high' : 'auto'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-white text-[10px] font-display font-semibold uppercase tracking-wider px-3 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className={`p-6 md:p-8 flex flex-col ${idx === 0 ? 'md:w-1/2 md:justify-center' : 'flex-1'}`}>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                        <span aria-hidden="true">•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} /> {post.readMinutes} min read
                        </span>
                      </div>
                      <h2
                        className={`font-display font-bold text-gray-900 group-hover:text-gold transition-colors mb-3 ${
                          idx === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                        }`}
                      >
                        {post.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all">
                        Read more <ArrowRight size={16} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
