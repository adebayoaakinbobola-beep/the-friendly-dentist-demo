import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight, Phone, MapPin, Sparkles, Clock } from 'lucide-react'
import './Hero.css'

export const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, transX: 0, transY: 0 })
  const stageRef = useRef<HTMLDivElement>(null)
  const isReducedMotion = useRef(false)

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.current = mediaQuery.matches

    const handleMediaChange = (e: MediaQueryListEvent) => {
      isReducedMotion.current = e.matches
      if (e.matches) {
        setTilt({ rotateX: 0, rotateY: 0, transX: 0, transY: 0 })
      }
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  // Refined, subtle mouse parallax on desktop
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion.current || window.innerWidth < 960) return

    const rect = e.currentTarget.getBoundingClientRect()
    // Normalized coordinates from -1 to 1
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    // Subtle, elegant rotation angles and gentle translation
    setTilt({
      rotateX: -y * 8, // max 4 deg tilt
      rotateY: x * 10,  // max 5 deg tilt
      transX: x * 14,
      transY: y * 14,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, transX: 0, transY: 0 })
  }, [])

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero Introduction"
    >
      {/* Ambient Atmospheric Lighting */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-ambient-glow-secondary" aria-hidden="true" />
      <div className="hero-subtle-grid" aria-hidden="true" />

      <div className="hero-container">
        {/* ==================================================================
            LEFT: Editorial Narrative & Typography
            ================================================================== */}
        <div className="hero-content">
          {/* Subtle Concept Badge */}
          <div className="hero-badge-wrapper">
            <div className="hero-concept-badge">
              <span className="badge-pulse-dot" aria-hidden="true" />
              <span className="badge-label">Unofficial website concept</span>
            </div>
          </div>

          {/* Distinctive Editorial Headline */}
          <h1 className="hero-headline">
            <span className="headline-lead">Dentistry that feels</span>
            <span className="headline-expression">
              a little more human.
              <span className="expression-swash" aria-hidden="true" />
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-copy">
            Thoughtful dental care in Blackrock, Co. Dublin — designed around
            comfort, clarity and you.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#treatments" className="btn-primary-explore">
              <span>Explore treatments</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a href="tel:012863787" className="btn-secondary-call">
              <Phone aria-hidden="true" />
              <span>Call 01 286 3787</span>
            </a>
          </div>

          {/* Micro-Reassurance Bar */}
          <div className="hero-micro-reassurance">
            <div className="reassurance-item">
              <MapPin aria-hidden="true" />
              <span>Blackrock, Co. Dublin</span>
            </div>
            <div className="reassurance-item">
              <Sparkles aria-hidden="true" />
              <span>Comfort-first approach</span>
            </div>
            <div className="reassurance-item">
              <Clock aria-hidden="true" />
              <span>Calm, unhurried visits</span>
            </div>
          </div>
        </div>

        {/* ==================================================================
            RIGHT: Sculptural 3D Visual Composition
            ================================================================== */}
        <div className="hero-visual-perspective-stage" ref={stageRef}>
          <div
            className="hero-visual-3d-rig"
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateX(${tilt.transX}px) translateY(${tilt.transY}px)`,
            }}
          >
            <div className="hero-visual-floating-wrapper">
              {/* --------------------------------------------------------
                  DEPTH LAYER -1: Abstract Tooth & Curved Orbital Line (Back)
                  -------------------------------------------------------- */}
              {/* Abstract Tooth-Inspired Porcelain Ceramic Silhouette */}
              <div
                className="sculptural-tooth-abstract"
                aria-hidden="true"
                style={{
                  transform: `translateZ(-35px) translate(${-tilt.transX * 0.4}px, ${-tilt.transY * 0.4}px) rotate(10deg)`,
                }}
              >
                <svg
                  viewBox="0 0 160 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="ceramicShine"
                      x1="20"
                      y1="10"
                      x2="140"
                      y2="160"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="35%" stopColor="#FAF4EC" stopOpacity="0.85" />
                      <stop offset="70%" stopColor="#E2F7F4" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#D4E4FF" stopOpacity="0.65" />
                    </linearGradient>
                    <linearGradient
                      id="ceramicStroke"
                      x1="0"
                      y1="0"
                      x2="160"
                      y2="170"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                      <stop offset="100%" stopColor="rgba(44,214,199,0.4)" />
                    </linearGradient>
                  </defs>
                  {/* Organic Dual-Cusp Tooth Silhouette */}
                  <path
                    d="M38 42C48 24 64 22 80 34C96 22 112 24 122 42C136 68 132 100 114 128C100 148 88 158 80 156C72 158 60 148 46 128C28 100 24 68 38 42Z"
                    fill="url(#ceramicShine)"
                    stroke="url(#ceramicStroke)"
                    strokeWidth="1.5"
                  />
                  {/* Specular Ridge */}
                  <path
                    d="M52 48C58 36 70 34 80 44C90 34 102 36 108 48"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 3D Curved Orbital Line */}
              <div
                className="orbital-track-container"
                aria-hidden="true"
                style={{
                  transform: `translateZ(-25px) translate(${-tilt.transX * 0.25}px, ${-tilt.transY * 0.25}px) rotate(-12deg)`,
                }}
              >
                <svg
                  className="orbital-track-svg"
                  viewBox="0 0 600 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="orbitGrad"
                      x1="50"
                      y1="100"
                      x2="550"
                      y2="400"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#0F4CFF" stopOpacity="0.8" />
                      <stop offset="45%" stopColor="#2CD6C7" stopOpacity="0.9" />
                      <stop offset="85%" stopColor="#FFF" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#0F4CFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Elliptical orbit trajectory */}
                  <ellipse
                    cx="300"
                    cy="250"
                    rx="260"
                    ry="170"
                    stroke="url(#orbitGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                  />
                  {/* Tangent glowing orbital bead */}
                  <g className="orbital-bead" transform="translate(480, 160)">
                    <circle r="6" fill="#2CD6C7" />
                    <circle r="12" fill="#2CD6C7" fillOpacity="0.35" />
                    <circle r="2.5" fill="#FFFFFF" />
                  </g>
                </svg>
              </div>

              {/* --------------------------------------------------------
                  DEPTH LAYER 0: Unusual Sculptural Rounded 3D Frame
                  -------------------------------------------------------- */}
              <div className="sculptural-frame-outer">
                <div className="sculptural-frame-inner">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                    alt="Patient having a warm, calm consultation in a modern dental practice setting"
                    className="sculptural-image"
                    loading="eager"
                  />
                  <div className="image-attribution-tag" aria-hidden="true">
                    Stock concept imagery · Unofficial demo
                  </div>
                </div>
              </div>

              {/* --------------------------------------------------------
                  DEPTH LAYER +1: Translucent 3D Glass Sphere (Foreground)
                  -------------------------------------------------------- */}
              <div
                className="floating-glass-sphere"
                aria-hidden="true"
                style={{
                  transform: `translateZ(55px) translate(${tilt.transX * 0.8}px, ${tilt.transY * 0.8}px)`,
                }}
              />

              {/* --------------------------------------------------------
                  DEPTH LAYER +1: Floating Accent Pill (Top Right)
                  -------------------------------------------------------- */}
              <div
                className="floating-glass-pill"
                aria-hidden="true"
                style={{
                  transform: `translateZ(40px) translate(${tilt.transX * 0.5}px, ${tilt.transY * 0.5}px)`,
                }}
              >
                <Sparkles aria-hidden="true" />
                <span>Dedicated patient time</span>
              </div>

              {/* --------------------------------------------------------
                  DEPTH LAYER +1: Floating Glass Information Card (Bottom Left)
                  -------------------------------------------------------- */}
              <div
                className="floating-glass-card"
                style={{
                  transform: `translateZ(48px) translate(${tilt.transX * 0.65}px, ${tilt.transY * 0.65}px)`,
                }}
              >
                <div className="glass-card-header">
                  <span className="glass-card-status-dot" aria-hidden="true" />
                  <span className="glass-card-tag">Blackrock Practice</span>
                </div>
                <h2 className="glass-card-title">Comfort-Centered Care</h2>
                <p className="glass-card-desc">
                  Calm appointments, clear communication and a relaxed environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
