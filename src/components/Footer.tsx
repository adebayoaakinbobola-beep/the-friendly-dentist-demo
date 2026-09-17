import './Footer.css'

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>The Friendly Dentist</h3>
          <p>Thoughtful dental care with a modern, friendly approach.</p>
        </div>

        <div className="footer-links">
          <a href="#treatments">Treatments</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p>Ready to talk?</p>
          <a href="tel:+35312863787">
            Call 01 286 3787
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 The Friendly Dentist. All rights reserved.</p>
      </div>
    </footer>
  )
}