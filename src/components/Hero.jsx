import heroImage from "../assets/hero-bg.png";
import darkHeroImage from "../assets/hero-bg-dark.png";

// import "./css/Hero.css";
import { Link } from "react-router-dom";

export default function Hero({ dark }) {
  return (
    <section className="hero reveal">

      <div className="hero-text">
        <h1>
          Supercharge Your Restaurant with <span className="highlight-ribbon">TiffinCurry</span>
        </h1>

        <p>
          Fast billing. Works offline. Regional language support. Built for Indian restaurants.
        </p>

        <div className="hero-buttons">

  <div className="hero-cta">

    <Link to="/tiffincurry-website/demo">
      <button className="primary">
        Request Demo
      </button>
    </Link>

    <span className="cta-subtext">
      *Free setup consultation included
    </span>

  </div>
<div className="hero-cta"><button className="secondary">
    Watch Demo
  </button></div>
  

</div>
      </div>

      <div className="hero-image">
        {dark ? <img src={darkHeroImage} alt="Restaurant POS" /> : <img src={heroImage} alt="Restaurant POS" />}

      </div>

    </section>
  );
}