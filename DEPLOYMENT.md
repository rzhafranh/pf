# 🚀 Panduan Deployment

Dokumen ini menjelaskan cara deploy website portfolio Anda ke berbagai platform hosting.

## 📦 Persiapan Sebelum Deploy

### 1. Build Production

```bash
npm run build
```

Perintah ini akan membuat folder `dist/` yang berisi file-file production-ready.

### 2. Test Production Build

```bash
npm run preview
```

Buka `http://localhost:4173` untuk melihat preview production build.

### 3. Checklist Sebelum Deploy

- ✅ Semua data sudah diisi di `src/data.js`
- ✅ Semua gambar sudah ada di `public/images/`
- ✅ Website berjalan normal di `npm run dev`
- ✅ Production build berhasil (`npm run build`)
- ✅ Semua link social media sudah benar
- ✅ Website sudah di-test di mobile view

---

## 🌐 Option 1: Vercel (Recommended)

**Kelebihan:**
- Gratis untuk personal projects
- Deploy otomatis dari GitHub
- CDN global yang cepat
- HTTPS otomatis
- Custom domain gratis

### Langkah-langkah:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Sign in dengan GitHub
   - Click "Add New Project"
   - Import repository Anda
   - Framework Preset akan terdeteksi otomatis sebagai "Vite"
   - Click "Deploy"

3. **Konfigurasi (Optional)**
   - Setelah deploy, bisa tambahkan custom domain
   - Settings > Domains > Add Domain

**Vercel akan auto-deploy setiap kali ada push ke GitHub!** 🎉

---

## 🔷 Option 2: Netlify

**Kelebihan:**
- Gratis untuk personal projects
- Drag & drop deployment
- Form handling built-in
- Custom domain gratis

### Langkah-langkah:

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

   **Atau Deploy via Website:**
   - Buka [netlify.com](https://netlify.com)
   - Drag & drop folder `dist/` ke Netlify
   - Website langsung live!

3. **Deploy from GitHub (Recommended)**
   - Push code ke GitHub
   - Netlify > "Add new site" > "Import from Git"
   - Pilih repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

---

## 🎯 Option 3: GitHub Pages

**Kelebihan:**
- Gratis selamanya
- Langsung terintegrasi dengan GitHub
- URL: `username.github.io/repo-name`

### Langkah-langkah:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Tambahkan di bagian paling atas (setelah `name`):
   ```json
   "homepage": "https://username.github.io/portfolio",
   ```
   
   Tambahkan di `scripts`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Ganti 'portfolio' dengan nama repo Anda
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Buka repository di GitHub
   - Settings > Pages
   - Source: `gh-pages` branch
   - Save

Website akan live di `https://username.github.io/portfolio`

---

## ☁️ Option 4: Railway

**Kelebihan:**
- Free tier yang generous
- Support untuk banyak framework
- Auto-deploy dari GitHub

### Langkah-langkah:

1. **Push ke GitHub** (seperti di Vercel)

2. **Deploy to Railway**
   - Buka [railway.app](https://railway.app)
   - Sign in dengan GitHub
   - "New Project" > "Deploy from GitHub repo"
   - Pilih repository Anda
   - Railway akan detect Vite otomatis

3. **Settings**
   - Build Command: `npm run build`
   - Start Command: `npm run preview`
   
Website akan dapat Railway URL yang bisa di-custom.

---

## 🔧 Custom Domain Setup

Setelah deploy, Anda bisa menambahkan custom domain (contoh: `raihanzhafran.com`)

### Untuk Vercel:
1. Settings > Domains
2. Add domain Anda
3. Update DNS di domain registrar:
   - Type: `CNAME`
   - Name: `www` atau `@`
   - Value: `cname.vercel-dns.com`

### Untuk Netlify:
1. Domain settings > Add custom domain
2. Update DNS:
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site.netlify.app`

### Untuk GitHub Pages:
1. Settings > Pages > Custom domain
2. Input domain Anda
3. Update DNS:
   - Type: `A` record
   - Name: `@`
   - Value: 
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Type: `CNAME`
   - Name: `www`
   - Value: `username.github.io`

**Note:** DNS propagation bisa memakan waktu 24-48 jam.

---

## 🐛 Troubleshooting Deployment

### 1. Build Error: "Cannot find module"

**Problem:** Dependencies tidak terinstall

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 2. Blank Page After Deploy

**Problem:** Base URL salah (terutama di GitHub Pages)

**Solution:** Check `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Untuk Vercel/Netlify
  // atau
  base: '/repo-name/', // Untuk GitHub Pages
})
```

### 3. Images Not Loading

**Problem:** Path gambar salah

**Solution:**
- Pastikan semua path dimulai dengan `/`: `/images/photo.jpg`
- Jangan gunakan path relative: `./images/photo.jpg` ❌
- Gambar harus ada di folder `public/`

### 4. 404 Error on Refresh

**Problem:** React Router tidak dikonfigurasi di hosting

**Solution untuk Netlify:**
Buat file `public/_redirects`:
```
/*    /index.html   200
```

**Solution untuk Vercel:**
Buat file `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 5. Build Time Too Long

**Problem:** Gambar terlalu besar

**Solution:**
- Compress semua gambar
- Gunakan format WebP untuk web
- Maksimal 500KB per gambar

---

## 📊 Performance Optimization

### 1. Image Optimization

**Compress Images:**
- Tools: TinyPNG, Squoosh, ImageOptim
- Target: < 200KB per gambar

**Convert to WebP:**
```bash
# Install cwebp (one time)
# Windows: download from Google WebP site
# Mac: brew install webp

# Convert images
cwebp -q 80 input.jpg -o output.webp
```

### 2. Lazy Loading

Sudah built-in di React untuk images. Tapi bisa tambahkan untuk components:

```javascript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./pages/Projects'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
    </Suspense>
  );
}
```

### 3. Check Performance

Setelah deploy, test dengan:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Target:
- ✅ Performance: > 90
- ✅ Accessibility: > 90
- ✅ Best Practices: > 90
- ✅ SEO: > 90

---

## 🔐 Environment Variables

Jika punya API keys atau sensitive data:

### 1. Local Development

Buat file `.env.local`:
```
VITE_API_KEY=your-api-key-here
VITE_ANALYTICS_ID=GA-123456
```

Gunakan di code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

### 2. Production (Vercel)

- Project Settings > Environment Variables
- Add Name dan Value
- Redeploy

**Note:** Prefix harus `VITE_` untuk bisa diakses di client-side.

---

## 📈 Analytics Setup (Optional)

### Google Analytics

1. Buat GA4 property di [analytics.google.com](https://analytics.google.com)
2. Install package:
   ```bash
   npm install react-ga4
   ```
3. Initialize di `App.jsx`:
   ```javascript
   import ReactGA from 'react-ga4';
   
   ReactGA.initialize('G-XXXXXXXXXX');
   ```

### Vercel Analytics

Built-in untuk Vercel deployment, tinggal enable di dashboard.

---

## ✅ Post-Deployment Checklist

- [ ] Website accessible di public URL
- [ ] All pages load correctly
- [ ] All images display properly
- [ ] Navigation works on all pages
- [ ] Responsive design works on mobile
- [ ] Social links work dan open in new tab
- [ ] No console errors (F12 > Console)
- [ ] Performance score > 90 (PageSpeed Insights)
- [ ] HTTPS enabled (green padlock)
- [ ] Custom domain configured (if applicable)

---

## 🎉 Congratulations!

Website portfolio Anda sudah live dan dapat diakses dari mana saja!

**Next Steps:**
- Share link dengan teman dan keluarga
- Add ke LinkedIn profile
- Submit ke portfolio showcases
- Keep updating dengan project terbaru

---

**Need Help?** Check documentation dari platform hosting yang Anda pilih:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Railway Docs](https://docs.railway.app)
