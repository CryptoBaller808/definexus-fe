import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { X, Settings, Cookie, Shield, BarChart3 } from 'lucide-react'

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      // Initialize analytics if user consented
      if (savedPreferences.analytics) {
        initializeAnalytics()
      }
    }

    // Listen for custom event to open cookie settings
    const handleOpenCookieSettings = () => {
      setShowSettings(true)
    }

    window.addEventListener('openCookieSettings', handleOpenCookieSettings)

    return () => {
      window.removeEventListener('openCookieSettings', handleOpenCookieSettings)
    }
  }, [])

  const initializeAnalytics = () => {
    // Google Analytics 4 initialization
    if (typeof window !== 'undefined' && !window.gtag) {
      // Create script tag for Google Analytics
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
      document.head.appendChild(script)

      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', 'GA_MEASUREMENT_ID', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      })

      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(newPreferences)
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences))
    setShowBanner(false)
    setShowSettings(false)
    initializeAnalytics()
  }

  const handleAcceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(newPreferences)
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
    if (preferences.analytics) {
      initializeAnalytics()
    }
  }

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const openSettings = () => {
    setShowSettings(true)
  }

  if (!showBanner && !showSettings) return null

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-lg">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-3 flex-1">
                <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">We value your privacy</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                    You can customize your preferences by clicking "Cookie Settings".
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:ml-4">
                <Button 
                  onClick={openSettings}
                  variant="outline" 
                  className="text-sm px-4 py-2 border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Cookie Settings
                </Button>
                <Button 
                  onClick={handleAcceptNecessary}
                  variant="outline" 
                  className="text-sm px-4 py-2 border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Accept Necessary
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  className="gradient-button text-white text-sm px-6 py-2"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
                <Button 
                  onClick={() => setShowSettings(false)}
                  variant="ghost" 
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-gray-300 mb-6">
                Manage your cookie preferences below. You can enable or disable different types of cookies. 
                Note that disabling some types of cookies may impact your experience on our website.
              </p>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
                    </div>
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">Always Active</div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies are essential for the website to function properly. They enable basic features 
                    like page navigation and access to secure areas of the website.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-blue-500" />
                      <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-purple-500" />
                      <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies enable enhanced functionality and personalization, such as remembering 
                    your preferences and settings.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Cookie className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies are used to track visitors across websites to display relevant 
                    advertisements and marketing content.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button 
                  onClick={handleAcceptNecessary}
                  variant="outline" 
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Accept Necessary Only
                </Button>
                <Button 
                  onClick={handleSavePreferences}
                  className="gradient-button text-white flex-1"
                >
                  Save Preferences
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  className="gradient-button text-white flex-1"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieConsent

