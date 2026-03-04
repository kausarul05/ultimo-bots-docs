// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',    // Pure white sidebar
          foreground: '#111827',   // Dark text
        },
        secondary: {
          DEFAULT: '#FFFFFF',    // Pure white main background
          foreground: '#1F2937',
        },
        accent: {
          DEFAULT: '#2563EB',    // Bright blue
          hover: '#1D4ED8',
          light: '#EFF6FF',      // Very light blue for active items
        },
        border: {
          DEFAULT: '#E5E7EB',    // Light gray border
        },
        card: {
          DEFAULT: '#FFFFFF',     // Pure white cards
          border: '#F3F4F6',      // Almost white border
          hover: '#F9FAFB',       // Very light gray on hover
        }
      },
    },
  },
  plugins: [],
}
export default config