// EmailJS Contact Form Integration
(function() {
    'use strict';

    // ============================================================
    // CONFIGURATION - REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
    // ============================================================
    // Get these from: https://dashboard.emailjs.com/
    
    const EMAILJS_CONFIG = {
        publicKey: 'UnTHOEPqC8Lo9xxyR',      // From Account > API Keys
        serviceID: 'service_m6xvz5l',        // From Email Services
        templateID: 'template_mc43xlr'       // From Email Templates
    };

    // ============================================================
    // INITIALIZATION
    // ============================================================
    
    // Initialize EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('✅ EmailJS initialized successfully');
    } else {
        console.error('❌ EmailJS library not loaded');
        return;
    }

    // ============================================================
    // FORM ELEMENTS
    // ============================================================
    
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    const submitButton = form?.querySelector('button[type="submit"]');
    
    if (!form) {
        console.error('❌ Contact form not found');
        return;
    }

    // ============================================================
    // LOADING STATE MANAGEMENT
    // ============================================================
    
    function setLoadingState(isLoading) {
        if (!submitButton) return;
        
        if (isLoading) {
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="animate-spin h-5 w-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
            `;
        } else {
            submitButton.disabled = false;
            submitButton.innerHTML = `
                <svg class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                Envoyer le message
            `;
        }
    }

    // ============================================================
    // SUCCESS MESSAGE DISPLAY
    // ============================================================
    
    function showSuccessMessage() {
        if (successMessage) {
            successMessage.classList.remove('hidden');
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide after 10 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 10000);
        }
    }

    // ============================================================
    // ERROR MESSAGE DISPLAY
    // ============================================================
    
    function showErrorMessage(message) {
        // Create error message if it doesn't exist
        let errorDiv = document.getElementById('formError');
        
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'formError';
            errorDiv.className = 'mt-4 p-4 bg-red-50 border border-red-200 rounded-lg';
            form.appendChild(errorDiv);
        }
        
        errorDiv.innerHTML = `
            <div class="flex items-center text-red-800">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">${message}</span>
            </div>
        `;
        
        errorDiv.classList.remove('hidden');
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide after 8 seconds
        setTimeout(() => {
            errorDiv.classList.add('hidden');
        }, 8000);
    }

    // ============================================================
    // FORM VALIDATION
    // ============================================================
    
    function validateForm(formData) {
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const phone = formData.get('phone')?.trim();
        const subject = formData.get('subject')?.trim();
        const message = formData.get('message')?.trim();
        
        if (!name || name.length < 2) {
            showErrorMessage('Veuillez entrer un nom valide (minimum 2 caractères)');
            return false;
        }
        
        if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showErrorMessage('Veuillez entrer une adresse email valide');
            return false;
        }
        
        if (!phone || phone.length < 8) {
            showErrorMessage('Veuillez entrer un numéro de téléphone valide');
            return false;
        }
        
        if (!subject) {
            showErrorMessage('Veuillez sélectionner un sujet');
            return false;
        }
        
        if (!message) {
            showErrorMessage('Veuillez entrer un message');
            return false;
        }
        
        return true;
    }

    // ============================================================
    // FORM SUBMISSION HANDLER
    // ============================================================
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('📨 Form submission started...');
        
        // Get form data
        const formData = new FormData(form);
        
        // Validate form
        if (!validateForm(formData)) {
            console.log('❌ Form validation failed');
            return;
        }
        
        // Check if EmailJS is configured
        if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY' || 
            EMAILJS_CONFIG.serviceID === 'YOUR_SERVICE_ID' || 
            EMAILJS_CONFIG.templateID === 'YOUR_TEMPLATE_ID') {
            showErrorMessage('⚠️ EmailJS n\'est pas encore configuré. Veuillez ajouter vos identifiants dans js/emailjs-contact.js');
            console.error('❌ EmailJS not configured. Please add your credentials in EMAILJS_CONFIG');
            return;
        }
        
        // Show loading state
        setLoadingState(true);
        
        // Hide any previous messages
        if (successMessage) successMessage.classList.add('hidden');
        const errorDiv = document.getElementById('formError');
        if (errorDiv) errorDiv.classList.add('hidden');
        
        try {
            // Prepare template parameters
            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_email: 'contact@victory-school.com'
            };
            
            console.log('📤 Sending email with params:', templateParams);
            
            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                templateParams
            );
            
            console.log('✅ Email sent successfully!', response);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Track conversion (if you have analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'Contact',
                    'event_label': templateParams.subject
                });
            }
            
        } catch (error) {
            console.error('❌ Failed to send email:', error);
            
            let errorMessage = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
            
            if (error.text) {
                errorMessage += ` (${error.text})`;
            }
            
            showErrorMessage(errorMessage);
            
        } finally {
            // Reset loading state
            setLoadingState(false);
        }
    });

    // ============================================================
    // REAL-TIME FIELD VALIDATION (OPTIONAL)
    // ============================================================
    
    // Add visual feedback for email field
    const emailInput = form.querySelector('#email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                this.classList.add('border-red-500');
                this.classList.remove('border-gray-200');
            } else if (email) {
                this.classList.remove('border-red-500');
                this.classList.add('border-green-500');
            }
        });
        
        emailInput.addEventListener('focus', function() {
            this.classList.remove('border-red-500', 'border-green-500');
        });
    }

    // ============================================================
    // CONSOLE HELPER
    // ============================================================
    
    console.log(`
╔════════════════════════════════════════════════════════════╗
║         EmailJS Contact Form - Configuration Guide         ║
╚════════════════════════════════════════════════════════════╝

📋 TO MAKE THE FORM WORK:

1️⃣  Get your credentials from: https://dashboard.emailjs.com/

2️⃣  Update the EMAILJS_CONFIG object in js/emailjs-contact.js:
   
   • Public Key: Account > API Keys
   • Service ID: Email Services (e.g., 'service_xxxxxx')
   • Template ID: Email Templates (e.g., 'template_xxxxxx')

3️⃣  Create an Email Template with these variables:
   
   {{from_name}}    - Sender's name
   {{from_email}}   - Sender's email
   {{phone}}        - Phone number
   {{subject}}      - Subject selected
   {{message}}      - Message content
   {{to_email}}     - Your school email

4️⃣  Test the form!

📚 Need help? Check EMAIL_FORM_SETUP_GUIDE.md

════════════════════════════════════════════════════════════
    `);

})();
