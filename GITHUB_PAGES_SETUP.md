# GitHub Pages Setup Guide

Complete step-by-step guide to deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- GitHub account (free at https://github.com)
- Git installed on your computer
- Your portfolio files ready

## 🚀 Step-by-Step Setup

### Step 1: Initialize Git Repository

```bash
cd /home/soni-lap/Music/soni-website

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Rename branch to main
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create repository named: `portfolio` (or any name you want)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 3: Connect Local Repository to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Verify remote
git remote -v
# Should show:
# origin  https://github.com/YOUR_USERNAME/portfolio.git (fetch)
# origin  https://github.com/YOUR_USERNAME/portfolio.git (push)

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` branch
   - **Folder:** Select `/ (root)`
5. Click **Save**

Your site will build in a few seconds. Once ready, you'll see:
> "Your site is live at https://YOUR_USERNAME.github.io/portfolio"

### Step 5: Access Your Portfolio

Visit: `https://YOUR_USERNAME.github.io/portfolio`

Your portfolio is now live! 🎉

---

## 🔄 Making Updates

After making changes to your portfolio:

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Update portfolio with new projects"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild your site with the new changes (usually within seconds).

---

## 🎯 Alternative: Use Custom Domain (Optional)

If you have a custom domain:

1. Go to repository **Settings > Pages**
2. Under "Custom domain", enter your domain (e.g., `yourname.com`)
3. Update your domain's DNS records to point to GitHub:
   - Type: `A`
   - Value: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or follow GitHub's instructions

---

## 📁 Troubleshooting

### Site not showing up?

1. Verify GitHub Pages is enabled:
   - Settings > Pages > Should show "Your site is live at..."
   
2. Check branch is correct:
   - Make sure `main` branch is selected
   - Make sure files are pushed to `main`

3. Clear cache and reload:
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or visit in incognito/private window

### Old content showing?

```bash
# Make sure everything is pushed
git push

# Clear GitHub's cache
git push --force origin main
```

⚠️ **Use `--force` only if necessary, as it overwrites history**

### Getting 404 errors?

1. Verify file paths are correct
2. Check that `index.html` is in root directory
3. Make sure CSS/JS file links are relative paths
4. Look at GitHub Pages build log:
   - Settings > Pages > Check for any error messages

### Port already in use?

If port 8000 is already in use:

```bash
# Use a different port
python3 -m http.server 8001

# Or kill process using port 8000
lsof -ti:8000 | xargs kill -9
```

---

## 🛠️ Git Commands Cheat Sheet

```bash
# View status
git status

# View changes
git diff

# Add specific file
git add filename.html

# Add all files
git add .

# Commit with message
git commit -m "Your message"

# Push to GitHub
git push

# Pull from GitHub
git pull

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

---

## 📚 Additional Resources

- **GitHub Docs:** https://docs.github.com/en/pages
- **Git Tutorial:** https://git-scm.com/doc
- **GitHub Help:** https://github.com/contact

---

## ✅ Checklist

Before pushing to GitHub:

- [ ] All files are in `/home/soni-lap/Music/soni-website/`
- [ ] `index.html` is in root directory
- [ ] `style.css` and `script.js` are in root directory
- [ ] `.gitignore` file is created
- [ ] `README.md` is updated with your info
- [ ] No sensitive information in files
- [ ] Website works locally at `http://localhost:8000`
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Remote origin added
- [ ] Files pushed to main branch

---

## 🎉 You're Done!

Your portfolio is now live on GitHub Pages! 

Share your portfolio URL: `https://YOUR_USERNAME.github.io/portfolio`

Every time you push changes to GitHub, your site will automatically update!

---

**Happy coding! 🚀**
