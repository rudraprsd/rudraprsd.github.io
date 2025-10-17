# 🔄 Migrating to rudraprsd.github.io

## ✅ Configuration Updated!

I've updated all the necessary files for your new repository name `rudraprsd.github.io`.

---

## 📋 What Changed

### **1. Vite Config (`vite.config.ts`)**
- ✅ Changed from: `base: '/byte-blend-lab/'`
- ✅ Changed to: `base: '/'` (root path)
- **Why?** User sites (username.github.io) deploy to root, not a subdirectory

### **2. HTML Meta Tags (`index.html`)**
- ✅ All URLs updated to: `https://rudraprsd.github.io/`
- ✅ Fixed double slashes in og:image URLs
- ✅ Canonical URL updated

### **3. Sitemap & Robots**
- ✅ Already using correct URLs
- ✅ No changes needed

---

## 🚀 Migration Steps

### **Step 1: Rename Your Repository on GitHub**

1. Go to your repository: **https://github.com/rudraprsd/byte-blend-lab**
2. Click **Settings**
3. Scroll to **Repository name**
4. Change to: **rudraprsd.github.io**
5. Click **Rename**

### **Step 2: Update Local Git Remote**

```bash
cd /home/rudra/imp/coding/07-website_project/portfolio/personal-site2/byte-blend-lab

# Update remote URL
git remote set-url origin https://github.com/rudraprsd/rudraprsd.github.io.git

# Verify
git remote -v
```

### **Step 3: Commit and Push**

```bash
# Commit the configuration changes
git add .
git commit -m "Update config for rudraprsd.github.io"
git push origin main
```

### **Step 4: Enable GitHub Pages**

1. Go to: **https://github.com/rudraprsd/rudraprsd.github.io/settings/pages**
2. Under **Source**, select: **GitHub Actions**
3. Save

### **Step 5: Wait for Deployment**

- Go to **Actions** tab
- Watch the deployment (2-3 minutes)
- Green checkmark ✅ = Success!

---

## 🎯 Your New URL

After deployment, your site will be at:
```
https://rudraprsd.github.io/
```

**Benefits:**
- ✅ Cleaner URL (no `/byte-blend-lab/` suffix)
- ✅ Professional-looking
- ✅ Better for SEO
- ✅ Easier to remember and share

---

## 🔄 Old vs New URLs

| Old | New |
|-----|-----|
| `https://rudraprsd.github.io/byte-blend-lab/` | `https://rudraprsd.github.io/` |
| `https://rudraprsd.github.io/byte-blend-lab/projects` | `https://rudraprsd.github.io/projects` |
| `https://rudraprsd.github.io/byte-blend-lab/blog` | `https://rudraprsd.github.io/blog` |

---

## 📁 Optional: Rename Local Directory

If you want to rename your local folder too:

```bash
cd /home/rudra/imp/coding/07-website_project/portfolio/personal-site2/

# Rename the directory
mv byte-blend-lab rudraprsd.github.io

# Navigate to new location
cd rudraprsd.github.io
```

---

## ⚠️ Important Notes

### **GitHub Pages User Site Rules:**

1. ✅ Repository MUST be named: `username.github.io` (in your case: `rudraprsd.github.io`)
2. ✅ Deploys to root: `https://rudraprsd.github.io/`
3. ✅ Only ONE user site per GitHub account
4. ✅ Project sites (other repos) will deploy as subdirectories

### **If You Have Other Projects:**

Other repos like `my-project` will deploy to:
```
https://rudraprsd.github.io/my-project/
```

Your main site (`rudraprsd.github.io`) stays at root.

---

## 🧪 Testing After Migration

### **1. Test Locally**
```bash
npm run build
npm run preview
# Should work at http://localhost:4173/
```

### **2. Test Routing**
After deployment, check:
- ✅ Homepage: https://rudraprsd.github.io/
- ✅ Projects: https://rudraprsd.github.io/projects
- ✅ Blog: https://rudraprsd.github.io/blog
- ✅ Individual pages work
- ✅ Images load correctly
- ✅ Links work

### **3. Test Social Sharing**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

## 🔍 Update Search Engines

After the migration:

### **Google Search Console:**
1. Add new property: `https://rudraprsd.github.io`
2. Submit new sitemap: `https://rudraprsd.github.io/sitemap.xml`
3. (Optional) Request removal of old URLs

### **Bing Webmaster:**
1. Add new site
2. Submit sitemap

---

## ✅ Post-Migration Checklist

- [ ] Repository renamed to `rudraprsd.github.io`
- [ ] Local git remote updated
- [ ] Changes committed and pushed
- [ ] GitHub Pages configured (source: GitHub Actions)
- [ ] Deployment successful (check Actions tab)
- [ ] Site accessible at https://rudraprsd.github.io/
- [ ] All pages load correctly
- [ ] Images and assets load
- [ ] Navigation works
- [ ] Social sharing works (test with debuggers)
- [ ] Submit new sitemap to search engines

---

## 🆘 Troubleshooting

### **Issue: 404 Page Not Found**
**Solution:** 
- Make sure repository is named exactly: `rudraprsd.github.io`
- GitHub Pages source set to "GitHub Actions"
- Wait 5 minutes after first deployment

### **Issue: Assets (CSS/JS) not loading**
**Solution:**
- Check `vite.config.ts` has `base: '/'`
- Clear browser cache (Ctrl+Shift+R)

### **Issue: Old URL still appears**
**Solution:**
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear browser cache
- Try incognito/private mode

### **Issue: GitHub Pages not deploying**
**Solution:**
- Check Actions tab for errors
- Ensure workflow file exists: `.github/workflows/deploy.yml`
- Run `npm run build` locally to test

---

## 🎉 All Set!

Your site is now configured for `rudraprsd.github.io`. 

**Next steps:**
1. Rename the repo on GitHub
2. Update git remote locally
3. Push changes
4. Deploy!

Your professional portfolio will be live at:
```
https://rudraprsd.github.io/
```

Good luck! 🚀
