# Agentic Protocol - Next.js Static Site

High-performance static site for agenticprotocol.ai

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build static site
npm run build

# Export static HTML
npm run export
```

## Deploy

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Done! Auto-deploys on push

### Option 2: Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

### Option 3: Manual (any static host)
```bash
npm run export
# Upload ./out directory to your server
```

## Structure

```
├── pages/
│   ├── index.tsx       # Homepage
│   ├── _app.tsx        # App wrapper
│   └── ...             # Other pages
├── styles/
│   └── globals.css     # Global styles
├── public/             # Static assets
└── out/                # Built static site (after export)
```

## Features

- ⚡ Static Site Generation (SSG)
- 📱 Fully Responsive
- 🎨 Modern Design
- 🚀 Optimized Performance
- 💯 SEO Ready
- 🔧 TypeScript
- 📦 Zero Runtime

## Adding Pages

Create new file in `pages/` directory:
```typescript
// pages/about.tsx
export default function About() {
  return <div>About Page</div>
}
```

Automatically available at `/about`

## Customization

- Colors: Edit CSS variables in `styles/globals.css`
- Content: Edit pages in `pages/` directory
- Layout: Edit `pages/_app.tsx`

Built with ❤️ by Cat 🐈‍⬛
