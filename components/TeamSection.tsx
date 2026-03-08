"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of engineers, designers, and technology specialists work
            together to build powerful digital solutions for startups and
            businesses.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Profile Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* LinkedIn Link */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
