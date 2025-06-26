import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Users, Briefcase, Heart, Zap, Globe, Trophy, MapPin, Clock, DollarSign, ChevronRight, Star, Award, Coffee, Laptop } from 'lucide-react'

function CareersPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.title = 'Careers - DeFi Nexus'
  }, [])

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in DeFi and blockchain technology."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe the best solutions come from diverse teams working together."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our work shapes the future of finance for people around the world."
    },
    {
      icon: Heart,
      title: "People Focused",
      description: "We prioritize the well-being and growth of our team members."
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Top-tier compensation packages with equity participation"
    },
    {
      icon: Laptop,
      title: "Remote First",
      description: "Work from anywhere with flexible hours and async collaboration"
    },
    {
      icon: Trophy,
      title: "Learning Budget",
      description: "$5,000 annual budget for conferences, courses, and certifications"
    },
    {
      icon: Coffee,
      title: "Wellness Support",
      description: "Health insurance, mental health support, and wellness stipends"
    },
    {
      icon: Users,
      title: "Team Retreats",
      description: "Annual company retreats and quarterly team building events"
    },
    {
      icon: Star,
      title: "Equity Package",
      description: "Meaningful equity participation in the company's success"
    }
  ]

  const openPositions = [
    {
      title: "Senior Blockchain Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Lead the development of our core DeFi protocols and smart contracts. Work with cutting-edge blockchain technology.",
      requirements: [
        "5+ years of blockchain development experience",
        "Expert in Solidity and Web3 technologies",
        "Experience with DeFi protocols",
        "Strong understanding of smart contract security"
      ]
    },
    {
      title: "Product Manager - DeFi",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Drive product strategy and roadmap for our DeFi ecosystem. Work closely with engineering and design teams.",
      requirements: [
        "3+ years of product management experience",
        "Deep understanding of DeFi and crypto markets",
        "Experience with agile development methodologies",
        "Strong analytical and communication skills"
      ]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Build beautiful, responsive user interfaces for our DeFi platform. Work with React, TypeScript, and modern web technologies to create exceptional user experiences.",
      requirements: [
        "3+ years of frontend development experience",
        "Expert in React, TypeScript, and modern CSS",
        "Experience with Web3 integration and wallet connections",
        "Strong eye for design and user experience",
        "Familiarity with DeFi protocols and blockchain concepts"
      ]
    },
    {
      title: "Content Strategist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $110k",
      description: "Develop and execute content strategy across all channels. Create compelling narratives that educate users about DeFi and showcase our platform's capabilities.",
      requirements: [
        "4+ years of content strategy and creation experience",
        "Deep understanding of DeFi, blockchain, and crypto markets",
        "Excellent writing and storytelling skills",
        "Experience with technical content and developer documentation",
        "Knowledge of SEO and content marketing best practices"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Design intuitive and beautiful user experiences for our DeFi platforms. Create the future of financial interfaces.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Portfolio showcasing web3/fintech projects",
        "Proficiency in Figma and design systems",
        "Understanding of user research methodologies"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Build and maintain our infrastructure for high-availability DeFi services. Ensure security and scalability.",
      requirements: [
        "4+ years of DevOps experience",
        "Experience with Kubernetes and Docker",
        "Knowledge of blockchain node operations",
        "Strong security and monitoring skills"
      ]
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $110k",
      description: "Lead marketing initiatives to grow our community and user base. Drive brand awareness in the DeFi space.",
      requirements: [
        "3+ years of marketing experience",
        "Experience in crypto/DeFi marketing",
        "Strong content creation skills",
        "Community management experience"
      ]
    },
    {
      title: "Security Auditor",
      department: "Security",
      location: "Remote",
      type: "Contract",
      salary: "$150 - $300/hour",
      description: "Conduct security audits of our smart contracts and infrastructure. Help maintain the highest security standards.",
      requirements: [
        "5+ years of security auditing experience",
        "Expert knowledge of smart contract vulnerabilities",
        "Experience with formal verification tools",
        "Strong understanding of DeFi attack vectors"
      ]
    }
  ]

  const stats = [
    { label: "Team Members", value: "50+" },
    { label: "Countries", value: "15+" },
    { label: "Open Positions", value: "12" },
    { label: "Avg. Experience", value: "8 years" }
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
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Help us build the future of decentralized finance. Join a team of passionate innovators working to democratize access to financial services worldwide.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`mb-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Benefits & Perks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and meaningful perks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className={`mb-20 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our growing team and help shape the future of DeFi. We're always looking for talented individuals.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={position.title}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1600 + index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <a 
                      href={`mailto:careers@definexus.com?subject=Application for ${position.title}&body=Dear DeFi Nexus Team,%0D%0A%0D%0AI am interested in applying for the ${position.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2 inline-flex"
                    >
                      <span>Apply Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to the future of DeFi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@definexus.com?subject=General Application - DeFi Nexus&body=Dear DeFi Nexus Team,%0D%0A%0D%0AI am interested in joining your team. Please find my resume attached and let me know about any suitable opportunities.%0D%0A%0D%0ABest regards"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Resume</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <Link
                to="/team"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Meet the Team</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CareersPage

