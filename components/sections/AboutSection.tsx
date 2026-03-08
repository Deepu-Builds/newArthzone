'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RotatingGlobe } from '../3D/RotatingGlobe'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-blue-600 border border-blue-200 mb-4">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforming Ideas Into{' '}
                <span className="gradient-text">Digital Reality</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-900/70 leading-relaxed"
            >
              At Arthzone Technologies, we're not just developers—we're digital architects
              crafting the future of web and mobile experiences. With a passion for innovation
              and an eye for detail, we transform complex challenges into elegant solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-900/70 leading-relaxed"
            >
              Our team combines cutting-edge technology with creative design thinking to
              deliver products that don't just meet expectations—they exceed them. From
              startups to enterprises, we partner with visionaries to bring their boldest
              ideas to life.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '99%', label: 'Success Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-900/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              className="magnetic-button inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right: 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <RotatingGlobe />
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-1/4 -left-8 glass-effect rounded-2xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lightning Fast</div>
                  <div className="text-sm text-gray-900/60">Optimized Performance</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-1/4 -right-8 glass-effect rounded-2xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Secure & Reliable</div>
                  <div className="text-sm text-gray-900/60">Enterprise Grade</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
