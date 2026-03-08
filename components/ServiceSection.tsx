"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  services: string[];
  reverse?: boolean;
}

export function ServiceSection({
  title,
  description,
  image,
  services,
  reverse = false,
}: ServiceSectionProps) {
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
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "md:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className={`relative ${reverse ? "md:col-start-2" : ""}`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`space-y-6 ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What we offer:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-blue-300 transition-all duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
