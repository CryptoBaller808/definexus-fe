import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { 
  Target, 
  Globe, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight
} from 'lucide-react'

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.title = 'About Us - DeFi Nexus'
  }, [])

  const leadershipTeam = [
    {
      name: "Owen Keliʻiholokai",
      title: "CEO",
      bio: "Visionary leader and Web3 strategist with over 15 years of experience in blockchain technology and decentralized finance. Owen has led multiple successful fintech ventures and is passionate about creating inclusive financial systems that empower global communities.",
      image: "/owen-keliiholokai.jpg",
      expertise: ["Web3 Strategy", "DeFi Innovation", "Global Expansion"]
    },
    {
      name: "Maya Keliʻiholokai", 
      title: "COO",
      bio: "Operations expert and community builder dedicated to scaling DeFi Nexus globally. Maya brings extensive experience in operational excellence, team building, and fostering vibrant communities around innovative financial products.",
      image: "/maya-keliiholokai.jpg",
      expertise: ["Operations", "Community Building", "Strategic Partnerships"]
    },
    {
      name: "Aiyana Lehua",
      title: "Head of Ecosystem",
      bio: "Product and innovation expert focused on building the next generation of DeFi tools. Aiyana leads our ecosystem development initiatives and ensures our platform delivers cutting-edge solutions for creators, developers, and financial institutions.",
      image: "/aiyana-lehua.jpg", 
      expertise: ["Product Innovation", "Ecosystem Development", "Technical Strategy"]
    }
  ]

  const timelineEvents = [
    {
      year: "2023",
      title: "Founded in Seychelles",
      description: "DeFi Nexus was established with a mission to democratize access to advanced financial tools and create an inclusive decentralized finance ecosystem.",
      icon: Award,
      status: "completed"
    },
    {
      year: "2024", 
      title: "MVP Launch",
      description: "Successfully launched our minimum viable product, introducing core DeFi protocols, creator economy tools, and AI-powered smart contract optimization to early adopters.",
      icon: TrendingUp,
      status: "completed"
    },
    {
      year: "2025",
      title: "DeFi Nexus V2 Global Expansion", 
      description: "Rolling out our comprehensive platform globally with enhanced features, multi-chain support, and partnerships with leading financial institutions worldwide.",
      icon: Globe,
      status: "in-progress"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-['Montserrat']">
      {/* Unified Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden pt-32">{/* Added pt-32 for fixed header */}
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="defi-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                  <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#defi-pattern)" className="text-cyan-400"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">DeFi Nexus</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Pioneering the Future of Decentralized Finance
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Purpose</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The driving forces behind everything we do at DeFi Nexus
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower global communities through open financial systems that provide 
                accessible, secure, and innovative solutions for the decentralized economy.
              </p>
            </div>

            {/* Vision */}
            <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                A decentralized world where finance is inclusive, transparent, and secure, 
                enabling everyone to participate in the global economy regardless of their location or background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leadership <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visionary leaders driving innovation in decentralized finance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-cyan-400/30"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4 text-lg">{member.title}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Company <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key achievements that define our journey in decentralized finance
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Horizontal Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform -translate-y-1/2"></div>
                
                <div className="flex justify-between items-center">
                  {timelineEvents.map((event, index) => (
                    <div 
                      key={index}
                      className={`relative flex flex-col items-center max-w-xs transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 300}ms` }}
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                          <event.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Content Card */}
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center">
                        <span className="text-cyan-400 font-bold text-2xl mb-2 block">{event.year}</span>
                        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm">{event.description}</p>
                        
                        <div className="mt-4">
                          {event.status === 'completed' ? (
                            <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                              ✓ Completed
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                              🚀 In Progress
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
                
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start mb-12 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center border-4 border-slate-900">
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 flex-1">
                      <span className="text-cyan-400 font-bold text-xl mb-2 block">{event.year}</span>
                      <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{event.description}</p>
                      
                      <div>
                        {event.status === 'completed' ? (
                          <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                            ✓ Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                            🚀 In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Be part of the revolution that's reshaping the future of decentralized finance. 
              Explore our ecosystem and discover how we're building the next generation of financial tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/ecosystem"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact"
                className="group bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DN</span>
              </div>
              <span className="text-white text-xl font-bold">DeFi Nexus</span>
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future of decentralized finance through innovation, security, and community.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 DeFi Nexus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage

