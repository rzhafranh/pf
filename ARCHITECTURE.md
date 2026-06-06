# 🏗️ Architecture Documentation

Dokumentasi arsitektur dan struktur code website portfolio.

## 📁 Struktur Folder

```
PortfolioWebsite/
├── public/                      # Static assets
│   ├── images/                  # Folder untuk semua gambar
│   │   └── README.md           # Panduan gambar
│   ├── _redirects              # Netlify redirects config
│   └── favicon.svg             # Website icon
│
├── src/                         # Source code
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Landing page hero
│   │   ├── ExperienceCard.jsx  # Card untuk experience
│   │   ├── SkillCard.jsx       # Card untuk skill
│   │   ├── SkillDetailModal.jsx # Modal detail skill
│   │   ├── ProjectCard.jsx     # Card untuk project
│   │   └── ProjectDetailModal.jsx # Modal detail project
│   │
│   ├── pages/                   # Page components
│   │   ├── About.jsx           # Halaman About Me
│   │   ├── Experiences.jsx     # Halaman Experience (list)
│   │   ├── ExperienceDetail.jsx # Halaman detail 1 experience
│   │   ├── Projects.jsx        # Halaman Projects (grid)
│   │   └── Socials.jsx         # Halaman Social Media
│   │
│   ├── data.js                 # ⭐ Data source utama
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles + Tailwind
│   └── App.css                 # Additional custom styles
│
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel deployment config
├── package.json                # Dependencies & scripts
│
└── Documentations/
    ├── README.md               # Main documentation
    ├── QUICK_START.md          # Quick start guide
    ├── DATA_GUIDE.md           # Data filling guide
    ├── DEPLOYMENT.md           # Deployment guide
    └── ARCHITECTURE.md         # This file
```

## 🎯 Component Hierarchy

```
App
├── Navbar (always visible, floating)
└── Routes
    ├── "/" → Hero (Landing Page)
    ├── "/about" → About
    ├── "/experiences" → Experiences
    │   └── "/experiences/:id" → ExperienceDetail
    │       └── SkillCard → SkillDetailModal
    ├── "/projects" → Projects
    │   └── ProjectCard → ProjectDetailModal
    └── "/socials" → Socials
```

## 📊 Data Flow

### 1. Data Source: `src/data.js`

File ini adalah **single source of truth** untuk semua content website.

```javascript
data.js
├── heroData              → Hero component
├── aboutData             → About page
├── professionalExperiences → Experiences page (Professional tab)
├── organizationExperiences → Experiences page (Org/Event tab)
├── projectsData          → Projects page
├── socialsData           → Socials page
└── getBadgeColor()       → Helper function untuk warna badge
```

### 2. Component Props Flow

```
Experiences.jsx
  ├─ import { professionalExperiences, organizationExperiences }
  ├─ map over data → render ExperienceCard
  └─ ExperienceCard
      ├─ receives: experience object
      ├─ onClick → navigate to detail
      └─ uses: getBadgeColor(experience.type)

ExperienceDetail.jsx
  ├─ get ID from URL params
  ├─ find experience by ID
  ├─ map over experience.skills
  └─ SkillCard
      ├─ receives: skill object
      ├─ onClick → open SkillDetailModal
      └─ SkillDetailModal
          └─ receives: skill object with gallery
```

## 🎨 Styling Architecture

### 1. Tailwind CSS Configuration

```javascript
tailwind.config.js
├── Custom colors (neon theme)
├── Custom font family (Plus Jakarta Sans)
├── Custom shadows (glow effects)
└── Custom backdrop blur
```

### 2. CSS Layers

```css
index.css
├── @import Google Fonts
├── @tailwind base
│   ├── Global font
│   ├── Body background
│   └── Custom scrollbar
├── @tailwind components
│   ├── .glass-effect
│   ├── .card-hover
│   └── .neon-text
└── @tailwind utilities
```

### 3. Component Styles

Setiap component menggunakan:
- Tailwind utility classes (primary)
- Framer Motion inline styles (animations)
- CSS modules (optional, tidak dipakai di template ini)

## 🔄 State Management

### Local State (useState)

```javascript
// Experiences.jsx
const [activeTab, setActiveTab] = useState('professional');

// Projects.jsx
const [selectedProject, setSelectedProject] = useState(null);

// ExperienceDetail.jsx
const [selectedSkill, setSelectedSkill] = useState(null);

// ProjectDetailModal.jsx
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [isImageOverlay, setIsImageOverlay] = useState(false);
```

**No Redux/Context API needed** - State is kept local to components.

## 🎬 Animation Strategy

### Framer Motion Patterns

1. **Page Entrance**
   ```javascript
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   ```

2. **Hover Effects**
   ```javascript
   whileHover={{ scale: 1.05 }}
   whileTap={{ scale: 0.95 }}
   ```

3. **Stagger Animations**
   ```javascript
   {items.map((item, index) => (
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.1 }}
     />
   ))}
   ```

4. **Modal Animations**
   ```javascript
   <AnimatePresence>
     {isOpen && (
       <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.9 }}
       />
     )}
   </AnimatePresence>
   ```

## 🛣️ Routing

### React Router DOM v6

```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/experiences" element={<Experiences />} />
    <Route path="/experiences/:id" element={<ExperienceDetail />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/socials" element={<Socials />} />
  </Routes>
</BrowserRouter>
```

### Navigation Methods

1. **Link Component** (Navbar)
   ```javascript
   <Link to="/about">About Me</Link>
   ```

2. **useNavigate Hook** (Programmatic)
   ```javascript
   const navigate = useNavigate();
   navigate('/experiences');
   ```

3. **URL Params** (ExperienceDetail)
   ```javascript
   const { id } = useParams();
   ```

## 🎯 Key Features Implementation

### 1. **Glassmorphism Navbar**

```javascript
// Navbar.jsx
className="glass-effect rounded-2xl"

// index.css
.glass-effect {
  @apply bg-white/5 backdrop-blur-glass border border-white/10;
}
```

### 2. **Tab Switching (Experiences)**

```javascript
const [activeTab, setActiveTab] = useState('professional');

const currentExperiences = activeTab === 'professional' 
  ? professionalExperiences 
  : organizationExperiences;

<motion.div key={activeTab}>  // Key prop memicu re-render animation
  {currentExperiences.map(...)}
</motion.div>
```

### 3. **Hover Card Expansion**

```javascript
// ExperienceCard.jsx
const [isHovered, setIsHovered] = useState(false);

<motion.div
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  style={{ height: isHovered ? '400px' : '300px' }}
/>
```

### 4. **Auto-Slide Carousel**

```javascript
// ProjectDetailModal.jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, 3000);
  return () => clearTimeout(timer);
}, [currentImageIndex]);
```

### 5. **Image Fallback**

```javascript
<img
  src={image}
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/...';
  }}
/>
```

## 🔧 Build & Optimization

### Vite Configuration

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/',  // Change for GitHub Pages
});
```

### Build Process

```
npm run build
  ↓
Vite bundles:
  ├── HTML minification
  ├── CSS optimization (Tailwind purge)
  ├── JS minification & tree-shaking
  ├── Asset optimization
  └── Code splitting
  ↓
Output: dist/ folder
```

### Performance Optimizations

1. **Code Splitting**
   - React.lazy() untuk dynamic imports (optional)
   - Vite automatic code splitting

2. **Image Loading**
   - Lazy loading (browser native)
   - Fallback placeholders
   - WebP format (recommended)

3. **CSS**
   - Tailwind CSS purge unused styles
   - PostCSS optimization
   - Critical CSS inlined

## 🧪 Testing Strategy

### Manual Testing Checklist

- [ ] All routes accessible
- [ ] Navigation works
- [ ] Hover effects work
- [ ] Modal open/close
- [ ] Carousel auto-slide & manual navigation
- [ ] Image loading & fallbacks
- [ ] Responsive on mobile, tablet, desktop
- [ ] Browser compatibility (Chrome, Firefox, Safari)

### Tools

- Chrome DevTools (F12)
- Lighthouse (Performance audit)
- React DevTools (Component tree)

## 🔐 Security Considerations

### 1. **External Links**

```javascript
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"  // Security best practice
/>
```

### 2. **Image Sources**

- All images self-hosted in `public/`
- Fallback to trusted CDN (placeholder.com)

### 3. **No Sensitive Data**

- No API keys in frontend code
- Use environment variables for any external services

## 📱 Responsive Design

### Breakpoints

```javascript
// Tailwind CSS breakpoints
sm: 640px   // Small devices
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
2xl: 1536px // Large screens
```

### Responsive Patterns

```javascript
// Grid columns
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Text sizes
className="text-xl md:text-2xl lg:text-3xl"

// Padding
className="px-4 md:px-6 lg:px-8"

// Flex direction
className="flex-col md:flex-row"
```

## 🚀 Deployment Architecture

```
Local Development
  ├── npm run dev (Vite dev server)
  └── http://localhost:5173

Production Build
  ├── npm run build
  └── dist/ folder

Deployment Options
  ├── Vercel (Serverless, Edge Network)
  ├── Netlify (JAMstack, CDN)
  ├── GitHub Pages (Static hosting)
  └── Railway (Container-based)
```

## 💡 Best Practices Implemented

1. **Single Source of Truth**: All data in `data.js`
2. **Component Reusability**: Shared components for cards, modals
3. **Consistent Naming**: camelCase for variables, PascalCase for components
4. **Error Handling**: Image fallbacks, route fallbacks
5. **Accessibility**: Semantic HTML, alt texts, keyboard navigation
6. **Performance**: Code splitting, lazy loading, optimized images
7. **Maintainability**: Clear folder structure, comprehensive documentation

## 🔄 Extensibility

### Adding New Page

1. Create `src/pages/NewPage.jsx`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`
4. Add data in `data.js` (if needed)

### Adding New Component

1. Create `src/components/NewComponent.jsx`
2. Import and use in page/component
3. Add props and documentation

### Adding New Feature

1. Plan component hierarchy
2. Update data structure in `data.js`
3. Create/update components
4. Add animations with Framer Motion
5. Test responsive design
6. Update documentation

## 📚 Further Reading

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Router Documentation](https://reactrouter.com)

---

**This architecture is designed for scalability, maintainability, and ease of customization.**
