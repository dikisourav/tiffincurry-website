import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta reveal reveal-stagger">
      <div className="cta-shell">
        <h2>
          Make service feel <span className="cta-highlight-word">effortless</span>
        </h2>

        <p className="cta-support-line">Take your restaurant operations digital with TiffinCurry.</p>

        <Link to="/tiffincurry-website/demo" className="cta-primary-link">
          Get started
        </Link>
      </div>
    </section>
  );
}
