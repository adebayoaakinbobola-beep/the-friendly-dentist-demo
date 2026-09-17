

import React from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { CareSection } from './components/CareSection'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import './App.css'

export const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Navigation />

      <main id="main-content">
        <Hero />
        <CareSection />
        <AboutSection />
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
 