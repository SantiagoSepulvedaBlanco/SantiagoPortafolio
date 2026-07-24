export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h2 className="footer-title">¿Tienes un proyecto en mente?</h2>
        <p className="footer-text">Me encantaría conversar sobre cómo puedo ayudarte con tus necesidades de desarrollo.</p>
        <a href="mailto:santsepulveda29@gmail.com" className="btn btn-primary contact-btn">
          <span>✉</span> Contactar por Email
        </a>
        <div className="social-links">
          <a href="https://github.com/SantiagoSepulvedaBlanco" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/santiago-sepulveda-3497171b2/" className="social-link">LinkedIn</a>
          <a href="tel:+573005979052" className="social-link">Phone</a>
        </div>
        <p className="footer-copyright">© 2026 DevPortfolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
