'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const services = [
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Professional editing with color grading, sound design, and effects for any format or duration',
      features: ['4K/8K Support', 'Color Grading', 'Sound Design'],
    },
    {
      icon: '✨',
      title: 'Motion Graphics',
      description: 'Stunning animations and graphics that bring your content to life with dynamic visuals',
      features: ['Title Sequences', 'Explainer Videos', 'VFX'],
    },
    {
      icon: '🎥',
      title: 'Cinematography',
      description: 'Professional filming and shot composition for commercials, documentaries, and events',
      features: ['Drone Footage', 'Multi-Camera', 'Live Events'],
    },
    {
      icon: '📊',
      title: 'Video Marketing',
      description: 'Tailored video content designed to maximize engagement and drive conversions for your brand',
      features: ['Social Media', 'Ads', 'Promotional'],
    },
    {
      icon: '🎵',
      title: 'Audio Production',
      description: 'Professional audio mixing and mastering to ensure crystal-clear, high-quality sound',
      features: ['Mixing', 'Mastering', 'Voice-Over'],
    },
    {
      icon: '📱',
      title: 'Content Creation',
      description: 'Full-service content creation from concept to final delivery for digital platforms',
      features: ['Concept Dev', 'Storyboarding', 'Delivery'],
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 bg-dark-900 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-red rounded-full mix-blend-screen filter blur-3xl opacity-3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-accent-red">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive video production solutions tailored to your unique needs and vision</p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <span className="text-accent-red mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className="mt-6 w-full px-4 py-2 bg-accent-red/10 hover:bg-accent-red text-white rounded-lg font-semibold text-sm transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
