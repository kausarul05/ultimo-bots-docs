// src/lib/constants.ts
import {
  HomeIcon,
  CpuChipIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  CreditCardIcon,
  PlusCircleIcon,
  BeakerIcon,
  ArrowPathIcon,
  TrashIcon,
  PaintBrushIcon,
  UserGroupIcon,
  BookOpenIcon,
  CursorArrowRaysIcon,
  PresentationChartLineIcon,
  PhoneArrowDownLeftIcon,
  DocumentTextIcon,
  CogIcon,
  CurrencyDollarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'BOTS',
    isSection: true,
    items: [
      { name: 'Create', href: '/bots/create', icon: PlusCircleIcon },
      { name: 'Test', href: '/bots/test', icon: BeakerIcon },
      { name: 'Integrate', href: '/bots/integrate', icon: ArrowPathIcon },
      { name: 'Remove', href: '/bots/remove', icon: TrashIcon },
    ]
  },
  {
    name: 'SETTINGS',
    isSection: true,
    items: [
      { name: 'Design', href: '/settings/design', icon: PaintBrushIcon },
      { name: 'Lead Generation', href: '/settings/lead-generation', icon: UserGroupIcon },
      { name: 'Knowledge Base', href: '/settings/knowledge-base', icon: BookOpenIcon },
      { name: 'Behavior', href: '/settings/behavior', icon: CursorArrowRaysIcon },
    ]
  },
  {
    name: 'ANALYTICS',
    isSection: true,
    items: [
      { name: 'Activity', href: '/analytics/activity', icon: PresentationChartLineIcon },
      { name: 'Leads', href: '/analytics/leads', icon: PhoneArrowDownLeftIcon },
      { name: 'Reporting', href: '/analytics/reporting', icon: DocumentTextIcon },
    ]
  },
  {
    name: 'ACCOUNT & BILLING',
    isSection: true,
    items: [
      { name: 'Account Settings', href: '/account/settings', icon: CogIcon },
      { name: 'Plans', href: '/account/plans', icon: CurrencyDollarIcon },
    ]
  }
]