"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-blue-600 mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real projects. See how we've helped startups and
            businesses achieve their goals.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 7v10h16V7H4zm8 2l4 3H8l4-3z" />
                  </svg>
                  <div className="text-sm font-medium">Project Screenshot</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.client}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-1">
                      Problem
                    </h4>
                    <p className="text-gray-600 text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-1">
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 text-sm uppercase tracking-wide mb-1">
                      Result
                    </h4>
                    <p className="text-green-600 font-medium text-sm">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                {project.technologies && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="magnetic-button">View All Case Studies</button>
        </motion.div>
      </div>
    </section>
  );
}
