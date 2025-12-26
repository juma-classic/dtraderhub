/**
 * Autotrades Deriv OAuth Login Implementation
 * App ID: 116162
 * Brand: autotrades
 */

class AutotradesAuth {
    constructor() {
        this.appId = '116162';
        this.brand = 'autotrades';
        this.oauthBaseUrl = 'https://oauth.deriv.com/oauth2/authorize';
        this.language = 'EN';
        
        // Initialize on page load
        this.init();
    }

    /**
     * Initialize authentication system
     */
    init() {
        // Handle OAuth callback if present
        this.handleOAuthCallback();
        
        // Update UI based on current auth status
        this.updateAuthUI();
        
        // Set up event listeners
        this.setupEventListeners();
    }

    /**
     * Check if user is authenticated
     */
    isLoggedIn() {
        const hasToken = !!localStorage.getItem('authToken');
        const hasActiveLogin = !!localStorage.getItem('active_loginid');
        return hasToken && hasActiveLogin;
    }

    /**
     * Handle login button click
     */
    handleLogin() {
        const oauthUrl = `${this.oauthBaseUrl}?app_id=${this.appId}&l=${this.language}&brand=${this.brand}`;
        
        // Show loading state
        this.setLoadingState(true);
        
        // Redirect to Deriv OAuth (seamless UX)
        window.location.replace(oauthUrl);
    }

    /**
     * Handle OAuth callback after redirect
     */
    handleOAuthCallback() {
        // Check for OAuth callback parameters in URL
        const urlParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        
        // Try both URL search params and hash params
        const token = urlParams.get('token') || hashParams.get('token');
        const accounts = urlParams.get('accounts') || hashParams.get('accounts');
        const acct1 = urlParams.get('acct1') || hashParams.get('acct1');
        const cur1 = urlParams.get('cur1') || hashParams.get('cur1');
        
        if (token) {
            try {
                // Store authentication data
                localStorage.setItem('authToken', token);
                
                if (accounts) {
                    const accountsList = JSON.parse(decodeURIComponent(accounts));
                    localStorage.setItem('accountsList', JSON.stringify(accountsList));
                    
                    // Set first account as active
                    if (accountsList.length > 0) {
                        localStorage.setItem('active_loginid', accountsList[0].loginid);
                    }
                } else if (acct1) {
                    // Fallback for single account
                    localStorage.setItem('active_loginid', acct1);
                    if (cur1) {
                        localStorage.setItem('account_currency', cur1);
                    }
                }
                
                // Clean up URL
                this.cleanupUrl();
                
                // Update UI
                this.updateAuthUI();
                
                // Show success message
                this.showMessage('Login successful! Welcome to Autotrades.', 'success');
                
            } catch (error) {
                console.error('OAuth callback error:', error);
                this.showMessage('Login failed. Please try again.', 'error');
            }
        }
    }

    /**
     * Handle logout
     */
    handleLogout() {
        // Clear all auth data
        localStorage.removeItem('authToken');
        localStorage.removeItem('active_loginid');
        localStorage.removeItem('accountsList');
        localStorage.removeItem('account_currency');
        
        // Update UI
        this.updateAuthUI();
        
        // Show logout message
        this.showMessage('You have been logged out successfully.', 'info');
        
        // Optional: Redirect to Deriv logout
        // window.location.replace('https://oauth.deriv.com/oauth2/sessions/logout');
    }

    /**
     * Update UI based on authentication status
     */
    updateAuthUI() {
        const isAuthenticated = this.isLoggedIn();
        
        // Update login button
        const loginButton = document.getElementById('autotrades-login-btn');
        const userInfo = document.getElementById('autotrades-user-info');
        
        if (loginButton) {
            loginButton.style.display = isAuthenticated ? 'none' : 'block';
        }
        
        if (userInfo) {
            if (isAuthenticated) {
                userInfo.style.display = 'block';
                this.updateUserInfo();
            } else {
                userInfo.style.display = 'none';
            }
        }
        
        // Update any other auth-dependent elements
        this.updateAuthElements(isAuthenticated);
    }

    /**
     * Update user information display
     */
    updateUserInfo() {
        const activeLoginId = localStorage.getItem('active_loginid');
        const currency = localStorage.getItem('account_currency') || 'USD';
        
        const userInfo = document.getElementById('autotrades-user-info');
        if (userInfo && activeLoginId) {
            userInfo.innerHTML = `
                <div class="user-welcome">
                    <span class="welcome-text">Welcome back!</span>
                    <div class="account-info">
                        <span class="account-id">${activeLoginId}</span>
                        <span class="account-currency">${currency}</span>
                    </div>
                    <button class="logout-btn" onclick="autotradesAuth.handleLogout()">
                        Logout
                    </button>
                </div>
            `;
        }
    }

    /**
     * Update auth-dependent elements
     */
    updateAuthElements(isAuthenticated) {
        // Show/hide elements based on auth status
        const authRequired = document.querySelectorAll('[data-auth-required="true"]');
        const authHidden = document.querySelectorAll('[data-auth-hidden="true"]');
        
        authRequired.forEach(element => {
            element.style.display = isAuthenticated ? 'block' : 'none';
        });
        
        authHidden.forEach(element => {
            element.style.display = isAuthenticated ? 'none' : 'block';
        });
    }

    /**
     * Set loading state
     */
    setLoadingState(loading) {
        const loginButton = document.getElementById('autotrades-login-btn');
        if (loginButton) {
            if (loading) {
                loginButton.innerHTML = '<span class="loading-spinner"></span> Redirecting...';
                loginButton.disabled = true;
            } else {
                loginButton.innerHTML = 'Log in';
                loginButton.disabled = false;
            }
        }
    }

    /**
     * Clean up URL after OAuth callback
     */
    cleanupUrl() {
        const url = new URL(window.location);
        url.search = '';
        url.hash = '';
        window.history.replaceState({}, document.title, url.toString());
    }

    /**
     * Show message to user
     */
    showMessage(message, type = 'info') {
        // Create or update message element
        let messageEl = document.getElementById('autotrades-message');
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.id = 'autotrades-message';
            messageEl.className = 'autotrades-message';
            document.body.appendChild(messageEl);
        }
        
        messageEl.className = `autotrades-message autotrades-message--${type}`;
        messageEl.textContent = message;
        messageEl.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 5000);
    }

    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Handle page visibility change (refresh auth status)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.updateAuthUI();
            }
        });
        
        // Handle storage changes (multi-tab sync)
        window.addEventListener('storage', (e) => {
            if (e.key === 'authToken' || e.key === 'active_loginid') {
                this.updateAuthUI();
            }
        });
    }

    /**
     * Get current user data
     */
    getCurrentUser() {
        if (!this.isLoggedIn()) return null;
        
        return {
            token: localStorage.getItem('authToken'),
            loginId: localStorage.getItem('active_loginid'),
            currency: localStorage.getItem('account_currency'),
            accounts: JSON.parse(localStorage.getItem('accountsList') || '[]')
        };
    }

    /**
     * Check if user has specific account type
     */
    hasAccountType(type) {
        const accounts = JSON.parse(localStorage.getItem('accountsList') || '[]');
        return accounts.some(account => account.account_type === type);
    }

    /**
     * Switch to different account
     */
    switchAccount(loginId) {
        const accounts = JSON.parse(localStorage.getItem('accountsList') || '[]');
        const account = accounts.find(acc => acc.loginid === loginId);
        
        if (account) {
            localStorage.setItem('active_loginid', loginId);
            localStorage.setItem('account_currency', account.currency || 'USD');
            this.updateAuthUI();
            this.showMessage(`Switched to account ${loginId}`, 'success');
        }
    }
}

// Initialize authentication system
const autotradesAuth = new AutotradesAuth();

// Export for global access
window.autotradesAuth = autotradesAuth;