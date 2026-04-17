import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, ShieldCheck } from "lucide-react";
import logo from "../assets/logo.png";

const productLinks = [
  "POS Billing",
  "Kitchen Display",
  "Menu Control",
  "Inventory",
  "Reports",
];

const restaurantLinks = [
  { label: "Fine Dining", to: "/tiffincurry-website/restaurants/dine-in" },
  { label: "Quick Service", to: "/tiffincurry-website/restaurants/quick-service" },
  { label: "Cafe", to: "/tiffincurry-website/restaurants/cafe" },
  { label: "Bar & Lounge", to: "/tiffincurry-website/restaurants/bar-lounge" },
  { label: "Food Truck", to: "/tiffincurry-website/restaurants/food-truck" },
  { label: "Cloud Kitchen", to: "/tiffincurry-website/restaurants/cloud-kitchen" },
];

const companyLinks = [
  { label: "About", to: "/tiffincurry-website/about" },
  { label: "Pricing", to: "/tiffincurry-website/pricing" },
  { label: "Request demo", to: "/tiffincurry-website/demo" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand-col">
            <Link to="/tiffincurry-website" className="footer-brand">
              <img src={logo} alt="TiffinCurry" />
              <span>TiffinCurry Pvt. Limited</span>
            </Link>

            <div className="footer-address">
              <MapPin size={18} />
              <span>
                1C/28, 3rd Floor,<br />
                88-B G.T. Road, Bhadrakali,<br />
                Hooghly - 712232<br />
                West Bengal,<br />
                India
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              {productLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Restaurants</h4>
            <ul>
              {restaurantLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4>Contact</h4>
            <a href="mailto:support@tiffincurry.com" className="footer-contact-link">
              <FaEnvelope /> support@tiffincurry.com
            </a>
            <a
              href="https://wa.me/919830469686"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <FaWhatsapp /> +91 98304 69686
            </a>

            <div className="footer-socials" aria-label="TiffinCurry social links">
              <a href="https://www.linkedin.com/in/tiffincurry/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/tiffincurry/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@tiffincurry" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TiffinCurry. All rights reserved.</span>
          <span className="footer-bottom-note"><ShieldCheck size={15} /> Secure, reliable, restaurant-ready POS.</span>
        </div>
      </div>
    </footer>
  );
}
