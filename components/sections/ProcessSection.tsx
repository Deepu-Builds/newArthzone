"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We discuss your vision, goals, and requirements to understand your business needs.",
    icon: "📞",
  },
  {
    step: 2,
    title: "Proposal & Planning",
    description:
      "Detailed project scope, timeline, and pricing based on our discovery discussion.",
    icon: "📋",
  },
  {
    step: 3,
    title: "UI/UX Design",
    description:
      "Wireframes, mockups, and interactive prototypes that bring your vision to life.",
    icon: "🎨",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Agile development with regular updates and milestones to keep you informed.",
    icon: "⚡",
  },
  {
    step: 5,
    title: "Testing & Launch",
    description:
      "Comprehensive testing and smooth deployment to ensure everything works perfectly.",
    icon: "🚀",
  },
  {
    step: 6,
    title: "Ongoing Support",
    description:
      "Maintenance, updates, and continuous improvement to support your growth.",
    icon: "🤝",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-blue-600 mb-4">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            From Idea to <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven 6-step process ensures your project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-cyan-300 transform -translate-x-1/2" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 60 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-left`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold gradient-text">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg z-10" />

                {/* Spacer for mobile */}
                <div className="flex-1 md:hidden" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your project? Let's discuss how we can help bring
            your vision to life.
          </p>
          <a href="#contact" className="magnetic-button inline-block">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
