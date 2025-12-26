/**
 * Autotrades App ID Override System
 * Targeted override to fix OAuth app ID without breaking DBot
 */

(function() {
    'use strict';
    
    const AUTOTRADES_APP_ID = '116162';
    const AUTOTRADES_BRAND = 'autotrades';
    
    console.log('🚀 Autotrades Override: Initializing targeted app ID override');
    
    // Store original functions
    let originalLocationReplace = window.location.replace;
    let originalLocationAssign = window.location.assign;
    let originalWindowOpen = window.open;
    
    // Function to override OAuth URLs only
    function overrideOAuthUrl(url) {
        if (typeof url === 'string' && url.includes('oauth.deriv.com/oauth2/authorize')) {
            const urlObj = new URL(url);
            const originalAppId = urlObj.searchParams.get('app_id');
            
            if (originalAppId && originalAppId !== AUTOTRADES_APP_ID) {
                urlObj.searchParams.set('app_id', AUTOTRADES_APP_ID);
                urlObj.searchParams.set('brand', AUTOTRADES_BRAND);
                
                const newUrl = urlObj.toString();
                console.log('🔄 Autotrades Override: OAuth URL corrected');
                console.log('   Original app_id:', originalAppId);
                console.log('   New app_id:', AUTOTRADES_APP_ID);
                
                return newUrl;
            }
        }
        return url;
    }
    
    // Override window.location.replace (most common method)
    window.location.replace = function(url) {
        return originalLocationReplace.call(this, overrideOAuthUrl(url));
    };
    
    // Override window.location.assign
    window.location.assign = function(url) {
        return originalLocationAssign.call(this, overrideOAuthUrl(url));
    };
    
    // Override window.open
    window.open = function(url, name, features) {
        return originalWindowOpen.call(this, overrideOAuthUrl(url), name, features);
    };
    
    // Monitor for getOauthURL function and patch it when it appears
    let checkCount = 0;
    const maxChecks = 50; // Check for 50 seconds max
    
    function patchGetOauthURL() {
        checkCount++;
        
        // Look for the getOauthURL function in various possible locations
        const possibleLocations = [
            window,
            window.DerivAPI,
            window.OAuth,
            window.config,
            window.appConfig
        ];
        
        let found = false;
        
        possibleLocations.forEach(obj => {
            if (obj && typeof obj === 'object') {
                // Check for getOauthURL function
                if (typeof obj.getOauthURL === 'function') {
                    const original = obj.getOauthURL;
                    obj.getOauthURL = function() {
                        const url = original.apply(this, arguments);
                        return overrideOAuthUrl(url);
                    };
                    console.log('🔧 Autotrades Override: Patched getOauthURL function');
                    found = true;
                }
                
                // Check for nested objects
                Object.keys(obj).forEach(key => {
                    if (obj[key] && typeof obj[key] === 'object' && typeof obj[key].getOauthURL === 'function') {
                        const original = obj[key].getOauthURL;
                        obj[key].getOauthURL = function() {
                            const url = original.apply(this, arguments);
                            return overrideOAuthUrl(url);
                        };
                        console.log(`🔧 Autotrades Override: Patched ${key}.getOauthURL function`);
                        found = true;
                    }
                });
            }
        });
        
        // Continue checking if not found and within limit
        if (!found && checkCount < maxChecks) {
            setTimeout(patchGetOauthURL, 1000);
        } else if (found) {
            console.log('✅ Autotrades Override: Successfully patched OAuth URL generation');
        }
    }
    
    // Start monitoring for getOauthURL function
    setTimeout(patchGetOauthURL, 1000);
    
    // Also check when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(patchGetOauthURL, 500);
        });
    }
    
    // Check when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(patchGetOauthURL, 1000);
    });
    
    console.log('✅ Autotrades Override: Targeted override system initialized');
    
})();