// src/components/layout/Sidebar.tsx
import Link from 'next/link'
import { 
  HomeIcon,
  CpuChipIcon, 
  Cog6ToothIcon, 
  ChartBarIcon,
  CreditCardIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Welcome', href: '/', icon: HomeIcon },
  { name: 'Bots', href: '/bots', icon: CpuChipIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Account & Billing', href: '/billing', icon: CreditCardIcon },
  { name: 'Referral', href: '/referral', icon: UserGroupIcon },
  { name: 'Security', href: '/security', icon: ShieldCheckIcon },
  { name: 'Personal Support', href: '/support', icon: LifebuoyIcon },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-primary text-primary-foreground flex flex-col">
      {/* Logo Area */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Ultimo Bots</h1>
        <p className="text-sm text-gray-400 mt-1">Knowledge Hub</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800 transition-colors group"
          >
            <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-accent" />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Optional Footer in Sidebar */}
      <div className="p-4 border-t border-gray-800 text-xs text-gray-400">
        <p>v2.0.1</p>
      </div>
    </aside>
  )
}