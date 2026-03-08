"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky headline + CTA card */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Questions?{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                We’ve got answers.
              </span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-sm">
              Can't find what you're looking for? Reach out and we'll get back
              to you.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-3.5 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            >
              Contact us
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article
                  key={item.id}
                  className={`relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-500/50 bg-white shadow-xl shadow-blue-500/10"
                      : "border-gray-200/80 bg-white/80 hover:border-blue-200 hover:bg-white"
                  }`}
                >
                  {/* Accent bar when open */}
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-cyan-500" />
                  )}

                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full flex items-center gap-5 px-6 py-5 text-left transition-colors rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    {/* Number badge */}
                    <span
                      className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl font-display font-bold text-lg transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                          : "bg-blue-50 text-blue-600"
                      }`}
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 font-semibold text-lg transition-colors ${
                        isOpen ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-100 text-blue-600 rotate-180"
                          : "bg-gray-100 text-gray-500"
                      }`}
                      aria-hidden
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                        <p className="text-gray-600 leading-relaxed border-l-2 border-blue-200 pl-5">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
