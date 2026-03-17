import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* LEFT */}
        <div className="logo">
          TiffinCurry
        </div>

        {/* CENTER MENU */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="#product" onClick={()=>setMenuOpen(false)}>Pricing</a>
          <a href="#about" onClick={()=>setMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
        </nav>

        {/* RIGHT */}
        <div className="nav-right">

          <button
            className="mode"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <Link to="/demo">
            <button className="primary-btn">
              Request Demo
            </button>
          </Link>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </header>
  );
}