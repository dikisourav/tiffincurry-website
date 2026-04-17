import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChefHat,
  ClipboardCheck,
  CreditCard,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

const plans = [
  {
    name: "TiffinCurry 2D",
    tag: "Starter counter setup",
    price: "INR 3,000",
    cycle: "for 3 years",
    note: "Best for small counters that need clean billing first.",
    features: [
      "POS billing and GST receipts",
      "Menu and item setup",
      "Basic reports",
      "Offline-ready billing flow",
      "Single terminal setup",
      "Printer integration",
    ],
  },
  {
    name: "TiffinCurry 3D",
    tag: "Most chosen",
    price: "INR 5,000",
    cycle: "per year",
    note: "For growing restaurants that need billing, tables, staff and customers connected.",
    popular: true,
    features: [
      "Everything in 2D",
      "Inventory tracking",
      "Discounts and offers",
      "Customer management",
      "HRM and role control",
      "Table and order management",
    ],
  },
  {
    name: "TiffinCurry 4D",
    tag: "Operations control",
    price: "INR 6,000",
    cycle: "per year",
    note: "For restaurants that need kitchen visibility and deeper operational control.",
    features: [
      "Everything in 3D",
      "Kitchen display and KOT",
      "Advanced reports",
      "Multi-terminal support",
      "Role-based access",
      "Faster service workflows",
    ],
  },
  {
    name: "TiffinCurry 5D",
    tag: "Multi-outlet ready",
    price: "INR 12,000",
    cycle: "per year",
    note: "For serious teams managing scale, outlets, integrations and owner-level reporting.",
    features: [
      "Everything in 4D",
      "Cloud sync",
      "Multi-outlet support",
      "Advanced inventory",
      "API and payment integration",
      "Dedicated support",
    ],
  },
];

const valuePoints = [
  { icon: <ReceiptText size={20} />, title: "Billing first", text: "Start with fast counter billing, GST receipts and payment clarity." },
  { icon: <ChefHat size={20} />, title: "Kitchen connected", text: "Move orders from counter or table to kitchen without noisy follow-ups." },
  { icon: <Users size={20} />, title: "Customers retained", text: "Use customer history, offers and repeat data to bring guests back." },
  { icon: <BarChart3 size={20} />, title: "Owner reports", text: "See sales, stock, staff, payments and busy hours in simple daily views." },
];

const included = [
  "Restaurant setup guidance",
  "Menu and item configuration support",
  "Billing and printer workflow assistance",
  "Basic team onboarding",
  "Upgrade path as your restaurant grows",
];

export default function Pricing() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark pricing-page-shell" : "light pricing-page-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="pricing-page">
        <section className="pricing-hero reveal reveal-stagger">
          <div className="pricing-hero-copy">
            <div className="pricing-eyebrow">
              <Sparkles size={16} />
              Pricing for Indian restaurant teams
            </div>

            <h1>Simple plans that grow with your restaurant.</h1>

            <p>
              Start with the billing and operations you need today, then move into
              kitchen control, inventory, customers, staff, reports and multi-outlet
              workflows as your restaurant grows.
            </p>

            <div className="pricing-hero-actions">
              <Link to="/tiffincurry-website/demo" className="pricing-primary-btn">
                Request pricing walkthrough <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/features/pos" className="pricing-secondary-btn">
                Explore billing
              </Link>
            </div>
          </div>

          <div className="pricing-hero-panel">
            <span>Most restaurants begin with</span>
            <strong>TiffinCurry 3D</strong>
            <p>Billing, discounts, customers, inventory, HRM and table/order control in one practical setup.</p>
            <div className="pricing-panel-strip">
              <small><Zap size={15} /> Fast setup</small>
              <small><ShieldCheck size={15} /> Upgrade-ready</small>
            </div>
          </div>
        </section>

        <section className="pricing-plan-section reveal reveal-stagger">
          <div className="pricing-section-heading">
            <span>Choose your operating depth</span>
            <h2>From first counter to serious restaurant control.</h2>
          </div>

          <div className="pricing-plan-grid">
            {plans.map((plan) => (
              <article className={`pricing-plan-card ${plan.popular ? "popular" : ""}`} key={plan.name}>
                {plan.popular && <div className="pricing-plan-badge"><Star size={14} /> Most popular</div>}
                <span>{plan.tag}</span>
                <h3>{plan.name}</h3>
                <div className="pricing-amount">
                  <strong>{plan.price}</strong>
                  <small>{plan.cycle}</small>
                </div>
                <p>{plan.note}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><Check size={16} /> {feature}</li>
                  ))}
                </ul>

                <Link to="/tiffincurry-website/demo" className={plan.popular ? "pricing-card-btn primary" : "pricing-card-btn"}>
                  Discuss this plan <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-value-board reveal reveal-stagger">
          <div className="pricing-section-heading pricing-section-heading-left">
            <span>What you are paying for</span>
            <h2>A restaurant management platform, not just a billing screen.</h2>
            <p>
              TiffinCurry pricing is designed around real daily operations: rush-hour
              billing, kitchen clarity, staff accountability, stock control, repeat
              customers and owner reports.
            </p>
          </div>

          <div className="pricing-value-grid">
            {valuePoints.map((point) => (
              <article className="pricing-value-card" key={point.title}>
                <div>{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-included reveal reveal-stagger">
          <div>
            <span>Included support</span>
            <h2>We help your team start cleanly.</h2>
          </div>

          <div className="pricing-included-list">
            {included.map((item) => (
              <span key={item}><BadgeCheck size={16} /> {item}</span>
            ))}
          </div>
        </section>

        <section className="pricing-cta reveal">
          <div>
            <span>Need help choosing?</span>
            <h2>Tell us your restaurant format. We will suggest the right setup.</h2>
          </div>
          <Link to="/tiffincurry-website/demo" className="pricing-primary-btn">
            Book a pricing call <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
