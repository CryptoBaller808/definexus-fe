import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Globe, Zap, TrendingUp, Palette, Users, Building, ExternalLink, ChevronRight, Star, Award, Shield, Brain, Lock, Cpu, Network, Coins, Palette as PaletteIcon, FileCheck, Gauge } from 'lucide-react'

function EcosystemPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.title = 'Our Ecosystem - DeFi Nexus'
  }, [])

  const ecosystemLayers = [
    {
      title: "DeFi Layer",
      subtitle: "Decentralized Protocols",
      description: "Advanced decentralized finance protocols featuring automated market makers, yield optimization strategies, liquidity mining, and cross-chain interoperability. Our DeFi infrastructure provides institutional-grade security with retail-friendly user experience.",
      icon: Coins,
      gradient: "from-blue-500 to-cyan-400",
      features: [
        "Automated Market Making (AMM)",
        "Yield Optimization Strategies",
        "Cross-chain Liquidity Pools",
        "Governance Token Mechanics",
        "Flash Loan Capabilities"
      ],
      metrics: {
        tvl: "$2.5B+",
        transactions: "1M+",
        users: "100K+"
      }
    },
    {
      title: "AI Layer",
      subtitle: "Smart Automation",
      description: "Machine learning algorithms that power intelligent contract optimization, predictive analytics for market trends, automated risk assessment, and personalized financial recommendations. Our AI continuously learns and adapts to market conditions.",
      icon: Brain,
      gradient: "from-purple-500 to-pink-400",
      features: [
        "Predictive Market Analytics",
        "Automated Risk Assessment",
        "Smart Contract Optimization",
        "Personalized Recommendations",
        "Fraud Detection Systems"
      ],
      metrics: {
        accuracy: "98.5%",
        models: "50+",
        predictions: "10M+"
      }
    },
    {
      title: "Creator Layer",
      subtitle: "NFT & Content Tools",
      description: "Comprehensive creator economy platform featuring NFT marketplaces, tokenized content distribution, royalty management, and collaborative creation tools. Empowering artists, musicians, and content creators to monetize their work effectively.",
      icon: PaletteIcon,
      gradient: "from-pink-500 to-rose-400",
      features: [
        "NFT Minting & Marketplace",
        "Royalty Distribution",
        "Collaborative Creation Tools",
        "Content Tokenization",
        "Creator Analytics Dashboard"
      ],
      metrics: {
        creators: "25K+",
        nfts: "500K+",
        volume: "$100M+"
      }
    },
    {
      title: "Compliance Layer",
      subtitle: "KYC & AML Solutions",
      description: "Enterprise-grade compliance infrastructure ensuring regulatory adherence across global markets. Automated KYC/AML processes, transaction monitoring, and regulatory reporting tools that scale with your business needs.",
      icon: FileCheck,
      gradient: "from-green-500 to-emerald-400",
      features: [
        "Automated KYC/AML Processing",
        "Real-time Transaction Monitoring",
        "Regulatory Reporting Tools",
        "Global Compliance Framework",
        "Risk Scoring Algorithms"
      ],
      metrics: {
        compliance: "99.9%",
        jurisdictions: "50+",
        checks: "1M+"
      }
    },
    {
      title: "Security Layer",
      subtitle: "Smart Contract Auditing",
      description: "Multi-layered security infrastructure featuring automated smart contract auditing, real-time threat detection, insurance protocols, and emergency response systems. Protecting user assets with military-grade security measures.",
      icon: Shield,
      gradient: "from-red-500 to-orange-400",
      features: [
        "Automated Contract Auditing",
        "Real-time Threat Detection",
        "Insurance Protocol Integration",
        "Emergency Response Systems",
        "Multi-signature Wallet Support"
      ],
      metrics: {
        audits: "1000+",
        threats: "0 Breaches",
        coverage: "$500M+"
      }
    },
    {
      title: "Performance Layer",
      subtitle: "High-Speed Throughput",
      description: "Ultra-fast transaction processing infrastructure capable of handling millions of transactions per second. Layer 2 scaling solutions, optimistic rollups, and state channels ensure lightning-fast user experience.",
      icon: Gauge,
      gradient: "from-yellow-500 to-amber-400",
      features: [
        "Layer 2 Scaling Solutions",
        "Optimistic Rollup Technology",
        "State Channel Implementation",
        "Parallel Transaction Processing",
        "Dynamic Fee Optimization"
      ],
      metrics: {
        tps: "100K+",
        latency: "<100ms",
        uptime: "99.99%"
      }
    }
  ]

  const platforms = [
    {
      name: "NomadPay",
      subtitle: "Global Web3 Payroll Solutions",
      description: "Revolutionary payroll platform enabling seamless global payments with cryptocurrency and traditional currencies. Perfect for remote teams and international businesses.",
      features: [
        "Multi-currency payroll processing",
        "Automated tax compliance",
        "Real-time payment tracking",
        "Global contractor management"
      ],
      icon: Globe,
      gradient: "from-blue-500 to-cyan-400",
      status: "Live",
      users: "10K+",
      volume: "$50M+"
    },
    {
      name: "Zalary",
      subtitle: "AI-Driven HR & Compliance Platform",
      description: "Intelligent HR management system powered by AI, providing comprehensive compliance tools, employee analytics, and automated workflow optimization.",
      features: [
        "AI-powered recruitment",
        "Compliance automation",
        "Performance analytics",
        "Employee engagement tools"
      ],
      icon: Brain,
      gradient: "from-purple-500 to-pink-400",
      status: "Live",
      users: "5K+",
      volume: "$25M+"
    },
    {
      name: "DigitalBlock.Exchange",
      subtitle: "Trade, Swap, and Earn Digital Assets",
      description: "Advanced cryptocurrency exchange with DeFi integration, offering spot trading, yield farming, and innovative earning opportunities for digital assets.",
      features: [
        "Advanced trading engine",
        "DeFi yield farming",
        "Staking rewards",
        "Portfolio analytics"
      ],
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-400",
      status: "Live",
      users: "15K+",
      volume: "$75M+"
    },
    {
      name: "Muse Art Creative Sphere",
      subtitle: "The Future of Art, Culture & Tokens",
      description: "Comprehensive NFT marketplace and creative platform where artists, collectors, and enthusiasts converge to create, trade, and celebrate digital art.",
      features: [
        "NFT marketplace",
        "Creator tools",
        "Community features",
        "Royalty management"
      ],
      icon: Palette,
      gradient: "from-pink-500 to-rose-400",
      status: "Live",
      users: "8K+",
      volume: "$30M+"
    }
  ]

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
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive, interconnected platform where finance, creativity, and artificial intelligence 
              converge to create unprecedented opportunities for innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Layers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Six Pillars of Innovation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ecosystem is built on six foundational layers, each designed to work seamlessly together 
              while providing specialized functionality for different use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemLayers.map((layer, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${layer.gradient} rounded-xl`}>
                    <layer.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{layer.title}</h3>
                    <p className="text-cyan-400 font-medium">{layer.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{layer.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  {layer.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                  {Object.entries(layer.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-cyan-400 font-bold text-lg">{value}</div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ecosystem Platforms</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our flagship platforms that bring the DeFi Nexus ecosystem to life, 
              each serving unique market needs while contributing to our unified vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${platform.gradient} rounded-xl`}>
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                      <p className="text-cyan-400 font-medium">{platform.subtitle}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    {platform.status}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{platform.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex space-x-6">
                    <div>
                      <div className="text-cyan-400 font-bold">{platform.users}</div>
                      <div className="text-gray-400 text-xs">Active Users</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-bold">{platform.volume}</div>
                      <div className="text-gray-400 text-xs">Volume</div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span className="font-medium">Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Roadmap */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Innovation Roadmap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to continuous innovation drives the evolution of our ecosystem. 
              Here's what's coming next in our journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Q1</span>
                </div>
                <h3 className="text-xl font-bold text-white">2025</h3>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">DAO Governance Launch</h4>
              <p className="text-gray-300 leading-relaxed">
                Introducing decentralized governance mechanisms, allowing community members to 
                participate in platform decisions and protocol upgrades through our native governance token.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Q2</span>
                </div>
                <h3 className="text-xl font-bold text-white">2025</h3>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">AI-Powered Yield Optimization</h4>
              <p className="text-gray-300 leading-relaxed">
                Advanced machine learning algorithms that automatically optimize yield farming strategies, 
                rebalance portfolios, and identify the most profitable opportunities across DeFi protocols.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Q3</span>
                </div>
                <h3 className="text-xl font-bold text-white">2025</h3>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Global Regulatory Compliance</h4>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive regulatory framework implementation across major markets, ensuring 
                full compliance while maintaining the decentralized nature of our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Ecosystem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Become part of the future of finance, art, and AI. Explore our platforms, 
            contribute to our community, and help shape the next generation of decentralized technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hardware-store" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Building className="w-5 h-5 mr-2" />
              Explore Hardware
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EcosystemPage

