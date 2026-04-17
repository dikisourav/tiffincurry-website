import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BadgeIndianRupee,
  ChefHat,
  ClipboardCheck,
  Gift,
  MessageCircle,
  ReceiptText,
  Repeat,
  Sparkles,
  Star,
  UserRoundPlus,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

const flywheelSteps = [
  { label: "Bill", text: "Capture order and customer", icon: <ReceiptText size={22} /> },
  { label: "Know", text: "Build customer history", icon: <UserRoundPlus size={22} /> },
  { label: "Offer", text: "Send WhatsApp campaigns", icon: <MessageCircle size={22} /> },
  { label: "Return", text: "Bring customers back", icon: <Repeat size={22} /> },
  { label: "Learn", text: "See what increases sales", icon: <BarChart3 size={22} /> },
];

const growthLevers = [
  {
    title: "Get more customers",
    text: "Collect customer details, run local offers, and reach people through WhatsApp instead of waiting for walk-ins only.",
    icon: <Users size={22} />,
  },
  {
    title: "Increase order value",
    text: "Promote combos, bestsellers, add-ons, and offers during billing so customers buy a little more.",
    icon: <BadgeIndianRupee size={22} />,
  },
  {
    title: "Bring customers back",
    text: "Know repeat customers, what they like, and when to send offers that make sense.",
    icon: <Repeat size={22} />,
  },
  {
    title: "Improve service speed",
    text: "Faster billing and clear kitchen orders reduce waiting time, mistakes, and customer irritation.",
    icon: <ChefHat size={22} />,
  },
  {
    title: "Use feedback early",
    text: "Find unhappy customers before they disappear and improve service where it matters.",
    icon: <Star size={22} />,
  },
  {
    title: "Know what works",
    text: "See which items, offers, time slots, and customer groups are actually helping sales grow.",
    icon: <BarChart3 size={22} />,
  },
];

const growthActions = [
  "Save customer details from bills and orders",
  "Create offers for regular customers and slow days",
  "Send updates and offers through WhatsApp",
  "Track repeat orders, bestsellers and busy hours",
  "Review daily sales before making decisions",
];

const proofRows = [
  { before: "Customers come, eat and leave.", after: "You build customer history and follow up." },
  { before: "Offers are based on guesswork.", after: "Offers are based on sales and repeat order data." },
  { before: "Owner sees only total sales.", after: "Owner sees items, time slots, payments and repeat customers." },
  { before: "Billing is only a transaction.", after: "Every bill becomes a chance for future business." },
];

export default function Growth() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark growth-page-shell" : "light growth-page-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="growth-page">
        <section className="growth-hero reveal reveal-stagger">
          <div className="growth-hero-copy">
            <div className="growth-eyebrow">
              <Sparkles size={16} />
              How TiffinCurry helps growth
            </div>

            <h1>Get more orders, bring customers back, and grow beyond billing.</h1>

            <p>
              TiffinCurry helps restaurants turn daily orders into customer data,
              offers, repeat visits, and clear sales decisions from one simple
              restaurant management platform.
            </p>

            <div className="growth-hero-actions">
              <Link to="/tiffincurry-website/demo" className="growth-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website" className="growth-secondary-btn">
                Back to home
              </Link>
            </div>
          </div>

          <div className="growth-flywheel" aria-label="TiffinCurry restaurant growth flywheel">
            <div className="growth-flywheel-center">
              <strong>Growth loop</strong>
              <span>inside TiffinCurry</span>
            </div>

            {flywheelSteps.map((step, index) => (
              <div className={`growth-flywheel-step growth-flywheel-step-${index + 1}`} key={step.label}>
                <div>{step.icon}</div>
                <strong>{step.label}</strong>
                <span>{step.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="growth-levers reveal reveal-stagger">
          <div className="growth-section-heading">
            <span>Growth areas</span>
            <h2>Simple ways TiffinCurry helps your restaurant earn more.</h2>
            <p>
              Growth does not come from one big feature. It comes from many small
              improvements working together every day.
            </p>
          </div>

          <div className="growth-lever-grid">
            {growthLevers.map((lever) => (
              <article className="growth-lever-card" key={lever.title}>
                <div className="growth-lever-icon">{lever.icon}</div>
                <h3>{lever.title}</h3>
                <p>{lever.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="growth-action-board reveal reveal-stagger">
          <div className="growth-action-copy">
            <div className="growth-section-heading growth-section-heading-left">
              <span>What you can do</span>
              <h2>Run growth activities without adding another complicated system.</h2>
              <p>
                Your billing counter already sees customers every day. TiffinCurry
                helps you use that data for offers, repeat visits, and better decisions.
              </p>
            </div>

            <div className="growth-action-list">
              {growthActions.map((action) => (
                <span key={action}><ClipboardCheck size={17} /> {action}</span>
              ))}
            </div>
          </div>

          <div className="growth-dashboard-mock">
            <div className="growth-dashboard-header">
              <span>Today&apos;s growth view</span>
              <strong>Live</strong>
            </div>
            <div className="growth-dashboard-metrics">
              <div><strong>42</strong><span>repeat customers</span></div>
              <div><strong>18%</strong><span>offer sales</span></div>
              <div><strong>₹74k</strong><span>today&apos;s sales</span></div>
            </div>
            <div className="growth-dashboard-bars">
              <span style={{ "--bar": "82%" }}>Combos sold</span>
              <span style={{ "--bar": "68%" }}>WhatsApp responses</span>
              <span style={{ "--bar": "74%" }}>Returning guests</span>
            </div>
          </div>
        </section>

        <section className="growth-before-after reveal reveal-stagger">
          <div className="growth-section-heading">
            <span>Before and after</span>
            <h2>What changes when growth is connected to daily billing?</h2>
          </div>

          <div className="growth-proof-table">
            {proofRows.map((row) => (
              <article className="growth-proof-row" key={row.before}>
                <div>
                  <span>Before</span>
                  <p>{row.before}</p>
                </div>
                <ArrowRight size={18} />
                <div>
                  <span>After</span>
                  <p>{row.after}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="growth-cta reveal reveal-stagger">
          <h2>Ready to grow beyond billing?</h2>
          <p>See how TiffinCurry can help your restaurant get more customers, increase sales, and bring people back.</p>
          <Link to="/tiffincurry-website/demo" className="growth-primary-btn">
            Request demo <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
