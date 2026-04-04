import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { BookingWidget } from './components/sections/BookingWidget';
import { Services } from './components/sections/Services';
import { Destinations } from './components/sections/Destinations';
import { WhyUs } from './components/sections/WhyUs';
import { Testimonials } from './components/sections/Testimonials';
import { Areas } from './components/sections/Areas';
import { FloatingQuoteButton } from './components/FloatingQuoteButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <WhyUs />
        <Testimonials />
        <Areas />
        <BookingWidget />
      </main>
      <FloatingQuoteButton />
      <Footer />
    </div>
  );
}

export default App;
