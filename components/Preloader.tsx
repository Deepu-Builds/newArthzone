'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-primary"
        >
          <div className="relative">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                className="mb-8"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/img/text-logo.png"
                  alt="Arthzone"
                  width={458}
                  height={114}
                  className="h-[73px] md:h-[110px] w-auto mx-auto"
                  priority
                />
              </motion.div>
              
              {/* Progress Counter */}
              <motion.div
                className="text-4xl md:text-5xl font-bold text-white/90 tabular-nums"
                key={Math.floor(progress)}
              >
                {Math.floor(progress)}%
              </motion.div>
              
              {/* Progress Bar */}
              <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-electric-blue to-electric-cyan"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Orbital Rings */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute inset-0 border-2 border-electric-blue/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ scale: 1.5 }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-electric-cyan/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{ scale: 2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
