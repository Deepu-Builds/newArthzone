"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExpertiseSectionProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  reverse?: boolean;
}

export function ExpertiseSection({
  title,
  description,
  image,
  technologies,
  reverse = false,
}: ExpertiseSectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:grid-flow-col-dense" : ""}`}
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative ${reverse ? "md:col-start-2" : ""}`}
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`space-y-6 ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
