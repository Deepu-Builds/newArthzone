"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const footerData = {
  Solutions: [
    "Healthcare Software Solutions",
    "FinTech Platforms",
    "E-commerce Solutions",
    "EdTech Platforms",
    "Travel & Hospitality Systems",
    "Logistics & Supply Chain Software",
    "Real Estate Platforms",
    "Retail Management Systems",
    "AI Automation Systems",
    "Startup Product Engineering",
  ],
  Services: [
    "Custom Software Development",
    "Enterprise Application Development",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Product Development",
    "MVP Development",
    "Microservices Architecture",
    "API Development & Integration",
    "Cloud Application Development",
    "DevOps & CI/CD Implementation",
    "UI/UX Engineering",
    "Software Testing & QA",
  ],
  Expertise: [
    "React.js Development",
    "Next.js Development",
    "Angular Development",
    "Vue.js Development",
    "Node.js Development",
    "NestJS Development",
    "Python Development",
    "Django Development",
    "Laravel Development",
    "ASP.NET Core Development",
    "Flutter Development",
    "React Native Development",
    "MongoDB & PostgreSQL",
    "AWS & Google Cloud",
  ],
  Outsourcing: [
    "Offshore Development Center",
    "Dedicated Development Teams",
    "IT Staff Augmentation",
    "Project-Based Engagement",
    "Time & Material Model",
    "Fixed Cost Model",
    "Technical Consulting",
  ],
  Company: [
    "About Us",
    "Our Portfolio",
    "Case Studies",
    "Careers",
    "Blog & Insights",
    "Contact Us",
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 py-20">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div>
            <Image
              src="/img/text-logo.png"
              alt="Arthzone"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="max-w-md text-gray-500 leading-relaxed">
              Building scalable digital products and enterprise-grade software solutions.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="p-3 border border-gray-800 rounded-lg
                           hover:border-primary hover:text-primary
                           transition-all duration-300"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gray-800 mb-16"></div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-20">
          {Object.entries(footerData).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-5 tracking-wide">
                {category}
              </h3>

              <ul className="space-y-3 text-sm">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="relative inline-block whitespace-nowrap
                                 hover:text-primary
                                 transition-colors duration-300
                                 after:absolute after:left-0 after:-bottom-1
                                 after:h-[1px] after:w-0
                                 after:bg-primary
                                 after:transition-all after:duration-300
                                 hover:after:w-full"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="w-full h-px bg-gray-800 mt-20 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Email */}
          <a
            href="mailto:contact@arthzone.com"
            className="flex items-center justify-center md:justify-start gap-4 group transition"
          >
            <div className="bg-primary/10 p-3 rounded-lg
                            group-hover:bg-primary
                            transition-all duration-300">
              <Mail
                size={18}
                className="text-primary group-hover:text-white transition"
              />
            </div>
            <p className="group-hover:text-primary transition-colors duration-300">
              contact@arthzone.com
            </p>
          </a>

          {/* Phone 1 */}
          <a
            href="tel:+918364262222"
            className="flex items-center justify-center md:justify-start gap-4 group transition"
          >
            <div className="bg-primary/10 p-3 rounded-lg
                            group-hover:bg-primary
                            transition-all duration-300">
              <Phone
                size={18}
                className="text-primary group-hover:text-white transition"
              />
            </div>
            <p className="group-hover:text-primary transition-colors duration-300">
              +91-836-4262222
            </p>
          </a>

          {/* Phone 2 */}
          <a
            href="tel:+919845619104"
            className="flex items-center justify-center md:justify-start gap-4 group transition"
          >
            <div className="bg-primary/10 p-3 rounded-lg
                            group-hover:bg-primary
                            transition-all duration-300">
              <Phone
                size={18}
                className="text-primary group-hover:text-white transition"
              />
            </div>
            <p className="group-hover:text-primary transition-colors duration-300">
              +91-9845619104
            </p>
          </a>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-gray-800 mt-14"></div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-gray-500">
          © 2026 Arthzone Technologies. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
