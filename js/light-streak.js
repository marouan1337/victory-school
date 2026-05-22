// Light Streak Animation Initializer
// This script creates animated red light streaks across the page

(function() {
    'use strict';

    // Configuration
    const config = {
        streakCount: 8,           // Number of diagonal streaks
        particleCount: 6,         // Number of floating particles
        enableParticles: true,    // Enable/disable particles
        enableGlow: true          // Enable/disable ambient glow
    };

    // Create light streak container
    function createStreakContainer() {
        const container = document.createElement('div');
        container.className = 'light-streak-container';
        container.setAttribute('aria-hidden', 'true');
        return container;
    }

    // Create individual light streak
    function createStreak(index) {
        const streak = document.createElement('div');
        streak.className = 'light-streak';
        
        // Add variations
        const variations = ['', 'thick', 'slow', 'fast'];
        const randomVariation = variations[Math.floor(Math.random() * variations.length)];
        if (randomVariation) {
            streak.classList.add(randomVariation);
        }
        
        // Random positioning
        const leftPosition = (index / config.streakCount) * 100;
        streak.style.left = `${leftPosition}%`;
        
        // Random delay
        const delay = Math.random() * 3;
        streak.style.animationDelay = `${delay}s`;
        
        return streak;
    }

    // Create floating particle
    function createParticle(index) {
        const particle = document.createElement('div');
        particle.className = 'light-particle';
        
        // Random positioning
        const leftPosition = Math.random() * 100;
        particle.style.left = `${leftPosition}%`;
        
        // Random delay
        const delay = Math.random() * 6;
        particle.style.animationDelay = `${delay}s`;
        
        // Random duration
        const duration = 4 + Math.random() * 4;
        particle.style.animationDuration = `${duration}s`;
        
        return particle;
    }

    // Initialize light streaks
    function initLightStreaks() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            console.log('Light streaks disabled due to user motion preferences');
            return;
        }

        // Create container
        const container = createStreakContainer();

        // Add diagonal streaks
        for (let i = 0; i < config.streakCount; i++) {
            const streak = createStreak(i);
            container.appendChild(streak);
        }

        // Add particles if enabled
        if (config.enableParticles) {
            for (let i = 0; i < config.particleCount; i++) {
                const particle = createParticle(i);
                container.appendChild(particle);
            }
        }

        // Insert container at the beginning of body
        if (document.body.firstChild) {
            document.body.insertBefore(container, document.body.firstChild);
        } else {
            document.body.appendChild(container);
        }

        console.log('Light streak animation initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightStreaks);
    } else {
        initLightStreaks();
    }

    // Expose config for customization
    window.LightStreakConfig = config;

    // Function to toggle streaks
    window.toggleLightStreaks = function(enable) {
        const container = document.querySelector('.light-streak-container');
        if (container) {
            container.style.display = enable ? 'block' : 'none';
        }
    };

    // Function to change streak color
    window.setStreakColor = function(r, g, b) {
        const style = document.createElement('style');
        style.innerHTML = `
            .light-streak {
                background: linear-gradient(
                    to bottom,
                    rgba(${r}, ${g}, ${b}, 0) 0%,
                    rgba(${r}, ${g}, ${b}, 0.8) 50%,
                    rgba(${r}, ${g}, ${b}, 0) 100%
                );
                box-shadow: 0 0 10px rgba(${r}, ${g}, ${b}, 0.5),
                            0 0 20px rgba(${r}, ${g}, ${b}, 0.3),
                            0 0 30px rgba(${r}, ${g}, ${b}, 0.1);
            }
            .light-particle {
                background: rgba(${r}, ${g}, ${b}, 0.8);
                box-shadow: 0 0 10px rgba(${r}, ${g}, ${b}, 0.8),
                            0 0 20px rgba(${r}, ${g}, ${b}, 0.4);
            }
        `;
        document.head.appendChild(style);
    };

})();
