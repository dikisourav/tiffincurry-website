import heroImage from "../assets/hero-bg.png";
// import "./css/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero reveal">

      <div className="hero-text">
        <h1>
          Supercharge Your Restaurant with <span>TiffinCurry</span>
        </h1>

        <p>
          All-in-one POS system designed to streamline billing,
          manage orders and run your restaurant smoothly.
        </p>

        <div className="hero-buttons">
          <Link to="/tiffincurry-website/demo"><button className="primary">Request Demo</button></Link>
          <button className="secondary">Watch Demo</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Restaurant POS" />
        
        {/* <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"/> */}

      </div>

    </section>
  );
}