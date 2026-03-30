/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Author: Soni Kumar
   ============================================ */

// ============================================
// MOBILE MENU TOGGLE
// ============================================

/**
 * Toggle mobile navigation menu on hamburger click
 */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger lines
        hamburger.querySelectorAll('span').forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(10px, 10px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(8px, -8px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
}

// ============================================
// SMOOTH SCROLLING NAVIGATION
// ============================================

/**
 * Add smooth scroll behavior and highlight active navigation link
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// HIGHLIGHT ACTIVE NAV LINK
// ============================================

/**
 * Highlight the current section in navigation
 */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
});

// ============================================
// PROJECT FILTER
// ============================================

/**
 * Filter projects by category
 */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.4s ease-in';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400);
            }
        });
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Add fade-in animation to elements as they come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to skill cards, project cards, and experience cards
document.querySelectorAll('.skill-category, .project-card, .experience-card, .ai-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

/**
 * Handle contact form submission
 */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = {
            name: this.querySelector('input[placeholder="Your Name"]').value,
            email: this.querySelector('input[placeholder="Your Email"]').value,
            subject: this.querySelector('input[placeholder="Subject"]').value,
            message: this.querySelector('textarea[placeholder="Your Message"]').value
        };

        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1500);
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

/**
 * Show temporary notification message
 * @param {string} message - The notification message
 * @param {string} type - The notification type: 'success', 'error', 'info'
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    const styles = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 9999;
        animation: slideInUp 0.4s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;

    if (type === 'success') {
        notification.style.cssText = styles + `
            background: linear-gradient(135deg, var(--success-color), #00cc66);
            color: #000;
        `;
    } else if (type === 'error') {
        notification.style.cssText = styles + `
            background: linear-gradient(135deg, #ff006e, #ff1744);
            color: white;
        `;
    } else {
        notification.style.cssText = styles + `
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: var(--darker-bg);
        `;
    }

    document.body.appendChild(notification);

    // Auto remove
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.4s ease-in';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// ============================================
// PARALLAX EFFECT
// ============================================

/**
 * Add subtle parallax effect to hero section
 */
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// COUNTER ANIMATION
// ============================================

/**
 * Animate numbers in statistics section
 */
const stats = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            stats.forEach(stat => {
                const endValue = parseInt(stat.textContent);
                let currentValue = 0;
                const duration = 2000; // 2 seconds
                const increment = endValue / (duration / 16); // 60fps

                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= endValue) {
                        stat.textContent = endValue + '+';
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(currentValue) + '+';
                    }
                }, 16);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ============================================
// ACTIVE NAV UNDERLINE
// ============================================

/**
 * Add dynamic underline to active navigation link
 */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = 'var(--primary-color)';
    });

    link.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.color = 'var(--text-secondary)';
        }
    });
});

// ============================================
// COPY TO CLIPBOARD
// ============================================

/**
 * Copy text to clipboard when clicked
 */
document.querySelectorAll('[data-clipboard]').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        const text = this.getAttribute('data-clipboard');
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!', 'success');
        });
    });
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

/**
 * Keyboard shortcuts for navigation
 * - Home: Ctrl/Cmd + H
 * - Contact: Ctrl/Cmd + K
 */
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

/**
 * Adjust behavior for different screen sizes
 */
function handleResize() {
    const width = window.innerWidth;
    
    // Close mobile menu on resize to desktop
    if (width > 768 && navMenu) {
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// ============================================
// LAZY LOADING IMAGES
// ============================================

/**
 * Lazy load images using Intersection Observer
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// THEME TOGGLE (OPTIONAL)
// ============================================

/**
 * Optional: Add theme toggle functionality
 * Uncomment and use if you want light/dark theme toggle
 */
function initThemeToggle() {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                       !localStorage.getItem('theme');
    
    if (!isDarkMode) {
        document.body.classList.add('light-theme');
    }
}

// Initialize on page load
initThemeToggle();

// ============================================
// PAGE LOAD ANIMATION
// ============================================

/**
 * Fade in page on load
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.6s ease-in';
});

// Set initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// ============================================
// DEBUG MODE (Optional)
// ============================================

/**
 * Enable debug mode by typing 'debug' in console
 * Helps with development and testing
 */
window.debugMode = false;

if (window.location.hash === '#debug') {
    window.debugMode = true;
    console.log('%c🐛 Debug Mode Enabled', 'color: #00d4ff; font-size: 14px; font-weight: bold;');
    console.log('Available commands:');
    console.log('- logPageStats() - Log page statistics');
    console.log('- logNavigationState() - Log navigation state');
}

// Debug functions
window.logPageStats = function() {
    console.log({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        scrollPosition: window.pageYOffset,
        documentHeight: document.documentElement.scrollHeight
    });
};

window.logNavigationState = function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        console.log(`${section.id}: ${section.offsetTop}px`);
    });
};

// ============================================
// PERFORMANCE MONITORING
// ============================================

/**
 * Log performance metrics
 */
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        if (window.debugMode) {
            console.log(`%c⚡ Page Load Time: ${pageLoadTime}ms`, 'color: #00ff88; font-weight: bold;');
        }
    }
});

// ============================================
// END OF JAVASCRIPT
// ============================================
