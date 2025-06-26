import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Download, Calendar, User, Eye, Star, Filter, Search, ChevronRight, BookOpen, Award, TrendingUp } from 'lucide-react'

function WhitepapersPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setIsVisible(true)
    document.title = 'Whitepapers & Research - DeFi Nexus'
  }, [])

  const categories = [
    { id: 'all', name: 'All Papers', count: 12 },
    { id: 'defi', name: 'DeFi Protocols', count: 4 },
    { id: 'ai', name: 'AI & Machine Learning', count: 3 },
    { id: 'security', name: 'Security & Audits', count: 2 },
    { id: 'economics', name: 'Tokenomics', count: 2 },
    { id: 'technical', name: 'Technical Architecture', count: 1 }
  ]

  const whitepapers = [
    {
      id: 1,
      title: "DeFi Nexus Protocol: A Comprehensive Framework for Decentralized Finance",
      subtitle: "Technical Architecture and Implementation",
      category: "defi",
      authors: ["Dr. Sarah Chen", "Michael Rodriguez", "Alex Thompson"],
      publishDate: "2024-01-15",
      readTime: "45 min",
      downloads: 2847,
      views: 12543,
      rating: 4.9,
      abstract: "This whitepaper presents the technical architecture and implementation details of the DeFi Nexus Protocol, a comprehensive framework designed to address scalability, security, and interoperability challenges in decentralized finance.",
      tags: ["DeFi", "Protocol", "Architecture", "Blockchain"],
      featured: true,
      fileSize: "2.4 MB"
    },
    {
      id: 2,
      title: "AI-Driven Yield Optimization in Decentralized Finance",
      subtitle: "Machine Learning Approaches to Maximize Returns",
      category: "ai",
      authors: ["Dr. Emily Watson", "James Liu"],
      publishDate: "2024-02-20",
      readTime: "32 min",
      downloads: 1923,
      views: 8765,
      rating: 4.8,
      abstract: "An in-depth analysis of machine learning algorithms applied to yield farming and liquidity provision strategies, demonstrating significant improvements in risk-adjusted returns.",
      tags: ["AI", "Machine Learning", "Yield Farming", "Optimization"],
      featured: true,
      fileSize: "1.8 MB"
    },
    {
      id: 3,
      title: "Security Audit Framework for Smart Contracts",
      subtitle: "Comprehensive Testing and Verification Methodologies",
      category: "security",
      authors: ["Dr. Robert Kim", "Lisa Zhang", "David Park"],
      publishDate: "2024-03-10",
      readTime: "28 min",
      downloads: 1654,
      views: 7234,
      rating: 4.7,
      abstract: "A detailed framework for conducting comprehensive security audits of smart contracts, including automated testing tools and formal verification methods.",
      tags: ["Security", "Smart Contracts", "Auditing", "Verification"],
      featured: false,
      fileSize: "2.1 MB"
    },
    {
      id: 4,
      title: "Tokenomics Design for Sustainable DeFi Ecosystems",
      subtitle: "Economic Models and Incentive Structures",
      category: "economics",
      authors: ["Dr. Maria Gonzalez", "Kevin Chang"],
      publishDate: "2024-03-25",
      readTime: "38 min",
      downloads: 2156,
      views: 9876,
      rating: 4.8,
      abstract: "This paper explores sustainable tokenomics models for DeFi protocols, analyzing various incentive structures and their long-term economic implications.",
      tags: ["Tokenomics", "Economics", "Incentives", "Sustainability"],
      featured: true,
      fileSize: "2.7 MB"
    },
    {
      id: 5,
      title: "Cross-Chain Interoperability Solutions",
      subtitle: "Bridging Multiple Blockchain Networks",
      category: "technical",
      authors: ["Dr. Andrew Miller", "Sophie Taylor", "Ryan Johnson"],
      publishDate: "2024-04-05",
      readTime: "42 min",
      downloads: 1789,
      views: 6543,
      rating: 4.6,
      abstract: "A comprehensive study of cross-chain interoperability solutions, comparing different bridge architectures and their security trade-offs.",
      tags: ["Interoperability", "Cross-Chain", "Bridges", "Architecture"],
      featured: false,
      fileSize: "3.2 MB"
    },
    {
      id: 6,
      title: "Privacy-Preserving DeFi Transactions",
      subtitle: "Zero-Knowledge Proofs in Financial Applications",
      category: "security",
      authors: ["Dr. Jennifer Lee", "Mark Wilson"],
      publishDate: "2024-04-18",
      readTime: "35 min",
      downloads: 1432,
      views: 5678,
      rating: 4.7,
      abstract: "An exploration of zero-knowledge proof implementations in DeFi applications, focusing on privacy preservation while maintaining transparency and auditability.",
      tags: ["Privacy", "Zero-Knowledge", "Cryptography", "DeFi"],
      featured: false,
      fileSize: "2.0 MB"
    }
  ]

  const filteredPapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPapers = whitepapers.filter(paper => paper.featured)

  const stats = [
    { label: "Research Papers", value: "12+", icon: FileText },
    { label: "Total Downloads", value: "15K+", icon: Download },
    { label: "Research Areas", value: "6", icon: BookOpen },
    { label: "Expert Authors", value: "20+", icon: User }
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Whitepapers & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Research</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore our comprehensive collection of research papers, technical documentation, and thought leadership content. Dive deep into the latest innovations in DeFi, AI, and blockchain technology.
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
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-4 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Papers */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Research</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful and widely-read research papers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPapers.slice(0, 4).map((paper, index) => (
              <div
                key={paper.id}
                className={`bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-semibold capitalize">
                    {paper.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-semibold">{paper.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{paper.title}</h3>
                <p className="text-indigo-300 font-medium mb-4">{paper.subtitle}</p>
                <p className="text-gray-300 mb-6 line-clamp-3">{paper.abstract}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{paper.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{paper.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF ({paper.fileSize})</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search whitepapers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Papers */}
        <div className={`mb-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">All Research Papers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of research and technical documentation.
            </p>
          </div>

          <div className="space-y-6">
            {filteredPapers.map((paper, index) => (
              <div
                key={paper.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1400 + index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-semibold capitalize">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Featured</span>
                        </span>
                      )}
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-semibold">{paper.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{paper.title}</h3>
                    <p className="text-indigo-300 font-medium mb-4">{paper.subtitle}</p>
                    <p className="text-gray-300 mb-4">{paper.abstract}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-4">
                      <div>
                        <span className="font-medium">Authors: </span>
                        {paper.authors.join(', ')}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{paper.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col space-y-3">
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download ({paper.fileSize})</span>
                    </button>
                    <button className="border-2 border-indigo-400 text-indigo-400 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our research newsletter to get notified when we publish new whitepapers and research findings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400"
              />
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Get exclusive early access to new research. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default WhitepapersPage

