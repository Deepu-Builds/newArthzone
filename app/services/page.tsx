"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import VariableProximity from "@/components/VariableProximity";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceSection } from "@/components/ServiceSection";
import { servicesPageData } from "@/data/services";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import CardSwap, { Card } from "@/components/CardSwap";

export default function ServicesPage() {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-32 lg:py-40 bg-[#05010a] overflow-hidden text-white">
        {/* Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-purple-600/20 blur-[200px] rounded-full" />
          <div className="absolute bottom-1/3 right-1/3 w-[650px] h-[650px] bg-cyan-500/20 blur-[200px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm text-purple-400 font-semibold tracking-widest uppercase">
                Professional Development Services
              </span>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4 mb-6">
                <div ref={containerRef1} style={{ position: "relative" }}>
                  <VariableProximity
                    label={"Build Scalable"}
                    className={
                      "variable-proximity-demo text-white drop-shadow-lg"
                    }
                    fromFontVariationSettings={"'wght' 400, 'opsz' 9"}
                    toFontVariationSettings={"'wght' 1000, 'opsz' 40"}
                    containerRef={containerRef1}
                    radius={100}
                    falloff="linear"
                  />
                </div>
                <div ref={containerRef2} style={{ position: "relative" }}>
                  <VariableProximity
                    label={"Digital Products"}
                    className={
                      "variable-proximity-demo text-white drop-shadow-lg"
                    }
                    fromFontVariationSettings={"'wght' 400, 'opsz' 9"}
                    toFontVariationSettings={"'wght' 1000, 'opsz' 40"}
                    containerRef={containerRef2}
                    radius={100}
                    falloff="linear"
                  />
                </div>
                <div ref={containerRef3} style={{ position: "relative" }}>
                  <VariableProximity
                    label={"With Expert Engineers"}
                    className={
                      "variable-proximity-demo text-white drop-shadow-lg"
                    }
                    fromFontVariationSettings={"'wght' 400, 'opsz' 9"}
                    toFontVariationSettings={"'wght' 1000, 'opsz' 40"}
                    containerRef={containerRef3}
                    radius={100}
                    falloff="linear"
                  />
                </div>
              </h1>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We design and develop high-performance web applications, modern
                user interfaces, and scalable software solutions. From idea to
                production, our team delivers reliable, maintainable and
                future-ready systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold hover:scale-105 transition"
                >
                  Start Your Project
                </a>

                <a
                  href="https://wa.me/918839354160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                  Free Consultation
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE CARD STACK */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div
                style={{
                  height: "450px",
                  position: "relative",
                  width: "520px",
                }}
              >
                <CardSwap
                  cardDistance={90}
                  verticalDistance={90}
                  delay={5000}
                  pauseOnHover
                >
                  {/* CARD 1 */}

                  <Card className="bg-[#0c0818] border border-purple-500/20 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(180,0,255,0.35)]">
                    <Image
                      src="/services/web-dev.jpeg"
                      alt="Web Development"
                      width={520}
                      height={240}
                      className="w-full h-[220px] object-cover"
                    />

                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-3">
                        Modern Web Development
                      </h3>

                      <p className="text-gray-400">
                        Fast and scalable applications built with React, Next.js
                        and modern frontend architecture.
                      </p>
                    </div>
                  </Card>

                  {/* CARD 2 */}

                  <Card className="bg-[#0c0818] border border-cyan-500/20 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,200,255,0.35)]">
                    <Image
                      src="/services/web-dev.jpeg"
                      alt="UI UX"
                      width={520}
                      height={240}
                      className="w-full h-[220px] object-cover"
                    />

                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-3">
                        UI / UX Engineering
                      </h3>

                      <p className="text-gray-400">
                        Beautiful interfaces designed with performance,
                        accessibility and modern design systems.
                      </p>
                    </div>
                  </Card>

                  {/* CARD 3 */}

                  <Card className="bg-[#0c0818] border border-blue-500/20 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,120,255,0.35)]">
                    <Image
                      src="/services/cloud.jpeg"
                      alt="Architecture"
                      width={520}
                      height={240}
                      className="w-full h-[220px] object-cover"
                    />

                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-3">
                        Scalable Architecture
                      </h3>

                      <p className="text-gray-400">
                        Cloud-ready backend systems designed to scale reliably
                        as your product grows.
                      </p>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {servicesPageData.map((service, index) => (
        <ServiceSection
          key={service.title}
          title={service.title}
          description={service.description}
          image={service.image}
          services={service.services}
          reverse={index % 2 === 1}
        />
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Powerful?
            </h2>

            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a solution that drives real
              results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Consultation
              </a>

              <a
                href="https://wa.me/918839354160"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Chat on WhatsApp
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
