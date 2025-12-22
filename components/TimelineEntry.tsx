/**
 * Timeline Entry Component
 * Used for Education, Experience, and Leadership sections
 * Supports alternating alignment for visual interest
 */

import { motion } from 'framer-motion'
import { Experience, Education, Leadership } from '@/types'

interface TimelineEntryProps {
  entry: Experience | Education | Leadership
  index: number
  alternating?: boolean
}

export default function TimelineEntry({
  entry,
  index,
  alternating = true,
}: TimelineEntryProps) {
  // Alternate alignment for visual asymmetry
  const isEven = index % 2 === 0
  const alignment = alternating && !isEven ? 'md:ml-auto md:pl-12' : 'md:pr-12'

  // Determine title and subtitle based on entry type
  const title =
    'title' in entry
      ? entry.title
      : 'degree' in entry
        ? entry.degree
        : entry.role
  const subtitle =
    'company' in entry
      ? entry.company
      : 'institution' in entry
        ? entry.institution
        : entry.organization
  const location = entry.location
  const dateRange = `${entry.startDate} - ${entry.endDate}`

  return (
    <motion.div
      initial={{ opacity: 0, x: alternating && !isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative mb-12 ${alignment} max-w-2xl`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full border-4 border-white dark:border-[#0a0a0a] hidden md:block" />

      {/* Content card */}
      <div className="pl-8 md:pl-0">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {subtitle}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {location}
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">
                {dateRange}
              </span>
            </div>
          </div>

          {/* Description */}
          {entry.description && (
            <ul className="space-y-2 mt-4">
              {entry.description.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 dark:text-gray-400 flex items-start"
                >
                  <span className="text-gray-400 dark:text-gray-500 mr-2">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Additional achievements/impact */}
          {'achievements' in entry && entry.achievements && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Achievements:
              </p>
              <ul className="space-y-1">
                {entry.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {'impact' in entry && entry.impact && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Impact:
              </p>
              <ul className="space-y-1">
                {entry.impact.map((impact, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    • {impact}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {'technologies' in entry && entry.technologies && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {entry.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

