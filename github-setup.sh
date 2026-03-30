#!/bin/bash

# Quick GitHub Pages Deployment Script
# This script automates the GitHub Pages setup

echo "🚀 GitHub Pages Deployment Setup"
echo "=================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   Ubuntu/Debian: sudo apt-get install git"
    echo "   macOS: brew install git"
    echo "   Windows: https://git-scm.com/download/win"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ index.html not found. Please run this script from the portfolio directory."
    exit 1
fi

echo "✅ Portfolio files found"
echo ""

# Initialize git repository
if [ ! -d ".git" ]; then
    echo "📍 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial portfolio commit"
    git branch -M main
    echo "✅ Git repository initialized"
else
    echo "ℹ️  Git repository already initialized"
fi

echo ""
echo "📋 Next Steps:"
echo "============="
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Visit: https://github.com/new"
echo "   - Name it: 'portfolio' (or your preferred name)"
echo "   - Do NOT initialize with README/gitignore"
echo "   - Click 'Create repository'"
echo ""
echo "2. Add your GitHub repository as remote:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git"
echo "   git push -u origin main"
echo ""
echo "   Replace 'YOUR_USERNAME' with your actual GitHub username"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to repository Settings"
echo "   - Click 'Pages' in the left sidebar"
echo "   - Select 'main' branch as source"
echo "   - Save"
echo ""
echo "4. Access your portfolio at:"
echo "   https://YOUR_USERNAME.github.io/portfolio"
echo ""
echo "📚 For detailed instructions, see: GITHUB_PAGES_SETUP.md"
echo ""
echo "✅ Your portfolio is ready for GitHub!"
