'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: 150, suffix: '+', label: 'Projects Completed' },
  { number: 50, suffix: '+', label: 'Happy Clients' },
  { number: 99, suffix: '%', label: 'Success Rate' },
  { number: 15, suffix: '+', label: 'Years Experience' },
]

function Counter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, isInView])

  return (
    <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-electric-cyan/10" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-900/70">
            Delivering excellence across every project
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 glass-effect rounded-2xl"
            >
              <Counter 
                target={stat.number} 
                suffix={stat.suffix}
                isInView={isInView}
              />
              <div className="mt-4 text-gray-900/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
