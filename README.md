# 🚀 Soni Kumar - Portfolio Website

A modern, responsive portfolio website showcasing AI development, web development, and machine learning projects. Built with vanilla HTML, CSS, and JavaScript.

**Live Demo:** [View Portfolio](https://sonikumaramukions.github.io/portfolio)

## ✨ Features

- 🎨 **Modern Dark Theme** - Professional design with vibrant colors
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- ⚡ **Fast & Lightweight** - No external dependencies (except Font Awesome icons)
- 🎯 **Interactive Elements** - Smooth scrolling, animations, and filtering
- 🔍 **SEO Friendly** - Semantic HTML and proper structure
- ♿ **Accessible** - WCAG compliant with keyboard navigation

## 🎯 Sections

1. **Navigation** - Fixed header with smooth scroll links
2. **Hero** - Eye-catching introduction with CTAs
3. **About** - Personal introduction with key stats
4. **Experience** - Current role at Ushnik Technologies (AI & Web Developer Intern)
5. **Skills** - Organized by category (AI, Web Dev, Tools)
6. **Projects** - Filterable project showcase
   - Web Projects
   - Machine Learning Projects
   - Cybersecurity Projects
   - Tools & Blockchain
7. **Articles** - Latest blog posts and insights from Medium & LinkedIn
8. **Contact** - Contact information and form
9. **Footer** - Quick links and social media

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/sonikumaramukions/portfolio.git
cd portfolio

# Start local server (Python 3)
python3 -m http.server 8000

# Or with PHP
php -S localhost:8000

# Visit http://localhost:8000
```

### Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section (left sidebar)
   - Under "Build and deployment"
   - Select `main` branch as source
   - Your site will be live at `https://YOUR_USERNAME.github.io/portfolio`

3. **Alternative: Use `gh-pages` branch:**
   ```bash
   # Install gh-pages (if using Node)
   npm install --save-dev gh-pages
   
   # Deploy
   npm run deploy
   ```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables and animations
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Font Awesome** - Icon library (CDN)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main website
├── style.css          # Complete styling
├── script.js          # Interactive features
├── assets/            # Images and resources
├── .gitignore         # Git ignore rules
├── README.md          # This file
├── CUSTOMIZATION.md   # Customization guide
└── DEPLOYMENT.md      # Deployment guides
```

## 🎨 Customization

### Change Your Information

1. **Name & Title** - Edit `index.html` lines 88-89
2. **About Section** - Edit `index.html` lines 70-77
3. **Experience** - Edit `index.html` lines 105-135
4. **Skills** - Edit `index.html` lines 155-195
5. **Projects** - Edit `index.html` lines 215-490
6. **Contact** - Edit `index.html` lines 620-650

### Change Colors

Edit CSS variables in `style.css` (lines 7-15):

```css
:root {
    --primary-color: #00d4ff;      /* Cyan */
    --secondary-color: #ff006e;    /* Magenta */
    --accent-color: #8000ff;       /* Purple */
    --dark-bg: #0a0e27;            /* Dark background */
    --card-bg: #1a1f3a;            /* Card background */
    /* ... more colors ... */
}
```

For more customization options, see `CUSTOMIZATION.md`

## 📊 Projects Included

### Web Projects
- **Shopkatha** - Lending Management System (PHP, MySQL, HTML/CSS)

### ML Projects
- **Phishing Link Detection** ⭐ (Python, Scikit-learn)
- **Oil Barrel Price Prediction** ⭐ (Python, Time Series)
- **Text Detection in Images** ⭐ (Python, OpenCV, OCR)
- **Speech Recognition Tool** (Python, Speech Recognition API)

### Security Projects
- **Secure Chat Application** ⭐ (Python, JavaScript, Cryptography)
- **Network Packet Sniffer** (Python, Scapy)
- **Vulnerability Assessment & Penetration Testing** ⭐ (Burp Suite, Nmap)
- **CodeAlpha - Secure Coding Review** (Python, Flask)

### Tools & Blockchain
- **BlockVault** - Document Storage (Solidity, JavaScript, IPFS)

## 📚 Articles

Featured articles from Medium and LinkedIn:
- Cybersecurity & threat hunting
- AI & machine learning
- Technology trends
- Industry insights

[View all articles on Medium](https://medium.com/@sonikumaroutlook)

## 🔧 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile:** 480px and below
- **Tablet:** 481px - 768px
- **Desktop:** 769px and above
- **Large Desktop:** 1200px and above

## 🎯 Performance

- **No external dependencies** - Only Font Awesome icons via CDN
- **Optimized animations** - Smooth 60fps transitions
- **Fast load time** - Minimal CSS and JS
- **SEO optimized** - Proper semantic HTML

## 📞 Contact & Social

- 📧 **Email:** sonikumaroutlook@gmail.com
- 🐙 **GitHub:** https://github.com/sonikumaramukions
- 💼 **LinkedIn:** https://www.linkedin.com/in/soni13
- ✍️ **Medium:** https://medium.com/@sonikumaroutlook

## 📄 License

This portfolio template is free to use and customize for personal projects.

## 🤝 Contributing

Feel free to fork this repository and create your own version!

## 📝 Version

- **Version:** 1.0
- **Last Updated:** March 30, 2026
- **Status:** Production Ready ✅

---

**Built with ❤️ by Soni Kumar**

For detailed customization guide, see `CUSTOMIZATION.md`  
For deployment guides, see `DEPLOYMENT.md`
3. **About Section** - Personal introduction and quick stats
4. **Experience Section** - Work experience at Ushnik Technologies
5. **Skills Section** - Skills organized by category (AI, Web Dev, Tools)
6. **Projects Section** - Filterable project showcase with tech tags
7. **AI Work Section** - AI experiments and tools
8. **Contact Section** - Contact information and form
9. **Footer** - Quick links and social media

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Font Awesome icons CDN)

### How to Use

1. **Extract the files** to your desired location
2. **Open `index.html`** in your web browser
3. **That's it!** The website is ready to use

### Running Locally with a Server

For the best experience, run with a local server:

**Using Python 3:**
```bash
cd /path/to/soni-website
python -m http.server 8000
```

Then visit: `http://localhost:8000`

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

## 🎨 Customization

### Colors
Edit the CSS color variables in `style.css`:

```css
:root {
    --primary-color: #00d4ff;      /* Cyan */
    --secondary-color: #ff006e;    /* Magenta */
    --accent-color: #8000ff;       /* Purple */
    --dark-bg: #0a0e27;            /* Dark background */
    /* ... more colors ... */
}
```

### Content
- **Hero Section**: Edit the title, subtitle, and description in `index.html`
- **Projects**: Add/remove project cards in the projects section
- **Skills**: Modify skill categories and items
- **Contact**: Update email, GitHub, LinkedIn, and location

### Fonts
To change fonts, update the `font-family` in `style.css`:

```css
body {
    font-family: 'Your Font Here', sans-serif;
}
```

## 📝 Adding Your Information

### Update Links
1. **GitHub**: Replace `sonikumaramukions` with your username
2. **LinkedIn**: Update LinkedIn profile URL
3. **Email**: Change `sonikumaroutlook@gmail.com` with your email
4. **Medium**: Update Medium profile link

### Modify Content
1. Open `index.html` in a text editor
2. Find the section you want to edit
3. Update the text content
4. Save the file and refresh your browser

### Add New Projects
1. Copy a project card block
2. Paste it in the projects grid
3. Update the title, description, tech tags, and links
4. Add the appropriate `data-category` attribute

## 🎮 JavaScript Features

### Available Functions
- **Smooth Scrolling**: All navigation links smoothly scroll to sections
- **Project Filtering**: Filter projects by category (all, web, ai, tools)
- **Form Validation**: Contact form validates email and required fields
- **Scroll Animations**: Elements fade in as they come into view
- **Mobile Menu**: Hamburger menu for mobile devices

### Keyboard Shortcuts
- `Ctrl/Cmd + H`: Go to home
- `Ctrl/Cmd + K`: Go to contact

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)

## 📊 Performance Tips

1. **Optimize Images**: Replace placeholder with actual images
2. **Minify Code**: Use minification tools for production
3. **Caching**: Enable browser caching headers on your server
4. **CDN**: Use a CDN for Font Awesome fonts
5. **Compression**: Enable gzip compression on your server

## 🚀 Deployment

### Deploy on Netlify (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will auto-deploy on every push

### Deploy on Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy on GitHub Pages
1. Push code to GitHub repo
2. Go to Settings > Pages
3. Select `main` branch and save
4. Your site will be live at `username.github.io/repo-name`

### Manual Hosting
1. Upload files to your web server via FTP
2. Make sure `index.html` is in the root directory
3. Visit your domain

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design
- Hamburger navigation menu
- Touch-friendly buttons
- Optimized font sizes
- Proper spacing on small screens

Test on mobile:
- Open DevTools (F12)
- Click the device toggle button
- Test on various screen sizes

## 🐛 Troubleshooting

### Icons not showing
- Check internet connection (Font Awesome CDN is used)
- Verify the CDN link is correct in `index.html`

### Smooth scrolling not working
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check that `style.css` is in the same directory

### Forms not working
- JavaScript is required for form functionality
- Check browser console for errors
- Verify form fields have correct names

## 📚 Resources Used

- **Font Awesome**: Icon library (https://fontawesome.com/)
- **Google Fonts**: Optional for custom fonts
- **CSS Grid & Flexbox**: For responsive layouts
- **JavaScript ES6**: Modern JavaScript features

## 🤝 Customization Services

If you need professional customization:
1. Contact me at sonikumaroutlook@gmail.com
2. Mention specific changes needed
3. I can help with design and development

## 📄 License

This portfolio template is free to use and customize for personal projects. 

## 🙏 Credits

**Created by**: Soni Kumar
**Version**: 1.0
**Last Updated**: March 2026

## 📞 Contact & Social

- 📧 Email: sonikumaroutlook@gmail.com
- 🐙 GitHub: https://github.com/sonikumaramukions
- 💼 LinkedIn: https://www.linkedin.com/in/soni13
- ✍️ Medium: https://medium.com/@sonikumaroutlook

---

**Happy coding! 🚀**

For updates and improvements, check the GitHub repository or contact me directly.
