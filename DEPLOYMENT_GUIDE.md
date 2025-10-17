# 🚀 GitHub Pages Deployment Guide

## ✅ Setup Complete!

I've configured your project for GitHub Pages deployment. Here's what to do:

---

## 📋 Deployment Steps

### **Step 1: Commit Changes**

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### **Step 2: Enable GitHub Pages** (One-time setup)

1. Go to your GitHub repository: **https://github.com/rudraprsd/byte-blend-lab**
2. Click **Settings** (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

### **Step 3: Trigger Deployment**

The workflow will run automatically when you push to `main` branch:

```bash
git push origin main
```

Or manually trigger it:
1. Go to **Actions** tab in your repo
2. Click **Deploy to GitHub Pages**
3. Click **Run workflow** → **Run workflow**

### **Step 4: Check Deployment Status**

1. Go to **Actions** tab
2. You'll see the deployment running
3. Wait 2-3 minutes for completion
4. Green checkmark ✅ = Success!

### **Step 5: Access Your Site**

Your site will be live at:
```
https://rudraprsd.github.io/byte-blend-lab/
```

---

## 🔧 What I've Configured

### **1. Vite Config Updated** (`vite.config.ts`)
```typescript
base: mode === 'production' ? '/byte-blend-lab/' : '/'
```
- Ensures all assets load correctly on GitHub Pages
- Uses `/byte-blend-lab/` prefix in production

### **2. GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on every push to `main`
- Uses Node.js 20
- Runs `npm ci` → `npm run build`
- Deploys `dist` folder to GitHub Pages

---

## 🛠️ Development vs Production

### **Local Development:**
```bash
npm run dev
# Runs at: http://localhost:8080
```

### **Build for Production:**
```bash
npm run build
# Creates dist/ folder with optimized build
```

### **Preview Production Build:**
```bash
npm run preview
# Preview the production build locally
```

---

## 📝 Deployment Checklist

Before deploying, make sure:

- [ ] All files are committed (`git status` should be clean)
- [ ] Build works locally (`npm run build`)
- [ ] No errors in console
- [ ] Images are in `/public` folder
- [ ] Create `/public/og-image.png` (1200x630px) for social previews
- [ ] Update social media URLs in `index.html` if needed

---

## 🚨 Common Issues & Fixes

### **Issue 1: 404 Page Not Found**
**Fix:** Make sure GitHub Pages source is set to "GitHub Actions", not "Deploy from a branch"

### **Issue 2: Assets not loading (CSS/JS 404)**
**Fix:** The `base: '/byte-blend-lab/'` in `vite.config.ts` should match your repo name exactly

### **Issue 3: Deployment fails in Actions**
**Fix:** Check the Actions log for errors. Common causes:
- `npm ci` fails → Delete `package-lock.json` and run `npm install` locally
- Build fails → Fix TypeScript/lint errors locally first

### **Issue 4: Old version shows after deployment**
**Fix:** Hard refresh your browser:
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

---

## 🔄 Update & Redeploy

Every time you make changes:

```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Update content"
git push origin main

# 4. Auto-deploys! Check Actions tab for progress
```

---

## 📊 Monitor Deployments

### **GitHub Actions Dashboard:**
1. Go to **Actions** tab
2. See all deployment runs
3. Click any run to see logs
4. Green ✅ = Success, Red ❌ = Failed

### **Deployment URL:**
After successful deployment, find the URL in:
- Actions → Latest workflow → Deploy job → Deploy to GitHub Pages step
- Or just go to: `https://rudraprsd.github.io/byte-blend-lab/`

---

## 🎯 Custom Domain (Optional)

Want to use your own domain (e.g., `rudraprsd.com`)?

### **Steps:**
1. Buy a domain (Namecheap, GoDaddy, Cloudflare)
2. Add `CNAME` record pointing to `rudraprsd.github.io`
3. Create `/public/CNAME` file with your domain:
   ```
   rudraprsd.com
   ```
4. In GitHub Settings → Pages, add custom domain
5. Wait for DNS propagation (5-30 minutes)

Then update all URLs in your code from:
```
https://rudraprsd.github.io/byte-blend-lab
```
to:
```
https://rudraprsd.com
```

---

## 🔐 Security

GitHub Pages automatically provides:
- ✅ HTTPS (SSL certificate)
- ✅ DDoS protection
- ✅ CDN (Content Delivery Network)

No extra configuration needed!

---

## 📈 After Deployment

### **Submit to Search Engines:**

**Google Search Console:**
1. Go to: https://search.google.com/search-console
2. Add property: `https://rudraprsd.github.io/byte-blend-lab`
3. Verify ownership (HTML file method or DNS)
4. Submit sitemap: `https://rudraprsd.github.io/byte-blend-lab/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to: https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap

---

## 🎉 Quick Deploy Now!

Run these commands:

```bash
# Make sure you're in the project directory
cd /home/rudra/imp/coding/07-website_project/portfolio/personal-site2/byte-blend-lab

# Commit the deployment configuration
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main

# ✅ That's it! Check Actions tab for deployment progress
```

---

## 📱 Share Your Site

Once deployed, share:
- Direct link: `https://rudraprsd.github.io/byte-blend-lab/`
- LinkedIn, Twitter, GitHub profile
- Resume, email signature
- Research papers, academic profiles

---

## 🆘 Need Help?

If deployment fails:
1. Check **Actions** tab for error logs
2. Ensure `package.json` scripts are correct
3. Run `npm run build` locally to test
4. Check this guide for common issues

Your site should be live in 3-5 minutes after pushing! 🚀

Good luck! 🎉
