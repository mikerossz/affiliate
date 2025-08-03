import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Leaf, Crown, Award } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Crown,
      title: "Timeless Luxury",
      description: "Every piece is designed with enduring elegance in mind, transcending seasonal trends to become wardrobe staples.",
      color: "camel"
    },
    {
      icon: Leaf,
      title: "Sustainable Fashion",
      description: "We source only the finest sustainable materials, ensuring our beautiful pieces respect both people and planet.",
      color: "sage"
    },
    {
      icon: Scissors,
      title: "Artisan Craftsmanship",
      description: "Each garment is meticulously crafted by skilled artisans who take pride in their traditional techniques.",
      color: "charcoal"
    },
    {
      icon: Award,
      title: "Heritage Quality",
      description: "Our commitment to quality means every piece is built to last, becoming more beautiful with time.",
      color: "camel"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blush/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-soft-beige/50 rounded-full text-sm font-body font-medium mb-6 border border-border/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Crown className="w-4 h-4 mr-2 text-camel" />
            Our Story
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-display font-semibold mb-6">
            <span className="text-charcoal">Crafted with</span>
            <br />
            <span className="text-luxury">Purpose</span>
          </h2>

          <p className="text-xl text-warm-gray max-w-3xl mx-auto body-elegant leading-relaxed">
            Born from a passion for timeless elegance and sustainable luxury, Elegance represents 
            the perfect marriage of Stockholm minimalism and old money sophistication.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="card-fashion p-8 h-full">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-${value.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className={`h-8 w-8 text-${value.color}`} />
                  </motion.div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-luxury transition-all duration-300">
                    {value.title}
                  </h3>

                  <p className="text-warm-gray body-elegant leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Heritage Story */}
        <motion.div
          className="bg-gradient-warm rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-display font-semibold text-charcoal mb-6">
                Heritage Meets Innovation
              </h3>
              <p className="text-warm-gray body-elegant leading-relaxed mb-6">
                Our journey began in Stockholm's fashion district, where traditional Scandinavian 
                design principles met the timeless elegance of old money aesthetics. Each piece 
                in our collection tells a story of meticulous craftsmanship and unwavering 
                attention to detail.
              </p>
              <p className="text-warm-gray body-elegant leading-relaxed">
                We believe that true luxury lies not in excess, but in the perfect balance of 
                form, function, and responsibility. Our commitment to sustainable practices 
                ensures that elegance and ethics walk hand in hand.
              </p>
            </div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "Since 2018", label: "Heritage" },
                { value: "100%", label: "Sustainable" },
                { value: "50+", label: "Artisans" },
                { value: "25+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                  whileHover={{ y: -2 }}
                >
                  <div className="text-2xl font-display font-semibold text-luxury mb-1">{stat.value}</div>
                  <div className="text-sm text-warm-gray body-elegant">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;