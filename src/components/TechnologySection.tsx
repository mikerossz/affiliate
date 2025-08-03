import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Lightbulb, Cog, Database } from 'lucide-react';

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      icon: Lightbulb,
      title: "Machine Learning",
      description: "Advanced neural networks that enable our robots to learn, adapt, and improve their performance continuously.",
      features: ["Deep Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      icon: Layers,
      title: "Autonomous Systems",
      description: "Self-governing robots capable of making decisions and operating independently in complex environments.",
      features: ["Path Planning", "Obstacle Avoidance", "Real-time Decision Making"]
    },
    {
      icon: Cog,
      title: "Precision Engineering",
      description: "State-of-the-art mechanical design and manufacturing processes for superior reliability and performance.",
      features: ["Advanced Materials", "Precision Actuators", "Robust Design"]
    },
    {
      icon: Database,
      title: "Cloud Integration",
      description: "Seamless connectivity to cloud platforms for data analytics, remote monitoring, and over-the-air updates.",
      features: ["IoT Connectivity", "Real-time Analytics", "Remote Diagnostics"]
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
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-tech-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl" />
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
            className="inline-flex items-center px-4 py-2 bg-muted/50 rounded-full text-sm font-medium mb-6 border border-border/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Cog className="w-4 h-4 mr-2 text-tech-green animate-rotate" />
            Technology
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Powered by</span>
            <br />
            <span className="text-gradient">Advanced AI</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge technology stack combines artificial intelligence, 
            precision engineering, and cloud connectivity to deliver unparalleled performance.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="card-premium p-8 h-full">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-tech flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {tech.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {tech.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 * (index + featureIndex) }}
                      >
                        <div className="w-2 h-2 rounded-full bg-tech-green mr-3" />
                        <span className="text-foreground/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-tech-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: "10M+", label: "Data Points" },
            { value: "99.9%", label: "Accuracy" },
            { value: "24/7", label: "Monitoring" },
            { value: "50ms", label: "Response Time" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 card-premium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;