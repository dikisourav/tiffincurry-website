import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import dark_logo from "../assets/dark-logo.svg";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* LEFT */}
        <Link to="/tiffincurry-website">        
        <div className="logo logo-img">
           {dark ? <img src={dark_logo} alt="TiffinCurry" /> : <img src={logo} alt="TiffinCurry" />}
           
        </div>
        </Link>

        {/* CENTER MENU */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/tiffincurry-website/pricing">Pricing</Link>
          <Link to="/tiffincurry-website/about">About Us</Link>
          <Link to="/tiffincurry-website/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
        </nav>

        {/* RIGHT */}
        <div className="nav-right">

          <button
            className="mode"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <Link to="/tiffincurry-website/demo">
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