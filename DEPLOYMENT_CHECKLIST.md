# 📋 GitHub Pages Deployment Checklist

Complete this checklist before uploading to GitHub.

## ✅ Pre-Deployment Checks

### Files & Content
- [ ] All portfolio files are in `/home/soni-lap/Music/soni-website/`
- [ ] `index.html` is in the root directory
- [ ] `style.css` is in the root directory
- [ ] `script.js` is in the root directory
- [ ] `.gitignore` file is present
- [ ] `README.md` is complete and updated
- [ ] `GITHUB_PAGES_SETUP.md` guide is present

### Portfolio Content
- [ ] Your name is correct in all sections
- [ ] Email address is updated
- [ ] GitHub username is correct in links
- [ ] LinkedIn profile URL is updated
- [ ] All external links work
- [ ] Projects list is accurate
- [ ] Articles section has correct links
- [ ] Contact information is current

### Testing
- [ ] Website works at `http://localhost:8000`
- [ ] All navigation links work
- [ ] Project filters work (Web, ML, Security, Tools)
- [ ] Contact form validates input
- [ ] Responsive design works on mobile
- [ ] Responsive design works on tablet
- [ ] All animations are smooth
- [ ] No console errors (F12)
- [ ] Load time is acceptable

### Security & Optimization
- [ ] No sensitive information in code
- [ ] No API keys in JavaScript
- [ ] No passwords in files
- [ ] Font Awesome CDN link is secure (https)
- [ ] All external links use https
- [ ] No console.log statements left
- [ ] Code is clean and commented

---

## 🔧 Setup Steps

### Step 1: Git Configuration (One Time)
```bash
# Configure Git with your info
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Step 2: Initialize Repository
```bash
cd /home/soni-lap/Music/soni-website

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Rename to main branch
git branch -M main
```

### Step 3: Create GitHub Repository
1. Visit https://github.com/new
2. Repository name: `portfolio`
3. Description: "My AI & Web Developer Portfolio"
4. Choose Public (so it can be accessed)
5. **Skip** initializing with README/gitignore
6. Click "Create repository"

### Step 4: Push to GitHub
```bash
# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 6: Verify Live Site
- Wait 1-2 minutes for GitHub to build
- Visit: `https://YOUR_USERNAME.github.io/portfolio`
- Your portfolio is now live! 🎉

---

## 📝 Regular Updates

After making changes:

```bash
# See what changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Update: description of changes"

# Push to GitHub
git push
```

Site updates automatically (usually within 1 minute).

---

## 🆘 Troubleshooting

### Issue: "fatal: not a git repository"
**Solution:** Make sure you're in the portfolio directory
```bash
cd /home/soni-lap/Music/soni-website
git status
```

### Issue: "remote origin already exists"
**Solution:** Update existing remote
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/portfolio.git
```

### Issue: "Site not showing"
**Solution:** 
1. Wait 2-3 minutes for GitHub to build
2. Check Settings > Pages shows "Your site is live at..."
3. Make sure main branch is selected
4. Verify files are pushed: `git log`

### Issue: "Old content showing"
**Solution:**
1. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Or open in incognito/private window
3. Check `git push` completed successfully

### Issue: "404 errors for CSS/JS"
**Solution:** 
1. Verify file paths are relative, not absolute
2. Check file names match exactly (case-sensitive)
3. Verify CSS/JS links in `index.html` are correct

---

## 📚 Useful Git Commands

```bash
# View current status
git status

# View changes
git diff

# View commit history
git log --oneline -5

# Undo last change (before commit)
git checkout -- filename.html

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View all branches
git branch -a

# Switch branch
git checkout branch-name
```

---

## 🔒 Best Practices

1. **Never commit sensitive data:**
   - No API keys
   - No passwords
   - No personal tokens

2. **Write clear commit messages:**
   - "Add new projects" ✅
   - "Update contact info" ✅
   - "Fix" ❌
   - "asdf" ❌

3. **Commit frequently:**
   - After each significant change
   - Makes it easier to track changes
   - Can revert specific commits if needed

4. **Test before pushing:**
   - Verify locally first
   - Check in multiple browsers
   - Test on mobile

---

## 📊 Repository Structure (Final)

```
portfolio/
├── index.html                 # Main website
├── style.css                  # Styling
├── script.js                  # Interactive features
├── assets/                    # Images folder
├── .gitignore                 # Git ignore rules
├── README.md                  # Project overview
├── GITHUB_PAGES_SETUP.md      # Setup guide
├── DEPLOYMENT_CHECKLIST.md    # This file
├── github-setup.sh            # Setup script
└── .git/                      # Git repository (auto-created)
```

---

## ✨ After Going Live

1. **Share your portfolio:**
   - LinkedIn: `https://YOUR_USERNAME.github.io/portfolio`
   - Twitter/X
   - Portfolio in resume/CV

2. **Monitor for issues:**
   - Check site regularly
   - Test links occasionally
   - Update projects and articles

3. **Keep content fresh:**
   - Add new projects
   - Update articles
   - Keep experience current

4. **Optional: Add custom domain:**
   - Buy domain (Namecheap, GoDaddy, etc.)
   - Point to GitHub Pages
   - Set in Settings > Pages

---

## 🎉 Congratulations!

Your portfolio is now live on GitHub Pages!

**Portfolio URL:** `https://YOUR_USERNAME.github.io/portfolio`

Share it with:
- Employers
- Recruiters
- Friends & family
- On social media
- In your CV/resume

Good luck! 🚀

---

**Questions?** Check `GITHUB_PAGES_SETUP.md` for detailed instructions.
