# 🎨 Visual Guide - UI Components

Dokumentasi visual untuk semua komponen dan interaksi di website portfolio.

---

## 🏠 Hero Section (Landing Page)

### Layout Structure
```
┌─────────────────────────────────────────┐
│                                         │
│         [Floating Navbar]               │
│                                         │
│                                         │
│     ╔══════════════════════╗           │
│     ║   MAIN TITLE         ║           │
│     ║   (Gradient Neon)    ║           │
│     ╚══════════════════════╝           │
│                                         │
│         Subtitle Text                   │
│                                         │
│     Description paragraph here          │
│     with multiple lines of text         │
│                                         │
│  ┌────────┐ ┌────────┐ ┌────────┐     │
│  │About Me│ │Exper...│ │Projects│     │
│  └────────┘ └────────┘ └────────┘     │
│              ┌────────┐                │
│              │Socials │                │
│              └────────┘                │
│                                         │
│        ○  ○  ○  (Blur decorations)    │
│                                         │
└─────────────────────────────────────────┘
```

### Navigation Buttons

#### Default State:
```
┌─────────────┐
│  About Me   │  ← Gradient text (Blue→Purple→Pink)
└─────────────┘     Font: Bold, 1.25rem
                    Background: Transparent
```

#### Hover State:
```
┌─────────────┐
│  About Me   │  ← White text
└─────────────┘     Lifted up (-5px)
     ▼              Glow effect behind
   (glow)           Smooth transition (0.3s)
```

#### Click State:
```
┌─────────────┐
│  About Me   │  ← Scale down (0.95)
└─────────────┘     Then navigate to page
```

### Color Scheme:
- **Gradient**: `#00D9FF` → `#B026FF` → `#FF0080`
- **Hover Text**: `#FFFFFF` (white)
- **Glow**: rgba(gradient colors, 0.1) with blur

---

## 👤 About Me Page

### Layout
```
┌─────────────────────────────────────────┐
│                                         │
│         [Floating Navbar]               │
│                                         │
│          About Me (Title)               │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │   ┌───────┐  │  Hi! I am       │  │
│  │   │       │  │  RAIHAN ZHAFRAN │  │
│  │   │ Photo │  │                  │  │
│  │   │       │  │  Bio text here  │  │
│  │   └───────┘  │  continues...   │  │
│  │              │                  │  │
│  └──────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Features:
- Circular photo frame (border: Electric Blue)
- Vertical divider line
- Gradient name text
- Glassmorphism card background

---

## 💼 Experiences Page

### Tab Navigation
```
┌─────────────────────────────────────────┐
│                                         │
│         Experiences (Title)             │
│                                         │
│  ┌─────────────┐   ┌─────────────┐    │
│  │Professional │   │Organizations│     │
│  │   (Active)  │   │  & Events   │     │
│  └─────────────┘   └─────────────┘     │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Card 1│  │Card 2│  │Card 3│         │
│  └──────┘  └──────┘  └──────┘         │
│                                         │
│  Hover for Details, Click for More     │
│                                         │
└─────────────────────────────────────────┘
```

### Experience Card States

#### Default (300px height):
```
┌─────────────────────┐
│  [RED BADGE]        │  ← PROFESSIONAL
│                     │
│  Position Title     │
│  Company Name       │
│                     │
│  [Background Image] │
│  [30% Black Overlay]│
└─────────────────────┘
```

#### Hover (400px height):
```
┌─────────────────────┐
│  [RED BADGE]        │  ← PROFESSIONAL
│                     │
│  Position Title     │
│  Company Name       │
│                     │
│  Short description  │  ← Appears
│  text here...       │
│                     │
│  ┌───────────────┐  │
│  │   Details     │  │  ← Appears
│  └───────────────┘  │
└─────────────────────┘
```

### Badge Colors:
- 🔴 **Professional**: Red background, white text "PROFESSIONAL"
- 🟢 **Organization**: Green background, white text "EXPERIENCE"  
- 🔵 **Event**: Blue background, white text "EVENT"

---

## 🎨 Experience Detail Page

### Skills Grid
```
┌─────────────────────────────────────────┐
│  ← Back                                 │
│                                         │
│  [BADGE] TITLE (ALL CAPS)              │
│  Period: Month - Month Year            │
│                                         │
│  Full description paragraph...          │
│                                         │
│  SKILLS                                 │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Skill1│  │Skill2│  │Skill3│         │
│  └──────┘  └──────┘  └──────┘         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Skill4│  │Skill5│  │Skill6│         │
│  └──────┘  └──────┘  └──────┘         │
│                                         │
└─────────────────────────────────────────┘
```

### Skill Card Interaction:
```
Default → Hover → Click

┌──────┐    ┌──────┐     ┌────────────────┐
│Skill │    │Skill │     │ [Modal Opens]  │
│      │ →  │ ↑    │  →  │                │
└──────┘    └──────┘     │ Image Gallery  │
                         │ or Single Pic   │
                         │                │
                         │ Skill Name     │
                         │ Description... │
                         │                │
                         │      [X]       │
                         └────────────────┘
```

---

## 🚀 Projects Page

### Grid Layout
```
┌─────────────────────────────────────────┐
│                                         │
│            Projects (Title)             │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Proj 1│  │Proj 2│  │Proj 3│         │
│  │Purple│  │ Gray │  │Orange│         │
│  └──────┘  └──────┘  └──────┘         │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Proj 4│  │Proj 5│  │Proj 6│         │
│  │Yellow│  │Purple│  │Orange│         │
│  └──────┘  └──────┘  └──────┘         │
│                                         │
└─────────────────────────────────────────┘
```

### Project Card:
```
┌──────────────────┐
│ [Purple Badge]   │  ← UI/UX & GRAPHIC DESIGN
│                  │
│  Project Title   │
│  2024           │
│                  │
│ [Bg Image 30%]  │
└──────────────────┘

Hover: Card lifts up (-8px)
Click: Opens modal with carousel
```

### Badge Colors:
- 🟣 **UI/UX**: Purple - "UI/UX & GRAPHIC DESIGN"
- ⚪ **Coding**: Gray - "CODING & PROGRAMMING"
- 🟠 **Web Dev**: Orange - "WEB DEVELOPMENT"
- 🟡 **Data**: Yellow - "DATA"

---

## 📱 Socials Page - NEW 2 Column Layout!

### Desktop Layout (≥768px):
```
┌─────────────────────────────────────────┐
│                                         │
│            Socials (Title)              │
│                                         │
│            ┌─────────┐                  │
│            │  Photo  │                  │
│            └─────────┘                  │
│                                         │
│      Get in touch with me!              │
│                                         │
│  ┌──────────────┐  ┌──────────────┐   │
│  │ 👤 LinkedIn  │  │ 💻 GitHub    │   │
│  └──────────────┘  └──────────────┘   │
│                                         │
│  ┌──────────────┐  ┌──────────────┐   │
│  │ 📷 Instagram │  │ ✉️  Email     │   │
│  └──────────────┘  └──────────────┘   │
│                                         │
│  ┌──────────────┐  ┌──────────────┐   │
│  │ 🎨 Dribbble  │  │ 🎭 Behance   │   │
│  └──────────────┘  └──────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout (<768px):
```
┌──────────────────────┐
│                      │
│   Socials (Title)    │
│                      │
│     ┌─────────┐      │
│     │  Photo  │      │
│     └─────────┘      │
│                      │
│ Get in touch with me!│
│                      │
│ ┌──────────────────┐ │
│ │ 👤 LinkedIn      │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ 💻 GitHub        │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ 📷 Instagram     │ │
│ └──────────────────┘ │
│                      │
│ (continues...)       │
│                      │
└──────────────────────┘
```

### Social Card Interaction:

#### Default:
```
┌────────────────────────┐
│ [Icon] LinkedIn    →   │  ← White bg
└────────────────────────┘
```

#### Hover:
```
┌────────────────────────┐
│ [Icon] LinkedIn    →   │  ← Electric Blue bg
└────────────────────────┘     Lifts up (-3px)
       ▼                       Glow shadow
    (glow)
```

#### Active:
```
┌────────────────────────┐
│ [Icon] LinkedIn    →   │  ← Slightly scaled down
└────────────────────────┘     Then opens link
```

---

## 🎭 Modals & Overlays

### Skill Detail Modal:
```
┌─────────────────────────────────────┐
│                                 [X] │
│  ╔═══════════════════════════════╗ │
│  ║                               ║ │
│  ║   [Image/Carousel]            ║ │
│  ║                               ║ │
│  ╚═══════════════════════════════╝ │
│                                     │
│  Skill Name                         │
│                                     │
│  Description text here continues    │
│  with multiple lines explaining     │
│  the skill in detail...             │
│                                     │
└─────────────────────────────────────┘

Background: Dark overlay (60% black)
Click outside: Closes modal
```

### Project Detail Modal:
```
┌─────────────────────────────────────┐
│                                 [X] │
│  ╔═══════════════════════════════╗ │
│  ║                               ║ │
│  ║   [← Carousel →]              ║ │
│  ║                               ║ │
│  ║   ● ● ○ ○ ○                  ║ │
│  ╚═══════════════════════════════╝ │
│                                     │
│  Project Title                      │
│  Project Subtitle                   │
│                                     │
│  [Purple Badge]  2024               │
│                                     │
│  Description paragraph...           │
│                                     │
└─────────────────────────────────────┘

Auto-slide: Every 3 seconds
Manual: Arrow buttons or dots
Click image: Full-screen preview
```

---

## 🎨 Color Reference

### Primary Colors:
```
Electric Blue:    #00D9FF  ████
Electric Purple:  #B026FF  ████
Electric Pink:    #FF0080  ████
Neon Green:       #39FF14  ████
Neon Yellow:      #FFFF00  ████
```

### Background Colors:
```
Dark BG:          #0A0A0F  ████
Dark Card:        #15151F  ████
Dark Elevated:    #1F1F2E  ████
```

### Text Colors:
```
White:            #FFFFFF  ████
White 90%:        rgba(255,255,255,0.9)
White 80%:        rgba(255,255,255,0.8)
White 70%:        rgba(255,255,255,0.7)
White 50%:        rgba(255,255,255,0.5)
```

### Shadows & Glows:
```
Glow Blue:    0 0 20px rgba(0, 217, 255, 0.5)
Glow Pink:    0 0 20px rgba(255, 0, 128, 0.5)
Glow Purple:  0 0 20px rgba(176, 38, 255, 0.5)
```

---

## 📐 Spacing & Sizing

### Container Sizes:
- Hero/About: `max-w-6xl`
- Socials: `max-w-4xl` (updated from 2xl)
- Projects: `max-w-7xl`
- Experiences: `max-w-7xl`

### Card Heights:
- Experience Card (default): `300px`
- Experience Card (hover): `400px`
- Project Card: `320px`
- Skill Card: `128px`

### Border Radius:
- Cards: `1rem` (16px)
- Buttons: `0.75rem` (12px)
- Circular elements: `9999px`

### Grid Systems:
- Experience Grid: `3 columns` (desktop)
- Projects Grid: `3 columns` (desktop)
- Skills Grid: `3 columns` (always)
- **Socials Grid: `2 columns` (desktop)** ← NEW!

---

## 🎬 Animation Timings

### Durations:
- Quick: `0.3s` (hover, button interactions)
- Standard: `0.5s` (page transitions, card movements)
- Slow: `0.8s` (entrance animations, hero text)
- Auto-slide: `3s` (carousel)

### Easing:
- Default: `ease` or `cubic-bezier(0.4, 0, 0.6, 1)`
- Entrance: Gradual fade + slide up
- Exit: Quick fade out

### Stagger:
- Grid items: `0.1s` delay per item
- Hero buttons: `0.1s` delay per button

---

## 🔤 Typography

### Font Family:
```
Plus Jakarta Sans (all weights)
- Thin: 200
- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700
- ExtraBold: 800
```

### Text Sizes:
```
Hero Title:       5xl - 8xl (80px - 128px)
Page Title:       5xl (48px)
Hero Subtitle:    2xl - 4xl (24px - 36px)
Card Title:       2xl (24px)
Button Text:      xl (20px)
Body Text:        lg (18px)
Small Text:       sm (14px)
Badge Text:       xs (12px)
```

### Text Styles:
- **Neon Text**: `text-shadow: 0 0 10px currentColor`
- **Gradient Text**: `bg-clip-text text-transparent`
- **Uppercase**: Used for titles in detail pages

---

## 📱 Responsive Breakpoints

```
Mobile:    < 768px    (sm)
Tablet:    768px      (md)
Laptop:    1024px     (lg)
Desktop:   1280px     (xl)
Large:     1536px     (2xl)
```

### Behavior Changes:
- **< 768px**: 
  - All grids → 1 column
  - Navbar compacts
  - Text sizes reduce
  - Padding/margin tighten

- **≥ 768px**:
  - Experience → 2 columns
  - Projects → 2 columns
  - **Socials → 2 columns** ← NEW!
  - Full navbar

- **≥ 1024px**:
  - Experience → 3 columns
  - Projects → 3 columns
  - **Socials → 2 columns** (maintained)
  - Larger text
  - More spacing

---

## 💡 Interaction Patterns

### Click Targets:
- Minimum size: `44x44px` (accessibility)
- Cards: Full card clickable
- Buttons: Full button clickable
- Links: Include icon + text

### Hover Effects:
- **Lift**: `-2px` to `-8px` translateY
- **Scale**: `1.02` to `1.1`
- **Glow**: Add shadow with color
- **Color**: Change background or text

### Loading States:
- Placeholder images: via.placeholder.com
- Fallback: Colored background + text
- Smooth fade-in when loaded

### Error States:
- Image errors: Fallback placeholder
- Route errors: Not Found message
- Form errors: Inline validation

---

**Document Version**: 1.1  
**Last Updated**: June 2, 2026  
**Author**: Kiro AI
