import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import defiNexusLogo from '/defi-nexus-main-logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActivePage = (path) => {
    return location.pathname === path
  }

  return (
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
            <Link 
              to="/" 
              className={`transition-colors duration-300 font-medium ${
                isActivePage('/') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-300 font-medium ${
                isActivePage('/about') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/mission" 
              className={`transition-colors duration-300 font-medium ${
                isActivePage('/mission') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Mission
            </Link>
            <Link 
              to="/solutions" 
              className={`transition-colors duration-300 font-medium ${
                isActivePage('/solutions') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/ecosystem" 
              className={`transition-colors duration-300 font-medium ${
                isActivePage('/ecosystem') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Ecosystem
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-300 font-medium ${
                isActivePage('/contact') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
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
          <nav className="lg:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`transition-colors duration-300 ${
                  isActivePage('/') ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors duration-300 ${
                  isActivePage('/about') ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'
                }`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/mission" 
                className={`transition-colors duration-300 ${
                  isActivePage('/mission') ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'
                }`}
                onClick={toggleMenu}
              >
                Mission
              </Link>
              <Link 
                to="/solutions" 
                className={`transition-colors duration-300 ${
                  isActivePage('/solutions') ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'
                }`}
                onClick={toggleMenu}
              >
                Solutions
              </Link>
              <Link 
                to="/ecosystem" 
                className={`transition-colors duration-300 ${
                  isActivePage('/ecosystem') ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'
                }`}
                onClick={toggleMenu}
              >
                Ecosystem
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors duration-300 ${
                  isActivePage('/contact') ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="border-t border-slate-700 my-3 pt-3">
                <Link 
                  to="/careers" 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={toggleMenu}
                >
                  Careers
                </Link>
                <Link 
                  to="/team" 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={toggleMenu}
                >
                  Team
                </Link>
                <Link 
                  to="/whitepapers" 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={toggleMenu}
                >
                  Whitepapers
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

