'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

interface Props {
  service: Service
  index: number
  isInView: boolean
}

export function ServiceCard3D({ service, index, isInView }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -10
    const rotateYValue = ((x - centerX) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="relative glass-effect rounded-2xl p-8 h-full transform-gpu backface-hidden group hover:shadow-2xl hover:shadow-electric-blue/20 transition-shadow duration-500"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-electric-blue to-electric-cyan flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="relative font-display text-2xl font-bold mb-4 text-gray-900 group-hover:gradient-text transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="relative text-gray-900/70 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="relative space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-900/60">
              <svg
                className="w-4 h-4 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <motion.div
          className="relative mt-6 flex items-center gap-2 text-blue-600 font-medium cursor-pointer"
          whileHover={{ x: 5 }}
        >
          Learn More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>

        {/* 3D Effect Border */}
        <div
          className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"
          style={{
            transform: 'translateZ(1px)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
