'use client'

import { motion } from 'framer-motion'

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 
  'Docker', 'Kubernetes', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'TensorFlow', 'Flutter', 'React Native', 'Vue.js', 'Angular', 'Svelte',
]

export function TechnologiesMarquee() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-electric-cyan/5" />
      
      <div className="relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-electric-cyan border border-electric-cyan/30">
            Technologies We Master
          </span>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 pr-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="glass-effect px-8 py-4 rounded-full whitespace-nowrap font-medium text-gray-900/80 hover:text-gray-900 hover:scale-105 transition-all duration-300 border border-gray-200"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-primary to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-primary to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
