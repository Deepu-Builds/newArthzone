"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-600 mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by <span className="gradient-text">Founders Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role ? `${testimonial.role}, ` : ""}
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
