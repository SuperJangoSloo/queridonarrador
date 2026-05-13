'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 bg-dark-900 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-red rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-accent-red">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-red to-transparent rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                I'm a passionate video editor and content creator with over a decade of experience crafting compelling visual narratives. My journey started with a simple camera and a dream to tell stories that resonate with audiences worldwide.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Specializing in cinematic production, commercial advertising, and digital storytelling, I transform raw footage into polished masterpieces that drive engagement and results. Every project is an opportunity to push creative boundaries.
              </p>

              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Video Editing',
                    'Color Grading',
                    'Motion Graphics',
                    'Sound Design',
                    'Cinematography',
                    'Visual Effects',
                    'Storytelling',
                    'Adobe Suite',
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="glass p-3 rounded-lg text-sm font-semibold flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-accent-red mr-2">→</span> {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative h-80 lg:h-96 rounded-2xl overflow-hidden glass"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    🎬
                  </motion.div>
                  <p className="text-gray-300">Your Portrait Photo Here</p>
                  <p className="text-sm text-gray-500 mt-2">4:5 aspect ratio recommended</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
