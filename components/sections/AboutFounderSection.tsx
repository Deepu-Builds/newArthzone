"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function AboutFounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section
      id="about-founder"
      ref={ref}
      className="section-padding bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 p-8">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="text-gray-600 font-medium">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-blue-600 mb-4">
                About the Founder
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Building the Future of{" "}
                <span className="gradient-text">Digital Innovation</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Arthzone Technologies was founded with the mission of helping
              startups build powerful digital products without managing large
              development teams. With over 8 years of experience in software
              development and a passion for entrepreneurship, I understand the
              challenges founders face when bringing their vision to life.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Our approach combines technical expertise with business acumen,
              ensuring that every solution we build not only works flawlessly
              but also drives real business results. We've helped over 50
              startups launch successful products and secure funding, from MVPs
              to full-scale platforms.
            </motion.p>

            {/* Achievements */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold gradient-text mb-2">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-gray-600">Startups Helped</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold gradient-text mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold gradient-text mb-2">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button className="magnetic-button inline-block">
                Read Full Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
