/**
 * Two Column Layout Component
 * 
 * Implements a two-column layout where:
 * - Left column (30-35%): Compact, high-signal information (sidebar)
 * - Right column (65-70%): Narrative and detailed content
 * 
 * Both columns scroll together naturally (NO sticky positioning)
 * Responsive: collapses to single column on smaller screens
 */

'use client'

import React from 'react'

interface TwoColumnLayoutProps {
  leftColumn: React.ReactNode
  rightColumn: React.ReactNode
}

export default function TwoColumnLayout({
  leftColumn,
  rightColumn,
}: TwoColumnLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[32%_68%] gap-8 lg:gap-12 items-start">
        {/* Left Column - Compact, structured information (30-35% width) */}
        <div className="order-2 lg:order-1">
          {leftColumn}
        </div>

        {/* Right Column - Narrative, detailed content (65-70% width) */}
        <div className="order-1 lg:order-2">
          {rightColumn}
        </div>
      </div>
    </div>
  )
}

