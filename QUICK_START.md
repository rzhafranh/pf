# ⚡ Quick Start Guide

Panduan cepat untuk memulai menggunakan website portfolio ini.

## 🚀 Step 1: Install Dependencies

```bash
cd PortfolioWebsite
npm install
```

Tunggu hingga semua dependencies terinstall.

---

## 🎨 Step 2: Jalankan Development Server

```bash
npm run dev
```

Buka browser di: `http://localhost:5173`

Website sekarang berjalan di local! 🎉

---

## 📝 Step 3: Edit Data Anda

Buka file **`src/data.js`** dan cari semua placeholder dengan format `[NAMA_PLACEHOLDER]`.

### Quick Edit Checklist:

1. **Hero Section** (Landing Page)
   ```javascript
   export const heroData = {
     mainTitle: "[MAIN_TITLE_HERO]",  // ← Edit ini
     subtitle: "[SUBTITLE_HERO]",      // ← Edit ini
     description: "[DESKRIPSI_HERO]",  // ← Edit ini
   };
   ```

2. **About Me**
   - Photo path sudah benar (akan diganti nanti)
   - Name: "Raihan Zhafran" (sudah diisi)
   - Description: sudah diisi dengan bio Anda

3. **Professional Experiences**
   - Edit `professionalExperiences` array
   - Ada 3 template experiences
   - Setiap experience punya 6 skills

4. **Organizations & Events**
   - Edit `organizationExperiences` array
   - Ada 9 items (3 organizations, 6 events)

5. **Projects**
   - Edit `projectsData` array
   - Ada 6 project templates
   - Setiap project bisa punya multiple images

6. **Socials**
   - Edit `socialsData.socials` array
   - Update semua URL dengan link asli Anda

**Save file dan lihat perubahan langsung di browser!**

---

## 📸 Step 4: Tambahkan Gambar

1. Siapkan semua gambar Anda
2. Taruh di folder `public/images/`
3. Update path di `src/data.js`

**Contoh:**
```javascript
// Jika Anda taruh foto di: public/images/my-photo.jpg
// Maka di data.js:
photo: "/images/my-photo.jpg"
```

**Tips:** Lihat `public/images/README.md` untuk panduan lengkap.

---

## ✅ Step 5: Test Semua Fitur

Pastikan semuanya bekerja:

- [ ] Landing page muncul dengan baik
- [ ] Navigation bar berfungsi
- [ ] Bisa pindah ke halaman About, Experiences, Projects, Socials
- [ ] Hover pada Experience cards menampilkan detail
- [ ] Click Experience card membuka detail page
- [ ] Click skill card membuka modal
- [ ] Click project card membuka modal
- [ ] Carousel di project berfungsi (jika ada multiple images)
- [ ] Social media buttons berfungsi
- [ ] Responsive di mobile (F12 > Device Toolbar)

---

## 🚀 Step 6: Build & Deploy

### Build untuk Production

```bash
npm run build
```

Folder `dist/` akan dibuat berisi production files.

### Preview Production Build

```bash
npm run preview
```

### Deploy (Pilih salah satu)

**Option 1: Vercel** (Paling mudah)
1. Push ke GitHub
2. Connect repository di vercel.com
3. Auto-deploy! ✨

**Option 2: Netlify**
1. Drag & drop folder `dist/` ke netlify.com
2. Done! 🎉

**Option 3: GitHub Pages**
```bash
npm run deploy
```

**Lihat `DEPLOYMENT.md` untuk panduan lengkap!**

---

## 📚 File-File Penting

| File | Fungsi |
|------|--------|
| `src/data.js` | **DATA UTAMA** - Edit file ini untuk content |
| `src/App.jsx` | Main app component |
| `src/components/` | Komponen reusable |
| `src/pages/` | Halaman-halaman utama |
| `public/images/` | Folder untuk gambar |
| `tailwind.config.js` | Konfigurasi warna & styling |

---

## 🎨 Customization Cepat

### Ganti Warna Tema

Edit `tailwind.config.js`:

```javascript
colors: {
  'electric-blue': '#00D9FF',    // ← Ganti warna ini
  'electric-pink': '#FF0080',    // ← Dan ini
  'electric-purple': '#B026FF',  // ← Dan ini
}
```

### Ganti Font

1. Edit `index.html` - ganti Google Fonts URL
2. Edit `tailwind.config.js` - update fontFamily
3. Update `index.css` - import font baru

---

## 🐛 Troubleshooting

### Port 5173 sudah dipakai

```bash
npm run dev -- --port 3000
```

### Gambar tidak muncul

- Check path: harus dimulai dengan `/`
- Check file ada di `public/images/`
- Hard refresh browser: `Ctrl + Shift + R`

### Data tidak update

- Save file `data.js`
- Refresh browser
- Atau restart dev server: `Ctrl + C`, lalu `npm run dev` lagi

### Build error

```bash
rm -rf node_modules
npm install
npm run build
```

---

## 📖 Dokumentasi Lengkap

- **`README.md`** - Overview & features
- **`DATA_GUIDE.md`** - Panduan detail pengisian data
- **`DEPLOYMENT.md`** - Panduan deploy ke hosting
- **`public/images/README.md`** - Panduan gambar

---

## 💡 Tips Pro

1. **Edit step by step**: Jangan edit semua sekaligus. Edit per section dan test.

2. **Backup data**: Copy `data.js` sebelum edit besar-besaran.

3. **Gunakan Git**: 
   ```bash
   git init
   git add .
   git commit -m "Initial setup"
   ```

4. **Mobile first**: Selalu test di mobile view (F12 > Toggle device toolbar).

5. **Optimize images**: Compress semua gambar sebelum upload.

---

## 🎯 Development Workflow

```
1. Edit data.js
   ↓
2. Save & check browser
   ↓
3. Add images
   ↓
4. Test all features
   ↓
5. Build & deploy
   ↓
6. 🎉 Website live!
```

---

## ⏱️ Estimasi Waktu

- **Setup & Install**: 5 menit
- **Edit Data**: 30-60 menit
- **Add Images**: 15-30 menit
- **Testing**: 15 menit
- **Deploy**: 10 menit

**Total: 1-2 jam untuk website portfolio yang complete!**

---

## 🆘 Need Help?

1. Check `README.md` untuk overview
2. Check `DATA_GUIDE.md` untuk data details
3. Check console browser (F12) untuk error messages
4. Google error messages yang muncul

---

## ✨ Selamat!

Anda sekarang punya portfolio website yang:
- ✅ Modern & Interactive
- ✅ Fully Responsive
- ✅ Fast & Optimized
- ✅ Easy to customize
- ✅ Ready to deploy

**Next steps:**
- Customize dengan style Anda sendiri
- Add more projects
- Share dengan dunia! 🌍

---

**Happy building! 🚀**

*Jika ada pertanyaan, jangan ragu untuk explore code dan dokumentasi!*
