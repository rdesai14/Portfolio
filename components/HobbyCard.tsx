/**
 * Hobby Card Component
 * Displays hobbies in a grid layout with subtle asymmetry
 */

'use client'

import { motion } from 'framer-motion'
import { Hobby } from '@/types'

interface HobbyCardProps {
  hobby: Hobby
  index: number
}

export default function HobbyCard({ hobby, index }: HobbyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800"
    >
      {hobby.icon && (
        <div className="text-3xl mb-4">{hobby.icon}</div>
      )}
      <h3 className="text-xl font-bold mb-3">{hobby.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {hobby.description}
      </p>
    </motion.div>
  )
}

