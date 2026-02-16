# Deployment Guide for agenticprotocol.ai

## Quick Deploy (5 minutes)

### Option 1: Vercel (Easiest - FREE)

1. **Push to GitHub:**
```bash
cd /home/node/.openclaw/workspace/agenticprotocol/nextjs-site
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

2. **Deploy to Vercel:**
- Go to https://vercel.com
- Click "Import Project"
- Select your GitHub repo
- Done! Gets https://agenticprotocol.vercel.app

3. **Custom Domain:**
- In Vercel dashboard: Settings → Domains
- Add `agenticprotocol.ai`
- Update DNS (Vercel will show you what records to add)
- SSL auto-configured

**Total time: 5 minutes**

---

### Option 2: Netlify (Also FREE)

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
- Go to https://netlify.com
- Click "Add new site" → "Import an existing project"
- Connect GitHub
- Build settings:
  - Build command: `npm run build`
  - Publish directory: `out`
- Deploy!

3. **Custom Domain:**
- Site settings → Domain management
- Add custom domain `agenticprotocol.ai`
- Update DNS

---

### Option 3: Build and Upload (Manual)

If you have access to agenticprotocol.ai server:

```bash
cd /home/node/.openclaw/workspace/agenticprotocol/nextjs-site

# Install dependencies
npm install

# Build static site
npm run export

# Upload ./out directory to your server
# Example with rsync:
rsync -avz out/ user@agenticprotocol.ai:/var/www/html/

# Or with SCP:
scp -r out/* user@agenticprotocol.ai:/var/www/html/
```

---

## DNS Configuration

Point `agenticprotocol.ai` to your deployment:

### For Vercel:
```
A record: 76.76.21.21
CNAME www: cname.vercel-dns.com
```

### For Netlify:
```
A record: 75.2.60.5
CNAME www: your-site.netlify.app
```

### For Custom Server:
```
A record: YOUR_SERVER_IP
```

---

## Environment Variables (if needed)

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.agenticprotocol.ai
```

---

## Performance Optimizations

Already included:
- ✅ Static generation
- ✅ Image optimization disabled (for static export)
- ✅ Minified CSS/JS
- ✅ No runtime dependencies

Expected performance:
- **Lighthouse Score:** 95-100
- **First Load:** <1s
- **Time to Interactive:** <2s

---

## Troubleshooting

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run export
```

**Styles not loading:**
- Check `pages/_app.tsx` imports `globals.css`
- Clear browser cache

**404 on routes:**
- Ensure you're using `<Link>` from `next/link`
- Check file names in `pages/` directory

---

## Next Steps After Deploy

1. ✅ Verify site loads at agenticprotocol.ai
2. ✅ Test all links
3. ✅ Check mobile responsiveness
4. ✅ Set up analytics (Google Analytics, Plausible)
5. ✅ Add email signup integration
6. ✅ Configure contact form
7. ✅ Set up monitoring (UptimeRobot)

---

## Recommended: Vercel

**Why Vercel:**
- Built by Next.js creators
- Zero configuration
- Auto SSL
- Global CDN
- Auto previews for PRs
- Free for personal projects
- Best performance

**Deploy now:** https://vercel.com/new

---

Need help? Contact: IronMan 🐈‍⬛
