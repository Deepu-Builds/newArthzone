"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu";

const navLinks = [
  {
    name: "Services",
    href: "/services",
    isMegaMenu: true,
    megaMenuType: "services" as const,
  },
  {
    name: "Expertise",
    href: "/expertise",
    isMegaMenu: true,
    megaMenuType: "expertise" as const,
  },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<"services" | "expertise" | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const [expertiseAccordionOpen, setExpertiseAccordionOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuEnter = (type: "services" | "expertise") => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setOpenMenu(type);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm h-[80px] flex items-center">
      <nav
        className="w-full px-12 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo - Left */}
        <Link href="/" className="relative group shrink-0">
          <Image
            src="/img/text-logo.png"
            alt="Arthzone"
            width={172}
            height={45}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Center Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.isMegaMenu ? (
                <div
                  onMouseEnter={() => handleMenuEnter(link.megaMenuType)}
                  onMouseLeave={handleMenuLeave}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 py-2 font-medium transition-colors ${
                      activeNav === link.name
                        ? "text-blue-600 border-b-2 border-blue-500"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${openMenu === link.megaMenuType ? "rotate-180" : ""}`}
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
                  </Link>
                  <MegaMenu
                    type={link.megaMenuType}
                    isOpen={openMenu === link.megaMenuType}
                    onClose={() => setOpenMenu(null)}
                    onMouseEnter={() => handleMenuEnter(link.megaMenuType)}
                    onMouseLeave={handleMenuLeave}
                    isMobile={false}
                  />
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`py-2 font-medium transition-colors ${
                    activeNav === link.name
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right - Contact Button + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
          >
            Contact
          </Link>

          {/* Hamburger - Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-gray-900 transition-transform origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-900 transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-900 transition-transform origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-[80px] left-0 right-0 z-50 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto bg-white shadow-xl">
            <div className="p-4 space-y-2">
              {navLinks.map((link) =>
                link.isMegaMenu && link.megaMenuType === "services" ? (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => {
                        setServicesAccordionOpen(!servicesAccordionOpen);
                        setExpertiseAccordionOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform ${servicesAccordionOpen ? "rotate-180" : ""}`}
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
                    </button>
                    <MegaMenu
                      type="services"
                      isOpen={servicesAccordionOpen}
                      onClose={() => {
                        setServicesAccordionOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      isMobile
                    />
                  </div>
                ) : link.isMegaMenu && link.megaMenuType === "expertise" ? (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => {
                        setExpertiseAccordionOpen(!expertiseAccordionOpen);
                        setServicesAccordionOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform ${expertiseAccordionOpen ? "rotate-180" : ""}`}
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
                    </button>
                    <MegaMenu
                      type="expertise"
                      isOpen={expertiseAccordionOpen}
                      onClose={() => {
                        setExpertiseAccordionOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      isMobile
                    />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
