import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones, ChevronRight, Globe, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react'

function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setIsVisible(true)
    document.title = 'Contact Us - DeFi Nexus'
  }, [])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For now, we'll just show success message
      // In a real implementation, you would send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      value: "team@definexus.io",
      link: "mailto:team@definexus.io"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 24/7",
      action: "Start Chat",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with technical issues",
      contact: "support@definexus.com",
      action: "Get Help",
      gradient: "from-orange-500 to-red-400"
    }
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 500",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@definexus.com"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 20",
      zipcode: "New York, NY 10013",
      phone: "+1 (555) 987-6543",
      email: "ny@definexus.com"
    },
    {
      city: "London",
      address: "789 Canary Wharf, Level 15",
      zipcode: "London E14 5AB, UK",
      phone: "+44 20 7123 4567",
      email: "london@definexus.com"
    }
  ]

  const departments = [
    {
      name: "General Inquiries",
      email: "hello@definexus.io",
      description: "Questions about our platform and services"
    },
    {
      name: "Business Development",
      email: "partnerships@definexus.com",
      description: "Partnership opportunities and business collaborations"
    },
    {
      name: "Technical Support",
      email: "support@definexus.com",
      description: "Technical assistance and platform support"
    },
    {
      name: "Media & Press",
      email: "press@definexus.com",
      description: "Media inquiries and press relations"
    },
    {
      name: "Careers",
      email: "careers@definexus.com",
      description: "Job opportunities and recruitment"
    },
    {
      name: "Legal & Compliance",
      email: "legal@definexus.com",
      description: "Legal matters and compliance questions"
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
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl mb-6">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Have questions about our platform? Need technical support? Want to explore partnership opportunities? We're here to help and would love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the best way to reach us. We're available 24/7 to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-xl mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <p className="text-cyan-400 font-semibold mb-4">{method.contact}</p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                      <span>Sorry, there was an error sending your message. Please try again.</span>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-slate-700 border text-white placeholder-gray-400 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-400'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-slate-700 border text-white placeholder-gray-400 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-400'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-slate-700 border text-white focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-400'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Media & Press</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-700 border text-white placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-400'
                    }`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-slate-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <p className="text-sm text-cyan-400">
                      Emergency support available 24/7 for enterprise customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Follow Us</h3>
                </div>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/definexus" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://linkedin.com/company/definexus" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://discord.gg/definexus" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://github.com/definexus" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link to="/about" className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors">
                    <span>About Us</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link to="/solutions" className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors">
                    <span>Solutions</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link to="/careers" className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors">
                    <span>Careers</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link to="/privacy-policy" className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors">
                    <span>Privacy Policy</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className={`mb-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Contact by Department</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reach out to the right team for faster assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className={`transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Offices</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit us at one of our global locations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1600 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{office.city}</h3>
                <div className="space-y-2 text-gray-300">
                  <p>{office.address}</p>
                  <p>{office.zipcode}</p>
                  <p className="text-cyan-400">{office.phone}</p>
                  <p className="text-cyan-400">{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage

