import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { BookingWidget } from './components/sections/BookingWidget';
import { Services } from './components/sections/Services';
import { Destinations } from './components/sections/Destinations';
import { WhyUs } from './components/sections/WhyUs';
import { Testimonials } from './components/sections/Testimonials';
import { Areas } from './components/sections/Areas';

function App() {
  return (
    <div className="min-h-screen bg-midnight">
      <Header />
      <main>
        <Hero />
        <BookingWidget />
        <Services />
        <Destinations />
        <WhyUs />
        <Testimonials />
        <Areas />
      </main>
      <Footer />
    </div>
  );
}

export default App;
