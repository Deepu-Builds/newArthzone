'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const consultationPackages = [
  {
    name: 'Quick Consultation',
    duration: '30 minutes',
    price: 'Free',
    features: [
      'Project discussion',
      'Basic requirements analysis',
      'Technology recommendations',
      'Rough timeline estimate',
    ],
    popular: false,
  },
  {
    name: 'Strategy Session',
    duration: '1 hour',
    price: '₹8,250',
    features: [
      'In-depth project analysis',
      'Complete tech stack planning',
      'UI/UX suggestions',
      'Detailed timeline & budget',
      'Architecture recommendations',
    ],
    popular: true,
  },
  {
    name: 'Full Consultation',
    duration: '2 hours',
    price: '₹16,500',
    features: [
      'Everything in Strategy Session',
      'Competitive analysis',
      'Market research insights',
      'Complete project roadmap',
      'Team structure planning',
      'Post-launch strategy',
    ],
    popular: false,
  },
]

export function BookNowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedPackage, setSelectedPackage] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking logic here
    console.log('Booking submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="book-now" ref={ref} className="section-padding relative overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-blue-600 mb-4 shadow-sm">
            Let's Talk
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Book a <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project and get expert advice
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Consultation Packages */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Choose Your Package
            </motion.h3>

            {consultationPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPackage(index)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedPackage === index
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-600/30 scale-105'
                    : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                    POPULAR
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`text-xl font-bold mb-1 ${
                      selectedPackage === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {pkg.name}
                    </h4>
                    <div className={`text-sm ${
                      selectedPackage === index ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {pkg.duration}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${
                    selectedPackage === index ? 'text-white' : 'text-blue-600'
                  }`}>
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          selectedPackage === index ? 'text-white' : 'text-blue-600'
                        }`}
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
                      <span className={`text-sm ${
                        selectedPackage === index ? 'text-white' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-xs text-gray-600">Consultations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
                  <div className="text-xs text-gray-600">Average Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Book Your Session
              </h3>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="saas">SaaS Product</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full magnetic-button"
              >
                Book Consultation - {consultationPackages[selectedPackage].price}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By booking, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
