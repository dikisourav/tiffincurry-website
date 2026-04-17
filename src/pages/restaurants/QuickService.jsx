import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  BellRing,
  ChefHat,
  Clock3,
  PackageCheck,
  ReceiptText,
  Smartphone,
  TimerReset,
  Utensils,
  Zap,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useReveal from "../../hooks/useReveal";
import qsrImage from "../../assets/qsr_res.png";
import orderScreenshot from "../../assets/order_management_screenshot.jpeg";
import menuScreenshot from "../../assets/menu_screenshot.jpeg";
import billingMobile from "../../assets/billing_mobile.png";
import kotScreen from "../../assets/kot_screen.png";

const speedCards = [
  {
    icon: <Zap size={23} />,
    title: "Fast counter billing",
    text: "Punch repeat orders quickly, apply combos, accept payments, and print receipts without slowing the queue.",
  },
  {
    icon: <ChefHat size={23} />,
    title: "Kitchen-ready KOT",
    text: "Send every order to the right prep counter with fewer calls between counter staff and kitchen.",
  },
  {
    icon: <PackageCheck size={23} />,
    title: "Takeaway and pickup",
    text: "Manage dine-in tokens, takeaway parcels, pickup orders, and delivery handoffs from one flow.",
  },
];

const features = [
  {
    icon: <ReceiptText size={21} />,
    title: "Token-based orders",
    text: "Generate clear order numbers for customers, kitchen, and pickup counters.",
  },
  {
    icon: <TimerReset size={21} />,
    title: "Rush-hour ready",
    text: "Keep billing simple during lunch, evening snacks, and weekend surges.",
  },
  {
    icon: <BadgeIndianRupee size={21} />,
    title: "Combos and offers",
    text: "Create meal combos, fixed-price items, discounts, and quick add-ons.",
  },
  {
    icon: <Smartphone size={21} />,
    title: "Online order sync",
    text: "Bring aggregator, counter, and phone orders into one operational view.",
  },
  {
    icon: <BellRing size={21} />,
    title: "Ready order alerts",
    text: "Help staff call, pack, and hand over orders faster with clear status updates.",
  },
  {
    icon: <BarChart3 size={21} />,
    title: "Live sales tracking",
    text: "Track fast-moving items, counter performance, payment modes, and outlet trends.",
  },
];

const orderFlow = [
  "Customer orders",
  "Bill generated",
  "KOT routed",
  "Food packed",
  "Token served",
];

const businessTypes = [
  "Quick service restaurants",
  "Fast casual outlets",
  "Burger and sandwich shops",
  "Pizzerias",
  "Roll and momo counters",
  "Dessert and snack bars",
];

export default function QuickService() {
  const [dark, setDark] = useState(false);
  useReveal();

  return (
    <div className={dark ? "dark qsr-shell" : "light qsr-shell"}>
      <Navbar dark={dark} setDark={setDark} />

      <main className="qsr-page">
        <section className="qsr-hero reveal reveal-stagger">
          <div className="qsr-hero-copy">
            <div className="qsr-eyebrow">
              <Clock3 size={16} />
              POS for quick service restaurants
            </div>

            <h1>Serve more orders without letting the queue take over.</h1>

            <p>
              TiffinCurry helps QSRs, takeaway counters, cafes, snack shops, and
              fast casual outlets move faster with counter billing, KOT routing,
              menu control, token handling, and real-time reporting.
            </p>

            <div className="qsr-hero-actions">
              <Link to="/tiffincurry-website/demo" className="qsr-primary-btn">
                Request demo <ArrowRight size={18} />
              </Link>
              <Link to="/tiffincurry-website/pricing" className="qsr-secondary-btn">
                See pricing
              </Link>
            </div>

            <div className="qsr-trust-row">
              <span><Zap size={16} /> Rush-hour billing</span>
              <span><Utensils size={16} /> Counter to kitchen sync</span>
            </div>
          </div>

          <div className="qsr-hero-visual">
            <div className="qsr-image-card">
              <img src={qsrImage} alt="Quick service restaurant counter" />
            </div>

            <div className="qsr-floating-order">
              <span>Order #128</span>
              <strong>Ready in 06 min</strong>
            </div>

            <div className="qsr-floating-screen qsr-floating-screen-left">
              <img src={orderScreenshot} alt="Quick service order management screen" />
            </div>

            <div className="qsr-floating-screen qsr-floating-screen-right">
              <img src={billingMobile} alt="Mobile billing screen" />
            </div>
          </div>
        </section>

        <section className="qsr-speed-grid reveal reveal-stagger">
          {speedCards.map((card) => (
            <article className="qsr-speed-card" key={card.title}>
              <div className="qsr-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="qsr-flow reveal reveal-stagger">
          <div className="qsr-section-heading">
            <span>Queue-first workflow</span>
            <h2>From order punch to pickup counter, every step stays visible.</h2>
            <p>
              Keep the counter, kitchen, and customer pickup area aligned with a
              simple flow built for high-volume service.
            </p>
          </div>

          <div className="qsr-flow-track">
            {orderFlow.map((step, index) => (
              <div className="qsr-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="qsr-counter-section reveal reveal-stagger">
          <div className="qsr-counter-copy">
            <div className="qsr-section-heading qsr-section-heading-left">
              <span>Counter control</span>
              <h2>Built for outlets where every second matters.</h2>
              <p>
                Give your team a fast billing screen, clear kitchen routing, and
                real-time order status so service stays quick even during rush hours.
              </p>
            </div>

            <div className="qsr-check-list">
              <span>Quick item search and repeat-order punching</span>
              <span>Combo meals, add-ons, discounts, and parcel charges</span>
              <span>Daily sales, payment mode, and item movement reports</span>
            </div>
          </div>

          <div className="qsr-product-stack">
            <img src={menuScreenshot} alt="Menu management for QSR" />
            <img src={kotScreen} alt="Kitchen order screen for QSR" />
          </div>
        </section>

        <section className="qsr-features reveal reveal-stagger">
          <div className="qsr-section-heading">
            <span>What QSR teams need</span>
            <h2>Simple enough for the counter. Powerful enough for the owner.</h2>
          </div>

          <div className="qsr-feature-grid">
            {features.map((feature) => (
              <article className="qsr-feature-card" key={feature.title}>
                <div className="qsr-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qsr-types reveal reveal-stagger">
          <div className="qsr-section-heading qsr-section-heading-left">
            <span>Restaurant formats</span>
            <h2>Made for fast-moving food businesses.</h2>
          </div>

          <div className="qsr-type-list">
            {businessTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </section>

        <section className="qsr-cta reveal reveal-stagger">
          <span>Ready to speed up your counter?</span>
          <h2>Give your QSR a POS that keeps up with every rush.</h2>
          <Link to="/tiffincurry-website/demo" className="qsr-primary-btn qsr-cta-btn">
            Book a demo <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
