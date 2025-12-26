/**
 * Autotrades App ID Override System
 * Safe override that doesn't modify read-only properties
 */

(function() {
    'use strict';
    
    const AUTOTRADES_APP_ID = '116162';
    const AUTOTRADES_BRAND = 'autotrades';
    
    console.log('🚀 Autotrades Override: Initializing safe app ID override');
    
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
    
    // Safe override approach - intercept at the source
    let checkCount = 0;
    const maxChecks = 30;
    
    function findAndPatchOAuthFunctions() {
        checkCount++;
        let patched = false;
        
        // Look for common OAuth-related objects and functions
        const targets = [
            { obj: window, path: 'getOauthURL' },
            { obj: window.DerivAPI, path: 'getOauthURL' },
            { obj: window.OAuth, path: 'getOauthURL' },
            { obj: window.config, path: 'getOauthURL' },
            { obj: window.appConfig, path: 'getOauthURL' }
        ];
        
        targets.forEach(target => {
            if (target.obj && typeof target.obj[target.path] === 'function') {
                const original = target.obj[target.path];
                target.obj[target.path] = function() {
                    const url = original.apply(this, arguments);
                    return overrideOAuthUrl(url);
                };
                console.log(`🔧 Autotrades Override: Patched ${target.path} function`);
                patched = true;
            }
        });
        
        // Look for nested objects that might contain OAuth functions
        if (window.modules) {
            Object.keys(window.modules).forEach(key => {
                const module = window.modules[key];
                if (module && typeof module.getOauthURL === 'function') {
                    const original = module.getOauthURL;
                    module.getOauthURL = function() {
                        const url = original.apply(this, arguments);
                        return overrideOAuthUrl(url);
                    };
                    console.log(`🔧 Autotrades Override: Patched modules.${key}.getOauthURL`);
                    patched = true;
                }
            });
        }
        
        // Continue checking if not found and within limit
        if (!patched && checkCount < maxChecks) {
            setTimeout(findAndPatchOAuthFunctions, 1000);
        } else if (patched) {
            console.log('✅ Autotrades Override: Successfully patched OAuth functions');
        }
    }
    
    // Alternative approach: Monitor for OAuth redirects using MutationObserver
    function monitorForRedirects() {
        // Watch for any changes that might trigger redirects
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // Check if any new elements might trigger OAuth
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            // Check for links or buttons that might trigger OAuth
                            const oauthElements = node.querySelectorAll ? 
                                node.querySelectorAll('a[href*="oauth.deriv.com"], button[onclick*="oauth"]') : [];
                            
                            oauthElements.forEach(function(element) {
                                if (element.href && element.href.includes('oauth.deriv.com')) {
                                    element.href = overrideOAuthUrl(element.href);
                                    console.log('🔧 Autotrades Override: Fixed OAuth link');
                                }
                            });
                        }
                    });
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Intercept click events that might trigger OAuth
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // Check if clicked element might trigger OAuth
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
            // Look for OAuth-related attributes or content
            const text = target.textContent || target.innerText || '';
            const onclick = target.getAttribute('onclick') || '';
            
            if (text.toLowerCase().includes('log') || 
                text.toLowerCase().includes('sign') ||
                onclick.includes('oauth') ||
                onclick.includes('login')) {
                
                console.log('🔍 Autotrades Override: Login-related click detected');
                
                // Small delay to allow any OAuth URL generation to complete
                setTimeout(() => {
                    // Check if current URL is an OAuth redirect and fix it
                    if (window.location.href.includes('oauth.deriv.com')) {
                        const correctedUrl = overrideOAuthUrl(window.location.href);
                        if (correctedUrl !== window.location.href) {
                            console.log('🔄 Autotrades Override: Correcting OAuth redirect');
                            window.history.replaceState(null, '', correctedUrl);
                        }
                    }
                }, 100);
            }
        }
    });
    
    // Start monitoring
    setTimeout(findAndPatchOAuthFunctions, 1000);
    
    // Set up DOM monitoring when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(monitorForRedirects, 500);
            setTimeout(findAndPatchOAuthFunctions, 1000);
        });
    } else {
        monitorForRedirects();
        setTimeout(findAndPatchOAuthFunctions, 500);
    }
    
    // Also check when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(findAndPatchOAuthFunctions, 1000);
    });
    
    console.log('✅ Autotrades Override: Safe override system initialized');
    
})();