import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import fashionHero from '@/assets/fashion-hero.jpg';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative py-24 flex items-center justify-center bg-gradient-to-br from-cream via-warm-white to-soft-beige"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+Cjwvc3ZnPgo=')] opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-soft-beige/50 rounded-full text-sm font-body font-medium mb-6 border border-border/30"
            >
              <span className="w-2 h-2 bg-sage rounded-full mr-3 animate-pulse" />
              Stockholm Collection 2024
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="block text-charcoal">Timeless</span>
              <span className="block text-luxury">Elegance</span>
              <span className="block text-warm-gray">Redefined</span>
            </motion.h1>

            <motion.p
              className="text-xl text-warm-gray mb-8 max-w-2xl mx-auto body-elegant leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Discover sophisticated fashion pieces that blend old money aesthetics with 
              contemporary Stockholm minimalism. Curated for the modern connoisseur.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                className="btn-luxury group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                className="btn-elegant group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Lookbook
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {[
                { value: '1000+', label: 'Happy Customers' },
                { value: '4.9', label: 'Rating' },
                { value: '24h', label: 'Fast Shipping' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-display font-semibold text-luxury">{stat.value}</div>
                  <div className="text-sm text-warm-gray body-elegant">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
      </div>

    </section>
  );
};

export default Hero;