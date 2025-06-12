// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('.theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.textContent = '✕';
    } else {
        menuIcon.textContent = '☰';
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.feature-card, .screenshot-container').forEach(el => {
    observer.observe(el);
});

// Form handling
const form = document.getElementById('betaSignupForm');
const submitButton = document.getElementById('submitButton');
const formMessage = document.getElementById('formMessage');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Reset previous messages
    formMessage.style.display = 'none';
    emailError.style.display = 'none';
    
    // Show loading state
    submitButton.classList.add('loading');
    
    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const result = await response.json();
        
        if (response.ok) {
            formMessage.textContent = 'Thank you for joining! We\'ll be in touch soon.';
            formMessage.className = 'form-message success';
            form.reset();
            
            // Track successful submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'beta_signup', {
                    'event_category': 'engagement',
                    'event_label': 'success'
                });
            }
        } else {
            throw new Error(result.error || 'Something went wrong');
        }
    } catch (error) {
        formMessage.textContent = 'Sorry, there was an error. Please try again.';
        formMessage.className = 'form-message error';
        
        // Track error
        if (typeof gtag !== 'undefined') {
            gtag('event', 'beta_signup_error', {
                'event_category': 'engagement',
                'event_label': error.message
            });
        }
    } finally {
        formMessage.style.display = 'block';
        submitButton.classList.remove('loading');
    }
});

// Survey link tracking
document.querySelector('.survey-button').addEventListener('click', function() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'survey_click', {
            'event_category': 'engagement',
            'event_label': 'survey_link'
        });
    }
});

// Check user's preferred theme
document.addEventListener('DOMContentLoaded', function() {
    // Apply saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-icon').textContent = '☀️';
    }
    
    // Set up mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.querySelector('.menu-icon').textContent = '☰';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-menu') && 
                !e.target.closest('.mobile-menu-toggle') && 
                mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.querySelector('.menu-icon').textContent = '☰';
            }
        });
    }
    
    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    const featureCategoryTitles = document.querySelectorAll('.category-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('feature-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    featureCards.forEach(card => {
        card.classList.add('feature-animate');
        observer.observe(card);
    });
    
    featureCategoryTitles.forEach(title => {
        title.classList.add('title-animate');
        observer.observe(title);
    });
    
    // Animate Watch App section
    const watchAppSection = document.querySelector('.watch-app-section');
    const watchFeatures = document.querySelectorAll('.watch-feature');
    
    if (watchAppSection) {
        const watchObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                watchAppSection.classList.add('watch-section-visible');
                
                // Animate features with delay
                watchFeatures.forEach((feature, index) => {
                    setTimeout(() => {
                        feature.classList.add('watch-feature-visible');
                    }, index * 200);
                });
                
                watchObserver.unobserve(watchAppSection);
            }
        }, { threshold: 0.2 });
        
        watchAppSection.classList.add('watch-section-animate');
        watchFeatures.forEach(feature => {
            feature.classList.add('watch-feature-animate');
        });
        
        watchObserver.observe(watchAppSection);
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle form submission
    const form = document.getElementById('betaSignupForm');
    const submitButton = document.getElementById('submitButton');
    const formMessage = document.getElementById('formMessage');
    const emailError = document.getElementById('emailError');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous messages
            formMessage.style.display = 'none';
            formMessage.classList.remove('success', 'error');
            emailError.style.display = 'none';
            
            // Email validation
            const email = this.querySelector('input[type="email"]').value;
            if (!validateEmail(email)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                return;
            }
            
            // Show loading state
            submitButton.classList.add('loading');
            
            // Send the form data
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                submitButton.classList.remove('loading');
                
                formMessage.style.display = 'block';
                if (data.ok) {
                    formMessage.classList.add('success');
                    formMessage.textContent = 'Thank you for signing up! We\'ll be in touch soon.';
                    form.reset();
                    
                    // Track successful submission
                    if (typeof gtag === 'function') {
                        gtag('event', 'sign_up', {
                            'event_category': 'engagement',
                            'event_label': 'beta_signup'
                        });
                    }
                } else {
                    formMessage.classList.add('error');
                    formMessage.textContent = 'There was an error submitting the form. Please try again.';
                    
                    // Track error
                    if (typeof gtag === 'function') {
                        gtag('event', 'sign_up_error', {
                            'event_category': 'error',
                            'event_label': 'beta_signup_error'
                        });
                    }
                }
            })
            .catch(error => {
                submitButton.classList.remove('loading');
                formMessage.style.display = 'block';
                formMessage.classList.add('error');
                formMessage.textContent = 'There was an error submitting the form. Please try again.';
                
                // Track error
                if (typeof gtag === 'function') {
                    gtag('event', 'sign_up_error', {
                        'event_category': 'error',
                        'event_label': 'beta_signup_error'
                    });
                }
            });
        });
    }
    
    // Track survey button clicks
    const surveyButton = document.querySelector('.survey-button');
    if (surveyButton) {
        surveyButton.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'survey_click', {
                    'event_category': 'engagement',
                    'event_label': 'user_research_survey'
                });
            }
        });
    }
    
    // Create mobile category navigation for features section
    createMobileCategoryNav();
});

// Create mobile-friendly navigation for feature categories
function createMobileCategoryNav() {
    const featureSection = document.querySelector('.features-section');
    const categories = document.querySelectorAll('.feature-category');
    
    if (featureSection && categories.length > 0) {
        const navContainer = document.createElement('div');
        navContainer.className = 'category-nav';
        
        const navList = document.createElement('div');
        navList.className = 'category-nav-list';
        
        categories.forEach((category, index) => {
            const title = category.querySelector('.category-title').textContent;
            const navItem = document.createElement('button');
            navItem.className = 'category-nav-item';
            navItem.textContent = title;
            
            if (index === 0) {
                navItem.classList.add('active');
            }
            
            navItem.addEventListener('click', () => {
                // Remove active class from all buttons
                document.querySelectorAll('.category-nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked button
                navItem.classList.add('active');
                
                // Scroll to category
                category.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
            
            navList.appendChild(navItem);
        });
        
        navContainer.appendChild(navList);
        featureSection.insertBefore(navContainer, featureSection.firstChild.nextSibling);
        
        // Show/hide category navigation based on scroll position
        window.addEventListener('scroll', () => {
            const featuresRect = featureSection.getBoundingClientRect();
            
            if (featuresRect.top <= 0 && featuresRect.bottom > 0) {
                navContainer.classList.add('visible');
            } else {
                navContainer.classList.remove('visible');
            }
        });
    }
}

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
