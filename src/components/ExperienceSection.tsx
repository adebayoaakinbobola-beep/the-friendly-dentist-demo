import React, { useState } from 'react'
const molarImg = '/tooth-3d.png.png'
import './ExperienceSection.css'

interface PanelAnnotation {
  id: string
  number: string
  title: string
  description: string
  positionClass: string
}

export const ExperienceSection: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string>('01')

  const panels: PanelAnnotation[] = [
    {
      id: '01',
      number: '01',
      title: 'COMFORT',
      description: 'Care designed around how you feel.',
      positionClass: 'panel-upper-left',
    },
    {
      id: '02',
      number: '02',
      title: 'PREVENTION',
      description: 'Thoughtful attention before problems grow.',
      positionClass: 'panel-upper-right',
    },
    {
      id: '03',
      number: '03',
      title: 'RESTORATION',
      description: 'Care focused on function and confidence.',
      positionClass: 'panel-lower-left',
    },
    {
      id: '04',
      number: '04',
      title: 'CLARITY',
      description: 'Clear communication at every step.',
      positionClass: 'panel-lower-right',
    },
  ]

  return (
    <section id="experience" className="experience-section" aria-labelledby="cinematic-heading-title">
      {/* ==================================================================
          CINEMATIC TRANSITION (Organic crest from light Section 3 to dark Section 4)
          ================================================================== */}
      <div className="experience-transition-curve" aria-hidden="true">
        <svg
          className="experience-transition-svg"
          viewBox="0 0 1440 85"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Top ivory curve matching Section 3 base */}
          <path
            d="M0 0H1440V20C1180 75 920 85 720 85C520 85 260 75 0 20V0Z"
            fill="#FAF7F2"
          />
          {/* Luminous cyan caustic rim line along the crest */}
          <path
            d="M0 20C260 75 520 85 720 85C920 85 1180 75 1440 20"
            stroke="url(#cinematicTransitionGlow)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="cinematicTransitionGlow" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2CD6C7" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#2CD6C7" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#0F4CFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2CD6C7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Atmospheric Volumetric Core Glow & Star Particles */}
      <div className="experience-ambient-core-glow" aria-hidden="true" />
      <div className="experience-particles-mesh" aria-hidden="true" />

      <div className="experience-container">
        {/* ==================================================================
            CENTERED SECTION HEADING (Directly Above the 3D Molar)
            ================================================================== */}
        <div className="experience-header">
          <div className="experience-badge-wrapper">
            <div className="experience-badge">
              <span className="experience-badge-dot" aria-hidden="true" />
              <span>THE PATIENT EXPERIENCE</span>
            </div>
          </div>

          <h2 id="cinematic-heading-title" className="experience-headline">
            <span className="experience-lead">More than a treatment.</span>
            <span className="experience-expression">
              A better dental experience.
              <span className="expression-swash" aria-hidden="true" />
            </span>
          </h2>
        </div>

        {/* ==================================================================
            CINEMATIC 3D ARENA
            Centered 3D Molar, Glass Pedestal, Orbital Rings & 4 Annotation Panels
            ================================================================== */}
        <div className="cinematic-arena" aria-label="3D dental experience visualization">
          {/* 3D Elliptical Orbital Rings & Cyan Connector Lines */}
          <svg
            className="cinematic-orbit-svg"
            viewBox="0 0 1160 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Outer Glowing Cyan/Teal Orbit */}
              <linearGradient id="orbitGlow1" x1="80" y1="350" x2="1080" y2="350" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0F4CFF" stopOpacity="0.15" />
                <stop offset="25%" stopColor="#2CD6C7" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#2CD6C7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0F4CFF" stopOpacity="0.15" />
              </linearGradient>

              {/* Inner Tilted Harmonic Orbit */}
              <linearGradient id="orbitGlow2" x1="180" y1="200" x2="980" y2="500" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2CD6C7" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#0F4CFF" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#2CD6C7" stopOpacity="0.25" />
              </linearGradient>

              {/* Pedestal Base Ring */}
              <linearGradient id="pedestalRingGrad" x1="380" y1="500" x2="780" y2="500" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2CD6C7" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#2CD6C7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2CD6C7" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Orbit 1: Primary Large Ellipse in 3D Perspective */}
            <ellipse
              cx="580"
              cy="350"
              rx="490"
              ry="210"
              stroke="url(#orbitGlow1)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              transform="rotate(-4 580 350)"
            />

            {/* Orbit 2: Secondary Mid Orbit wrapping across Crown */}
            <ellipse
              cx="580"
              cy="320"
              rx="360"
              ry="140"
              stroke="url(#orbitGlow2)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              transform="rotate(8 580 320)"
            />

            {/* Orbit 3: Horizon Base Orbit around Pedestal */}
            <ellipse
              cx="580"
              cy="480"
              rx="260"
              ry="85"
              stroke="url(#pedestalRingGrad)"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />

            {/* Thin Glowing Cyan Connector Lines with Orbit Nodes */}
            {/* Connector to 01 COMFORT (Upper-Left) */}
            <line x1="290" y1="170" x2="470" y2="280" stroke="#2CD6C7" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.55" />
            <circle cx="290" cy="170" r="3.5" fill="#2CD6C7" />
            <circle cx="470" cy="280" r="2.5" fill="#FFFFFF" />

            {/* Connector to 02 PREVENTION (Upper-Right) */}
            <line x1="870" y1="170" x2="690" y2="280" stroke="#2CD6C7" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.55" />
            <circle cx="870" cy="170" r="3.5" fill="#2CD6C7" />
            <circle cx="690" cy="280" r="2.5" fill="#FFFFFF" />

            {/* Connector to 03 RESTORATION (Lower-Left) */}
            <line x1="290" y1="520" x2="460" y2="440" stroke="#2CD6C7" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.55" />
            <circle cx="290" cy="520" r="3.5" fill="#0F4CFF" />
            <circle cx="460" cy="440" r="2.5" fill="#2CD6C7" />

            {/* Connector to 04 CLARITY (Lower-Right) */}
            <line x1="870" y1="520" x2="700" y2="440" stroke="#2CD6C7" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.55" />
            <circle cx="870" cy="520" r="3.5" fill="#FF5A36" />
            <circle cx="700" cy="440" r="2.5" fill="#2CD6C7" />
          </svg>

          {/* Floating Transparent Glass Spheres around Centerpiece */}
          <div className="floating-glass-sphere-1" aria-hidden="true" />
          <div className="floating-glass-sphere-2" aria-hidden="true" />
          <div className="floating-glass-sphere-3" aria-hidden="true" />

          {/* Centerpiece: Photorealistic 3D Human Molar on Circular Glass Pedestal */}
          <div className="cinematic-centerpiece">
            {/* The 3D Molar Image */}
            <div className="molar-3d-wrapper">
              <img
                src={molarImg}
                alt="Photorealistic 3D human molar tooth with luminous cyan rim lighting"
                className="molar-3d-img"
                loading="lazy"
              />
            </div>

            {/* Circular Transparent / Glass Pedestal Platform */}
            <div className="glass-pedestal-platform" aria-hidden="true">
              <div className="pedestal-disc" />
              <div className="pedestal-reflection" />
              <div className="pedestal-contact-shadow" />
            </div>
          </div>

          {/* Four Translucent Glassmorphism Annotation Panels */}
          {panels.map((p) => {
            const isActive = activePanel === p.id
            return (
              <div
                key={p.id}
                className={`annotation-glass-card ${p.positionClass} ${isActive ? 'is-active' : ''}`}
                onClick={() => setActivePanel(p.id)}
                onMouseEnter={() => setActivePanel(p.id)}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`Principle ${p.number}: ${p.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActivePanel(p.id)
                  }
                }}
              >
                <div className="panel-header">
                  <div className="panel-index-wrap">
                    <span className="panel-coral-dot" aria-hidden="true" />
                    <span className="panel-index-tag">{p.number}</span>
                  </div>
                  <span className="panel-icon-sparkle" aria-hidden="true">
                    
                  </span>
                </div>

                <h3 className="panel-title">{p.title}</h3>
                <p className="panel-desc">{p.description}</p>
              </div>
            )
          })}
        </div>

        {/* ==================================================================
            CENTERED CTA (Below Tooth / Pedestal)
            ================================================================== */}
       <div className="cinematic-cta-wrapper">
  <a href="#treatments" className="cinematic-cta-button">
    Explore treatments →
  </a>
</div>
      </div>
    </section>
  )
}
