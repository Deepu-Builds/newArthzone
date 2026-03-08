"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-electric-cyan/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-blue-600 border border-electric-cyan/30 mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Powerful Together</span>
          </h2>
          <p className="text-lg text-gray-900/70 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Drop us a message and
            let's start your journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-3xl font-bold mb-6">
                Contact Information
              </h3>
              <p className="text-gray-900/70 leading-relaxed mb-8">
                We're here to help bring your vision to life. Reach out to us
                through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@arthzonetech.com",
                  link: "mailto:hello@arthzonetech.com",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 88393 54160",
                  link: "tel:+918839354160",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 glass-effect p-6 rounded-xl group hover:border-electric-blue/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue to-electric-cyan flex items-center justify-center text-gray-900 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-900/60 text-sm mb-1">
                      {item.label}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 font-medium">
                        {item.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 pt-4"
            >
              <a
                href="https://wa.me/918839354160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chat on WhatsApp
              </a>

              <a
                href="#"
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Free Consultation
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 pt-8"
            >
              {["twitter", "linkedin", "github", "dribbble"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-gradient-to-r hover:from-electric-blue hover:to-electric-cyan transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-gray-900 capitalize text-xs">
                      {social.slice(0, 2)}
                    </span>
                  </a>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-white/5 border border-gray-200 rounded-xl text-gray-900 placeholder-transparent focus:border-electric-cyan focus:outline-none transition-colors peer"
                placeholder="Your Name"
              />
              <label className="absolute left-4 -top-2.5 text-sm text-gray-900/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 bg-gray-50 px-2">
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-white/5 border border-gray-200 rounded-xl text-gray-900 placeholder-transparent focus:border-electric-cyan focus:outline-none transition-colors peer"
                placeholder="Your Email"
              />
              <label className="absolute left-4 -top-2.5 text-sm text-gray-900/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 bg-gray-50 px-2">
                Your Email
              </label>
            </div>

            {/* Company Field */}
            <div className="relative">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/5 border border-gray-200 rounded-xl text-gray-900 placeholder-transparent focus:border-electric-cyan focus:outline-none transition-colors peer"
                placeholder="Company (Optional)"
              />
              <label className="absolute left-4 -top-2.5 text-sm text-gray-900/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 bg-gray-50 px-2">
                Company (Optional)
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-4 bg-white/5 border border-gray-200 rounded-xl text-gray-900 placeholder-transparent focus:border-electric-cyan focus:outline-none transition-colors peer resize-none"
                placeholder="Your Message"
              />
              <label className="absolute left-4 -top-2.5 text-sm text-gray-900/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 bg-gray-50 px-2">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full magnetic-button relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
