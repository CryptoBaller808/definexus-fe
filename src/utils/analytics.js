// Google Analytics 4 utility functions
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with actual GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Create script tag for Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
      send_page_view: false // We'll send page views manually
    })
  }
}

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: url || window.location.href,
      page_path: url || window.location.pathname
    })
  }
}

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }
}

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('click', 'button', `${buttonName} - ${location}`)
}

// Track navigation
export const trackNavigation = (destination, source) => {
  trackEvent('navigate', 'navigation', `${source} to ${destination}`)
}

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('submit', 'form', formName)
}

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', 'engagement', `${percentage}%`)
}

// Track time on page
export const trackTimeOnPage = (seconds) => {
  trackEvent('timing_complete', 'engagement', 'time_on_page', seconds)
}

// Track user engagement
export const trackEngagement = (action, details) => {
  trackEvent(action, 'engagement', details)
}

// Track ecosystem interactions
export const trackEcosystemInteraction = (platform, action) => {
  trackEvent('ecosystem_interaction', 'platform', `${platform} - ${action}`)
}

// Track feature card interactions
export const trackFeatureCardInteraction = (featureName) => {
  trackEvent('feature_interaction', 'card', featureName)
}

// Check if analytics is enabled
export const isAnalyticsEnabled = () => {
  if (typeof window !== 'undefined') {
    const consent = localStorage.getItem('cookie-consent')
    if (consent) {
      const preferences = JSON.parse(consent)
      return preferences.analytics
    }
  }
  return false
}

// Enhanced ecommerce tracking (for future use)
export const trackPurchase = (transactionId, items, value, currency = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items
    })
  }
}

// Track user properties
export const setUserProperties = (properties) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      custom_map: properties
    })
  }
}

// Track conversion events
export const trackConversion = (conversionName, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionName}`,
      value: value
    })
  }
}

