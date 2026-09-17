import React, { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import './Navigation.css'

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="nav-header" role="banner">
      <div className="nav-container">
        {/* Brand */}
        <a href="#" className="nav-brand" aria-label="The Friendly Dentist homepage">
          <div className="nav-brand-emblem" aria-hidden="true">
            {/* Custom minimalist geometric tooth / aperture silhouette */}
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C7.5 2 4 4.8 4 9c0 3 1.2 5.5 2.5 8.5C7.8 20.2 9.2 22 10.5 22c1.2 0 1.5-1.5 1.5-3 0 1.5.3 3 1.5 3 1.3 0 2.7-1.8 4-4.5C18.8 14.5 20 12 20 9c0-4.2-3.5-7-8-7z" fill="currentColor" fillOpacity="0.15" />
            </svg>
          </div>
          <span className="nav-brand-text">
            The Friendly <span className="brand-accent">Dentist</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-link-item">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Group */}
        <div className="nav-actions">
          <a
            href="tel:012863787"
            className="nav-cta-call desktop-only"
            aria-label="Call The Friendly Dentist at 01 286 3787"
          >
            <Phone size={15} aria-hidden="true" />
            <span>Call 01 286 3787</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="nav-toggle-btn"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-top">
          <span className="nav-brand-text">
            The Friendly <span className="brand-accent">Dentist</span>
          </span>
          <button
            type="button"
            className="nav-toggle-btn"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav aria-label="Mobile Navigation">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-cta-wrapper">
          <a
            href="tel:012863787"
            className="nav-cta-call"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Call The Friendly Dentist at 01 286 3787"
          >
            <Phone size={16} aria-hidden="true" />
            <span>Call 01 286 3787</span>
          </a>
        </div>
      </div>
    </header>
  )
}
