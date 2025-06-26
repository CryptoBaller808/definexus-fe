import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield } from 'lucide-react'

function TermsOfServicePage() {
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Please read these terms carefully before using our DeFi platform and services.
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
                <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  By accessing or using DeFi Nexus services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using our services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you and DeFi Nexus. 
                  We reserve the right to update these terms at any time, and your continued use 
                  of our services constitutes acceptance of any changes.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Description of Services</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  DeFi Nexus provides decentralized finance services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Decentralized trading and exchange services</li>
                  <li>Yield farming and liquidity provision tools</li>
                  <li>Smart contract interaction interfaces</li>
                  <li>Portfolio management and analytics</li>
                  <li>Educational resources and market insights</li>
                </ul>
                <p>
                  Our services are provided "as is" and we make no warranties regarding their availability, 
                  accuracy, or performance. Blockchain networks and smart contracts operate independently 
                  of our platform.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. User Responsibilities</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  As a user of DeFi Nexus, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for illegal or unauthorized purposes</li>
                  <li>Not attempt to manipulate or exploit our systems</li>
                  <li>Respect intellectual property rights</li>
                </ul>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-300 mb-2">Important Notice</h4>
                      <p className="text-orange-200 text-sm">
                        You are solely responsible for your private keys, wallet security, and transaction decisions. 
                        DeFi Nexus cannot recover lost funds or reverse blockchain transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Risks and Disclaimers</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  DeFi services involve significant risks, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Smart contract vulnerabilities and bugs</li>
                  <li>Market volatility and potential loss of funds</li>
                  <li>Regulatory changes and compliance requirements</li>
                  <li>Network congestion and transaction failures</li>
                  <li>Impermanent loss in liquidity provision</li>
                  <li>Slippage and front-running in trading</li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">Risk Warning</h4>
                      <p className="text-red-200 text-sm">
                        Never invest more than you can afford to lose. DeFi protocols are experimental 
                        and may result in partial or total loss of funds. Always do your own research.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  To the maximum extent permitted by law, DeFi Nexus shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including 
                  but not limited to loss of profits, data, or use.
                </p>
                <p>
                  Our total liability for any claims arising from your use of our services shall 
                  not exceed the amount you paid to us in the twelve months preceding the claim.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We are not responsible for blockchain network issues</li>
                  <li>We do not guarantee the performance of third-party protocols</li>
                  <li>We are not liable for user errors or security breaches</li>
                  <li>We do not provide investment or financial advice</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Intellectual Property</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  All content, features, and functionality of DeFi Nexus are owned by us or our 
                  licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works of our 
                  content without explicit written permission.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-400 rounded-lg flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Governing Law</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the 
                  laws of [Jurisdiction], without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these terms or your use of our services shall be 
                  resolved through binding arbitration in accordance with the rules of [Arbitration Organization].
                </p>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">8. Contact Information</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <p><strong>Email:</strong> legal@definexus.com</p>
                  <p><strong>Address:</strong> DeFi Nexus Legal Department<br />
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
            to="/cookie-policy"
            className="inline-flex items-center justify-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-xl font-semibold border border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>Cookie Policy</span>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default TermsOfServicePage

