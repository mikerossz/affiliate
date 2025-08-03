import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Star, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import productSweater from '@/assets/product-sweater.jpg';
import productTrench from '@/assets/product-trench.jpg';

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      id: 1,
      name: "Cashmere Essential Sweater",
      category: "Knitwear",
      price: "€450",
      originalPrice: "€520",
      image: productSweater,
      rating: 4.9,
      reviews: 124,
      colors: ["Cream", "Camel", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Luxuriously soft cashmere sweater in timeless cream. Perfect for Stockholm winters.",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Classic Trench Coat",
      category: "Outerwear",
      price: "€890",
      originalPrice: null,
      image: productTrench,
      rating: 4.8,
      reviews: 89,
      colors: ["Camel", "Navy", "Black"],
      sizes: ["34", "36", "38", "40", "42"],
      description: "Timeless trench coat crafted from premium gabardine. An investment piece for life.",
      badge: "New"
    },
    {
      id: 3,
      name: "Silk Blouse",
      category: "Tops",
      price: "€320",
      originalPrice: "€380",
      image: productSweater, // Placeholder - would use different image
      rating: 4.7,
      reviews: 76,
      colors: ["Ivory", "Blush", "Sage"],
      sizes: ["XS", "S", "M", "L"],
      description: "Elegant silk blouse with refined details. Perfect for office or evening occasions.",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Wool Tailored Trousers",
      category: "Bottoms",
      price: "€380",
      originalPrice: null,
      image: productTrench, // Placeholder - would use different image
      rating: 4.9,
      reviews: 156,
      colors: ["Charcoal", "Navy", "Cream"],
      sizes: ["34", "36", "38", "40", "42"],
      description: "Impeccably tailored wool trousers. The foundation of a sophisticated wardrobe.",
      badge: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="collection" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-background rounded-full text-sm font-body font-medium mb-6 border border-border/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2 text-camel" />
            Featured Collection
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-display font-semibold mb-6">
            <span className="text-charcoal">Curated</span>
            <br />
            <span className="text-luxury">Essentials</span>
          </h2>

          <p className="text-xl text-warm-gray max-w-3xl mx-auto body-elegant leading-relaxed">
            Thoughtfully selected pieces that embody timeless sophistication and modern elegance. 
            Each item is crafted from the finest materials and designed to last generations.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="product-card overflow-hidden">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-medium ${
                      product.badge === 'Sale' ? 'bg-destructive text-white' :
                      product.badge === 'New' ? 'bg-sage text-charcoal' :
                      'bg-camel text-charcoal'
                    }`}>
                      {product.badge}
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-elegant transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="h-4 w-4 text-charcoal" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-elegant transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="h-4 w-4 text-charcoal" />
                    </motion.button>
                  </div>

                  {/* Quick Add to Cart */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <button className="btn-luxury group w-full">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Add to Cart
                    </button>
                  </motion.div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-body text-warm-gray">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-camel text-camel" />
                      <span className="text-sm font-body text-charcoal">{product.rating}</span>
                      <span className="text-sm text-warm-gray">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-charcoal mb-2 group-hover:text-luxury transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-warm-gray body-elegant mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Colors */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xs font-body text-warm-gray">Colors:</span>
                    <div className="flex space-x-1">
                      {product.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className={`w-4 h-4 rounded-full border border-gray-300 ${
                            color === 'Cream' ? 'bg-cream' :
                            color === 'Camel' ? 'bg-camel' :
                            color === 'Navy' ? 'bg-navy-deep' :
                            color === 'Ivory' ? 'bg-warm-white' :
                            color === 'Blush' ? 'bg-blush' :
                            color === 'Sage' ? 'bg-sage' :
                            color === 'Charcoal' ? 'bg-charcoal' :
                            'bg-gray-400'
                          }`}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-display font-semibold text-charcoal">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-warm-gray line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="btn-luxury group text-lg px-8 py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Collection
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;