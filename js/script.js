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
    themeIcon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
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
