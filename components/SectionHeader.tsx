/**
 * Section Header Component
 * Reusable header for all major sections
 * Provides consistent typography and spacing hierarchy
 */

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

