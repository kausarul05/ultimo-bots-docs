// src/components/layout/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navigationItems } from '@/lib/constants'
import { 
  RocketLaunchIcon,
  ChevronDownIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline'

export default function Sidebar() {
  const pathname = usePathname()
  
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'BOTS', 
    'SETTINGS', 
    'ANALYTICS', 
    'ACCOUNT & BILLING'
  ])

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    )
  }

  const isActive = (href: string) => pathname === href

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo Area - Fixed at top */}
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-50 p-2 rounded-lg">
            <RocketLaunchIcon className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-xl font-semibold text-gray-900">Ultimo Bots</span>
        </div>
      </div>

      {/* Navigation - Scrollable Area */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            // Regular navigation item (Home)
            if (!item.isSection) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all
                    ${isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            }

            // Section with nested items
            return (
              <div key={item.name} className="space-y-1">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(item.name)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
                >
                  <span>{item.name}</span>
                  {expandedSections.includes(item.name) ? (
                    <ChevronDownIcon className="h-4 w-4" />
                  ) : (
                    <ChevronRightIcon className="h-4 w-4" />
                  )}
                </button>

                {/* Nested Items */}
                {expandedSections.includes(item.name) && (
                  <div className="space-y-1 ml-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`
                          flex items-center px-3 py-2 text-sm rounded-lg transition-all
                          ${isActive(subItem.href)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                          }
                        `}
                      >
                        <subItem.icon className="mr-3 h-4 w-4" />
                        <span className="text-sm">{subItem.name}</span>
                        {isActive(subItem.href) && (
                          <span className="ml-auto w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </nav>

      {/* User Profile - Fixed at bottom */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-medium shadow-sm">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john.doe@company.com</p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </aside>
  )
}