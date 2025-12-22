/**
 * Technical Skills Section
 * Displays skills organized by category in a grid layout
 */

'use client'

import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24">
      <SectionHeader
        title="Technical Skills"
        subtitle="Tools and technologies I work with"
        align="center"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

