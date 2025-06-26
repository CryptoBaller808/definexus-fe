import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import MissionPage from './components/MissionPage.jsx'
import SolutionsPage from './components/SolutionsPage.jsx'
import EcosystemPage from './components/EcosystemPage.jsx'
import CareersPage from './components/CareersPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import BlogPage from './components/BlogPage.jsx'
import WhitepapersPage from './components/WhitepapersPage.jsx'
import TeamPage from './components/TeamPage.jsx'
import HardwareStorePage from './components/HardwareStorePage.jsx'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.jsx'
import TermsOfServicePage from './components/TermsOfServicePage.jsx'
import CookiePolicyPage from './components/CookiePolicyPage.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import { trackPageView, isAnalyticsEnabled } from './utils/analytics.js'
import './App.css'

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    // Track page view if analytics is enabled
    if (isAnalyticsEnabled()) {
      trackPageView(window.location.href, document.title)
    }
  }, [location])

  return null
}

function App() {
  return (
    <Router>
      <div className="App">
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/whitepapers" element={<WhitepapersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/hardware-store" element={<HardwareStorePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  )
}

export default App

