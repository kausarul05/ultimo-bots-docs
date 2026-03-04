// src/components/layout/Navbar.tsx
'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  // Get current page title from path
  const getPageTitle = () => {
    if (pathname === '/') return 'Home'
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length > 0) {
      return segments[segments.length - 1].split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
    return 'Documentation'
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Page title */}
        <div className="flex items-center space-x-3">
          <span className="text-lg font-medium text-gray-900">{getPageTitle()}</span>
        </div>

        {/* Right side - Search and Build button */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 placeholder-gray-400"
            />
          </div>

          {/* Build AI Agent Button */}
          <Link
            href="/build"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 shadow-sm"
          >
            <span>Build AI Agent</span>
            <svg 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}