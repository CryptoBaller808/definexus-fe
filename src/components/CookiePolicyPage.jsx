import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie, Settings, Eye, Shield } from 'lucide-react'

function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DN</span>
              </div>
              <span className="text-white text-xl font-bold">DeFi Nexus</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl mb-6">
            <Cookie className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Learn how we use cookies and similar technologies to enhance your experience on our platform.
          </p>
          <p className="text-gray-400">
            Last updated: December 25, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="prose prose-invert max-w-none">
            
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. What Are Cookies</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  analyzing how you use our services.
                </p>
                <p>
                  We also use similar technologies such as web beacons, pixels, and local storage to 
                  collect information about your interactions with our platform.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Types of Cookies We Use</h2>
              </div>
              <div className="text-gray-300 space-y-6">
                
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Necessary Cookies</h3>
                  <p className="mb-3">
                    These cookies are essential for the website to function properly. They enable core 
                    functionality such as security, network management, and accessibility.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Load balancing and performance</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Analytics Cookies</h3>
                  <p className="mb-3">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Google Analytics for usage statistics</li>
                    <li>Page views and user journey tracking</li>
                    <li>Performance monitoring and optimization</li>
                    <li>Error tracking and debugging</li>
                  </ul>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Functional Cookies</h3>
                  <p className="mb-3">
                    These cookies enable enhanced functionality and personalization, such as 
                    remembering your preferences and settings.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Wallet connection preferences</li>
                    <li>Notification settings</li>
                  </ul>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Marketing Cookies</h3>
                  <p className="mb-3">
                    These cookies are used to track visitors across websites to display relevant 
                    and engaging advertisements.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Targeted advertising and retargeting</li>
                    <li>Social media integration</li>
                    <li>Campaign performance tracking</li>
                    <li>Third-party advertising networks</li>
                  </ul>
                </div>

              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Third-Party Cookies</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We may allow third-party service providers to place cookies on your device to 
                  provide analytics, advertising, and other services.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                    <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                    <p className="text-sm">
                      Provides website analytics and user behavior insights.
                    </p>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                    <h4 className="font-semibold text-white mb-2">Social Media</h4>
                    <p className="text-sm">
                      Enables social sharing and embedded content from platforms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Managing Your Cookie Preferences</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  You have several options for managing cookies:
                </p>
                
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-300 mb-3">Cookie Settings</h4>
                  <p className="text-cyan-200 text-sm mb-4">
                    Use our cookie preference center to customize which types of cookies you allow.
                  </p>
                  <button 
                    onClick={() => {
                      // This would trigger the cookie settings modal
                      const event = new CustomEvent('openCookieSettings')
                      window.dispatchEvent(event)
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Open Cookie Settings
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Browser Settings</h4>
                  <p>
                    Most web browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Block all cookies or only third-party cookies</li>
                    <li>Delete existing cookies from your device</li>
                    <li>Set up notifications when cookies are being sent</li>
                    <li>Browse in private/incognito mode</li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Settings className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-300 mb-2">Important Note</h4>
                      <p className="text-orange-200 text-sm">
                        Disabling certain cookies may affect the functionality of our website 
                        and limit your access to some features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Cookie Retention</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Different types of cookies are stored for different periods:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                    <h4 className="font-semibold text-white mb-2">Session Cookies</h4>
                    <p className="text-sm">
                      Deleted when you close your browser session.
                    </p>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                    <h4 className="font-semibold text-white mb-2">Persistent Cookies</h4>
                    <p className="text-sm">
                      Stored for a specific period (typically 1-24 months).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-400 rounded-lg flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <p><strong>Email:</strong> privacy@definexus.com</p>
                  <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
                  <p><strong>Address:</strong> DeFi Nexus Privacy Team<br />
                  123 Blockchain Avenue<br />
                  Crypto City, CC 12345</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/privacy-policy"
            className="inline-flex items-center justify-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-xl font-semibold border border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <Shield className="w-5 h-5" />
            <span>Privacy Policy</span>
          </Link>
          <Link
            to="/terms"
            className="inline-flex items-center justify-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-xl font-semibold border border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <Settings className="w-5 h-5" />
            <span>Terms of Service</span>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default CookiePolicyPage

