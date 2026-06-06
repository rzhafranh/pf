# 📊 Panduan Lengkap Pengisian Data

Dokumen ini menjelaskan secara detail cara mengisi data untuk website portfolio Anda.

## 📍 Lokasi File Data

File utama yang perlu Anda edit: **`src/data.js`**

## 🎯 Bagian 1: Hero Section (Landing Page)

```javascript
export const heroData = {
  mainTitle: "Creative Developer & Designer",
  subtitle: "Building Digital Experiences",
  description: "I craft beautiful and functional websites with modern technologies",
};
```

**Penjelasan:**
- `mainTitle`: Judul utama yang akan ditampilkan dengan gradient neon
- `subtitle`: Sub-judul di bawah main title
- `description`: Deskripsi singkat tentang Anda

---

## 👤 Bagian 2: About Me

```javascript
export const aboutData = {
  name: "Raihan Zhafran",
  photo: "/images/profile.jpg",  // Simpan foto di public/images/
  description: "UI/UX Designer and System Developer..."  // Tetap atau ganti
};
```

**Cara menambahkan foto:**
1. Siapkan foto Anda (rekomendasi: 400x400px, format JPG/PNG)
2. Simpan di folder `public/images/`
3. Update path di `photo`: `/images/nama-foto-anda.jpg`

---

## 💼 Bagian 3: Professional Experiences

Template untuk 1 professional experience:

```javascript
{
  id: "prof-1",                    // ID unik, jangan sama
  type: "professional",            // Jangan diubah
  title: "Senior Frontend Developer",
  company: "PT Tech Indonesia",
  period: "January 2024 - Present",
  image: "/images/company-logo.jpg",
  shortDescription: "Leading frontend development team to build scalable web applications using React and modern web technologies.",
  fullDescription: "As a Senior Frontend Developer, I lead a team of 5 developers in creating enterprise-level web applications. Responsibilities include architecture design, code review, mentoring junior developers, and implementing best practices for performance optimization.",
  skills: [
    {
      id: "skill-1",
      name: "React Development",
      image: "/images/react-skill.jpg",
      description: "Mastered React.js including hooks, context API, and performance optimization. Built multiple production applications serving thousands of users.",
      gallery: [
        "/images/react-project-1.jpg",
        "/images/react-project-2.jpg",
        "/images/react-project-3.jpg"
      ]
    },
    // ... tambahkan 5 skills lainnya (total 6 skills)
  ]
}
```

**Tips:**
- Setiap professional experience **wajib punya 6 skills**
- Jika tidak punya 6 skills, bisa dikurangi dengan menghapus object skill dari array
- Gallery di skills **opsional** (bisa kosong: `gallery: []`)
- Jika ada gallery, akan muncul carousel. Jika tidak, hanya 1 foto besar

**Ukuran gambar yang disarankan:**
- `image` (company/experience): 600x400px
- `skills[].image`: 400x200px
- `skills[].gallery[]`: 800x600px

---

## 🎓 Bagian 4: Organizations & Events

Format sama seperti Professional, tapi dengan type berbeda:

```javascript
{
  id: "org-1",
  type: "organization",  // atau "event"
  title: "Head of Technology",
  company: "Computer Science Student Association",
  period: "January 2023 - December 2023",
  image: "/images/org-logo.jpg",
  shortDescription: "Leading technology division...",
  fullDescription: "...",
  skills: [...]  // Optional, bisa diisi atau kosong []
}
```

**Perbedaan type:**
- `"organization"`: Badge hijau dengan teks "EXPERIENCE"
- `"event"`: Badge biru dengan teks "EVENT"

**Default template:**
- Organizations: 3 items
- Events: 6 items
- Total: 9 cards untuk tab "Organizations & Events"

---

## 🚀 Bagian 5: Projects

Template untuk 1 project:

```javascript
{
  id: "project-1",
  type: "uiux",  // Options: "uiux", "coding", "webdev", "data"
  title: "E-Commerce Mobile App Design",
  subtitle: "Fashion Shopping App UI/UX",
  year: "2024",
  images: [
    "/images/project-1-screen-1.jpg",
    "/images/project-1-screen-2.jpg",
    "/images/project-1-screen-3.jpg"
  ],
  description: "Designed a complete e-commerce mobile application focused on fashion products. The design includes user flow, wireframes, high-fidelity mockups, and interactive prototypes. The app features seamless shopping experience with intuitive navigation and modern aesthetics.",
}
```

**Project Types & Warna Badge:**
- `"uiux"`: 🟣 Purple - "UI/UX & GRAPHIC DESIGN"
- `"coding"`: ⚪ Gray - "CODING & PROGRAMMING"
- `"webdev"`: 🟠 Orange - "WEB DEVELOPMENT"
- `"data"`: 🟡 Yellow - "DATA"

**Fitur Images (Carousel):**
- Bisa 1 gambar atau lebih
- Jika lebih dari 1, akan muncul:
  - Auto-slide setiap 3 detik
  - Arrow navigation (kiri/kanan)
  - Dot indicators di bawah
  - Click gambar untuk full-screen view

**Ukuran gambar yang disarankan:**
- Horizontal/Landscape: 1200x800px
- Vertical/Portrait: 800x1200px
- Square: 1000x1000px

---

## 📱 Bagian 6: Socials

```javascript
export const socialsData = {
  photo: "/images/profile.jpg",  // Bisa sama dengan About Me
  message: "Get in touch with me!",
  socials: [
    {
      id: "social-1",
      name: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: "linkedin"
    },
    {
      id: "social-2",
      name: "GitHub",
      url: "https://github.com/username",
      icon: "github"
    },
    // ... tambahkan sebanyak yang Anda mau
  ]
};
```

**Available Icons:**
- `"linkedin"` - LinkedIn icon
- `"github"` - GitHub icon
- `"instagram"` - Instagram icon
- `"mail"` - Email icon
- `"twitter"` - Twitter/X icon
- `"facebook"` - Facebook icon
- `"youtube"` - YouTube icon
- `"dribbble"` - Dribbble (globe icon)
- `"behance"` - Behance (globe icon)
- Any other: Default external link icon

---

## 📝 Contoh Lengkap - Satu Professional Experience

```javascript
{
  id: "prof-1",
  type: "professional",
  title: "UI/UX Designer",
  company: "Digital Creative Studio",
  period: "March 2023 - December 2024",
  image: "/images/studio-office.jpg",
  shortDescription: "Designed user interfaces for mobile and web applications, conducted user research, and created design systems for multiple clients across various industries.",
  fullDescription: "As a UI/UX Designer at Digital Creative Studio, I was responsible for the entire design process from research to final implementation. I collaborated with product managers, developers, and stakeholders to create user-centered designs that improve user satisfaction and business metrics. My work includes user interviews, wireframing, prototyping, usability testing, and creating comprehensive design documentation.",
  skills: [
    {
      id: "skill-1",
      name: "User Research",
      image: "/images/user-research.jpg",
      description: "Conducted extensive user research including interviews, surveys, and usability testing with over 100 participants. Created user personas, journey maps, and empathy maps to guide design decisions.",
      gallery: [
        "/images/research-persona.jpg",
        "/images/research-journey.jpg",
        "/images/research-testing.jpg"
      ]
    },
    {
      id: "skill-2",
      name: "Wireframing",
      image: "/images/wireframe.jpg",
      description: "Created low and high-fidelity wireframes for 15+ projects using Figma. Established consistent layout patterns and navigation structures.",
      gallery: []
    },
    {
      id: "skill-3",
      name: "Prototyping",
      image: "/images/prototype.jpg",
      description: "Built interactive prototypes to validate design concepts before development. Used Figma's advanced prototyping features including auto-animate and smart animate.",
      gallery: []
    },
    {
      id: "skill-4",
      name: "Design Systems",
      image: "/images/design-system.jpg",
      description: "Developed and maintained design systems for 5 major clients. Created component libraries with variants, auto-layout, and comprehensive documentation.",
      gallery: []
    },
    {
      id: "skill-5",
      name: "Visual Design",
      image: "/images/visual-design.jpg",
      description: "Crafted beautiful user interfaces following modern design trends. Expertise in typography, color theory, and creating cohesive visual languages.",
      gallery: []
    },
    {
      id: "skill-6",
      name: "Collaboration",
      image: "/images/collaboration.jpg",
      description: "Worked closely with cross-functional teams using tools like Figma, Miro, and Slack. Facilitated design workshops and sprint planning sessions.",
      gallery: []
    }
  ]
}
```

---

## 🎨 Tips & Best Practices

### 1. **Menulis Deskripsi yang Baik**

**Short Description (untuk card hover):**
- 1-2 kalimat
- Highlight achievement atau responsibility utama
- Sekitar 100-150 karakter

**Full Description (untuk detail page):**
- 1 paragraf penuh
- Jelaskan role, responsibility, dan achievement
- Sekitar 300-500 karakter

### 2. **Memilih Gambar**

**DO ✅:**
- Gunakan gambar berkualitas tinggi
- Format JPG untuk foto, PNG untuk logo/grafis
- Compress gambar untuk web (gunakan tools seperti TinyPNG)
- Gunakan nama file yang deskriptif: `company-google.jpg` bukan `IMG_001.jpg`

**DON'T ❌:**
- Jangan gunakan gambar terlalu besar (>1MB per gambar)
- Hindari gambar blur atau pixelated
- Jangan gunakan gambar dengan watermark

### 3. **Mengorganisir Folder Images**

Struktur folder yang disarankan:

```
public/
├── images/
│   ├── profile.jpg
│   ├── experiences/
│   │   ├── company-1.jpg
│   │   ├── company-2.jpg
│   │   └── skills/
│   │       ├── skill-1.jpg
│   │       └── skill-2.jpg
│   ├── projects/
│   │   ├── project-1-1.jpg
│   │   ├── project-1-2.jpg
│   │   └── project-2-1.jpg
│   └── placeholder.jpg
```

Path di data.js akan jadi:
```javascript
image: "/images/experiences/company-1.jpg"
```

### 4. **Testing Data**

Setelah mengisi data:
1. Jalankan `npm run dev`
2. Cek setiap halaman
3. Pastikan semua gambar muncul
4. Test hover effect dan modal
5. Test responsive di mobile view (F12 > Device Toolbar)

---

## 🔧 Troubleshooting

### Gambar tidak muncul
**Problem:** Path salah atau file tidak ada

**Solution:**
```javascript
// ❌ SALAH
image: "images/photo.jpg"           // Tidak ada slash di depan
image: "./images/photo.jpg"         // Tidak perlu ./
image: "public/images/photo.jpg"    // Jangan include 'public'

// ✅ BENAR
image: "/images/photo.jpg"          // Benar!
```

### Data tidak ter-update
**Problem:** Browser cache

**Solution:**
1. Hard refresh: `Ctrl + Shift + R` (Windows) atau `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart dev server

### Error: Cannot find module
**Problem:** Import path salah atau komponen tidak ada

**Solution:**
- Pastikan semua file di folder yang benar
- Check typo di import statement

---

## 📞 Need Help?

Jika masih ada yang membingungkan:
1. Baca README.md di root folder
2. Check console browser untuk error messages (F12 > Console)
3. Lihat contoh data yang sudah ada di `data.js`

---

**Happy Coding! 🚀**
