// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'

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
        <div className="flex h-screen bg-white">
          {/* Sidebar - Fixed width, white background */}
          <Sidebar />
          
          {/* Main Content Area - White background */}
          <div className="flex-1 flex flex-col overflow-y-auto bg-white">
            <Navbar />
            <main className="flex-1 bg-white">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}