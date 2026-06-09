# Portfolio Website - Raihan Zhafran

Portfolio website modern dan interaktif yang dibangun dengan React, Vite, Tailwind CSS, dan Framer Motion.

## 🚀 Tech Stack

- **Framework**: React 18 dengan Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📁 Struktur Folder

```
PortfolioWebsite/
├── public/               
├── src/
│   ├── components/       
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ExperienceCard.jsx
│   │   ├── SkillCard.jsx
│   │   ├── SkillDetailModal.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectDetailModal.jsx
│   ├── pages/           
│   │   ├── About.jsx
│   │   ├── Experiences.jsx
│   │   ├── ExperienceDetail.jsx
│   │   ├── Projects.jsx
│   │   └── Socials.jsx
│   ├── data.js         
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

## 🎨 Tema Warna

Website menggunakan tema Dark Mode dengan aksen neon:

- **Background**: `#0A0A0F` (dark-bg)
- **Card**: `#15151F` (dark-card)
- **Electric Blue**: `#00D9FF`
- **Electric Purple**: `#B026FF`
- **Electric Pink**: `#FF0080`
- **Neon Green**: `#39FF14`
- **Neon Yellow**: `#FFFF00`

## 📝 Cara Mengisi Data

### 1. Edit file `src/data.js`

File ini berisi semua data untuk website. Cari dan ganti semua placeholder yang diberi tanda `[NAMA_PLACEHOLDER]`.

#### Hero Section
```javascript
export const heroData = {
  mainTitle: "[MAIN_TITLE_HERO]",  // Ganti dengan judul utama
  subtitle: "[SUBTITLE_HERO]",      // Ganti dengan subtitle
  description: "[DESKRIPSI_HERO]",  // Ganti dengan deskripsi
};
```

#### Professional Experiences
```javascript
export const professionalExperiences = [
  {
    id: "prof-1",
    type: "professional",
    title: "[NAMA_POSISI_1]",              // Contoh: "Senior Frontend Developer"
    company: "[NAMA_PERUSAHAAN_1]",        // Contoh: "Tech Company Inc."
    period: "[PERIODE_1]",                  // Contoh: "January 2023 - December 2023"
    image: "/placeholder-prof-1.jpg",       // Path ke gambar
    shortDescription: "[DESKRIPSI_SINGKAT]", // 1-2 kalimat
    fullDescription: "[DESKRIPSI_LENGKAP]",  // 1 paragraf lengkap
    skills: [...]                            // Array skills yang dipelajari
  }
];
```

#### Organizations & Events
Sama seperti professional experiences, tapi dengan type: "organization" atau "event"

#### Projects
```javascript
export const projectsData = [
  {
    id: "project-1",
    type: "uiux",  // Options: "uiux", "coding", "webdev", "data"
    title: "[JUDUL_PROJECT]",
    subtitle: "[SUBTITLE_PROJECT]",
    year: "2025",
    images: [
      "/placeholder-project-1-1.jpg",  // Array gambar untuk carousel
      "/placeholder-project-1-2.jpg",
    ],
    description: "[DESKRIPSI_PROJECT]",
  }
];
```

#### Socials
```javascript
export const socialsData = {
  photo: "/placeholder-profile.jpg",
  message: "Get in touch with me!",
  socials: [
    {
      id: "social-1",
      name: "LinkedIn",
      url: "[URL_LINKEDIN]",  // Ganti dengan URL asli
      icon: "linkedin"
    },
    // ... social media lainnya
  ]
};
```

### 2. Menambahkan Gambar

1. Simpan semua gambar di folder `public/`
2. Update path di `src/data.js` sesuai dengan nama file gambar
3. Contoh: jika menyimpan foto di `public/images/profile.jpg`, maka path-nya: `/images/profile.jpg`

**Rekomendasi ukuran gambar:**
- Profile Photo: 300x300px (square)
- Experience Cards: 400x300px (landscape)
- Project Images: 800x600px (landscape)
- Skill Images: 300x150px (landscape)

## 🎯 Fitur-Fitur

### 1. **Landing Page (Hero Section)**
- Judul dan subtitle yang dapat disesuaikan
- Animasi gradient text dengan efek neon
- Elemen dekoratif blur balls

### 2. **Navigation Bar**
- Floating glassmorphism navbar
- Logo "RZ" yang mengarah ke landing page
- 4 menu utama: About Me, Experiences, Projects, Socials

### 3. **About Me**
- Foto profil dengan frame circular
- Deskripsi lengkap profil
- Layout responsive untuk desktop dan mobile

### 4. **Experiences**
- Tab switching antara "Professional" dan "Organizations & Events"
- Card dengan hover effect untuk menampilkan deskripsi
- Click untuk membuka detail page
- Detail page dengan skills grid
- Skill cards yang bisa diklik untuk modal detail

### 5. **Projects**
- Grid layout untuk semua project
- Color-coded badges berdasarkan tipe project:
  - 🟣 Purple: UI/UX & Graphic Design
  - ⚪ Gray: Coding & Programming
  - 🟠 Orange: Web Development
  - 🟡 Yellow: Data
- Click untuk membuka modal detail
- Image carousel dengan auto-slide (3 detik)
- Full-screen image preview

### 6. **Socials**
- Profile photo
- List social media dengan icons
- Hover animation pada buttons
- External link indicator

## 🚦 Cara Menjalankan

### Development Mode

```bash
cd PortfolioWebsite
npm install
npm run dev
```

Buka browser di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

File production akan ada di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

Website sudah fully responsive dengan breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Tips Customization

### Mengubah Warna Tema

Edit file `tailwind.config.js` bagian `colors`:

```javascript
colors: {
  'electric-blue': '#00D9FF',    // Ubah sesuai keinginan
  'electric-pink': '#FF0080',
  'electric-purple': '#B026FF',
  // ... dst
}
```

### Menambah/Mengurangi Experience atau Project

Edit array di `src/data.js`:
- `professionalExperiences` - untuk professional experiences
- `organizationExperiences` - untuk organizations & events
- `projectsData` - untuk projects

Tinggal tambah atau hapus object di array tersebut.

### Mengubah Font

Font default: Plus Jakarta Sans

Untuk mengubah, edit di `tailwind.config.js`:

```javascript
fontFamily: {
  'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
  // Tambah font lain di sini
}
```

## 🐛 Troubleshooting

### Gambar tidak muncul
- Pastikan path gambar benar di `data.js`
- Gambar harus ada di folder `public/`
- Path harus diawali dengan `/`

### Animation tidak smooth
- Pastikan Framer Motion sudah terinstall
- Cek console browser untuk error

### Styling tidak muncul
- Jalankan `npm install` ulang
- Pastikan Tailwind CSS config sudah benar
- Clear browser cache

## 📞 Support

Jika ada pertanyaan atau issue, silakan create issue di repository atau hubungi melalui social media yang tercantum di website.

## 📄 License

MIT License - Feel free to use this template for your personal portfolio!

---

**Dibuat dengan ❤️ menggunakan React + Vite + Tailwind CSS**
