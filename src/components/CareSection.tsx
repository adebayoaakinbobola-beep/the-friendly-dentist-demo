import React, { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import './CareSection.css'

interface TreatmentCategory {
  id: string
  number: string
  title: string
  description: string
  positionClass: string
}

export const CareSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('01')

  const categories: TreatmentCategory[] = [
    {
      id: '01',
      number: '01',
      title: 'Everyday Care',
      description: 'Gentle check-ups, preventive hygiene and unhurried examinations.',
      positionClass: 'care-node-01',
    },
    {
      id: '02',
      number: '02',
      title: 'Restore',
      description: 'Thoughtful repairs, restorative solutions and durable comfort.',
      positionClass: 'care-node-02',
    },
    {
      id: '03',
      number: '03',
      title: 'Enhance',
      description: 'Subtle aesthetic balance, natural brightening and harmonious care.',
      positionClass: 'care-node-03',
    },
    {
      id: '04',
      number: '04',
      title: 'Smile Confidence',
      description: 'Personalized guidance, long-term oral wellness and relaxed visits.',
      positionClass: 'care-node-04',
    },
  ]

  return (
    <section id="treatments" className="care-section" aria-labelledby="care-heading-title">
      {/* Background Atmosphere */}
      <div className="care-ambient-glow" aria-hidden="true" />
      <div className="care-subtle-pattern" aria-hidden="true" />

      <div className="care-container">
        {/* ==================================================================
            SECTION HEADER: Asymmetrical Editorial Narrative
            ================================================================== */}
        <div className="care-header-grid">
          <div className="care-header-left">
            <div className="care-label-wrapper">
              <div className="care-editorial-label">
                <span className="care-label-dot" aria-hidden="true" />
                <span>CARE, YOUR WAY</span>
              </div>
            </div>

            <h2 id="care-heading-title" className="care-heading">
              <span className="care-heading-lead">Dental care,</span>
              <span className="care-heading-expression">
                designed around you.
                <span className="expression-swash" aria-hidden="true" />
              </span>
            </h2>
          </div>

          <div className="care-header-right">
            <p className="care-description">
              We believe dental visits should feel relaxed, transparent and centered on your
              comfort — taking the time to listen, explain every step clearly, and care for your
              smile with genuine warmth.
            </p>
            <a href="#contact" className="care-text-cta">
              <span>Explore your options</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ==================================================================
            ORBITAL 3D COMPOSITION: Central Sculpture & 4 Floating Categories
            ================================================================== */}
        <div className="care-orbital-stage" aria-label="Interactive Treatment Categories Overview">
          <div className="care-orbital-rig">
            {/* 3D Elliptical Orbital Lines Track */}
            <svg
              className="care-orbit-track-svg"
              viewBox="0 0 1000 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orbitGrad1" x1="0" y1="300" x2="1000" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0F4CFF" stopOpacity="0.1" />
                  <stop offset="25%" stopColor="#2CD6C7" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#0F4CFF" stopOpacity="0.6" />
                  <stop offset="75%" stopColor="#2CD6C7" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0F4CFF" stopOpacity="0.1" />
                </linearGradient>

                <linearGradient id="orbitGrad2" x1="200" y1="100" x2="800" y2="500" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2CD6C7" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0F4CFF" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Primary Elliptical Orbit Track */}
              <ellipse
                cx="500"
                cy="300"
                rx="420"
                ry="220"
                stroke="url(#orbitGrad1)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
              />

              {/* Inner Tilted Harmonic Orbit */}
              <ellipse
                cx="500"
                cy="300"
                rx="280"
                ry="150"
                transform="rotate(-12 500 300)"
                stroke="url(#orbitGrad2)"
                strokeWidth="1"
                strokeDasharray="4 6"
                strokeOpacity="0.65"
              />

              {/* Tangent Glow Points */}
              <circle cx="160" cy="200" r="3.5" fill="#2CD6C7" />
              <circle cx="840" cy="210" r="3.5" fill="#0F4CFF" />
              <circle cx="780" cy="450" r="4" fill="#2CD6C7" />
              <circle cx="220" cy="440" r="3.5" fill="#FF5A36" />
            </svg>

            {/* Central Sculptural 3D Tooth Object */}
            <div className="care-sculpture-anchor">
              <div className="care-sculpture-glow" aria-hidden="true" />
              <svg
                className="care-sculpture-svg"
                viewBox="0 0 260 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Sculptural abstract tooth art representing thoughtful dental care"
              >
                <defs>
                  {/* Ceramic Porcelain Body Gradient */}
                  <linearGradient
                    id="toothCeramicBody"
                    x1="40"
                    y1="20"
                    x2="220"
                    y2="280"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="30%" stopColor="#F9F6F0" />
                    <stop offset="65%" stopColor="#E2F7F4" />
                    <stop offset="85%" stopColor="#D5E5FF" />
                    <stop offset="100%" stopColor="#BACFEA" />
                  </linearGradient>

                  {/* Specular Edge Highlight */}
                  <linearGradient
                    id="toothRimHighlight"
                    x1="30"
                    y1="10"
                    x2="230"
                    y2="290"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#2CD6C7" stopOpacity="0.7" />
                    <stop offset="80%" stopColor="#0F4CFF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Soft Radial Core Glow */}
                  <radialGradient
                    id="coreCeramicAura"
                    cx="130"
                    cy="110"
                    r="90"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#F7F3EB" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#E0F5F2" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Primary Dual-Cusp Sculptural Silhouette */}
                <path
                  d="M62 65C80 34 106 32 130 52C154 32 180 34 198 65C222 108 214 165 186 215C164 250 144 268 130 265C116 268 96 250 74 215C46 165 38 108 62 65Z"
                  fill="url(#toothCeramicBody)"
                  stroke="url(#toothRimHighlight)"
                  strokeWidth="2.5"
                />

                {/* Internal Organic Depth Shader */}
                <path
                  d="M84 75C100 52 116 50 130 68C144 50 160 52 176 75C195 110 188 155 168 198C150 230 138 245 130 242C122 245 110 230 92 198C72 155 65 110 84 75Z"
                  fill="url(#coreCeramicAura)"
                  opacity="0.85"
                />

                {/* Specular Crest Highlight Line */}
                <path
                  d="M86 72C98 52 115 50 130 66C145 50 162 52 174 72"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                {/* Subtle Geometric Apex Motif */}
                <circle cx="130" cy="115" r="5" fill="#2CD6C7" opacity="0.6" />
                <circle cx="130" cy="115" r="10" stroke="#2CD6C7" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>

            {/* The 4 Floating Treatment-Category Elements */}
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <div
                  key={cat.id}
                  className={`care-orbital-node ${cat.positionClass} ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={`Category ${cat.number}: ${cat.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveCategory(cat.id)
                    }
                  }}
                >
                  <div className="care-node-header">
                    <div className="care-node-index-group">
                      <span className="care-node-coral-pip" aria-hidden="true" />
                      <span className="care-node-index">{cat.number}</span>
                    </div>
                    <span className="care-node-indicator" aria-hidden="true">
                      <Sparkles size={14} />
                    </span>
                  </div>

                  <h3 className="care-node-title">{cat.title}</h3>
                  <p className="care-node-desc">{cat.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
