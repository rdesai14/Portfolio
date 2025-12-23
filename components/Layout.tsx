/**
 * Global Layout Component
 * Controls spacing, rhythm, and visual balance across the entire site
 * Implements the asymmetric layout philosophy with subtle left/right offsets
 */

import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      {children}
    </div>
  )
}

