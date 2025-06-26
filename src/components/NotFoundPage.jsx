import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft, AlertCircle, Compass, RefreshCw } from 'lucide-react'

function NotFoundPage() {
  useEffect(() => {
    // Track 404 page views for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: '404 - Page Not Found',
        page_location: window.location.href,
        page_path: window.location.pathname,
        custom_parameters: {
          error_type: '404',
          referrer: document.referrer
        }
      })
    }
  }, [])

  const handleRefresh = () => {
    window.location.reload()
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
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
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text animate-pulse">
              404
            </div>
            <div className="absolute inset-0 text-9xl font-bold text-cyan-400/20 blur-sm">
              404
            </div>
          </div>
        </div>

        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30 mb-6">
            <AlertCircle className="w-12 h-12 text-red-400 animate-bounce" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the decentralized void. 
            Don't worry, even the best explorers sometimes take a wrong turn in the DeFi space.
          </p>
          <p className="text-gray-400">
            Error Code: 404 | Page Not Found
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Home className="w-5 h-5" />
              <span>Back to Homepage</span>
            </Link>
            
            <button
              onClick={handleGoBack}
              className="inline-flex items-center space-x-3 bg-slate-800/50 text-white px-8 py-4 rounded-xl font-semibold border border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>

            <button
              onClick={handleRefresh}
              className="inline-flex items-center space-x-3 bg-slate-800/50 text-white px-8 py-4 rounded-xl font-semibold border border-slate-600 hover:border-purple-400 hover:bg-slate-700/50 transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Refresh Page</span>
            </button>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Explore Our Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/ecosystem"
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Our Ecosystem
              </h3>
              <p className="text-gray-300 text-sm">
                Discover our interconnected DeFi platforms
              </p>
            </Link>

            <Link
              to="/blog"
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Blog & Insights
              </h3>
              <p className="text-gray-300 text-sm">
                Latest DeFi trends and analysis
              </p>
            </Link>

            <Link
              to="/team"
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Our Team
              </h3>
              <p className="text-gray-300 text-sm">
                Meet the innovators behind DeFi Nexus
              </p>
            </Link>

            <Link
              to="/careers"
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                Careers
              </h3>
              <p className="text-gray-300 text-sm">
                Join our mission to revolutionize finance
              </p>
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help?
          </h2>
          <p className="text-gray-300 mb-6">
            If you believe this is an error or need assistance, please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@definexus.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              <span>Contact Support</span>
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-xl font-semibold border border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
            >
              <span>Browse Documentation</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFoundPage

