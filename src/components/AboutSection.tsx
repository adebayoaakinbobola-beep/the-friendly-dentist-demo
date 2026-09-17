import React from 'react'
import { ArrowRight } from 'lucide-react'
import './AboutSection.css'

export const AboutSection: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Listen first',
      description: 'Taking the time to understand your comfort level and concerns before any care begins.',
    },
    {
      number: '02',
      title: 'Explain clearly',
      description: 'Straightforward, transparent guidance in plain English with no rush and no surprises.',
    },
    {
      number: '03',
      title: 'Care thoughtfully',
      description: 'Gentle, attentive treatment delivered at your pace in a serene, relaxed setting.',
    },
  ]

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading-title">
      {/* Ambient Lighting & Patterns */}
      <div className="about-ambient-glow" aria-hidden="true" />
      <div className="about-ambient-glow-secondary" aria-hidden="true" />
      <div className="about-subtle-grid" aria-hidden="true" />

      <div className="about-container">
        {/* ==================================================================
            LEFT: Asymmetrical Layered 3D Collage
            ================================================================== */}
        <div className="about-visual-stage" aria-hidden="true">
          <div className="about-collage-rig">
            {/* 1. Main Sculptural Organic Frame */}
            <div className="about-main-frame">
              <div className="about-main-inner">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern, calm dental consultation room with natural lighting"
                  className="about-main-img"
                  loading="lazy"
                />
                <div className="about-attribution-pill">
                  Stock concept imagery · Unofficial demo
                </div>
              </div>
            </div>

            {/* 2. Smaller Overlapping Detail Image */}
            <div className="about-detail-frame">
              <div className="about-detail-inner">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="Peaceful and clean architectural clinic interior detail"
                  className="about-detail-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 3. Floating 3D Prismatic Dental-Inspired Glass Object */}
            <div className="about-floating-3d-object" />

            {/* 4. Translucent Floating Quote Badge */}
            <div className="about-glass-quote-card">
              <div className="about-quote-header">
                <span className="about-quote-dot" />
                <span className="about-quote-tag">Patient Comfort</span>
              </div>
              <p className="about-quote-text">
                Designed for peace of mind & unrushed care.
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================================
            RIGHT: Editorial Narrative & Principles Manifesto
            ================================================================== */}
        <div className="about-content">
          <div className="about-label-wrapper">
            <div className="about-editorial-label">
              <span className="about-label-dot" aria-hidden="true" />
              <span>OUR APPROACH</span>
            </div>
          </div>

          <h2 id="about-heading-title" className="about-headline">
            <span className="about-headline-lead">Care that starts</span>
            <span className="about-headline-expression">
              with listening.
              <span className="expression-swash" aria-hidden="true" />
            </span>
          </h2>

          <p className="about-description">
            Visits should never feel rushed or confusing. We believe the best dental experience
            begins by understanding your comfort level, explaining what to expect in plain English,
            and creating an atmosphere where you feel completely at ease.
          </p>

          {/* The 3 Short Principles */}
          <div className="about-principles-list" role="list">
            {principles.map((p) => (
              <div key={p.number} className="about-principle-item" role="listitem">
                <div className="principle-index-box">
                  <span className="principle-coral-dot" aria-hidden="true" />
                  <span className="principle-number">{p.number}</span>
                </div>
                <div className="principle-body">
                  <h3 className="principle-title">{p.title}</h3>
                  <p className="principle-desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle Text CTA */}
          <a href="#contact" className="about-text-cta">
            <span>Our approach</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
