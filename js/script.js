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
            // Enhanced success message with more details
            formMessage.innerHTML = `
                <div class="success-message">
                    <div class="success-icon">✅</div>
                    <div class="success-content">
                        <h4>Welcome to the Bloom Cycles Beta!</h4>
                        <p>Thank you for joining our beta testing program. Here's what happens next:</p>
                        <ul>
                            <li>You'll receive a confirmation email within 24 hours</li>
                            <li>We'll review your application and get back to you within 1-2 weeks</li>
                            <li>If selected, you'll get early access to Bloom Cycles before public release</li>
                            <li>You'll receive exclusive updates and be part of shaping the future of reproductive health tracking</li>
                        </ul>
                        <p class="success-note">Keep an eye on your inbox for updates!</p>
                    </div>
                </div>
            `;
            formMessage.className = 'form-message success';
            form.reset();
            
            // Brief delay to show loading state, then display success message
            setTimeout(() => {
                formMessage.style.display = 'block';
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
            
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
        formMessage.innerHTML = `
            <div class="error-message">
                <div class="error-icon">❌</div>
                <div class="error-content">
                    <h4>Oops! Something went wrong</h4>
                    <p>We couldn't process your application right now. Please try again in a few moments.</p>
                    <p class="error-note">If the problem persists, please contact us directly.</p>
                </div>
            </div>
        `;
        formMessage.classList.add('error');
        
        // Track error
        if (typeof gtag === 'function') {
            gtag('event', 'sign_up_error', {
                'event_category': 'error',
                'event_label': 'beta_signup_error'
            });
        }
    } finally {
        formMessage.style.display = 'block';
        submitButton.classList.remove('loading');
    }
});

// Survey link tracking - temporarily commented out
/*
document.querySelector('.survey-button').addEventListener('click', function() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'survey_click', {
            'event_category': 'engagement',
            'event_label': 'survey_link'
        });
    }
});
*/

// Track press kit downloads and press interactions
const pressKitButton = document.querySelector('a[href="Bloom Cycles Press Kit.pdf"]');
if (pressKitButton) {
    pressKitButton.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'press_kit_download', {
                'event_category': 'engagement',
                'event_label': 'press_kit_pdf'
            });
        }
    });
}

const pressContactButton = document.querySelector('a[href^="mailto:kaiwen@"]');
if (pressContactButton) {
    pressContactButton.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'press_contact_click', {
                'event_category': 'engagement',
                'event_label': 'press_email'
            });
        }
    });
}

// Track press section visibility
const pressSection = document.querySelector('.press-section');
if (pressSection) {
    const pressObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'press_section_view', {
                    'event_category': 'engagement',
                    'event_label': 'press_section'
                });
            }
            pressObserver.unobserve(pressSection);
        }
    }, { threshold: 0.3 });
    
    pressObserver.observe(pressSection);
}

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
                    // Enhanced success message with more details
                    formMessage.innerHTML = `
                        <div class="success-message">
                            <div class="success-icon">✅</div>
                            <div class="success-content">
                                <h4>Welcome to the Bloom Cycles Beta!</h4>
                                <p>Thank you for joining our beta testing program. Here's what happens next:</p>
                                <ul>
                                    <li>You'll receive a confirmation email within 24 hours</li>
                                    <li>We'll review your application and get back to you within 1-2 weeks</li>
                                    <li>If selected, you'll get early access to Bloom Cycles before public release</li>
                                    <li>You'll receive exclusive updates and be part of shaping the future of reproductive health tracking</li>
                                </ul>
                                <p class="success-note">Keep an eye on your inbox for updates!</p>
                            </div>
                        </div>
                    `;
                    formMessage.classList.add('success');
                    form.reset();
                    
                    // Brief delay to show loading state, then display success message
                    setTimeout(() => {
                        formMessage.style.display = 'block';
                        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 500);
                    
                    // Track successful submission
                    if (typeof gtag === 'function') {
                        gtag('event', 'sign_up', {
                            'event_category': 'engagement',
                            'event_label': 'beta_signup'
                        });
                    }
                } else {
                    formMessage.innerHTML = `
                        <div class="error-message">
                            <div class="error-icon">❌</div>
                            <div class="error-content">
                                <h4>Oops! Something went wrong</h4>
                                <p>We couldn't process your application right now. Please try again in a few moments.</p>
                                <p class="error-note">If the problem persists, please contact us directly.</p>
                            </div>
                        </div>
                    `;
                    formMessage.classList.add('error');
                    
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
                formMessage.innerHTML = `
                    <div class="error-message">
                        <div class="error-icon">❌</div>
                        <div class="error-content">
                            <h4>Oops! Something went wrong</h4>
                            <p>We couldn't process your application right now. Please try again in a few moments.</p>
                            <p class="error-note">If the problem persists, please contact us directly.</p>
                        </div>
                    </div>
                `;
                formMessage.classList.add('error');
                
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
    
    // Track survey button clicks - temporarily commented out
    /*
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
    */
    
    // Enhanced Watch App image handling
    function handleWatchImage() {
        const watchImage = document.querySelector('.real-watch-image');
        const watchMockup = document.querySelector('.watch-mockup');
        
        if (!watchImage) {
            console.error('Watch image element not found');
            return;
        }
        
        console.log('Setting up watch image with src:', watchImage.src);
        
        // Force image reload
        const originalSrc = watchImage.src;
        watchImage.src = '';
        setTimeout(() => {
            watchImage.src = originalSrc + '?t=' + new Date().getTime();
            console.log('Reloaded image with src:', watchImage.src);
        }, 100);
        
        // Make absolutely sure the image is visible
        watchImage.style.display = 'block';
        watchImage.style.opacity = '1';
        
        // Hide mockup
        if (watchMockup) {
            watchMockup.style.display = 'none';
        }
    }
    
    // Run immediately and also after a delay to ensure image loading
    handleWatchImage();
    setTimeout(handleWatchImage, 1000);
    
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

function validateForm(form) {
    let isValid = true;
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const device = form.querySelector('select[name="device"]');
    const iosVersion = form.querySelector('select[name="ios_version"]');
    const testingExperience = form.querySelector('select[name="testing_experience"]');
    const testingFrequency = form.querySelector('select[name="testing_frequency"]');
    const commitments = form.querySelectorAll('input[name="commitments"]');
    const testingAreas = form.querySelectorAll('input[name="testing_areas"]');
    const gdprConsent = form.querySelector('.gdpr-container input[type="checkbox"]');

    // Reset previous errors
    form.querySelectorAll('.form-error').forEach(error => error.textContent = '');

    // Validate name
    if (!name.value.trim()) {
        document.getElementById('nameError').textContent = 'Please enter your name';
        isValid = false;
    }

    // Validate email
    if (!email.value.trim()) {
        document.getElementById('emailError').textContent = 'Please enter your email';
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate device selection
    if (!device.value) {
        device.classList.add('error');
        isValid = false;
    } else {
        device.classList.remove('error');
    }

    // Validate iOS version
    if (!iosVersion.value) {
        iosVersion.classList.add('error');
        isValid = false;
    } else {
        iosVersion.classList.remove('error');
    }

    // Validate testing experience
    if (!testingExperience.value) {
        testingExperience.classList.add('error');
        isValid = false;
    } else {
        testingExperience.classList.remove('error');
    }

    // Validate testing frequency
    if (!testingFrequency.value) {
        testingFrequency.classList.add('error');
        isValid = false;
    } else {
        testingFrequency.classList.remove('error');
    }

    // Validate commitments (at least one must be checked)
    let hasCommitment = false;
    commitments.forEach(commitment => {
        if (commitment.checked) hasCommitment = true;
    });
    if (!hasCommitment) {
        commitments.forEach(commitment => {
            commitment.parentElement.classList.add('error');
        });
        isValid = false;
    } else {
        commitments.forEach(commitment => {
            commitment.parentElement.classList.remove('error');
        });
    }

    // Validate testing areas (at least one must be checked)
    let hasTestingArea = false;
    testingAreas.forEach(area => {
        if (area.checked) hasTestingArea = true;
    });
    if (!hasTestingArea) {
        testingAreas.forEach(area => {
            area.parentElement.classList.add('error');
        });
        isValid = false;
    } else {
        testingAreas.forEach(area => {
            area.parentElement.classList.remove('error');
        });
    }

    // Validate GDPR consent
    if (!gdprConsent.checked) {
        gdprConsent.parentElement.classList.add('error');
        isValid = false;
    } else {
        gdprConsent.parentElement.classList.remove('error');
    }

    return isValid;
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
