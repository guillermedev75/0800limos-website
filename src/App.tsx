import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Landing } from './pages/Landing';
import { Analytics } from './components/Analytics';

// Lazy-load blog pages — landing visitors don't pay the cost
const BlogIndex = lazy(() => import('./pages/BlogIndex').then((m) => ({ default: m.BlogIndex })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Landing locale="en-US" />} />
          <Route path="/pt" element={<Landing locale="pt-BR" />} />
          <Route path="/es" element={<Landing locale="es" />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Landing locale="en-US" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
