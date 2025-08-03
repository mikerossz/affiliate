import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/fashion-logo.jpg';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "New Arrivals", href: "#" },
        { label: "Knitwear", href: "#" },
        { label: "Outerwear", href: "#" },
        { label: "Accessories", href: "#" }
      ]
    },
    {
      title: "Customer Care",
      links: [
        { label: "Size Guide", href: "#" },
        { label: "Shipping", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Care Instructions", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "#" },
        { label: "Stores", href: "#" },
        { label: "Newsletter", href: "#" },
        { label: "Personal Styling", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="Elegance" className="h-12 w-12 rounded" />
              <span className="text-2xl font-display font-semibold text-luxury">Elegance</span>
            </motion.div>

            <motion.p
              className="text-warm-gray mb-6 body-elegant leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Timeless elegance meets Stockholm minimalism. Discover sophisticated fashion 
              pieces crafted from the finest sustainable materials for the modern connoisseur.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg bg-warm-gray/10 border border-warm-gray/20 hover:border-camel transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-warm-gray hover:text-camel transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-semibold mb-4 text-cream">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * linkIndex }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-warm-gray hover:text-camel transition-colors duration-300 relative group body-elegant"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-camel transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-warm-gray/20 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-display font-semibold mb-2">Stay in Touch</h3>
              <p className="text-warm-gray body-elegant">
                Be the first to know about new collections and exclusive offers.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-warm-gray/10 border border-warm-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-camel transition-all duration-300 text-cream placeholder-warm-gray"
              />
              <motion.button
                className="btn-luxury whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-warm-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-warm-gray"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="body-elegant">
            © 2024 Elegance. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-camel transition-colors body-elegant">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-camel transition-colors body-elegant">
              Terms of Service
            </a>
            <a href="#" className="hover:text-camel transition-colors body-elegant">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;