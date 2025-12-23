/**
 * Type definitions for portfolio data structures
 */

export interface Project {
  id: string
  title: string
  problem: string
  solution: string
  technologies: string[]
  outcome: string
  purpose: string
  link?: string
  github?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies?: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description?: string[]
  achievements?: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface Leadership {
  id: string
  role: string
  organization: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  impact?: string[]
}

export interface Hobby {
  id: string
  title: string
  description: string
  icon?: string
  image?: string
}

export interface ContactLink {
  label: string
  url: string
  icon?: string
}

export interface ProgrammingLanguage {
  name: string
  proficiency: number // 0-100 percentage
}

export interface PersonalMetadata {
  name: string
  title: string
  residence?: string
  university?: string
  major?: string
  expectedGraduation?: string
  age?: number
  email?: string
}

