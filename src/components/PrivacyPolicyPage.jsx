import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react'

function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email address and contact information</li>
                  <li>Account credentials and authentication data</li>
                  <li>Transaction history and wallet addresses</li>
                  <li>Communication preferences</li>
                </ul>
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and interaction data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  as well as to communicate with you about your account and our services.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and operate our DeFi platform services</li>
                  <li>Process transactions and maintain account security</li>
                  <li>Send important notifications and updates</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Information Sharing and Disclosure</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">We may share information:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Multi-factor authentication requirements</li>
                  <li>Regular security audits and assessments</li>
                  <li>Secure data storage and transmission protocols</li>
                  <li>Limited access controls and employee training</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Your Rights and Choices</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  You have certain rights regarding your personal information, including the right to 
                  access, update, or delete your data.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability and export options</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Cookies and Tracking</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and provide personalized content.
                </p>
                <p>
                  You can manage your cookie preferences through our cookie settings, accessible 
                  via the footer of our website or through your browser settings.
                </p>
                <Link 
                  to="/cookie-policy" 
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Learn more about our Cookie Policy</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-400 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <p><strong>Email:</strong> privacy@definexus.com</p>
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
            to="/terms"
            className="inline-flex items-center justify-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-xl font-semibold border border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>Terms of Service</span>
          </Link>
          <Link
            to="/cookie-policy"
            className="inline-flex items-center justify-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-xl font-semibold border border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <Shield className="w-5 h-5" />
            <span>Cookie Policy</span>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicyPage

