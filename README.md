# Personal Portfolio Website

A highly polished, React-based personal portfolio website designed to impress tech recruiters with technical depth, leadership, and real-world impact. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Cinematic Intro Animation**: Memorable "wow" animation with text morphing and profile photo reveal (plays once, 2-4 seconds)
- **Living Timeline Design**: Each section represents a stage of growth and development
- **Asymmetric Layout**: Balanced but intentionally slightly asymmetrical for visual interest
- **Component-Driven Architecture**: Reusable, maintainable components
- **Performance-Conscious**: Optimized animations that don't block scrolling or accessibility
- **Dark Mode Support**: Automatic dark mode based on system preferences

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add your profile image:
   - Place your profile photo at `public/profile.jpg`
   - Recommended: Square aspect ratio, at least 400x400px
   - Supported formats: JPG, PNG, WebP

3. Update your personal information:
   - Edit `data/portfolio.ts` with your actual information
   - Replace sample data with your projects, experience, education, etc.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page orchestrating all sections
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Layout.tsx          # Global layout component
│   ├── Intro.tsx           # Hero section with wow animation
│   ├── SectionHeader.tsx   # Reusable section headers
│   ├── TimelineEntry.tsx   # Timeline entries for education/experience
│   ├── ProjectCard.tsx     # Featured project cards
│   ├── HobbyCard.tsx       # Hobby cards
│   └── sections/           # All section components
│       ├── EducationSection.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── LeadershipSection.tsx
│       ├── HobbiesSection.tsx
│       └── ContactSection.tsx
├── data/
│   └── portfolio.ts        # All portfolio content (edit this!)
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/                 # Static assets (add profile.jpg here)
```

## 📝 Adding Content & Milestones

### Adding a New Project

Edit `data/portfolio.ts` and add a new entry to the `projects` array:

```typescript
{
  id: '4',
  title: 'Your Project Title',
  problem: 'The problem this project solves...',
  solution: 'How you solved it...',
  technologies: ['React', 'TypeScript', 'Node.js'],
  outcome: 'Measurable impact or results...',
  purpose: 'Why you built this project...',
  link: 'https://your-demo.com',        // Optional
  github: 'https://github.com/your-repo', // Optional
}
```

### Adding Experience/Internship

Add to the `experiences` array:

```typescript
{
  id: '3',
  title: 'Your Role',
  company: 'Company Name',
  location: 'City, State',
  startDate: 'Jan 2024',
  endDate: 'Present',  // or end date
  description: [
    'Bullet point 1',
    'Bullet point 2',
    'Bullet point 3',
  ],
  technologies: ['Tech1', 'Tech2'],  // Optional
}
```

### Adding Education

Add to the `education` array:

```typescript
{
  id: '2',
  degree: 'Degree Name',
  institution: 'School Name',
  location: 'City, State',
  startDate: '2020',
  endDate: '2024',
  description: ['Optional description'],
  achievements: ['Achievement 1', 'Achievement 2'],  // Optional
}
```

### Adding Leadership Roles

Add to the `leadership` array:

```typescript
{
  id: '3',
  role: 'Your Role',
  organization: 'Organization Name',
  location: 'Location',
  startDate: 'Jan 2023',
  endDate: 'Present',
  description: ['Description point 1', 'Description point 2'],
  impact: ['Impact metric 1', 'Impact metric 2'],  // Optional
}
```

### Adding Hobbies

Add to the `hobbies` array:

```typescript
{
  id: '7',
  title: 'Hobby Name',
  description: 'Description of the hobby and why it matters to you.',
  icon: '🎯',  // Optional emoji icon
}
```

### Updating Skills

Edit the `skills` array in `data/portfolio.ts`:

```typescript
{
  category: 'Your Category',
  items: ['Skill 1', 'Skill 2', 'Skill 3'],
}
```

### Updating Contact Links

Edit the `contactLinks` array:

```typescript
{
  label: 'Platform Name',
  url: 'https://your-profile-url',
  icon: '💼',  // Optional emoji
}
```

### Updating Personal Info

Edit the `personalInfo` object:

```typescript
export const personalInfo = {
  name: 'Your Full Name',
  title: 'Your Professional Title',
  bio: 'Your bio description...',
  profileImage: '/profile.jpg',  // Path to your image in public/
}
```

## 🎨 Customization

### Colors & Styling

The site uses Tailwind CSS with a minimalist color palette. Colors can be customized in:

- `tailwind.config.ts` - Theme colors and spacing
- `app/globals.css` - CSS variables for dark mode

### Animation Timing

The intro animation timing can be adjusted in `components/Intro.tsx`:

- Name reveal: `delay: 0.5` (start time)
- Title reveal: `delay: 1.0`
- Bio reveal: `delay: 2.0`
- Photo reveal: `delay: 1.5` (starts at 1.5s, completes by ~3s)

### Layout Spacing

Section spacing uses Tailwind's standard spacing scale. Currently using `py-24` (6rem) for vertical section padding. You can adjust this in any section component by changing the `py-24` class to another Tailwind spacing class (e.g., `py-16`, `py-32`).

## 🎭 Intro Animation Explained

The intro animation is designed to create a memorable first impression:

1. **Background Gradient** (0-0.5s): Subtle gradient fades in
2. **Name Text** (0.5-1.5s): Each word in your name animates in sequentially with scale and fade
3. **Title Text** (1-2s): Slides up and fades in
4. **Bio Text** (2-2.5s): Fades in smoothly
5. **Profile Photo** (1.5-3s): Uses a circular mask reveal (clip-path animation) combined with fade and slight scale

The animation is:
- **Non-blocking**: Users can scroll immediately, animation doesn't prevent interaction
- **Accessible**: Respects `prefers-reduced-motion` (can be added)
- **Performance-conscious**: Uses GPU-accelerated transforms (transform, opacity, clip-path)

### Profile Photo Integration

The profile photo uses Next.js `Image` component for optimization:
- Place your image at `public/profile.jpg`
- The component handles responsive sizing automatically
- Circular mask reveal creates an elegant entry effect

## 🏗️ Architecture Philosophy

### Timeline as Growth Narrative

Each section represents a milestone in your journey:
- **Education**: Foundation
- **Skills**: Tools acquired
- **Experience**: Real-world application
- **Projects**: Problem-solving in action
- **Leadership**: Impact on others
- **Hobbies**: Balance and perspective

The layout's subtle asymmetry reflects that growth is not linear - it's organic and dynamic.

### Component Reusability

- `TimelineEntry`: Used for Education, Experience, and Leadership (polymorphic design)
- `SectionHeader`: Consistent section headers with optional subtitles
- `ProjectCard`: Detailed project display with all required fields
- `HobbyCard`: Simple, clean hobby presentation

### Data-Driven Content

All content lives in `data/portfolio.ts`, making it easy to:
- Update without touching component code
- Version control content separately
- Potentially migrate to a CMS later

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Deployment Options

- Netlify
- AWS Amplify
- Any platform supporting Node.js and static exports

## 🔧 Performance Optimizations

- Next.js Image component for optimized images
- Framer Motion's `whileInView` for scroll-triggered animations (only animates when visible)
- CSS transforms for GPU acceleration
- Minimal JavaScript bundle size
- Static generation where possible

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (add in Intro.tsx)
- Keyboard navigation support
- Focus states on interactive elements

To add `prefers-reduced-motion` support, you can modify animations in components to check:

```typescript
const prefersReducedMotion = useReducedMotion()
// Then conditionally apply animations
```

## 📚 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **React 18**: Modern React features

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs or improvements
- Suggest enhancements

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 💡 Tips for Recruiters

This portfolio is designed to:
1. **Impress quickly**: The intro animation creates immediate engagement
2. **Showcase depth**: Projects include problem, solution, and measurable outcomes
3. **Demonstrate growth**: Timeline structure shows progression
4. **Highlight impact**: Quantified results in projects and leadership
5. **Reveal personality**: Hobbies section shows balance

---

**Built with ❤️ using Next.js and Framer Motion**

