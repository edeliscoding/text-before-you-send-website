# Text Before You Send - Landing Page

A modern, high-converting landing page for the Text Before You Send iOS app built with Next.js.

## Features

- **Sticky Navigation** - Always accessible header with branding and CTA
- **Hero Section** - Split-screen layout with headline and app screenshot placeholder
- **Social Proof** - Trusted companies section with grayscale logos
- **Benefits Section** - Zig-zag layout showcasing 3 key features with images
- **Pricing** - 3 pricing tiers with highlighted "Most Popular" option
- **FAQ** - Interactive accordion with 5 common questions
- **Responsive Design** - Optimized for all device sizes
- **Modern Aesthetic** - Purple gradient backgrounds, serif fonts, premium feel

## Design Highlights

- **Color Scheme**: Purple gradients (#5a2c8a to #8a4fb8) with white text
- **Typography**: Georgia/Garamond serif fonts for headings (editorial look)
- **CTA Colors**: High-contrast coral/salmon (#ff6b6b) for buttons
- **Effects**: Glass-morphism, smooth animations, hover states
- **Layout**: Fully responsive grid system

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main landing page
├── components/
│   ├── Navigation.tsx      # Sticky header
│   ├── Hero.tsx            # Hero section
│   ├── SocialProof.tsx     # Social proof strip
│   ├── Benefits.tsx        # Benefits zig-zag
│   ├── Pricing.tsx         # Pricing cards
│   ├── FAQ.tsx             # FAQ accordion
│   └── Footer.tsx          # Footer
└── styles/
    ├── globals.css         # Global styles
    └── home.css            # Component styles
public/
├── images/                 # Image assets
└── logos/                  # Company logos
```

## Customization Guide

### Update App Store Link

Edit the `handleGetApp()` function in:

- `src/components/Navigation.tsx`
- `src/app/page.tsx`

Update the URL:

```typescript
window.open("https://apps.apple.com/us/app/YOUR-APP/idXXXXXXXXXX", "_blank");
```

### Add Real Images

1. Place screenshot images in `public/images/`
2. Update image paths in components:
   - Hero: `src/components/Hero.tsx`
   - Benefits: `src/components/Benefits.tsx`

### Update Content

- **Headlines & Copy**: Edit component files in `src/components/`
- **Pricing Tiers**: Update `src/components/Pricing.tsx`
- **FAQ Items**: Update `src/components/FAQ.tsx`
- **Company Logos**: Update `src/components/SocialProof.tsx`

### Customize Colors

Edit in `src/styles/globals.css` and `src/styles/home.css`:

```css
/* Main gradient */
background: linear-gradient(135deg, #5a2c8a 0%, #7d3fa1 50%, #8a4fb8 100%);

/* CTA Button */
background: linear-gradient(135deg, #ff6b6b 0%, #ff8e72 100%);
```

### Fonts

The design uses:

- **Headings**: Georgia, Garamond, serif
- **Body**: System fonts (auto-optimized by Next.js)

To use custom fonts, add to `src/app/layout.tsx`:

```typescript
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
```

## Performance Optimization

- Automatic image optimization with Next.js Image component
- CSS minification
- Code splitting per route
- SEO-friendly metadata

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

Works with any Node.js hosting:

- Netlify
- GitHub Pages
- AWS Amplify
- Custom servers

## Customization Tips for High Conversion

1. **Hero Image**: Use real app screenshots or demo videos
2. **Social Proof**: Replace placeholder logos with actual client logos
3. **Benefits**: Add specific use cases relevant to your audience
4. **Pricing**: Research competitor pricing and adjust accordingly
5. **FAQ**: Answer questions from real user feedback
6. **CTA Text**: Test different button copy ("Download", "Get App", "Try Free")
7. **Copy Tone**: Match your brand voice throughout

## Analytics Integration

Add your preferred analytics:

```typescript
// In src/app/layout.tsx
import Script from "next/script";

// Add Google Analytics, Mixpanel, etc.
<Script src="https://..." strategy="afterInteractive" />;
```

## License

Proprietary - Text Before You Send

## Support

For questions about customization, visit the Next.js documentation:

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)

---

Built with ❤️ for Text Before You Send
