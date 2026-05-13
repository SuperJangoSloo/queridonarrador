# Cinematic Premium Portfolio Website

## 🎬 Overview

A stunning, modern portfolio website built for video editors and content creators. Features a dark luxury aesthetic with smooth animations, glassmorphism effects, and Apple-like transitions.

## ✨ Features

- **Cinematic Hero Section** - Engaging landing section with parallax effects
- **Dark Luxury Aesthetic** - Professional dark color palette with red accents
- **Smooth Animations** - Framer Motion powered animations throughout
- **Glassmorphism Effects** - Modern glass-like UI elements
- **Portfolio Showcase** - Grid-based project display with hover effects
- **Services Section** - Detailed breakdown of offered services
- **Contact Form** - Fully functional contact form
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Social Media Integration** - Easy linking to social profiles

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **UI Components**: React

## 📋 Project Structure

```
.
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Footer.tsx            # Footer component
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Portfolio.tsx     # Portfolio/Projects
│       ├── Services.tsx      # Services section
│       └── Contact.tsx       # Contact section
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    900: '#0a0a0a',  // Primary background
    800: '#1a1a1a',  // Secondary background
    700: '#2d2d2d',  // Tertiary background
    600: '#404040',  // Borders
  },
  accent: {
    red: '#dc2626',        // Primary accent
    red_hover: '#b91c1c',  // Hover state
  },
}
```

### Content

1. **Personal Info**: Update contact details in `components/sections/Contact.tsx`
2. **Social Links**: Modify links in `components/Footer.tsx`
3. **Projects**: Update portfolio items in `components/sections/Portfolio.tsx`
4. **Services**: Edit services list in `components/sections/Services.tsx`
5. **About Text**: Update bio in `components/sections/About.tsx`

### Images

Replace placeholder images:
- Add your portfolio images to `public/`
- Update image paths in components
- Use Next.js `Image` component for optimization

## 📧 Contact Form Integration

The contact form is currently a frontend-only implementation. To enable email functionality:

1. **Option A**: Use a service like Formspree, EmailJS, or Netlify Forms
2. **Option B**: Create a backend API endpoint to handle form submissions
3. **Option C**: Use a serverless function (Firebase, Vercel Functions, etc.)

Update `handleSubmit` in `components/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Add your form submission logic here
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

**Build command:**
```bash
npm run build
```

**Start command:**
```bash
npm run start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance Optimizations

- Image optimization with Next.js
- CSS minification via Tailwind
- Code splitting with Next.js
- Lazy loading of components
- Smooth scrolling optimization

## 📄 License

MIT License - feel free to use this template for your portfolio

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

For issues or questions, please open an issue on GitHub or reach out via the contact form.

---

**Built with ❤️ for video creators**
