"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const trustMetrics = [
  { number: "150+", label: "Projects Delivered", icon: "🚀" },
  { number: "50+", label: "Global Startups Served", icon: "🌍" },
  { number: "AI, SaaS & Cloud", label: "Specialists", icon: "🤖" },
  { number: "Trusted by Founders", label: "Worldwide", icon: "⭐" },
];

const clientLogos = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 6",
];

export function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social-proof" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-600 mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful startups and businesses that have chosen
            Arthzone Technologies for their digital transformation.
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
            >
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {metric.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <div className="text-gray-400 font-semibold text-sm">
                  {logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5.0 Average Rating</span>
            </div>
            <div>•</div>
            <div>100% Project Success Rate</div>
            <div>•</div>
            <div>24/7 Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
