/**
 * Main Portfolio Page
 * 
 * This page orchestrates all sections in the order:
 * 1. Intro / Hero
 * 2. Education
 * 3. Technical Skills
 * 4. Internships & Experience
 * 5. Featured Projects
 * 6. Leadership & Mentorship
 * 7. Hobbies
 * 8. Contact / Links
 * 
 * The layout is designed as a living timeline of growth,
 * where each section represents a stage of development.
 */

import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import EducationSection from '@/components/sections/EducationSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import LeadershipSection from '@/components/sections/LeadershipSection'
import HobbiesSection from '@/components/sections/HobbiesSection'
import ContactSection from '@/components/sections/ContactSection'

import {
  projects,
  experiences,
  education,
  skills,
  leadership,
  hobbies,
  contactLinks,
  personalInfo,
} from '@/data/portfolio'

export default function Home() {
  return (
    <Layout>
      {/* 1. Intro / Hero Section */}
      <Intro
        name={personalInfo.name}
        title={personalInfo.title}
        bio={personalInfo.bio}
        profileImage={personalInfo.profileImage}
      />

      {/* 2. Education Section */}
      <EducationSection education={education} />

      {/* 3. Technical Skills Section */}
      <SkillsSection skills={skills} />

      {/* 4. Internships & Experience Section */}
      <ExperienceSection experiences={experiences} />

      {/* 5. Featured Projects Section */}
      <ProjectsSection projects={projects} />

      {/* 6. Leadership & Mentorship Section */}
      <LeadershipSection leadership={leadership} />

      {/* 7. Hobbies Section */}
      <HobbiesSection hobbies={hobbies} />

      {/* 8. Contact / Links Section */}
      <ContactSection links={contactLinks} />
    </Layout>
  )
}

