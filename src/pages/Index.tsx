import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import InteractiveCarousel from '@/components/InteractiveCarousel';
import ProductShowcase from '@/components/ProductShowcase';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background premium-scrollbar">
      <Navigation />
      <InteractiveCarousel />
      <Hero />
      <ProductShowcase />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
