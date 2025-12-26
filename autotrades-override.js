/**
 * Autotrades App ID Override System
 * Ensures all OAuth flows use the correct Autotrades app ID (116162)
 */

(function() {
    'use strict';
    
    const AUTOTRADES_APP_ID = '116162';
    const AUTOTRADES_BRAND = 'autotrades';
    
    console.log('🚀 Autotrades Override: Initializing app ID override system');
    
    // AGGRESSIVE OVERRIDE: Patch the X() function that returns app ID
    let originalX = null;
    
    function patchAppIdFunction() {
        // Look for the X function in the global scope
        if (window.X && typeof window.X === 'function') {
            if (!originalX) {
                originalX = window.X;
                console.log('🔧 Autotrades Override: Patching X() function');
            }
            window.X = function() {
                console.log('🔄 Autotrades Override: X() called, returning', AUTOTRADES_APP_ID);
                return AUTOTRADES_APP_ID;
            };
        }
        
        // Also patch any getAppId functions
        if (window.getAppId && typeof window.getAppId === 'function') {
            window.getAppId = function() {
                console.log('🔄 Autotrades Override: getAppId() called, returning', AUTOTRADES_APP_ID);
                return AUTOTRADES_APP_ID;
            };
        }
    }
    
    // Override window.location methods to intercept OAuth redirects
    const originalReplace = window.location.replace;
    const originalAssign = window.location.assign;
    
    function overrideUrl(url) {
        if (typeof url === 'string' && url.includes('oauth.deriv.com')) {
            // Parse the URL
            const urlObj = new URL(url);
            
            // Override app_id parameter
            urlObj.searchParams.set('app_id', AUTOTRADES_APP_ID);
            urlObj.searchParams.set('brand', AUTOTRADES_BRAND);
            
            const newUrl = urlObj.toString();
            console.log('🔄 Autotrades Override: Redirecting with correct app ID');
            console.log('   Original:', url);
            console.log('   Modified:', newUrl);
            
            return newUrl;
        }
        return url;
    }
    
    // Override window.location.replace
    window.location.replace = function(url) {
        return originalReplace.call(this, overrideUrl(url));
    };
    
    // Override window.location.assign
    window.location.assign = function(url) {
        return originalAssign.call(this, overrideUrl(url));
    };
    
    // Override window.open for popup-based OAuth
    const originalOpen = window.open;
    window.open = function(url, name, features) {
        return originalOpen.call(this, overrideUrl(url), name, features);
    };
    
    // Override any fetch requests to OAuth endpoints
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
        if (typeof input === 'string' && input.includes('oauth.deriv.com')) {
            input = overrideUrl(input);
        } else if (input instanceof Request && input.url.includes('oauth.deriv.com')) {
            input = new Request(overrideUrl(input.url), input);
        }
        return originalFetch.call(this, input, init);
    };
    
    // AGGRESSIVE: Override localStorage to force app ID
    const originalSetItem = localStorage.setItem;
    const originalGetItem = localStorage.getItem;
    
    localStorage.setItem = function(key, value) {
        // If someone tries to set an app ID, override it
        if (key && (key.includes('app_id') || key.includes('appId'))) {
            console.log('🔧 Autotrades Override: Intercepting localStorage.setItem for app ID');
            value = AUTOTRADES_APP_ID;
        }
        return originalSetItem.call(this, key, value);
    };
    
    localStorage.getItem = function(key) {
        const value = originalGetItem.call(this, key);
        // If someone requests an app ID, return ours
        if (key && (key.includes('app_id') || key.includes('appId')) && value && value !== AUTOTRADES_APP_ID) {
            console.log('🔧 Autotrades Override: Intercepting localStorage.getItem for app ID, returning', AUTOTRADES_APP_ID);
            return AUTOTRADES_APP_ID;
        }
        return value;
    };
    
    // Monitor for dynamic configuration changes
    function overrideConfigurations() {
        const configObjects = [
            'config',
            'appConfig', 
            'derivConfig',
            'oauthConfig',
            'authConfig'
        ];
        
        configObjects.forEach(configName => {
            if (window[configName] && typeof window[configName] === 'object') {
                if (window[configName].app_id && window[configName].app_id !== AUTOTRADES_APP_ID) {
                    console.log(`🔧 Autotrades Override: Updating ${configName}.app_id from ${window[configName].app_id} to ${AUTOTRADES_APP_ID}`);
                    window[configName].app_id = AUTOTRADES_APP_ID;
                }
                if (window[configName].brand && window[configName].brand !== AUTOTRADES_BRAND) {
                    console.log(`🔧 Autotrades Override: Updating ${configName}.brand to ${AUTOTRADES_BRAND}`);
                    window[configName].brand = AUTOTRADES_BRAND;
                }
            }
        });
        
        // Override API configurations
        if (window.DerivAPI) {
            if (window.DerivAPI.app_id !== AUTOTRADES_APP_ID) {
                console.log('🔧 Autotrades Override: Updating DerivAPI.app_id');
                window.DerivAPI.app_id = AUTOTRADES_APP_ID;
            }
        }
        
        // Override OAuth configurations
        if (window.OAuth) {
            if (window.OAuth.app_id !== AUTOTRADES_APP_ID) {
                console.log('🔧 Autotrades Override: Updating OAuth.app_id');
                window.OAuth.app_id = AUTOTRADES_APP_ID;
            }
        }
        
        // Patch the X() function
        patchAppIdFunction();
    }
    
    // Run configuration override immediately and periodically
    overrideConfigurations();
    
    // Set up aggressive periodic checks
    setInterval(overrideConfigurations, 1000);
    
    // Override on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', overrideConfigurations);
    } else {
        setTimeout(overrideConfigurations, 100);
    }
    
    // Override when page becomes visible (tab switching)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            setTimeout(overrideConfigurations, 100);
        }
    });
    
    // Override when scripts load
    window.addEventListener('load', function() {
        setTimeout(overrideConfigurations, 500);
        setTimeout(overrideConfigurations, 1000);
        setTimeout(overrideConfigurations, 2000);
    });
    
    console.log('✅ Autotrades Override: System initialized successfully');
    
})();