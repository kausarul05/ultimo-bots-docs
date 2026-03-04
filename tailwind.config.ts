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
          DEFAULT: '#0A0F1C',    // Very dark blue (sidebar background)
          foreground: '#FFFFFF',   // White text on primary
        },
        secondary: {
          DEFAULT: '#F9FAFB',    // Light gray (main background)
          foreground: '#111827',   // Dark text on secondary
        },
        accent: {
          DEFAULT: '#3B82F6',    // Blue (for links, buttons, icons)
          hover: '#2563EB',
        },
        card: {
          DEFAULT: '#FFFFFF',
          border: '#E5E7EB',
        }
      },
    },
  },
  plugins: [],
}
export default config