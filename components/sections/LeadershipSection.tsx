/**
 * Leadership & Mentorship Section
 * Displays leadership roles and mentorship activities
 */

import SectionHeader from '../SectionHeader'
import TimelineEntry from '../TimelineEntry'
import { Leadership } from '@/types'

interface LeadershipSectionProps {
  leadership: Leadership[]
}

export default function LeadershipSection({
  leadership,
}: LeadershipSectionProps) {
  return (
    <section id="leadership" className="py-24">
      <SectionHeader
        title="Leadership & Mentorship"
        subtitle="Guiding others and making an impact"
        align="center"
      />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" />
        
        <div className="space-y-0">
          {leadership.map((role, index) => (
            <TimelineEntry key={role.id} entry={role} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

