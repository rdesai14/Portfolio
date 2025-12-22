/**
 * Intro / Hero Section with "Wow" Animation
 * 
 * Animation Strategy:
 * - Text morphing/cinematic reveal: Name and title animate in with staggered layers
 * - Profile photo: Fades in after text starts appearing
 * - Duration: ~3 seconds total, plays once
 * - Non-blocking: Animation doesn't prevent scrolling or accessibility
 * 
 * The animation sequence:
 * 1. Background gradient animates in (0-0.5s)
 * 2. Name text reveals with scale and opacity (0.5-1.5s)
 * 3. Title text reveals with slide-up (1-2s)
 * 4. Bio text fades in (2-2.5s)
 * 5. Profile photo fades in with slight scale (1.5-3s)
 */

'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface IntroProps {
  name: string
  title: string
  bio: string
  profileImage?: string
}

export default function Intro({
  name,
  title,
  bio,
  profileImage = '/profile.jpg',
}: IntroProps) {
  const [animationComplete, setAnimationComplete] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    // Trigger animation sequence
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      })
      setAnimationComplete(true)
    }
    sequence()
  }, [controls])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content - left side with slight offset */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="space-y-6 md:pr-8"
          >
            {/* Name with cinematic reveal */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200">
                {name.split(' ').map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7 + idx * 0.1,
                      ease: 'easeOut',
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Title with slide-up reveal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: 'easeOut',
              }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
                {title}
              </p>
            </motion.div>

            {/* Bio with fade-in */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 2,
              }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              {bio}
            </motion.p>
          </motion.div>

          {/* Profile photo - right side with mask reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.5,
              ease: 'easeOut',
            }}
            className="relative md:pl-8"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Decorative circle background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 2,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-30"
              />

              {/* Profile image with mask reveal effect */}
              <motion.div
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={{ clipPath: 'circle(100% at 50% 50%)' }}
                transition={{
                  duration: 1.5,
                  delay: 2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl bg-gray-200 dark:bg-gray-700"
              >
                <Image
                  src={profileImage}
                  alt={`${name} profile photo`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator (appears after animation) */}
        {animationComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-gray-400 dark:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

