import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { 
  Globe, 
  Shield, 
  Zap, 
  ChevronDown, 
  Menu, 
  X,
  ArrowRight,
  Star,
  TrendingUp,
  Palette,
  Brain,
  Coins,
  Users,
  Sparkles,
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'
import { Link } from 'react-router-dom'
import defiNexusLogo from '/defi-nexus-logo-new.png'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const featureCards = [
    {
      icon: Coins,
      title: "DeFi Solutions",
      description: "Advanced decentralized finance protocols with yield optimization and liquidity management.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      delay: "delay-100"
    },
    {
      icon: Palette,
      title: "Creator Economy",
      description: "Empowering artists and creators with NFT marketplaces and tokenized content platforms.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      delay: "delay-200"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Machine learning algorithms for smart contract optimization and predictive analytics.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      delay: "delay-300"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security protocols with multi-signature wallets and audit compliance.",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      delay: "delay-400"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Ultra-fast transaction processing with minimal fees and maximum throughput efficiency.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      delay: "delay-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide accessibility with multi-chain support and cross-border payment solutions.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      delay: "delay-600"
    }
  ]

  const ecosystemPlatforms = [
    {
      name: "NomadPay",
      description: "Global Web3 Payroll Solutions",
      color: "from-green-500 to-emerald-500",
      icon: Users
    },
    {
      name: "Zalary",
      description: "AI-Driven HR & Compliance Platform",
      color: "from-blue-500 to-cyan-500",
      icon: Brain
    },
    {
      name: "DigitalBlock.Exchange",
      description: "Trade, Swap, and Earn Digital Assets",
      color: "from-purple-500 to-pink-500",
      icon: TrendingUp
    },
    {
      name: "Muse Art Creative Sphere",
      description: "The Future of Art, Culture & Tokens",
      color: "from-orange-500 to-red-500",
      icon: Palette
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/20 animate-gradient-shift"></div>
        
        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={defiNexusLogo} 
                  alt="DeFi Nexus Logo" 
                  className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                DeFi Nexus
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">About</Link>
              <Link to="/mission" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Mission</Link>
              <Link to="/solutions" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Solutions</Link>
              <Link to="/ecosystem" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Ecosystem</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Contact</Link>
              <div className="relative group">
                <button 
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center font-medium"
                >
                  More <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isMoreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl z-50 animate-slide-down">
                    <div className="py-2">
                      <Link 
                        to="/careers" 
                        className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                        onClick={() => setIsMoreDropdownOpen(false)}
                      >
                        Careers
                      </Link>
                      <Link 
                        to="/team" 
                        className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                        onClick={() => setIsMoreDropdownOpen(false)}
                      >
                        Team
                      </Link>
                      <Link 
                        to="/whitepapers" 
                        className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                        onClick={() => setIsMoreDropdownOpen(false)}
                      >
                        Whitepapers
                      </Link>
                      <div className="border-t border-slate-700 my-2"></div>
                      <Link 
                        to="/terms" 
                        className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                        onClick={() => setIsMoreDropdownOpen(false)}
                      >
                        Terms of Service
                      </Link>
                      <Link 
                        to="/privacy-policy" 
                        className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                        onClick={() => setIsMoreDropdownOpen(false)}
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        to="/cookie-policy" 
                        className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                        onClick={() => setIsMoreDropdownOpen(false)}
                      >
                        Cookie Policy
                      </Link>
                      <div className="border-t border-slate-700 mt-2 pt-2">
                        <a 
                          href="#investment-disclaimer" 
                          className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                          onClick={() => setIsMoreDropdownOpen(false)}
                        >
                          Investment Disclaimer
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-slate-700 pt-4 animate-slide-down">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Home</Link>
                <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">About</Link>
                <Link to="/mission" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Mission</Link>
                <Link to="/solutions" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Solutions</Link>
                <Link to="/ecosystem" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Ecosystem</Link>
                <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Contact</Link>
                
                {/* More Section for Mobile */}
                <div className="border-t border-slate-700 pt-4 mt-4">
                  <div className="text-gray-400 text-sm font-medium mb-3">More</div>
                  <div className="flex flex-col space-y-3 pl-4">
                    <Link to="/careers" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Careers</Link>
                    <Link to="/team" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Team</Link>
                    <Link to="/whitepapers" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Whitepapers</Link>
                    <div className="text-gray-400 text-sm font-medium">Legal</div>
                    <div className="flex flex-col space-y-2 pl-4">
                      <Link to="/privacy-policy" className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm">Privacy Policy</Link>
                      <Link to="/terms" className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm">Terms of Service</Link>
                      <Link to="/cookie-policy" className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm">Cookie Policy</Link>
                    </div>
                    <a href="#investment-disclaimer" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">Investment Disclaimer</a>
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Enhanced Logo with Animation */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block mb-6">
              <img 
                src={defiNexusLogo} 
                alt="DeFi Nexus Logo" 
                className="w-32 h-32 mx-auto animate-float-gentle drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">DeFi NEXUS</h1>
          </div>

          {/* Enhanced Main Heading with Staggered Animation */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                DeFi NEXUS
              </span>
            </h1>
          </div>

          {/* Enhanced Subheading */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-wide">
              Empowering the Future through
            </h2>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-wide">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Finance, Art, and AI
              </span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From decentralized payments to the creator economy — we are building an intelligent, 
              inclusive global ecosystem that transforms how we interact with digital assets.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/ecosystem">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 group">
                Explore Our Ecosystem 
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 group">
              Join the Movement
              <Sparkles className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="animate-bounce-slow">
              <p className="text-gray-400 mb-2 text-sm tracking-wide">Scroll to explore</p>
              <ChevronDown className="w-6 h-6 text-gray-400 mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Feature Cards Section */}
      <section className="py-20 relative" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience the next generation of decentralized finance with our cutting-edge platform that combines innovation, security, and accessibility.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <div 
                  key={index}
                  className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${card.delay} animate-fade-in-up`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Ecosystem Section */}
      <section className="py-20 relative" id="ecosystem">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover the interconnected platforms that make up the DeFi Nexus ecosystem, each designed to revolutionize different aspects of the digital economy.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemPlatforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <div 
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {platform.description}
                  </p>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                    Learn More
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Section */}
      <section className="py-20 relative" id="why-choose">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose DeFi Nexus?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide cutting-edge DeFi solutions with unmatched security, performance, and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                Unmatched Security
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Built with enterprise-grade security protocols to protect your assets and transactions.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-200">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                Lightning Fast
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Experience ultra-fast transactions with minimal fees and maximum efficiency.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-400">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                Global Access
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Access DeFi services from anywhere in the world with our decentralized platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust DeFi Nexus for their decentralized finance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Get Started Today
              </Button>
              <Button className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Disclaimer Section */}
      <section id="investment-disclaimer" className="py-16 bg-slate-800/30 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Investment Disclaimer</h2>
              <p className="text-gray-300 text-lg">
                Important information regarding investment risks and regulatory compliance
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Risk Warning:</strong> Trading and investing in cryptocurrencies, digital assets, and DeFi protocols involves substantial risk of loss and is not suitable for all investors. The value of digital assets can be extremely volatile and may result in significant financial loss.
                </p>
                
                <p>
                  <strong className="text-white">No Investment Advice:</strong> The information provided on this platform is for educational and informational purposes only and should not be construed as investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the website's content as such.
                </p>
                
                <p>
                  <strong className="text-white">Regulatory Compliance:</strong> DeFi Nexus operates in compliance with applicable laws and regulations. However, the regulatory landscape for digital assets is evolving, and future regulatory changes may impact the availability or functionality of our services.
                </p>
                
                <p>
                  <strong className="text-white">Due Diligence:</strong> Before engaging with any DeFi protocols or digital asset investments, you should conduct your own research and due diligence. Consider consulting with qualified financial advisors who understand the risks associated with digital assets.
                </p>
                
                <p>
                  <strong className="text-white">Platform Risks:</strong> While we implement robust security measures, smart contracts and DeFi protocols may contain bugs, vulnerabilities, or other issues that could result in loss of funds. Users participate at their own risk.
                </p>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mt-8">
                  <p className="text-red-400 font-medium">
                    <strong>Important:</strong> Never invest more than you can afford to lose. Past performance does not guarantee future results. Digital assets are highly speculative and volatile investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Social Media */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-700 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={defiNexusLogo} 
                  alt="DeFi Nexus Logo" 
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  DeFi Nexus
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                Empowering the future through Finance, Art, and AI with cutting-edge DeFi solutions.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
                <li><Link to="/ecosystem" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Our Ecosystem</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Careers</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Blog</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Whitepaper</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link></li>
                <li><button onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Cookie Settings</button></li>
                <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 DeFi Nexus. All rights reserved. Empowering the future through Finance, Art, and AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

