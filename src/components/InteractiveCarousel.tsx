import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ShoppingBag, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import modelOutfit1 from '@/assets/model-outfit-1.jpg';
import modelOutfit2 from '@/assets/model-outfit-2.jpg';
import modelOutfit3 from '@/assets/model-outfit-3.jpg';

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  label: string;
  link: string;
  price: string;
}

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  hotspots: Hotspot[];
}

const InteractiveCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slides: CarouselSlide[] = [
    {
      id: 1,
      image: modelOutfit1,
      title: "Essential Cashmere Collection",
      description: "Timeless pieces for the modern wardrobe",
      hotspots: [
        {
          id: "sweater1",
          x: 45,
          y: 35,
          label: "Cashmere Sweater",
          link: "https://shopee.co.id/search?keyword=cashmere%20sweater",
          price: "€450"
        },
        {
          id: "trousers1",
          x: 50,
          y: 65,
          label: "Tailored Trousers",
          link: "https://shopee.co.id/search?keyword=tailored%20trousers",
          price: "€320"
        },
        {
          id: "watch1",
          x: 35,
          y: 45,
          label: "Minimalist Watch",
          link: "https://shopee.co.id/search?keyword=minimalist%20watch",
          price: "€280"
        }
      ]
    },
    {
      id: 2,
      image: modelOutfit2,
      title: "Stockholm Business Style",
      description: "Professional elegance redefined",
      hotspots: [
        {
          id: "trench2",
          x: 50,
          y: 40,
          label: "Navy Trench Coat",
          link: "https://shopee.co.id/search?keyword=trench%20coat",
          price: "€890"
        },
        {
          id: "blouse2",
          x: 48,
          y: 55,
          label: "Silk Blouse",
          link: "https://shopee.co.id/search?keyword=silk%20blouse",
          price: "€320"
        },
        {
          id: "pants2",
          x: 52,
          y: 75,
          label: "Black Tailored Pants",
          link: "https://shopee.co.id/search?keyword=black%20tailored%20pants",
          price: "€380"
        }
      ]
    },
    {
      id: 3,
      image: modelOutfit3,
      title: "Weekend Sophistication",
      description: "Elevated casual wear",
      hotspots: [
        {
          id: "cardigan3",
          x: 48,
          y: 38,
          label: "Cashmere Cardigan",
          link: "https://shopee.co.id/search?keyword=cashmere%20cardigan",
          price: "€520"
        },
        {
          id: "scarf3",
          x: 45,
          y: 25,
          label: "Silk Scarf",
          link: "https://shopee.co.id/search?keyword=silk%20scarf",
          price: "€180"
        },
        {
          id: "pants3",
          x: 50,
          y: 70,
          label: "Wide-leg Pants",
          link: "https://shopee.co.id/search?keyword=wide%20leg%20pants",
          price: "€350"
        }
      ]
    }
  ];

  return (
    <section className="h-screen bg-background">
      <div className="w-full h-screen">
        <motion.div
          ref={ref}
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel className="w-full h-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={slide.id}>
                  <div className="relative group h-screen">
                    {/* Main Image */}
                    <div className="relative overflow-hidden h-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                      
                      {/* Hotspots */}
                      {slide.hotspots.map((hotspot) => (
                        <motion.a
                          key={hotspot.id}
                          href={hotspot.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute group/hotspot"
                          style={{
                            left: `${hotspot.x}%`,
                            top: `${hotspot.y}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Hotspot Button */}
                          <div className="relative">
                            {/* Pulsing Ring */}
                            <div className="absolute inset-0 w-8 h-8 bg-luxury/30 rounded-full animate-ping" />
                            
                            {/* Main Button */}
                            <div className="relative w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full shadow-elegant flex items-center justify-center border border-luxury/20 hover:bg-luxury hover:text-white transition-all duration-300">
                              <ShoppingBag className="h-3 w-3" />
                            </div>
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none">
                              <div className="bg-charcoal/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-elegant">
                                <div className="font-body font-medium">{hotspot.label}</div>
                                <div className="text-camel font-display font-semibold">{hotspot.price}</div>
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal/95" />
                              </div>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <h3 className="text-3xl font-display font-semibold mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-lg body-elegant text-white/90">
                            {slide.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <CarouselPrevious className="left-8 bg-white/90 backdrop-blur-sm border-luxury/20 text-charcoal hover:bg-luxury hover:text-white transition-all z-20" />
            <CarouselNext className="right-8 bg-white/90 backdrop-blur-sm border-luxury/20 text-charcoal hover:bg-luxury hover:text-white transition-all z-20" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveCarousel;