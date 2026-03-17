import "./css/footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-logo">TiffinCurry</h3>
          <p className="footer-desc">
            Smart POS software built for modern restaurants.
            Manage billing, inventory, and operations with ease.
          </p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li>POS Billing</li>
            <li>Inventory</li>
            <li>Kitchen Display</li>
            <li>Reports</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/tiffincurry-website/about">About Us</Link></li>
            <li><Link to="/tiffincurry-website/demo">Contact Us</Link></li>
            <li><Link to="/tiffincurry-website/pricing">Pricing</Link></li>
            <li><Link to="/tiffincurry-website/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>support@tiffincurry.com</li>
            <li>+91 90000 00000</li>
            <li>Kolkata, India</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TiffinCurry. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer