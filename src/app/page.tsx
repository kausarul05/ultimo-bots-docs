// src/app/page.tsx
import Link from 'next/link'
import {
    CpuChipIcon,
    Cog6ToothIcon,
    ChartBarIcon,
    CreditCardIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    LifebuoyIcon,
    ArrowRightIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import FeatureCard from '@/components/ui/FeatureCard'

const mainFeatures = [
    {
        name: 'Bots',
        description: 'Spin up, QA, launch, and retire bots across every channel.',
        icon: CpuChipIcon,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        steps: [
            { name: 'Create', href: '/bots/create' },
            { name: 'Test', href: '/bots/test' },
            { name: 'Integrate', href: '/bots/integrate' },
            { name: 'Remove', href: '/bots/remove' }
        ]
    },
    {
        name: 'Settings',
        description: 'Control design, data sources, behavior, and lead capture.',
        icon: Cog6ToothIcon,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        steps: [
            { name: 'Design', href: '/settings/design' },
            { name: 'Lead Generation', href: '/settings/lead-generation' },
            { name: 'Knowledge Base', href: '/settings/knowledge-base' },
            { name: 'Behavior', href: '/settings/behavior' }
        ]
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

const botsSteps = [
    { name: 'Create', href: '/bots/create' },
    { name: 'Test', href: '/bots/test' },
    { name: 'Integrate', href: '/bots/integrate' },
    { name: 'Remove', href: '/bots/remove' }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f8f7fb]">
            {/* Main Content */}
            <div className="px-8 py-8">
                {/* Header Section */}
                <div className="mb-8">
                    <p className="text-sm font-medium text-blue-600 mb-2">
                        Ultimo Bots Knowledge Hub
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Welcome to the Ultimo Bots Documentation
                    </h1>
                    <p className="text-base text-gray-600 max-w-4xl leading-relaxed">
                        Ultimo Bots helps teams design, train, and deploy AI assistants across websites,
                        messaging apps, and internal tools. Use these docs to create new bots, customize
                        how they look and respond, connect data sources, integrate channels, analyze
                        performance, and stay on top of billing.
                    </p>
                </div>

                {/* Bots Card with Steps */}
                <FeatureCard
                    name="Bots"
                    description="Spin up, QA, launch, and retire bots across every channel."
                    icon={CpuChipIcon}
                    color="text-blue-600"
                    bgColor="bg-blue-50"
                    steps={botsSteps}
                />

                {/* Settings Card with Steps */}
                <FeatureCard
                    name="Settings"
                    description="Control design, data sources, behavior, and lead capture."
                    icon={CpuChipIcon}
                    color="text-blue-600"
                    bgColor="bg-blue-50"
                    steps={botsSteps}
                />


                {/* Analytics Card with Steps */}
                <FeatureCard
                    name="Analytics"
                    description="Understand conversations, lead funnels, and performance trends."
                    icon={CpuChipIcon}
                    color="text-blue-600"
                    bgColor="bg-blue-50"
                    steps={botsSteps}
                />

                {/* Other Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {mainFeatures.slice(2).map((feature) => (
                        <div
                            key={feature.name}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow"
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`${feature.bgColor} p-3 rounded-xl`}>
                                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {feature.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* How can I help you today? Section */}
                <div className="mt-10 p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                        <ChatBubbleLeftRightIcon className="h-5 w-5 text-blue-600" />
                        <h2 className="text-lg font-semibold text-gray-900">How can I help you today?</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                            Create a new bot
                        </button>
                        <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                            Set up lead generation
                        </button>
                        <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                            View analytics
                        </button>
                        <button className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                            Manage billing
                        </button>
                    </div>
                </div>

                {/* Windows Activation Notice - As shown in your image */}
                <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">How can I help you today?</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-xs text-gray-400">Activate Windows</span>
                        <span className="text-xs text-gray-400">Go to Settings to activate Windows</span>
                    </div>
                </div>
            </div>
        </div>
    )
}