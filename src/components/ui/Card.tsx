// src/components/ui/Card.tsx
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white
      border border-border
      rounded-xl 
      p-6 
      shadow-sm 
      hover:shadow 
      transition-all 
      duration-200
      ${className}
    `}>
      {children}
    </div>
  )
}