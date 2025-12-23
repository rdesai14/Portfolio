/**
 * Main Portfolio Page
 * 
 * Layout structure:
 * 1. Full-width intro section at the top
 * 2. Two-column layout below:
 *    - Left Column (30-35%): Personal metadata, skills, languages, contact links
 *    - Right Column (65-70%): Experience, projects, leadership, hobbies
 * 
 * Both columns scroll together naturally (NO sticky positioning)
 */

import Layout from '@/components/Layout'
import AboutMe from '@/components/AboutMe'
import TwoColumnLayout from '@/components/TwoColumnLayout'
import LeftSidebar from '@/components/LeftSidebar'
import RightColumnContent from '@/components/RightColumnContent'

import {
  projects,
  experiences,
  skills,
  leadership,
  hobbies,
  contactLinks,
  personalInfo,
  personalMetadata,
  programmingLanguages,
} from '@/data/portfolio'

export default function Home() {
  return (
    <Layout>
      {/* Full-width Intro Section */}
      <AboutMe
        name={personalInfo.name}
        title={personalInfo.title}
        bio={personalInfo.bio}
        profileImage={personalInfo.profileImage}
      />

      {/* Two-column layout starting here */}
      <TwoColumnLayout
        leftColumn={
          <LeftSidebar
            personalMetadata={personalMetadata}
            skills={skills}
            programmingLanguages={programmingLanguages}
            contactLinks={contactLinks}
          />
        }
        rightColumn={
          <RightColumnContent
            experiences={experiences}
            projects={projects}
            leadership={leadership}
            hobbies={hobbies}
          />
        }
      />
    </Layout>
  )
}

