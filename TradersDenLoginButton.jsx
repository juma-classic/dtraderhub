import React from 'react';

/**
 * TradersDen Login Button Component
 * 
 * This component provides a standardized login button that uses
 * the TradersDen OAuth configuration (App ID: 82255, Brand: tradersden)
 * 
 * Usage:
 * <TradersDenLoginButton />
 * <TradersDenLoginButton className="custom-class" />
 * <TradersDenLoginButton text="Sign in with Deriv" />
 */

const TradersDenLoginButton = ({ 
    className = '', 
    text = 'Login with Deriv',
    style = {},
    disabled = false,
    ...props 
}) => {
    // TradersDen OAuth Configuration
    const TRADERSDEN_CONFIG = {
        APP_ID: '82255',
        BRAND: 'tradersden',
        OAUTH_BASE_URL: 'https://oauth.deriv.com/oauth2/authorize'
    };

    /**
     * Generate Etrades OAuth URL
     * @param {string} language - Language code (default: 'EN')
     * @returns {string} Complete OAuth URL
     */
    const generateOAuthURL = (language = 'EN') => {
        const params = new URLSearchParams({
            app_id: TRADERSDEN_CONFIG.APP_ID,
            l: language.toUpperCase(),
            brand: TRADERSDEN_CONFIG.BRAND
        });
        
        return `${TRADERSDEN_CONFIG.OAUTH_BASE_URL}?${params.toString()}`;
    };

    /**
     * Handle login button click
     */
    const handleLogin = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (disabled) return;

        try {
            // Save current URL for redirect after login
            if (typeof sessionStorage !== 'undefined') {
                sessionStorage.setItem('redirect_url', window.location.href);
            }

            // Get user language preference
            const userLanguage = localStorage.getItem('i18n_language') || 
                                document.documentElement.lang || 
                                navigator.language?.split('-')[0] || 
                                'EN';

            // Generate OAuth URL
            const oauthURL = generateOAuthURL(userLanguage);

            console.log('🔐 TradersDen Login: Redirecting to OAuth...', {
                app_id: TRADERSDEN_CONFIG.APP_ID,
                brand: TRADERSDEN_CONFIG.BRAND,
                language: userLanguage,
                url: oauthURL
            });

            // Redirect to Deriv OAuth
            window.location.replace(oauthURL);

        } catch (error) {
            console.error('❌ TradersDen Login Error:', error);
            
            // Show user-friendly error message
            alert('Login service is temporarily unavailable. Please try again in a moment.');
        }
    };

    // Default button styles
    const defaultStyles = {
        backgroundColor: '#ff444f',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.6 : 1,
        ...style
    };

    return (
        <button
            className={`tradersden-login-button ${className}`}
            onClick={handleLogin}
            disabled={disabled}
            style={defaultStyles}
            data-testid="tradersden-login-button"
            aria-label="Login with Deriv using TradersDen"
            {...props}
        >
            {text}
        </button>
    );
};

export default TradersDenLoginButton;

/**
 * Hook for programmatic login
 * 
 * Usage:
 * const { login, isLoading } = useTradersDenLogin();
 * 
 * const handleCustomLogin = () => {
 *     login();
 * };
 */
export const useTradersDenLogin = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const login = React.useCallback(async (language = 'EN') => {
        setIsLoading(true);
        
        try {
            // Save current URL for redirect after login
            if (typeof sessionStorage !== 'undefined') {
                sessionStorage.setItem('redirect_url', window.location.href);
            }

            // Generate OAuth URL
            const params = new URLSearchParams({
                app_id: '82255',
                l: language.toUpperCase(),
                brand: 'tradersden'
            });
            
            const oauthURL = `https://oauth.deriv.com/oauth2/authorize?${params.toString()}`;

            console.log('🔐 TradersDen Login Hook: Redirecting...', { oauthURL });

            // Redirect to OAuth
            window.location.replace(oauthURL);

        } catch (error) {
            console.error('❌ TradersDen Login Hook Error:', error);
            setIsLoading(false);
            throw error;
        }
    }, []);

    return { login, isLoading };
};

/**
 * Higher-Order Component to wrap existing login buttons
 * 
 * Usage:
 * const EnhancedLoginButton = withTradersDenLogin(ExistingButton);
 */
export const withTradersDenLogin = (WrappedComponent) => {
    return React.forwardRef((props, ref) => {
        const { login } = useTradersDenLogin();

        const handleClick = (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            // Call original onClick if it exists
            if (props.onClick) {
                props.onClick(event);
            }
            
            // Trigger TradersDen login
            login();
        };

        return (
            <WrappedComponent
                {...props}
                ref={ref}
                onClick={handleClick}
                data-tradersden-enhanced="true"
            />
        );
    });
};