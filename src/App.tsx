import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Landing } from './pages/Landing';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';
import { Analytics } from './components/Analytics';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // anchor scroll handled by Landing
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/" element={<Landing locale="pt-BR" />} />
        <Route path="/en" element={<Landing locale="en-US" />} />
        <Route path="/es" element={<Landing locale="es" />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<Landing locale="pt-BR" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
