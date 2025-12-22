# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Profile Photo
- Place your profile image at: `public/profile.jpg`
- Recommended: Square image, at least 400x400px
- Formats: JPG, PNG, or WebP

### 3. Update Your Information
Edit `data/portfolio.ts` and replace the sample data with your own:
- `personalInfo` - Your name, title, bio
- `projects` - Your featured projects
- `experiences` - Your work experience
- `education` - Your educational background
- `skills` - Your technical skills
- `leadership` - Leadership roles and mentorship
- `hobbies` - Your hobbies
- `contactLinks` - Your social/contact links

### 4. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

### 5. Customize (Optional)
- Colors: Edit `tailwind.config.ts`
- Animations: Adjust timing in `components/Intro.tsx`
- Styling: Modify component files in `components/`

### 6. Deploy
```bash
npm run build
```

Deploy to Vercel, Netlify, or your preferred hosting platform.

---

**Need help?** Check the full [README.md](./README.md) for detailed documentation.

