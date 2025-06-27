import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Target, 
  Globe, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Heart,
  Shield,
  Zap,
  Compass,
  Star,
  CheckCircle
} from 'lucide-react'

function MissionPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.title = 'Our Mission - DeFi Nexus'
  }, [])

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inclusivity",
      description: "We believe financial services should be accessible to everyone, regardless of their geographic location, economic status, or background. Our mission is to break down barriers and create opportunities for global participation in the digital economy.",
      principles: [
        "Universal access to financial tools",
        "No discrimination based on location or status", 
        "Multilingual and multicultural support",
        "Educational resources for all skill levels"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "Security is not just a feature—it's the foundation of everything we build. We implement military-grade security protocols, undergo rigorous audits, and maintain transparency in all our operations to earn and maintain user trust.",
      principles: [
        "Multi-layered security architecture",
        "Regular third-party security audits",
        "Transparent governance and operations",
        "Insurance coverage for user protection"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We push the boundaries of what's possible in decentralized finance by integrating cutting-edge technologies like artificial intelligence, machine learning, and advanced blockchain protocols to create next-generation financial solutions.",
      principles: [
        "Continuous research and development",
        "Integration of emerging technologies",
        "User-centric design and experience",
        "Sustainable and scalable solutions"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Our strength comes from our global community of users, developers, creators, and partners. We foster collaboration, listen to feedback, and build together to create solutions that serve everyone's needs.",
      principles: [
        "Community-driven governance",
        "Open-source development approach",
        "Regular community engagement",
        "Collaborative decision-making"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We're committed to creating positive change on a global scale by providing financial tools that empower individuals, support businesses, and contribute to economic growth in underserved regions worldwide.",
      principles: [
        "Financial inclusion initiatives",
        "Support for emerging markets",
        "Environmental sustainability",
        "Economic empowerment programs"
      ]
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Transparency",
      description: "We operate with complete transparency in our governance, development processes, and business operations. Our users deserve to know how their platform works, how decisions are made, and how their assets are protected.",
      principles: [
        "Open-source code repositories",
        "Public governance processes",
        "Regular community updates",
        "Clear documentation and policies"
      ]
    }
  ]

  const strategicGoals = [
    {
      category: "Short-term Goals (2025)",
      icon: <Target className="w-6 h-6" />,
      goals: [
        {
          title: "Global Platform Launch",
          description: "Complete the rollout of DeFi Nexus V2 across all major markets with full regulatory compliance and multi-language support.",
          metrics: "50+ countries, 10+ languages"
        },
        {
          title: "User Base Expansion", 
          description: "Grow our active user base to 1 million users while maintaining the highest standards of security and user experience.",
          metrics: "1M+ active users"
        },
        {
          title: "Ecosystem Integration",
          description: "Integrate with 100+ DeFi protocols and establish partnerships with major financial institutions worldwide.",
          metrics: "100+ protocol integrations"
        },
        {
          title: "AI Enhancement",
          description: "Deploy advanced AI-powered features for automated portfolio management, risk assessment, and market prediction.",
          metrics: "5+ AI-powered features"
        }
      ]
    },
    {
      category: "Medium-term Goals (2026-2027)",
      icon: <TrendingUp className="w-6 h-6" />,
      goals: [
        {
          title: "Financial Inclusion Initiative",
          description: "Launch comprehensive financial inclusion programs targeting underbanked populations in emerging markets.",
          metrics: "10M+ underbanked users served"
        },
        {
          title: "Creator Economy Platform",
          description: "Establish the world's largest decentralized creator economy platform with integrated NFT marketplaces and content monetization tools.",
          metrics: "1M+ creators onboarded"
        },
        {
          title: "Enterprise Solutions",
          description: "Develop and deploy enterprise-grade DeFi solutions for Fortune 500 companies and government institutions.",
          metrics: "100+ enterprise clients"
        },
        {
          title: "Cross-Chain Dominance",
          description: "Achieve seamless interoperability across all major blockchain networks with instant, low-cost transactions.",
          metrics: "20+ blockchain networks"
        }
      ]
    },
    {
      category: "Long-term Vision (2028+)",
      icon: <Star className="w-6 h-6" />,
      goals: [
        {
          title: "Global Financial Infrastructure",
          description: "Become the backbone of global decentralized finance, processing trillions in transactions and serving billions of users worldwide.",
          metrics: "1B+ global users"
        },
        {
          title: "Economic Transformation",
          description: "Drive the transformation of traditional financial systems by demonstrating the superiority of decentralized, transparent, and inclusive financial infrastructure.",
          metrics: "50% of global DeFi volume"
        },
        {
          title: "Sustainable Finance",
          description: "Lead the industry in sustainable finance practices, carbon neutrality, and environmental responsibility while maintaining growth and innovation.",
          metrics: "Carbon negative operations"
        },
        {
          title: "Educational Impact",
          description: "Educate and empower 100 million people worldwide about decentralized finance, blockchain technology, and digital asset management.",
          metrics: "100M+ people educated"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DN</span>
              </div>
              <span className="text-white font-semibold text-lg">DeFi Nexus</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/mission" className="text-cyan-400 font-medium">Mission</Link>
              <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link>
              <Link to="/ecosystem" className="text-gray-300 hover:text-white transition-colors">Ecosystem</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white">About</Link>
              <Link to="/mission" className="block px-3 py-2 text-cyan-400 font-medium">Mission</Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-300 hover:text-white">Solutions</Link>
              <Link to="/ecosystem" className="block px-3 py-2 text-gray-300 hover:text-white">Ecosystem</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mission</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering Global Communities Through Decentralized Finance
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm">
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Mission</h2>
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
                At DeFi Nexus, our mission is to democratize access to advanced financial services by building an inclusive, 
                secure, and innovative decentralized finance ecosystem that empowers individuals, creators, and businesses 
                worldwide to participate in the global digital economy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Globe className="w-8 h-8 text-cyan-400 mr-3" />
                    What We Do
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop cutting-edge decentralized finance protocols, AI-powered financial tools, and creator economy 
                    platforms that bridge the gap between traditional finance and the decentralized future. Our comprehensive 
                    ecosystem includes everything from automated market makers to NFT marketplaces, all designed with 
                    security, usability, and accessibility at their core.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-8 h-8 text-cyan-400 mr-3" />
                    Why It Matters
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Billions of people worldwide lack access to basic financial services, while existing systems are often 
                    slow, expensive, and exclusive. By leveraging blockchain technology and artificial intelligence, we're 
                    creating a financial system that is truly global, transparent, and accessible to everyone, regardless 
                    of their location or economic status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The fundamental principles that guide every decision we make and every solution we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-blue-900/20 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{value.description}</p>
                
                <div className="space-y-2">
                  {value.principles.map((principle, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {principle}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Strategic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Goals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our roadmap to transforming the global financial landscape through innovation and inclusion
            </p>
          </div>

          <div className="space-y-12">
            {strategicGoals.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center mb-8">
                  <div className="text-cyan-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-3">{goal.title}</h4>
                      <p className="text-gray-300 leading-relaxed mb-4">{goal.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm font-medium">
                        <Award className="w-4 h-4 mr-2" />
                        {goal.metrics}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl p-8 md:p-12 border border-cyan-400/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of the revolution that's reshaping the future of finance. Together, we can build 
              a more inclusive, transparent, and accessible financial system for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ecosystem" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Explore Our Ecosystem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DN</span>
              </div>
              <span className="text-white font-semibold text-lg">DeFi Nexus</span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Pioneering the future of decentralized finance through innovation, security, and community.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-gray-400">© 2025 DeFi Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MissionPage

