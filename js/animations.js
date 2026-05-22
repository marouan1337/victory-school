/**
 * Animations and Interactive Elements
 * Handles scroll-based animations and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Scroll reveal animation
    const scrollReveal = () => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', scrollReveal);
    
    // Initial check in case elements are already in view
    scrollReveal();

    // Add animation to all elements with data-aos attribute
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Add scroll event listener for custom animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check in case elements are already in view
    animateOnScroll();

    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('hover-lift');
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('a, button');
    buttons.forEach(button => {
        if (!button.classList.contains('no-animate')) {
            button.classList.add('btn-animate');
        }
    });

    // Add hover effect to icons
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.classList.add('icon-scale');
    });

    // Add zoom effect to images with data-zoom attribute
    const zoomImages = document.querySelectorAll('[data-zoom]');
    zoomImages.forEach(img => {
        const parent = img.parentElement;
        if (parent) {
            parent.classList.add('img-zoom');
        }
    });

    // Add animation to section headers
    const sectionHeaders = document.querySelectorAll('h2, h3, h4');
    sectionHeaders.forEach(header => {
        if (header.closest('section')) {
            header.classList.add('section-header');
        }
    });

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add animation classes to elements when they come into view
const animateOnIntersect = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

// Set up the intersection observer
const observer = new IntersectionObserver(animateOnIntersect, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
