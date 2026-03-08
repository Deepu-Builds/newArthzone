"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { TeamSection } from "@/components/TeamSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { expertisePageData } from "@/data/expertise";

export default function ExpertisePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />

      {/* Minimal Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-600">
              Our Expertise
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Our Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Deep technical capabilities across modern software technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Expertise Intro Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Technology Expertise That Powers Digital Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our team specializes in modern development technologies including
            AI, cloud platforms, scalable backend systems, and user-focused
            product design. We combine technical excellence with strategic
            thinking to deliver reliable and future-ready solutions.
          </motion.p>
        </div>
      </section>

      {/* Expertise Sections */}
      {expertisePageData.map((expertise, index) => (
        <ExpertiseSection
          key={expertise.title}
          title={expertise.title}
          description={expertise.description}
          image={expertise.image}
          technologies={expertise.technologies}
          reverse={index % 2 === 1}
        />
      ))}

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and leverage our expertise to create
              innovative solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="https://wa.me/918839354160"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
