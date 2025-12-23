/**
 * Featured Projects Section
 * Displays projects with detailed cards
 */

import SectionHeader from '../SectionHeader'
import ProjectCard from '../ProjectCard'
import { Project } from '@/types'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16">
      <SectionHeader
        title="Featured Projects"
        subtitle="Real-world problems, impactful solutions"
        align="left"
      />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

