import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import dark_logo from "../assets/dark-logo.svg";

export default function Navbar({ dark, setDark }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow appears after scroll

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);


  return (

    <header className={`navbar ${scrolled ? "navbar-shadow" : ""}`}>

      <div className="container nav-inner">

        {/* LOGO */}

        <Link to="/tiffincurry-website">

          <div className="logo logo-img">

            {dark
              ? <img src={dark_logo} alt="TiffinCurry logo" />
              : <img src={logo} alt="TiffinCurry logo" />
            }

          </div>

        </Link>


        {/* CENTER MENU */}

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <Link
            to="/tiffincurry-website/pricing"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>

          <Link
            to="/tiffincurry-website/about"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/tiffincurry-website/support"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </Link>

        </nav>


        {/* RIGHT SIDE */}

        <div className="nav-right">

          {/* DARK MODE TOGGLE */}

          <button
            className="mode"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️" : "🌙"}
          </button>


          {/* CTA */}

          <Link to="/tiffincurry-website/demo">

            <button className="primary-btn">
              Request Demo
            </button>

          </Link>


          {/* HAMBURGER */}

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