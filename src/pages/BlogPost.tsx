import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { useSeo } from '../hooks/useSeo';
import { findPost, PUBLISHED_POSTS } from '../data/posts';
import { Markdown } from '../lib/markdown';
import { ArrowLeft, Clock, ChevronDown, MessageCircle, Phone } from 'lucide-react';

export function BlogPost() {
  const { slug = '' } = useParams();
  const post = findPost(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hooks must run before any conditional return
  const url = `https://0800limos.com/blog/${slug}`;
  useSeo({
    title: post ? `${post.metaTitle} | 0800 Limos` : 'Post not found | 0800 Limos',
    description: post?.metaDescription,
    canonical: url,
    lang: 'en-US',
    ogType: 'article',
    ogImage: post ? `https://0800limos.com${post.heroImage}` : undefined,
    publishedTime: post?.publishedAt,
    modifiedTime: post?.updatedAt ?? post?.publishedAt,
    articleAuthor: '0800 Limos',
    articleSection: post?.category,
    articleTags: post?.tags,
    noIndex: !post,
    jsonLd: post
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            headline: post.title,
            description: post.metaDescription,
            image: [`https://0800limos.com${post.heroImage}`],
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            author: { '@type': 'Organization', name: '0800 Limos', url: 'https://0800limos.com/' },
            publisher: { '@id': 'https://0800limos.com/#business' },
            keywords: post.tags.join(', '),
            articleSection: post.category,
            inLanguage: 'en-US',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://0800limos.com/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://0800limos.com/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: url },
            ],
          },
          ...(post.faqs && post.faqs.length
            ? [
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: post.faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.q,
                    acceptedAnswer: { '@type': 'Answer', text: f.a },
                  })),
                },
              ]
            : []),
        ]
      : undefined,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = PUBLISHED_POSTS()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-gold transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="flex-1 pt-24">
        {/* Hero */}
        <header className="relative">
          <div className="relative h-[55vh] min-h-[380px] max-h-[640px] overflow-hidden bg-gray-900">
            <img
              src={post.heroImage}
              alt={post.heroImageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
            <Container>
              <div className="relative z-10 h-full flex items-end pb-12 md:pb-16">
                <div className="max-w-3xl">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-gold text-sm mb-4 transition-colors"
                  >
                    <ArrowLeft size={16} /> Back to blog
                  </Link>
                  <span className="bg-gold text-white text-[10px] font-display font-semibold uppercase tracking-wider px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                    {post.title}
                  </h1>
                  <div className="mt-5 flex items-center gap-4 text-white/80 text-sm">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} /> {post.readMinutes} min read
                    </span>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </header>

        {/* Body */}
        <Container>
          <article className="max-w-3xl mx-auto py-12 md:py-16">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light border-l-4 border-gold pl-5 mb-10">
              {post.excerpt}
            </p>

            <Markdown>{post.body}</Markdown>

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-16">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="divide-y divide-gray-200 border-y border-gray-200">
                  {post.faqs.map((f, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                      >
                        <span className="font-display font-semibold text-gray-900 text-base md:text-lg">
                          {f.q}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-gold flex-shrink-0 transition-transform ${
                            openFaq === idx ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaq === idx && (
                        <p className="pb-5 text-gray-700 leading-relaxed">{f.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <aside className="mt-16 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 text-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                Plan your ride
              </h3>
              <p className="text-white/70 max-w-xl mx-auto mb-6">
                Tell us where and when. Our team confirms vehicle, route and chauffeur within minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://customer.moovs.app/0800-limos-inc/request/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  Book online
                </a>
                <a
                  href="https://wa.me/16506669333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a
                  href="tel:6506669333"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  <Phone size={18} /> 650-666-9333
                </a>
              </div>
            </aside>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </article>
        </Container>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-gray-50 py-16 mt-8">
            <Container>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 text-center mb-10">
                Keep reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gold/40 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={p.heroImage}
                        alt={p.heroImageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] text-gold font-display font-semibold uppercase tracking-wider">
                        {p.category}
                      </span>
                      <h3 className="mt-2 font-display font-semibold text-gray-900 group-hover:text-gold transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
