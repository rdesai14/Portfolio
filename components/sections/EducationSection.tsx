/**
 * Education Section
 * Displays educational background with timeline entries
 */

import SectionHeader from '../SectionHeader'
import TimelineEntry from '../TimelineEntry'
import { Education } from '@/types'

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({
  education,
}: EducationSectionProps) {
  return (
    <section id="education" className="py-24">
      <SectionHeader
        title="Education"
        subtitle="Foundations of knowledge and growth"
        align="left"
      />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" />
        
        <div className="space-y-0">
          {education.map((edu, index) => (
            <TimelineEntry key={edu.id} entry={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

