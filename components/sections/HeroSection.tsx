"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GridMotion from "@/components/GridMotion";
import VariableProximity from "@/components/VariableProximity";

export function HeroSection() {
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const vpContainerRef = useRef(null);

  useEffect(() => {
    const button = magneticRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = "translate(0, 0)";
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <GridMotion gradientColor="#2ee7ff" />
          </div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-300/50 rounded-lg"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-cyan-300/50"
        animate={{
          rotate: [360, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center"
      >
        {/* Eyebrow Text */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white shadow-sm">
            Premium Digital Solutions
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-3xl md:text-2xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
        >
          <div ref={vpContainerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={"Build. Scale. Succeed."}
              className={"variable-proximity-demo text-white drop-shadow-lg"}
              fromFontVariationSettings={"'wght' 400, 'opsz' 9"}
              toFontVariationSettings={"'wght' 1000, 'opsz' 40"}
              containerRef={vpContainerRef}
              radius={220}
              falloff="linear"
            />
          </div>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow"
        >
          We transform ideas into scalable digital products that drive growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#book-now"
            ref={magneticRef}
            className="magnetic-button transition-transform duration-200 ease-out bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold"
          >
            <span className="relative z-10">Book a Free Consultation</span>
          </a>

          <motion.a
            href="#prebuilt-projects"
            className="group relative px-8 py-4 rounded-full border-2 border-white text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Browse Pre-Built Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.08 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-white/85"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5.0 Rating</span>
          </div>
          <div>•</div>
          <div>150+ Projects</div>
          <div>•</div>
          <div>50+ Clients</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
