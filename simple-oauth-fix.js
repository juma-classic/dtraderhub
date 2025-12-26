/**
 * Simple OAuth App ID Fix
 * Only activates when user clicks login - doesn't interfere with DBot loading
 */

(function() {
    'use strict';
    
    const AUTOTRADES_APP_ID = '116162';
    const AUTOTRADES_BRAND = 'autotrades';
    
    console.log('🚀 Simple OAuth Fix: Ready to intercept login clicks');
    
    // Wait for page to be fully loaded before doing anything
    window.addEventListener('load', function() {
        console.log('✅ Simple OAuth Fix: Page loaded, monitoring for login clicks');
        
        // Monitor all clicks on the page
        document.addEventListener('click', function(event) {
            const target = event.target;
            const text = (target.textContent || target.innerText || '').toLowerCase();
            
            // Check if this looks like a login button
            if (text.includes('log') || text.includes('sign') || target.className.includes('login')) {
                console.log('🔍 Simple OAuth Fix: Login click detected, will monitor for redirect');
                
                // Set up a short-term monitor for OAuth redirects
                let redirectCount = 0;
                const maxRedirectChecks = 20; // Check for 2 seconds
                
                const checkForRedirect = setInterval(function() {
                    redirectCount++;
                    
                    // Check if we're being redirected to OAuth with wrong app ID
                    const currentUrl = window.location.href;
                    if (currentUrl.includes('oauth.deriv.com/oauth2/authorize')) {
                        const url = new URL(currentUrl);
                        const appId = url.searchParams.get('app_id');
                        
                        if (appId && appId !== AUTOTRADES_APP_ID) {
                            console.log('🔄 Simple OAuth Fix: Correcting OAuth redirect');
                            console.log('   Wrong app_id:', appId);
                            console.log('   Correct app_id:', AUTOTRADES_APP_ID);
                            
                            // Fix the URL
                            url.searchParams.set('app_id', AUTOTRADES_APP_ID);
                            url.searchParams.set('brand', AUTOTRADES_BRAND);
                            
                            // Redirect to corrected URL
                            window.location.href = url.toString();
                            clearInterval(checkForRedirect);
                            return;
                        }
                    }
                    
                    // Stop checking after max attempts
                    if (redirectCount >= maxRedirectChecks) {
                        clearInterval(checkForRedirect);
                    }
                }, 100);
            }
        });
    });
    
})();