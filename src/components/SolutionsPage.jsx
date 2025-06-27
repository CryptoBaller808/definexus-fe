import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { ArrowLeft, Coins, Palette, Brain, Shield, Zap, Globe, ChevronRight, Check, Star, TrendingUp, Users, Award } from 'lucide-react'

function SolutionsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.title = 'Solutions & Services - DeFi Nexus'
  }, [])

  const solutions = [
    {
      icon: Coins,
      title: "DeFi Protocols",
      subtitle: "Advanced Financial Infrastructure",
      description: "Comprehensive suite of decentralized finance protocols including lending, borrowing, yield farming, and liquidity management.",
      features: [
        "Automated yield optimization",
        "Cross-chain liquidity pools",
        "Smart contract auditing",
        "Risk management tools"
      ],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: Palette,
      title: "Creator Economy",
      subtitle: "Empowering Digital Creators",
      description: "Revolutionary platform for creators to monetize their content through NFTs, tokenization, and decentralized marketplaces.",
      features: [
        "NFT minting and trading",
        "Creator royalty systems",
        "Community governance tokens",
        "Content monetization tools"
      ],
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: Brain,
      title: "AI Integration",
      subtitle: "Intelligent Financial Solutions",
      description: "Cutting-edge AI algorithms that optimize smart contracts, predict market trends, and enhance user experience.",
      features: [
        "Predictive analytics",
        "Smart contract optimization",
        "Risk assessment AI",
        "Automated trading strategies"
      ],
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      subtitle: "Enterprise-Grade Protection",
      description: "Multi-layered security infrastructure with advanced encryption, multi-signature wallets, and continuous monitoring.",
      features: [
        "Multi-signature wallets",
        "Real-time threat detection",
        "Insurance protocols",
        "Audit compliance tools"
      ],
      gradient: "from-red-500 to-orange-400"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      subtitle: "Lightning-Fast Transactions",
      description: "Ultra-high performance infrastructure delivering minimal fees, maximum throughput, and instant settlement.",
      features: [
        "Sub-second transactions",
        "Minimal gas fees",
        "Scalable architecture",
        "Load balancing systems"
      ],
      gradient: "from-yellow-500 to-amber-400"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      subtitle: "Worldwide Financial Inclusion",
      description: "Borderless financial services with multi-chain support, localized interfaces, and regulatory compliance.",
      features: [
        "Multi-chain compatibility",
        "Localized user interfaces",
        "Regulatory compliance",
        "24/7 global support"
      ],
      gradient: "from-indigo-500 to-purple-400"
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Returns",
      description: "Optimize your yields with AI-powered strategies and automated portfolio management."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security protocols protect your assets with multi-layered defense systems."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a thriving ecosystem of creators, developers, and users building the future together."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning platform trusted by thousands of users and backed by industry leaders."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Unified Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 pt-32">{/* Added pt-32 for fixed header */}
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Solutions & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive DeFi solutions designed to empower individuals, creators, and businesses with cutting-edge financial technology. From yield optimization to creator monetization, we provide the tools you need to thrive in the digital economy.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-xl mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{solution.subtitle}</p>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose DeFi Nexus</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of our comprehensive DeFi ecosystem designed for maximum efficiency and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className={`mb-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your needs, from individual users to enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-300 mb-4">Perfect for individuals getting started</p>
                <div className="text-4xl font-bold text-white mb-2">Free</div>
                <p className="text-gray-400">Forever</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic DeFi protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Community support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Standard security</span>
                </div>
              </div>
              
              <button className="w-full border-2 border-cyan-400 text-cyan-400 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border-2 border-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <p className="text-gray-300 mb-4">Advanced features for power users</p>
                <div className="text-4xl font-bold text-white mb-2">$29</div>
                <p className="text-gray-400">per month</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">All Starter features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">AI-powered optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced analytics</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Upgrade to Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-300 mb-4">Custom solutions for businesses</p>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <p className="text-gray-400">Contact us</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">All Pro features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Dedicated support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">SLA guarantees</span>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="w-full border-2 border-purple-400 text-purple-400 py-3 rounded-xl font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of users who are already benefiting from our comprehensive DeFi solutions. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Sales</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SolutionsPage

