import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">{'{ Santiago Sepúlveda }'}</div>
      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
        <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>Sobre mí</a>
        <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={`menu-bar ${menuOpen ? 'open' : ''}`} />
        <span className={`menu-bar ${menuOpen ? 'open' : ''}`} />
        <span className={`menu-bar ${menuOpen ? 'open' : ''}`} />
      </button>
    </header>
  );
}
