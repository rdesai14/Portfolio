/**
 * Contact / Links Section
 * Displays contact information and social links
 */

'use client'

import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { ContactLink } from '@/types'

interface ContactSectionProps {
  links: ContactLink[]
}

export default function ContactSection({ links }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24">
      <SectionHeader
        title="Get In Touch"
        subtitle="Let's connect and build something great together"
        align="center"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-3 px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 font-medium"
          >
            {link.icon && <span className="text-2xl">{link.icon}</span>}
            <span>{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

