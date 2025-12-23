/**
 * About Me Section
 * Simple introduction text for the right column
 * No full-screen hero animation - just clean, readable content
 */

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutMeProps {
  name: string
  title: string
  bio: string
  profileImage?: string
}

export default function AboutMe({ name, title, bio, profileImage }: AboutMeProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12 mb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          {profileImage && (
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover rounded-full border-2 border-gray-200 dark:border-gray-700"
                sizes="(max-width: 768px) 64px, 80px"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Hello! I&apos;m {name}
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium italic">
          {title}
        </p>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line space-y-4">
            {bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

