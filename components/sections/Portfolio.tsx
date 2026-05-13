'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Luxury Brand Campaign',
      category: 'Commercial',
      image: '🎥',
      description: 'High-end product video for luxury automotive brand',
    },
    {
      id: 2,
      title: 'Music Video Production',
      category: 'Music',
      image: '🎵',
      description: 'Cinematic music video for emerging artist',
    },
    {
      id: 3,
      title: 'Documentary Series',
      category: 'Documentary',
      image: '📽️',
      description: 'Multi-episode documentary following environmental conservation',
    },
    {
      id: 4,
      title: 'Corporate Presentation',
      category: 'Corporate',
      image: '💼',
      description: 'Dynamic corporate video with motion graphics',
    },
    {
      id: 5,
      title: 'Travel Vlog Series',
      category: 'Content',
      image: '✈️',
      description: 'Cinematic travel content for influencer brand',
    },
    {
      id: 6,
      title: 'Product Launch Event',
      category: 'Event',
      image: '🚀',
      description: 'Live event coverage and promotional video',
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
      id="portfolio"
      ref={ref}
      className="relative py-24 bg-dark-800 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-red rounded-full mix-blend-screen filter blur-3xl opacity-3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-accent-red">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">Explore a curated selection of recent work showcasing diverse styles and technical expertise</p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <motion.div
                  className="relative h-80 rounded-2xl overflow-hidden glass cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 via-transparent to-dark-900 flex items-center justify-center">
                    <span className="text-8xl opacity-20">{project.image}</span>
                  </div>

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                    animate={hoveredId === project.id ? { opacity: 1 } : { opacity: 0 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-accent-red font-semibold text-sm">{project.category}</span>
                      <motion.svg
                        className="w-5 h-5 text-accent-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={hoveredId === project.id ? { x: 5 } : { x: 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-accent-red/20 text-accent-red text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              className="px-8 py-4 glass hover:bg-white/20 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Portfolio →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
