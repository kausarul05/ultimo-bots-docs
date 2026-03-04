// src/components/ui/FeatureCard.tsx
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface Step {
  name: string
  href: string
}

interface FeatureCardProps {
  name: string
  description: string
  icon: React.ElementType
  color: string
  bgColor: string
  steps?: Step[]
}

export default function FeatureCard({ 
  name, 
  description, 
  icon: Icon, 
  color, 
  bgColor,
  steps 
}: FeatureCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow mb-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className={`${bgColor} p-3 rounded-xl`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      
      {steps && (
        <div className="flex items-center flex-wrap gap-2 mt-4 ml-14">
          {steps.map((step, index) => (
            <Link 
              key={step.name}
              href={step.href} 
              className="text-sm text-gray-700 hover:text-blue-600 flex items-center"
            >
              {step.name}
              {index < steps.length - 1 && (
                <ArrowRightIcon className="h-3 w-3 ml-1 text-gray-400" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}