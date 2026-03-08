# Arthzone Technologies - Premium Website

An ultra-modern, visually stunning website built with cutting-edge web technologies and advanced animations.

## 🚀 Features

### Core Technologies
- ⚡ **Next.js 14** (App Router) - React framework with server-side rendering
- 🎨 **TypeScript** - Type-safe development
- 💅 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Smooth, declarative animations
- 🌈 **GSAP** - Advanced scroll-triggered animations
- 🎲 **Three.js** - 3D graphics and particle systems
- 🔄 **Lenis** - Buttery smooth scrolling

### Visual Features
- ✨ 3D animated particle background
- 🎯 Magnetic cursor with trailing effect
- 🌊 Smooth scroll with Lenis
- 📜 Scroll progress indicator
- 🎬 Animated preloader with percentage counter
- 🎪 3D rotating globe in About section
- 💳 Interactive 3D tilt cards for services
- 🎞️ Video testimonials with modal player
- 📊 Animated number counters
- 🎠 Infinite marquee for technologies
- 🎨 Gradient mesh backgrounds
- ⚡ Glassmorphism effects throughout
- 🌟 Custom animations and micro-interactions

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Setup Instructions

1. **Extract the project files**
   ```bash
   cd arthzone-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add Custom Fonts** (Optional but Recommended)
   
   Download these fonts and place in `/public/fonts/`:
   - Satoshi Variable: https://www.fontshare.com/fonts/satoshi
   - Clash Display Variable: https://www.fontshare.com/fonts/clash-display
   
   Or use alternative fonts by updating `app/layout.tsx`

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Customization Guide

### Content Updates

#### 1. Update Company Information
Edit content in component files:
- `components/sections/HeroSection.tsx` - Hero content
- `components/sections/AboutSection.tsx` - About text and stats
- `components/sections/ServicesSection.tsx` - Services array
- `components/sections/TestimonialsSection.tsx` - Client testimonials
- `components/sections/ContactSection.tsx` - Contact information

#### 2. Video Testimonials Setup

Replace placeholder video URLs in `components/sections/TestimonialsSection.tsx`:

```typescript
const testimonials = [
  {
    name: 'Client Name',
    position: 'Position',
    company: 'Company Name',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // YouTube
    // OR
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID', // Vimeo
    // OR
    videoUrl: '/videos/testimonial.mp4', // Local video file
  },
]
```

**Supported Video Formats:**
- YouTube embeds
- Vimeo embeds
- Direct video files (MP4, WebM)

#### 3. Portfolio Images

Add project images to `/public/portfolio/`:
- project1.jpg
- project2.jpg
- etc.

Update portfolio data in `components/sections/PortfolioSection.tsx`

#### 4. Color Scheme

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  electric: {
    blue: '#3b82f6',    // Change primary blue
    cyan: '#06b6d4',    // Change accent cyan
    purple: '#8b5cf6',  // Change purple accent
  },
}
```

### Advanced Customization

#### Particle Background
Modify particle count and behavior in `components/3D/ParticleBackground.tsx`:
```typescript
const particlesCount = 3000 // Adjust number of particles
```

#### Animation Speeds
Edit Tailwind animations in `tailwind.config.js`:
```javascript
animation: {
  'rotate-slow': 'rotateSlow 20s linear infinite', // Adjust duration
}
```

#### Smooth Scroll Settings
Adjust in `components/SmoothScroll.tsx`:
```typescript
const lenis = new Lenis({
  duration: 1.2,        // Scroll duration
  easing: (t) => ...,   // Easing function
})
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimization

- Lazy loading for images and components
- Code splitting with Next.js
- Optimized Three.js rendering
- Debounced scroll events
- GPU-accelerated animations

## 🔧 Technologies Used

### Frontend
- Next.js 14.2.0
- React 18.3.1
- TypeScript 5.4.0
- Tailwind CSS 3.4.0

### Animation & 3D
- Framer Motion 11.0.0
- GSAP 3.12.5
- Three.js 0.162.0
- @react-three/fiber 8.16.0
- @react-three/drei 9.102.0
- Lenis 1.0.42

### Development Tools
- PostCSS
- Autoprefixer
- ESLint

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 SEO Features

- Semantic HTML5
- Open Graph tags
- Twitter Cards
- Structured metadata
- Sitemap ready
- Performance optimized

## 🔒 Accessibility

- ARIA labels
- Keyboard navigation
- Screen reader friendly
- Color contrast compliant
- Focus indicators

## 📝 Project Structure

```
arthzone-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── 3D/
│   │   ├── ParticleBackground.tsx
│   │   └── RotatingGlobe.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── TechnologiesMarquee.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Preloader.tsx
│   ├── CustomCursor.tsx
│   ├── SmoothScroll.tsx
│   ├── ScrollProgress.tsx
│   ├── BackToTop.tsx
│   └── ServiceCard3D.tsx
├── public/
│   ├── fonts/              # Custom fonts
│   ├── portfolio/          # Project images
│   └── testimonials/       # Client images
└── tailwind.config.js      # Tailwind configuration
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Custom server with Node.js

## 💡 Tips for Best Results

1. **Use High-Quality Assets**: Replace placeholder images with professional photos
2. **Optimize Videos**: Compress video testimonials for faster loading
3. **Test Performance**: Use Lighthouse to ensure optimal scores
4. **Custom Domain**: Set up a custom domain for professional branding
5. **Analytics**: Add Google Analytics or similar tracking
6. **SSL Certificate**: Ensure HTTPS is enabled for security

## 🐛 Troubleshooting

### Issue: Animations not working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify all dependencies installed

### Issue: 3D elements not rendering
- Check WebGL support in browser
- Update graphics drivers
- Try different browser

### Issue: Slow performance
- Reduce particle count
- Optimize images
- Enable production build

## 📄 License

This project is proprietary. All rights reserved by Arthzone Technologies.

## 🤝 Support

For support, email hello@arthzone.tech or open an issue in the project repository.

---

**Built with ❤️ by Arthzone Technologies**
# arthzoneTech
# newArthzone
