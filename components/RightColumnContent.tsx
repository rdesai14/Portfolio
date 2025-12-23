/**
 * Right Column Content Component
 * Contains narrative and detailed content sections
 * - Experience
 * - Projects
 * - Leadership
 * - Hobbies
 */

import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import LeadershipSection from './sections/LeadershipSection'
import HobbiesSection from './sections/HobbiesSection'
import { Experience, Project, Leadership, Hobby } from '@/types'

interface RightColumnContentProps {
  experiences: Experience[]
  projects: Project[]
  leadership: Leadership[]
  hobbies: Hobby[]
}

export default function RightColumnContent({
  experiences,
  projects,
  leadership,
  hobbies,
}: RightColumnContentProps) {
  return (
    <div className="space-y-0">
      {/* Experience Section */}
      <ExperienceSection experiences={experiences} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Leadership Section */}
      <LeadershipSection leadership={leadership} />

      {/* Hobbies Section */}
      <HobbiesSection hobbies={hobbies} />
    </div>
  )
}

