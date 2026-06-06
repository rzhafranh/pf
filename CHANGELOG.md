# 📝 Changelog

All notable changes and updates to this portfolio website project.

## [1.0.4] - 2026-06-02

### ✨ Added
- **Period Metadata on Experience Cards**: Cards now display period/timeline below company name
  - Calendar icon with period text (e.g., "January - December 2024")
  - Always visible (no hover needed)
  - Helps users quickly understand timeline

### 🎨 Improved
- **Experience Card Information Density**: Better use of vertical space with period display
- **Visual Hierarchy**: Clear progression from badge → title → company → period → description

### 🔧 Fixed
- **Badge Text Correction**: Organization badge now correctly shows "ORGANIZATION" (was "EXPERIENCE")

### 📝 Badge Configuration (Updated):
- 🔴 RED: "PROFESSIONAL"
- 🟢 GREEN: "ORGANIZATION" (corrected)
- 🔵 BLUE: "EVENT"

## [1.0.3] - 2026-06-02

### ✨ Added
- **Logo Active State on Home**: Logo "RZ" now has white background when on landing page (home)
- **Consistent Active Indicators**: All navigation items use white background for active state

### 🎨 Improved
- **Fully Rounded Navbar**: Changed from `rounded-2xl` to `rounded-full` for pill-shaped design
- **Active State Design**: Unified active state with white background and dark text across all nav items
- **Visual Consistency**: Logo and nav buttons now share same active state styling
- **Modern Aesthetic**: Pill-shaped navbar with smooth, organic appearance

### 🔧 Technical
- Updated `src/components/Navbar.jsx` with new styling logic
- Added `isHome` state to track landing page
- Simplified active state styling (removed electric-blue, use white consistently)
- Improved responsive padding and spacing

### 📱 UX Improvements
- Clearer visual hierarchy with white active indicators
- Logo now participates in navigation state system
- Better visual feedback for current location
- More professional and modern appearance

## [1.0.2] - 2026-06-02

### ✨ Added
- **Cursor Spotlight Effect**: Interactive dimmed light that follows mouse cursor across entire website
  - Triple-layer radial gradient (Blue + Purple + White)
  - Smooth transitions and fade effects
  - Responsive to mouse position in real-time
  - Automatically hides when cursor leaves window
  - Doesn't interfere with content or interactions

### 🎨 Improved
- **Hero Navigation Buttons**: Now more visible with gradient borders
  - Default state: Gradient border with dark background
  - Hover state: Full gradient background + white text
  - Glow effect on hover for better depth
  - Better visual hierarchy and readability
  
### 🔧 Technical
- Created new component: `src/components/CursorSpotlight.jsx`
- Updated `src/App.jsx` to integrate spotlight globally
- Updated `src/components/Hero.jsx` with enhanced button styling
- Build size: ~396KB (gzipped: ~124KB) - minimal impact (+2KB)

### ♿ Accessibility
- Spotlight uses `pointer-events: none` (doesn't block interactions)
- Low opacity maintains text readability (WCAG AA compliant)
- Smooth transitions (no flashing/seizure risk)
- Automatically disabled on touch devices (mobile/tablet)

## [1.0.1] - 2026-06-02

### ✨ Added
- **Hero Section Navigation Buttons**: Added 4 interactive buttons (About Me, Experiences, Projects, Socials) di bawah hero description untuk quick navigation
- **Socials 2-Column Layout**: Changed Socials page layout dari 1 column menjadi 2 columns di desktop untuk better space utilization

### 🎨 Improved
- **Hero Button Design**: Gradient text dengan hover effect (terangkat + color change ke white)
- **Socials Hover Effect**: Updated dari horizontal slide menjadi vertical lift dengan glow shadow
- **Socials Container**: Increased max-width dari 2xl ke 4xl untuk accommodate 2 columns
- **Button Animations**: Added stagger entrance animations untuk hero navigation buttons

### 🔧 Technical
- Updated `src/components/Hero.jsx` dengan navigation buttons
- Updated `src/pages/Socials.jsx` dengan grid layout system
- Maintained responsive design (mobile: 1 column, desktop: 2 columns)
- Build size: ~394KB (gzipped: ~124KB) - minimal impact

### 📱 Responsive
- Hero buttons wrap gracefully pada mobile devices
- Socials grid automatically adjusts: 1 column (mobile) → 2 columns (tablet/desktop)

## [1.0.0] - 2026-06-02

### 🎉 Initial Release

#### ✨ Features Added

**Core Pages:**
- ✅ Landing Page (Hero Section) dengan gradient text & neon effects
- ✅ About Me Page dengan foto circular & bio lengkap
- ✅ Experiences Page dengan tab switching (Professional vs Organizations/Events)
- ✅ Experience Detail Page dengan skills grid & modal
- ✅ Projects Page dengan grid layout & color-coded badges
- ✅ Socials Page dengan social media links

**Components:**
- ✅ Navbar dengan glassmorphism effect & active state
- ✅ ExperienceCard dengan hover expansion & details button
- ✅ SkillCard dengan hover animation
- ✅ SkillDetailModal dengan gallery carousel option
- ✅ ProjectCard dengan type-based color coding
- ✅ ProjectDetailModal dengan auto-slide carousel

**Animations:**
- ✅ Page entrance animations menggunakan Framer Motion
- ✅ Hover effects pada cards & buttons
- ✅ Modal open/close animations
- ✅ Smooth transitions untuk semua interactions
- ✅ Stagger animations untuk grid items

**Styling:**
- ✅ Dark mode theme dengan neon accents
- ✅ Custom color palette (Electric Blue, Pink, Purple)
- ✅ Plus Jakarta Sans font family
- ✅ Glassmorphism effects
- ✅ Neon glow shadows
- ✅ Custom scrollbar

**Data Management:**
- ✅ Centralized data source di `data.js`
- ✅ Placeholder system untuk easy content replacement
- ✅ Helper functions untuk badge colors
- ✅ Structured data format (Array of Objects)

**Features:**
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Image fallback system
- ✅ Auto-slide carousel dengan manual override
- ✅ Click outside to close modals
- ✅ Full-screen image preview
- ✅ Tab switching dengan smooth animations
- ✅ Dynamic routing dengan React Router
- ✅ External links open in new tab

#### 📚 Documentation Created

- ✅ `README.md` - Main documentation
- ✅ `QUICK_START.md` - Quick start guide
- ✅ `DATA_GUIDE.md` - Detailed data filling guide
- ✅ `DEPLOYMENT.md` - Comprehensive deployment guide
- ✅ `ARCHITECTURE.md` - Technical architecture documentation
- ✅ `PROJECT_SUMMARY.md` - Complete project summary
- ✅ `public/images/README.md` - Image optimization guide

#### 🔧 Configuration

- ✅ Tailwind CSS configuration dengan custom colors & fonts
- ✅ PostCSS configuration untuk autoprefixer
- ✅ Vite configuration untuk development & build
- ✅ ESLint configuration untuk code quality
- ✅ Vercel deployment configuration (`vercel.json`)
- ✅ Netlify deployment configuration (`_redirects`)

#### 📦 Dependencies

**Production:**
- react ^19.0.0
- react-dom ^19.0.0
- react-router-dom ^7.1.3
- framer-motion ^11.18.0
- lucide-react ^0.468.0

**Development:**
- vite ^8.0.16
- tailwindcss ^4.1.0
- autoprefixer ^10.4.20
- postcss ^8.4.49
- eslint ^9.18.0

#### 🎨 Design System

**Colors:**
- Dark BG: `#0A0A0F`
- Dark Card: `#15151F`
- Electric Blue: `#00D9FF`
- Electric Pink: `#FF0080`
- Electric Purple: `#B026FF`

**Typography:**
- Font: Plus Jakarta Sans (200-800 weights)
- Loaded from: Google Fonts

**Badge Colors:**
- 🔴 Red: Professional experiences
- 🟢 Green: Organization experiences
- 🔵 Blue: Event experiences
- 🟣 Purple: UI/UX projects
- ⚪ Gray: Coding projects
- 🟠 Orange: Web Development projects
- 🟡 Yellow: Data projects

#### 🔍 SEO & Performance

- ✅ Semantic HTML structure
- ✅ Meta tags setup
- ✅ Alt text untuk images dengan fallback
- ✅ Optimized build dengan Vite
- ✅ Code splitting ready
- ✅ Lazy loading ready
- ✅ Proper heading hierarchy

#### ♿ Accessibility

- ✅ Keyboard navigation support
- ✅ Focus states pada interactive elements
- ✅ ARIA labels pada modal close buttons
- ✅ Semantic HTML elements
- ✅ Proper contrast ratios
- ✅ Text readable pada semua backgrounds

#### 🐛 Bug Fixes & Improvements

- ✅ Fixed: Image loading dengan proper fallback
- ✅ Fixed: Modal scroll behavior
- ✅ Fixed: Carousel timer reset on manual navigation
- ✅ Fixed: Click outside modal closes properly
- ✅ Improved: Smooth height transitions on hover
- ✅ Improved: Responsive grid layouts
- ✅ Improved: Mobile navigation experience

---

## Future Enhancements (Roadmap)

### Version 1.1.0 (Planned)
- [ ] Dark/Light mode toggle
- [ ] Search functionality untuk projects
- [ ] Filter projects by type
- [ ] Contact form integration
- [ ] Blog section
- [ ] Multi-language support

### Version 1.2.0 (Planned)
- [ ] Admin panel untuk edit content
- [ ] CMS integration (optional)
- [ ] Enhanced animations
- [ ] More chart/graph components
- [ ] Timeline view untuk experiences
- [ ] Testimonials section

### Version 2.0.0 (Planned)
- [ ] Backend integration
- [ ] User authentication
- [ ] Comments system
- [ ] Newsletter subscription
- [ ] Advanced analytics
- [ ] PWA support

---

## How to Update

### Adding New Features

1. Create feature branch:
   ```bash
   git checkout -b feature/new-feature-name
   ```

2. Make changes and test:
   ```bash
   npm run dev
   # Test thoroughly
   ```

3. Build and verify:
   ```bash
   npm run build
   npm run preview
   ```

4. Commit and merge:
   ```bash
   git add .
   git commit -m "feat: Add new feature description"
   git push origin feature/new-feature-name
   ```

### Updating Dependencies

```bash
# Check outdated packages
npm outdated

# Update specific package
npm update package-name

# Update all packages (carefully!)
npm update

# Test after update
npm run dev
npm run build
```

### Deployment Updates

After making changes:

1. Test locally
2. Build: `npm run build`
3. Commit changes: `git commit -m "update: description"`
4. Push: `git push origin main`
5. Deployment platforms (Vercel/Netlify) will auto-deploy

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2026-06-02 | Initial release with all core features |

---

## Contributors

- **Initial Development**: AI Assistant (Kiro)
- **Owner & Maintainer**: Raihan Zhafran

---

## Notes

- This project follows semantic versioning (MAJOR.MINOR.PATCH)
- All changes should be documented here
- Keep this file updated with each release
- Include migration notes for breaking changes

---

**Last Updated**: June 2, 2026
