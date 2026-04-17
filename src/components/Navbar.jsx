import { useState } from "react";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { solutionsMenuData, RestaurantMenuData } from "./data/nav-menu.jsx";
import logo from "../assets/logo.svg";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path || pathname.startsWith(`${path}/`);
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-wrapper">
        <div className="nav-left">
          <Link to="/tiffincurry-website" className="logo logo-img nav-brand" onClick={closeMobileMenu}>
            <span className="nav-brand-mark">
              <img src={logo} alt="TiffinCurry" />
            </span>
          </Link>
        </div>

        <nav className="nav-center" aria-label="Main navigation">
          <div className="products-wrapper">
            <button type="button" className="nav-item product-trigger">
              Solutions
              <ChevronDown className="arrow" size={16} strokeWidth={2.5} />
            </button>
            <MegaMenu menuData={solutionsMenuData} />
          </div>

          <div className="products-wrapper">
            <button type="button" className="nav-item product-trigger">
              Restaurants
              <ChevronDown className="arrow" size={16} strokeWidth={2.5} />
            </button>
            <MegaMenu menuData={RestaurantMenuData} />
          </div>

          <Link
            to="/tiffincurry-website/pricing"
            className={`nav-item nav-link ${isActive("/tiffincurry-website/pricing") ? "active" : ""}`}
          >
            Pricing
          </Link>

          <Link
            to="/tiffincurry-website/about"
            className={`nav-item nav-link ${isActive("/tiffincurry-website/about") ? "active" : ""}`}
          >
            About
          </Link>
        </nav>

        <div className="nav-right">
          <button
            type="button"
            className="nav-icon-btn"
            onClick={() => setSigninOpen(true)}
            aria-label="Sign in"
          >
            <LogIn size={18} />
          </button>

          <Link to="/tiffincurry-website/demo" className="primary-btn nav-demo-btn">
            Contact Us
          </Link>

          <button
            type="button"
            className="hamburger nav-icon-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <details className="mobile-section">
            <summary>Solutions</summary>

            {Object.entries(solutionsMenuData).map(([sectionName, section]) => (
              <div key={sectionName} className="mobile-subsection">
                <div className="mobile-subtitle">{section.header?.title || sectionName}</div>

                {section.items?.map((item) => (
                  <Link key={item.title} to="/tiffincurry-website" className="mobile-link" onClick={closeMobileMenu}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </details>

          <details className="mobile-section">
            <summary>Restaurants</summary>

            {Object.entries(RestaurantMenuData).map(([sectionName, section]) => (
              <div key={sectionName} className="mobile-subsection">
                <div className="mobile-subtitle">{sectionName}</div>

                {section.groups?.map((group) => (
                  <div key={group.header}>
                    <div className="mobile-group-title">{group.header}</div>

                    {group.links.map((link) => (
                      <Link
                        key={link.title}
                        to={link.url}
                        className="mobile-link"
                        onClick={closeMobileMenu}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </details>

          <Link to="/tiffincurry-website/pricing" className="mobile-link-main" onClick={closeMobileMenu}>
            Pricing
          </Link>
          <Link to="/tiffincurry-website/about" className="mobile-link-main" onClick={closeMobileMenu}>
            About
          </Link>
          <button
            type="button"
            className="mobile-link-main mobile-signin-btn"
            onClick={() => {
              setSigninOpen(true);
              closeMobileMenu();
            }}
          >
            Sign in
          </button>
          <Link to="/tiffincurry-website/demo" className="primary-btn mobile-btn" onClick={closeMobileMenu}>
            Request Demo
          </Link>
        </div>
      )}

      <LoginModal open={signinOpen} setOpen={setSigninOpen} />
    </header>
  );
}
