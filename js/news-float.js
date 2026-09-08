/**
 * Opening Floating Announcement Modal for news.jpg
 * Ets. Victory Privée - Clean, Minimalist Floating Image Popup
 * Displays ONLY on the Home Page on website opening
 */
(function() {
    'use strict';

    if (window.__newsFloatModalInitialized) {
        return;
    }
    window.__newsFloatModalInitialized = true;

    // Check if on home page
    const path = window.location.pathname;
    const isHomePage = path.endsWith('index.html') || path.endsWith('/') || path === '' || path.slice(-1) === '/';
    if (!isHomePage && !document.querySelector('#hero, .hero-section')) {
        return;
    }

    const config = {
        imageSrc: 'news.jpg',
        altText: 'Avis Officiel - École Victory'
    };

    let overlayElement = null;
    let isShown = false;

    function createFloatingModal() {
        // Remove existing if present
        const existing = document.getElementById('newsFloatingOpeningModal');
        if (existing) existing.remove();

        const modalHTML = `
            <div class="news-modal-overlay" id="newsFloatingOpeningModal" role="dialog" aria-modal="true" aria-label="Avis Officiel">
                <div class="news-modal-container" id="newsFloatingContainer">
                    <button class="news-modal-close" id="newsFloatingCloseBtn" aria-label="Fermer l'annonce">
                        &times;
                    </button>
                    <img src="${config.imageSrc}" alt="${config.altText}" class="news-modal-img">
                </div>
            </div>
        `;

        const div = document.createElement('div');
        div.innerHTML = modalHTML;
        document.body.appendChild(div.firstElementChild);
        overlayElement = document.getElementById('newsFloatingOpeningModal');

        // Event listeners
        const closeBtn = document.getElementById('newsFloatingCloseBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeNewsModal);
        }

        if (overlayElement) {
            overlayElement.addEventListener('click', function(e) {
                if (e.target === overlayElement) {
                    closeNewsModal();
                }
            });
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlayElement && overlayElement.classList.contains('active')) {
                closeNewsModal();
            }
        });
    }

    function showNewsModal() {
        if (!overlayElement || isShown) return;
        isShown = true;
        overlayElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeNewsModal() {
        if (!overlayElement) return;
        overlayElement.classList.remove('active');
        document.body.style.overflow = '';
    }

    function scheduleOpening() {
        const splashScreen = document.getElementById('splash-screen');

        if (splashScreen) {
            // Splash screen takes 4500ms + 500ms fade = 5000ms
            let triggered = false;

            const observer = new MutationObserver(function() {
                if (!document.getElementById('splash-screen') && !triggered) {
                    triggered = true;
                    observer.disconnect();
                    setTimeout(showNewsModal, 300);
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });

            // Fallback timeout in case splash screen removal isn't caught
            setTimeout(function() {
                if (!triggered) {
                    triggered = true;
                    observer.disconnect();
                    showNewsModal();
                }
            }, 5300);
        } else {
            // No splash screen, show after brief delay
            setTimeout(showNewsModal, 800);
        }
    }

    function init() {
        createFloatingModal();
        scheduleOpening();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.NewsFloat = {
        show: showNewsModal,
        close: closeNewsModal
    };
})();
