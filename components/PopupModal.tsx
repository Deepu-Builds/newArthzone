'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Countries with phone codes and flags
const countries = [
  { code: 'IN', name: 'India', phone: '+91', flag: '🇮🇳' },
  { code: 'US', name: 'United States', phone: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', phone: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', phone: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', phone: '+61', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', phone: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', phone: '+33', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', phone: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', phone: '+34', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', phone: '+31', flag: '🇳🇱' },
  { code: 'BE', name: 'Belgium', phone: '+32', flag: '🇧🇪' },
  { code: 'CH', name: 'Switzerland', phone: '+41', flag: '🇨🇭' },
  { code: 'AT', name: 'Austria', phone: '+43', flag: '🇦🇹' },
  { code: 'SE', name: 'Sweden', phone: '+46', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', phone: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', phone: '+45', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', phone: '+358', flag: '🇫🇮' },
  { code: 'PL', name: 'Poland', phone: '+48', flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal', phone: '+351', flag: '🇵🇹' },
  { code: 'GR', name: 'Greece', phone: '+30', flag: '🇬🇷' },
  { code: 'IE', name: 'Ireland', phone: '+353', flag: '🇮🇪' },
  { code: 'NZ', name: 'New Zealand', phone: '+64', flag: '🇳🇿' },
  { code: 'SG', name: 'Singapore', phone: '+65', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', phone: '+60', flag: '🇲🇾' },
  { code: 'TH', name: 'Thailand', phone: '+66', flag: '🇹🇭' },
  { code: 'PH', name: 'Philippines', phone: '+63', flag: '🇵🇭' },
  { code: 'ID', name: 'Indonesia', phone: '+62', flag: '🇮🇩' },
  { code: 'VN', name: 'Vietnam', phone: '+84', flag: '🇻🇳' },
  { code: 'JP', name: 'Japan', phone: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', phone: '+82', flag: '🇰🇷' },
  { code: 'CN', name: 'China', phone: '+86', flag: '🇨🇳' },
  { code: 'HK', name: 'Hong Kong', phone: '+852', flag: '🇭🇰' },
  { code: 'TW', name: 'Taiwan', phone: '+886', flag: '🇹🇼' },
  { code: 'AE', name: 'United Arab Emirates', phone: '+971', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', phone: '+966', flag: '🇸🇦' },
  { code: 'IL', name: 'Israel', phone: '+972', flag: '🇮🇱' },
  { code: 'TR', name: 'Turkey', phone: '+90', flag: '🇹🇷' },
  { code: 'RU', name: 'Russia', phone: '+7', flag: '🇷🇺' },
  { code: 'BR', name: 'Brazil', phone: '+55', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', phone: '+52', flag: '🇲🇽' },
  { code: 'AR', name: 'Argentina', phone: '+54', flag: '🇦🇷' },
  { code: 'CL', name: 'Chile', phone: '+56', flag: '🇨🇱' },
  { code: 'CO', name: 'Colombia', phone: '+57', flag: '🇨🇴' },
  { code: 'PE', name: 'Peru', phone: '+51', flag: '🇵🇪' },
  { code: 'ZA', name: 'South Africa', phone: '+27', flag: '🇿🇦' },
  { code: 'EG', name: 'Egypt', phone: '+20', flag: '🇪🇬' },
  { code: 'NG', name: 'Nigeria', phone: '+234', flag: '🇳🇬' },
  { code: 'KE', name: 'Kenya', phone: '+254', flag: '🇰🇪' },
  { code: 'PK', name: 'Pakistan', phone: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', phone: '+880', flag: '🇧🇩' },
  { code: 'LK', name: 'Sri Lanka', phone: '+94', flag: '🇱🇰' },
  { code: 'NP', name: 'Nepal', phone: '+977', flag: '🇳🇵' },
  { code: 'AF', name: 'Afghanistan', phone: '+93', flag: '🇦🇫' },
]

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0]) // Default to India
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'IN',
    phone: '',
    message: '',
    whatsapp: false,
  })

  useEffect(() => {
    // Open popup after 35 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 35000) // 35 seconds

    return () => clearTimeout(timer)
  }, [])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (name === 'country') {
      const country = countries.find(c => c.code === value) || countries[0]
      setSelectedCountry(country)
      setFormData({
        ...formData,
        [name]: value,
      })
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    
    // Show success message
    setIsSubmitted(true)
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        country: 'IN',
        phone: '',
        message: '',
        whatsapp: false,
      })
      setSelectedCountry(countries[0])
      setIsSubmitted(false)
      handleClose()
    }, 3000) // Close after 3 seconds
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl h-[90vh] sm:h-[90vh] rounded-2xl sm:rounded-3xl glass-effect shadow-2xl flex flex-col overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Close"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-0 flex-1 min-h-0 overflow-hidden">
                {/* Left Side - Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center overflow-y-auto hidden md:flex"
                >
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -30, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>

                  <div className="relative z-10">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900"
                    >
                      Wait!! Before You Go
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8"
                    >
                      See how global businesses rate their experience working with Arthzone Technologies
                    </motion.p>

                    {/* Testimonial Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/50"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
                          JS
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">John Smith</h4>
                          <p className="text-sm text-gray-600">CEO, Tech Innovations Inc.</p>
                        </div>
                      </div>
                      <div className="relative">
                        <svg
                          className="w-12 h-12 text-blue-600/20 absolute -top-2 -left-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609v5.391l-4.017 4v9.609h-5.966zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609v5.391l-4 4v9.609h-6z" />
                        </svg>
                        <p className="text-gray-700 leading-relaxed relative z-10 pl-4">
                          "Arthzone Technologies transformed our digital presence completely. Their attention to detail and technical expertise is unmatched. The team delivered beyond our expectations and brought our vision to life with incredible precision."
                        </p>
                      </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8"
                    >
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          500+
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          98%
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          24/7
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">Support</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto"
                >
                  {!isSubmitted ? (
                    <>
                      <div className="mb-4 sm:mb-6">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
                          Let's Build Your <span className="gradient-text">Dream Project</span>
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Share your project details, and we'll send a tailored cost and timeline.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Company Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Country & Phone */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white mb-3 sm:mb-4"
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.name} ({country.phone})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Phone Number
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 min-w-[100px] sm:min-w-[120px]">
                          <span className="text-xl sm:text-2xl">{selectedCountry.flag}</span>
                          <span className="text-xs sm:text-base text-gray-700 font-medium">{selectedCountry.phone}</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Please describe your requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* WhatsApp Checkbox */}
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="whatsapp"
                        checked={formData.whatsapp}
                        onChange={handleChange}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                      />
                      <label className="text-xs sm:text-sm text-gray-700">
                        Contact me on WhatsApp
                      </label>
                    </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          className="w-full magnetic-button mt-4 sm:mt-6 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Schedule Free Consultation
                        </motion.button>
                      </form>

                      {/* Footer Info */}
                      <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>We reply instantly or within a few hours.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Your idea is fully protected under NDA.</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Success Message */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] text-center py-8 sm:py-12 px-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-green-500/50"
                      >
                        <svg
                          className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
                      >
                        Thank You for Your Interest!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-base sm:text-lg text-gray-600 max-w-md mb-4 sm:mb-6"
                      >
                        Your message has been successfully submitted. Our team will review your requirements and get back to you within 24 hours.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>Check your email for confirmation</span>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
