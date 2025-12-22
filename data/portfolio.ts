/**
 * Portfolio data - all content lives here
 * Easy to update without touching component code
 */

import {
  Project,
  Experience,
  Education,
  Skill,
  Leadership,
  Hobby,
  ContactLink,
} from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Real-time Collaboration Platform',
    problem:
      'Teams needed a way to collaborate on documents in real-time without conflicts, version control issues, or network latency problems.',
    solution:
      'Built a WebSocket-based collaboration system with operational transformation (OT) algorithm, implementing conflict-free replicated data types (CRDTs) for seamless multi-user editing.',
    technologies: [
      'React',
      'Node.js',
      'WebSocket',
      'Redis',
      'PostgreSQL',
      'TypeScript',
    ],
    outcome:
      'Reduced collaboration conflicts by 95% and enabled 50+ concurrent users per document with <100ms latency.',
    purpose:
      'To master real-time systems, distributed computing, and learn advanced state synchronization techniques.',
    github: 'https://github.com/username/repo',
    link: 'https://example.com',
  },
  {
    id: '2',
    title: 'ML-Powered Code Review Assistant',
    problem:
      'Code reviews were taking too long, and junior developers were missing critical security vulnerabilities and performance issues.',
    solution:
      'Developed a machine learning model that analyzes code diffs, identifies potential bugs, security vulnerabilities, and suggests improvements using transformer-based NLP and static analysis.',
    technologies: [
      'Python',
      'TensorFlow',
      'FastAPI',
      'Docker',
      'GitHub API',
      'PostgreSQL',
    ],
    outcome:
      'Reduced code review time by 40% and caught 30% more security issues before deployment.',
    purpose:
      'To combine my interest in software engineering best practices with machine learning to solve a real developer pain point.',
    github: 'https://github.com/username/repo',
  },
  {
    id: '3',
    title: 'Distributed Task Scheduler',
    problem:
      'Existing task schedulers couldn\'t handle our scale of 10M+ tasks per day with complex dependencies and varying priority levels.',
    solution:
      'Designed and implemented a distributed task scheduling system with priority queues, dependency resolution, and fault tolerance using a microservices architecture.',
    technologies: [
      'Go',
      'Kubernetes',
      'Apache Kafka',
      'MongoDB',
      'gRPC',
      'Prometheus',
    ],
    outcome:
      'Processed 15M tasks daily with 99.9% reliability and sub-second scheduling latency.',
    purpose:
      'To deeply understand distributed systems, concurrency patterns, and build something production-grade.',
    github: 'https://github.com/username/repo',
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'Tech Innovation Labs',
    location: 'San Francisco, CA',
    startDate: 'Jun 2023',
    endDate: 'Aug 2023',
    description: [
      'Built and deployed microservices handling 100K+ requests/day using Go and Kubernetes',
      'Reduced API response time by 35% through database query optimization and caching strategies',
      'Collaborated with cross-functional teams to ship features in 2-week sprint cycles',
      'Implemented comprehensive test coverage increasing reliability from 85% to 98%',
    ],
    technologies: ['Go', 'Kubernetes', 'PostgreSQL', 'Redis', 'Docker', 'gRPC'],
  },
  {
    id: '2',
    title: 'Full-Stack Developer Intern',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'May 2023',
    description: [
      'Developed responsive React frontend with TypeScript, improving user engagement by 25%',
      'Created RESTful APIs with Node.js and Express, serving 10K+ daily active users',
      'Designed database schema and optimized queries, reducing load times by 40%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'AWS',
      'Tailwind CSS',
    ],
  },
]

export const education: Education[] = [
  {
    id: '1',
    degree: 'B.S. Computer Science',
    institution: 'University of Technology',
    location: 'City, State',
    startDate: '2020',
    endDate: '2024',
    description: [
      'Focus on software engineering, distributed systems, and machine learning',
    ],
    achievements: [
      'Dean\'s List: Fall 2021, Spring 2022, Fall 2023',
      'Outstanding Student in Algorithms and Data Structures',
      'Research Assistant in Distributed Computing Lab',
    ],
  },
]

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'C++'],
  },
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Redux',
      'GraphQL',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express',
      'FastAPI',
      'gRPC',
      'REST APIs',
      'WebSocket',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
  },
  {
    category: 'DevOps & Tools',
    items: [
      'Docker',
      'Kubernetes',
      'AWS',
      'CI/CD',
      'Git',
      'Linux',
      'Prometheus',
    ],
  },
  {
    category: 'Other',
    items: ['Machine Learning', 'Distributed Systems', 'System Design'],
  },
]

export const leadership: Leadership[] = [
  {
    id: '1',
    role: 'Tech Lead',
    organization: 'University Coding Club',
    location: 'University Campus',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: [
      'Lead a team of 15 developers in building open-source projects',
      'Organize weekly technical workshops and hackathons',
      'Mentor junior members on software engineering best practices',
    ],
    impact: [
      'Grew club membership from 30 to 150+ active members',
      'Launched 3 major projects used by 500+ students',
      'Hosted 2 university-wide hackathons with 200+ participants',
    ],
  },
  {
    id: '2',
    role: 'Teaching Assistant',
    organization: 'Department of Computer Science',
    location: 'University',
    startDate: 'Sep 2022',
    endDate: 'Present',
    description: [
      'Assist professor in Data Structures and Algorithms course',
      'Conduct office hours and help students with assignments',
      'Grade assignments and provide detailed feedback',
    ],
    impact: [
      'Improved average student performance by 12% through targeted support',
      'Mentored 50+ students individually throughout the semester',
    ],
  },
]

export const hobbies: Hobby[] = [
  {
    id: '1',
    title: 'Open Source Contributor',
    description:
      'Contribute to projects like React, Next.js, and various developer tools. Love solving challenging issues and learning from maintainers.',
  },
  {
    id: '2',
    title: 'Rock Climbing',
    description:
      'Regular indoor and outdoor climber. The problem-solving aspect mirrors debugging code—both require patience, strategy, and persistence.',
  },
  {
    id: '3',
    title: 'Photography',
    description:
      'Landscape and street photography enthusiast. Capturing moments teaches attention to detail and composition—skills transferable to UI/UX design.',
  },
  {
    id: '4',
    title: 'Reading Tech Blogs',
    description:
      'Avid reader of engineering blogs from companies like Netflix, Uber, and Stripe. Stay updated on industry best practices and system design patterns.',
  },
  {
    id: '5',
    title: 'Side Projects',
    description:
      'Constantly building small tools and experiments. Recent projects include a CLI productivity tool and a personal finance tracker.',
  },
  {
    id: '6',
    title: 'Chess',
    description:
      'Play regularly to sharpen strategic thinking and pattern recognition. Apply similar analytical approaches to algorithm design and optimization.',
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    url: 'mailto:your.email@example.com',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/username',
    icon: '💻',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: '💼',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/username',
    icon: '🐦',
  },
]

// Personal info for hero section
export const personalInfo = {
  name: 'Your Name',
  title: 'Software Engineer & Problem Solver',
  bio: 'Building scalable systems and solving complex problems. Passionate about clean code, distributed systems, and continuous learning.',
  profileImage: '/profile.jpg', // Place your profile image in public/profile.jpg
}

