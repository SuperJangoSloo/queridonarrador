'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: '▶️', name: 'YouTube', url: 'https://youtube.com' },
    { icon: 'Ⓘ', name: 'Instagram', url: 'https://instagram.com' },
    { icon: '𝕏', name: 'Twitter', url: 'https://twitter.com' },
    { icon: '👔', name: 'LinkedIn', url: 'https://linkedin.com' },
  ]

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="relative bg-dark-900 border-t border-white/10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-red rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '100px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent-red mb-4">▶ Studio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Crafting cinematic experiences and compelling video content for brands worldwide.</p>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-red transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>© {currentYear} Video Editor Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-red transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-red transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
