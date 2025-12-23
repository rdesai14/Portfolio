/**
 * Hobbies Section
 * Displays hobbies in a grid layout with subtle asymmetry
 */

import SectionHeader from '../SectionHeader'
import HobbyCard from '../HobbyCard'
import { Hobby } from '@/types'

interface HobbiesSectionProps {
  hobbies: Hobby[]
}

export default function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <section id="hobbies" className="py-16">
      <SectionHeader
        title="Hobbies"
        subtitle="What I do beyond code"
        align="right"
      />
      {/* Grid with intentional asymmetry - slightly offset columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.id} hobby={hobby} index={index} />
        ))}
      </div>
    </section>
  )
}

