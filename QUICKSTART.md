# 🚀 Quick Start Guide - Arthzone Website

## Instant Setup (3 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: http://localhost:3000

## 🎯 First Customizations

### Update Your Content (Priority Order):

1. **Contact Information** → `components/sections/ContactSection.tsx`
   - Email address
   - Phone number
   - Physical address

2. **Hero Section** → `components/sections/HeroSection.tsx`
   - Main heading text
   - Subheading
   - Call-to-action text

3. **About Section** → `components/sections/AboutSection.tsx`
   - Company description
   - Stats (projects, clients, etc.)

4. **Services** → `components/sections/ServicesSection.tsx`
   - Service titles and descriptions
   - Features list

5. **Testimonials** → `components/sections/TestimonialsSection.tsx`
   - Replace video URLs with actual client videos
   - Update client names and companies

## 📹 Video Testimonials Setup

### Option 1: YouTube Videos
```typescript
videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
```

### Option 2: Vimeo Videos
```typescript
videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID'
```

### Option 3: Local Videos
```typescript
videoUrl: '/videos/testimonial.mp4'
```
Place video files in `/public/videos/`

## 🎨 Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  electric: {
    blue: '#YOUR_COLOR',
    cyan: '#YOUR_COLOR',
    purple: '#YOUR_COLOR',
  },
}
```

## 📝 SEO Updates

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Company Name',
  description: 'Your description',
  // ... more metadata
}
```

## 🔗 Navigation Links

Edit `components/Navigation.tsx`:
```typescript
const navLinks = [
  { name: 'About', href: '#about' },
  // Add/remove links as needed
]
```

## 📱 Production Build

```bash
npm run build
npm start
```

## 🐛 Common Issues

**Issue**: Module not found
**Fix**: Run `npm install` again

**Issue**: Port 3000 in use
**Fix**: Use different port: `npm run dev -- -p 3001`

**Issue**: Styles not loading
**Fix**: Clear `.next` folder and restart

## 🎬 Animation Controls

### Disable Animations (if needed)
In each component, comment out Framer Motion animations:
```typescript
// initial={{ opacity: 0, y: 60 }}
// animate={{ opacity: 1, y: 0 }}
```

### Adjust Speed
Change duration values:
```typescript
transition={{ duration: 0.8 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

## 📚 Need Help?

1. Check README.md for detailed documentation
2. Review component comments
3. Check Next.js documentation: https://nextjs.org/docs
4. Check Framer Motion docs: https://www.framer.com/motion/

---

**You're all set! Happy coding! 🎉**
