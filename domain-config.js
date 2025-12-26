// Domain Configuration for AutoTrades.site
// This file ensures proper OAuth redirect configuration

const DOMAIN_CONFIG = {
    // Production domain
    PRODUCTION_DOMAIN: 'autotrades.site',
    
    // OAuth Configuration
    OAUTH: {
        DERIV_APP_ID: 117968,
        REDIRECT_URI: 'https://autotrades.site',
        AUTHORIZATION_URL: 'https://oauth.deriv.com/oauth2/authorize',
        LOGOUT_URL: 'https://oauth.deriv.com/oauth2/sessions/logout'
    },
    
    // API Configuration
    API: {
        WEBSOCKET_URL: 'wss://ws.binaryws.com/websockets/v3',
        BASE_URL: 'https://api.deriv.com'
    },
    
    // Site Configuration
    SITE: {
        NAME: 'AutoTrades',
        BRAND: 'deriv',
        LANGUAGE: 'EN'
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DOMAIN_CONFIG;
}

// Global configuration for browser
if (typeof window !== 'undefined') {
    window.DOMAIN_CONFIG = DOMAIN_CONFIG;
}