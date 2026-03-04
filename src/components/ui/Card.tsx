// src/components/ui/Card.tsx
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-card border border-card-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  )
}