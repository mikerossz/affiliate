import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-background rounded-full text-sm font-medium mb-6 border border-border/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail className="w-4 h-4 mr-2 text-electric-blue" />
            Contact Us
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to</span>
            <br />
            <span className="text-gradient">Get Started?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our AI-powered robotics solutions. 
            Contact our team to discuss your specific needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="card-premium p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue transition-all duration-300"
                    placeholder="John"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue transition-all duration-300"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue transition-all duration-300"
                  placeholder="john@company.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue transition-all duration-300"
                  placeholder="Your Company"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.0 }}
              >
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="btn-premium w-full group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "+1 (555) 123-4567",
                  color: "electric-blue"
                },
                {
                  icon: Mail,
                  title: "Email",
                  detail: "hello@robotechai.com",
                  color: "tech-green"
                },
                {
                  icon: MapPin,
                  title: "Office",
                  detail: "123 Innovation Drive, Tech City, TC 12345",
                  color: "electric-blue"
                }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 card-premium group hover:shadow-glow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    whileHover={{ y: -2 }}
                  >
                    <div className={`p-3 rounded-xl bg-${contact.color}/10 border border-${contact.color}/20`}>
                      <IconComponent className={`h-6 w-6 text-${contact.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{contact.title}</h4>
                      <p className="text-muted-foreground">{contact.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Office Hours */}
            <motion.div
              className="card-premium p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
            >
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;