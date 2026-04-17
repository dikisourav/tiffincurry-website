import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta reveal reveal-stagger">
      <div className="cta-shell">
        <h2>
          Grow beyond <span className="cta-highlight-word">billing</span>
        </h2>

        <p className="cta-support-line">Take your restaurant digital with billing, customers, offers, kitchen, stock, and reports in one platform.</p>

        <Link to="/tiffincurry-website/demo" className="cta-primary-link">
          Get started
        </Link>
      </div>
    </section>
  );
}
