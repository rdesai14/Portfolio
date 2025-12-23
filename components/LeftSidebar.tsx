/**
 * Left Sidebar Component
 * Contains compact, high-signal information:
 * - Personal/education metadata
 * - Technical skills
 * - Programming languages with visual proficiency indicators
 * - Social links
 * 
 * This column is visually denser and narrower (30-35% width)
 * It scrolls naturally with the right column (NOT sticky)
 */

'use client'

import { motion } from 'framer-motion'
import { Skill, ContactLink, ProgrammingLanguage, PersonalMetadata } from '@/types'

interface LeftSidebarProps {
  personalMetadata: PersonalMetadata
  skills: Skill[]
  programmingLanguages: ProgrammingLanguage[]
  contactLinks: ContactLink[]
}

export default function LeftSidebar({
  personalMetadata,
  skills,
  programmingLanguages,
  contactLinks,
}: LeftSidebarProps) {
  return (
    <div className="space-y-10 pr-6 lg:pr-8">
      {/* Personal Metadata */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
          Personal Information
        </h2>
        
        <div className="space-y-3 text-sm">
          {personalMetadata.residence && (
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Residence:</p>
              <p className="text-gray-600 dark:text-gray-400">{personalMetadata.residence}</p>
            </div>
          )}
          {personalMetadata.university && (
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">University:</p>
              <p className="text-gray-600 dark:text-gray-400">{personalMetadata.university}</p>
            </div>
          )}
          {personalMetadata.major && (
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Major:</p>
              <p className="text-gray-600 dark:text-gray-400">{personalMetadata.major}</p>
            </div>
          )}
          {personalMetadata.expectedGraduation && (
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Expected Graduation:</p>
              <p className="text-gray-600 dark:text-gray-400">{personalMetadata.expectedGraduation}</p>
            </div>
          )}
          {personalMetadata.age && (
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Age:</p>
              <p className="text-gray-600 dark:text-gray-400">{personalMetadata.age}</p>
            </div>
          )}
          {personalMetadata.email && (
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Email:</p>
              <p className="text-gray-600 dark:text-gray-400 break-all">{personalMetadata.email}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Technical Skills */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-3"
      >
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
          Technical Skills
        </h2>
        <div className="space-y-3">
          {skills.map((skillCategory, idx) => (
            <div key={idx}>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-xs text-gray-600 dark:text-gray-400"
                  >
                    {item}
                    {itemIdx < skillCategory.items.length - 1 && <span className="mx-1">,</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Programming Languages with Proficiency Bars */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-3"
      >
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
          Programming Languages
        </h2>
        <div className="space-y-3">
          {programmingLanguages.map((lang, idx) => (
            <div key={idx} className="space-y-1.5">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 block">
                {lang.name}
              </span>
              {/* Proficiency Bar */}
              <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                  className="h-full bg-yellow-500 dark:bg-yellow-400"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Links / Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-800"
      >
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
          Contact
        </h2>
        <div className="flex flex-col gap-2.5">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {link.icon && <span className="text-base">{link.icon}</span>}
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

