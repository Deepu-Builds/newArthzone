'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const servicesData: Record<string, string[][]> = {
  'Development Services': [
    [
      'Application Development',
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'iOS App Development',
      'Android App Development',
      'Hybrid App Development',
    ],
    [
      'Web Application Development',
      'Web Portal Development',
      'SaaS Development',
      'MVP Development',
      'Microservices Development',
      'Software Product Development',
      'Software Testing',
    ],
    [
      'API Development',
      'Progressive Web App Development',
      'Content Management',
      'WordPress Development',
      'Shopify Development',
      'Software Project Rescue',
      'Strapi Development',
    ],
  ],
  'Cloud & Infrastructure': [
    ['AWS Consulting', 'Google Cloud Consulting'],
    ['DevOps Consulting', 'Cloud Application Development'],
    ['Database Development', 'Virtual CTO as a Service'],
  ],
  'Design, Marketing & Hiring': [
    ['Web Design', 'UI/UX Design', 'SEO'],
    ['Ecommerce Development', 'Marketplace Development', 'Hire Dedicated Remote Developers'],
    ['Hire ASP.NET MVC Developers', 'Hire PHP Developers', 'Hire iOS & Android Developers'],
  ],
  'Blockchain Network Development': [
    [
      'Ethereum Development',
      'Binance Smart Chain Development',
      'Polygon Development',
      'Cardano Development',
    ],
    ['Solana Development', 'Polkadot Development', 'Cosmos Development', 'Tezos Development'],
    ['Tron Development', 'EOS Development', 'Hyperledger Development'],
  ],
  'Web3 & Decentralized Technologies': [
    ['Web3 Development', 'Crypto Exchange', 'Crypto Wallet Development'],
    ['Smart Contract Development', 'dApp Development', 'NFT Marketplace Development'],
    ['Metaverse Development'],
  ],
}

const expertiseData: Record<string, string[][]> = {
  'Frontend Development': [
    ['Frontend Development', 'Angular Development', 'Reactjs Development'],
    ['Vuejs Development', 'Nextjs Development', 'WebRTC Development'],
    ['ElectronJS Development'],
  ],
  'Backend Development': [
    [
      'Backend Development',
      'Nestjs Development',
      'NodeJS Development Services',
      'Python Development Services',
    ],
    ['Java Development Services', 'PHP Development', 'CakePHP Development', 'Codeigniter Development'],
    ['Laravel Development', 'Symfony Development', 'Net MVC Development'],
  ],
  'Full Stack Development': [
    ['Full Stack Development Services'],
    ['MERN Stack Development Services'],
    ['Top MEAN Stack Development Services'],
  ],
  'Mobile App Development': [['React Native Development'], ['Flutter Development'], []],
  'Database Development': [['MongoDB Development'], [], []],
}

interface MegaMenuProps {
  type: 'services' | 'expertise'
  isOpen: boolean
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  isMobile?: boolean
}

export function MegaMenu({
  type,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  isMobile = false,
}: MegaMenuProps) {
  const data = type === 'services' ? servicesData : expertiseData
  const categories = Object.keys(data)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (isMobile) {
    return (
      <div
        className="lg:hidden overflow-hidden transition-all duration-200"
        style={{
          maxHeight: isOpen ? '80vh' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg rounded-b-2xl p-4">
          <nav className="space-y-2" aria-label={`${type} accordion`}>
            {categories.map((category) => (
              <details key={category} className="group rounded-xl overflow-hidden">
                <summary
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer font-medium transition-colors list-none [&::-webkit-details-marker]:hidden ${
                    activeCategory === category
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 py-3 bg-gray-50/50 border-t border-gray-100">
                  <div className="grid grid-cols-1 gap-4">
                    {data[category]?.map((column, colIdx) => (
                      <ul key={colIdx} className="space-y-2">
                        {column.map((item) =>
                          item ? (
                            <li key={item}>
                              <Link
                                href={`#${type}`}
                                onClick={onClose}
                                className="block text-gray-700 hover:text-blue-600 transition-colors text-sm py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ) : null
                        )}
                      </ul>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </nav>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`fixed left-0 right-0 top-[80px] px-12 bg-white shadow-xl rounded-b-2xl py-10 grid grid-cols-[280px_1fr] gap-8 transition-all duration-200 origin-top z-50 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="navigation"
      aria-label={`${type} mega menu`}
    >
      {/* Left Sidebar - Category Tabs (hover to change content) */}
      <aside className="bg-gray-50 rounded-xl p-4 space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onMouseEnter={() => setActiveCategory(category)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 pl-4'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </aside>

      {/* Right Content - Grid */}
      <div className="grid grid-cols-3 gap-10">
        {data[activeCategory]?.map((column, colIdx) => (
          <ul key={colIdx} className="space-y-3">
            {column.map((item) =>
              item ? (
                <li key={item}>
                  <Link
                    href={`#${type}`}
                    onClick={onClose}
                    className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        ))}
      </div>
    </div>
  )
}
