// src/app/page.tsx
import Card from '@/components/ui/Card'
import { 
  CpuChipIcon, 
  Cog6ToothIcon, 
  ChartBarIcon,
  CreditCardIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Bots',
    description: 'Spin up, QA, launch, and retire bots across every channel.',
    icon: CpuChipIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Settings',
    description: 'Control design, data sources, behavior, and lead capture.',
    icon: Cog6ToothIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'Analytics',
    description: 'Understand conversations, lead funnels, and performance trends.',
    icon: ChartBarIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Account & Billing',
    description: 'Manage workspaces, seats, security, and plan details.',
    icon: CreditCardIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    name: 'Referral',
    description: 'Grow with Ultimo Bots by joining the partner ecosystem.',
    icon: UserGroupIcon,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    name: 'Security',
    description: 'Review compliance, GDPR posture, and data handling.',
    icon: ShieldCheckIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    name: 'Personal Support',
    description: 'Book time with our specialists for hands-on help.',
    icon: LifebuoyIcon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center space-x-2 mb-4">
          <SparklesIcon className="h-5 w-5 text-accent" />
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            Ultimo Bots Knowledge Hub
          </p>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to the Ultimo Bots Documentation
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Ultimo Bots helps teams design, train, and deploy AI assistants across websites, 
          messaging apps, and internal tools. Use these docs to create new bots, customize 
          how they look and respond, connect data sources, integrate channels, analyze 
          performance, and stay on top of billing.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.name} className="group hover:border-border hover:bg-card-hover transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className={`${feature.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions Section */}
      <div className="mt-10 p-6 bg-white rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors shadow-sm">
            Create New Bot
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors border border-border">
            View Tutorials
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors border border-border">
            API Reference
          </button>
        </div>
      </div>
    </div>
  )
}