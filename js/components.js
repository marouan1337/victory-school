// components.js - Handle loading and initializing components

// Store the main content container (will be set when DOM is ready)
let mainContent;

// Store the navbar HTML
const navbarHTML = `
<nav class="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <div class="flex-shrink-0 flex items-center">
                <a href="index.html" class="flex items-center space-x-2 group">
                    <!-- School Logo -->
                    <div class="flex-shrink-0 h-10 w-auto">
                        <img src="logo/Group 947.png" alt="École Victory Logo" class="h-full w-auto">
                    </div>
                    <span class="text-xl md:text-2xl font-bold text-red-900 transition-colors duration-300 group-hover:text-red-700">
                        ÉCOLE VICTORY
                    </span>
                </a>
            </div>
            <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
                <a href="index.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="index">
                    Accueil
                </a>
                <a href="inscriptions.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="inscriptions">
                    Inscriptions
                </a>
                <a href="pedagogie.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="pedagogie">
                    Pédagogie
                </a>
                <a href="vie-scolaire.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="vie-scolaire">
                    Vie scolaire
                </a>
                <a href="galerie.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="galerie">
                    Galerie
                </a>
                <a href="contact.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="contact">
                    Contact
                </a>
                <a href="inscriptions.html" class="ml-4 px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                    S'inscrire
                </a>
            </div>
            <div class="md:hidden">
                <button type="button" id="mobile-menu-button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-700 focus:outline-none">
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile menu - Modern Sidebar -->
    <div id="mobile-menu" class="mobile-menu fixed inset-0 z-[9999] hidden">
        <!-- Backdrop -->
        <div class="mobile-menu-backdrop fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
        
        <!-- Sidebar -->
        <div class="mobile-menu-sidebar fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto">
            <!-- Header -->
            <div class="bg-gradient-to-r from-red-800 to-red-900 p-6 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="h-12 w-12 bg-white rounded-lg p-2">
                        <img src="logo/Group 947.png" alt="École Victory" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h2 class="text-white font-bold text-lg">École Victory</h2>
                        <p class="text-red-100 text-xs">Excellence & Innovation</p>
                    </div>
                </div>
                <button id="mobile-menu-close" class="text-white hover:text-red-200 transition-colors p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <!-- Navigation Links -->
            <nav class="py-6">
                <div class="space-y-1 px-4">
                    <a href="index.html" class="mobile-nav-link group flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200">
                        <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        <span class="font-medium">Accueil</span>
                    </a>
                    
                    <a href="inscriptions.html" class="mobile-nav-link group flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200">
                        <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        <span class="font-medium">Inscriptions</span>
                    </a>
                    
                    <a href="pedagogie.html" class="mobile-nav-link group flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200">
                        <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                        <span class="font-medium">Pédagogie</span>
                    </a>
                    
                    <a href="vie-scolaire.html" class="mobile-nav-link group flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200">
                        <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        <span class="font-medium">Vie scolaire</span>
                    </a>
                    
                    <a href="galerie.html" class="mobile-nav-link group flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200">
                        <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span class="font-medium">Galerie</span>
                    </a>
                    
                    <a href="contact.html" class="mobile-nav-link group flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200">
                        <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span class="font-medium">Contact</span>
                    </a>
                </div>

                <!-- CTA Button -->
                <div class="px-4 mt-6">
                    <a href="inscriptions.html" class="block w-full px-6 py-4 text-center text-white font-semibold bg-gradient-to-r from-red-700 to-red-900 rounded-xl hover:from-red-800 hover:to-red-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <span class="flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                            </svg>
                            S'inscrire maintenant
                        </span>
                    </a>
                </div>
            </nav>

            <!-- Footer Section -->
            <div class="border-t border-gray-200 mt-6 pt-6 px-4">
                <!-- Contact Info -->
                <div class="mb-6">
                    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Contact rapide</h3>
                    <div class="space-y-2">
                        <a href="tel:+212661082421" class="flex items-center text-sm text-gray-600 hover:text-red-700">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            +212 661 082 421
                        </a>
                        <a href="tel:+212808595932" class="flex items-center text-sm text-gray-600 hover:text-red-700 ml-6">
                            +212 808 595 932
                        </a>
                        <a href="mailto:etablissementvictory@gmail.com" class="flex items-center text-sm text-gray-600 hover:text-red-700">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            etablissementvictory@gmail.com
                        </a>
                    </div>
                </div>

                <!-- Social Media -->
                <div class="mb-6">
                    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Suivez-nous</h3>
                    <div class="flex space-x-3">
                        <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Cambridge Badge -->
                <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-xs font-semibold text-blue-900">Certification</p>
                            <p class="text-xs text-blue-700">Cambridge English</p>
                        </div>
                        <div class="bg-white rounded p-1">
                            <img src="logo/cambridge_logo12.jpg" alt="Cambridge" class="w-8 h-8 object-contain">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
`;

// Store the footer HTML
const footerHTML = `
<!-- Footer Component - Redesigned -->
<footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <!-- Cambridge Certification Banner -->
    <div class="bg-gradient-to-r from-blue-900 to-blue-800 py-6 border-b border-blue-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div class="bg-white rounded-lg p-2 shadow-lg">
                        <img src="logo/cambridge_logo12.jpg" alt="Cambridge" class="w-16 h-16 object-contain">
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1">Centre de Préparation Cambridge</h3>
                        <p class="text-blue-200 text-sm">Préparation officielle aux examens Cambridge English • Taux de réussite exceptionnel</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="text-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                        <div class="text-2xl font-bold text-white">95%</div>
                        <div class="text-xs text-blue-200">Taux de Réussite</div>
                    </div>
                    <div class="text-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                        <div class="text-2xl font-bold text-white">A1-C2</div>
                        <div class="text-xs text-blue-200">Tous Niveaux</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <!-- About Section -->
            <div class="space-y-4">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg p-1">
                        <img src="logo/Group 947.png" alt="École Victory" class="w-full h-full object-contain">
                    </div>
                    <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">École Victory</h3>
                </div>
                <p class="text-gray-400 leading-relaxed">Établissement d'enseignement d'excellence à Laâyoune, dédié à former les leaders de demain avec une préparation certifiée Cambridge.</p>
                <div class="flex gap-3 pt-2">
                    <a href="https://www.facebook.com/profile.php?id=100078488511882&mibextid=wwXIfr&rdid=fddX5LxKPHcN3zwj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19qyFc1D5d%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                        <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                        <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                        <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="https://wa.me/212666979929" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                        <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.52 5.86L0 24l6.28-1.65A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.5c-1.93 0-3.76-.54-5.35-1.57l-.38-.24-3.73.98.99-3.64-.25-.37A9.5 9.5 0 1121.5 12c0 5.24-4.26 9.5-9.5 9.5zm5.12-6.86c-.17.49-1 1.04-1.39 1.1-.38.06-.86.09-1.36-.08-.32-.1-.72-.24-1.24-.46-2.18-.91-3.6-3.15-3.71-3.3-.11-.15-.89-1.18-.89-2.25 0-1.07.56-1.6.75-1.82.2-.22.43-.28.57-.28.14 0 .29 0 .41.01.13.01.31-.05.49.38.17.42.59 1.45.64 1.56.05.11.09.23.02.36-.07.14-.11.22-.22.35-.11.12-.23.27-.33.37-.11.11-.23.23-.1.45.13.22.57.94 1.23 1.52.85.75 1.56 1 1.78 1.11.22.11.35.09.48-.06.13-.15.54-.64.69-.85.15-.22.29-.18.49-.11.2.07 1.25.59 1.46.7.21.11.36.16.41.25.05.09.05.52-.12 1z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <span class="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 rounded-full"></span>
                    Liens Rapides
                </h4>
                <ul class="space-y-3">
                    <li><a href="index.html" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group" data-navigation>
                        <span class="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all duration-300"></span>
                        Accueil
                    </a></li>
                    <li><a href="pedagogie.html" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group" data-navigation>
                        <span class="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all duration-300"></span>
                        Pédagogie
                    </a></li>
                    <li><a href="vie-scolaire.html" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group" data-navigation>
                        <span class="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all duration-300"></span>
                        Vie Scolaire
                    </a></li>
                    <li><a href="inscriptions.html" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group" data-navigation>
                        <span class="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all duration-300"></span>
                        Inscriptions
                    </a></li>
                    <li><a href="contact.html" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group" data-navigation>
                        <span class="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all duration-300"></span>
                        Contact
                    </a></li>
                </ul>
            </div>

            <!-- Cambridge Programs -->
            <div>
                <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <span class="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></span>
                    Examens Cambridge
                </h4>
                <ul class="space-y-3 text-gray-400">
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Cambridge Young Learners (YLE)</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>KET, PET, FCE (A2-B2)</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>CAE, CPE (C1-C2)</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Préparation intensive</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Enseignants certifiés</span>
                    </li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <span class="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 rounded-full"></span>
                    Contact
                </h4>
                <address class="not-italic text-gray-400 space-y-4">
                    <div class="flex items-start gap-3 group">
                        <div class="w-10 h-10 bg-gray-800 group-hover:bg-red-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                            <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-white mb-1">Adresse</p>
                            <a href="https://www.google.com/maps/place/%C3%89tablissement+VICTORY/@27.1547808,-13.1987555,17z" target="_blank" rel="noopener noreferrer" class="text-sm hover:text-red-400 transition-colors">Établissement VICTORY<br>Avenue Sayf Al Dawla, Rue Assawak N° 04, Laâyoune</a>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 group">
                        <div class="w-10 h-10 bg-gray-800 group-hover:bg-red-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                            <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-white mb-1">Téléphone</p>
                            <a href="tel:+212661082421" class="text-sm hover:text-red-400 transition-colors">+212 661 082 421</a><br>
                            <a href="tel:+212808595932" class="text-sm hover:text-red-400 transition-colors">+212 808 595 932</a>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 group">
                        <div class="w-10 h-10 bg-gray-800 group-hover:bg-red-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                            <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-white mb-1">Email</p>
                            <a href="mailto:etablissementvictory@gmail.com" class="text-sm hover:text-red-400 transition-colors">etablissementvictory@gmail.com</a>
                        </div>
                    </div>
                </address>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 pt-8">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <p class="text-gray-400 text-sm text-center md:text-left">
                    &copy; ${new Date().getFullYear()} École Victory. Tous droits réservés. | 
                    <a href="#" class="hover:text-white transition-colors">Mentions légales</a> | 
                    <a href="#" class="hover:text-white transition-colors">Politique de confidentialité</a>
                </p>
                <div class="flex items-center gap-2 text-sm text-gray-400">
                    <span>Conçu et développé par</span>
                    <a href="https://wa.me/212644682293" target="_blank" rel="noopener noreferrer" class="text-red-500 font-semibold hover:text-red-400 transition-colors">Marouan Khaba</a>
                </div>
            </div>
        </div>
    </div>
</footer>`;

// --- Global helper functions ---

// Function to include navbar
function includeNavbar() {
    let navbarPlaceholder = document.querySelector('[data-include="components/navbar.html"]');
    if (!navbarPlaceholder) {
        navbarPlaceholder = document.getElementById('navbar-placeholder');
    }
    // Remove any existing navbar to prevent duplicates
    const existingNav = document.querySelector('nav');
    if (existingNav) existingNav.remove();

    if (navbarPlaceholder) {
        navbarPlaceholder.outerHTML = navbarHTML;
    } else {
        // Fallback: inject navbar at top of body when placeholder is missing
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    // Initialize behavior after injection
    initMobileMenu();
    highlightCurrentPage();
}

// Function to include footer on all pages
function includeFooter() {
    // Remove any existing footer first to prevent duplicates
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.remove();
    }
    // Always add footer to all pages
    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.appendChild(footer);
}

// Initialize mobile menu functionality with modern sidebar
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
    const mobileMenuSidebar = document.querySelector('.mobile-menu-sidebar');

    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('hidden');
            void mobileMenu.offsetWidth;
            if (mobileMenuBackdrop) mobileMenuBackdrop.style.opacity = '1';
            if (mobileMenuSidebar) mobileMenuSidebar.style.transform = 'translateX(0)';
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.documentElement.style.overflow = 'hidden';
            if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'true');
        }
    }

    function closeMenu() {
        if (mobileMenu) {
            if (mobileMenuBackdrop) mobileMenuBackdrop.style.opacity = '0';
            if (mobileMenuSidebar) mobileMenuSidebar.style.transform = 'translateX(100%)';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                // Restore body scroll
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.documentElement.style.overflow = '';
            }, 300);
            if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            openMenu();
        });
    }
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
    }
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.addEventListener('click', closeMenu);
    }

    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(closeMenu, 200);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });
}

// Function to load page content via AJAX
async function loadPage(url, pushState = true) {
    try {
        // Show loading state
        if (mainContent) {
            mainContent.style.opacity = '0.7';
            mainContent.style.pointerEvents = 'none';
        }

        // Fetch the new page
        const response = await fetch(url);
        const text = await response.text();
        
        // Create a temporary container to parse the HTML
        const temp = document.createElement('div');
        temp.innerHTML = text;
        
        // Remove splash screen from the fetched content to prevent it from rendering during SPA transition
        const fetchedSplash = temp.querySelector('#splash-screen');
        if (fetchedSplash) {
            fetchedSplash.remove();
        }
        
        // Extract the main content (everything inside the body except the navbar)
        const newContent = temp.querySelector('body').innerHTML;
        
        // Update the page title
        const newTitle = temp.querySelector('title')?.textContent || document.title;
        document.title = newTitle;
        
        // Update the URL in the address bar without reloading
        if (pushState) {
            window.history.pushState({ url: url }, newTitle, url);
        }
        
        // Replace the content
        if (mainContent) {
            mainContent.innerHTML = newContent;
            // Trigger any necessary JavaScript for the new page
            initPageScripts();
            // Scroll to top
            window.scrollTo(0, 0);
            // Fade in the new content
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.pointerEvents = 'auto';
            }, 50);
        }
        
        // Update the active state of navigation links
        highlightCurrentPage();
        
    } catch (error) {
        console.error('Error loading page:', error);
        // Fallback to normal navigation if there's an error
        window.location.href = url;
    }
}

// Initialize page-specific scripts
// Function to attach navigation event listeners
function attachNavigationListeners() {
    // Add event listeners for navigation links
    const navLinks = document.querySelectorAll('[data-navigation]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            if (url) {
                loadPage(url);
            }
        });
    });
}

function initPageScripts() {
    // Re-initialize AOS for new content
    if (window.AOS) {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
    // Re-attach navigation event listeners
    attachNavigationListeners();
    
    // Ensure footer is included
    includeFooter();
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state) {
        loadPage(event.state.url, false);
    }
});

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    // Highlight desktop nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-red-900', 'font-semibold');
            link.classList.remove('text-gray-700');
        }
    });
    
    // Highlight mobile nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        const linkHref = link.getAttribute('href').replace('.html', '');
        const linkPage = linkHref === 'index' || linkHref === '/' ? 'index' : linkHref;
        
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index')) {
            link.classList.add('bg-red-100', 'text-red-900', 'border-l-4', 'border-red-700');
            link.classList.remove('hover:bg-red-50');
        }
    });
}

// Initialize brand splash screen
function initSplashScreen() {
    const splashEl = document.getElementById('splash-screen');
    if (!splashEl) return;

    // Disable body scroll while splash is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Fade out and remove splash screen after 5 seconds total (4.5s progress + 0.5s fade transition)
    setTimeout(() => {
        splashEl.classList.add('fade-out');
        document.body.style.overflow = originalOverflow;
        setTimeout(() => {
            splashEl.remove();
        }, 500); // Wait for the transition to finish (total 5000ms)
    }, 4500);
}

document.addEventListener('DOMContentLoaded', function() {
    // Show brand splash screen on load
    initSplashScreen();
    
    // Initialize mainContent variable
    mainContent = document.getElementById('main-content');
    
    // Initialize navbar and other components
    includeNavbar();
    includeFooter();
    
    // Handle navigation clicks
    document.addEventListener('click', function(e) {
        // Check if the clicked element or its parent is a navigation link
        let target = e.target.closest('[data-navigation]');
        if (target && target.tagName === 'A') {
            e.preventDefault();
            const href = target.getAttribute('href');
            if (href !== window.location.pathname) {
                loadPage(href);
            }
        }
    });
    
    // Initialize page scripts
    initPageScripts();
    
    // Add smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Adjust based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    // Components already initialized above; avoid duplicate inclusion

    // Log initialization
    console.log('Components initialized');
});
