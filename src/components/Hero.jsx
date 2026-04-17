import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ChefHat,
  ReceiptText,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-bg.png";

const heroStats = [
  { value: "Offline", label: "billing ready" },
  { value: "GST", label: "receipt support" },
  { value: "Easy", label: "staff training" },
];

const heroFeatures = [
  { icon: <ReceiptText size={18} />, text: "Fast billing" },
  { icon: <ChefHat size={18} />, text: "Kitchen KOT" },
  { icon: <BarChart3 size={18} />, text: "Live reports" },
];

export default function Hero() {
  return (
    <section className="hero home-premium-hero reveal">
      <div className="home-hero-eyebrow">
        <BadgeCheck size={16} />
        Restaurant POS built for Indian operations
      </div>

      <div className="hero-text home-hero-copy">
        <h1>
          Supercharge Your Restaurant with <span className="hero-highlight-word">TiffinCurry</span>
        </h1>

        <p>
          TiffinCurry brings billing, table service, menu control, kitchen
          tickets, inventory, and reports into one fast POS platform for modern
          restaurants.
        </p>

        <div className="hero-buttons home-hero-actions">
          <div className="hero-cta">
            <Link to="/tiffincurry-website/demo" className="home-hero-primary">
              Request Demo <ArrowRight size={18} />
            </Link>
            <span className="cta-subtext">Free setup consultation included</span>
          </div>

          <Link to="/tiffincurry-website/restaurants/dine-in" className="home-hero-secondary">
            Explore dine-in POS
          </Link>
        </div>

        <div className="home-hero-trust">
          <span><WifiOff size={17} /> Works offline</span>
          <span><ShieldCheck size={17} /> Reliable local setup</span>
        </div>

        <div className="home-hero-stats" aria-label="TiffinCurry product highlights">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image home-hero-visual">
        <div className="home-visual-frame">
          <img src={heroImage} alt="Restaurant team using TiffinCurry POS" />
          <div className="home-visual-overlay" />
        </div>

        <div className="home-feature-stack">
          {heroFeatures.map((feature) => (
            <span key={feature.text}>
              {feature.icon}
              {feature.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
