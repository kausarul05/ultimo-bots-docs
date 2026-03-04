// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ultimo Bots Documentation',
  description: 'Clone of Ultimo Bots docs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-secondary">
          {/* Sidebar - Fixed width, primary background */}
          <Sidebar />
          
          {/* Main Content Area - Scrollable */}
          <main className="flex-1 overflow-y-auto bg-secondary">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}