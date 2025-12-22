/**
 * Experience / Internships Section
 * Displays work experience with timeline entries
 */

import SectionHeader from '../SectionHeader'
import TimelineEntry from '../TimelineEntry'
import { Experience } from '@/types'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24">
      <SectionHeader
        title="Internships & Experience"
        subtitle="Real-world impact and learning"
        align="right"
      />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" />
        
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <TimelineEntry key={exp.id} entry={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

