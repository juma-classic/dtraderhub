/**
 * Custom Login Override for TradersDen Branding
 * This script overrides the default Deriv OAuth login functionality
 * to use App ID 82255 and TradersDen branding
 */

(function() {
    'use strict';
    
    // Configuration for TradersDen
    const TRADERSDEN_CONFIG = {
        APP_ID: '82255',
        BRAND: 'tradersden',
        OAUTH_BASE_URL: 'https://oauth.deriv.com/oauth2/authorize'
    };
    
    /**
     * Generate TradersDen OAuth URL
     * @param {string} language - Language code (default: 'EN')
     * @returns {string} Complete OAuth URL
     */
    // FIXED VERSION:
function generateTradersDenOAuthURL(language = 'EN') {
    const redirect_uri = encodeURIComponent(window.location.origin + '/callback');
    
    const params = new URLSearchParams({
        app_id: TRADERSDEN_CONFIG.APP_ID,
        l: language.toUpperCase(),
        brand: TRADERSDEN_CONFIG.BRAND,
        redirect_uri: redirect_uri  // ADD THIS!
    });
    
    return `${TRADERSDEN_CONFIG.OAUTH_BASE_URL}?${params.toString()}`;
}
    
    /**
     * Handle login button click with TradersDen configuration
     */
    function handleTradersDenLogin() {
        try {
            // Save current URL for redirect after login
            if (typeof sessionStorage !== 'undefined') {
                sessionStorage.setItem('redirect_url', window.location.href);
            }
            
            // Get user language (fallback to EN)
            const userLanguage = localStorage.getItem('i18n_language') || 
                                document.documentElement.lang || 
                                'EN';
            
            // Generate and redirect to OAuth URL
            const oauthURL = generateTradersDenOAuthURL(userLanguage);
            
            console.log('🔐 TradersDen Login: Redirecting to OAuth...', {
                app_id: TRADERSDEN_CONFIG.APP_ID,
                brand: TRADERSDEN_CONFIG.BRAND,
                language: userLanguage,
                url: oauthURL
            });
            
            // Redirect to Deriv OAuth with TradersDen configuration
            window.location.replace(oauthURL);
            
        } catch (error) {
            console.error('❌ TradersDen Login Error:', error);
            
            // Fallback: Show user-friendly error message
            alert('Login service is temporarily unavailable. Please try again in a moment.');
        }
    }
    
    /**
     * Override existing login functionality
     */
    function overrideLoginFunctionality() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeLoginOverride);
        } else {
            initializeLoginOverride();
        }
    }
    
    /**
     * Initialize login button override
     */
    function initializeLoginOverride() {
        // Find and override login buttons
        const loginSelectors = [
            '[data-testid*="login"]',
            'button[class*="login"]',
            'a[href*="oauth"]',
            'button:contains("Log in")',
            'button:contains("Login")',
            'button:contains("Sign in")',
            '.login-button',
            '#login-button',
            '.auth-button'
        ];
        
        // Try to find login buttons using multiple selectors
        loginSelectors.forEach(selector => {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    if (element && !element.hasAttribute('data-tradersden-override')) {
                        // Mark as overridden to avoid duplicate handlers
                        element.setAttribute('data-tradersden-override', 'true');
                        
                        // Remove existing click handlers and add new one
                        element.onclick = null;
                        element.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            handleTradersDenLogin();
                        }, true);
                        
                        console.log('✅ TradersDen: Login button override applied', element);
                    }
                });
            } catch (error) {
                // Silently continue if selector fails
            }
        });
        
        // Also override any window-level login functions
        if (typeof window !== 'undefined') {
            // Override common login function names
            const loginFunctionNames = ['login', 'handleLogin', 'redirectToLogin', 'oauthLogin'];
            
            loginFunctionNames.forEach(funcName => {
                if (typeof window[funcName] === 'function') {
                    const originalFunc = window[funcName];
                    window[funcName] = function(...args) {
                        console.log(`🔄 TradersDen: Intercepted ${funcName} call`);
                        handleTradersDenLogin();
                    };
                }
            });
        }
    }
    
    /**
     * Expose TradersDen login function globally for manual use
     */
    if (typeof window !== 'undefined') {
        window.tradersDenLogin = handleTradersDenLogin;
        window.generateTradersDenOAuthURL = generateTradersDenOAuthURL;
        
        // Also expose configuration for debugging
        window.TRADERSDEN_CONFIG = TRADERSDEN_CONFIG;
    }
    
    // Initialize the override system
    overrideLoginFunctionality();
    
    // Re-run override check periodically for dynamically loaded content
    setInterval(initializeLoginOverride, 2000);
    
    console.log('🚀 TradersDen Login Override System Initialized', TRADERSDEN_CONFIG);
    
})();
