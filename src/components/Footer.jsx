import "./css/footer.css"
import { Link } from "react-router-dom";
import { FaLinkedin,FaWhatsapp,FaEnvelope,FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-logo">TiffinCurry Pvt. Limited</h3>
          <p className="footer-desc">
            1C/28, 3rd Floor, 88-B G.T. Road, Bhadrakali <br/>Hooghly - 712232<br/> West Bengal<br/> India
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
            <li><a href="mailto:support@tiffincurry.com"><FaEnvelope /> support@tiffincurry.com</a></li>
            <li><a href="https://wa.me/919830469686" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> +91 98304 69686</a></li>
            <li>
              <a href="https://www.linkedin.com/in/tiffincurry/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} color="#0A66C2" />
              </a>
              <a href="https://www.instagram.com/tiffincurry/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                <FaInstagram size={22} color="#E4405F" />
              </a>
              <a href="https://www.youtube.com/@tiffincurry" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                <FaYoutube size={22} color="#FF0000" />
              </a>
            </li>
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