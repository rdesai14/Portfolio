/**
 * Project Card Component
 * Displays featured projects with Problem, Solution, Technologies, Outcome, and Purpose
 * Implements subtle asymmetry in layout
 */

'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Alternate card alignment for visual interest
  const isEven = index % 2 === 0
  const cardAlignment = isEven ? 'md:ml-auto' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`${cardAlignment} max-w-3xl`}
    >
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>

        {/* Problem */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
            Problem
          </h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
            Solution
          </h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide mb-2">
            Outcome
          </h4>
          <p className="text-green-700 dark:text-green-400 leading-relaxed">
            {project.outcome}
          </p>
        </div>

        {/* Purpose */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
            Purpose
          </h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
            {project.purpose}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

