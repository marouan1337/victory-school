// Cambridge Floating Ad Card
(function() {
    'use strict';

    // Prevent multiple script executions - use global window flag
    if (window.__cambridgeFloatInitialized) {
        console.log('Cambridge float card: Script already loaded');
        return;
    }
    window.__cambridgeFloatInitialized = true;

    // Configuration
    const config = {
        showDelay: 2000, // Show after 2 seconds
        cookieName: 'cambridge_float_closed',
        cookieDays: 1/24, // Remember close for 1 day
    };
    
    // Flag to prevent multiple initializations within this scope
    let initialized = false;
    let escListenerAdded = false;

    // Check if card was closed recently
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    // Create the floating card HTML
    function createFloatingCard() {
        // Remove any existing cards (cleanup duplicates)
        const existingCards = document.querySelectorAll('#cambridgeFloatCard, .cambridge-float-card');
        if (existingCards.length > 0) {
            console.log(`Cambridge float card: Removing ${existingCards.length} existing card(s)`);
            existingCards.forEach(card => card.remove());
        }
        
        const cardHTML = `
            <div class="cambridge-float-card hidden" id="cambridgeFloatCard">
                <button class="cambridge-float-close" id="cambridgeFloatClose" aria-label="Fermer">
                    ×
                </button>
                
                <div class="cambridge-float-header">
                    <div class="cambridge-float-logo">
                        <img src="logo/cambridge_logo12.jpg" alt="Cambridge Logo">
                    </div>
                    <h3 class="cambridge-float-title">Examens Cambridge</h3>
                    <p class="cambridge-float-subtitle">Préparez-vous aux certifications internationales</p>
                </div>
                
                <div class="cambridge-float-body">
                    <div class="cambridge-success-rate">
                        ✓ Taux de réussite: <strong>95%</strong>
                    </div>
                    
                    <div class="cambridge-levels">
                        <span class="cambridge-level-badge">YLE</span>
                        <span class="cambridge-level-badge">KET</span>
                        <span class="cambridge-level-badge">PET</span>
                        <span class="cambridge-level-badge">FCE</span>
                        <span class="cambridge-level-badge">CAE</span>
                        <span class="cambridge-level-badge">CPE</span>
                    </div>
                    
                    <a href="contact.html" class="cambridge-float-cta">
                        Inscrivez-vous maintenant
                    </a>
                </div>
            </div>
        `;
        
        // Insert into body
        const div = document.createElement('div');
        div.innerHTML = cardHTML;
        document.body.appendChild(div.firstElementChild);
        return true;
    }

    // Show the card
    function showCard() {
        const card = document.getElementById('cambridgeFloatCard');
        if (card) {
            setTimeout(() => {
                card.classList.remove('hidden');
            }, config.showDelay);
        }
    }

    // Close the card
    function closeCard() {
        const card = document.getElementById('cambridgeFloatCard');
        if (card) {
            card.classList.add('hidden');
            // Remember that user closed the card
            setCookie(config.cookieName, 'true', config.cookieDays);
        }
    }

    // Initialize
    function init() {
        // Prevent multiple initializations
        if (initialized) {
            console.log('Cambridge float card: Already initialized');
            return;
        }
        
        // Clear cookie on every page load (card will show every time)
        document.cookie = config.cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        console.log('Cambridge float card: Cookie cleared - card will show');

        // Create and show the card
        createFloatingCard();
        showCard();

        // Add close button event listener
        const closeBtn = document.getElementById('cambridgeFloatClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeCard);
        }

        // Close on ESC key (only add listener once)
        if (!escListenerAdded) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeCard();
                }
            });
            escListenerAdded = true;
        }
        
        // Mark as initialized
        initialized = true;
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose functions for manual control
    window.CambridgeFloat = {
        show: showCard,
        close: closeCard,
        toggle: function() {
            const card = document.getElementById('cambridgeFloatCard');
            if (card) {
                card.classList.toggle('hidden');
            }
        }
    };

})();
