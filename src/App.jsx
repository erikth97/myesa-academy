import { useRef } from 'react';
import Hero from './components/Hero';
import BrandCarousel from './components/BrandCarousel';
import VideoSection from './components/VideoSection';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const registroRef = useRef(null);

  const handleCtaClick = () => {
    registroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Focus en el primer input después del scroll
    setTimeout(() => {
      const firstInput = document.getElementById('nombre');
      firstInput?.focus();
    }, 800);
  };

  return (
    <div className="bg-myesa-bg min-h-screen">
      <Hero onCtaClick={handleCtaClick} />
      <BrandCarousel />
      <VideoSection />
      <div ref={registroRef}>
        <RegistrationForm />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
