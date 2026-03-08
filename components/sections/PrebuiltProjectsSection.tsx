'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const prebuiltProjects = [
  {
    id: 1,
    title: 'E-Commerce Full Stack',
    description: 'Complete online store with admin panel, payment gateway, and inventory management',
    price: '₹2,49,900',
    features: ['Next.js + Node.js', 'Payment Integration', 'Admin Dashboard', 'Mobile Responsive'],
    image: '/projects/ecommerce.jpg',
    demoUrl: '#',
    category: 'E-Commerce',
    rating: 4.9,
    reviews: 47,
  },
  {
    id: 2,
    title: 'SaaS Dashboard Template',
    description: 'Modern SaaS application with authentication, billing, and analytics dashboard',
    price: '₹1,66,500',
    features: ['React + TypeScript', 'Auth System', 'Stripe Integration', 'Analytics'],
    image: '/projects/saas.jpg',
    demoUrl: '#',
    category: 'SaaS',
    rating: 5.0,
    reviews: 32,
  },
  {
    id: 3,
    title: 'Restaurant Booking App',
    description: 'Full-featured restaurant reservation system with table management',
    price: '₹1,24,900',
    features: ['React Native', 'Real-time Booking', 'Push Notifications', 'Reviews'],
    image: '/projects/restaurant.jpg',
    demoUrl: '#',
    category: 'Mobile App',
    rating: 4.8,
    reviews: 28,
  },
  {
    id: 4,
    title: 'Portfolio Website Pro',
    description: 'Premium portfolio template with CMS, blog, and contact forms',
    price: '₹66,500',
    features: ['Next.js 14', 'Headless CMS', 'SEO Optimized', 'Dark/Light Mode'],
    image: '/projects/portfolio.jpg',
    demoUrl: '#',
    category: 'Website',
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Complete LMS with courses, quizzes, certificates, and progress tracking',
    price: '₹2,91,500',
    features: ['Full Stack', 'Video Streaming', 'Certificates', 'Progress Tracking'],
    image: '/projects/lms.jpg',
    demoUrl: '#',
    category: 'Education',
    rating: 4.7,
    reviews: 19,
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    description: 'Property listing website with search filters, maps, and agent dashboard',
    price: '₹2,08,200',
    features: ['Next.js', 'Map Integration', 'Advanced Search', 'Agent Portal'],
    image: '/projects/realestate.jpg',
    demoUrl: '#',
    category: 'Website',
    rating: 4.9,
    reviews: 41,
  },
]

const categories = ['All', 'E-Commerce', 'SaaS', 'Mobile App', 'Website', 'Education']

export function PrebuiltProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All'
    ? prebuiltProjects
    : prebuiltProjects.filter(p => p.category === selectedCategory)

  return (
    <section id="prebuilt-projects" ref={ref} className="section-padding relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-blue-600 mb-4 shadow-sm">
            Ready-to-Use Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Pre-Built <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save time and money with our professionally built, ready-to-deploy projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-300 text-7xl font-bold">
                    {project.category.charAt(0)}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent flex items-center justify-center"
                >
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:scale-105 transition-transform">
                    View Demo
                  </button>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-600">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(project.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {project.rating} ({project.reviews} reviews)
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold gradient-text">
                      {project.price}
                    </div>
                    <div className="text-xs text-gray-500">One-time payment</div>
                  </div>
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 transition-transform">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We can build it custom for you!
          </p>
          <button className="magnetic-button">
            Request Custom Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}
